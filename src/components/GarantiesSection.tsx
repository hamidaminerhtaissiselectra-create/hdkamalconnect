import { Shield, Clock, Award, Wrench, CheckCircle, Zap, HeadphonesIcon, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Section Garanties visuelle pour les pages services
 * Affiche les garanties HD Connect de manière attrayante
 */

interface GarantiesSectionProps {
  variant?: "default" | "compact";
}

const GarantiesSection = ({ variant = "default" }: GarantiesSectionProps) => {
  const garanties = [
    {
      icon: Shield,
      title: "Garantie 5 ans",
      description: "Tous nos équipements sont garantis 5 ans pièces et main d'œuvre",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Clock,
      title: "Intervention Rapide",
      description: "Dépannage express rapidement en cas d'urgence",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Award,
      title: "Certification NF",
      description: "Équipements certifiés NF & A2P pour une sécurité maximale",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: Wrench,
      title: "SAV réactif",
      description: "Support technique disponible 7j/7 par téléphone",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: RefreshCcw,
      title: "Satisfait ou remboursé",
      description: "30 jours pour tester votre installation",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-500/10",
    },
    {
      icon: HeadphonesIcon,
      title: "Accompagnement complet",
      description: "De l'étude à la maintenance, un interlocuteur unique",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
    },
  ];

  if (variant === "compact") {
    return (
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {garanties.slice(0, 4).map((garantie, index) => {
              const Icon = garantie.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-3 px-5 py-3 rounded-full ${garantie.bgColor} border border-border`}
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${garantie.color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{garantie.title}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4" />
            <span>Nos Engagements</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Des Garanties Solides pour Votre Tranquillité
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            HD Connect s'engage à vous offrir un service de qualité avec des garanties concrètes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {garanties.map((garantie, index) => {
            const Icon = garantie.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl ${garantie.bgColor} border border-border hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${garantie.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">{garantie.title}</h3>
                    <p className="text-muted-foreground text-sm">{garantie.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GarantiesSection;
