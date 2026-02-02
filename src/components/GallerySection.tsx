import { useState } from "react";
import { X } from "lucide-react";

// Placeholder photos - replace with actual photos
const photos = [
  { id: 1, alt: "Photo 1" },
  { id: 2, alt: "Photo 2" },
  { id: 3, alt: "Photo 3" },
  { id: 4, alt: "Photo 4" },
  { id: 5, alt: "Photo 5" },
  { id: 6, alt: "Photo 6" },
];

const GallerySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-4">Galeri</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent mx-auto mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setSelectedPhoto(index)}
                className="aspect-square rounded-xl overflow-hidden bg-secondary hover:opacity-90 transition-all duration-300 hover:scale-[1.02] group relative"
              >
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-2xl font-serif">{photo.id}</span>
                    </div>
                    <span className="text-sm">Foto {photo.id}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Upload foto-foto Anda untuk ditampilkan di galeri ini
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={24} />
          </button>
          <div className="max-w-4xl w-full aspect-video bg-secondary rounded-xl flex items-center justify-center">
            <span className="text-muted-foreground">Foto {photos[selectedPhoto].id}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
