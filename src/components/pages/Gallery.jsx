// Gallery.jsx
import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Simulating API call to fetch gallery categories
    setTimeout(() => {
      const galleryData = [
        { id: 1, title: "Annual Literary Festival 2024", date: "April 2024", cover: "/api/placeholder/800/600" },
        { id: 2, title: "Poetry Workshop Series", date: "May 2024", cover: "/api/placeholder/800/600" },
        { id: 3, title: "Nepali New Year Celebration", date: "January 2025", cover: "/api/placeholder/800/600" },
        { id: 4, title: "Book Launch: 'Echoes of Himalayas'", date: "December 2024", cover: "/api/placeholder/800/600" },
        { id: 5, title: "Winter Poetry Gathering", date: "February 2025", cover: "/api/placeholder/800/600" },
        { id: 6, title: "Literary Translation Workshop", date: "November 2024", cover: "/api/placeholder/800/600" }
      ];
      
      setGalleries(galleryData);
      setIsLoading(false);
    }, 1000);
  }, []);

  const fetchGalleryPhotos = (galleryId) => {
    setIsLoading(true);
    setSelectedGallery(galleries.find(g => g.id === galleryId));
    
    // Simulate API call to fetch photos for a specific gallery
    setTimeout(() => {
      // Generate different placeholder images for each gallery
      const generatePhotos = (count, galleryId) => {
        return Array.from({ length: count }, (_, index) => ({
          id: index + 1,
          title: `Photo ${index + 1}`,
          description: `Description for photo ${index + 1} from gallery ${galleryId}`,
          src: `/api/placeholder/800/600?text=Gallery${galleryId}_Photo${index + 1}`,
          thumbnail: `/api/placeholder/300/200?text=Gallery${galleryId}_Photo${index + 1}`
        }));
      };
      
      setPhotos(generatePhotos(12, galleryId));
      setIsLoading(false);
    }, 800);
  };

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2 text-gray-800 text-center">Photo Gallery</h1>
        <p className="text-xl text-gray-600 mb-10 text-center">Moments captured from our events and activities</p>
        
        {isLoading && !selectedGallery ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-700"></div>
          </div>
        ) : (
          <>
            {!selectedGallery ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleries.map((gallery) => (
                  <div 
                    key={gallery.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                    onClick={() => fetchGalleryPhotos(gallery.id)}
                  >
                    <div className="relative h-64">
                      <img src={gallery.cover} alt={gallery.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black opacity-20 hover:opacity-40 transition-opacity"></div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-2 text-gray-800">{gallery.title}</h2>
                      <p className="text-gray-600">{gallery.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="mb-8 flex items-center">
                  <button 
                    onClick={() => setSelectedGallery(null)} 
                    className="flex items-center text-red-700 hover:text-red-800 font-semibold"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to All Galleries
                  </button>
                </div>
                
                <h2 className="text-3xl font-bold mb-2 text-gray-800">{selectedGallery.title}</h2>
                <p className="text-lg text-gray-600 mb-8">{selectedGallery.date}</p>
                
                {isLoading ? (
                  <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-700"></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {photos.map((photo, index) => (
                      <div 
                        key={photo.id} 
                        className="cursor-pointer overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
                        onClick={() => openLightbox(index)}
                      >
                        <img 
                          src={photo.thumbnail} 
                          alt={photo.title} 
                          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        )}
        
        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="absolute top-4 right-4">
              <button
                onClick={closeLightbox}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <button
              onClick={goToPrevious}
              className="absolute left-4 text-white hover:text-gray-300 focus:outline-none"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="max-w-4xl max-h-screen">
              <img
                src={photos[currentImage].src}
                alt={photos[currentImage].title}
                className="max-h-[85vh] mx-auto"
              />
              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-semibold">{photos[currentImage].title}</h3>
                <p className="text-gray-300">{photos[currentImage].description}</p>
              </div>
            </div>
            
            <button
              onClick={goToNext}
              className="absolute right-4 text-white hover:text-gray-300 focus:outline-none"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;