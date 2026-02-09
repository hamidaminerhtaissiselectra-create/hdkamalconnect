import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  variant?: "default" | "gradient" | "cards" | "minimal";
  accentColor?: "primary" | "video" | "alarme" | "acces" | "domotique" | "reseau" | "maintenance";
  columns?: 2 | 3 | 4;
}

const accentColors = {
  primary: { bg: "from-primary to-accent", icon: "bg-primary/10 text-primary", border: "border-primary/20" },
  video: { bg: "from-blue-500 to-cyan-500", icon: "bg-blue-500/10 text-blue-600", border: "border-blue-500/20" },
  alarme: { bg: "from-red-500 to-rose-500", icon: "bg-red-500/10 text-red-600", border: "border-red-500/20" },
  acces: { bg: "from-green-500 to-emerald-500", icon: "bg-green-500/10 text-green-600", border: "border-green-500/20" },
  domotique: { bg: "from-amber-500 to-orange-500", icon: "bg-amber-500/10 text-amber-600", border: "border-amber-500/20" },
  reseau: { bg: "from-cyan-500 to-sky-500", icon: "bg-cyan-500/10 text-cyan-600", border: "border-cyan-500/20" },
  maintenance: { bg: "from-violet-500 to-purple-500", icon: "bg-violet-500/10 text-violet-600", border: "border-violet-500/20" },
};

const FeatureGrid = ({
  title,
  subtitle,
  features,
  variant = "default",
  accentColor = "primary",
  columns = 4,
}: FeatureGridProps) => {
  const colors = accentColors[accentColor] || accentColors.primary;
  const colsClass = columns === 2 ? "md:grid-cols-2" : columns === 3 ? "md:grid-cols-3" : "lg:grid-cols-4";

  const bgClass = variant === "gradient" 
    ? `bg-gradient-to-br from-secondary/50 via-background to-secondary/30` 
    : variant === "cards"
    ? "bg-secondary/30"
    : "";

  return (
    <section className={`section-padding ${bgClass} relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle mt-3">{subtitle}</p>}
          </div>
        </AnimatedSection>

        <div className={`grid grid-cols-1 ${colsClass} gap-6 md:gap-8 max-w-6xl mx-auto`}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            if (variant === "minimal") {
              return (
                <AnimatedSection key={index} animation="fade-up" delay={index * 80}>
                  <motion.div 
                    className="text-center p-6"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </motion.div>
                </AnimatedSection>
              );
            }

            return (
              <AnimatedSection key={index} animation="scale-in" delay={index * 80}>
                <motion.div 
                  className={`p-6 rounded-2xl bg-card border ${colors.border} shadow-lg hover:shadow-xl transition-all duration-300 h-full`}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
