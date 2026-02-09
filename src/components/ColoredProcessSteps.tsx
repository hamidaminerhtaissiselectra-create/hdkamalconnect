import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { LucideIcon } from "lucide-react";
import { ServiceColorTheme } from "@/components/ColoredAdvantagesSection";

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ColoredProcessStepsProps {
  title: string;
  steps: ProcessStep[];
  accentColor?: ServiceColorTheme;
}

// Configuration des couleurs par service
const colorThemes: Record<ServiceColorTheme, {
  gradients: string[];
  hoverBorder: string;
  badgeBg: string;
  badgeText: string;
}> = {
  video: {
    gradients: ["from-blue-500 to-cyan-600", "from-teal-500 to-emerald-500", "from-violet-500 to-purple-600", "from-green-500 to-emerald-600"],
    hoverBorder: "hover:border-blue-500/20",
    badgeBg: "from-blue-500/20 to-cyan-500/20",
    badgeText: "text-blue-600",
  },
  alarme: {
    gradients: ["from-red-500 to-orange-500", "from-amber-500 to-yellow-500", "from-rose-500 to-red-600", "from-green-500 to-emerald-500"],
    hoverBorder: "hover:border-red-500/20",
    badgeBg: "from-red-500/20 to-orange-500/20",
    badgeText: "text-red-600",
  },
  acces: {
    gradients: ["from-emerald-500 to-teal-500", "from-cyan-500 to-blue-500", "from-green-500 to-emerald-600", "from-teal-500 to-cyan-500"],
    hoverBorder: "hover:border-emerald-500/20",
    badgeBg: "from-emerald-500/20 to-teal-500/20",
    badgeText: "text-emerald-600",
  },
  domotique: {
    gradients: ["from-purple-500 to-pink-500", "from-violet-500 to-purple-600", "from-pink-500 to-rose-500", "from-emerald-500 to-green-600"],
    hoverBorder: "hover:border-purple-500/20",
    badgeBg: "from-purple-500/20 to-pink-500/20",
    badgeText: "text-purple-600",
  },
  reseau: {
    gradients: ["from-sky-500 to-blue-600", "from-cyan-500 to-teal-500", "from-blue-500 to-indigo-600", "from-emerald-500 to-green-500"],
    hoverBorder: "hover:border-sky-500/20",
    badgeBg: "from-sky-500/20 to-blue-500/20",
    badgeText: "text-sky-600",
  },
  maintenance: {
    gradients: ["from-amber-500 to-orange-500", "from-yellow-500 to-amber-500", "from-orange-500 to-red-500", "from-emerald-500 to-green-500"],
    hoverBorder: "hover:border-amber-500/20",
    badgeBg: "from-amber-500/20 to-orange-500/20",
    badgeText: "text-amber-600",
  },
  antenne: {
    gradients: ["from-pink-500 to-rose-500", "from-orange-500 to-pink-500", "from-rose-500 to-red-500", "from-emerald-500 to-green-500"],
    hoverBorder: "hover:border-pink-500/20",
    badgeBg: "from-pink-500/20 to-rose-500/20",
    badgeText: "text-pink-600",
  },
  portail: {
    gradients: ["from-indigo-500 to-purple-500", "from-blue-500 to-indigo-500", "from-violet-500 to-purple-600", "from-emerald-500 to-green-500"],
    hoverBorder: "hover:border-indigo-500/20",
    badgeBg: "from-indigo-500/20 to-purple-500/20",
    badgeText: "text-indigo-600",
  },
  installation: {
    gradients: ["from-teal-500 to-emerald-500", "from-green-500 to-teal-500", "from-cyan-500 to-blue-500", "from-emerald-500 to-green-600"],
    hoverBorder: "hover:border-teal-500/20",
    badgeBg: "from-teal-500/20 to-emerald-500/20",
    badgeText: "text-teal-600",
  },
  depannage: {
    gradients: ["from-rose-500 to-red-500", "from-orange-500 to-rose-500", "from-red-500 to-rose-600", "from-emerald-500 to-green-500"],
    hoverBorder: "hover:border-rose-500/20",
    badgeBg: "from-rose-500/20 to-red-500/20",
    badgeText: "text-rose-600",
  },
  location: {
    gradients: ["from-sky-500 to-cyan-500", "from-blue-500 to-sky-500", "from-cyan-500 to-teal-500", "from-emerald-500 to-green-500"],
    hoverBorder: "hover:border-sky-500/20",
    badgeBg: "from-sky-500/20 to-cyan-500/20",
    badgeText: "text-sky-600",
  },
  primary: {
    gradients: ["from-primary to-accent", "from-teal-500 to-emerald-500", "from-violet-500 to-purple-600", "from-green-500 to-emerald-600"],
    hoverBorder: "hover:border-primary/20",
    badgeBg: "from-primary/20 to-accent/20",
    badgeText: "text-primary",
  },
};

const ColoredProcessSteps = ({
  title,
  steps,
  accentColor = "primary",
}: ColoredProcessStepsProps) => {
  const theme = colorThemes[accentColor] || colorThemes.primary;

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <h2 className="section-title text-center mb-12">{title}</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const gradientClass = theme.gradients[index % theme.gradients.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="h-full"
              >
                <div className={`text-center p-6 border-2 border-transparent ${theme.hoverBorder} rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden`}>
                  {/* Step number badge */}
                  <div className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br ${theme.badgeBg} flex items-center justify-center`}>
                    <span className={`text-sm font-bold ${theme.badgeText}`}>{index + 1}</span>
                  </div>
                  <motion.div
                    className={`w-[72px] h-[72px] mx-auto rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-9 h-9 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ColoredProcessSteps;
