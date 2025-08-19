import React, { useState, useEffect } from "react";

// Dynamically import all images from members folder
const imagesContext = require.context(
  "../../assets/images/members",
  false,
  /\.(jpg|jpeg|png)$/
);

const memberImages = imagesContext.keys().map((key) => ({
  src: imagesContext(key),
  name: key.replace("./", "").replace(/\.[^/.]+$/, ""),
}));

export default function FullMembers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [rotation, setRotation] = useState(0);

  const visibleCount = 8;

  // Responsive sizes (no Tailwind needed here)
  const containerSize =
    typeof window !== "undefined" && window.innerWidth < 768
      ? Math.min(window.innerWidth - 40, 400)
      : 700;
  const radius = containerSize * 0.4;
  const centerImageSize = containerSize * 0.45;
  const orbitImageSize = containerSize * 0.17;

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memberImages.length);
    setRotation((prev) => prev - 360 / visibleCount);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memberImages.length) % memberImages.length);
    setRotation((prev) => prev + 360 / visibleCount);
  };

  const goToSlide = (index) => {
    const diff = index - currentIndex;
    setCurrentIndex(index);
    setRotation((prev) => prev - diff * (360 / visibleCount));
  };

  const getVisibleImages = () => {
    const visible = [];
    const halfVisible = Math.floor(visibleCount / 2);
    for (let i = -halfVisible; i < halfVisible; i++) {
      if (i === 0) continue;
      const index = (currentIndex + i + memberImages.length) % memberImages.length;
      visible.push({ ...memberImages[index], originalIndex: index, position: i });
    }
    return visible;
  };

  const jumpForward = () =>
    goToSlide(Math.min(currentIndex + 10, memberImages.length - 1));
  const jumpBackward = () => goToSlide(Math.max(currentIndex - 10, 0));

  // Small helper to compose button classes with disabled opacity
  const btn = (extra = "", disabled = false) =>
    `btn ${extra}${disabled ? " opacity-40" : ""}`;

  const percent = Math.round(((currentIndex + 1) / memberImages.length) * 100);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <div className="container mx-auto px-4 flex flex-col flex-grow">

        {/* Header */}
        <header className="text-center py-6">
          <h1 className="text-3xl font-bold text-red-700 mb-2">Life Members</h1>
          <p className="text-gray-200">Meet our distinguished team members</p>
          <p className="text-gray-600 text-sm mt-2">
            Showing {currentIndex + 1} of {memberImages.length} members
          </p>
        </header>

        {/* Carousel */}
        <main className="flex-grow flex justify-center items-center">
          <div
            className="relative flex items-center justify-center"
            style={{ width: containerSize, height: containerSize }}
          >
            {/* Center image + glow */}
            <div className="absolute z-50 flex flex-col items-center">
              <div className="relative">
                {/* soft glow using inline style (no -inset-* in main.css) */}
                <div
                  className="absolute rounded-full opacity-40"
                  style={{
                    top: -24,
                    left: -24,
                    right: -24,
                    bottom: -24,
                    backgroundColor: "var(--primary-color)",
                    filter: "blur(12px)",
                  }}
                />
                <div
                  className="relative rounded-full border-2 border-red-700 shadow-xl overflow-hidden"
                  style={{ width: centerImageSize, height: centerImageSize }}
                >
                  <img
                    src={memberImages[currentIndex].src}
                    alt={memberImages[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {memberImages[currentIndex].name}
              </h3>
            </div>

            {/* Orbiting images */}
            <div
              className="absolute w-full h-full transition"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {getVisibleImages().map((member, idx) => {
                const angle = (idx * 360) / (visibleCount - 1);
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={`${member.originalIndex}-${idx}`}
                    className="absolute cursor-pointer opacity-80 hover:opacity-100 transition"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${-rotation}deg)`,
                    }}
                    onClick={() => goToSlide(member.originalIndex)}
                  >
                    <div
                      className="rounded-full border-2 border-white overflow-hidden"
                      style={{ width: orbitImageSize, height: orbitImageSize }}
                    >
                      <img
                        src={member.src}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        title={member.name}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Decorative orbit ring */}
            <div
              className="absolute rounded-full animate-spin-slow"
              style={{
                left: 24,
                top: 24,
                right: 24,
                bottom: 24,
                border: "1px solid rgba(185, 28, 28, 0.15)", // red-700 @ ~15%
              }}
            />
          </div>
        </main>

        {/* Controls */}
        <section className="flex flex-col items-center mb-8 mt-10">

          {/* Progress bar (uses classes from main.css) */}
          <div className="w-full max-w-2xl mb-4">
            <div className="flex justify-between text-sm text-gray-200 mb-2">
              <span>Progress</span>
              <span>{percent}%</span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => goToSlide(0)}
              disabled={currentIndex === 0}
              className={btn("bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition", currentIndex === 0)}
            >
              First
            </button>

            <button
              onClick={jumpBackward}
              className={btn("bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition")}
            >
              ⏪ -10
            </button>

            <button
              onClick={prevSlide}
              className="btn btn-primary px-4 py-2 rounded transition"
            >
              ← Back
            </button>

            <button
              onClick={nextSlide}
              className="btn btn-primary px-4 py-2 rounded transition"
            >
              Next →
            </button>

            <button
              onClick={jumpForward}
              className={btn("bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition")}
            >
              +10 ⏩
            </button>

            <button
              onClick={() => goToSlide(memberImages.length - 1)}
              disabled={currentIndex === memberImages.length - 1}
              className={btn(
                "bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition",
                currentIndex === memberImages.length - 1
              )}
            >
              Last
            </button>
          </div>

          {/* Auto-play toggle */}
          <div className="mt-2 mb-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="btn bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900 transition"
            >
              {isAutoPlaying ? "Pause" : "Resume"}
            </button>
          </div>

          {/* Direct input */}
          <div className="flex items-center space-x-4 mt-4">
            <label className="text-gray-200 text-sm">Go to member:</label>
            <input
              type="number"
              min="1"
              max={memberImages.length}
              value={currentIndex + 1}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10) - 1;
                if (value >= 0 && value < memberImages.length) goToSlide(value);
              }}
              className="w-18 px-4 py-2 bg-gray-800 text-white rounded border-2 border-white focus:outline-none"
              style={{ maxWidth: 80 }}
            />
            <span className="text-gray-200 text-sm">
              of {memberImages.length}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
