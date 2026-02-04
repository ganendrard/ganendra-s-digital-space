import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";

const photos = [
  { id: 1, src: photo1, alt: "Foto kegiatan" },
  { id: 2, src: photo2, alt: "Foto di Masjid Al-Falah" },
  { id: 3, src: photo3, alt: "Foto studio" },
];

const GallerySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === photos.length - 1 ? 0 : selectedPhoto + 1);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-4">Galeri</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent mx-auto mb-8 sm:mb-12" />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setSelectedPhoto(index)}
                className="aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-secondary hover:opacity-90 transition-all duration-300 hover:scale-[1.02] group relative touch-manipulation"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-secondary hover:bg-accent transition-colors touch-manipulation z-10"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          <button
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary hover:bg-accent transition-colors touch-manipulation z-10"
            onClick={handlePrev}
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          <button
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary hover:bg-accent transition-colors touch-manipulation z-10"
            onClick={handleNext}
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          <div className="max-w-4xl max-h-[85vh] w-full px-10 sm:px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              className="w-full h-full object-contain rounded-lg sm:rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
