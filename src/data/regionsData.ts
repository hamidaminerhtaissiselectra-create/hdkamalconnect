// Données des régions métropolitaines françaises pour l'architecture SEO

export interface RegionData {
  name: string;
  slug: string;
  description: string;
  seoDescription: string;
  departments: DepartmentData[];
  mainCities: string[];
  economicHighlights: string[];
  clientTypes: string[];
}

export interface DepartmentData {
  name: string;
  code: string;
}

export const regionsData: RegionData[] = [
  {
    name: "Île-de-France",
    slug: "ile-de-france",
    description: "Région capitale de la France, l'Île-de-France concentre le plus grand bassin économique européen. HD Connect y assure une couverture complète pour tous vos besoins en sécurité électronique.",
    seoDescription: "Top 3 Référencement Sécurité 2025-2026 en Île-de-France. HD Connect installe des systèmes de vidéosurveillance IA 4K, alarmes NF&A2P et contrôle d'accès biométrique. Intervention Rapide Urgence sur Paris et toute la région. Audit gratuit.",
    departments: [
      { name: "Paris", code: "75" },
      { name: "Seine-et-Marne", code: "77" },
      { name: "Yvelines", code: "78" },
      { name: "Essonne", code: "91" },
      { name: "Hauts-de-Seine", code: "92" },
      { name: "Seine-Saint-Denis", code: "93" },
      { name: "Val-de-Marne", code: "94" },
      { name: "Val-d'Oise", code: "95" }
    ],
    mainCities: ["Paris", "Créteil", "Vitry-sur-Seine", "Saint-Maur-des-Fossés", "Boulogne-Billancourt", "Versailles", "Saint-Denis", "Nanterre"],
    economicHighlights: ["Quartier d'affaires La Défense", "Aéroports internationaux CDG et Orly", "Pôles technologiques Paris-Saclay", "Zones commerciales majeures"],
    clientTypes: ["Sièges sociaux", "Commerces de centre-ville", "Résidences haut de gamme", "PME/TPE", "Institutions publiques"]
  },
  {
    name: "Auvergne-Rhône-Alpes",
    slug: "auvergne-rhone-alpes",
    description: "Deuxième région économique de France, Auvergne-Rhône-Alpes abrite Lyon et un tissu industriel dense. HD Connect accompagne les entreprises et particuliers de la région.",
    seoDescription: "Expert Sécurité 2025-2026 Auvergne-Rhône-Alpes. Installation de vidéosurveillance IA 4K, alarmes APSAD et domotique. Couverture complète Lyon, Grenoble, Saint-Étienne. Devis gratuit et garantie 5 ans.",
    departments: [
      { name: "Ain", code: "01" },
      { name: "Allier", code: "03" },
      { name: "Ardèche", code: "07" },
      { name: "Cantal", code: "15" },
      { name: "Drôme", code: "26" },
      { name: "Isère", code: "38" },
      { name: "Loire", code: "42" },
      { name: "Haute-Loire", code: "43" },
      { name: "Puy-de-Dôme", code: "63" },
      { name: "Rhône", code: "69" },
      { name: "Savoie", code: "73" },
      { name: "Haute-Savoie", code: "74" }
    ],
    mainCities: ["Lyon", "Grenoble", "Saint-Étienne", "Villeurbanne", "Clermont-Ferrand", "Annecy", "Chambéry", "Valence"],
    economicHighlights: ["Pôle chimie-pharmaceutique Lyon", "Industrie du ski et tourisme alpin", "Technopôles Grenoble-Isère", "Industries mécaniques"],
    clientTypes: ["Industrie pharmaceutique", "Stations de ski", "Commerces de montagne", "Entrepôts logistiques", "Résidences secondaires"]
  },
  {
    name: "Provence-Alpes-Côte d'Azur",
    slug: "provence-alpes-cote-d-azur",
    description: "Région touristique majeure et pôle économique méditerranéen, PACA requiert des solutions de sécurité adaptées à son climat et son activité. HD Connect y intervient sur l'ensemble du territoire.",
    seoDescription: "Top 3 Sécurité 2025-2026 en PACA. HD Connect, expert certifié, installe des systèmes de vidéosurveillance IA et alarmes NF&A2P à Marseille, Nice, Cannes. Protection haut de gamme pour villas et entreprises. Intervention rapide.",
    departments: [
      { name: "Alpes-de-Haute-Provence", code: "04" },
      { name: "Hautes-Alpes", code: "05" },
      { name: "Alpes-Maritimes", code: "06" },
      { name: "Bouches-du-Rhône", code: "13" },
      { name: "Var", code: "83" },
      { name: "Vaucluse", code: "84" }
    ],
    mainCities: ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Cannes", "Antibes", "Avignon", "Fréjus"],
    economicHighlights: ["Port de Marseille-Fos", "Tourisme Côte d'Azur", "Technopole Sophia Antipolis", "Industrie aéronautique"],
    clientTypes: ["Hôtels de luxe", "Villas privées", "Ports de plaisance", "Commerces touristiques", "Industries high-tech"]
  },
  {
    name: "Nouvelle-Aquitaine",
    slug: "nouvelle-aquitaine",
    description: "Plus grande région de France par sa superficie, la Nouvelle-Aquitaine offre une diversité économique unique. HD Connect couvre l'ensemble de ce vaste territoire.",
    seoDescription: "Installation sécurité Nouvelle-Aquitaine : alarmes Bordeaux, vidéosurveillance Limoges, contrôle d'accès La Rochelle. Expert certifié.",
    departments: [
      { name: "Charente", code: "16" },
      { name: "Charente-Maritime", code: "17" },
      { name: "Corrèze", code: "19" },
      { name: "Creuse", code: "23" },
      { name: "Dordogne", code: "24" },
      { name: "Gironde", code: "33" },
      { name: "Landes", code: "40" },
      { name: "Lot-et-Garonne", code: "47" },
      { name: "Pyrénées-Atlantiques", code: "64" },
      { name: "Deux-Sèvres", code: "79" },
      { name: "Vienne", code: "86" },
      { name: "Haute-Vienne", code: "87" }
    ],
    mainCities: ["Bordeaux", "Limoges", "Poitiers", "La Rochelle", "Pau", "Bayonne", "Angoulême", "Périgueux"],
    economicHighlights: ["Vignobles bordelais", "Aéronautique Bordeaux", "Tourisme atlantique", "Industries céramiques Limoges"],
    clientTypes: ["Domaines viticoles", "Chais et caves", "Stations balnéaires", "Industries agroalimentaires", "Résidences de vacances"]
  },
  {
    name: "Occitanie",
    slug: "occitanie",
    description: "Région dynamique du sud de la France, l'Occitanie combine attractivité touristique et excellence industrielle notamment dans l'aéronautique. HD Connect y assure une présence complète.",
    seoDescription: "Sécurité électronique Occitanie : caméras Toulouse, alarmes Montpellier, domotique Nîmes. Installation professionnelle, devis gratuit.",
    departments: [
      { name: "Ariège", code: "09" },
      { name: "Aude", code: "11" },
      { name: "Aveyron", code: "12" },
      { name: "Gard", code: "30" },
      { name: "Haute-Garonne", code: "31" },
      { name: "Gers", code: "32" },
      { name: "Hérault", code: "34" },
      { name: "Lot", code: "46" },
      { name: "Lozère", code: "48" },
      { name: "Hautes-Pyrénées", code: "65" },
      { name: "Pyrénées-Orientales", code: "66" },
      { name: "Tarn", code: "81" },
      { name: "Tarn-et-Garonne", code: "82" }
    ],
    mainCities: ["Toulouse", "Montpellier", "Nîmes", "Perpignan", "Béziers", "Narbonne", "Albi", "Tarbes"],
    economicHighlights: ["Aéronautique Toulouse (Airbus)", "Viticulture Languedoc", "Tourisme Pyrénées", "Pôle spatial"],
    clientTypes: ["Industrie aéronautique", "Domaines viticoles", "Stations thermales", "Commerces touristiques", "Établissements éducatifs"]
  },
  {
    name: "Hauts-de-France",
    slug: "hauts-de-france",
    description: "Carrefour européen stratégique, les Hauts-de-France combinent patrimoine industriel et dynamisme logistique. HD Connect accompagne la transformation sécuritaire de la région.",
    seoDescription: "Installation sécurité Hauts-de-France : vidéosurveillance Lille, alarmes Amiens, contrôle d'accès Roubaix. Expert agréé, intervention rapide.",
    departments: [
      { name: "Aisne", code: "02" },
      { name: "Nord", code: "59" },
      { name: "Oise", code: "60" },
      { name: "Pas-de-Calais", code: "62" },
      { name: "Somme", code: "80" }
    ],
    mainCities: ["Lille", "Amiens", "Roubaix", "Tourcoing", "Dunkerque", "Calais", "Valenciennes", "Douai"],
    economicHighlights: ["Logistique et transport", "Grande distribution", "Industrie automobile", "Zones portuaires Dunkerque-Calais"],
    clientTypes: ["Entrepôts logistiques", "Grandes surfaces", "Sites industriels", "PME manufacturières", "Commerces transfrontaliers"]
  },
  {
    name: "Grand Est",
    slug: "grand-est",
    description: "Région frontalière au cœur de l'Europe, le Grand Est bénéficie d'une position stratégique. HD Connect y propose des solutions de sécurité adaptées aux enjeux transfrontaliers.",
    seoDescription: "Sécurité électronique Grand Est : installation caméras Strasbourg, alarmes Nancy, Metz. Expert certifié, couverture Alsace-Lorraine-Champagne.",
    departments: [
      { name: "Ardennes", code: "08" },
      { name: "Aube", code: "10" },
      { name: "Marne", code: "51" },
      { name: "Haute-Marne", code: "52" },
      { name: "Meurthe-et-Moselle", code: "54" },
      { name: "Meuse", code: "55" },
      { name: "Moselle", code: "57" },
      { name: "Bas-Rhin", code: "67" },
      { name: "Haut-Rhin", code: "68" },
      { name: "Vosges", code: "88" }
    ],
    mainCities: ["Strasbourg", "Nancy", "Metz", "Reims", "Mulhouse", "Colmar", "Troyes", "Thionville"],
    economicHighlights: ["Institutions européennes Strasbourg", "Industrie automobile", "Viticulture champagne et Alsace", "Sidérurgie"],
    clientTypes: ["Institutions européennes", "Industries automobiles", "Domaines viticoles", "Commerces transfrontaliers", "Sites logistiques"]
  },
  {
    name: "Pays de la Loire",
    slug: "pays-de-la-loire",
    description: "Région atlantique dynamique, les Pays de la Loire combinent industrie, tourisme et qualité de vie. HD Connect assure une couverture complète de Nantes à Le Mans.",
    seoDescription: "Expert sécurité Pays de la Loire : vidéosurveillance Nantes, alarmes Angers, Le Mans. Installation professionnelle, intervention rapide.",
    departments: [
      { name: "Loire-Atlantique", code: "44" },
      { name: "Maine-et-Loire", code: "49" },
      { name: "Mayenne", code: "53" },
      { name: "Sarthe", code: "72" },
      { name: "Vendée", code: "85" }
    ],
    mainCities: ["Nantes", "Angers", "Le Mans", "Saint-Nazaire", "La Roche-sur-Yon", "Cholet", "Laval", "Saumur"],
    economicHighlights: ["Construction navale Saint-Nazaire", "Industrie automobile", "Agroalimentaire", "Tourisme vendéen"],
    clientTypes: ["Chantiers navals", "Industries automobiles", "Agroalimentaire", "Stations balnéaires", "Commerces de centre-ville"]
  },
  {
    name: "Bretagne",
    slug: "bretagne",
    description: "Région à forte identité, la Bretagne combine tradition et innovation. HD Connect accompagne le développement sécuritaire de ce territoire dynamique.",
    seoDescription: "Installation sécurité Bretagne : caméras Rennes, alarmes Brest, contrôle d'accès Saint-Malo. Expert certifié, devis gratuit.",
    departments: [
      { name: "Côtes-d'Armor", code: "22" },
      { name: "Finistère", code: "29" },
      { name: "Ille-et-Vilaine", code: "35" },
      { name: "Morbihan", code: "56" }
    ],
    mainCities: ["Rennes", "Brest", "Lorient", "Vannes", "Saint-Malo", "Saint-Brieuc", "Quimper", "Fougères"],
    economicHighlights: ["Pôle cybersécurité Rennes", "Industrie agroalimentaire", "Construction navale", "Tourisme côtier"],
    clientTypes: ["Industries agroalimentaires", "Ports de pêche", "Résidences côtières", "Commerces touristiques", "Entreprises tech"]
  },
  {
    name: "Normandie",
    slug: "normandie",
    description: "Région historique aux portes de Paris, la Normandie offre un mix unique d'industrie et de tourisme. HD Connect y assure l'installation et la maintenance de vos systèmes de sécurité.",
    seoDescription: "Sécurité électronique Normandie : vidéosurveillance Rouen, alarmes Le Havre, Caen. Installation professionnelle, intervention Seine-Maritime, Calvados.",
    departments: [
      { name: "Calvados", code: "14" },
      { name: "Eure", code: "27" },
      { name: "Manche", code: "50" },
      { name: "Orne", code: "61" },
      { name: "Seine-Maritime", code: "76" }
    ],
    mainCities: ["Rouen", "Le Havre", "Caen", "Cherbourg-en-Cotentin", "Évreux", "Dieppe", "Lisieux", "Alençon"],
    economicHighlights: ["Port du Havre", "Industrie automobile", "Tourisme mémoriel", "Agroalimentaire laitier"],
    clientTypes: ["Zones portuaires", "Industries automobiles", "Sites touristiques", "Exploitations agricoles", "Résidences normandiennes"]
  },
  {
    name: "Bourgogne-Franche-Comté",
    slug: "bourgogne-franche-comte",
    description: "Région au riche patrimoine et à l'industrie diversifiée, la Bourgogne-Franche-Comté bénéficie de l'expertise HD Connect pour tous ses besoins en sécurité.",
    seoDescription: "Installation sécurité Bourgogne-Franche-Comté : caméras Dijon, alarmes Besançon, domotique. Expert certifié, couverture régionale. **Intervention Rapide** possible.",
    departments: [
      { name: "Côte-d'Or", code: "21" },
      { name: "Doubs", code: "25" },
      { name: "Jura", code: "39" },
      { name: "Nièvre", code: "58" },
      { name: "Haute-Saône", code: "70" },
      { name: "Saône-et-Loire", code: "71" },
      { name: "Yonne", code: "89" },
      { name: "Territoire de Belfort", code: "90" }
    ],
    mainCities: ["Dijon", "Besançon", "Belfort", "Chalon-sur-Saône", "Auxerre", "Mâcon", "Nevers", "Montbéliard"],
    economicHighlights: ["Viticulture bourguignonne", "Industrie horlogère", "Automobile Peugeot-Sochaux", "Agroalimentaire moutardier"],
    clientTypes: ["Domaines viticoles", "Industries horlogères", "Sites automobiles", "Commerces gastronomiques", "Châteaux et domaines"]
  },
  {
    name: "Centre-Val de Loire",
    slug: "centre-val-de-loire",
    description: "Région des châteaux de la Loire et carrefour logistique national, le Centre-Val de Loire fait confiance à HD Connect pour sa sécurité électronique.",
    seoDescription: "Expert sécurité Centre-Val de Loire : vidéosurveillance Orléans, alarmes Tours, contrôle d'accès Chartres. Installation professionnelle.",
    departments: [
      { name: "Cher", code: "18" },
      { name: "Eure-et-Loir", code: "28" },
      { name: "Indre", code: "36" },
      { name: "Indre-et-Loire", code: "37" },
      { name: "Loir-et-Cher", code: "41" },
      { name: "Loiret", code: "45" }
    ],
    mainCities: ["Orléans", "Tours", "Chartres", "Bourges", "Blois", "Châteauroux", "Vendôme", "Dreux"],
    economicHighlights: ["Logistique nationale", "Cosmétique Valley", "Tourisme châteaux", "Agriculture céréalière"],
    clientTypes: ["Châteaux historiques", "Entrepôts logistiques", "Industries cosmétiques", "Exploitations agricoles", "Commerces touristiques"]
  },
  {
    name: "Corse",
    slug: "corse",
    description: "Île de beauté au patrimoine unique, la Corse nécessite des solutions de sécurité adaptées à son environnement insulaire. HD Connect intervient sur l'ensemble du territoire corse.",
    seoDescription: "Sécurité électronique Corse : installation caméras Ajaccio, Bastia. Alarmes villas, hôtels. Expert intervention île de beauté.",
    departments: [
      { name: "Corse-du-Sud", code: "2A" },
      { name: "Haute-Corse", code: "2B" }
    ],
    mainCities: ["Ajaccio", "Bastia", "Porto-Vecchio", "Corte", "Calvi", "Bonifacio", "Propriano", "Île-Rousse"],
    economicHighlights: ["Tourisme balnéaire et montagnard", "Agroalimentaire local", "Immobilier de prestige", "Nautisme"],
    clientTypes: ["Hôtels de luxe", "Villas de vacances", "Commerces saisonniers", "Ports de plaisance", "Résidences secondaires"]
  }
];

export const getRegionBySlug = (slug: string): RegionData | undefined => {
  return regionsData.find(region => region.slug === slug);
};

export const getAllRegionSlugs = (): string[] => {
  return regionsData.map(region => region.slug);
};

export const getRegionCities = (regionSlug: string): string[] => {
  const region = getRegionBySlug(regionSlug);
  return region ? region.mainCities : [];
};
