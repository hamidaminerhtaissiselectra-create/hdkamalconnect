/**
 * Composant Lightbox pour galerie d'images
 * Supporte clavier (flèches, échap) et swipe mobile
 */

import { useState, useCallback, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { Camera, ZoomIn } from "lucide-react";
import { 
  staggerContainer, 
  staggerItemScale,
  imageZoom,
  defaultViewport 
} from "@/lib/animations";

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  title?: string;
  description?: string;
  columns?: 2 | 3 | 4;
  aspectRatio?: "square" | "video" | "portrait";
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
};

export const ImageLightbox = ({
  images,
  title = "Galerie",
  description,
  columns = 3,
  aspectRatio = "video",
}: ImageLightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeLightbox]);

  // Prepare slides for lightbox
  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.caption || img.alt,
  }));

  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-secondary/40 via-background to-secondary/30 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-10"
          >
            <div className="badge-accent mb-4 inline-flex">
              <Camera className="w-4 h-4" />
              <span>Galerie</span>
            </div>
            <h2 className="section-title">{title}</h2>
            {description && (
              <p className="section-subtitle mt-3">{description}</p>
            )}
          </motion.div>

          {/* Image Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className={`grid ${gridCols[columns]} gap-4 md:gap-6 max-w-6xl mx-auto`}
          >
            {images.map((img, index) => (
              <motion.figure
                key={index}
                variants={staggerItemScale}
                className="group relative overflow-hidden rounded-2xl border bg-card shadow-lg cursor-pointer"
                onClick={() => openLightbox(index)}
                whileHover="hover"
                initial="rest"
              >
                <div className={`relative ${aspectRatioClasses[aspectRatio]} overflow-hidden`}>
                  <motion.img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    variants={imageZoom}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent flex flex-col items-center justify-end p-4"
                  >
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium text-sm drop-shadow-lg text-center">
                      {img.caption || img.alt}
                    </span>
                  </motion.div>
                </div>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        close={closeLightbox}
        index={photoIndex}
        slides={slides}
        plugins={[Zoom]}
        carousel={{
          finite: false,
          preload: 2,
        }}
        animation={{
          fade: 300,
          swipe: 300,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
        }}
      />
    </>
  );
};

export default ImageLightbox;
