import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'parallax';
  delay?: number;
  threshold?: number;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Effet de parallaxe optionnel
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const variants = {
    'fade-up': { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } },
    'fade-left': { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 } },
    'fade-right': { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 } },
    'scale-in': { initial: { opacity: 0, scale: 0.95 }, whileInView: { opacity: 1, scale: 1 } },
    'parallax': { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
  };

  const selectedVariant = variants[animation === 'parallax' ? 'parallax' : animation] || variants['fade-up'];

  return (
    <motion.div
      ref={ref}
      initial={selectedVariant.initial}
      whileInView={selectedVariant.whileInView}
      style={animation === 'parallax' ? { y: yParallax } : {}}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay / 1000, // Conversion ms en s
        ease: [0.21, 0.47, 0.32, 0.98] // Cubic bezier pour une fluidité premium
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
