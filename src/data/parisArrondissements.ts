// Données des 20 arrondissements de Paris pour SEO local
export interface ArrondissementData {
  name: string;
  slug: string;
  number: number;
  population: string;
  quartiers: string[];
  landmarks: string[];
  description: string;
  crimeRate: string;
  priority: 'critique' | 'haute' | 'moyenne';
}

export const parisArrondissements: ArrondissementData[] = [
  {
    name: "Paris 1er - Louvre",
    slug: "paris-1er-louvre",
    number: 1,
    population: "17 000",
    quartiers: ["Palais-Royal", "Place Vendôme", "Saint-Germain-l'Auxerrois", "Les Halles"],
    landmarks: ["Musée du Louvre", "Jardin des Tuileries", "Palais Royal", "Forum des Halles"],
    description: "HD Connect sécurise le 1er arrondissement de Paris, cœur historique avec le Louvre et les Halles. Installation vidéosurveillance, alarmes pour boutiques de luxe, galeries et résidences.",
    crimeRate: "45.2/1000",
    priority: "haute"
  },
  {
    name: "Paris 2e - Bourse",
    slug: "paris-2e-bourse",
    number: 2,
    population: "22 000",
    quartiers: ["Bourse", "Sentier", "Montorgueil", "Grands Boulevards"],
    landmarks: ["Palais Brongniart", "Passage des Panoramas", "Bibliothèque Nationale"],
    description: "Expert sécurité Paris 2e : protection des bureaux, sièges sociaux et commerces du quartier de la Bourse. Vidéosurveillance HD, contrôle d'accès biométrique.",
    crimeRate: "52.1/1000",
    priority: "haute"
  },
  {
    name: "Paris 3e - Temple",
    slug: "paris-3e-temple",
    number: 3,
    population: "33 000",
    quartiers: ["Marais Nord", "Arts-et-Métiers", "Enfants-Rouges", "Archives"],
    landmarks: ["Musée Picasso", "Musée des Arts et Métiers", "Marché des Enfants Rouges"],
    description: "HD Connect protège le 3e arrondissement de Paris, haut-Marais et Arts-et-Métiers. Sécurité discrète pour boutiques branchées, galeries d'art et appartements haussmanniens.",
    crimeRate: "48.7/1000",
    priority: "haute"
  },
  {
    name: "Paris 4e - Hôtel-de-Ville",
    slug: "paris-4e-hotel-de-ville",
    number: 4,
    population: "28 000",
    quartiers: ["Marais Sud", "Île Saint-Louis", "Île de la Cité", "Saint-Gervais"],
    landmarks: ["Notre-Dame", "Hôtel de Ville", "Centre Pompidou", "Place des Vosges"],
    description: "Sécurité haut de gamme Paris 4e : Marais, îles de la Cité et Saint-Louis. Installation alarmes certifiées, vidéosurveillance discrète pour hôtels particuliers et commerces.",
    crimeRate: "51.3/1000",
    priority: "haute"
  },
  {
    name: "Paris 5e - Panthéon",
    slug: "paris-5e-pantheon",
    number: 5,
    population: "59 000",
    quartiers: ["Quartier Latin", "Sorbonne", "Mouffetard", "Jardin des Plantes"],
    landmarks: ["Panthéon", "Sorbonne", "Jardin des Plantes", "Arènes de Lutèce"],
    description: "HD Connect sécurise le 5e arrondissement, Quartier Latin et Sorbonne. Protection résidences étudiantes, commerces et établissements d'enseignement.",
    crimeRate: "42.8/1000",
    priority: "haute"
  },
  {
    name: "Paris 6e - Luxembourg",
    slug: "paris-6e-luxembourg",
    number: 6,
    population: "42 000",
    quartiers: ["Saint-Germain-des-Prés", "Odéon", "Notre-Dame-des-Champs", "Monnaie"],
    landmarks: ["Jardin du Luxembourg", "Église Saint-Sulpice", "Saint-Germain-des-Prés"],
    description: "Expert sécurité Paris 6e : Saint-Germain-des-Prés et Luxembourg. Vidéosurveillance discrète pour galeries, éditeurs et appartements de standing.",
    crimeRate: "38.5/1000",
    priority: "haute"
  },
  {
    name: "Paris 7e - Palais-Bourbon",
    slug: "paris-7e-palais-bourbon",
    number: 7,
    population: "54 000",
    quartiers: ["Invalides", "Tour Eiffel", "École Militaire", "Gros-Caillou"],
    landmarks: ["Tour Eiffel", "Invalides", "Musée d'Orsay", "Assemblée Nationale"],
    description: "HD Connect protège le 7e arrondissement de Paris : Invalides, Tour Eiffel. Sécurité renforcée ambassades, ministères, hôtels de luxe et résidences diplomatiques.",
    crimeRate: "35.2/1000",
    priority: "haute"
  },
  {
    name: "Paris 8e - Élysée",
    slug: "paris-8e-elysee",
    number: 8,
    population: "40 000",
    quartiers: ["Champs-Élysées", "Madeleine", "Faubourg-du-Roule", "Europe"],
    landmarks: ["Champs-Élysées", "Arc de Triomphe", "Palais de l'Élysée", "Grand Palais"],
    description: "Sécurité premium Paris 8e : Champs-Élysées, boutiques de luxe et palaces. Installation vidéosurveillance haute définition, contrôle d'accès et alarmes connectées.",
    crimeRate: "55.8/1000",
    priority: "haute"
  },
  {
    name: "Paris 9e - Opéra",
    slug: "paris-9e-opera",
    number: 9,
    population: "57 000",
    quartiers: ["Opéra", "Grands Magasins", "Pigalle Sud", "Lorette"],
    landmarks: ["Opéra Garnier", "Galeries Lafayette", "Printemps", "Musée Grévin"],
    description: "Expert sécurité Paris 9e : Opéra et grands magasins. Protection commerces, bureaux et résidences. Vidéosurveillance HD, alarmes anti-intrusion.",
    crimeRate: "58.3/1000",
    priority: "haute"
  },
  {
    name: "Paris 10e - Enclos Saint-Laurent",
    slug: "paris-10e-enclos-saint-laurent",
    number: 10,
    population: "87 000",
    quartiers: ["Gare du Nord", "Gare de l'Est", "Canal Saint-Martin", "Louis Blanc"],
    landmarks: ["Gare du Nord", "Gare de l'Est", "Canal Saint-Martin", "Hôpital Saint-Louis"],
    description: "HD Connect sécurise le 10e arrondissement, secteur gares du Nord et de l'Est. Protection renforcée commerces, hôtels et résidences. Intervention rapide 24/7.",
    crimeRate: "72.5/1000",
    priority: "critique"
  },
  {
    name: "Paris 11e - Popincourt",
    slug: "paris-11e-popincourt",
    number: 11,
    population: "148 000",
    quartiers: ["Bastille", "Oberkampf", "République", "Charonne"],
    landmarks: ["Place de la Bastille", "Rue Oberkampf", "Place de la République"],
    description: "Expert sécurité Paris 11e : Bastille, Oberkampf et République. Installation vidéosurveillance restaurants, bars, commerces et résidences. Maintenance 24/7.",
    crimeRate: "68.2/1000",
    priority: "critique"
  },
  {
    name: "Paris 12e - Reuilly",
    slug: "paris-12e-reuilly",
    number: 12,
    population: "142 000",
    quartiers: ["Gare de Lyon", "Bercy", "Daumesnil", "Bel-Air"],
    landmarks: ["Gare de Lyon", "Bercy Village", "Coulée Verte", "Bois de Vincennes"],
    description: "HD Connect protège le 12e arrondissement de Paris : Bercy, Gare de Lyon. Sécurité entreprises, commerces et résidences. Alarmes certifiées NF&A2P.",
    crimeRate: "52.8/1000",
    priority: "critique"
  },
  {
    name: "Paris 13e - Gobelins",
    slug: "paris-13e-gobelins",
    number: 13,
    population: "182 000",
    quartiers: ["Butte-aux-Cailles", "Chinatown", "Tolbiac", "Croulebarbe"],
    landmarks: ["Bibliothèque François Mitterrand", "Manufacture des Gobelins", "Butte-aux-Cailles"],
    description: "Expert sécurité Paris 13e : quartiers en mutation, universités et entreprises. Installation vidéosurveillance HD, contrôle d'accès et domotique.",
    crimeRate: "55.4/1000",
    priority: "critique"
  },
  {
    name: "Paris 14e - Observatoire",
    slug: "paris-14e-observatoire",
    number: 14,
    population: "136 000",
    quartiers: ["Montparnasse", "Alésia", "Denfert-Rochereau", "Pernety"],
    landmarks: ["Tour Montparnasse", "Catacombes", "Observatoire de Paris"],
    description: "HD Connect sécurise le 14e arrondissement de Paris : Montparnasse et secteur résidentiel. Vidéosurveillance, alarmes pour commerces et copropriétés.",
    crimeRate: "48.9/1000",
    priority: "critique"
  },
  {
    name: "Paris 15e - Vaugirard",
    slug: "paris-15e-vaugirard",
    number: 15,
    population: "230 000",
    quartiers: ["Grenelle", "Javel", "Vaugirard", "Necker"],
    landmarks: ["Parc André Citroën", "Tour Montparnasse", "Parc Georges Brassens"],
    description: "Expert sécurité Paris 15e, plus grand arrondissement. Protection résidences familiales, commerces et entreprises. Couverture complète avec intervention rapide.",
    crimeRate: "42.3/1000",
    priority: "critique"
  },
  {
    name: "Paris 16e - Passy",
    slug: "paris-16e-passy",
    number: 16,
    population: "160 000",
    quartiers: ["Auteuil", "Passy", "Muette", "Trocadéro"],
    landmarks: ["Trocadéro", "Bois de Boulogne", "Palais de Chaillot", "Maison de la Radio"],
    description: "Sécurité haut de gamme Paris 16e : Passy, Auteuil et Trocadéro. Installation discrète pour hôtels particuliers, ambassades et résidences de standing.",
    crimeRate: "38.7/1000",
    priority: "critique"
  },
  {
    name: "Paris 17e - Batignolles-Monceau",
    slug: "paris-17e-batignolles-monceau",
    number: 17,
    population: "167 000",
    quartiers: ["Batignolles", "Épinettes", "Monceau", "Ternes"],
    landmarks: ["Parc Monceau", "Palais des Congrès", "Cité des Fleurs"],
    description: "HD Connect protège le 17e arrondissement de Paris : Batignolles et Monceau. Vidéosurveillance, alarmes pour bureaux, commerces et appartements.",
    crimeRate: "52.1/1000",
    priority: "critique"
  },
  {
    name: "Paris 18e - Butte-Montmartre",
    slug: "paris-18e-butte-montmartre",
    number: 18,
    population: "200 000",
    quartiers: ["Montmartre", "Clignancourt", "Goutte d'Or", "La Chapelle"],
    landmarks: ["Sacré-Cœur", "Place du Tertre", "Moulin Rouge", "Marché de Clignancourt"],
    description: "Expert sécurité Paris 18e : Montmartre et secteurs sensibles. Installation vidéosurveillance renforcée, alarmes certifiées. Intervention rapide 24/7.",
    crimeRate: "75.8/1000",
    priority: "critique"
  },
  {
    name: "Paris 19e - Buttes-Chaumont",
    slug: "paris-19e-buttes-chaumont",
    number: 19,
    population: "189 000",
    quartiers: ["Buttes-Chaumont", "Villette", "Combat", "Amérique"],
    landmarks: ["Parc des Buttes-Chaumont", "Cité des Sciences", "Philharmonie de Paris"],
    description: "HD Connect sécurise le 19e arrondissement de Paris : Buttes-Chaumont et la Villette. Protection commerces, entreprises et résidences. Alarmes et vidéosurveillance.",
    crimeRate: "68.5/1000",
    priority: "critique"
  },
  {
    name: "Paris 20e - Ménilmontant",
    slug: "paris-20e-menilmontant",
    number: 20,
    population: "196 000",
    quartiers: ["Ménilmontant", "Belleville", "Charonne", "Père-Lachaise"],
    landmarks: ["Cimetière du Père-Lachaise", "Parc de Belleville", "Rue de Ménilmontant"],
    description: "Expert sécurité Paris 20e : Ménilmontant, Belleville et Charonne. Installation vidéosurveillance, alarmes pour commerces et copropriétés. Maintenance 24/7.",
    crimeRate: "62.3/1000",
    priority: "critique"
  }
];

export const getArrondissementBySlug = (slug: string): ArrondissementData | undefined => {
  return parisArrondissements.find(arr => arr.slug === slug);
};

export const getArrondissementByNumber = (number: number): ArrondissementData | undefined => {
  return parisArrondissements.find(arr => arr.number === number);
};

export const getAllArrondissementSlugs = (): string[] => {
  return parisArrondissements.map(arr => arr.slug);
};

export const getCriticalArrondissements = (): ArrondissementData[] => {
  return parisArrondissements.filter(arr => arr.priority === 'critique');
};

export const getHighPriorityArrondissements = (): ArrondissementData[] => {
  return parisArrondissements.filter(arr => arr.priority === 'haute');
};
