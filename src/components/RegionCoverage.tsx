import { MapPin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * Bloc SEO Couverture France par Régions
 * Pour les pages services - SEO local optimisé
 */

interface RegionCoverageProps {
  serviceName: string;
  serviceSlug: string;
}

const regionsData = [
  { 
    name: "Île-de-France", 
    cities: ["Paris", "Versailles", "Boulogne-Billancourt", "Saint-Denis", "Nanterre", "Créteil", "Argenteuil"],
    deps: ["75", "77", "78", "91", "92", "93", "94", "95"]
  },
  { 
    name: "Hauts-de-France", 
    cities: ["Lille", "Amiens", "Roubaix", "Tourcoing", "Dunkerque", "Calais", "Valenciennes"],
    deps: ["02", "59", "60", "62", "80"]
  },
  { 
    name: "Grand Est", 
    cities: ["Strasbourg", "Reims", "Metz", "Nancy", "Mulhouse", "Colmar", "Troyes"],
    deps: ["08", "10", "51", "52", "54", "55", "57", "67", "68", "88"]
  },
  { 
    name: "Auvergne-Rhône-Alpes", 
    cities: ["Lyon", "Grenoble", "Saint-Étienne", "Clermont-Ferrand", "Annecy", "Valence", "Chambéry"],
    deps: ["01", "03", "07", "15", "26", "38", "42", "43", "63", "69", "73", "74"]
  },
  { 
    name: "Provence-Alpes-Côte d'Azur", 
    cities: ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Avignon", "Cannes", "Antibes"],
    deps: ["04", "05", "06", "13", "83", "84"]
  },
  { 
    name: "Occitanie", 
    cities: ["Toulouse", "Montpellier", "Nîmes", "Perpignan", "Béziers", "Narbonne", "Albi"],
    deps: ["09", "11", "12", "30", "31", "32", "34", "46", "48", "65", "66", "81", "82"]
  },
  { 
    name: "Nouvelle-Aquitaine", 
    cities: ["Bordeaux", "Limoges", "Poitiers", "La Rochelle", "Pau", "Bayonne", "Angoulême"],
    deps: ["16", "17", "19", "23", "24", "33", "40", "47", "64", "79", "86", "87"]
  },
  { 
    name: "Pays de la Loire", 
    cities: ["Nantes", "Angers", "Le Mans", "Saint-Nazaire", "Laval", "La Roche-sur-Yon"],
    deps: ["44", "49", "53", "72", "85"]
  },
  { 
    name: "Bretagne", 
    cities: ["Rennes", "Brest", "Quimper", "Lorient", "Vannes", "Saint-Brieuc", "Saint-Malo"],
    deps: ["22", "29", "35", "56"]
  },
  { 
    name: "Normandie", 
    cities: ["Rouen", "Le Havre", "Caen", "Cherbourg", "Évreux", "Dieppe"],
    deps: ["14", "27", "50", "61", "76"]
  },
  { 
    name: "Centre-Val de Loire", 
    cities: ["Orléans", "Tours", "Bourges", "Blois", "Chartres", "Châteauroux"],
    deps: ["18", "28", "36", "37", "41", "45"]
  },
  { 
    name: "Bourgogne-Franche-Comté", 
    cities: ["Dijon", "Besançon", "Belfort", "Auxerre", "Chalon-sur-Saône", "Nevers"],
    deps: ["21", "25", "39", "58", "70", "71", "89", "90"]
  },
];

export const RegionCoverage = ({ serviceName, serviceSlug }: RegionCoverageProps) => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <div className="badge-primary mb-4 inline-flex mx-auto">
              <MapPin className="w-4 h-4" />
              <span>Couverture Nationale</span>
            </div>
            <h2 className="section-title">
              {serviceName} sur Toute la France
            </h2>
            <p className="section-subtitle mt-3">
              HD Connect intervient dans toutes les régions françaises pour l'installation, 
              la maintenance et le dépannage de vos systèmes de {serviceName.toLowerCase()}.
            </p>
          </div>

          {/* Grille des régions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {regionsData.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {region.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {region.cities.slice(0, 4).join(", ")}...
                </p>
              </motion.div>
            ))}
          </div>

          {/* Avantages couverture */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Intervention Rapide", desc: "Délai moyen de 48h sur toute la France métropolitaine" },
              { title: "Techniciens Locaux", desc: "Réseau de techniciens certifiés dans chaque région" },
              { title: "SAV National", desc: "Support technique et maintenance disponible partout" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/zones-intervention">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Voir toutes nos zones d'intervention
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionCoverage;
