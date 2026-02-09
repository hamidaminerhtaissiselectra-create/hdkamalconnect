 // Données des 16 arrondissements de Marseille pour SEO local
 export interface MarseilleArrondissementData {
   name: string;
   slug: string;
   number: number;
   population: string;
   quartiers: string[];
   landmarks: string[];
   description: string;
   economicActivity: string;
   priority: 'critique' | 'haute' | 'moyenne';
 }
 
 export const marseilleArrondissements: MarseilleArrondissementData[] = [
   {
     name: "Marseille 1er - Centre-Ville",
     slug: "marseille-1er-centre-ville",
     number: 1,
     population: "40 000",
     quartiers: ["Vieux-Port", "Belsunce", "Noailles", "Opéra", "Thiers"],
     landmarks: ["Vieux-Port", "La Canebière", "Opéra de Marseille", "Palais de la Bourse"],
     description: "HD Connect sécurise le 1er arrondissement de Marseille, cœur historique autour du Vieux-Port. Installation vidéosurveillance pour commerces, restaurants et résidences du centre-ville.",
     economicActivity: "Commerce, tourisme, restauration, hôtellerie",
     priority: "critique"
   },
   {
     name: "Marseille 2e - Arenc / Joliette",
     slug: "marseille-2e-arenc-joliette",
     number: 2,
     population: "26 000",
     quartiers: ["Joliette", "Arenc", "La Villette", "Le Panier", "Hôtel de Ville"],
     landmarks: ["MuCEM", "Cathédrale de la Major", "Les Terrasses du Port", "Les Docks", "Le Panier"],
     description: "Expert sécurité Marseille 2e : quartier Euroméditerranée en plein essor. Protection des bureaux, commerces des Terrasses du Port et résidences rénovées du Panier. Vidéosurveillance HD.",
     economicActivity: "Port maritime, Euroméditerranée, tourisme culturel, bureaux modernes",
     priority: "critique"
   },
   {
     name: "Marseille 3e - Saint-Mauront",
     slug: "marseille-3e-saint-mauront",
     number: 3,
     population: "48 000",
     quartiers: ["Belle de Mai", "Saint-Mauront", "Saint-Lazare", "Villette"],
     landmarks: ["La Friche Belle de Mai", "Gare Saint-Charles", "Archives Départementales"],
     description: "HD Connect protège le 3e arrondissement de Marseille : quartier Belle de Mai en transformation. Sécurité renforcée pour studios créatifs, commerces et résidences. Alarmes certifiées NF&A2P.",
     economicActivity: "Industries créatives, médias, gare Saint-Charles, logistique",
     priority: "critique"
   },
   {
     name: "Marseille 4e - La Blancarde",
     slug: "marseille-4e-la-blancarde",
     number: 4,
     population: "49 000",
     quartiers: ["La Blancarde", "Les Chartreux", "Cinq Avenues", "Les Chutes-Lavie", "Saint-Pierre"],
     landmarks: ["Palais Longchamp", "Gare de la Blancarde", "Musée des Beaux-Arts"],
     description: "Sécurité Marseille 4e par HD Connect : arrondissement résidentiel et commerçant. Installation vidéosurveillance, alarmes pour boutiques des Cinq Avenues et copropriétés.",
     economicActivity: "Commerce de proximité, résidentiel, musées",
     priority: "haute"
   },
   {
     name: "Marseille 5e - Baille",
     slug: "marseille-5e-baille",
     number: 5,
     population: "46 000",
     quartiers: ["Baille", "La Conception", "Le Camas", "Le Rouet", "La Timone"],
     landmarks: ["Hôpital de la Timone", "Faculté de Médecine", "Stade Vélodrome (proche)"],
     description: "Expert sécurité Marseille 5e : quartier médical et universitaire. Protection hôpitaux, cabinets médicaux, résidences étudiantes. Vidéosurveillance et contrôle d'accès.",
     economicActivity: "Santé, universités, résidentiel familial",
     priority: "haute"
   },
   {
     name: "Marseille 6e - Préfecture",
     slug: "marseille-6e-prefecture",
     number: 6,
     population: "43 000",
     quartiers: ["Préfecture", "Castellane", "Vauban", "Lodi", "Notre-Dame du Mont"],
     landmarks: ["Préfecture des Bouches-du-Rhône", "Place Castellane", "Palais des Arts"],
     description: "HD Connect sécurise le 6e arrondissement de Marseille, quartier bourgeois de Castellane et Préfecture. Sécurité discrète pour immeubles haussmanniens, boutiques et bureaux.",
     economicActivity: "Administration, commerces chic, professions libérales",
     priority: "haute"
   },
   {
     name: "Marseille 7e - Endoume",
     slug: "marseille-7e-endoume",
     number: 7,
     population: "35 000",
     quartiers: ["Endoume", "Le Roucas-Blanc", "Bompard", "Saint-Victor", "Les Catalans"],
     landmarks: ["Abbaye Saint-Victor", "Vallon des Auffes", "Plage des Catalans", "Corniche Kennedy"],
     description: "Sécurité haut de gamme Marseille 7e : quartiers résidentiels de standing Endoume et Roucas-Blanc. Protection villas avec vue mer, appartements de prestige. Vidéosurveillance discrète.",
     economicActivity: "Résidentiel premium, tourisme balnéaire, restauration gastronomique",
     priority: "haute"
   },
   {
     name: "Marseille 8e - Prado",
     slug: "marseille-8e-prado",
     number: 8,
     population: "82 000",
     quartiers: ["Prado", "Périer", "Sainte-Marguerite", "Bonneveine", "La Plage"],
     landmarks: ["Stade Vélodrome", "Parc Borély", "Plages du Prado", "Cité Radieuse Le Corbusier"],
     description: "HD Connect protège le 8e arrondissement de Marseille : quartiers huppés du Prado et Périer. Installation vidéosurveillance villas, résidences de standing, commerces. Domotique intégrée.",
     economicActivity: "Résidentiel luxe, tourisme, Vélodrome, entreprises tertiaires",
     priority: "haute"
   },
   {
     name: "Marseille 9e - Mazargues",
     slug: "marseille-9e-mazargues",
     number: 9,
     population: "77 000",
     quartiers: ["Mazargues", "Les Baumettes", "Sormiou", "Luminy", "Vaufrèges"],
     landmarks: ["Campus Luminy", "Calanques de Sormiou", "Parc National des Calanques"],
     description: "Expert sécurité Marseille 9e : quartier des Calanques et campus universitaire Luminy. Protection résidences, laboratoires de recherche, entreprises tech. Caméras adaptées environnement naturel.",
     economicActivity: "Universités, recherche scientifique, tourisme Calanques",
     priority: "moyenne"
   },
   {
     name: "Marseille 10e - Saint-Pierre",
     slug: "marseille-10e-saint-pierre",
     number: 10,
     population: "57 000",
     quartiers: ["Saint-Pierre", "La Capelette", "Menpenti", "Le Rouet Sud", "La Timone Sud"],
     landmarks: ["Gare de la Blancarde Sud", "Parc François Billoux"],
     description: "Sécurité Marseille 10e par HD Connect : quartiers populaires et commerciaux. Vidéosurveillance HD pour commerces, pavillons et copropriétés. Alarmes anti-intrusion certifiées.",
     economicActivity: "Commerce de proximité, artisanat, résidentiel mixte",
     priority: "critique"
   },
   {
     name: "Marseille 11e - La Pomme",
     slug: "marseille-11e-la-pomme",
     number: 11,
     population: "58 000",
     quartiers: ["La Pomme", "La Valbarelle", "Saint-Marcel", "La Valentine"],
     landmarks: ["Centre commercial La Valentine", "Colline de la Garde"],
     description: "HD Connect sécurise le 11e arrondissement de Marseille : zones commerciales de La Valentine. Protection grandes surfaces, entrepôts et zones résidentielles. Vidéosurveillance 4K.",
     economicActivity: "Zones commerciales, logistique, résidentiel pavillonnaire",
     priority: "haute"
   },
   {
     name: "Marseille 12e - Saint-Barnabé",
     slug: "marseille-12e-saint-barnabe",
     number: 12,
     population: "62 000",
     quartiers: ["Saint-Barnabé", "Saint-Julien", "Les Caillols", "Les Trois-Lucs", "Montolivet"],
     landmarks: ["Château de la Buzine", "Parc de la Buzine"],
     description: "Expert sécurité Marseille 12e : quartiers résidentiels Saint-Barnabé et Caillols. Installation alarmes, vidéosurveillance pour maisons individuelles et commerces de village.",
     economicActivity: "Résidentiel pavillonnaire, commerces de proximité, patrimoine Pagnol",
     priority: "moyenne"
   },
   {
     name: "Marseille 13e - Château-Gombert",
     slug: "marseille-13e-chateau-gombert",
     number: 13,
     population: "93 000",
     quartiers: ["Château-Gombert", "Les Olives", "La Rose", "Malpassé", "Croix-Rouge"],
     landmarks: ["Technopôle de Château-Gombert", "Musée des Arts et Traditions Populaires"],
     description: "HD Connect protège le 13e arrondissement de Marseille : technopôle et quartiers populaires. Sécurité renforcée pour entreprises tech, laboratoires, commerces et résidences.",
     economicActivity: "Technopôle, industrie, recherche, résidentiel",
     priority: "critique"
   },
   {
     name: "Marseille 14e - Saint-Just",
     slug: "marseille-14e-saint-just",
     number: 14,
     population: "64 000",
     quartiers: ["Saint-Just", "Les Arnavaux", "Sainte-Marthe", "La Calade", "Le Merlan"],
     landmarks: ["Théâtre du Merlan", "Marché aux Puces"],
     description: "Sécurité Marseille 14e par HD Connect : quartiers en transformation. Installation vidéosurveillance HD, alarmes certifiées pour commerces, entrepôts et résidences.",
     economicActivity: "Zones d'activités, marchés, résidentiel populaire",
     priority: "critique"
   },
   {
     name: "Marseille 15e - Euroméditerranée",
     slug: "marseille-15e-euromediterranee",
     number: 15,
     population: "82 000",
     quartiers: ["Croix-Rouge", "La Cabucelle", "Saint-Antoine", "Saint-Louis", "Verduron"],
     landmarks: ["Euroméditerranée Extension", "Port de la Lave"],
     description: "Expert sécurité Marseille 15e : extension Euroméditerranée et quartiers nord. HD Connect sécurise entreprises, logistique portuaire et résidences. Vidéosurveillance renforcée 24/7.",
     economicActivity: "Euroméditerranée, port, logistique, industries",
     priority: "critique"
   },
   {
     name: "Marseille 16e - L'Estaque",
     slug: "marseille-16e-lestaque",
     number: 16,
     population: "18 000",
     quartiers: ["L'Estaque", "Saint-Henri", "Saint-André", "Le Canet"],
     landmarks: ["Port de l'Estaque", "Plage de Corbières", "Anse de l'Estaque"],
     description: "HD Connect sécurise le 16e arrondissement de Marseille : village de l'Estaque et zones portuaires. Protection résidences avec vue mer, commerces et sites industriels. Caméras anti-corrosion.",
     economicActivity: "Port, industrie, tourisme, résidentiel village",
     priority: "haute"
   }
 ];
 
 export const getMarseilleArrondissementBySlug = (slug: string): MarseilleArrondissementData | undefined => {
   return marseilleArrondissements.find(arr => arr.slug === slug);
 };
 
 export const getMarseilleArrondissementByNumber = (number: number): MarseilleArrondissementData | undefined => {
   return marseilleArrondissements.find(arr => arr.number === number);
 };
 
 export const getAllMarseilleArrondissementSlugs = (): string[] => {
   return marseilleArrondissements.map(arr => arr.slug);
 };
 
 export const getCriticalMarseilleArrondissements = (): MarseilleArrondissementData[] => {
   return marseilleArrondissements.filter(arr => arr.priority === 'critique');
 };
 
 export const getHighPriorityMarseilleArrondissements = (): MarseilleArrondissementData[] => {
   return marseilleArrondissements.filter(arr => arr.priority === 'haute');
 };