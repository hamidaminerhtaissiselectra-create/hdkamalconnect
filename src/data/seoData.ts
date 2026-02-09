// Données SEO centralisées pour toutes les pages

export const frenchCities = [
  // Top 25 villes françaises + Île-de-France
  { name: 'Paris', slug: 'paris', dept: '75', region: 'Île-de-France' },
  { name: 'Marseille', slug: 'marseille', dept: '13', region: "Provence-Alpes-Côte d'Azur" },
  { name: 'Lyon', slug: 'lyon', dept: '69', region: 'Auvergne-Rhône-Alpes' },
  { name: 'Toulouse', slug: 'toulouse', dept: '31', region: 'Occitanie' },
  { name: 'Nice', slug: 'nice', dept: '06', region: "Provence-Alpes-Côte d'Azur" },
  { name: 'Nantes', slug: 'nantes', dept: '44', region: 'Pays de la Loire' },
  { name: 'Montpellier', slug: 'montpellier', dept: '34', region: 'Occitanie' },
  { name: 'Strasbourg', slug: 'strasbourg', dept: '67', region: 'Grand Est' },
  { name: 'Bordeaux', slug: 'bordeaux', dept: '33', region: 'Nouvelle-Aquitaine' },
  { name: 'Lille', slug: 'lille', dept: '59', region: 'Hauts-de-France' },
  { name: 'Rennes', slug: 'rennes', dept: '35', region: 'Bretagne' },
  { name: 'Reims', slug: 'reims', dept: '51', region: 'Grand Est' },
  { name: 'Saint-Étienne', slug: 'saint-etienne', dept: '42', region: 'Auvergne-Rhône-Alpes' },
  { name: 'Toulon', slug: 'toulon', dept: '83', region: "Provence-Alpes-Côte d'Azur" },
  { name: 'Le Havre', slug: 'le-havre', dept: '76', region: 'Normandie' },
  { name: 'Grenoble', slug: 'grenoble', dept: '38', region: 'Auvergne-Rhône-Alpes' },
  { name: 'Dijon', slug: 'dijon', dept: '21', region: 'Bourgogne-Franche-Comté' },
  { name: 'Angers', slug: 'angers', dept: '49', region: 'Pays de la Loire' },
  { name: 'Nîmes', slug: 'nimes', dept: '30', region: 'Occitanie' },
  { name: 'Villeurbanne', slug: 'villeurbanne', dept: '69', region: 'Auvergne-Rhône-Alpes' },
  { name: 'Aix-en-Provence', slug: 'aix-en-provence', dept: '13', region: "Provence-Alpes-Côte d'Azur" },
  { name: 'Clermont-Ferrand', slug: 'clermont-ferrand', dept: '63', region: 'Auvergne-Rhône-Alpes' },
  { name: 'Le Mans', slug: 'le-mans', dept: '72', region: 'Pays de la Loire' },
  { name: 'Brest', slug: 'brest', dept: '29', region: 'Bretagne' },
  { name: 'Tours', slug: 'tours', dept: '37', region: 'Centre-Val de Loire' },
  // Île-de-France (petite et grande couronne)
  { name: 'Boulogne-Billancourt', slug: 'boulogne-billancourt', dept: '92', region: 'Île-de-France' },
  { name: 'Saint-Denis', slug: 'saint-denis', dept: '93', region: 'Île-de-France' },
  { name: 'Argenteuil', slug: 'argenteuil', dept: '95', region: 'Île-de-France' },
  { name: 'Montreuil', slug: 'montreuil', dept: '93', region: 'Île-de-France' },
  { name: 'Créteil', slug: 'creteil', dept: '94', region: 'Île-de-France' },
  { name: 'Nanterre', slug: 'nanterre', dept: '92', region: 'Île-de-France' },
  { name: 'Versailles', slug: 'versailles', dept: '78', region: 'Île-de-France' },
  { name: 'Vincennes', slug: 'vincennes', dept: '94', region: 'Île-de-France' },
  { name: 'Vitry-sur-Seine', slug: 'vitry-sur-seine', dept: '94', region: 'Île-de-France' },
  { name: 'Colombes', slug: 'colombes', dept: '92', region: 'Île-de-France' },
];

export const services = [
  {
    id: 'videosurveillance',
    name: 'Vidéosurveillance',
    slug: 'videosurveillance',
    shortDesc: 'Installation de caméras de surveillance HD et 4K',
    keywords: 'caméra surveillance, vidéosurveillance, CCTV, caméra IP, NVR',
  },
  {
    id: 'alarme',
    name: 'Alarme',
    slug: 'alarme',
    shortDesc: 'Systèmes d\'alarme anti-intrusion certifiés',
    keywords: 'alarme maison, alarme intrusion, détecteur mouvement, sirène',
  },
  {
    id: 'controle-acces',
    name: 'Contrôle d\'Accès',
    slug: 'controle-acces',
    shortDesc: 'Contrôle d\'accès biométrique et badges',
    keywords: 'contrôle accès, badge, biométrie, interphone, digicode',
  },
  {
    id: 'domotique',
    name: 'Domotique',
    slug: 'domotique',
    shortDesc: 'Maison intelligente et automatisation',
    keywords: 'domotique, maison connectée, smart home, automatisation',
  },
  {
    id: 'reseau',
    name: 'Réseau',
    slug: 'reseau',
    shortDesc: 'Infrastructure réseau et câblage',
    keywords: 'réseau informatique, câblage RJ45, fibre optique, baie brassage',
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    slug: 'maintenance',
    shortDesc: 'Dépannage et maintenance sécurité',
    keywords: 'dépannage alarme, maintenance caméra, réparation sécurité',
  },
  {
    id: 'antenne-satellite',
    name: 'Antenne & Satellite',
    slug: 'antenne-satellite',
    shortDesc: 'Installation antenne TNT et parabole',
    keywords: 'antenne TNT, parabole satellite, installation antenne',
  },
  {
    id: 'portails-parking',
    name: 'Portails & Parking',
    slug: 'portails-parking',
    shortDesc: 'Motorisation portails et barrières',
    keywords: 'portail automatique, motorisation, barrière parking',
  },
];

export const generateServiceSEO = (serviceSlug: string, cityName?: string) => {
  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) return null;

  const city = cityName ? frenchCities.find((c) => c.name === cityName) : null;
  const location = city ? ` à ${city.name} (${city.dept})` : ' en France';

  return {
    title: `${service.name}${location} | Installation & Dépannage | HD Connect`,
    description: `${service.shortDesc}${location}. Devis gratuit, intervention rapide 24/7. HD Connect, expert sécurité depuis 10 ans.`,
    keywords: `${service.keywords}, ${cityName || 'France'}, installation, dépannage, HD Connect`,
  };
};

export const generateCityServiceContent = (serviceSlug: string, cityName: string) => {
  const service = services.find((s) => s.slug === serviceSlug);
  const city = frenchCities.find((c) => c.name === cityName);
  
  if (!service || !city) return null;

  return {
    heroTitle: `${service.name} à ${city.name}`,
    heroSubtitle: `Expert en ${service.name.toLowerCase()} dans le ${city.dept} - ${city.region}. Installation, dépannage et maintenance par des techniciens certifiés.`,
    localAdvantages: [
      `Intervention rapide à ${city.name} et environs`,
      `Techniciens certifiés basés en ${city.region}`,
      `Devis gratuit rapidement pour ${city.name} (${city.dept})`,
      `Service après-vente local et réactif`,
    ],
  };
};
