import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
}

interface LightStatsSectionProps {
  title?: string;
  subtitle?: string;
  stats: StatItem[];
  variant?: 
    | "primary" 
    | "video" 
    | "alarme" 
    | "acces" 
    | "domotique" 
    | "reseau" 
    | "maintenance"
    | "antenne"
    | "portail"
    | "installation"
    | "depannage"
    | "location";
}

// Couleurs par variant pour les accents (fond clair avec couleurs d'accent)
const variantColors = {
  primary: {
    bg: "from-primary/5 to-accent/5",
    card: "from-primary/10 to-primary/5 border-primary/20",
    value: "text-primary",
    icon: "text-primary bg-primary/10",
  },
  video: {
    bg: "from-blue-500/5 to-cyan-500/5",
    card: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
    value: "text-blue-600",
    icon: "text-blue-600 bg-blue-500/10",
  },
  alarme: {
    bg: "from-red-500/5 to-rose-500/5",
    card: "from-red-500/10 to-rose-500/10 border-red-500/20",
    value: "text-red-600",
    icon: "text-red-600 bg-red-500/10",
  },
  acces: {
    bg: "from-emerald-500/5 to-teal-500/5",
    card: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
    value: "text-emerald-600",
    icon: "text-emerald-600 bg-emerald-500/10",
  },
  domotique: {
    bg: "from-amber-500/5 to-orange-500/5",
    card: "from-amber-500/10 to-orange-500/10 border-amber-500/20",
    value: "text-amber-600",
    icon: "text-amber-600 bg-amber-500/10",
  },
  reseau: {
    bg: "from-cyan-500/5 to-blue-500/5",
    card: "from-cyan-500/10 to-blue-500/10 border-cyan-500/20",
    value: "text-cyan-600",
    icon: "text-cyan-600 bg-cyan-500/10",
  },
  maintenance: {
    bg: "from-violet-500/5 to-purple-500/5",
    card: "from-violet-500/10 to-purple-500/10 border-violet-500/20",
    value: "text-violet-600",
    icon: "text-violet-600 bg-violet-500/10",
  },
  antenne: {
    bg: "from-orange-500/5 to-amber-500/5",
    card: "from-orange-500/10 to-amber-500/10 border-orange-500/20",
    value: "text-orange-600",
    icon: "text-orange-600 bg-orange-500/10",
  },
  portail: {
    bg: "from-pink-500/5 to-rose-500/5",
    card: "from-pink-500/10 to-rose-500/10 border-pink-500/20",
    value: "text-pink-600",
    icon: "text-pink-600 bg-pink-500/10",
  },
  installation: {
    bg: "from-teal-500/5 to-emerald-500/5",
    card: "from-teal-500/10 to-emerald-500/10 border-teal-500/20",
    value: "text-teal-600",
    icon: "text-teal-600 bg-teal-500/10",
  },
  depannage: {
    bg: "from-rose-500/5 to-red-500/5",
    card: "from-rose-500/10 to-red-500/10 border-rose-500/20",
    value: "text-rose-600",
    icon: "text-rose-600 bg-rose-500/10",
  },
  location: {
    bg: "from-sky-500/5 to-blue-500/5",
    card: "from-sky-500/10 to-blue-500/10 border-sky-500/20",
    value: "text-sky-600",
    icon: "text-sky-600 bg-sky-500/10",
  },
};

const LightStatsSection = ({
  title,
  subtitle,
  stats,
  variant = "primary",
}: LightStatsSectionProps) => {
  const colors = variantColors[variant] || variantColors.primary;

  return (
    <section className={`py-16 md:py-20 bg-gradient-to-br ${colors.bg} relative overflow-hidden`}>
      {/* Décorations animées */}
      <motion.div 
        className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                className="text-muted-foreground text-lg max-w-2xl mx-auto"
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

        <div className={`grid grid-cols-2 ${stats.length >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-' + stats.length} gap-4 md:gap-6 max-w-5xl mx-auto`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className={`text-center p-6 rounded-2xl bg-gradient-to-br ${colors.card} border backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {Icon && (
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${colors.icon} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                )}
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold ${colors.value} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-xs md:text-sm text-muted-foreground">
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

export default LightStatsSection;
