import React, { useState, useEffect } from 'react';

// Dynamically import all images from members folder
const imagesContext = require.context('../../assets/images/members', false, /\.(jpg|jpeg|png)$/);

const memberImages = imagesContext.keys().map((key) => ({
  src: imagesContext(key),
  name: key.replace('./', '').replace(/\.[^/.]+$/, ''),
}));

export default function FullMembers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [rotation, setRotation] = useState(0);

  // Show only a subset of images in the orbit (e.g., 8 images)
  const visibleCount = 8;
  const radius = 280;
  const centerImageSize = 320;
  const orbitImageSize = 120;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memberImages.length);
    setRotation((prev) => prev - (360 / visibleCount));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memberImages.length) % memberImages.length);
    setRotation((prev) => prev + (360 / visibleCount));
  };

  const goToSlide = (index) => {
    const diff = index - currentIndex;
    setCurrentIndex(index);
    setRotation((prev) => prev - diff * (360 / visibleCount));
  };

  // Get the visible images around the current selection
  const getVisibleImages = () => {
    const visible = [];
    const halfVisible = Math.floor(visibleCount / 2);
    
    for (let i = -halfVisible; i < halfVisible; i++) {
      if (i === 0) continue; // Skip center image
      const index = (currentIndex + i + memberImages.length) % memberImages.length;
      visible.push({ ...memberImages[index], originalIndex: index, position: i });
    }
    return visible;
  };

  // Navigation functions for quick jumps
  const jumpForward = () => {
    const newIndex = Math.min(currentIndex + 10, memberImages.length - 1);
    goToSlide(newIndex);
  };

  const jumpBackward = () => {
    const newIndex = Math.max(currentIndex - 10, 0);
    goToSlide(newIndex);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 flex-grow flex flex-col">
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-4">
            Full Members
          </h1>
          <p className="text-slate-400 text-lg">Meet our distinguished team members</p>
          <p className="text-slate-500 text-sm mt-2">
            Showing {currentIndex + 1} of {memberImages.length} members
          </p>
        </div>

        {/* Main content area - centered */}
        <div className="flex-grow flex flex-col justify-center items-center pb-12">
          {/* Carousel container */}
          <div className="relative w-[700px] h-[700px] flex items-center justify-center">
            
            {/* Center selected image */}
            <div className="absolute z-30 group">
              <div className="relative">
                {/* Glowing ring around center image */}
                <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-red-500 via-red-400 to-red-600 opacity-75 blur-lg animate-pulse"></div>
                
                <div className="relative bg-slate-800 rounded-full p-3 shadow-2xl">
                  <div 
                    className="rounded-full overflow-hidden border-4 border-red-500/50 shadow-xl"
                    style={{ width: centerImageSize, height: centerImageSize }}
                  >
                    <img
                      src={memberImages[currentIndex].src}
                      alt={memberImages[currentIndex].name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Center image info */}
                <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 text-center">
                  <h3 className="text-3xl font-bold text-black drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] mb-2">
                    {memberImages[currentIndex].name}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded mx-auto mb-2"></div>
                </div>
              </div>
            </div>

            {/* Orbiting preview images */}
            <div 
              className="absolute w-full h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {getVisibleImages().map((member, idx) => {
                const angle = (idx * 360) / (visibleCount - 1); // -1 because we skip center
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={`${member.originalIndex}-${idx}`}
                    className="absolute cursor-pointer transition-all duration-700 ease-in-out group opacity-70 hover:opacity-100 hover:scale-125 hover:z-20"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${-rotation}deg)`,
                    }}
                    onClick={() => goToSlide(member.originalIndex)}
                  >
                    <div className="relative">
                      {/* Hover glow effect */}
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-red-500/30 to-red-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                      
                      <div 
                        className="relative bg-slate-700 rounded-full p-1 shadow-lg border-2 border-slate-600 group-hover:border-red-400 transition-colors duration-300"
                        style={{ width: orbitImageSize + 8, height: orbitImageSize + 8 }}
                      >
                        <div 
                          className="rounded-full overflow-hidden"
                          style={{ width: orbitImageSize, height: orbitImageSize }}
                        >
                          <img
                            src={member.src}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      {/* Name tooltip on hover */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-black/90 text-black px-3 py-1 rounded-lg text-xs whitespace-nowrap shadow-lg">
                          {member.name}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Decorative orbit ring */}
            <div className="absolute inset-16 border border-red-500/10 rounded-full animate-spin-slow"></div>
          </div>
        </div>

        {/* Enhanced Controls */}
        <div className="flex flex-col items-center pb-6 space-y-4" style={{ marginBottom : '20%' }}>
          {/* Progress bar */}
          <div className="w-full max-w-2xl">
            <div className="flex justify-between text-sm text-slate-400 mb-2">
              <span>Progress</span>
              <span>{Math.round(((currentIndex + 1) / memberImages.length) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-black rounded-lg transition-colors duration-300 text-sm"
                style={{ width: `${((currentIndex + 1) / memberImages.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="flex items-center space-x-4 mb-4">
            <button
              onClick={() => goToSlide(0)}
              className="px-4 py-2 bg-slate-700 hover:bg-red-600 text-black rounded-lg transition-colors duration-300 text-sm"
              disabled={currentIndex === 0}
            >
              First
            </button>
            <button onClick={jumpBackward} className="px-4 py-2 bg-slate-700 hover:bg-red-600 text-black rounded-lg transition-colors duration-300 text-sm">⏪ -10</button>
              {/* Previous Arrow */}
            <button 
                onClick={prevSlide} 
                className="p-2 bg-gradient-to-r from-red-500 to-red-600 text-Black rounded-lg hover:from-red-600 hover:to-red-700 transition-colors"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg> Back
            </button>
            
            {/* Next Arrow */}
            <button 
                onClick={nextSlide} 
                className="p-2 bg-gradient-to-r from-red-500 to-red-600 text-Black rounded-lg hover:from-red-600 hover:to-red-700 transition-colors"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg> Next
            </button>
            <button onClick={jumpForward} className="px-4 py-2 bg-slate-700 hover:bg-red-600 text-black rounded-lg transition-colors duration-300 text-sm">+10 ⏩</button>
            <button
              onClick={() => goToSlide(memberImages.length - 1)}
              className="px-4 py-2 bg-slate-700 hover:bg-red-600 text-black rounded-lg transition-colors duration-300 text-sm"
              disabled={currentIndex === memberImages.length - 1}
            >
              Last
            </button>
          </div>

          {/* Auto-play toggle */}
          <div className="mb-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center space-x-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-black rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {isAutoPlaying ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                  </svg>
                  <span className="text-sm font-medium">Pause</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1" />
                  </svg>
                  <span className="text-sm font-medium">Resume</span>
                </>
              )}
            </button>
          </div>

          {/* Direct input */}
          <div className="flex items-center space-x-2">
            <label className="text-slate-400 text-sm">Go to member: </label>
            <input
              type="number"
              min="1"
              max={memberImages.length}
              value={currentIndex + 1}
              onChange={(e) => {
                const value = parseInt(e.target.value) - 1;
                if (value >= 0 && value < memberImages.length) {
                  goToSlide(value);
                }
              }}
              className="w-20 px-2 py-1 bg-slate-700 text-black rounded border border-slate-600 text-center text-sm"
            />
            <span className="text-slate-400 text-sm"> of {memberImages.length}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
      `}</style>
    </div>
  );
}