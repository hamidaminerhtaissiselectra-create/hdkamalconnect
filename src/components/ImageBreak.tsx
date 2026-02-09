import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, defaultViewport } from "@/lib/animations";

interface ImageBreakProps {
  image: string;
  alt: string;
  caption?: string;
  className?: string;
  accentColor?: "primary" | "video" | "alarme" | "acces" | "domotique" | "reseau" | "maintenance" | "antenne" | "portail" | "depannage" | "location" | "installation";
}

const accentGradients = {
  primary: "from-primary/60 to-accent/60",
  video: "from-blue-600/60 to-blue-800/60",
  alarme: "from-red-600/60 to-red-800/60",
  acces: "from-green-600/60 to-green-800/60",
  domotique: "from-amber-500/60 to-amber-700/60",
  reseau: "from-cyan-600/60 to-cyan-800/60",
  maintenance: "from-violet-600/60 to-violet-800/60",
  antenne: "from-orange-600/60 to-orange-800/60",
  portail: "from-pink-600/60 to-pink-800/60",
  depannage: "from-orange-500/60 to-red-600/60",
  location: "from-sky-600/60 to-blue-700/60",
  installation: "from-emerald-600/60 to-green-700/60",
};

const ImageBreak = ({ 
  image, 
  alt, 
  caption, 
  className = "",
  accentColor = "primary" 
}: ImageBreakProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientClass = accentGradients[accentColor] || accentGradients.primary;
  
  // Micro-parallax on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  // Subtle parallax effect (±25px for more impact on full-width)
  const imageY = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);
  
  return (
    <motion.section 
      ref={containerRef}
      className={`py-8 md:py-12 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/30 group">
          {/* Decorative corner accents */}
          <div className={`absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br ${gradientClass} rounded-full opacity-30 blur-2xl pointer-events-none z-10`} />
          <div className={`absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-br ${gradientClass} rounded-full opacity-30 blur-2xl pointer-events-none z-10`} />
          
          {/* Image with micro-parallax */}
          <div className="overflow-hidden h-72 md:h-96 lg:h-[28rem]">
            <motion.img
              src={image}
              alt={alt}
              loading="lazy"
              style={{ y: imageY, scale: imageScale }}
              className="w-full h-[120%] object-cover will-change-transform"
            />
          </div>
          
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${gradientClass} opacity-40 pointer-events-none`} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
          
          {/* Inner border glow */}
          <div className="absolute inset-0 rounded-3xl ring-2 ring-inset ring-white/10 pointer-events-none" />
          
          {caption && (
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-background/80 backdrop-blur-sm rounded-xl px-4 py-3 inline-block border border-border/50">
                <p className="text-foreground font-semibold text-sm md:text-base">
                  {caption}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ImageBreak;
