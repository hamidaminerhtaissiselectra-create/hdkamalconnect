import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
}

interface ColoredStatsSectionProps {
  title?: string;
  subtitle?: string;
  stats: StatItem[];
  variant?: "primary" | "accent" | "video" | "alarme" | "acces" | "domotique" | "reseau" | "maintenance" | "gradient" | "antenne" | "portail" | "installation" | "depannage" | "location";
}

const variantStyles = {
  primary: "from-primary via-primary/90 to-primary/80",
  accent: "from-accent via-accent/90 to-accent/80",
  video: "from-blue-600 via-blue-500 to-cyan-500",
  alarme: "from-red-600 via-red-500 to-rose-500",
  acces: "from-emerald-600 via-green-500 to-teal-500",
  domotique: "from-amber-500 via-yellow-500 to-orange-400",
  reseau: "from-cyan-600 via-sky-500 to-blue-500",
  maintenance: "from-violet-600 via-purple-500 to-indigo-500",
  gradient: "from-primary via-accent to-primary",
  antenne: "from-orange-600 via-orange-500 to-amber-500",
  portail: "from-pink-600 via-pink-500 to-rose-500",
  installation: "from-teal-600 via-teal-500 to-emerald-500",
  depannage: "from-rose-600 via-rose-500 to-red-500",
  location: "from-sky-600 via-sky-500 to-blue-500",
};

const ColoredStatsSection = ({
  title,
  subtitle,
  stats,
  variant = "primary",
}: ColoredStatsSectionProps) => {
  const gradientClass = variantStyles[variant] || variantStyles.primary;

  return (
    <section className={`py-16 md:py-20 bg-gradient-to-r ${gradientClass} relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.05, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                className="text-white/80 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        <div className={`grid grid-cols-2 ${stats.length >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-' + stats.length} gap-6 md:gap-8 max-w-5xl mx-auto`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {Icon && (
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                )}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-semibold text-white/90 mb-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-xs md:text-sm text-white/70">
                    {stat.description}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ColoredStatsSection;
