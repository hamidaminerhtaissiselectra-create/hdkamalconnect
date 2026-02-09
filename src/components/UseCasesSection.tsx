import { motion } from "framer-motion";
import { LucideIcon, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface UseCase {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  image?: string;
}

interface UseCasesSectionProps {
  title: string;
  subtitle?: string;
  useCases: UseCase[];
  variant?: "cards" | "alternating" | "grid";
  accentColor?: "primary" | "video" | "alarme" | "acces" | "domotique" | "reseau" | "maintenance" | "antenne" | "portail" | "installation" | "depannage" | "location";
}

const accentGradients = {
  primary: "from-primary to-accent",
  video: "from-blue-500 to-cyan-600",
  alarme: "from-red-500 to-rose-600",
  acces: "from-green-500 to-emerald-600",
  domotique: "from-amber-400 to-orange-500",
  reseau: "from-cyan-500 to-sky-600",
  maintenance: "from-violet-500 to-purple-600",
  antenne: "from-orange-500 to-amber-600",
  portail: "from-pink-500 to-rose-600",
  installation: "from-teal-500 to-emerald-600",
  depannage: "from-rose-500 to-red-600",
  location: "from-sky-500 to-blue-600",
};

const UseCasesSection = ({
  title,
  subtitle,
  useCases,
  variant = "cards",
  accentColor = "primary",
}: UseCasesSectionProps) => {
  const gradientClass = accentGradients[accentColor] || accentGradients.primary;

  return (
    <section className="section-padding bg-gradient-to-br from-secondary/40 via-background to-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle mt-3">{subtitle}</p>}
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <AnimatedSection 
                key={index} 
                animation={index % 2 === 0 ? "fade-right" : "fade-left"} 
                delay={index * 100}
              >
                <motion.div 
                  className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full group"
                  whileHover={{ y: -5 }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{useCase.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">{useCase.description}</p>

                  {/* Features list */}
                  {useCase.features && useCase.features.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {useCase.features.map((feature, i) => (
                        <motion.span 
                          key={i} 
                          className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-gradient-to-r ${gradientClass} bg-opacity-10 text-foreground rounded-full border border-primary/10`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <CheckCircle className="w-3 h-3" />
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
