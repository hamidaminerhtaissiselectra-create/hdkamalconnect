import { useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, ZoomIn } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { 
  staggerContainer, 
  staggerItemScale,
  imageZoom,
  defaultViewport 
} from "@/lib/animations";

type ServiceShowcaseProps = {
  title?: string;
  description?: string;
  images: Array<{ src: string; alt: string; caption?: string }>;
  layout?: "grid" | "masonry" | "single";
  columns?: 2 | 3 | 4;
};

type ShowcaseImage = { src: string; alt: string; caption?: string };

type ShowcaseCardProps = {
  img: ShowcaseImage;
  idx: number;
  onOpen: (index: number) => void;
};

const ShowcaseCard = ({ img, idx, onOpen }: ShowcaseCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle scroll parallax
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.figure
      variants={staggerItemScale}
      className="group overflow-hidden rounded-2xl border bg-card shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
      onClick={() => onOpen(idx)}
      whileHover="hover"
      initial="rest"
    >
      <div ref={containerRef} className="relative h-48 md:h-56 overflow-hidden">
        <motion.img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          style={{ y }}
          variants={imageZoom}
          className="h-[115%] w-full object-cover will-change-transform"
        />
        {/* Overlay on hover with zoom icon */}
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
  );
};

const ServiceShowcase = ({
  title = "Aperçu de Nos Réalisations",
  description = "Découvrez nos installations professionnelles et le matériel de qualité que nous déployons.",
  images,
  layout = "grid",
  columns = 3,
}: ServiceShowcaseProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

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

  // Single featured image layout
  if (layout === "single" && images.length > 0) {
    const featured = images[0];
    return (
      <>
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <motion.figure
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.6 }}
              className="group overflow-hidden rounded-2xl border bg-card shadow-xl max-w-4xl mx-auto cursor-pointer"
              onClick={() => openLightbox(0)}
            >
              <FeaturedImage img={featured} />
            </motion.figure>
          </div>
        </section>
        
        <Lightbox
          open={isOpen}
          close={closeLightbox}
          index={photoIndex}
          slides={slides}
          plugins={[Zoom]}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.95)" } }}
        />
      </>
    );
  }

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-secondary/40 via-background to-secondary/30 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
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
            {description && <p className="section-subtitle mt-3">{description}</p>}
          </motion.div>

          {/* Grid layout with lightbox */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className={`grid ${gridCols[columns]} gap-6 max-w-6xl mx-auto`}
          >
            {images.slice(0, columns === 4 ? 4 : 3).map((img, idx) => (
              <ShowcaseCard key={idx} img={img} idx={idx} onOpen={openLightbox} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox with zoom, keyboard nav and swipe */}
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

type FeaturedImageProps = {
  img: ShowcaseImage;
};

const FeaturedImage = ({ img }: FeaturedImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <div ref={containerRef} className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
      <motion.img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        style={{ y }}
        className="h-[115%] w-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      
      {/* Zoom indicator on hover */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-white" />
        </div>
      </motion.div>
      
      {img.caption && (
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <p className="text-foreground font-medium drop-shadow-lg">{img.caption}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceShowcase;