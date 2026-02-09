// Données des départements français pour le SEO local
// Zone primaire : Île-de-France (8 départements)

export interface DepartmentData {
  name: string;
  code: string;
  slug: string;
  region: string;
  regionSlug: string;
  prefecture: string;
  population: string;
  description: string;
  seoDescription: string;
  mainCities: string[];
  economicHighlights: string[];
  priority: 'primaire' | 'secondaire' | 'tertiaire';
}

// ============= ÎLE-DE-FRANCE (Zone Primaire) =============
export const ileDeFranceDepartments: DepartmentData[] = [
  {
    name: "Paris",
    code: "75",
    slug: "paris-75",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    prefecture: "Paris",
    population: "2,1 millions",
    description: "Paris, capitale de la France, concentre le plus grand bassin économique européen. HD Connect y assure une couverture complète des 20 arrondissements pour tous vos besoins en sécurité électronique.",
    seoDescription: "Expert sécurité Paris (75) : installation vidéosurveillance IA 4K, alarmes NF&A2P, contrôle d'accès biométrique. Intervention 4h urgence dans les 20 arrondissements. Devis gratuit.",
    mainCities: ["Paris 1er", "Paris 8e", "Paris 16e", "La Défense", "Paris 11e", "Paris 18e", "Paris 19e", "Paris 20e"],
    economicHighlights: ["Quartier d'affaires La Défense", "Champs-Élysées", "Le Marais", "Grands Magasins"],
    priority: "primaire"
  },
  {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine-92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    prefecture: "Nanterre",
    population: "1,6 million",
    description: "Le département des Hauts-de-Seine abrite La Défense, premier quartier d'affaires européen. HD Connect sécurise les sièges sociaux, résidences de standing et commerces du 92.",
    seoDescription: "Installation sécurité Hauts-de-Seine (92) : vidéosurveillance La Défense, alarmes Boulogne-Billancourt, Neuilly-sur-Seine. Expert certifié NF&A2P. Intervention rapide.",
    mainCities: ["Boulogne-Billancourt", "Nanterre", "Courbevoie", "Colombes", "Asnières-sur-Seine", "Rueil-Malmaison", "Levallois-Perret", "Issy-les-Moulineaux", "Neuilly-sur-Seine", "Antony"],
    economicHighlights: ["La Défense", "Sièges sociaux CAC 40", "Studios de Boulogne", "Technopole"],
    priority: "primaire"
  },
  {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis-93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    prefecture: "Bobigny",
    population: "1,6 million",
    description: "La Seine-Saint-Denis, département en pleine mutation avec le Grand Paris, nécessite des solutions de sécurité adaptées. HD Connect accompagne entreprises et particuliers du 93.",
    seoDescription: "Expert sécurité Seine-Saint-Denis (93) : vidéosurveillance Saint-Denis, alarmes Montreuil, contrôle d'accès Pantin. Installation certifiée, intervention rapide 24/7.",
    mainCities: ["Saint-Denis", "Montreuil", "Aubervilliers", "Aulnay-sous-Bois", "Drancy", "Noisy-le-Grand", "Pantin", "Bondy", "Épinay-sur-Seine", "Sevran"],
    economicHighlights: ["Stade de France", "Plaine Saint-Denis", "Zones logistiques", "Grand Paris Express"],
    priority: "primaire"
  },
  {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne-94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    prefecture: "Créteil",
    population: "1,4 million",
    description: "Le Val-de-Marne, département résidentiel et dynamique du sud-est parisien. HD Connect est votre partenaire sécurité de confiance pour le 94, de Créteil à Vincennes.",
    seoDescription: "Installation sécurité Val-de-Marne (94) : caméras Créteil, alarmes Vitry-sur-Seine, Saint-Maur-des-Fossés. Expert certifié. Devis gratuit, intervention rapide.",
    mainCities: ["Créteil", "Vitry-sur-Seine", "Saint-Maur-des-Fossés", "Champigny-sur-Marne", "Ivry-sur-Seine", "Maisons-Alfort", "Fontenay-sous-Bois", "Vincennes", "Alfortville", "Choisy-le-Roi"],
    economicHighlights: ["MIN de Rungis", "Aéroport d'Orly", "Universités", "Zones commerciales"],
    priority: "primaire"
  },
  {
    name: "Val-d'Oise",
    code: "95",
    slug: "val-d-oise-95",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    prefecture: "Cergy-Pontoise",
    population: "1,2 million",
    description: "Le Val-d'Oise, porte nord de l'Île-de-France avec l'aéroport Roissy-CDG. HD Connect sécurise entreprises, zones logistiques et résidences du département 95.",
    seoDescription: "Sécurité Val-d'Oise (95) : vidéosurveillance Cergy, alarmes Argenteuil, Sarcelles. Protection zones aéroportuaires Roissy. Expert certifié, intervention 24/7.",
    mainCities: ["Argenteuil", "Sarcelles", "Cergy", "Pontoise", "Garges-lès-Gonesse", "Franconville", "Goussainville", "Bezons", "Ermont", "Taverny"],
    economicHighlights: ["Aéroport Roissy-CDG", "Ville nouvelle Cergy-Pontoise", "Zones logistiques", "Industries"],
    priority: "primaire"
  },
  {
    name: "Yvelines",
    code: "78",
    slug: "yvelines-78",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    prefecture: "Versailles",
    population: "1,4 million",
    description: "Les Yvelines, département résidentiel prestigieux avec Versailles et Saint-Germain-en-Laye. HD Connect propose des solutions de sécurité haut de gamme adaptées au 78.",
    seoDescription: "Expert sécurité Yvelines (78) : vidéosurveillance Versailles, alarmes Saint-Germain-en-Laye, Poissy. Protection propriétés de prestige. Devis gratuit.",
    mainCities: ["Versailles", "Sartrouville", "Mantes-la-Jolie", "Saint-Germain-en-Laye", "Poissy", "Conflans-Sainte-Honorine", "Montigny-le-Bretonneux", "Les Mureaux", "Houilles", "Plaisir"],
    economicHighlights: ["Château de Versailles", "Technocentre Renault", "Saint-Quentin-en-Yvelines", "Industries automobiles"],
    priority: "primaire"
  },
  {
    name: "Essonne",
    code: "91",
    slug: "essonne-91",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    prefecture: "Évry-Courcouronnes",
    population: "1,3 million",
    description: "L'Essonne, département scientifique avec le plateau de Saclay. HD Connect accompagne les entreprises high-tech, laboratoires et particuliers du 91 pour leur sécurité.",
    seoDescription: "Installation sécurité Essonne (91) : caméras Évry, alarmes Corbeil-Essonnes, Massy. Protection laboratoires Paris-Saclay. Expert certifié NF&A2P.",
    mainCities: ["Évry-Courcouronnes", "Corbeil-Essonnes", "Massy", "Savigny-sur-Orge", "Sainte-Geneviève-des-Bois", "Viry-Châtillon", "Athis-Mons", "Palaiseau", "Draveil", "Yerres"],
    economicHighlights: ["Paris-Saclay", "Génopole", "CEA", "Industries high-tech"],
    priority: "primaire"
  },
  {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne-77",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    prefecture: "Melun",
    population: "1,4 million",
    description: "La Seine-et-Marne, plus grand département francilien avec Disneyland Paris. HD Connect sécurise les zones touristiques, logistiques et résidentielles du 77.",
    seoDescription: "Sécurité Seine-et-Marne (77) : vidéosurveillance Meaux, alarmes Chelles, Melun. Protection zones Disneyland, logistique. Intervention rapide sur tout le 77.",
    mainCities: ["Chelles", "Meaux", "Melun", "Pontault-Combault", "Savigny-le-Temple", "Torcy", "Roissy-en-Brie", "Combs-la-Ville", "Lagny-sur-Marne", "Bussy-Saint-Georges"],
    economicHighlights: ["Disneyland Paris", "Aéroport Roissy-CDG (partie)", "Val d'Europe", "Zones logistiques"],
    priority: "primaire"
  }
];

// ============= AUTRES DÉPARTEMENTS CLÉS =============
export const keyDepartments: DepartmentData[] = [
  {
    name: "Rhône",
    code: "69",
    slug: "rhone-69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    prefecture: "Lyon",
    population: "1,9 million",
    description: "Le Rhône, département économique majeur avec Lyon, deuxième ville de France. HD Connect sécurise entreprises, commerces et résidences lyonnaises.",
    seoDescription: "Expert sécurité Rhône (69) : installation vidéosurveillance Lyon, alarmes Villeurbanne, contrôle d'accès. Couverture complète département. Devis gratuit.",
    mainCities: ["Lyon", "Villeurbanne", "Vénissieux", "Vaulx-en-Velin", "Saint-Priest", "Caluire-et-Cuire", "Bron", "Rillieux-la-Pape", "Meyzieu", "Décines-Charpieu"],
    economicHighlights: ["Part-Dieu", "Confluence", "Industries pharmaceutiques", "Gastronomie"],
    priority: "secondaire"
  },
  {
    name: "Bouches-du-Rhône",
    code: "13",
    slug: "bouches-du-rhone-13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    prefecture: "Marseille",
    population: "2 millions",
    description: "Les Bouches-du-Rhône, département méditerranéen majeur avec Marseille. HD Connect assure la sécurité des entreprises, ports et résidences du 13.",
    seoDescription: "Installation sécurité Bouches-du-Rhône (13) : caméras Marseille, alarmes Aix-en-Provence. Protection ports, industries. Expert certifié PACA.",
    mainCities: ["Marseille", "Aix-en-Provence", "Martigues", "Aubagne", "Istres", "Salon-de-Provence", "Vitrolles", "Marignane", "La Ciotat", "Arles"],
    economicHighlights: ["Port de Marseille", "Eurocopter", "Industries pétrochimiques", "Tourisme"],
    priority: "secondaire"
  },
  {
    name: "Nord",
    code: "59",
    slug: "nord-59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    prefecture: "Lille",
    population: "2,6 millions",
    description: "Le Nord, département le plus peuplé de France hors Paris, avec la métropole lilloise. HD Connect accompagne la transformation sécuritaire du 59.",
    seoDescription: "Sécurité Nord (59) : vidéosurveillance Lille, alarmes Roubaix, Tourcoing. Protection commerces, industries. Intervention rapide département.",
    mainCities: ["Lille", "Roubaix", "Tourcoing", "Dunkerque", "Villeneuve-d'Ascq", "Valenciennes", "Douai", "Wattrelos", "Marcq-en-Barœul", "Maubeuge"],
    economicHighlights: ["Euralille", "Grande distribution", "Industrie automobile", "Logistique transfrontalière"],
    priority: "secondaire"
  },
  {
    name: "Gironde",
    code: "33",
    slug: "gironde-33",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    prefecture: "Bordeaux",
    population: "1,6 million",
    description: "La Gironde, département viticole et économique majeur avec Bordeaux. HD Connect sécurise domaines viticoles, entreprises et résidences bordelaises.",
    seoDescription: "Expert sécurité Gironde (33) : installation caméras Bordeaux, alarmes domaines viticoles. Protection châteaux, entreprises. Devis gratuit.",
    mainCities: ["Bordeaux", "Mérignac", "Pessac", "Talence", "Villenave-d'Ornon", "Saint-Médard-en-Jalles", "Bègles", "Gradignan", "Libourne", "Arcachon"],
    economicHighlights: ["Vignobles bordelais", "Aéronautique", "Port de Bordeaux", "Tourisme"],
    priority: "secondaire"
  },
  {
    name: "Haute-Garonne",
    code: "31",
    slug: "haute-garonne-31",
    region: "Occitanie",
    regionSlug: "occitanie",
    prefecture: "Toulouse",
    population: "1,4 million",
    description: "La Haute-Garonne, département aéronautique avec Toulouse et Airbus. HD Connect accompagne les industries high-tech et particuliers du 31.",
    seoDescription: "Installation sécurité Haute-Garonne (31) : vidéosurveillance Toulouse, alarmes Colomiers. Protection industries aéronautiques. Expert certifié.",
    mainCities: ["Toulouse", "Colomiers", "Tournefeuille", "Blagnac", "Muret", "Plaisance-du-Touch", "Cugnaux", "Balma", "L'Union", "Ramonville-Saint-Agne"],
    economicHighlights: ["Airbus", "Aérospatiale", "CNES", "Industries high-tech"],
    priority: "secondaire"
  },
  {
    name: "Alpes-Maritimes",
    code: "06",
    slug: "alpes-maritimes-06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    prefecture: "Nice",
    population: "1,1 million",
    description: "Les Alpes-Maritimes, département touristique de la Côte d'Azur. HD Connect propose des solutions de sécurité premium pour villas, hôtels et commerces du 06.",
    seoDescription: "Sécurité Alpes-Maritimes (06) : vidéosurveillance Nice, alarmes Cannes, Antibes. Protection villas de luxe, hôtels. Expert Côte d'Azur.",
    mainCities: ["Nice", "Cannes", "Antibes", "Grasse", "Cagnes-sur-Mer", "Le Cannet", "Saint-Laurent-du-Var", "Menton", "Vallauris", "Mandelieu-la-Napoule"],
    economicHighlights: ["Tourisme Côte d'Azur", "Sophia Antipolis", "Palais des Festivals", "Parfumerie Grasse"],
    priority: "secondaire"
  }
];

// Combinaison de tous les départements
export const allDepartments: DepartmentData[] = [...ileDeFranceDepartments, ...keyDepartments];

// Fonctions utilitaires
export const getDepartmentBySlug = (slug: string): DepartmentData | undefined => {
  return allDepartments.find(dept => dept.slug === slug);
};

export const getDepartmentByCode = (code: string): DepartmentData | undefined => {
  return allDepartments.find(dept => dept.code === code);
};

export const getDepartmentsByRegion = (regionSlug: string): DepartmentData[] => {
  return allDepartments.filter(dept => dept.regionSlug === regionSlug);
};

export const getIleDeFranceDepartments = (): DepartmentData[] => {
  return ileDeFranceDepartments;
};

export const getAllDepartmentSlugs = (): string[] => {
  return allDepartments.map(dept => dept.slug);
};

export const getPrimaryDepartments = (): DepartmentData[] => {
  return allDepartments.filter(dept => dept.priority === 'primaire');
};

export const getSecondaryDepartments = (): DepartmentData[] => {
  return allDepartments.filter(dept => dept.priority === 'secondaire');
};
