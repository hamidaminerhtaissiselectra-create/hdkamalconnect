import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Grid3X3, BookOpen, MapPin } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Composant CTA pour liens vers Hub Services, Blog et Zones d'intervention depuis l'accueil
 */
const HomeCTALinks = () => {
  const links = [
    {
      icon: Grid3X3,
      title: "Tous nos services",
      description: "Découvrez l'ensemble de nos solutions de sécurité et domotique",
      href: "/services",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20 hover:border-blue-500/40",
    },
    {
      icon: BookOpen,
      title: "Notre Blog",
      description: "Conseils, actualités et guides sur la sécurité électronique",
      href: "/blog",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
    },
    {
      icon: MapPin,
      title: "Zones d'intervention",
      description: "Nous intervenons partout en France, découvrez nos régions",
      href: "/zones-intervention",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20 hover:border-orange-500/40",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Link
                  to={link.href}
                  className={`flex flex-col items-center gap-4 p-6 rounded-2xl ${link.bgColor} border-2 ${link.borderColor} transition-all duration-300 group text-center h-full hover:shadow-xl`}
                >
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{link.description}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="mt-auto text-primary">
                    Découvrir <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeCTALinks;
