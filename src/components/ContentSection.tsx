import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { fadeInLeft, fadeInRight, defaultViewport } from "@/lib/animations";

interface ContentSectionProps {
  title: string;
  content: ReactNode;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  backgroundColor?: "default" | "secondary" | "gradient";
  delay?: number;
  badge?: string;
  badgeIcon?: React.ReactNode;
  accentColor?: "primary" | "accent" | "video" | "alarme" | "acces" | "domotique" | "reseau" | "maintenance" | "antenne" | "portail" | "depannage" | "location" | "installation";
}

const accentColorClasses = {
  primary: "from-primary to-accent",
  accent: "from-accent to-primary",
  video: "from-blue-500 to-blue-700",
  alarme: "from-red-500 to-red-700",
  acces: "from-green-500 to-green-700",
  domotique: "from-amber-400 to-amber-600",
  reseau: "from-cyan-500 to-cyan-700",
  maintenance: "from-violet-500 to-violet-700",
  antenne: "from-orange-500 to-orange-700",
  portail: "from-pink-500 to-pink-700",
  depannage: "from-orange-500 to-red-500",
  location: "from-sky-500 to-blue-600",
  installation: "from-emerald-500 to-green-600",
};

const ContentSection = ({
  title,
  content,
  image,
  imageAlt,
  imagePosition = "right",
  backgroundColor = "default",
  delay = 0,
  badge,
  badgeIcon,
  accentColor = "primary",
}: ContentSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Micro-parallax on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  // Subtle parallax effect (±15px)
  const imageY = useTransform(scrollYProgress, [0, 1], [15, -15]);
  
  const bgClass = backgroundColor === "secondary" 
    ? "bg-secondary/30" 
    : backgroundColor === "gradient" 
    ? "bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" 
    : "";
  const isImageLeft = imagePosition === "left";
  const gradientClass = accentColorClasses[accentColor] || accentColorClasses.primary;

  const ImageBlock = () => (
    <motion.div 
      ref={containerRef}
      className="relative rounded-3xl overflow-hidden shadow-2xl group"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={isImageLeft ? fadeInRight : fadeInLeft}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative corner accent */}
      <div className={`absolute ${isImageLeft ? '-top-4 -left-4' : '-top-4 -right-4'} w-24 h-24 bg-gradient-to-br ${gradientClass} rounded-2xl opacity-20 blur-xl`} />
      <div className={`absolute ${isImageLeft ? '-bottom-4 -right-4' : '-bottom-4 -left-4'} w-32 h-32 bg-gradient-to-br ${gradientClass} rounded-2xl opacity-20 blur-xl`} />
      
      {/* Image with micro-parallax */}
      <motion.div className="overflow-hidden">
        <motion.img
          src={image}
          alt={imageAlt}
          style={{ y: imageY }}
          className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-700 group-hover:scale-105 will-change-transform"
          loading="lazy"
        />
      </motion.div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-3xl ring-2 ring-inset ring-white/10 pointer-events-none" />
    </motion.div>
  );

  return (
    <section className={`section-padding ${bgClass} relative overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image on left */}
          {isImageLeft && (
            <AnimatedSection animation="fade-right" delay={delay}>
              <ImageBlock />
            </AnimatedSection>
          )}

          {/* Text Content */}
          <AnimatedSection
            animation={isImageLeft ? "fade-left" : "fade-right"}
            delay={delay + 100}
          >
            <div className="space-y-6">
              {badge && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={defaultViewport}
                  transition={{ delay: delay / 1000, duration: 0.5 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradientClass} bg-opacity-10 border border-primary/20 shadow-lg`}
                  style={{ background: `linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))` }}
                >
                  {badgeIcon && <span className="text-primary">{badgeIcon}</span>}
                  <span className="text-sm font-semibold text-primary">{badge}</span>
                </motion.div>
              )}
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                <span className="relative">
                  {title}
                  <span className={`absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r ${gradientClass} rounded-full`} />
                </span>
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 leading-relaxed">
                {content}
              </div>
            </div>
          </AnimatedSection>

          {/* Image on right */}
          {!isImageLeft && (
            <AnimatedSection animation="fade-left" delay={delay}>
              <ImageBlock />
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
