// Section E-E-A-T (Experience, Expertise, Authoritativeness, Trust) pour SEO
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import {
  Award,
  Shield,
  Users,
  Clock,
  CheckCircle,
  BadgeCheck,
  Building2,
  Wrench,
  GraduationCap,
  Star,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Target,
} from "lucide-react";

interface ExpertiseSectionProps {
  location?: string;
}

const ExpertiseSection = ({ location = "Île-de-France" }: ExpertiseSectionProps) => {
  const { scrollToSection } = useSmoothScroll();

  const expertiseItems = [
    {
      icon: Clock,
      title: "10+ Ans d'Expérience",
      description: "Depuis 2014, HD Connect accompagne particuliers et entreprises dans leurs projets de sécurité. Plus de 2000 installations réalisées.",
      stat: "2014",
      statLabel: "Création",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "5000+ Installations",
      description: "Notre équipe a réalisé plus de 5000 installations de systèmes de sécurité en Île-de-France et régions limitrophes.",
      stat: "5000+",
      statLabel: "Projets",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: GraduationCap,
      title: "Techniciens Certifiés",
      description: "Nos techniciens suivent des formations continues auprès des fabricants : Dahua, Hikvision, Ajax, Comelit, Somfy.",
      stat: "100%",
      statLabel: "Certifiés",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Certifications NF&A2P",
      description: "Nous installons exclusivement du matériel certifié NF&A2P, reconnu par les compagnies d'assurance.",
      stat: "NF&A2P",
      statLabel: "Garantie",
      color: "from-amber-500 to-orange-500",
    }
  ];

  const trustIndicators = [
    { icon: Shield, label: "Matériel garanti 5 ans", color: "text-blue-500" },
    { icon: BadgeCheck, label: "Agrément préfecture", color: "text-green-500" },
    { icon: Building2, label: "Partenaire des syndics", color: "text-purple-500" },
    { icon: Wrench, label: "SAV 24/7 disponible", color: "text-amber-500" },
    { icon: Star, label: "4.9/5 avis clients", color: "text-yellow-500" },
    { icon: CheckCircle, label: "Devis transparent", color: "text-emerald-500" },
  ];

  const comparisons = [
    {
      title: "Caméras HD vs 4K",
      description: "Le Full HD (1080p) suffit pour la plupart des usages domestiques. Le 4K est recommandé pour les commerces et zones à fort trafic nécessitant identification précise.",
      recommendation: "Notre conseil : 2K minimum pour un bon compromis qualité/stockage.",
      icon: Target,
    },
    {
      title: "Alarme filaire vs sans fil",
      description: "Le filaire offre une fiabilité maximale sans risque d'interférences. Le sans fil permet une installation rapide et évolutive.",
      recommendation: "Notre conseil : Sans fil pour rénovation, filaire pour construction neuve.",
      icon: TrendingUp,
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Conseils d'Expert</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Pourquoi Faire Confiance à <span className="text-gradient-animated">HD Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Plus de 10 ans d'expertise en sécurité électronique en {location}
            </p>
          </div>
        </AnimatedSection>

        {/* Expertise Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {expertiseItems.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-border hover:border-primary/30 transition-all hover:shadow-xl overflow-hidden group">
                  <CardContent className="p-6 relative">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                    
                    <div className="flex items-center justify-between mb-4">
                      <motion.div 
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <item.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="text-right">
                        <motion.div 
                          className="text-2xl font-bold text-primary"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {item.stat}
                        </motion.div>
                        <div className="text-xs text-muted-foreground">{item.statLabel}</div>
                      </div>
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <AnimatedSection animation="fade-up">
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border hover:border-primary/30 transition-all cursor-pointer"
                whileHover={{ scale: 1.05, y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <indicator.icon className={`w-5 h-5 ${indicator.color}`} />
                <span className="text-sm font-medium text-foreground">{indicator.label}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Technical Comparisons */}
        <AnimatedSection animation="fade-up">
          <div className="max-w-4xl mx-auto mb-14">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Comparatifs Techniques
              </h3>
              <p className="text-muted-foreground mt-2">
                Nos experts vous conseillent sur les meilleures solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {comparisons.map((comparison, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div whileHover={{ y: -5 }}>
                    <Card className="border-border hover:border-primary/30 transition-all hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <comparison.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h4 className="font-bold text-foreground text-lg">{comparison.title}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">{comparison.description}</p>
                        <motion.div 
                          className="flex items-start gap-2 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20"
                          whileHover={{ scale: 1.02 }}
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-foreground font-medium">{comparison.recommendation}</p>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="scale-in">
          <div className="text-center">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 shadow-xl"
                onClick={() => scrollToSection("quote", { mode: "quote" })}
              >
                <Award className="mr-2 w-5 h-5" />
                Bénéficier de notre expertise
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExpertiseSection;
