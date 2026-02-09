import { motion } from "framer-motion";
import { ReactNode } from "react";

// Decorative background blobs for service pages
export const ServicePageDecorations = () => (
  <>
    {/* Top left blob */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    {/* Bottom right blob */}
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-accent/5 to-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
  </>
);

// Animated section wrapper with staggered children
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const StaggerContainer = ({ children, className = "", delay = 0 }: StaggerContainerProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: delay,
          staggerChildren: 0.1,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

// Animated card with hover effects
interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export const AnimatedCard = ({ children, className = "", index = 0 }: AnimatedCardProps) => (
  <motion.div
    className={`card-micro-interaction ${className}`}
    variants={{
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    }}
    whileHover={{
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.div>
);

// Animated icon container with gradient
interface AnimatedIconProps {
  children: ReactNode;
  variant?: "primary" | "video" | "alarme" | "acces" | "domotique" | "reseau" | "maintenance" | "installation" | "location" | "portail" | "antenne" | "depannage";
  size?: "sm" | "md" | "lg";
}

const iconGradients = {
  primary: "from-primary to-accent",
  video: "from-blue-500 to-cyan-500",
  alarme: "from-red-500 to-orange-500",
  acces: "from-emerald-500 to-teal-500",
  domotique: "from-purple-500 to-pink-500",
  reseau: "from-sky-500 to-blue-500",
  maintenance: "from-amber-500 to-orange-500",
  installation: "from-green-500 to-emerald-500",
  location: "from-cyan-500 to-sky-500",
  portail: "from-indigo-500 to-purple-500",
  antenne: "from-pink-500 to-rose-500",
  depannage: "from-orange-500 to-red-500",
};

const iconSizes = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-16 h-16",
};

export const AnimatedIcon = ({ children, variant = "primary", size = "md" }: AnimatedIconProps) => (
  <motion.div
    className={`${iconSizes[size]} rounded-full bg-gradient-to-br ${iconGradients[variant]} flex items-center justify-center shadow-lg`}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.div>
);

// Animated badge with pulse effect
interface AnimatedBadgeProps {
  children: ReactNode;
  variant?: "primary" | "success" | "warning" | "info";
}

const badgeColors = {
  primary: "bg-primary/10 text-primary border-primary/20",
  success: "bg-green-500/10 text-green-600 border-green-500/20",
  warning: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  info: "bg-blue-500/10 text-blue-600 border-blue-500/20",
};

export const AnimatedBadge = ({ children, variant = "primary" }: AnimatedBadgeProps) => (
  <motion.span
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${badgeColors[variant]}`}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    {children}
  </motion.span>
);

// Animated stats number
interface AnimatedStatProps {
  value: string;
  label: string;
  description?: string;
  colorClass?: string;
}

export const AnimatedStat = ({ value, label, description, colorClass = "text-primary" }: AnimatedStatProps) => (
  <motion.div
    className="text-center p-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className={`text-3xl md:text-4xl font-bold ${colorClass}`}
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {value}
    </motion.div>
    <div className="text-sm font-semibold text-foreground mt-1">{label}</div>
    {description && <div className="text-xs text-muted-foreground mt-0.5">{description}</div>}
  </motion.div>
);

// Section with colored accent border
interface AccentSectionProps {
  children: ReactNode;
  variant?: "video" | "alarme" | "acces" | "domotique" | "reseau" | "maintenance" | "installation" | "location" | "portail" | "antenne" | "depannage";
  className?: string;
}

const accentBorders = {
  video: "border-l-blue-500",
  alarme: "border-l-red-500",
  acces: "border-l-emerald-500",
  domotique: "border-l-purple-500",
  reseau: "border-l-sky-500",
  maintenance: "border-l-amber-500",
  installation: "border-l-green-500",
  location: "border-l-cyan-500",
  portail: "border-l-indigo-500",
  antenne: "border-l-pink-500",
  depannage: "border-l-orange-500",
};

export const AccentSection = ({ children, variant = "video", className = "" }: AccentSectionProps) => (
  <motion.div
    className={`border-l-4 ${accentBorders[variant]} pl-6 ${className}`}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// Floating action indicator
export const FloatingIndicator = ({ children }: { children: ReactNode }) => (
  <motion.div
    className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium"
    animate={{
      y: [0, -5, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);
