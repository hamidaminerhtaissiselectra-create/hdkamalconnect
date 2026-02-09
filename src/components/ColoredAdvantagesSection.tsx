import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { LucideIcon } from "lucide-react";

export type ServiceColorTheme = 
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
  | "location"
  | "primary";

interface AdvantageItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ColoredAdvantagesSectionProps {
  title: string;
  advantages: AdvantageItem[];
  accentColor?: ServiceColorTheme;
}

// Configuration des couleurs par service
const colorThemes: Record<ServiceColorTheme, {
  gradients: string[];
  hoverBorder: string;
}> = {
  video: {
    gradients: ["from-blue-500 to-cyan-600", "from-amber-500 to-orange-500", "from-emerald-500 to-green-600", "from-violet-500 to-purple-600"],
    hoverBorder: "hover:border-blue-500/20",
  },
  alarme: {
    gradients: ["from-red-500 to-orange-500", "from-amber-500 to-yellow-500", "from-rose-500 to-red-600", "from-orange-500 to-red-500"],
    hoverBorder: "hover:border-red-500/20",
  },
  acces: {
    gradients: ["from-emerald-500 to-teal-500", "from-cyan-500 to-blue-500", "from-green-500 to-emerald-600", "from-teal-500 to-cyan-500"],
    hoverBorder: "hover:border-emerald-500/20",
  },
  domotique: {
    gradients: ["from-purple-500 to-pink-500", "from-amber-500 to-orange-500", "from-violet-500 to-purple-600", "from-pink-500 to-rose-500"],
    hoverBorder: "hover:border-purple-500/20",
  },
  reseau: {
    gradients: ["from-sky-500 to-blue-600", "from-cyan-500 to-teal-500", "from-blue-500 to-indigo-600", "from-teal-500 to-cyan-500"],
    hoverBorder: "hover:border-sky-500/20",
  },
  maintenance: {
    gradients: ["from-amber-500 to-orange-500", "from-yellow-500 to-amber-500", "from-orange-500 to-red-500", "from-emerald-500 to-green-500"],
    hoverBorder: "hover:border-amber-500/20",
  },
  antenne: {
    gradients: ["from-pink-500 to-rose-500", "from-orange-500 to-pink-500", "from-rose-500 to-red-500", "from-purple-500 to-pink-500"],
    hoverBorder: "hover:border-pink-500/20",
  },
  portail: {
    gradients: ["from-indigo-500 to-purple-500", "from-blue-500 to-indigo-500", "from-violet-500 to-purple-600", "from-cyan-500 to-blue-500"],
    hoverBorder: "hover:border-indigo-500/20",
  },
  installation: {
    gradients: ["from-teal-500 to-emerald-500", "from-green-500 to-teal-500", "from-cyan-500 to-blue-500", "from-emerald-500 to-green-600"],
    hoverBorder: "hover:border-teal-500/20",
  },
  depannage: {
    gradients: ["from-rose-500 to-red-500", "from-orange-500 to-rose-500", "from-red-500 to-rose-600", "from-amber-500 to-orange-500"],
    hoverBorder: "hover:border-rose-500/20",
  },
  location: {
    gradients: ["from-sky-500 to-cyan-500", "from-blue-500 to-sky-500", "from-cyan-500 to-teal-500", "from-teal-500 to-emerald-500"],
    hoverBorder: "hover:border-sky-500/20",
  },
  primary: {
    gradients: ["from-primary to-accent", "from-amber-500 to-orange-500", "from-emerald-500 to-green-600", "from-violet-500 to-purple-600"],
    hoverBorder: "hover:border-primary/20",
  },
};

const ColoredAdvantagesSection = ({
  title,
  advantages,
  accentColor = "primary",
}: ColoredAdvantagesSectionProps) => {
  const theme = colorThemes[accentColor] || colorThemes.primary;

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <h2 className="section-title text-center mb-12">{title}</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            const gradientClass = theme.gradients[index % theme.gradients.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="h-full"
              >
                <div className={`text-center p-6 rounded-2xl bg-card border-2 border-transparent ${theme.hoverBorder} shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ColoredAdvantagesSection;
