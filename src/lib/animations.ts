/**
 * Système d'animations centralisé HD Connect
 * Variants Framer Motion réutilisables pour une signature visuelle cohérente
 */

import { Variants, Transition } from "framer-motion";

// =============================================================================
// TRANSITIONS STANDARDS
// =============================================================================

export const smoothTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

export const quickTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const gentleTransition: Transition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.5,
};

export const slowTransition: Transition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.8,
};

// =============================================================================
// FADE VARIANTS
// =============================================================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: gentleTransition 
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: smoothTransition 
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: smoothTransition 
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: smoothTransition 
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: smoothTransition 
  },
};

// =============================================================================
// SCALE VARIANTS
// =============================================================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: smoothTransition 
  },
};

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
    }
  },
};

// =============================================================================
// STAGGER CONTAINER (pour listes/grilles)
// =============================================================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// =============================================================================
// ITEMS POUR STAGGER
// =============================================================================

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: smoothTransition 
  },
};

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: smoothTransition 
  },
};

// =============================================================================
// HOVER VARIANTS
// =============================================================================

export const hoverLift = {
  rest: { y: 0, scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
  hover: { 
    y: -8, 
    scale: 1.02, 
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
    transition: quickTransition 
  },
};

export const hoverScale = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: quickTransition 
  },
};

export const hoverGlow = {
  rest: { 
    scale: 1,
    filter: "brightness(1)" 
  },
  hover: { 
    scale: 1.02,
    filter: "brightness(1.1)",
    transition: quickTransition 
  },
};

// =============================================================================
// PARALLAX HELPERS
// =============================================================================

/**
 * Calcule la valeur de parallaxe basée sur le scroll
 * @param scrollProgress - Progression du scroll (0 à 1)
 * @param intensity - Intensité du parallaxe (par défaut 20)
 * @param direction - Direction ('up' | 'down')
 */
export const getParallaxValue = (
  scrollProgress: number, 
  intensity: number = 20, 
  direction: 'up' | 'down' = 'up'
): number => {
  const multiplier = direction === 'up' ? -1 : 1;
  return (scrollProgress - 0.5) * intensity * multiplier;
};

// =============================================================================
// REVEAL ON SCROLL
// =============================================================================

export const revealFromBottom: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    clipPath: "inset(100% 0 0 0)" 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: slowTransition 
  },
};

export const revealFromLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60,
    clipPath: "inset(0 100% 0 0)" 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    clipPath: "inset(0 0% 0 0)",
    transition: slowTransition 
  },
};

export const revealFromRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60,
    clipPath: "inset(0 0 0 100%)" 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    clipPath: "inset(0 0 0 0%)",
    transition: slowTransition 
  },
};

// =============================================================================
// IMAGE SPECIFIC ANIMATIONS
// =============================================================================

export const imageReveal: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 1.1,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    }
  },
};

export const imageZoom: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
};

// =============================================================================
// BUTTON ANIMATIONS
// =============================================================================

export const buttonPulse: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: { scale: 0.98 },
};

export const buttonShine = {
  rest: { 
    backgroundPosition: "-200% center" 
  },
  hover: { 
    backgroundPosition: "200% center",
    transition: { duration: 1.5, ease: "linear" }
  },
};

// =============================================================================
// CARD ANIMATIONS
// =============================================================================

export const cardReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    scale: 0.95,
    rotateX: 10 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    rotateX: 0,
    transition: smoothTransition 
  },
};

// =============================================================================
// MICRO-INTERACTIONS
// =============================================================================

export const microBounce = {
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  },
};

export const microPulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// =============================================================================
// VIEWPORT OPTIONS
// =============================================================================

export const defaultViewport = {
  once: true,
  margin: "-50px",
};

export const earlyViewport = {
  once: true,
  margin: "-100px",
};

export const lateViewport = {
  once: true,
  margin: "0px",
};

// =============================================================================
// COMPOSABLE ANIMATION PRESETS
// =============================================================================

export const animationPresets = {
  fadeUp: {
    initial: "hidden",
    whileInView: "visible",
    viewport: defaultViewport,
    variants: fadeInUp,
  },
  fadeDown: {
    initial: "hidden",
    whileInView: "visible",
    viewport: defaultViewport,
    variants: fadeInDown,
  },
  fadeLeft: {
    initial: "hidden",
    whileInView: "visible",
    viewport: defaultViewport,
    variants: fadeInLeft,
  },
  fadeRight: {
    initial: "hidden",
    whileInView: "visible",
    viewport: defaultViewport,
    variants: fadeInRight,
  },
  scaleIn: {
    initial: "hidden",
    whileInView: "visible",
    viewport: defaultViewport,
    variants: scaleIn,
  },
  reveal: {
    initial: "hidden",
    whileInView: "visible",
    viewport: defaultViewport,
    variants: revealFromBottom,
  },
  card: {
    initial: "hidden",
    whileInView: "visible",
    viewport: defaultViewport,
    variants: cardReveal,
  },
} as const;

export type AnimationPreset = keyof typeof animationPresets;
