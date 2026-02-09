// Données des villes pour les pages SEO locales - Version enrichie
export interface CityData {
  name: string;
  slug: string;
  department: string;
  departmentCode: string;
  region: string;
  regionSlug: string;
  population: string;
  description: string;
  neighborhoods?: string[];
  nearbyTowns: string[];
}

export const citiesData: CityData[] = [
  {
    name: "Bourg-en-Bresse",
    slug: "bourg-en-bresse",
    department: "Ain",
    departmentCode: "01",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "42 372",
    description: "Expert en sécurité à Bourg-en-Bresse. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Bourg-en-Bresse et ses environs.",
    nearbyTowns: ["Péronnas", "Saint-Denis-lès-Bourg", "Viriat", "Ceyzériat", "Attignat", "Vonnas", "Châtillon-sur-Chalaronne", "Bâgé-Dommartin", "Montréal-la-Cluse", "Villars-les-Dombes", "Nantua", "Bellignat"]
  },
  {
    name: "Oyonnax",
    slug: "oyonnax",
    department: "Ain",
    departmentCode: "01",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "22 480",
    description: "Expert en sécurité à Oyonnax. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Oyonnax et ses environs.",
    nearbyTowns: ["Arbent", "Saint-Claude", "Thoiry", "Valleiry", "Saint-Genis-Pouilly", "Gex", "Prévessin-Moëns", "Viry", "Cessy"]
  },
  {
    name: "Valserhône",
    slug: "valserhone",
    department: "Ain",
    departmentCode: "01",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "16 712",
    description: "Expert en sécurité à Valserhône. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Valserhône et ses environs.",
    nearbyTowns: ["Plateau d'Hauteville"]
  },
  {
    name: "Ambérieu-en-Bugey",
    slug: "amberieu-en-bugey",
    department: "Ain",
    departmentCode: "01",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "15 934",
    description: "Expert en sécurité à Ambérieu-en-Bugey. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Ambérieu-en-Bugey et ses environs.",
    nearbyTowns: ["Lagnieu", "Villieu-Loyes-Mollon", "Meximieux", "Montalieu-Vercieu", "Béligneux", "Loyettes", "Balan", "Saint-Romain-de-Jalionas", "Dagneux", "Chavanoz", "Pont-de-Chéruy", "Villette-d'Anthon"]
  },
  {
    name: "Montluçon",
    slug: "montluon",
    department: "Allier",
    departmentCode: "03",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "33 147",
    description: "Expert en sécurité à Montluçon. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Montluçon et ses environs.",
    nearbyTowns: ["Désertines", "Domérat", "Commentry", "Saint-Éloy-les-Mines"]
  },
  {
    name: "Vichy",
    slug: "vichy",
    department: "Allier",
    departmentCode: "03",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "25 115",
    description: "Expert en sécurité à Vichy. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Vichy et ses environs.",
    nearbyTowns: ["Bellerive-sur-Allier", "Creuzier-le-Vieux", "Cusset", "Saint-Germain-des-Fossés", "Gannat", "Varennes-sur-Allier", "Saint-Pourçain-sur-Sioule", "Lapalisse", "Maringues", "Thiers", "Lezoux"]
  },
  {
    name: "Moulins",
    slug: "moulins",
    department: "Allier",
    departmentCode: "03",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "19 206",
    description: "Expert en sécurité à Moulins. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Moulins et ses environs.",
    nearbyTowns: ["Avermes", "Yzeure", "Bourbon-Lancy"]
  },
  {
    name: "Annonay",
    slug: "annonay",
    department: "Ardèche",
    departmentCode: "07",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "17 274",
    description: "Expert en sécurité à Annonay. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Annonay et ses environs.",
    nearbyTowns: ["Davézieux", "Salaise-sur-Sanne", "Le Péage-de-Roussillon", "Saint-Maurice-l'Exil", "Roussillon", "Saint-Just-Malmont", "Saint-Didier-en-Velay", "Sainte-Sigolène", "Beaurepaire"]
  },
  {
    name: "Aurillac",
    slug: "aurillac",
    department: "Cantal",
    departmentCode: "15",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "26 214",
    description: "Expert en sécurité à Aurillac. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Aurillac et ses environs.",
    nearbyTowns: ["Arpajon-sur-Cère", "Ytrac", "Mauriac"]
  },
  {
    name: "Montélimar",
    slug: "montelimar",
    department: "Drôme",
    departmentCode: "26",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "40 595",
    description: "Expert en sécurité à Montélimar. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Montélimar et ses environs.",
    nearbyTowns: ["Le Teil", "Viviers", "Donzère", "Chomérac", "Villeneuve-de-Berg", "Pierrelatte", "Privas", "Loriol-sur-Drôme", "Bourg-Saint-Andéol", "Saint-Paul-Trois-Châteaux", "Dieulefit", "Livron-sur-Drôme"]
  },
  {
    name: "Romans-sur-Isère",
    slug: "romans-sur-isere",
    department: "Drôme",
    departmentCode: "26",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "33 464",
    description: "Expert en sécurité à Romans-sur-Isère. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Romans-sur-Isère et ses environs.",
    nearbyTowns: ["Mours-Saint-Eusèbe", "Bourg-de-Péage", "Chatuzange-le-Goubet", "Saint-Donat-sur-l'Herbasse", "Pont-de-l'Isère", "Tain-l'Hermitage", "La Roche-de-Glun", "Tournon-sur-Rhône", "Saint-Vallier", "Saint-Marcellin", "Anneyron", "Saint-Rambert-d'Albon"]
  },
  {
    name: "Le Puy-en-Velay",
    slug: "le-puy-en-velay",
    department: "Haute-Loire",
    departmentCode: "43",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "18 540",
    description: "Expert en sécurité à Le Puy-en-Velay. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Le Puy-en-Velay et ses environs.",
    nearbyTowns: ["Brives-Charensac", "Vals-près-le-Puy", "Espaly-Saint-Marcel", "Coubon", "Saint-Germain-Laprade", "Yssingeaux", "Retournac", "Langeac", "Tence"]
  },
  {
    name: "Thonon-les-Bains",
    slug: "thonon-les-bains",
    department: "Haute-Savoie",
    departmentCode: "74",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "37 928",
    description: "Expert en sécurité à Thonon-les-Bains. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Thonon-les-Bains et ses environs.",
    nearbyTowns: ["Allinges", "Publier", "Évian-les-Bains", "Sciez", "Neuvecelle", "Bons-en-Chablais", "Douvaine", "Chens-sur-Léman", "Saint-Cergues", "Veigy-Foncenex", "Cranves-Sales", "Viuz-en-Sallaz"]
  },
  {
    name: "Annemasse",
    slug: "annemasse",
    department: "Haute-Savoie",
    departmentCode: "74",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "37 628",
    description: "Expert en sécurité à Annemasse. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Annemasse et ses environs.",
    nearbyTowns: ["Vétraz-Monthoux", "Ambilly", "Ville-la-Grand", "Gaillard", "Bonne", "Reignier-Ésery", "Fillinges", "Collonges-sous-Salève", "Pers-Jussy", "Ferney-Voltaire", "Beaumont", "Ornex"]
  },
  {
    name: "Cluses",
    slug: "cluses",
    department: "Haute-Savoie",
    departmentCode: "74",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "17 795",
    description: "Expert en sécurité à Cluses. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Cluses et ses environs.",
    nearbyTowns: ["Scionzier", "Marnaz", "Thyez", "Marignier", "Magland", "Taninges", "Saint-Jeoire", "Bonneville", "Saint-Pierre-en-Faucigny", "Passy", "La Roche-sur-Foron", "Les Houches"]
  },
  {
    name: "Sallanches",
    slug: "sallanches",
    department: "Haute-Savoie",
    departmentCode: "74",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "17 319",
    description: "Expert en sécurité à Sallanches. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Sallanches et ses environs.",
    nearbyTowns: ["Saint-Gervais-les-Bains", "Chamonix-Mont-Blanc", "Passy", "Megève", "Combloux", "Domancy", "Cordon"]
  },
  {
    name: "Rumilly",
    slug: "rumilly",
    department: "Haute-Savoie",
    departmentCode: "74",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "16 442",
    description: "Expert en sécurité à Rumilly. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Rumilly et ses environs.",
    nearbyTowns: ["Alby-sur-Chéran", "Sales", "Marigny-Saint-Marcel", "Lovagny", "Sillingy", "Annecy", "Seyssel", "Frangy"]
  },
  {
    name: "Saint-Julien-en-Genevois",
    slug: "saint-julien-en-genevois",
    department: "Haute-Savoie",
    departmentCode: "74",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "16 222",
    description: "Expert en sécurité à Saint-Julien-en-Genevois. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Saint-Julien-en-Genevois et ses environs.",
    nearbyTowns: ["Divonne-les-Bains"]
  },
  {
    name: "Vienne",
    slug: "vienne",
    department: "Isère",
    departmentCode: "38",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "31 778",
    description: "Expert en sécurité à Vienne. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Vienne et ses environs.",
    nearbyTowns: ["Pont-Évêque", "Estrablin", "Chasse-sur-Rhône", "Communay", "Ternay", "Condrieu", "Givors", "Grigny-sur-Rhône", "Saint-Clair-du-Rhône", "Chaponnay", "Millery", "Montagny"]
  },
  {
    name: "Bourgoin-Jallieu",
    slug: "bourgoin-jallieu",
    department: "Isère",
    departmentCode: "38",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "30 151",
    description: "Expert en sécurité à Bourgoin-Jallieu. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Bourgoin-Jallieu et ses environs.",
    nearbyTowns: ["L'Isle-d'Abeau", "Saint-Savin", "Ruy-Montceau", "Saint-Chef", "Cessieu", "Villefontaine", "La Verpillière", "Saint-Quentin-Fallavier", "La Tour-du-Pin", "Crémieu", "Saint-Georges-d'Espéranche", "Saint-Jean-de-Bournay"]
  },
  {
    name: "Voiron",
    slug: "voiron",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "21 847",
    description: "Expert en sécurité à Voiron. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Voiron et ses environs.",
    nearbyTowns: ["Coublevie", "Saint-Jean-de-Moirans", "La Buisse", "Moirans", "Apprieu", "Rives", "Renage", "Saint-Laurent-du-Pont", "Voreppe", "Tullins", "Le Grand-Lemps", "Fontanil-Cornillon"]
  },
  {
    name: "Meylan",
    slug: "meylan",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "18 770",
    description: "Expert en sécurité à Meylan. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Meylan et ses environs.",
    nearbyTowns: ["Montbonnot-Saint-Martin", "Domène", "Saint-Ismier", "Le Versoud", "Saint-Nazaire-les-Eymes", "Bernin", "Villard-Bonnot", "Saint-Martin-d'Uriage", "Crolles", "Vaulnaveys-le-Haut", "Jarrie", "Le Pont-de-Claix"]
  },
  {
    name: "Saint-Chamond",
    slug: "saint-chamond",
    department: "Loire",
    departmentCode: "42",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "35 646",
    description: "Expert en sécurité à Saint-Chamond. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Saint-Chamond et ses environs.",
    nearbyTowns: ["L'Horme", "La Grand-Croix", "Saint-Paul-en-Jarez", "Sorbiers", "Lorette", "Genilac", "Rive-de-Gier", "Saint-Martin-la-Plaine", "Saint-Héand", "Pélussin", "Chabanière", "Saint-Symphorien-sur-Coise"]
  },
  {
    name: "Roanne",
    slug: "roanne",
    department: "Loire",
    departmentCode: "42",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "35 409",
    description: "Expert en sécurité à Roanne. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Roanne et ses environs.",
    nearbyTowns: ["Le Coteau", "Riorges", "Mably", "Commelle-Vernay", "Villerest", "Renaison", "Charlieu", "Thizy-les-Bourgs", "Amplepuis", "Cours", "Chauffailles", "Tarare"]
  },
  {
    name: "Montbrison",
    slug: "montbrison",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "16 123",
    description: "Expert en sécurité à Montbrison. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Montbrison et ses environs.",
    nearbyTowns: ["Savigneux", "Saint-Romain-le-Puy", "Sury-le-Comtal", "Montrond-les-Bains", "Saint-Marcellin-en-Forez", "Bonson", "Boën-sur-Lignon", "Veauche", "Andrézieux-Bouthéon", "Saint-Galmier", "Feurs", "Chazelles-sur-Lyon"]
  },
  {
    name: "Saint-Just-Saint-Rambert",
    slug: "saint-just-saint-rambert",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "15 764",
    description: "Expert en sécurité à Saint-Just-Saint-Rambert. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Saint-Just-Saint-Rambert et ses environs.",
    nearbyTowns: ["Aurec-sur-Loire", "Bas-en-Basset", "Monistrol-sur-Loire", "Saint-Martin-en-Haut"]
  },
  {
    name: "Cournon-d'Auvergne",
    slug: "cournon-d-auvergne",
    department: "Puy-de-Dôme",
    departmentCode: "63",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "19 951",
    description: "Expert en sécurité à Cournon-d'Auvergne. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Cournon-d'Auvergne et ses environs.",
    nearbyTowns: ["Le Cendre", "Mur-sur-Allier", "La Roche-Blanche", "Les Martres-de-Veyre", "Pont-du-Château", "Veyre-Monton", "Vertaizon", "Billom", "Vic-le-Comte", "Saint-Genès-Champanelle", "Orcines", "Mozac"]
  },
  {
    name: "Riom",
    slug: "riom",
    department: "Puy-de-Dôme",
    departmentCode: "63",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "18 820",
    description: "Expert en sécurité à Riom. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Riom et ses environs.",
    nearbyTowns: ["Châtel-Guyon", "Volvic"]
  },
  {
    name: "Issoire",
    slug: "issoire",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "15 115",
    description: "Expert en sécurité à Issoire. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Issoire et ses environs.",
    nearbyTowns: ["Brassac-les-Mines", "Sainte-Florine", "Brioude", "Courpière"]
  },
  {
    name: "Villefranche-sur-Saône",
    slug: "villefranche-sur-saone",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "36 172",
    description: "Expert en sécurité à Villefranche-sur-Saône. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Villefranche-sur-Saône et ses environs.",
    nearbyTowns: ["Limas", "Jassans-Riottier", "Gleizé", "Arnas", "Anse", "Trévoux", "Porte des Pierres Dorées", "Quincieux", "Saint-Georges-de-Reneins", "Reyrieux", "Montmerle-sur-Saône", "Chazay-d'Azergues"]
  },
  {
    name: "Aix-les-Bains",
    slug: "aix-les-bains",
    department: "Savoie",
    departmentCode: "73",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "32 406",
    description: "Expert en sécurité à Aix-les-Bains. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Aix-les-Bains et ses environs.",
    nearbyTowns: ["Grésy-sur-Aix", "Entrelacs", "Yenne", "Belley", "Saint-Genix-les-Villages", "Culoz-Béon", "Saint-Pierre-d'Albigny", "Montmélian", "Doussard", "Chapareillan", "Le Pont-de-Beauvoisin", "Les Avenières Veyrins-Thuellin"]
  },
  {
    name: "Albertville",
    slug: "albertville",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "19 978",
    description: "Expert en sécurité à Albertville. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Albertville et ses environs.",
    nearbyTowns: ["Gilly-sur-Isère", "Mercury", "Faverges-Seythenex", "Ugine", "Grand-Aigueblanche", "Aime-la-Plagne", "Moûtiers", "Thônes", "La Plagne Tarentaise", "Bourg-Saint-Maurice", "Valgelon-La Rochette", "Les Belleville"]
  },
  {
    name: "Beaune",
    slug: "beaune",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "20 352",
    description: "Expert en sécurité à Beaune. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Beaune et ses environs.",
    nearbyTowns: []
  },
  {
    name: "Montbéliard",
    slug: "montbeliard",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "24 672",
    description: "Expert en sécurité à Montbéliard. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Montbéliard et ses environs.",
    nearbyTowns: ["Voujeaucourt", "Bavans", "Audincourt", "Valentigney", "Seloncourt", "Mandeure", "Beaucourt", "Hérimoncourt", "Pont-de-Roide-Vermondans", "Delle", "Lure", "Maîche"]
  },
  {
    name: "Pontarlier",
    slug: "pontarlier",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "18 067",
    description: "Expert en sécurité à Pontarlier. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Pontarlier et ses environs.",
    nearbyTowns: ["Doubs", "Morteau", "Les Fins", "Villers-le-Lac"]
  },
  {
    name: "Vesoul",
    slug: "vesoul",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "15 078",
    description: "Expert en sécurité à Vesoul. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Vesoul et ses environs.",
    nearbyTowns: ["Échenoz-la-Méline", "Luxeuil-les-Bains"]
  },
  {
    name: "Dole",
    slug: "dole",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "23 840",
    description: "Expert en sécurité à Dole. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Dole et ses environs.",
    nearbyTowns: ["Tavaux", "Auxonne", "Arbois", "Poligny"]
  },
  {
    name: "Lons-le-Saunier",
    slug: "lons-le-saunier",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "16 618",
    description: "Expert en sécurité à Lons-le-Saunier. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Lons-le-Saunier et ses environs.",
    nearbyTowns: ["Montmorot", "Champagnole"]
  },
  {
    name: "Nevers",
    slug: "nevers",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "33 085",
    description: "Expert en sécurité à Nevers. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Nevers et ses environs.",
    nearbyTowns: ["Coulanges-lès-Nevers", "Marzy", "Varennes-Vauzelles", "Fourchambault", "Garchizy", "Imphy", "La Guerche-sur-l'Aubois", "La Charité-sur-Loire", "La Machine", "Decize"]
  },
  {
    name: "Le Creusot",
    slug: "le-creusot",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "20 509",
    description: "Expert en sécurité à Le Creusot. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Le Creusot et ses environs.",
    nearbyTowns: ["Blanzy", "Autun", "Saint-Vallier", "Sanvignes-les-Mines"]
  },
  {
    name: "Montceau-les-Mines",
    slug: "montceau-les-mines",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "17 064",
    description: "Expert en sécurité à Montceau-les-Mines. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Montceau-les-Mines et ses environs.",
    nearbyTowns: ["Gueugnon", "Paray-le-Monial", "Digoin"]
  },
  {
    name: "Sens",
    slug: "sens",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "27 106",
    description: "Expert en sécurité à Sens. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Sens et ses environs.",
    nearbyTowns: ["Paron", "Villeneuve-sur-Yonne", "Pont-sur-Yonne", "Villeneuve-la-Guyard", "Courtenay", "Varennes-sur-Seine"]
  },
  {
    name: "Lannion",
    slug: "lannion",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "20 315",
    description: "Expert en sécurité à Lannion. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Lannion et ses environs.",
    nearbyTowns: ["Louannec", "Ploubezre", "Pleumeur-Bodou", "Trébeurden", "Perros-Guirec", "Plestin-les-Grèves", "Bégard", "Plougasnou", "Plouigneau", "Guingamp", "Paimpol", "Plougonven"]
  },
  {
    name: "Lamballe-Armor",
    slug: "lamballe-armor",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "17 241",
    description: "Expert en sécurité à Lamballe-Armor. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Lamballe-Armor et ses environs.",
    nearbyTowns: ["Pléneuf-Val-André", "Erquy", "Le Mené", "Plœuc-L'Hermitage", "Saint-Quay-Portrieux", "Merdrignac", "Dinan", "Châtelaudren-Plouagat"]
  },
  {
    name: "Concarneau",
    slug: "concarneau",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "20 845",
    description: "Expert en sécurité à Concarneau. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Concarneau et ses environs.",
    nearbyTowns: ["Melgven", "Trégunc", "Rosporden", "Fouesnant", "Bannalec", "Riec-sur-Bélon", "Scaër", "Moëlan-sur-Mer", "Loctudy", "Mellac", "Pont-l'Abbé", "Quimperlé"]
  },
  {
    name: "Landerneau",
    slug: "landerneau",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "16 363",
    description: "Expert en sécurité à Landerneau. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Landerneau et ses environs.",
    nearbyTowns: ["Plouédern", "Ploudaniel", "Loperhet", "Le Folgoët", "Lesneven", "Landivisiau", "Plouvien", "Pont-de-Buis-lès-Quimerch", "Lannilis", "Plouguerneau", "Plouescat", "Saint-Thégonnec Loc-Eguiner"]
  },
  {
    name: "Morlaix",
    slug: "morlaix",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "15 194",
    description: "Expert en sécurité à Morlaix. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Morlaix et ses environs.",
    nearbyTowns: ["Saint-Martin-des-Champs", "Plourin-lès-Morlaix", "Carantec", "Pleyber-Christ", "Saint-Pol-de-Léon", "Roscoff", "Cléder"]
  },
  {
    name: "Fougères",
    slug: "fougeres",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "20 307",
    description: "Expert en sécurité à Fougères. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Fougères et ses environs.",
    nearbyTowns: ["Lécousse", "Maen Roch", "Louvigné-du-Désert", "Saint-Aubin-du-Cormier", "Val-Couesnon", "Saint-James", "Saint-Hilaire-du-Harcouët", "La Bouëxière", "Liffré", "Châteaubourg", "Isigny-le-Buat", "Pontorson"]
  },
  {
    name: "Bruz",
    slug: "bruz",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "19 683",
    description: "Expert en sécurité à Bruz. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Bruz et ses environs.",
    nearbyTowns: ["Pont-Péan", "Chavagne", "Laillé", "Goven", "Saint-Erblon", "Orgères", "Guichen", "Bréal-sous-Montfort", "Bourgbarré", "Mordelles", "Vern-sur-Seiche", "Bourg-des-Comptes"]
  },
  {
    name: "Vitré",
    slug: "vitre",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "19 365",
    description: "Expert en sécurité à Vitré. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Vitré et ses environs.",
    nearbyTowns: ["La Guerche-de-Bretagne", "Piré-Chancé", "Servon-sur-Vilaine", "Châteaugiron", "Noyal-sur-Vilaine", "Acigné", "Retiers", "Domloup", "Nouvoitou", "Janzé", "Thorigné-Fouillard", "Corps-Nuds"]
  },
  {
    name: "Vierzon",
    slug: "vierzon",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "25 068",
    description: "Expert en sécurité à Vierzon. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Vierzon et ses environs.",
    nearbyTowns: ["Salbris"]
  },
  {
    name: "Dreux",
    slug: "dreux",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "31 543",
    description: "Expert en sécurité à Dreux. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Dreux et ses environs.",
    nearbyTowns: ["Vernouillet", "Saint-Rémy-sur-Avre", "Saint-Lubin-des-Joncherets", "Ézy-sur-Eure", "Houdan", "Senonches", "Verneuil d'Avre et d'Iton"]
  },
  {
    name: "Châteauroux",
    slug: "chteauroux",
    department: "Indre",
    departmentCode: "36",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "42 963",
    description: "Expert en sécurité à Châteauroux. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Châteauroux et ses environs.",
    nearbyTowns: ["Déols", "Saint-Maur", "Le Poinçonnet", "Ardentes", "Buzançais", "Argenton-sur-Creuse", "La Châtre"]
  },
  {
    name: "Romorantin-Lanthenay",
    slug: "romorantin-lanthenay",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "18 373",
    description: "Expert en sécurité à Romorantin-Lanthenay. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Romorantin-Lanthenay et ses environs.",
    nearbyTowns: ["Selles-sur-Cher", "Lamotte-Beuvron"]
  },
  {
    name: "Vendôme",
    slug: "vendome",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "15 758",
    description: "Expert en sécurité à Vendôme. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Vendôme et ses environs.",
    nearbyTowns: ["Saint-Ouen", "Montoire-sur-le-Loir", "Cloyes-les-Trois-Rivières", "Vald'Yerre", "Beauce la Romaine"]
  },
  {
    name: "Charleville-Mézières",
    slug: "charleville-mezieres",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "45 560",
    description: "Expert en sécurité à Charleville-Mézières. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Charleville-Mézières et ses environs.",
    nearbyTowns: ["Nouzonville", "Villers-Semeuse", "Bogny-sur-Meuse", "Vrigne aux Bois", "Revin", "Fumay"]
  },
  {
    name: "Sedan",
    slug: "sedan",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "16 667",
    description: "Expert en sécurité à Sedan. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Sedan et ses environs.",
    nearbyTowns: ["Vouziers"]
  },
  {
    name: "Haguenau",
    slug: "haguenau",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "36 391",
    description: "Expert en sécurité à Haguenau. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Haguenau et ses environs.",
    nearbyTowns: ["Schweighouse-sur-Moder", "Oberhoffen-sur-Moder", "Bischwiller", "Betschdorf", "Mertzwiller", "Soufflenheim", "Drusenheim", "Soultz-sous-Forêts", "Gundershoffen", "Herrlisheim", "Weyersheim", "Val-de-Moder"]
  },
  {
    name: "Sélestat",
    slug: "selestat",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "19 589",
    description: "Expert en sécurité à Sélestat. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Sélestat et ses environs.",
    nearbyTowns: ["Benfeld", "Barr", "Sainte-Marie-aux-Mines", "Gerstheim", "Obernai", "Erstein", "Bischoffsheim", "Rosheim", "Plobsheim", "Duttlenheim", "Mutzig", "Fegersheim"]
  },
  {
    name: "Saint-Louis",
    slug: "saint-louis",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "22 805",
    description: "Expert en sécurité à Saint-Louis. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Saint-Louis et ses environs.",
    nearbyTowns: ["Village-Neuf", "Huningue", "Blotzheim", "Hégenheim", "Bartenheim", "Kembs", "Sierentz", "Habsheim", "Altkirch", "Ensisheim", "Pulversheim", "Staffelfelden"]
  },
  {
    name: "Saint-Dizier",
    slug: "saint-dizier",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "22 858",
    description: "Expert en sécurité à Saint-Dizier. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Saint-Dizier et ses environs.",
    nearbyTowns: ["Bar-le-Duc", "Ligny-en-Barrois"]
  },
  {
    name: "Chaumont",
    slug: "chaumont",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "20 827",
    description: "Expert en sécurité à Chaumont. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Chaumont et ses environs.",
    nearbyTowns: ["Nogent", "Langres"]
  },
  {
    name: "Châlons-en-Champagne",
    slug: "chlons-en-champagne",
    department: "Marne",
    departmentCode: "51",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "42 971",
    description: "Expert en sécurité à Châlons-en-Champagne. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Châlons-en-Champagne et ses environs.",
    nearbyTowns: ["Saint-Memmie", "Fagnières", "Suippes", "Blancs-Coteaux", "Vitry-le-François"]
  },
  {
    name: "Épernay",
    slug: "epernay",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "22 174",
    description: "Expert en sécurité à Épernay. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Épernay et ses environs.",
    nearbyTowns: ["Montmirail"]
  },
  {
    name: "Lunéville",
    slug: "luneville",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "18 262",
    description: "Expert en sécurité à Lunéville. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Lunéville et ses environs.",
    nearbyTowns: ["Blainville-sur-l'Eau", "Damelevières", "Dombasle-sur-Meurthe", "Varangéville", "Saint-Nicolas-de-Port", "Laneuveville-devant-Nancy", "Pulnoy", "Seichamps", "Ludres", "Neuves-Maisons", "Bouxières-aux-Dames", "Frouard"]
  },
  {
    name: "Toul",
    slug: "toul",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "15 768",
    description: "Expert en sécurité à Toul. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Toul et ses environs.",
    nearbyTowns: ["Écrouves", "Liverdun", "Pompey", "Dieulouard", "Custines", "Blénod-lès-Pont-à-Mousson", "Commercy", "Pont-à-Mousson"]
  },
  {
    name: "Longwy",
    slug: "longwy",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "15 679",
    description: "Expert en sécurité à Longwy. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Longwy et ses environs.",
    nearbyTowns: ["Herserange", "Réhon", "Mont-Saint-Martin", "Lexy", "Haucourt-Moulaine", "Hussigny-Godbrange", "Villerupt", "Longuyon", "Audun-le-Tiche", "Fontoy", "Val de Briey"]
  },
  {
    name: "Verdun",
    slug: "verdun",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "16 890",
    description: "Expert en sécurité à Verdun. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Verdun et ses environs.",
    nearbyTowns: ["Thierville-sur-Meuse", "Belleville-sur-Meuse", "Étain", "Sainte-Menehould", "Saint-Mihiel"]
  },
  {
    name: "Forbach",
    slug: "forbach",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "20 493",
    description: "Expert en sécurité à Forbach. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Forbach et ses environs.",
    nearbyTowns: ["Stiring-Wendel", "Petite-Rosselle", "Behren-lès-Forbach", "Spicheren", "Cocheren", "Freyming-Merlebach", "Farébersviller", "Grosbliederstroff", "Hombourg-Haut", "L'Hôpital", "Carling", "Puttelange-aux-Lacs"]
  },
  {
    name: "Sarreguemines",
    slug: "sarreguemines",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "20 143",
    description: "Expert en sécurité à Sarreguemines. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Sarreguemines et ses environs.",
    nearbyTowns: ["Sarralbe", "Saint-Avold", "Valmont", "Folschviller", "Bitche", "Longeville-lès-Saint-Avold", "Creutzwald"]
  },
  {
    name: "Épinal",
    slug: "epinal",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "32 251",
    description: "Expert en sécurité à Épinal. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Épinal et ses environs.",
    nearbyTowns: ["Chantraine", "Golbey", "Thaon-les-Vosges", "Éloyes", "Saint-Nabord", "Saint-Étienne-lès-Remiremont", "Remiremont", "Rambervillers", "Vagney", "Le Val-d'Ajol", "Charmes", "Gérardmer"]
  },
  {
    name: "Saint-Dié-des-Vosges",
    slug: "saint-die-des-vosges",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "19 251",
    description: "Expert en sécurité à Saint-Dié-des-Vosges. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Saint-Dié-des-Vosges et ses environs.",
    nearbyTowns: ["Moyenmoutier", "Raon-l'Étape", "Anould", "Baccarat", "La Bresse", "Munster"]
  },
  {
    name: "Saint-Quentin",
    slug: "saint-quentin",
    department: "Aisne",
    departmentCode: "02",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "52 813",
    description: "Expert en sécurité à Saint-Quentin. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Saint-Quentin et ses environs.",
    nearbyTowns: ["Gauchy", "Ham", "Bohain-en-Vermandois", "Tergnier", "Guise", "Chauny", "Péronne", "Caudry", "Le Cateau-Cambrésis", "Proville"]
  },
  {
    name: "Soissons",
    slug: "soissons",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "28 046",
    description: "Expert en sécurité à Soissons. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Soissons et ses environs.",
    nearbyTowns: ["Belleu", "Crouy", "Villers-Cotterêts"]
  },
  {
    name: "Laon",
    slug: "laon",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "24 220",
    description: "Expert en sécurité à Laon. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Laon et ses environs.",
    nearbyTowns: []
  },
  {
    name: "Château-Thierry",
    slug: "chteau-thierry",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "15 097",
    description: "Expert en sécurité à Château-Thierry. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Château-Thierry et ses environs.",
    nearbyTowns: []
  },
  {
    name: "Villeneuve-d'Ascq",
    slug: "villeneuve-d-ascq",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "62 868",
    description: "Expert en sécurité à Villeneuve-d'Ascq. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Villeneuve-d'Ascq et ses environs.",
    nearbyTowns: ["Hem", "Chéreng", "Toufflers", "Baisieux", "Lesquin", "Leers", "Fretin", "Cysoing", "Templemars", "Wambrechies", "Templeuve-en-Pévèle", "Pont-à-Marcq"]
  },
  {
    name: "Cambrai",
    slug: "cambrai",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "31 134",
    description: "Expert en sécurité à Cambrai. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Cambrai et ses environs.",
    nearbyTowns: ["Neuville-Saint-Rémy", "Escaudœuvres", "Iwuy", "Avesnes-les-Aubert", "Bouchain", "Arleux", "Rœulx", "Lourches", "Aniche", "Auberchicourt", "Douchy-les-Mines", "Abscon"]
  },
  {
    name: "Maubeuge",
    slug: "maubeuge",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "28 767",
    description: "Expert en sécurité à Maubeuge. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Maubeuge et ses environs.",
    nearbyTowns: ["Louvroil", "Rousies", "Feignies", "Ferrière-la-Grande", "Hautmont", "Boussois", "Jeumont", "Bavay", "Aulnoye-Aymeries", "Berlaimont", "Avesnes-sur-Helpe", "Le Quesnoy"]
  },
  {
    name: "Armentières",
    slug: "armentieres",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "26 998",
    description: "Expert en sécurité à Armentières. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Armentières et ses environs.",
    nearbyTowns: ["Nieppe", "La Chapelle-d'Armentières", "Houplines", "Erquinghem-Lys", "Pérenchies", "Sailly-sur-la-Lys", "Steenwerck", "Quesnoy-sur-Deûle", "Hallennes-lez-Haubourdin", "Bailleul", "Laventie", "Comines"]
  },
  {
    name: "Hazebrouck",
    slug: "hazebrouck",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "21 912",
    description: "Expert en sécurité à Hazebrouck. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Hazebrouck et ses environs.",
    nearbyTowns: ["Steenvoorde", "Merville", "Aire-sur-la-Lys", "Isbergues", "Estaires", "Arques", "Wormhout", "La Gorgue", "Blendecques", "Lillers", "Saint-Omer", "Longuenesse"]
  },
  {
    name: "Denain",
    slug: "denain",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "20 665",
    description: "Expert en sécurité à Denain. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Denain et ses environs.",
    nearbyTowns: ["Haveluy", "Escaudain", "Wallers", "Hornaing", "Maing", "Fenain", "Somain", "Hasnon", "Pecquencourt", "Marchiennes", "Masny", "Escautpont"]
  },
  {
    name: "Saint-Amand-les-Eaux",
    slug: "saint-amand-les-eaux",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "15 974",
    description: "Expert en sécurité à Saint-Amand-les-Eaux. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Saint-Amand-les-Eaux et ses environs.",
    nearbyTowns: ["Lecelles", "Hergnies", "Vieux-Condé", "Fresnes-sur-Escaut", "Condé-sur-l'Escaut", "Quarouble", "Crespin", "Orchies", "Quiévrechain", "Coutiches", "Flines-lez-Raches", "Mérignies"]
  },
  {
    name: "Beauvais",
    slug: "beauvais",
    department: "Oise",
    departmentCode: "60",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "55 550",
    description: "Expert en sécurité à Beauvais. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Beauvais et ses environs.",
    nearbyTowns: ["Bresles", "Crèvecœur-le-Grand", "Sainte-Geneviève", "Mouy", "Andeville", "Agnetz", "Méru", "Chaumont-en-Vexin", "Clermont", "Saint-Just-en-Chaussée", "Breuil-le-Vert", "Breteuil"]
  },
  {
    name: "Compiègne",
    slug: "compiegne",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "40 761",
    description: "Expert en sécurité à Compiègne. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Compiègne et ses environs.",
    nearbyTowns: ["Margny-lès-Compiègne", "Choisy-au-Bac", "Lacroix-Saint-Ouen", "Thourotte", "Béthisy-Saint-Pierre", "Verberie", "Ribécourt-Dreslincourt", "Estrées-Saint-Denis", "Crépy-en-Valois", "Pontpoint", "Pont-Sainte-Maxence", "Noyon"]
  },
  {
    name: "Creil",
    slug: "creil",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "36 301",
    description: "Expert en sécurité à Creil. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Creil et ses environs.",
    nearbyTowns: ["Nogent-sur-Oise", "Villers-Saint-Paul", "Saint-Maximin", "Montataire", "Verneuil-en-Halatte", "Laigneville", "Saint-Leu-d'Esserent", "Liancourt", "Chantilly", "Gouvieux", "Senlis", "Précy-sur-Oise"]
  },
  {
    name: "Arras",
    slug: "arras",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "42 875",
    description: "Expert en sécurité à Arras. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Arras et ses environs.",
    nearbyTowns: ["Achicourt", "Saint-Nicolas", "Sainte-Catherine", "Saint-Laurent-Blangy", "Beaurains", "Dainville", "Vimy", "Biache-Saint-Vaast", "Angres", "Méricourt", "Aix-Noulette", "Rouvroy"]
  },
  {
    name: "Lens",
    slug: "lens",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "32 920",
    description: "Expert en sécurité à Lens. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Lens et ses environs.",
    nearbyTowns: ["Loos-en-Gohelle", "Loison-sous-Lens", "Sallaumines", "Liévin", "Avion", "Noyelles-sous-Lens", "Vendin-le-Vieil", "Hulluch", "Annay", "Grenay", "Harnes", "Fouquières-lès-Lens"]
  },
  {
    name: "Hénin-Beaumont",
    slug: "henin-beaumont",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "25 688",
    description: "Expert en sécurité à Hénin-Beaumont. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Hénin-Beaumont et ses environs.",
    nearbyTowns: ["Montigny-en-Gohelle", "Noyelles-Godault", "Dourges", "Billy-Montigny", "Courrières", "Courcelles-lès-Lens", "Évin-Malmaison", "Oignies", "Ostricourt", "Leforest", "Libercourt", "Carvin"]
  },
  {
    name: "Béthune",
    slug: "bethune",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "25 224",
    description: "Expert en sécurité à Béthune. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Béthune et ses environs.",
    nearbyTowns: ["Annezin", "Verquin", "Beuvry", "Nœux-les-Mines", "Haillicourt", "Lapugnoy", "Bruay-la-Buissière", "Barlin", "Mazingarbe", "Sains-en-Gohelle", "Vermelles", "Lestrem"]
  },
  {
    name: "Abbeville",
    slug: "abbeville",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "22 395",
    description: "Expert en sécurité à Abbeville. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Abbeville et ses environs.",
    nearbyTowns: ["Friville-Escarbotin", "Hesdin-la-Forêt"]
  },
  {
    name: "Lisieux",
    slug: "lisieux",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Normandie",
    regionSlug: "normandie",
    population: "19 645",
    description: "Expert en sécurité à Lisieux. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Lisieux et ses environs.",
    nearbyTowns: ["Livarot-Pays-d'Auge", "Mézidon Vallée d'Auge", "Saint-Pierre-en-Auge", "Bernay", "Dives-sur-Mer", "Argences", "Pont-Audemer", "Cabourg", "Troarn", "Moult-Chicheboville", "Brionne"]
  },
  {
    name: "Vire Normandie",
    slug: "vire-normandie",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Normandie",
    regionSlug: "normandie",
    population: "17 457",
    description: "Expert en sécurité à Vire Normandie. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Vire Normandie et ses environs.",
    nearbyTowns: ["Sourdeval", "Valdallière", "Tinchebray-Bocage", "Condé-en-Normandie", "Saint-Georges-des-Groseillers", "Flers", "Les Monts d'Aunay", "Villedieu-les-Poêles-Rouffigny", "Athis-Val de Rouvre", "Domfront en Poiraie", "Thury-Harcourt-le-Hom", "Villers-Bocage"]
  },
  {
    name: "Vernon",
    slug: "vernon",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Normandie",
    regionSlug: "normandie",
    population: "25 290",
    description: "Expert en sécurité à Vernon. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Vernon et ses environs.",
    nearbyTowns: ["Gasny", "Vexin-sur-Epte", "Les Andelys", "Magny-en-Vexin", "Étrépagny", "Val-de-Reuil", "Le Vaudreuil", "Gisors", "Romilly-sur-Andelle"]
  },
  {
    name: "Louviers",
    slug: "louviers",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Normandie",
    regionSlug: "normandie",
    population: "18 705",
    description: "Expert en sécurité à Louviers. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Louviers et ses environs.",
    nearbyTowns: ["Saint-Pierre-lès-Elbeuf", "Caudebec-lès-Elbeuf", "Le Thuit de l'Oison", "Bosroumois", "Grand Bourgtheroulde", "Bourg-Achard", "Isneauville", "Quincampoix", "Le Houlme", "Malaunay"]
  },
  {
    name: "Saint-Lô",
    slug: "saint-lo",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Normandie",
    regionSlug: "normandie",
    population: "19 471",
    description: "Expert en sécurité à Saint-Lô. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Saint-Lô et ses environs.",
    nearbyTowns: ["Agneaux", "Condé-sur-Vire", "Bourgvallées", "Torigny-les-Villes", "Isigny-sur-Mer", "Le Molay-Littry", "Carentan-les-Marais", "Saint-Sauveur-Villages", "Souleuvre en Bocage", "Coutances", "Quettreville-sur-Sienne", "Noues de Sienne"]
  },
  {
    name: "Alençon",
    slug: "alenon",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Normandie",
    regionSlug: "normandie",
    population: "25 490",
    description: "Expert en sécurité à Alençon. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Alençon et ses environs.",
    nearbyTowns: ["Saint-Germain-du-Corbéis", "Sées", "Mamers", "Argentan"]
  },
  {
    name: "Saint-Étienne-du-Rouvray",
    slug: "saint-etienne-du-rouvray",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Normandie",
    regionSlug: "normandie",
    population: "29 518",
    description: "Expert en sécurité à Saint-Étienne-du-Rouvray. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Saint-Étienne-du-Rouvray et ses environs.",
    nearbyTowns: ["Petit-Couronne", "Oissel", "Grand-Couronne", "Franqueville-Saint-Pierre", "Canteleu", "Boos", "Cléon", "Saint-Aubin-lès-Elbeuf", "Pont-de-l'Arche", "Saint-Jacques-sur-Darnétal", "Maromme", "Notre-Dame-de-Bondeville"]
  },
  {
    name: "Dieppe",
    slug: "dieppe",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Normandie",
    regionSlug: "normandie",
    population: "28 496",
    description: "Expert en sécurité à Dieppe. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Dieppe et ses environs.",
    nearbyTowns: ["Offranville", "Petit-Caux", "Saint-Nicolas-d'Aliermont", "Le Tréport", "Saint-Valery-en-Caux", "Eu", "Neufchâtel-en-Bray"]
  },
  {
    name: "Fécamp",
    slug: "fecamp",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Normandie",
    regionSlug: "normandie",
    population: "17 313",
    description: "Expert en sécurité à Fécamp. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Fécamp et ses environs.",
    nearbyTowns: ["Terres-de-Caux", "Bolbec", "Gruchet-le-Valasse", "Lillebonne", "Port-Jérôme-sur-Seine", "Yvetot", "Rives-en-Seine"]
  },
  {
    name: "Elbeuf",
    slug: "elbeuf",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Normandie",
    regionSlug: "normandie",
    population: "15 474",
    description: "Expert en sécurité à Elbeuf. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Elbeuf et ses environs.",
    nearbyTowns: ["Duclair", "Le Trait", "Barentin", "Montville", "Pavilly"]
  },
  {
    name: "Cognac",
    slug: "cognac",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "18 532",
    description: "Expert en sécurité à Cognac. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Cognac et ses environs.",
    nearbyTowns: ["Jarnac", "Châteauneuf-sur-Charente", "Barbezieux-Saint-Hilaire", "Jonzac"]
  },
  {
    name: "Saintes",
    slug: "saintes",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "25 363",
    description: "Expert en sécurité à Saintes. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Saintes et ses environs.",
    nearbyTowns: ["Chaniers", "Pons", "Gémozac", "Val-de-Cognac", "Saint-Jean-d'Angély", "Saujon", "Châteaubernard", "Médis", "Saint-Sulpice-de-Royan", "Échillais", "Tonnay-Charente", "Saint-Georges-de-Didonne"]
  },
  {
    name: "Rochefort",
    slug: "rochefort",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "23 460",
    description: "Expert en sécurité à Rochefort. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Rochefort et ses environs.",
    nearbyTowns: ["Soubise", "Fouras", "Marennes-Hiers-Brouage", "Châtelaillon-Plage", "Bourcefranc-le-Chapus", "Aigrefeuille-d'Aunis", "La Jarrie", "Le Château-d'Oléron", "Dolus-d'Oléron", "Surgères", "Arvert", "Saint-Pierre-d'Oléron"]
  },
  {
    name: "Royan",
    slug: "royan",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "19 425",
    description: "Expert en sécurité à Royan. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Royan et ses environs.",
    nearbyTowns: ["Vaux-sur-Mer", "Saint-Palais-sur-Mer", "Breuillet", "Meschers-sur-Gironde", "Soulac-sur-Mer", "La Tremblade"]
  },
  {
    name: "Brive-la-Gaillarde",
    slug: "brive-la-gaillarde",
    department: "Corrèze",
    departmentCode: "19",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "47 095",
    description: "Expert en sécurité à Brive-la-Gaillarde. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Brive-la-Gaillarde et ses environs.",
    nearbyTowns: ["Ussac", "Cosnac", "Saint-Pantaléon-de-Larche", "Malemort", "Allassac", "Objat", "Terrasson-Lavilledieu", "Tulle", "Souillac"]
  },
  {
    name: "Bressuire",
    slug: "bressuire",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "19 970",
    description: "Expert en sécurité à Bressuire. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Bressuire et ses environs.",
    nearbyTowns: ["Cerizay", "Moncoutant-sur-Sèvre", "Thouars", "Airvault", "Pouzauges", "Parthenay"]
  },
  {
    name: "Bergerac",
    slug: "bergerac",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "27 110",
    description: "Expert en sécurité à Bergerac. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Bergerac et ses environs.",
    nearbyTowns: ["Prigonrieux", "Pineuilh", "Miramont-de-Guyenne", "Montpon-Ménestérol"]
  },
  {
    name: "Villenave-d'Ornon",
    slug: "villenave-d-ornon",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "42 545",
    description: "Expert en sécurité à Villenave-d'Ornon. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Villenave-d'Ornon et ses environs.",
    nearbyTowns: ["Cadaujac", "Latresne", "Martillac", "Camblanes-et-Meynac", "Saint-Médard-d'Eyrans", "Carignan-de-Bordeaux", "Tresses", "Saint-Caprais-de-Bordeaux", "Fargues-Saint-Hilaire", "La Brède", "Sadirac", "Pompignac"]
  },
  {
    name: "La Teste-de-Buch",
    slug: "la-teste-de-buch",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "27 566",
    description: "Expert en sécurité à La Teste-de-Buch. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à La Teste-de-Buch et ses environs.",
    nearbyTowns: ["Arcachon", "Gujan-Mestras", "Le Teich", "Sanguinet", "Lège-Cap-Ferret", "Biganos", "Andernos-les-Bains", "Audenge", "Mios", "Salles", "Arès", "Lanton"]
  },
  {
    name: "Libourne",
    slug: "libourne",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "25 036",
    description: "Expert en sécurité à Libourne. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Libourne et ses environs.",
    nearbyTowns: ["Vayres", "Saint-Denis-de-Pile", "Galgon", "Izon", "Saint-Sulpice-et-Cameyrac", "Saint-Loubès", "Montussan", "Val de Virvée", "Castillon-la-Bataille", "Coutras", "Créon", "Saint-André-de-Cubzac"]
  },
  {
    name: "Ambarès-et-Lagrave",
    slug: "ambares-et-lagrave",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "17 644",
    description: "Expert en sécurité à Ambarès-et-Lagrave. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Ambarès-et-Lagrave et ses environs.",
    nearbyTowns: ["Sainte-Eulalie", "Parempuyre", "Ambès", "Ludon-Médoc", "Macau", "Arsac", "Avensan", "Saint-Savin", "Blaye", "Castelnau-de-Médoc", "Sainte-Hélène", "Saint-Selve"]
  },
  {
    name: "Cestas",
    slug: "cestas",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "16 666",
    description: "Expert en sécurité à Cestas. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Cestas et ses environs.",
    nearbyTowns: ["Marcheprime", "Le Barp", "Saucats", "Belin-Béliet", "Podensac"]
  },
  {
    name: "Mont-de-Marsan",
    slug: "mont-de-marsan",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "31 592",
    description: "Expert en sécurité à Mont-de-Marsan. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Mont-de-Marsan et ses environs.",
    nearbyTowns: ["Saint-Pierre-du-Mont", "Saint-Sever", "Tartas", "Hagetmau", "Aire-sur-l'Adour"]
  },
  {
    name: "Dax",
    slug: "dax",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "22 109",
    description: "Expert en sécurité à Dax. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Dax et ses environs.",
    nearbyTowns: ["Narrosse", "Saint-Paul-lès-Dax", "Saint-Vincent-de-Paul", "Pouillon", "Saint-Geours-de-Maremne", "Pontonx-sur-l'Adour", "Peyrehorade", "Saint-Vincent-de-Tyrosse", "Tosse", "Soustons", "Bénesse-Maremne", "Seignosse"]
  },
  {
    name: "Biscarrosse",
    slug: "biscarrosse",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "15 836",
    description: "Expert en sécurité à Biscarrosse. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Biscarrosse et ses environs.",
    nearbyTowns: ["Parentis-en-Born", "Mimizan"]
  },
  {
    name: "Villeneuve-sur-Lot",
    slug: "villeneuve-sur-lot",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "22 350",
    description: "Expert en sécurité à Villeneuve-sur-Lot. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Villeneuve-sur-Lot et ses environs.",
    nearbyTowns: ["Fumel", "Tonneins"]
  },
  {
    name: "Marmande",
    slug: "marmande",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "17 328",
    description: "Expert en sécurité à Marmande. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Marmande et ses environs.",
    nearbyTowns: ["Sainte-Bazeille", "La Réole", "Casteljaloux", "Bazas", "Langon"]
  },
  {
    name: "Hendaye",
    slug: "hendaye",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "18 102",
    description: "Expert en sécurité à Hendaye. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Hendaye et ses environs.",
    nearbyTowns: ["Urrugne", "Ciboure", "Saint-Jean-de-Luz", "Ascain", "Saint-Pée-sur-Nivelle", "Bidart", "Ustaritz", "Cambo-les-Bains"]
  },
  {
    name: "Châtellerault",
    slug: "chtellerault",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "31 003",
    description: "Expert en sécurité à Châtellerault. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Châtellerault et ses environs.",
    nearbyTowns: ["Naintré", "Jaunay-Marigny", "Descartes", "Saint-Martin-la-Pallu", "Chauvigny", "Sainte-Maure-de-Touraine"]
  },
  {
    name: "Pamiers",
    slug: "pamiers",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "16 473",
    description: "Expert en sécurité à Pamiers. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Pamiers et ses environs.",
    nearbyTowns: ["La Tour-du-Crieu", "Varilhes", "Saverdun", "Mazères", "Foix", "Cintegabelle", "Mirepoix", "Nailloux", "Auterive", "Lavelanet", "Tarascon-sur-Ariège", "Villefranche-de-Lauragais"]
  },
  {
    name: "Rodez",
    slug: "rodez",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "23 981",
    description: "Expert en sécurité à Rodez. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Rodez et ses environs.",
    nearbyTowns: ["Onet-le-Château", "Olemps", "Luc-la-Primaube", "Sébazac-Concourès", "Druelle Balsac", "Baraqueville", "Bozouls", "Espalion", "Aubin", "Decazeville"]
  },
  {
    name: "Millau",
    slug: "millau",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "22 044",
    description: "Expert en sécurité à Millau. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Millau et ses environs.",
    nearbyTowns: ["Sévérac d'Aveyron", "Saint-Affrique"]
  },
  {
    name: "Alès",
    slug: "ales",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "46 125",
    description: "Expert en sécurité à Alès. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Alès et ses environs.",
    nearbyTowns: ["Saint-Privat-des-Vieux", "Saint-Hilaire-de-Brethmas", "Saint-Martin-de-Valgalgues", "Saint-Christol-lez-Alès", "Salindres", "Saint-Julien-les-Rosiers", "Rousson", "Anduze", "La Grand-Combe", "Saint-Ambroix", "Saint-Geniès-de-Malgoirès", "Quissac"]
  },
  {
    name: "Bagnols-sur-Cèze",
    slug: "bagnols-sur-ceze",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "18 112",
    description: "Expert en sécurité à Bagnols-sur-Cèze. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Bagnols-sur-Cèze et ses environs.",
    nearbyTowns: ["Uzès", "Montfrin"]
  },
  {
    name: "Beaucaire",
    slug: "beaucaire",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "15 692",
    description: "Expert en sécurité à Beaucaire. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Beaucaire et ses environs.",
    nearbyTowns: ["Tarascon", "Redessan", "Calvisson"]
  },
  {
    name: "Auch",
    slug: "auch",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "22 428",
    description: "Expert en sécurité à Auch. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Auch et ses environs.",
    nearbyTowns: ["Mirande", "Fleurance", "Vic-Fezensac", "Gimont", "Lectoure"]
  },
  {
    name: "Muret",
    slug: "muret",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "26 079",
    description: "Expert en sécurité à Muret. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Muret et ses environs.",
    nearbyTowns: ["Eaunes", "Lherm", "Seysses", "Lavernose-Lacasse", "Lagardelle-sur-Lèze", "Labarthe-sur-Lèze", "Roquettes", "Roques", "Noé", "Pins-Justaret", "Frouzins", "Vernet"]
  },
  {
    name: "Plaisance-du-Touch",
    slug: "plaisance-du-touch",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "21 079",
    description: "Expert en sécurité à Plaisance-du-Touch. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Plaisance-du-Touch et ses environs.",
    nearbyTowns: ["La Salvetat-Saint-Gilles", "Fonsorbes", "Léguevin", "Cugnaux", "Villeneuve-Tolosane", "Fontenilles", "Pibrac", "Brax", "Saint-Lys", "Cornebarrieu", "Mondonville", "Aussonne"]
  },
  {
    name: "Castanet-Tolosan",
    slug: "castanet-tolosan",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "15 317",
    description: "Expert en sécurité à Castanet-Tolosan. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Castanet-Tolosan et ses environs.",
    nearbyTowns: ["Auzeville-Tolosane", "Labège", "Escalquens", "Saint-Orens-de-Gameville", "Baziège", "Montrabé", "Saint-Jean", "Castelmaurou", "Lapeyrouse-Fossat", "Castelginest", "Fenouillet", "Saint-Alban"]
  },
  {
    name: "Agde",
    slug: "agde",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "29 939",
    description: "Expert en sécurité à Agde. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Agde et ses environs.",
    nearbyTowns: ["Vias", "Saint-Thibéry", "Pézenas", "Paulhan", "Magalas", "Canet", "Murviel-lès-Béziers", "Cazouls-lès-Béziers", "Fabrègues", "Cournonterral", "Mireval"]
  },
  {
    name: "Lunel",
    slug: "lunel",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "26 623",
    description: "Expert en sécurité à Lunel. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Lunel et ses environs.",
    nearbyTowns: ["Saint-Just", "Lunel-Viel", "Marsillargues", "Gallargues-le-Montueux", "Aimargues", "Lansargues", "Saint-Brès", "Aigues-Vives", "Mudaison", "Baillargues", "Vergèze", "Sommières"]
  },
  {
    name: "Mauguio",
    slug: "mauguio",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "16 522",
    description: "Expert en sécurité à Mauguio. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Mauguio et ses environs.",
    nearbyTowns: ["La Grande-Motte", "Pérols", "Vendargues", "Palavas-les-Flots", "Castries", "Teyran", "Aigues-Mortes", "Villeneuve-lès-Maguelone", "Le Grau-du-Roi", "Saint-Drézéry", "Saint-Clément-de-Rivière", "Prades-le-Lez"]
  },
  {
    name: "Cahors",
    slug: "cahors",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "20 050",
    description: "Expert en sécurité à Cahors. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Cahors et ses environs.",
    nearbyTowns: ["Pradines", "Gourdon"]
  },
  {
    name: "Castres",
    slug: "castres",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "42 505",
    description: "Expert en sécurité à Castres. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Castres et ses environs.",
    nearbyTowns: ["Saïx", "Puylaurens", "Revel"]
  },
  {
    name: "Gaillac",
    slug: "gaillac",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "16 162",
    description: "Expert en sécurité à Gaillac. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Gaillac et ses environs.",
    nearbyTowns: ["Coufouleux", "Saint-Sulpice-la-Pointe", "Lavaur", "Bessières", "Montastruc-la-Conseillère", "Verfeil"]
  },
  {
    name: "Montauban",
    slug: "montauban",
    department: "Tarn-et-Garonne",
    departmentCode: "82",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "62 945",
    description: "Expert en sécurité à Montauban. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Montauban et ses environs.",
    nearbyTowns: ["Montbeton", "Saint-Étienne-de-Tulmont", "Bressols", "Albias", "Labastide-Saint-Pierre", "La Ville-Dieu-du-Temple", "Montech", "Nègrepelisse", "Fronton", "Castelsarrasin", "Caussade", "Villemur-sur-Tarn"]
  },
  {
    name: "Vertou",
    slug: "vertou",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "26 227",
    description: "Expert en sécurité à Vertou. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Vertou et ses environs.",
    nearbyTowns: ["Les Sorinières", "Château-Thébaud", "La Haie-Fouassière", "Haute-Goulaine", "Le Bignon", "Maisdon-sur-Sèvre", "Pont-Saint-Martin", "Le Pallet", "La Chapelle-Heulin", "Montbert", "Aigrefeuille-sur-Maine", "Saint-Julien-de-Concelles"]
  },
  {
    name: "Couëron",
    slug: "couron",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "24 103",
    description: "Expert en sécurité à Couëron. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Couëron et ses environs.",
    nearbyTowns: ["Saint-Étienne-de-Montluc", "Saint-Jean-de-Boiseau", "Le Pellerin", "La Montagne", "Cordemais", "Vigneux-de-Bretagne", "Rouans", "Port-Saint-Père", "Bouaye", "Malville", "Frossay", "Saint-Aignan-Grandlieu"]
  },
  {
    name: "Pornic",
    slug: "pornic",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "18 745",
    description: "Expert en sécurité à Pornic. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Pornic et ses environs.",
    nearbyTowns: ["Chauvé", "La Bernerie-en-Retz", "Saint-Michel-Chef-Chef", "La Plaine-sur-Mer", "Chaumes-en-Retz", "Paimbœuf", "Noirmoutier-en-l'Île", "La Chapelle-Launay", "Savenay", "Prinquiau", "Besné", "Campbon"]
  },
  {
    name: "Guérande",
    slug: "guerande",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "16 804",
    description: "Expert en sécurité à Guérande. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Guérande et ses environs.",
    nearbyTowns: ["La Turballe", "Le Croisic", "Herbignac", "La Chapelle-des-Marais", "Férel", "Muzillac", "Missillac", "Nivillac", "Pontchâteau", "Sainte-Anne-sur-Brivet", "Saint-Gildas-des-Bois", "Sarzeau"]
  },
  {
    name: "Saumur",
    slug: "saumur",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "26 241",
    description: "Expert en sécurité à Saumur. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Saumur et ses environs.",
    nearbyTowns: ["Bellevigne-les-Châteaux", "Gennes-Val-de-Loire", "Longué-Jumelles", "Montreuil-Bellay", "Doué-en-Anjou", "Bourgueil", "Beaufort-en-Anjou", "Brissac Loire Aubance", "Chinon", "Terranjou", "Mazé-Milon", "Noyant-Villages"]
  },
  {
    name: "Sèvremoine",
    slug: "sevremoine",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "25 797",
    description: "Expert en sécurité à Sèvremoine. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Sèvremoine et ses environs.",
    nearbyTowns: ["Gétigné", "La Bruffière", "Clisson", "Cugand-la-Bernardière", "Treize-Septiers", "Vallet", "Gorges", "Le Landreau", "Le Loroux-Bottereau", "Chavagnes-en-Paillers", "Saint-Fulgent", "Vieillevigne"]
  },
  {
    name: "Beaupréau-en-Mauges",
    slug: "beaupreau-en-mauges",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "23 989",
    description: "Expert en sécurité à Beaupréau-en-Mauges. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Beaupréau-en-Mauges et ses environs.",
    nearbyTowns: ["Montrevault-sur-Èvre", "Chalonnes-sur-Loire", "Vair-sur-Loire", "Ancenis-Saint-Géréon", "Ingrandes-le-Fresne-sur-Loire", "Loireauxence", "Oudon", "Val-du-Layon", "Divatte-sur-Loire", "Saint-Georges-sur-Loire", "Mésanger", "Le Cellier"]
  },
  {
    name: "Chemillé-en-Anjou",
    slug: "chemille-en-anjou",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "21 999",
    description: "Expert en sécurité à Chemillé-en-Anjou. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Chemillé-en-Anjou et ses environs.",
    nearbyTowns: ["Bellevigne-en-Layon", "Lys-Haut-Layon", "Les Garennes sur Loire", "Nueil-les-Aubiers", "Argentonnay"]
  },
  {
    name: "Mauges-sur-Loire",
    slug: "mauges-sur-loire",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "18 695",
    description: "Expert en sécurité à Mauges-sur-Loire. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Mauges-sur-Loire et ses environs.",
    nearbyTowns: ["Val d'Erdre-Auxence", "Vallons-de-l'Erdre", "Erdre-en-Anjou", "Longuenée-en-Anjou", "Ligné"]
  },
  {
    name: "Segré-en-Anjou Bleu",
    slug: "segre-en-anjou-bleu",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "17 667",
    description: "Expert en sécurité à Segré-en-Anjou Bleu. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Segré-en-Anjou Bleu et ses environs.",
    nearbyTowns: ["Le Lion-d'Angers", "Ombrée d'Anjou", "Les Hauts-d'Anjou", "Briollay", "Tiercé"]
  },
  {
    name: "Orée d'Anjou",
    slug: "oree-d-anjou",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "17 162",
    description: "Expert en sécurité à Orée d'Anjou. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Orée d'Anjou et ses environs.",
    nearbyTowns: ["Mauves-sur-Loire", "Thouaré-sur-Loire", "Saint-Mars-du-Désert", "Petit-Mars", "Sucé-sur-Erdre", "Nort-sur-Erdre", "Grandchamp-des-Fontaines", "Saffré", "Héric"]
  },
  {
    name: "Loire-Authion",
    slug: "loire-authion",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "16 765",
    description: "Expert en sécurité à Loire-Authion. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Loire-Authion et ses environs.",
    nearbyTowns: ["Rives-du-Loir-en-Anjou", "Baugé-en-Anjou", "Durtal", "Morannes sur Sarthe-Daumeray", "La Flèche"]
  },
  {
    name: "Château-Gontier-sur-Mayenne",
    slug: "chteau-gontier-sur-mayenne",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "16 584",
    description: "Expert en sécurité à Château-Gontier-sur-Mayenne. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Château-Gontier-sur-Mayenne et ses environs.",
    nearbyTowns: ["Sablé-sur-Sarthe"]
  },
  {
    name: "Les Sables-d'Olonne",
    slug: "les-sables-d-olonne",
    department: "Vendée",
    departmentCode: "85",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "49 603",
    description: "Expert en sécurité à Les Sables-d'Olonne. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Les Sables-d'Olonne et ses environs.",
    nearbyTowns: ["Les Achards", "Talmont-Saint-Hilaire", "Bretignolles-sur-Mer", "Jard-sur-Mer", "Coëx", "Saint-Gilles-Croix-de-Vie", "Le Fenouiller", "Commequiers", "Saint-Hilaire-de-Riez", "Angles", "Soullans", "La Tranche-sur-Mer"]
  },
  {
    name: "Challans",
    slug: "challans",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "22 943",
    description: "Expert en sécurité à Challans. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Challans et ses environs.",
    nearbyTowns: ["La Garnache", "Sallertaine", "Saint-Jean-de-Monts", "Beauvoir-sur-Mer", "Machecoul-Saint-Même", "Legé", "Corcoué-sur-Logne", "Villeneuve-en-Retz", "Les Lucs-sur-Boulogne", "Rocheservière", "Sainte-Pazanne", "Saint-Colomban"]
  },
  {
    name: "Montaigu-Vendée",
    slug: "montaigu-vendee",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "21 134",
    description: "Expert en sécurité à Montaigu-Vendée. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Montaigu-Vendée et ses environs.",
    nearbyTowns: ["L'Herbergement", "Montréverd", "Saint-Philbert-de-Bouaine", "Geneston", "La Chevrolière", "Mouchamps", "Saint-Philbert-de-Grand-Lieu", "Le Boupère"]
  },
  {
    name: "Les Herbiers",
    slug: "les-herbiers",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "16 521",
    description: "Expert en sécurité à Les Herbiers. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Les Herbiers et ses environs.",
    nearbyTowns: ["Chantonnay", "Bournezeau"]
  },
  {
    name: "Mandelieu-la-Napoule",
    slug: "mandelieu-la-napoule",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d'azur",
    population: "21 640",
    description: "Expert en sécurité à Mandelieu-la-Napoule. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Mandelieu-la-Napoule et ses environs.",
    nearbyTowns: []
  },
  {
    name: "Vence",
    slug: "vence",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d'azur",
    population: "19 917",
    description: "Expert en sécurité à Vence. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Vence et ses environs.",
    nearbyTowns: []
  },
  {
    name: "Manosque",
    slug: "manosque",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d'azur",
    population: "22 718",
    description: "Expert en sécurité à Manosque. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Manosque et ses environs.",
    nearbyTowns: ["Volx", "Sainte-Tulle", "Pierrevert", "Villeneuve", "Gréoux-les-Bains", "Vinon-sur-Verdon", "Valensole", "Oraison", "Forcalquier", "La Tour-d'Aigues", "Les Mées", "Jouques"]
  },
  {
    name: "Digne-les-Bains",
    slug: "digne-les-bains",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d'azur",
    population: "17 979",
    description: "Expert en sécurité à Digne-les-Bains. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Digne-les-Bains et ses environs.",
    nearbyTowns: ["Château-Arnoux-Saint-Auban", "Sisteron"]
  },
  {
    name: "Istres",
    slug: "istres",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d'azur",
    population: "44 292",
    description: "Expert en sécurité à Istres. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Istres et ses environs.",
    nearbyTowns: ["Miramas", "Fos-sur-Mer", "Eyguières", "Sénas", "Lambesc", "Mallemort", "Cheval-Blanc", "Plan-d'Orgon", "Saint-Andiol", "Eyragues", "Cabannes"]
  },
  {
    name: "Gap",
    slug: "gap",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d'azur",
    population: "41 293",
    description: "Expert en sécurité à Gap. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Gap et ses environs.",
    nearbyTowns: ["Chorges", "Veynes", "Embrun", "Laragne-Montéglin"]
  },
  {
    name: "La Crau",
    slug: "la-crau",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d'azur",
    population: "19 556",
    description: "Expert en sécurité à La Crau. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à La Crau et ses environs.",
    nearbyTowns: ["Rocbaron", "Forcalqueiret", "Garéoult", "Besse-sur-Issole", "Tourves", "Le Val"]
  },
  {
    name: "Saint-Maximin-la-Sainte-Baume",
    slug: "saint-maximin-la-sainte-baume",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d'azur",
    population: "17 896",
    description: "Expert en sécurité à Saint-Maximin-la-Sainte-Baume. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Saint-Maximin-la-Sainte-Baume et ses environs.",
    nearbyTowns: []
  },
  {
    name: "Brignoles",
    slug: "brignoles",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d'azur",
    population: "17 850",
    description: "Expert en sécurité à Brignoles. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Brignoles et ses environs.",
    nearbyTowns: []
  },
  {
    name: "Carpentras",
    slug: "carpentras",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d'azur",
    population: "31 619",
    description: "Expert en sécurité à Carpentras. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Carpentras et ses environs.",
    nearbyTowns: ["Aubignan", "Mazan", "Caromb", "Monteux", "Pernes-les-Fontaines", "Sarrians", "Velleron", "Entraigues-sur-la-Sorgue", "Bédarrides", "Jonquières", "Courthézon", "Bédoin"]
  },
  {
    name: "Orange",
    slug: "orange",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d'azur",
    population: "29 706",
    description: "Expert en sécurité à Orange. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Orange et ses environs.",
    nearbyTowns: ["Piolenc", "Camaret-sur-Aigues", "Roquemaure", "Laudun-l'Ardoise", "Mondragon", "Bollène", "Rochefort-du-Gard", "Pont-Saint-Esprit", "Lapalud", "Vaison-la-Romaine", "Aramon", "Saint-Quentin-la-Poterie"]
  },
  {
    name: "Cavaillon",
    slug: "cavaillon",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d'azur",
    population: "25 636",
    description: "Expert en sécurité à Cavaillon. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Cavaillon et ses environs.",
    nearbyTowns: ["L'Isle-sur-la-Sorgue", "Gargas", "Apt", "Saint-Saturnin-lès-Apt"]
  },
  {
    name: "Pertuis",
    slug: "pertuis",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d'azur",
    population: "19 548",
    description: "Expert en sécurité à Pertuis. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Pertuis et ses environs.",
    nearbyTowns: ["Rians"]
  },
  {
    name: "Palaiseau",
    slug: "palaiseau",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "37 471",
    description: "Expert en sécurité à Palaiseau. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Palaiseau et ses environs.",
    nearbyTowns: ["Villebon-sur-Yvette", "Igny", "Orsay", "Saulx-les-Chartreux", "Bièvres", "Les Ulis", "Saclay", "Bures-sur-Yvette", "Nozay", "La Ville-du-Bois", "Gif-sur-Yvette", "Marcoussis"]
  },
  {
    name: "Étampes",
    slug: "etampes",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "26 857",
    description: "Expert en sécurité à Étampes. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Étampes et ses environs.",
    nearbyTowns: ["Morigny-Champigny", "Étréchy", "Le Mérévillois", "Cerny", "Saint-Chéron", "Lardy", "Boissy-sous-Saint-Yon", "Angerville", "Breuillet", "Itteville", "La Ferté-Alais", "Boutigny-sur-Essonne"]
  },
  {
    name: "Brétigny-sur-Orge",
    slug: "bretigny-sur-orge",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "26 658",
    description: "Expert en sécurité à Brétigny-sur-Orge. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Brétigny-sur-Orge et ses environs.",
    nearbyTowns: ["Saint-Germain-lès-Arpajon", "Leuville-sur-Orge", "Le Plessis-Pâté", "La Norville", "Saint-Michel-sur-Orge", "Arpajon", "Marolles-en-Hurepoix", "Longpont-sur-Orge", "Linas", "Montlhéry", "Ollainville", "Égly"]
  },
  {
    name: "Mennecy",
    slug: "mennecy",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "16 433",
    description: "Expert en sécurité à Mennecy. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Mennecy et ses environs.",
    nearbyTowns: ["Ballancourt-sur-Essonne", "Saint-Fargeau-Ponthierry", "Saint-Vrain", "Milly-la-Forêt", "Bruyères-le-Châtel", "Guignes", "Chaumes-en-Brie", "Le Malesherbois"]
  },
  {
    name: "Clichy",
    slug: "clichy",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "64 410",
    description: "Expert en sécurité à Clichy. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Clichy et ses environs.",
    nearbyTowns: ["Pantin", "Soisy-sous-Montmorency", "Groslay", "Montrouge", "Eaubonne", "Montmorency", "Margency", "Arcueil", "Saint-Brice-sous-Forêt", "Sarcelles", "Bagneux", "La Frette-sur-Seine"]
  },
  {
    name: "Villemomble",
    slug: "villemomble",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "29 795",
    description: "Expert en sécurité à Villemomble. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Villemomble et ses environs.",
    nearbyTowns: ["Saint-Maurice", "Villeparisis", "Pomponne", "Saint-Thibault-des-Vignes", "Claye-Souilly", "Thorigny-sur-Marne", "Annet-sur-Marne", "Chanteloup-en-Brie", "Dampmart", "Chessy", "Servon", "Serris"]
  },
  {
    name: "Chelles",
    slug: "chelles",
    department: "Seine-et-Marne",
    departmentCode: "77",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "54 620",
    description: "Expert en sécurité à Chelles. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Chelles et ses environs.",
    nearbyTowns: ["Montfermeil", "Gournay-sur-Marne", "Vaires-sur-Marne", "Brou-sur-Chantereine", "Courtry", "Gagny", "Coubron", "Champs-sur-Marne", "Noisiel", "Torcy", "Vaujours", "Le Raincy"]
  },
  {
    name: "Melun",
    slug: "melun",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "45 995",
    description: "Expert en sécurité à Melun. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Melun et ses environs.",
    nearbyTowns: ["Le Mée-sur-Seine", "Rubelles", "Vert-Saint-Denis", "Vaux-le-Pénil", "La Rochette", "Dammarie-les-Lys", "Cesson", "Boissise-le-Roi", "Savigny-le-Temple", "Pringy", "Bois-le-Roi", "Nandy"]
  },
  {
    name: "Pontault-Combault",
    slug: "pontault-combault",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "39 096",
    description: "Expert en sécurité à Pontault-Combault. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Pontault-Combault et ses environs.",
    nearbyTowns: ["La Queue-en-Brie", "Émerainville", "Roissy-en-Brie", "Lésigny", "Lognes", "Ozoir-la-Ferrière", "Collégien", "Santeny", "Ferrières-en-Brie", "Marolles-en-Brie", "Bussy-Saint-Georges", "Boissy-Saint-Léger"]
  },
  {
    name: "Combs-la-Ville",
    slug: "combs-la-ville",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "23 350",
    description: "Expert en sécurité à Combs-la-Ville. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Combs-la-Ville et ses environs.",
    nearbyTowns: ["Quincy-sous-Sénart", "Lieusaint", "Moissy-Cramayel", "Brie-Comte-Robert", "Boussy-Saint-Antoine", "Tigery", "Évry-Grégy-sur-Yerre", "Saint-Pierre-du-Perray", "Saintry-sur-Seine", "Chevry-Cossigny", "Le Coudray-Montceaux", "Ormoy"]
  },
  {
    name: "Montereau-Fault-Yonne",
    slug: "montereau-fault-yonne",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "22 279",
    description: "Expert en sécurité à Montereau-Fault-Yonne. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Montereau-Fault-Yonne et ses environs.",
    nearbyTowns: ["Saint-Mammès", "Moret-Loing-et-Orvanne", "Champagne-sur-Seine", "Thomery", "Avon", "Le Châtelet-en-Brie", "Nangis", "Nemours", "Mormant", "Saint-Pierre-lès-Nemours", "Souppes-sur-Loing", "Verneuil-l'Étang"]
  },
  {
    name: "Lagny-sur-Marne",
    slug: "lagny-sur-marne",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "21 461",
    description: "Expert en sécurité à Lagny-sur-Marne. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Lagny-sur-Marne et ses environs.",
    nearbyTowns: ["Montévrain", "Magny-le-Hongre", "Bailly-Romainvilliers", "Gretz-Armainvilliers", "Tournan-en-Brie", "Saint-Mard", "Saint-Soupplets", "Dammartin-en-Goële", "Longperrier", "Fontenay-Trésigny", "Pommeuse", "Saint-Pathus"]
  },
  {
    name: "Mitry-Mory",
    slug: "mitry-mory",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "20 456",
    description: "Expert en sécurité à Mitry-Mory. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Mitry-Mory et ses environs.",
    nearbyTowns: ["Moussy-le-Neuf", "Othis", "Survilliers", "La Chapelle-en-Serval", "Le Plessis-Belleville", "Orry-la-Ville", "Chaumontel", "Coye-la-Forêt", "Viarmes", "Nanteuil-le-Haudouin", "Bouffémont", "Montlignon"]
  },
  {
    name: "Coulommiers",
    slug: "coulommiers",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "16 374",
    description: "Expert en sécurité à Coulommiers. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Coulommiers et ses environs.",
    nearbyTowns: ["Mouroux", "Boissy-le-Châtel", "Faremoutiers", "Jouarre", "La Ferté-Gaucher", "La Ferté-sous-Jouarre", "Lizy-sur-Ourcq", "Provins"]
  },
  {
    name: "Fontainebleau",
    slug: "fontainebleau",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "15 583",
    description: "Expert en sécurité à Fontainebleau. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Fontainebleau et ses environs.",
    nearbyTowns: ["Puiseaux", "Château-Landon", "Dordives"]
  },
  {
    name: "Herblay-sur-Seine",
    slug: "herblay-sur-seine",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "31 779",
    description: "Expert en sécurité à Herblay-sur-Seine. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Herblay-sur-Seine et ses environs.",
    nearbyTowns: ["Pierrelaye", "Beauchamp", "Montigny-lès-Cormeilles", "Bessancourt", "Taverny", "Méry-sur-Oise", "Le Plessis-Bouchard", "Frépillon", "Saint-Leu-la-Forêt", "Saint-Prix", "Auvers-sur-Oise", "Mériel"]
  },
  {
    name: "Villeneuve-Saint-Georges",
    slug: "villeneuve-saint-georges",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "36 221",
    description: "Expert en sécurité à Villeneuve-Saint-Georges. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Villeneuve-Saint-Georges et ses environs.",
    nearbyTowns: ["Valenton", "Crosne", "Ablon-sur-Seine", "Villeneuve-le-Roi", "Limeil-Brévannes", "Orly", "Yerres", "Montgeron", "Villecresnes", "Brunoy", "Épinay-sous-Sénart", "Mandres-les-Roses"]
  },
  {
    name: "Saint-Germain-en-Laye",
    slug: "saint-germain-en-laye",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "45 931",
    description: "Expert en sécurité à Saint-Germain-en-Laye. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Saint-Germain-en-Laye et ses environs.",
    nearbyTowns: ["Le Mesnil-le-Roi", "Maisons-Laffitte", "Le Pecq", "Le Port-Marly", "Achères", "Poissy", "Carrières-sous-Poissy", "Mareil-Marly", "Chambourcy", "Marly-le-Roi", "Chanteloup-les-Vignes", "L'Étang-la-Ville"]
  },
  {
    name: "Mantes-la-Jolie",
    slug: "mantes-la-jolie",
    department: "Yvelines",
    departmentCode: "78",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "43 526",
    description: "Expert en sécurité à Mantes-la-Jolie. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Mantes-la-Jolie et ses environs.",
    nearbyTowns: ["Buchelay", "Mantes-la-Ville", "Magnanville", "Limay", "Porcheville", "Rosny-sur-Seine", "Issou", "Freneuse", "Mézières-sur-Seine", "Gargenville", "Bonnières-sur-Seine", "Épône"]
  },
  {
    name: "Trappes",
    slug: "trappes",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "34 689",
    description: "Expert en sécurité à Trappes. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Trappes et ses environs.",
    nearbyTowns: ["Montigny-le-Bretonneux", "Élancourt", "La Verrière", "Voisins-le-Bretonneux", "Bois-d'Arcy", "Le Mesnil-Saint-Denis", "Les Clayes-sous-Bois", "Maurepas", "Magny-les-Hameaux", "Plaisir", "Jouars-Pontchartrain", "Coignières"]
  },
  {
    name: "Les Mureaux",
    slug: "les-mureaux",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "34 632",
    description: "Expert en sécurité à Les Mureaux. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Les Mureaux et ses environs.",
    nearbyTowns: ["Meulan-en-Yvelines", "Verneuil-sur-Seine", "Ecquevilly", "Juziers", "Vernouillet", "Aubergenville", "Morainvilliers", "Triel-sur-Seine", "Villennes-sur-Seine", "Orgeval", "Maule", "Feucherolles"]
  },
  {
    name: "Rambouillet",
    slug: "rambouillet",
    department: "", // À compléter si nécessaire
    departmentCode: "",
    region: "Île-de-France",
    regionSlug: "île-de-france",
    population: "27 724",
    description: "Expert en sécurité à Rambouillet. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide à Rambouillet et ses environs.",
    nearbyTowns: ["Le Perray-en-Yvelines", "Les Essarts-le-Roi", "Saint-Arnoult-en-Yvelines", "Ablis", "Chevreuse", "Dourdan", "Limours", "Neauphle-le-Château", "Forges-les-Bains", "Villiers-Saint-Frédéric", "Saint-Rémy-lès-Chevreuse", "Briis-sous-Forges"]
  },
  // ===== ÎLE-DE-FRANCE =====
  {
    name: "Paris",
    slug: "paris",
    department: "Paris",
    departmentCode: "75",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "2 103 778",
    description: "Atteignez le Top 3 Sécurité à Paris en 2025-2026. HD Connect, expert certifié NF&A2P, installe des systèmes de vidéosurveillance IA 4K et des alarmes intelligentes. Audit gratuit, intervention 4h urgence dans tous les arrondissements.",
    neighborhoods: ["Le Marais", "Montmartre", "Saint-Germain", "Bastille", "Belleville", "Auteuil", "Passy", "Nation", "République", "Opéra", "Châtelet", "La Défense"],
    nearbyTowns: ["20 arrondissements"]
  },
  {
    name: "Créteil",
    slug: "creteil",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "92 000",
    description: "HD Connect intervient à Créteil et dans tout le Val-de-Marne pour vos installations de sécurité : caméras de surveillance, systèmes d'alarme, contrôle d'accès. Devis gratuit et intervention rapide.",
    neighborhoods: ["Centre-Ville", "Mont-Mesly", "La Source", "Préfecture", "L'Échat", "Bords de Marne"],
    nearbyTowns: ["Maisons-Alfort", "Saint-Maur-des-Fossés", "Alfortville", "Choisy-le-Roi", "Bonneuil-sur-Marne"]
  },
  {
    name: "Vitry-sur-Seine",
    slug: "vitry-sur-seine",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "93 963",
    description: "Expert en sécurité à Vitry-sur-Seine. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide pour particuliers et entreprises.",
    neighborhoods: ["Centre-Ville", "Port à l'Anglais", "Plateau", "Coteau", "Gare"],
    nearbyTowns: ["Alfortville", "Villejuif", "Ivry-sur-Seine", "Thiais", "Choisy-le-Roi", "Maisons-Alfort", "Le Kremlin-Bicêtre", "Charenton-le-Pont", "Chevilly-Larue", "L'Haÿ-les-Roses", "Créteil", "Gentilly"]
  },
  {
    name: "Saint-Maur-des-Fossés",
    slug: "saint-maur-des-fosses",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "76 000",
    description: "HD Connect, installateur de sécurité à Saint-Maur-des-Fossés. Vidéosurveillance HD, alarmes certifiées, domotique pour maisons et commerces. Devis gratuit, intervention rapide.",
    neighborhoods: ["La Varenne-Saint-Hilaire", "Saint-Maur Créteil", "Le Parc", "Adamville", "Champignol"],
    nearbyTowns: ["Créteil", "Joinville-le-Pont", "Bonneuil-sur-Marne", "Champigny-sur-Marne", "Sucy-en-Brie"]
  },
  {
    name: "Boulogne-Billancourt",
    slug: "boulogne-billancourt",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "119 019",
    description: "Installation sécurité à Boulogne-Billancourt par HD Connect. Vidéosurveillance, alarmes, contrôle d'accès pour résidences de standing et sièges sociaux. Expert Hauts-de-Seine.",
    neighborhoods: ["Centre-Ville", "Point du Jour", "Silly-Gallieni", "Princes-Marmottan", "Rives de Seine"],
    nearbyTowns: ["Issy-les-Moulineaux", "Saint-Cloud", "Sèvres", "Vanves", "Meudon", "Suresnes", "Garches", "Malakoff", "Clamart", "Chaville", "Puteaux", "Châtillon"]
  },
  {
    name: "Versailles",
    slug: "versailles",
    department: "Yvelines",
    departmentCode: "78",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "84 095",
    description: "HD Connect à Versailles : solutions de sécurité haut de gamme pour propriétés d'exception. Vidéosurveillance discrète, alarmes certifiées, domotique intégrée.",
    neighborhoods: ["Notre-Dame", "Saint-Louis", "Montreuil", "Porchefontaine", "Clagny-Glatigny"],
    nearbyTowns: ["Le Chesnay-Rocquencourt", "Buc", "Viroflay", "Saint-Cyr-l'École", "Bailly", "Ville-d'Avray", "Guyancourt", "Vaucresson", "La Celle-Saint-Cloud", "Jouy-en-Josas", "Fontenay-le-Fleury", "Vélizy-Villacoublay"]
  },
  // ===== VILLES IDF SUPPLÉMENTAIRES (Zone Primaire) =====
  {
    name: "Saint-Denis",
    slug: "saint-denis",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "149 077",
    description: "Expert sécurité à Saint-Denis (93). HD Connect protège commerces, entreprises et résidences autour du Stade de France. Vidéosurveillance HD, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Pleyel", "Franc-Moisin", "La Plaine", "Stade de France"],
    nearbyTowns: ["La Courneuve", "Villetaneuse", "Stains", "Villeneuve-la-Garenne", "Aubervilliers", "L'Île-Saint-Denis", "Montmagny", "Saint-Ouen-sur-Seine", "Épinay-sur-Seine", "Garges-lès-Gonesse", "Dugny", "Deuil-la-Barre"]
  },
  {
    name: "Montreuil",
    slug: "montreuil",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "111 934",
    description: "Installation sécurité Montreuil par HD Connect. Vidéosurveillance, alarmes pour commerces, ateliers d'artistes et résidences. Intervention rapide 93.",
    neighborhoods: ["Centre-Ville", "Croix de Chavaux", "Bas-Montreuil", "La Noue", "Signac"],
    nearbyTowns: ["Bagnolet", "Vincennes", "Fontenay-sous-Bois", "Romainville", "Les Lilas", "Rosny-sous-Bois", "Noisy-le-Sec", "Saint-Mandé", "Nogent-sur-Marne", "Le Pré-Saint-Gervais", "Neuilly-Plaisance", "Le Perreux-sur-Marne"]
  },
  {
    name: "Argenteuil",
    slug: "argenteuil",
    department: "Val-d'Oise",
    departmentCode: "95",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "106 130",
    description: "HD Connect Argenteuil : sécurité électronique pour la plus grande ville du 95. Caméras, alarmes, contrôle d'accès. Devis gratuit.",
    neighborhoods: ["Centre-Ville", "Val-d'Argent", "Orgemont", "Joliot-Curie", "Val Notre-Dame"],
    nearbyTowns: ["Sannois", "Colombes", "Saint-Gratien", "Gennevilliers", "Bezons", "Cormeilles-en-Parisis", "Bois-Colombes", "Ermont", "Franconville", "Enghien-les-Bains", "La Garenne-Colombes", "Asnières-sur-Seine"]
  },
  {
    name: "Nanterre",
    slug: "nanterre",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "97 783",
    description: "Expert sécurité Nanterre, préfecture des Hauts-de-Seine. HD Connect sécurise La Défense, universités et zones d'activités. Intervention rapide 92.",
    neighborhoods: ["Centre-Ville", "La Défense", "Université", "Mont-Valérien", "Petit Nanterre"],
    nearbyTowns: ["Carrières-sur-Seine", "Rueil-Malmaison", "Houilles", "Chatou", "Courbevoie", "Neuilly-sur-Seine", "Sartrouville", "Le Vésinet", "Montesson", "Croissy-sur-Seine", "Bougival", "Levallois-Perret"]
  },
  {
    name: "Courbevoie",
    slug: "courbevoie",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "85 000",
    description: "Sécurité à Courbevoie et La Défense par HD Connect. Protection sièges sociaux, commerces, résidences. Vidéosurveillance 4K, contrôle d'accès biométrique.",
    neighborhoods: ["La Défense", "Bécon-les-Bruyères", "Faubourg de l'Arche", "Charras", "Centre-Ville"],
    nearbyTowns: ["Puteaux", "Neuilly-sur-Seine", "Levallois-Perret", "La Garenne-Colombes", "Nanterre"]
  },
  {
    name: "Neuilly-sur-Seine",
    slug: "neuilly-sur-seine",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "62 000",
    description: "Sécurité haut de gamme à Neuilly-sur-Seine. HD Connect installe des systèmes discrets pour hôtels particuliers, résidences de standing et bureaux de prestige.",
    neighborhoods: ["Sablons", "Bagatelle", "Saint-James", "Île de la Jatte", "Ancienne Mairie"],
    nearbyTowns: ["Levallois-Perret", "Paris 16e", "Paris 17e", "Courbevoie", "Puteaux"]
  },
  {
    name: "Issy-les-Moulineaux",
    slug: "issy-les-moulineaux",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "70 000",
    description: "HD Connect à Issy-les-Moulineaux : sécurité pour entreprises médias, sièges sociaux et résidences modernes. Vidéosurveillance, alarmes connectées.",
    neighborhoods: ["Val de Seine", "Les Épinettes", "Centre-Ville", "La Ferme", "Fort d'Issy"],
    nearbyTowns: ["Vanves", "Meudon", "Paris 15e", "Boulogne-Billancourt", "Clamart"]
  },
  {
    name: "Levallois-Perret",
    slug: "levallois-perret",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "65 000",
    description: "Installation sécurité Levallois-Perret par HD Connect. Commune la plus dense de France : alarmes, vidéosurveillance, contrôle d'accès pour immeubles et commerces.",
    neighborhoods: ["Front de Seine", "Centre-Ville", "Alsace", "Louise Michel", "Anatole France"],
    nearbyTowns: ["Neuilly-sur-Seine", "Clichy", "Paris 17e", "Asnières-sur-Seine", "Courbevoie"]
  },
  {
    name: "Vincennes",
    slug: "vincennes",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "50 000",
    description: "Expert sécurité Vincennes et Bois de Vincennes. HD Connect protège résidences, commerces et équipements sportifs. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Château", "Nord", "Est", "Montreuil"],
    nearbyTowns: ["Fontenay-sous-Bois", "Montreuil", "Saint-Mandé", "Paris 12e", "Nogent-sur-Marne"]
  },
  {
    name: "Champigny-sur-Marne",
    slug: "champigny-sur-marne",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "78 072",
    description: "HD Connect Champigny-sur-Marne : installation vidéosurveillance, alarmes pour pavillons et commerces. Couverture complète bords de Marne.",
    neighborhoods: ["Centre-Ville", "Bois l'Abbé", "Coeuilly", "Plant", "Tremblay"],
    nearbyTowns: ["Villiers-sur-Marne", "Bry-sur-Marne", "Saint-Maur-des-Fossés", "Chennevières-sur-Marne", "Noisy-le-Grand", "Ormesson-sur-Marne", "Joinville-le-Pont", "Le Plessis-Trévise", "Noiseau", "Bonneuil-sur-Marne", "Neuilly-sur-Marne", "Sucy-en-Brie"]
  },
  {
    name: "Ivry-sur-Seine",
    slug: "ivry-sur-seine",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "65 000",
    description: "Sécurité Ivry-sur-Seine par HD Connect. Protection zones industrielles, commerces et résidences. Vidéosurveillance, alarmes, dépannage 24/7.",
    neighborhoods: ["Centre-Ville", "Ivry Port", "Petit Ivry", "Plateau", "Parmentier"],
    nearbyTowns: ["Vitry-sur-Seine", "Paris 13e", "Charenton-le-Pont", "Alfortville", "Le Kremlin-Bicêtre"]
  },
  {
    name: "Maisons-Alfort",
    slug: "maisons-alfort",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "56 000",
    description: "HD Connect Maisons-Alfort : installation sécurité pour résidences, commerces et École vétérinaire. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Charentonneau", "Alfortville", "Vétérinaire", "Les Juilliottes"],
    nearbyTowns: ["Alfortville", "Créteil", "Saint-Maurice", "Charenton-le-Pont", "Saint-Maur-des-Fossés"]
  },
  {
    name: "Meaux",
    slug: "meaux",
    department: "Seine-et-Marne",
    departmentCode: "77",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "56 905",
    description: "Expert sécurité Meaux et nord Seine-et-Marne. HD Connect installe vidéosurveillance, alarmes pour particuliers et entreprises du 77.",
    neighborhoods: ["Centre-Ville", "Beauval", "Dunant", "Pierre Collinet", "Foch"],
    nearbyTowns: ["Nanteuil-lès-Meaux", "Crégy-lès-Meaux", "Mareuil-lès-Meaux", "Villenoy", "Trilport", "Chauconin-Neufmontiers", "Quincy-Voisins", "Esbly", "Montry", "Saint-Germain-sur-Morin", "Crécy-la-Chapelle", "Coupvray"]
  },
  {
    name: "Évry-Courcouronnes",
    slug: "evry-courcouronnes",
    department: "Essonne",
    departmentCode: "91",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "66 919",
    description: "HD Connect Évry-Courcouronnes : sécurité pour la préfecture de l'Essonne. Vidéosurveillance, alarmes pour zones commerciales et résidences.",
    neighborhoods: ["Centre-Ville", "Pyramides", "Bois Sauvage", "Canal", "Génopole"],
    nearbyTowns: ["Ris-Orangis", "Lisses", "Bondoufle", "Corbeil-Essonnes", "Soisy-sur-Seine", "Fleury-Mérogis", "Saint-Germain-lès-Corbeil", "Étiolles", "Grigny", "Villabé", "Draveil", "Viry-Châtillon"]
  },
  {
    name: "Massy",
    slug: "massy",
    department: "Essonne",
    departmentCode: "91",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "52 000",
    description: "Sécurité Massy par HD Connect. Protection zones d'activités, gare TGV et résidences. Vidéosurveillance, contrôle d'accès, alarmes.",
    neighborhoods: ["Centre-Ville", "Massy-Palaiseau", "Opéra", "Atlantis", "Vilmorin"],
    nearbyTowns: ["Palaiseau", "Antony", "Wissous", "Chilly-Mazarin", "Verrières-le-Buisson"]
  },
  {
    name: "Cergy",
    slug: "cergy",
    department: "Val-d'Oise",
    departmentCode: "95",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "70 906",
    description: "HD Connect Cergy : expert sécurité ville nouvelle. Protection universités, commerces, résidences. Vidéosurveillance, alarmes connectées.",
    neighborhoods: ["Préfecture", "Grand Centre", "Axe Majeur", "Saint-Christophe", "Hauts de Cergy"],
    nearbyTowns: ["Vauréal", "Jouy-le-Moutier", "Courdimanche", "Osny", "Pontoise", "Maurecourt", "Éragny", "Menucourt", "Conflans-Sainte-Honorine", "Saint-Ouen-l'Aumône", "Vaux-sur-Seine", "Andrésy"]
  },
  // ===== AUVERGNE-RHÔNE-ALPES =====
  {
    name: "Lyon",
    slug: "lyon",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "519 127",
    description: "Sécurité 2025-2026 à Lyon : HD Connect vous propulse au Top 3. Installation de vidéosurveillance IA 4K, contrôle d'accès biométrique et alarmes APSAD. Expertise reconnue en Auvergne-Rhône-Alpes. Devis gratuit rapidement.",
    neighborhoods: ["Presqu'île", "Vieux Lyon", "Part-Dieu", "Croix-Rousse", "Confluence", "Gerland", "Villeurbanne"],
    nearbyTowns: ["La Mulatière", "Sainte-Foy-lès-Lyon", "Villeurbanne", "Caluire-et-Cuire", "Écully", "Oullins-Pierre-Bénite", "Champagne-au-Mont-d'Or", "Bron", "Tassin-la-Demi-Lune", "Saint-Fons", "Francheville", "Collonges-au-Mont-d'Or"]
  },
  {
    name: "Grenoble",
    slug: "grenoble",
    department: "Isère",
    departmentCode: "38",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "156 140",
    description: "Expert sécurité à Grenoble. HD Connect installe vidéosurveillance, alarmes et contrôle d'accès pour entreprises tech et résidences. Couverture Isère complète.",
    neighborhoods: ["Centre-Ville", "Europole", "Berriat", "Eaux-Claires", "Île Verte", "Bastille"],
    nearbyTowns: ["Fontaine", "La Tronche", "Seyssinet-Pariset", "Saint-Martin-le-Vinoux", "Saint-Martin-d'Hères", "Eybens", "Échirolles", "Seyssins", "Corenc", "Sassenage", "Saint-Égrève", "Gières"]
  },
  {
    name: "Saint-Étienne",
    slug: "saint-etienne",
    department: "Loire",
    departmentCode: "42",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "173 136",
    description: "HD Connect à Saint-Étienne : sécurité électronique pour industries et commerces. Vidéosurveillance, alarmes certifiées, maintenance 24/7.",
    neighborhoods: ["Centre-Ville", "Châteaucreux", "Bellevue", "Montreynaud", "Jacquard"],
    nearbyTowns: ["La Ricamarie", "Roche-la-Molière", "Saint-Genest-Lerpt", "Le Chambon-Feugerolles", "Villars", "Saint-Priest-en-Jarez", "Saint-Jean-Bonnefonds", "La Talaudière", "Firminy", "Unieux", "La Fouillouse", "Fraisses"]
  },
  // ===== PROVENCE-ALPES-CÔTE D'AZUR =====
  {
    name: "Marseille",
    slug: "marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "886 040",
    description: "HD Connect, votre partenaire Top 3 Sécurité à Marseille. Installation de systèmes d'alarme NF&A2P et vidéosurveillance IA. Protection optimale pour résidences et entreprises en PACA. Intervention rapide et garantie 5 ans.",
    neighborhoods: ["Vieux-Port", "Joliette", "Prado", "Castellane", "La Valentine", "Les Catalans", "Endoume"],
    nearbyTowns: ["La Penne-sur-Huveaune", "Plan-de-Cuques", "Septèmes-les-Vallons", "Le Rove", "Carnoux-en-Provence", "Cassis", "Simiane-Collongue", "Gignac-la-Nerthe", "Mimet", "Ensuès-la-Redonne", "Saint-Victoret", "Saint-Savournin"]
  },
  {
    name: "Nice",
    slug: "nice",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "357 737",
    description: "Expert sécurité sur la Côte d'Azur. HD Connect Nice installe vos systèmes de vidéosurveillance, alarmes et domotique. Protection optimale pour villas, appartements et commerces.",
    neighborhoods: ["Vieux-Nice", "Promenade des Anglais", "Cimiez", "Libération", "Port", "Saint-Roch"],
    nearbyTowns: ["Saint-André-de-la-Roche", "Villefranche-sur-Mer", "Saint-Laurent-du-Var", "Beaulieu-sur-Mer", "Colomars", "La Gaude", "La Trinité", "Cagnes-sur-Mer", "Drap", "Tourrette-Levens", "Gattières", "Saint-Jeannet"]
  },
  {
    name: "Cannes",
    slug: "cannes",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "74 000",
    description: "Sécurité haut de gamme à Cannes par HD Connect. Protection villas de luxe, hôtels, événements. Vidéosurveillance discrète, alarmes, contrôle d'accès.",
    neighborhoods: ["La Croisette", "Le Suquet", "Palm Beach", "La Californie", "Petit Juas"],
    nearbyTowns: ["Antibes", "Mougins", "Le Cannet", "Mandelieu-la-Napoule", "Vallauris"]
  },
  {
    name: "Aix-en-Provence",
    slug: "aix-en-provence",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "149 695",
    description: "HD Connect Aix-en-Provence : installation sécurité pour bastides, commerces et entreprises. Vidéosurveillance, alarmes, domotique provençale.",
    neighborhoods: ["Centre Historique", "Mazarin", "Jas de Bouffan", "Pont de l'Arc", "Les Milles"],
    nearbyTowns: ["Éguilles", "Ventabren", "Cabriès", "Bouc-Bel-Air", "Meyreuil", "Saint-Cannat", "Coudoux", "Venelles", "Velaux", "Gardanne", "Rognac", "Le Puy-Sainte-Réparade"]
  },
  // ===== NOUVELLE-AQUITAINE =====
  {
    name: "Bordeaux",
    slug: "bordeaux",
    department: "Gironde",
    departmentCode: "33",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "267 991",
    description: "HD Connect Bordeaux : solutions de sécurité complètes. Vidéosurveillance, alarmes, contrôle d'accès pour maisons, commerces et entreprises. Intervention rapide en Gironde.",
    neighborhoods: ["Chartrons", "Saint-Pierre", "Bacalan", "Bastide", "Caudéran", "Mériadeck"],
    nearbyTowns: ["Le Bouscat", "Bruges", "Cenon", "Eysines", "Lormont", "Floirac", "Talence", "Bassens", "Blanquefort", "Bègles", "Artigues-près-Bordeaux", "Carbon-Blanc"]
  },
  {
    name: "La Rochelle",
    slug: "la-rochelle",
    department: "Charente-Maritime",
    departmentCode: "17",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "79 851",
    description: "Installation sécurité La Rochelle par HD Connect. Protection résidences côtières, commerces du port. Vidéosurveillance, alarmes adaptées environnement marin.",
    neighborhoods: ["Vieux Port", "Les Minimes", "La Pallice", "Saint-Nicolas", "Tasdon"],
    nearbyTowns: ["Lagord", "L'Houmeau", "Nieul-sur-Mer", "Puilboreau", "Aytré", "Périgny", "Angoulins", "Marsilly", "Saint-Xandre", "Dompierre-sur-Mer", "La Flotte", "Sainte-Marie-de-Ré"]
  },
  // ===== OCCITANIE =====
  {
    name: "Toulouse",
    slug: "toulouse",
    department: "Haute-Garonne",
    departmentCode: "31",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "514 819",
    description: "Installation sécurité à Toulouse par HD Connect. Caméras HD, alarmes connectées, domotique intelligente. Expert en protection des biens pour particuliers et professionnels toulousains.",
    neighborhoods: ["Capitole", "Saint-Cyprien", "Compans-Caffarelli", "Minimes", "Rangueil", "Blagnac"],
    nearbyTowns: ["Balma", "Blagnac", "L'Union", "Ramonville-Saint-Agne", "Launaguet", "Aucamville", "Portet-sur-Garonne", "Tournefeuille", "Quint-Fonsegrives", "Fonbeauzard", "Beauzelle", "Colomiers"]
  },
  {
    name: "Montpellier",
    slug: "montpellier",
    department: "Hérault",
    departmentCode: "34",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "310 240",
    description: "HD Connect Montpellier : expert sécurité électronique. Vidéosurveillance, alarmes, contrôle d'accès pour résidences, commerces et entreprises héraultaises.",
    neighborhoods: ["Écusson", "Antigone", "Port Marianne", "Les Arceaux", "Richter", "Odysseum"],
    nearbyTowns: ["Castelnau-le-Lez", "Lattes", "Saint-Jean-de-Védas", "Clapiers", "Montferrier-sur-Lez", "Lavérune", "Le Crès", "Juvignac", "Jacou", "Saint-Georges-d'Orques", "Saint-Aunès", "Grabels"]
  },
  // ===== HAUTS-DE-FRANCE =====
  {
    name: "Lille",
    slug: "lille",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "238 246",
    description: "Expert sécurité à Lille. HD Connect installe vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Protection optimale pour résidences et locaux professionnels dans le Nord. **Intervention Rapide** possible.",
    neighborhoods: ["Vieux-Lille", "Wazemmes", "Vauban", "Centre", "Bois-Blancs", "Fives"],
    nearbyTowns: ["Lambersart", "La Madeleine", "Loos", "Saint-André-lez-Lille", "Sequedin", "Faches-Thumesnil", "Ronchin", "Mons-en-Barœul", "Marquette-lez-Lille", "Wattignies", "Haubourdin", "Emmerin"]
  },
  {
    name: "Amiens",
    slug: "amiens",
    department: "Somme",
    departmentCode: "80",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "136 449",
    description: "HD Connect Amiens : sécurité électronique pour entreprises et particuliers. Vidéosurveillance, alarmes certifiées, intervention rapide Somme. **Intervention Rapide** possible.",
    neighborhoods: ["Centre-Ville", "Saint-Leu", "Henriville", "Saint-Acheul", "Etouvie"],
    nearbyTowns: ["Rivery", "Salouël", "Camon", "Longueau", "Ailly-sur-Somme", "Boves", "Corbie", "Villers-Bretonneux", "Flixecourt", "Moreuil", "Doullens", "Albert"]
  },
  // ===== GRAND EST =====
  {
    name: "Strasbourg",
    slug: "strasbourg",
    department: "Bas-Rhin",
    departmentCode: "67",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "293 771",
    description: "HD Connect Strasbourg : solutions de sécurité sur mesure. Caméras de surveillance, systèmes d'alarme certifiés, contrôle d'accès. Intervention dans toute l'Alsace.",
    neighborhoods: ["Grande Île", "Neudorf", "Cronenbourg", "Hautepierre", "Koenigshoffen", "Robertsau"],
    nearbyTowns: ["Ostwald", "Schiltigheim", "Bischheim", "Illkirch-Graffenstaden", "Eckbolsheim", "Lingolsheim", "Hœnheim", "Oberhausbergen", "Souffelweyersheim", "Wolfisheim", "Holtzheim", "Mundolsheim"]
  },
  {
    name: "Nancy",
    slug: "nancy",
    department: "Meurthe-et-Moselle",
    departmentCode: "54",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "103 671",
    description: "Installation sécurité Nancy par HD Connect. Vidéosurveillance, alarmes, domotique pour particuliers et entreprises lorraines. Devis gratuit.",
    neighborhoods: ["Ville-Vieille", "Stanislas", "Saurupt", "Mon Désert", "Trois Maisons"],
    nearbyTowns: ["Saint-Max", "Maxéville", "Vandœuvre-lès-Nancy", "Jarville-la-Malgrange", "Tomblaine", "Malzéville", "Laxou", "Heillecourt", "Villers-lès-Nancy", "Essey-lès-Nancy", "Champigneulles", "Saulxures-lès-Nancy"]
  },
  {
    name: "Metz",
    slug: "metz",
    department: "Moselle",
    departmentCode: "57",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "122 572",
    description: "HD Connect Metz : expert sécurité électronique Moselle. Caméras, alarmes, contrôle d'accès pour tous types de bâtiments.",
    neighborhoods: ["Centre Pompidou", "Queuleu", "Sablon", "Plantières", "Borny"],
    nearbyTowns: ["Montigny-lès-Metz", "Saint-Julien-lès-Metz", "Longeville-lès-Metz", "Le Ban-Saint-Martin", "Marly", "Moulins-lès-Metz", "Woippy", "Ars-sur-Moselle", "Maizières-lès-Metz", "Marange-Silvange", "Courcelles-Chaussy", "Talange"]
  },
  // ===== PAYS DE LA LOIRE =====
  {
    name: "Nantes",
    slug: "nantes",
    department: "Loire-Atlantique",
    departmentCode: "44",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "327 734",
    description: "HD Connect à Nantes : installation et maintenance de systèmes de sécurité. Vidéosurveillance, alarmes anti-intrusion, domotique. Devis gratuit pour particuliers et professionnels.",
    neighborhoods: ["Centre-Ville", "Île de Nantes", "Doulon", "Chantenay", "Erdre", "Zola"],
    nearbyTowns: ["Saint-Herblain", "Saint-Sébastien-sur-Loire", "Orvault", "Sainte-Luce-sur-Loire", "Rezé", "La Chapelle-sur-Erdre", "Basse-Goulaine", "Bouguenais", "Indre", "Carquefou", "Treillières", "Sautron"]
  },
  {
    name: "Angers",
    slug: "angers",
    department: "Maine-et-Loire",
    departmentCode: "49",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "159 022",
    description: "Sécurité électronique Angers par HD Connect. Vidéosurveillance, alarmes, contrôle d'accès pour résidences et entreprises du Maine-et-Loire.",
    neighborhoods: ["Centre-Ville", "La Doutre", "Belle-Beille", "Monplaisir", "Lac de Maine"],
    nearbyTowns: ["Avrillé", "Beaucouzé", "Écouflant", "Sainte-Gemmes-sur-Loire", "Saint-Barthélemy-d'Anjou", "Trélazé", "Les Ponts-de-Cé", "Bouchemaine", "Verrières-en-Anjou", "Montreuil-Juigné", "Mûrs-Erigné", "Saint-Léger-de-Linières"]
  },
  // ===== BRETAGNE =====
  {
    name: "Rennes",
    slug: "rennes",
    department: "Ille-et-Vilaine",
    departmentCode: "35",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "230 890",
    description: "HD Connect Rennes : expert sécurité électronique Bretagne. Vidéosurveillance, alarmes, contrôle d'accès pour entreprises tech et particuliers.",
    neighborhoods: ["Centre Historique", "Villejean", "Beaulieu", "Saint-Martin", "Thabor"],
    nearbyTowns: ["Vezin-le-Coquet", "Montgermont", "Saint-Grégoire", "Saint-Jacques-de-la-Lande", "Cesson-Sévigné", "Chantepie", "Noyal-Châtillon-sur-Seiche", "Pacé", "Le Rheu", "Betton", "La Chapelle-des-Fougeretz", "Chartres-de-Bretagne"]
  },
  {
    name: "Brest",
    slug: "brest",
    department: "Finistère",
    departmentCode: "29",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "142 346",
    description: "Installation sécurité Brest par HD Connect. Protection sites portuaires, entreprises, résidences. Vidéosurveillance adaptée environnement marin.",
    neighborhoods: ["Centre-Ville", "Recouvrance", "Saint-Marc", "Lambézellec", "Saint-Pierre"],
    nearbyTowns: ["Bohars", "Guilers", "Gouesnou", "Le Relecq-Kerhuon", "Guipavas", "Plouzané", "Milizac-Guipronvel", "Saint-Renan", "Bourg-Blanc", "Plougastel-Daoulas", "Plabennec", "Locmaria-Plouzané"]
  },
  // ===== NORMANDIE =====
  {
    name: "Rouen",
    slug: "rouen",
    department: "Seine-Maritime",
    departmentCode: "76",
    region: "Normandie",
    regionSlug: "normandie",
    population: "117 662",
    description: "HD Connect Rouen : sécurité électronique Seine-Maritime. Vidéosurveillance, alarmes, contrôle d'accès pour industries et commerces normands.",
    neighborhoods: ["Centre Historique", "Saint-Sever", "Grammont", "Martainville", "Mont-Saint-Aignan"],
    nearbyTowns: ["Mont-Saint-Aignan", "Le Petit-Quevilly", "Sotteville-lès-Rouen", "Bonsecours", "Bihorel", "Bois-Guillaume", "Déville-lès-Rouen", "Darnétal", "Amfreville-la-Mi-Voie", "Le Grand-Quevilly", "Le Mesnil-Esnard", "Saint-Léger-du-Bourg-Denis"]
  },
  {
    name: "Le Havre",
    slug: "le-havre",
    department: "Seine-Maritime",
    departmentCode: "76",
    region: "Normandie",
    regionSlug: "normandie",
    population: "166 687",
    description: "Expert sécurité Le Havre. HD Connect protège zones portuaires, entrepôts, commerces. Vidéosurveillance industrielle, alarmes certifiées.",
    neighborhoods: ["Centre Reconstruit", "Sainte-Adresse", "Sanvic", "Caucriauville", "Danton"],
    nearbyTowns: ["Sainte-Adresse", "Harfleur", "Gonfreville-l'Orcher", "Montivilliers", "Octeville-sur-Mer", "Honfleur", "Trouville-sur-Mer", "Touques", "Deauville", "Saint-Romain-de-Colbosc", "Beuzeville", "Pont-l'Évêque"]
  },
  // ===== BOURGOGNE-FRANCHE-COMTÉ =====
  {
    name: "Dijon",
    slug: "dijon",
    department: "Côte-d'Or",
    departmentCode: "21",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "161 830",
    description: "HD Connect Dijon : installation sécurité Bourgogne. Vidéosurveillance, alarmes pour domaines viticoles, commerces, résidences.",
    neighborhoods: ["Centre Historique", "Toison d'Or", "Fontaine-d'Ouche", "Grésilles", "Montchapet"],
    nearbyTowns: ["Fontaine-lès-Dijon", "Talant", "Saint-Apollinaire", "Chenôve", "Longvic", "Quetigny", "Marsannay-la-Côte", "Chevigny-Saint-Sauveur", "Neuilly-Crimolois", "Genlis", "Nuits-Saint-Georges", "Is-sur-Tille"]
  },
  // ===== CENTRE-VAL DE LOIRE =====
  {
    name: "Orléans",
    slug: "orleans",
    department: "Loiret",
    departmentCode: "45",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "116 357",
    description: "Sécurité électronique Orléans par HD Connect. Vidéosurveillance, alarmes, contrôle d'accès pour entreprises logistiques et particuliers.",
    neighborhoods: ["Centre-Ville", "Source", "Argonne", "Saint-Marceau", "Madeleine"],
    nearbyTowns: ["Saint-Jean-le-Blanc", "Olivet", "Saint-Denis-en-Val", "Saint-Jean-de-la-Ruelle", "Saint-Pryvé-Saint-Mesmin", "La Chapelle-Saint-Mesmin", "Saint-Hilaire-Saint-Mesmin", "Saint-Jean-de-Braye", "Saint-Cyr-en-Val", "Fleury-les-Aubrais", "Semoy", "Saran"]
  },
  {
    name: "Tours",
    slug: "tours",
    department: "Indre-et-Loire",
    departmentCode: "37",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "139 259",
    description: "HD Connect Tours : expert sécurité Val de Loire. Protection châteaux, résidences, commerces. Vidéosurveillance discrète, alarmes.",
    neighborhoods: ["Vieux Tours", "Grammont", "Sanitas", "Deux-Lions", "Rabelais"],
    nearbyTowns: ["Saint-Pierre-des-Corps", "Saint-Cyr-sur-Loire", "La Riche", "Saint-Avertin", "La Ville-aux-Dames", "Rochecorbon", "Notre-Dame-d'Oé", "Joué-lès-Tours", "Chambray-lès-Tours", "Fondettes", "La Membrolle-sur-Choisille", "Chanceaux-sur-Choisille"]
  },
  // ===== NOUVELLES VILLES - EXTENSION NATIONALE =====
  // HAUTS-DE-FRANCE
  {
    name: "Reims",
    slug: "reims",
    department: "Marne",
    departmentCode: "51",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "177 674",
    description: "Expert sécurité Reims : HD Connect protège maisons de champagne, commerces et résidences. Vidéosurveillance, alarmes certifiées NF&A2P.",
    neighborhoods: ["Centre-Ville", "Clairmarais", "Croix-Rouge", "Murigny", "Cormontreuil"],
    nearbyTowns: ["Cormontreuil", "Tinqueux", "Bétheny", "Saint-Brice-Courcelles", "Bezannes", "Witry-lès-Reims", "Aÿ-Champagne", "Mourmelon-le-Grand", "Fismes"]
  },
  {
    name: "Roubaix",
    slug: "roubaix",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "98 000",
    description: "Installation sécurité Roubaix par HD Connect. Protection commerces, entrepôts et résidences. Vidéosurveillance, alarmes anti-intrusion.",
    neighborhoods: ["Centre-Ville", "Barbieux", "Nouveau Roubaix", "Pile", "Cul de Four"],
    nearbyTowns: ["Tourcoing", "Croix", "Wattrelos", "Hem", "Lys-lez-Lannoy"]
  },
  {
    name: "Tourcoing",
    slug: "tourcoing",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "98 772",
    description: "HD Connect Tourcoing : expert sécurité métropole lilloise. Vidéosurveillance pour commerces, industries et particuliers du Nord.",
    neighborhoods: ["Centre-Ville", "Virolois", "Croix-Rouge", "Blanc Seau", "La Marlière"],
    nearbyTowns: ["Mouvaux", "Neuville-en-Ferrain", "Roncq", "Roubaix", "Wattrelos", "Bondues", "Croix", "Wasquehal", "Marcq-en-Barœul", "Linselles", "Halluin", "Lys-lez-Lannoy"]
  },
  {
    name: "Dunkerque",
    slug: "dunkerque",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "86 263",
    description: "Sécurité Dunkerque par HD Connect. Protection zones portuaires, industries et résidences. Caméras anti-corrosion, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Malo-les-Bains", "Rosendaël", "Petite-Synthe", "Saint-Pol-sur-Mer"],
    nearbyTowns: ["Cappelle-la-Grande", "Grande-Synthe", "Coudekerque-Branche", "Téteghem-Coudekerque-Village", "Leffrinckoucke", "Bergues", "Loon-Plage", "Hoymille", "Ghyvelde", "Bourbourg", "Bray-Dunes", "Gravelines"]
  },
  // PROVENCE-ALPES-CÔTE D'AZUR
  {
    name: "Toulon",
    slug: "toulon",
    department: "Var",
    departmentCode: "83",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "179 116",
    description: "Expert sécurité Toulon et base navale. HD Connect installe vidéosurveillance marine, alarmes pour résidences et commerces varois.",
    neighborhoods: ["Centre-Ville", "Mourillon", "Cap Brun", "La Serinette", "Le Jonquet"],
    nearbyTowns: ["La Valette-du-Var", "Le Revest-les-Eaux", "Ollioules", "Saint-Mandrier-sur-Mer", "La Garde", "La Seyne-sur-Mer", "Le Pradet", "Solliès-Toucas", "La Farlède", "Sanary-sur-Mer", "Le Beausset", "Six-Fours-les-Plages"]
  },
  {
    name: "Antibes",
    slug: "antibes",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "77 637",
    description: "Sécurité haut de gamme Antibes Juan-les-Pins. HD Connect protège villas, résidences de luxe et yachts. Discrétion garantie.",
    neighborhoods: ["Vieil Antibes", "Juan-les-Pins", "Cap d'Antibes", "La Fontonne", "Les Semboules"],
    nearbyTowns: ["Vallauris", "Biot", "Villeneuve-Loubet", "Valbonne", "Mougins", "Cannes", "Le Cannet", "Roquefort-les-Pins", "La Colle-sur-Loup", "Mouans-Sartoux", "Saint-Paul-de-Vence", "La Roquette-sur-Siagne"]
  },
  {
    name: "Avignon",
    slug: "avignon",
    department: "Vaucluse",
    departmentCode: "84",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "92 188",
    description: "HD Connect Avignon : sécurité pour commerces intra-muros et résidences. Protection patrimoine, vidéosurveillance discrète.",
    neighborhoods: ["Intra-Muros", "Rocade", "Montfavet", "Le Pontet", "Courtine"],
    nearbyTowns: ["Le Pontet", "Villeneuve-lès-Avignon", "Rognonas", "Morières-lès-Avignon", "Les Angles", "Châteaurenard", "Vedène", "Sorgues", "Pujaut", "Châteauneuf-de-Gadagne", "Barbentane", "Saint-Saturnin-lès-Avignon"]
  },
  // AUVERGNE-RHÔNE-ALPES
  {
    name: "Villeurbanne",
    slug: "villeurbanne",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "163 684",
    description: "Installation sécurité Villeurbanne par HD Connect. Protection campus universitaires, entreprises et résidences. Intervention rapide 69.",
    neighborhoods: ["Gratte-Ciel", "Tonkin", "Cusset", "Charpennes", "La Doua"],
    nearbyTowns: ["Lyon", "Vaulx-en-Velin", "Bron", "Décines-Charpieu", "Caluire-et-Cuire"]
  },
  {
    name: "Clermont-Ferrand",
    slug: "clermont-ferrand",
    department: "Puy-de-Dôme",
    departmentCode: "63",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "146 351",
    description: "HD Connect Clermont-Ferrand : expert sécurité Auvergne. Vidéosurveillance industrielle Michelin, alarmes pour commerces et particuliers.",
    neighborhoods: ["Centre Historique", "Montferrand", "La Pardieu", "Croix de Neyrat", "Jaude"],
    nearbyTowns: ["Aubière", "Chamalières", "Beaumont", "Aulnat", "Cébazat", "Blanzat", "Gerzat", "Royat", "Ceyrat", "Lempdes", "Châteaugay", "Romagnat"]
  },
  {
    name: "Annecy",
    slug: "annecy",
    department: "Haute-Savoie",
    departmentCode: "74",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "132 117",
    description: "Sécurité Annecy par HD Connect. Protection résidences de standing, commerces touristiques et entreprises. Vidéosurveillance lac.",
    neighborhoods: ["Vieille Ville", "Novel", "Les Fins", "Meythet", "Cran-Gevrier"],
    nearbyTowns: ["Sevrier", "Epagny Metz-Tessy", "Poisy", "Argonay", "Chavanod", "Villaz", "Saint-Jorioz", "Sillingy", "La Balme-de-Sillingy", "Groisy", "Fillière", "Cruseilles"]
  },
  {
    name: "Chambéry",
    slug: "chambery",
    department: "Savoie",
    departmentCode: "73",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "59 964",
    description: "Expert sécurité Chambéry et Savoie. HD Connect protège stations de ski, commerces et résidences. Équipements adaptés montagne.",
    neighborhoods: ["Centre-Ville", "Bissy", "Cognin", "Le Biollay", "Mérande"],
    nearbyTowns: ["Bassens", "Cognin", "Jacob-Bellecombette", "Barberaz", "Saint-Alban-Leysse", "La Motte-Servolex", "La Ravoire", "Barby", "Challes-les-Eaux", "Le Bourget-du-Lac", "Drumettaz-Clarafond", "Porte-de-Savoie"]
  },
  // OCCITANIE
  {
    name: "Nîmes",
    slug: "nimes",
    department: "Gard",
    departmentCode: "30",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "151 839",
    description: "HD Connect Nîmes : sécurité pour commerces, arènes et patrimoine. Vidéosurveillance, alarmes adaptées climat méditerranéen.",
    neighborhoods: ["Centre Historique", "Costières", "Pissevin", "Valdegour", "Mas de Mingue"],
    nearbyTowns: ["Caveirac", "Caissargues", "Milhaud", "Bouillargues", "Bernis", "Clarensac", "Marguerittes", "Uchaud", "Garons", "Poulx", "Manduel", "Générac"]
  },
  {
    name: "Perpignan",
    slug: "perpignan",
    department: "Pyrénées-Orientales",
    departmentCode: "66",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "121 616",
    description: "Installation sécurité Perpignan par HD Connect. Protection commerces, résidences et exploitations agricoles. Intervention Pyrénées-Orientales.",
    neighborhoods: ["Centre-Ville", "Saint-Jacques", "Le Vernet", "Moulin à Vent", "Mas Balande"],
    nearbyTowns: ["Cabestany", "Bompas", "Saint-Estève", "Pia", "Saleilles", "Villeneuve-de-la-Raho", "Villelongue-de-la-Salanque", "Baho", "Toulouges", "Pollestres", "Claira", "Canohès"]
  },
  {
    name: "Béziers",
    slug: "beziers",
    department: "Hérault",
    departmentCode: "34",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "81 545",
    description: "Sécurité Béziers par HD Connect. Protection vignobles, commerces et résidences. Vidéosurveillance, alarmes anti-intrusion certifiées.",
    neighborhoods: ["Centre Historique", "La Devèze", "Montimaran", "Arènes", "Faubourg"],
    nearbyTowns: ["Boujan-sur-Libron", "Villeneuve-lès-Béziers", "Lignan-sur-Orb", "Sauvian", "Maraussan", "Servian", "Thézan-lès-Béziers", "Montady", "Lespignan", "Sérignan", "Portiragnes", "Valras-Plage"]
  },
  // NOUVELLE-AQUITAINE
  {
    name: "Limoges",
    slug: "limoges",
    department: "Haute-Vienne",
    departmentCode: "87",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "129 937",
    description: "HD Connect Limoges : expert sécurité Haute-Vienne. Protection industries porcelainières, commerces et résidences. Devis gratuit.",
    neighborhoods: ["Centre-Ville", "Beaubreuil", "Val de l'Aurence", "La Bastide", "Landouge"],
    nearbyTowns: ["Couzeix", "Isle", "Panazol", "Condat-sur-Vienne", "Le Palais-sur-Vienne", "Verneuil-sur-Vienne", "Feytiat", "Aixe-sur-Vienne", "Rilhac-Rancon", "Boisseuil", "Ambazac", "Saint-Léonard-de-Noblat"]
  },
  {
    name: "Poitiers",
    slug: "poitiers",
    department: "Vienne",
    departmentCode: "86",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "89 916",
    description: "Installation sécurité Poitiers par HD Connect. Protection campus, commerces et patrimoine. Vidéosurveillance, alarmes étudiants.",
    neighborhoods: ["Centre-Ville", "Beaulieu", "Les Couronneries", "Saint-Éloi", "Poitiers Ouest"],
    nearbyTowns: ["Buxerolles", "Saint-Benoît", "Mignaloux-Beauvoir", "Montamisé", "Chasseneuil-du-Poitou", "Migné-Auxances", "Vouneuil-sous-Biard", "Ligugé", "Saint-Georges-lès-Baillargeaux", "Fontaine-le-Comte", "Dissay", "Neuville-de-Poitou"]
  },
  {
    name: "Pau",
    slug: "pau",
    department: "Pyrénées-Atlantiques",
    departmentCode: "64",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "80 441",
    description: "Expert sécurité Pau et Béarn. HD Connect protège résidences, commerces et industries. Vidéosurveillance panoramique Pyrénées.",
    neighborhoods: ["Centre-Ville", "Trespoey", "Ousse des Bois", "Saragosse", "Dufau"],
    nearbyTowns: ["Bizanos", "Idron", "Billère", "Lons", "Morlaàs", "Serres-Castet", "Gelos", "Lescar", "Jurançon", "Sauvagnon", "Gan", "Nay"]
  },
  {
    name: "Bayonne",
    slug: "bayonne",
    department: "Pyrénées-Atlantiques",
    departmentCode: "64",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "54 306",
    description: "Sécurité Bayonne Côte Basque par HD Connect. Protection commerces, fêtes, résidences. Caméras adaptées environnement maritime.",
    neighborhoods: ["Grand Bayonne", "Petit Bayonne", "Saint-Esprit", "Marracq", "Arènes"],
    nearbyTowns: ["Saint-Pierre-d'Irube", "Villefranque", "Anglet", "Boucau", "Mouguerre", "Bassussarry", "Tarnos", "Arcangues", "Biarritz", "Saint-Martin-de-Seignanx", "Ondres", "Urcuit"]
  },
  // PAYS DE LA LOIRE
  {
    name: "Le Mans",
    slug: "le-mans",
    department: "Sarthe",
    departmentCode: "72",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "146 249",
    description: "HD Connect Le Mans : sécurité pour circuits, industries automobiles et résidences. Vidéosurveillance haute performance 24h.",
    neighborhoods: ["Centre-Ville", "Coulaines", "Allonnes", "La Chapelle-Saint-Aubin", "Arnage"],
    nearbyTowns: ["Allonnes", "Arnage", "Coulaines", "Ruaudin", "Changé", "Sargé-lès-le-Mans", "Mulsanne", "Yvré-l'Évêque", "Moncé-en-Belin", "Champagné", "Guécélard", "Teloché"]
  },
  {
    name: "Saint-Nazaire",
    slug: "saint-nazaire",
    department: "Loire-Atlantique",
    departmentCode: "44",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "74 568",
    description: "Expert sécurité Saint-Nazaire chantiers navals. HD Connect protège industries, zones portuaires et commerces. Caméras anti-corrosion.",
    neighborhoods: ["Centre-Ville", "Méan-Penhoët", "Ville-Port", "La Bouletterie", "Kerlédé"],
    nearbyTowns: ["Trignac", "Pornichet", "Saint-Brevin-les-Pins", "Saint-André-des-Eaux", "Montoir-de-Bretagne", "La Baule-Escoublac", "Saint-Malo-de-Guersac", "Saint-Joachim", "Saint-Père-en-Retz", "Saint-Lyphard", "Donges", "Le Pouliguen"]
  },
  // BRETAGNE
  {
    name: "Lorient",
    slug: "lorient",
    department: "Morbihan",
    departmentCode: "56",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "58 329",
    description: "Installation sécurité Lorient par HD Connect. Protection bases nautiques, commerces et résidences. Vidéosurveillance maritime.",
    neighborhoods: ["Centre-Ville", "Merville", "Keryado", "Keroman", "Nouvelle Ville"],
    nearbyTowns: ["Larmor-Plage", "Locmiquélic", "Lanester", "Quéven", "Ploemeur", "Riantec", "Caudan", "Kervignac", "Guidel", "Hennebont", "Pont-Scorff", "Merlevenez"]
  },
  {
    name: "Vannes",
    slug: "vannes",
    department: "Morbihan",
    departmentCode: "56",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "55 790",
    description: "Sécurité Vannes par HD Connect. Protection vieille ville, commerces et résidences Golfe du Morbihan. Vidéosurveillance discrète.",
    neighborhoods: ["Centre Historique", "Conleau", "Ménimur", "Kercado", "Tohannic"],
    nearbyTowns: ["Séné", "Saint-Avé", "Arradon", "Ploeren", "Plescop", "Saint-Nolff", "Theix-Noyalo", "Monterblanc", "Baden", "Surzur", "Grand-Champ", "Elven"]
  },
  {
    name: "Quimper",
    slug: "quimper",
    department: "Finistère",
    departmentCode: "29",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "64 385",
    description: "HD Connect Quimper : expert sécurité Cornouaille. Protection commerces, industries faïencières et résidences. Devis gratuit.",
    neighborhoods: ["Centre-Ville", "Penhars", "Ergué-Armel", "Kerfeunteun", "Locmaria"],
    nearbyTowns: ["Ergué-Gabéric", "Pluguffan", "Saint-Évarzec", "Plomelin", "Plogonnec", "Pleuven", "Combrit", "Saint-Yvi", "Briec", "La Forêt-Fouesnant", "Bénodet", "Elliant"]
  },
  // NORMANDIE
  {
    name: "Caen",
    slug: "caen",
    department: "Calvados",
    departmentCode: "14",
    region: "Normandie",
    regionSlug: "normandie",
    population: "109 400",
    description: "Expert sécurité Caen par HD Connect. Protection campus, commerces et patrimoine normand. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Beaulieu", "Folie Couvrechef", "Saint-Jean", "Vaucelles"],
    nearbyTowns: ["Hérouville-Saint-Clair", "Bretteville-sur-Odon", "Fleury-sur-Orne", "Cormelles-le-Royal", "Mondeville", "Ifs", "Carpiquet", "Colombelles", "Giberville", "Biéville-Beuville", "Blainville-sur-Orne", "Verson"]
  },
  {
    name: "Cherbourg-en-Cotentin",
    slug: "cherbourg-en-cotentin",
    department: "Manche",
    departmentCode: "50",
    region: "Normandie",
    regionSlug: "normandie",
    population: "78 258",
    description: "Sécurité Cherbourg par HD Connect. Protection arsenaux, industries navales et commerces. Caméras résistantes environnement marin.",
    neighborhoods: ["Centre-Ville", "Tourlaville", "Équeurdreville", "Querqueville", "La Glacerie"],
    nearbyTowns: ["La Hague", "Valognes", "Les Pieux", "Bricquebec-en-Cotentin", "Picauville"]
  },
  // GRAND EST
  {
    name: "Mulhouse",
    slug: "mulhouse",
    department: "Haut-Rhin",
    departmentCode: "68",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "104 978",
    description: "HD Connect Mulhouse : sécurité pour industries automobiles et chimiques. Vidéosurveillance, alarmes adaptées environnement industriel.",
    neighborhoods: ["Centre-Ville", "Rebberg", "Dornach", "Bourtzwiller", "Illzach"],
    nearbyTowns: ["Riedisheim", "Pfastatt", "Illzach", "Brunstatt-Didenheim", "Kingersheim", "Lutterbach", "Richwiller", "Morschwiller-le-Bas", "Rixheim", "Wittenheim", "Sausheim", "Wittelsheim"]
  },
  {
    name: "Colmar",
    slug: "colmar",
    department: "Haut-Rhin",
    departmentCode: "68",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "66 970",
    description: "Installation sécurité Colmar par HD Connect. Protection vignobles, commerces touristiques et résidences alsaciennes. Devis gratuit.",
    neighborhoods: ["Petite Venise", "Centre Historique", "Europe", "Florimont", "Maraîchers"],
    nearbyTowns: ["Horbourg-Wihr", "Ingersheim", "Kaysersberg Vignoble", "Wintzenheim", "Turckheim", "Sainte-Croix-en-Plaine", "Ribeauvillé", "Marckolsheim", "Rouffach", "Châtenois", "Orbey", "Scherwiller"]
  },
  {
    name: "Troyes",
    slug: "troyes",
    department: "Aube",
    departmentCode: "10",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "62 088",
    description: "Expert sécurité Troyes par HD Connect. Protection centres de marques, industries textiles et patrimoine. Vidéosurveillance discrète.",
    neighborhoods: ["Centre Historique", "Sénardes", "Chartreux", "Jules Guesde", "Chapelle Saint-Luc"],
    nearbyTowns: ["Saint-André-les-Vergers", "Saint-Julien-les-Villas", "Les Noës-près-Troyes", "Rosières-près-Troyes", "Pont-Sainte-Marie", "Sainte-Savine", "La Chapelle-Saint-Luc", "Saint-Parres-aux-Tertres", "Bréviandes", "La Rivière-de-Corps", "Aix-Villemaur-Pâlis"]
  },
  // BOURGOGNE-FRANCHE-COMTÉ
  {
    name: "Besançon",
    slug: "besancon",
    department: "Doubs",
    departmentCode: "25",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "118 489",
    description: "HD Connect Besançon : sécurité horlogère et microtechnique. Protection industries de précision, commerces et résidences.",
    neighborhoods: ["La Boucle", "Battant", "Planoise", "Palente", "Chailluz"],
    nearbyTowns: ["Saône", "Saint-Vit", "Ornans", "Valdahon", "Baume-les-Dames"]
  },
  {
    name: "Chalon-sur-Saône",
    slug: "chalon-sur-saone",
    department: "Saône-et-Loire",
    departmentCode: "71",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "45 102",
    description: "Sécurité Chalon-sur-Saône par HD Connect. Protection industries, commerces et vignobles bourguignons. Vidéosurveillance certifiée.",
    neighborhoods: ["Centre-Ville", "Saint-Jean", "Plateau Saint-Jean", "Aubépins", "Prés Saint-Jean"],
    nearbyTowns: ["Châtenoy-le-Royal", "Saint-Marcel", "Saint-Rémy", "Givry", "Ouroux-sur-Saône", "Chagny", "Tournus", "Le Breuil", "Montchanin", "Louhans"]
  },
  // CORSE
  {
    name: "Ajaccio",
    slug: "ajaccio",
    department: "Corse-du-Sud",
    departmentCode: "2A",
    region: "Corse",
    regionSlug: "corse",
    population: "76 320",
    description: "Expert sécurité Ajaccio par HD Connect. Protection villas, commerces et hôtels corses. Vidéosurveillance adaptée climat méditerranéen.",
    neighborhoods: ["Centre-Ville", "Mezzavia", "Les Cannes", "Saint-Jean", "Aspretto"],
    nearbyTowns: ["Alata", "Afa", "Bastelicaccia", "Sarrola-Carcopino", "Grosseto-Prugna", "Propriano"]
  },
  {
    name: "Bastia",
    slug: "bastia",
    department: "Haute-Corse",
    departmentCode: "2B",
    region: "Corse",
    regionSlug: "corse",
    population: "46 867",
    description: "Installation sécurité Bastia par HD Connect. Protection port, commerces et résidences. Vidéosurveillance maritime et urbaine.",
    neighborhoods: ["Terra Vecchia", "Terra Nova", "Lupino", "Toga", "Paese Novu"],
    nearbyTowns: ["Ville-di-Pietrabugno", "Furiani", "San-Martino-di-Lota", "Biguglia", "Borgo", "Lucciana", "Vescovato", "Penta-di-Casinca"]
  },
  // ===== ZONES À FORT TAUX DE CAMBRIOLAGES - PRIORITAIRES =====
  // SEINE-SAINT-DENIS (93) - Zone critique
  {
    name: "Bobigny",
    slug: "bobigny",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "54 000",
    description: "Expert sécurité Bobigny, préfecture du 93. HD Connect protège commerces, entreprises et résidences avec vidéosurveillance HD 4K et alarmes certifiées NF&A2P. Intervention urgence 2h.",
    neighborhoods: ["Centre-Ville", "Karl Marx", "Pont de Bondy", "Grémillon", "Pablo Picasso"],
    nearbyTowns: ["Bondy", "Drancy", "Noisy-le-Sec", "Pantin", "Romainville"]
  },
  {
    name: "Aubervilliers",
    slug: "aubervilliers",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "89 000",
    description: "Sécurité Aubervilliers par HD Connect. Protection entrepôts, commerces et résidences. Vidéosurveillance IA, détection intrusion 24/7. Zone industrielle et urbaine.",
    neighborhoods: ["Centre-Ville", "Quatre Chemins", "Fort d'Aubervilliers", "Villette", "Landy"],
    nearbyTowns: ["Saint-Denis", "La Courneuve", "Pantin", "Paris 19e", "Stains"]
  },
  {
    name: "Aulnay-sous-Bois",
    slug: "aulnay-sous-bois",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "87 599",
    description: "HD Connect Aulnay-sous-Bois : sécurité renforcée pour zones commerciales, pavillons et entreprises. Vidéosurveillance IA 4K, alarmes connectées, dépannage urgent.",
    neighborhoods: ["Centre-Ville", "Rose des Vents", "3000", "Vieux Pays", "Mitry"],
    nearbyTowns: ["Le Blanc-Mesnil", "Sevran", "Villepinte", "Drancy", "Livry-Gargan", "Les Pavillons-sous-Bois", "Le Bourget", "Bondy", "Gonesse", "Tremblay-en-France", "Bobigny", "Clichy-sous-Bois"]
  },
  {
    name: "Drancy",
    slug: "drancy",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "72 000",
    description: "Installation sécurité Drancy par HD Connect. Protection résidences, commerces et sites sensibles. Alarmes certifiées, vidéosurveillance HD.",
    neighborhoods: ["Centre-Ville", "La Muette", "Économie", "Avenir Parisien", "Gaston Roulaud"],
    nearbyTowns: ["Bobigny", "Le Bourget", "Bondy", "Le Blanc-Mesnil", "Pantin"]
  },
  {
    name: "Bondy",
    slug: "bondy",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "54 000",
    description: "Expert sécurité Bondy par HD Connect. Vidéosurveillance, alarmes et contrôle d'accès pour sécuriser pavillons et commerces du 93.",
    neighborhoods: ["Centre-Ville", "Pont de Bondy", "Terre Saint-Blaise", "La Noue", "Merisier"],
    nearbyTowns: ["Bobigny", "Noisy-le-Sec", "Les Pavillons-sous-Bois", "Rosny-sous-Bois", "Villemomble"]
  },
  {
    name: "Épinay-sur-Seine",
    slug: "epinay-sur-seine",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "56 000",
    description: "Sécurité Épinay-sur-Seine par HD Connect. Protection bords de Seine, commerces et résidences. Vidéosurveillance, alarmes anti-intrusion.",
    neighborhoods: ["Centre-Ville", "Orgemont", "Sources", "Presqu'île", "La Briche"],
    nearbyTowns: ["Saint-Denis", "Villetaneuse", "Enghien-les-Bains", "Argenteuil", "Île-Saint-Denis"]
  },
  {
    name: "Sevran",
    slug: "sevran",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "52 000",
    description: "HD Connect Sevran : sécurité résidentielle et commerciale. Caméras IA, alarmes certifiées. Couverture canal de l'Ourcq et zones pavillonnaires.",
    neighborhoods: ["Centre-Ville", "Beaudottes", "Rougemont", "Montceleux", "Pont Blanc"],
    nearbyTowns: ["Aulnay-sous-Bois", "Villepinte", "Livry-Gargan", "Tremblay-en-France", "Vaujours"]
  },
  {
    name: "La Courneuve",
    slug: "la-courneuve",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "45 000",
    description: "Installation sécurité La Courneuve par HD Connect. Protection zones industrielles, commerces et parc Georges Valbon. Vidéosurveillance renforcée.",
    neighborhoods: ["Centre-Ville", "Quatre Mille", "Cosmonautes", "Six Routes", "Floréal"],
    nearbyTowns: ["Saint-Denis", "Aubervilliers", "Stains", "Dugny", "Le Bourget"]
  },
  // ESSONNE (91) - Zone sensible
  {
    name: "Corbeil-Essonnes",
    slug: "corbeil-essonnes",
    department: "Essonne",
    departmentCode: "91",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "52 000",
    description: "Expert sécurité Corbeil-Essonnes par HD Connect. Protection zones industrielles, commerces Seine et résidences. Vidéosurveillance HD, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Tarterêts", "Montconseil", "L'Ermitage", "Papeterie"],
    nearbyTowns: ["Évry-Courcouronnes", "Essonnes", "Le Coudray-Montceaux", "Saint-Germain-lès-Corbeil", "Soisy-sur-Seine"]
  },
  {
    name: "Grigny",
    slug: "grigny",
    department: "Essonne",
    departmentCode: "91",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "29 000",
    description: "HD Connect Grigny : sécurité adaptée zone urbaine sensible. Vidéosurveillance renforcée, alarmes anti-intrusion, contrôle d'accès résidences.",
    neighborhoods: ["Grande Borne", "Grigny 2", "Centre-Ville", "Plaine", "Sablons"],
    nearbyTowns: ["Viry-Châtillon", "Ris-Orangis", "Évry-Courcouronnes", "Fleury-Mérogis", "Savigny-sur-Orge"]
  },
  {
    name: "Savigny-sur-Orge",
    slug: "savigny-sur-orge",
    department: "Essonne",
    departmentCode: "91",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "37 601",
    description: "Sécurité Savigny-sur-Orge par HD Connect. Protection pavillons, commerces et résidences. Alarmes connectées, vidéosurveillance périmétrique.",
    neighborhoods: ["Centre-Ville", "Grand Vaux", "Champagne", "Rossays", "Gare"],
    nearbyTowns: ["Juvisy-sur-Orge", "Morangis", "Épinay-sur-Orge", "Villemoisson-sur-Orge", "Morsang-sur-Orge", "Longjumeau", "Athis-Mons", "Paray-Vieille-Poste", "Ballainvilliers", "Villiers-sur-Orge", "Sainte-Geneviève-des-Bois", "Vigneux-sur-Seine"]
  },
  // VAL-D'OISE (95) - Zone sensible
  {
    name: "Sarcelles",
    slug: "sarcelles",
    department: "Val-d'Oise",
    departmentCode: "95",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "58 000",
    description: "Expert sécurité Sarcelles par HD Connect. Vidéosurveillance IA pour grands ensembles, commerces et pavillons. Alarmes certifiées NF&A2P.",
    neighborhoods: ["Sarcelles Village", "Lochères", "Les Chardonnerettes", "Flanades", "Cholettes"],
    nearbyTowns: ["Villiers-le-Bel", "Garges-lès-Gonesse", "Arnouville", "Saint-Brice-sous-Forêt", "Écouen"]
  },
  {
    name: "Garges-lès-Gonesse",
    slug: "garges-les-gonesse",
    department: "Val-d'Oise",
    departmentCode: "95",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "43 000",
    description: "Installation sécurité Garges-lès-Gonesse par HD Connect. Protection résidences, commerces et zones d'activités. Vidéosurveillance HD, alarmes.",
    neighborhoods: ["Centre-Ville", "Dame Blanche", "Doucettes", "Balagny", "Carnot"],
    nearbyTowns: ["Sarcelles", "Stains", "Pierrefitte-sur-Seine", "Dugny", "Arnouville"]
  },
  {
    name: "Goussainville",
    slug: "goussainville",
    department: "Val-d'Oise",
    departmentCode: "95",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "31 301",
    description: "HD Connect Goussainville : sécurité zone aéroportuaire. Protection commerces, entreprises logistiques et résidences. Vidéosurveillance, contrôle d'accès.",
    neighborhoods: ["Centre-Ville", "Grandes Bornes", "Vieux Village", "Pont du Rû de Montigny", "Buisson"],
    nearbyTowns: ["Le Thillay", "Louvres", "Puiseux-en-France", "Villiers-le-Bel", "Arnouville", "Écouen", "Marly-la-Ville", "Ézanville", "Vémars", "Fosses", "Luzarches", "Domont"]
  },
  // BOUCHES-DU-RHÔNE (13) - Zone critique PACA
  {
    name: "Aubagne",
    slug: "aubagne",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "47 529",
    description: "Expert sécurité Aubagne par HD Connect. Protection zones commerciales, industries et résidences provençales. Vidéosurveillance HD, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "La Tourtelle", "Les Passons", "Pin Vert", "Camp Major"],
    nearbyTowns: ["Roquevaire", "Roquefort-la-Bédoule", "Gémenos", "Allauch", "Ceyreste", "La Destrousse", "Peypin", "Auriol", "Cuges-les-Pins", "La Bouilladisse", "Gréasque", "Saint-Zacharie"]
  },
  {
    name: "Vitrolles",
    slug: "vitrolles",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "36 758",
    description: "Sécurité Vitrolles par HD Connect. Zone aéroportuaire : protection entreprises, hôtels et résidences. Vidéosurveillance, contrôle d'accès biométrique.",
    neighborhoods: ["Centre-Ville", "Les Pinchinades", "La Frescoule", "Griffon", "Les Pins"],
    nearbyTowns: ["Marignane", "Les Pennes-Mirabeau", "Meyrargues", "Peyrolles-en-Provence"]
  },
  {
    name: "Marignane",
    slug: "marignane",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "35 000",
    description: "HD Connect Marignane : sécurité aéroport Marseille-Provence. Protection entreprises aéronautiques, hôtels et résidences. Vidéosurveillance IA.",
    neighborhoods: ["Centre-Ville", "Les Florides", "Saint-Pierre", "Bonneveine", "Canto Perdrix"],
    nearbyTowns: ["Vitrolles", "Saint-Victoret", "Gignac-la-Nerthe", "Châteauneuf-les-Martigues", "Martigues"]
  },
  {
    name: "La Ciotat",
    slug: "la-ciotat",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "38 477",
    description: "Installation sécurité La Ciotat par HD Connect. Protection port, commerces et résidences méditerranéennes. Caméras résistantes environnement marin.",
    neighborhoods: ["Centre-Ville", "Vieux Port", "Les Matagots", "Saint-Jean", "Fardeloup"],
    nearbyTowns: ["Saint-Cyr-sur-Mer", "La Cadière-d'Azur", "Bandol", "Le Castellet", "Signes", "Nans-les-Pins", "Peynier", "Trets", "Fuveau", "Rousset", "Pourrières"]
  },
  {
    name: "Martigues",
    slug: "martigues",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "48 298",
    description: "Expert sécurité Martigues par HD Connect. Protection zones pétrochimiques, port et résidences. Vidéosurveillance industrielle ATEX, alarmes certifiées.",
    neighborhoods: ["Jonquières", "Ferrières", "L'Île", "Croix-Sainte", "La Couronne"],
    nearbyTowns: ["Port-de-Bouc", "Sausset-les-Pins", "Châteauneuf-les-Martigues", "Carry-le-Rouet", "Berre-l'Étang", "Saint-Chamas", "La Fare-les-Oliviers", "Lançon-Provence", "Pélissanne"]
  },
  // ALPES-MARITIMES (06) - Zone critique Côte d'Azur
  {
    name: "Antibes",
    slug: "antibes",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "77 637",
    description: "Sécurité haut de gamme Antibes par HD Connect. Protection villas Juan-les-Pins, yachts Port Vauban et commerces. Vidéosurveillance discrète.",
    neighborhoods: ["Vieil Antibes", "Juan-les-Pins", "Cap d'Antibes", "La Fontonne", "Les Semboules"],
    nearbyTowns: ["Vallauris", "Biot", "Villeneuve-Loubet", "Valbonne", "Mougins", "Cannes", "Le Cannet", "Roquefort-les-Pins", "La Colle-sur-Loup", "Mouans-Sartoux", "Saint-Paul-de-Vence", "La Roquette-sur-Siagne"]
  },
  {
    name: "Grasse",
    slug: "grasse",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "50 970",
    description: "HD Connect Grasse : sécurité parfumeries et résidences. Protection industries de luxe, commerces et villas. Vidéosurveillance IA, alarmes certifiées.",
    neighborhoods: ["Centre Historique", "Saint-Jacques", "Plan de Grasse", "Magagnosc", "Plascassier"],
    nearbyTowns: ["Châteauneuf-Grasse", "Peymeinade", "Auribeau-sur-Siagne", "Le Rouret", "Saint-Vallier-de-Thiey", "Tourrettes-sur-Loup", "Saint-Cézaire-sur-Siagne", "Carros", "Saint-Martin-du-Var", "Levens"]
  },
  {
    name: "Cagnes-sur-Mer",
    slug: "cagnes-sur-mer",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "52 000",
    description: "Installation sécurité Cagnes-sur-Mer par HD Connect. Protection hippodrome, commerces et résidences. Vidéosurveillance périmétrique.",
    neighborhoods: ["Cros-de-Cagnes", "Haut-de-Cagnes", "Centre-Ville", "Les Vespins", "Le Logis"],
    nearbyTowns: ["Saint-Laurent-du-Var", "Villeneuve-Loubet", "La Colle-sur-Loup", "Vence", "Nice"]
  },
  {
    name: "Menton",
    slug: "menton",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "30 604",
    description: "Expert sécurité Menton par HD Connect. Protection villas de luxe, hôtels et commerces frontière italienne. Vidéosurveillance discrète, alarmes.",
    neighborhoods: ["Vieille Ville", "Garavan", "Carnolès", "Madone", "Borrigo"],
    nearbyTowns: ["Roquebrune-Cap-Martin", "Beausoleil", "La Turbie", "Sospel", "Cap-d'Ail", "Contes"]
  },
  // VAR (83) - Zone touristique sensible
  {
    name: "Toulon",
    slug: "toulon",
    department: "Var",
    departmentCode: "83",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "179 116",
    description: "Expert sécurité Toulon par HD Connect. Protection arsenal, port militaire, commerces et résidences. Vidéosurveillance HD, contrôle d'accès sécurisé.",
    neighborhoods: ["Centre-Ville", "Mourillon", "Cap Brun", "Saint-Jean du Var", "La Serinette"],
    nearbyTowns: ["La Valette-du-Var", "Le Revest-les-Eaux", "Ollioules", "Saint-Mandrier-sur-Mer", "La Garde", "La Seyne-sur-Mer", "Le Pradet", "Solliès-Toucas", "La Farlède", "Sanary-sur-Mer", "Le Beausset", "Six-Fours-les-Plages"]
  },
  {
    name: "Fréjus",
    slug: "frejus",
    department: "Var",
    departmentCode: "83",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "59 719",
    description: "Sécurité Fréjus par HD Connect. Protection zones touristiques, Port-Fréjus et résidences. Vidéosurveillance saisonnière, alarmes connectées.",
    neighborhoods: ["Centre-Ville", "Fréjus-Plage", "Saint-Aygulf", "La Tour de Mare", "Villeneuve"],
    nearbyTowns: ["Saint-Raphaël", "Puget-sur-Argens", "Bagnols-en-Forêt", "Roquebrune-sur-Argens", "Montauroux", "Le Muy", "Callian", "Sainte-Maxime", "Pégomas", "Fayence", "Le Tignet", "La Motte"]
  },
  {
    name: "Hyères",
    slug: "hyeres",
    department: "Var",
    departmentCode: "83",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "55 858",
    description: "HD Connect Hyères : sécurité îles d'Or et presqu'île de Giens. Protection villas, commerces et ports. Vidéosurveillance résistante sel marin.",
    neighborhoods: ["Centre-Ville", "Giens", "L'Ayguade", "La Capte", "Les Salins"],
    nearbyTowns: ["La Londe-les-Maures", "Bormes-les-Mimosas", "Carqueiranne", "Pierrefeu-du-Var", "Le Lavandou", "Solliès-Pont", "Puget-Ville", "Cuers", "Carnoules", "Pignans", "Gonfaron", "Cavalaire-sur-Mer"]
  },
  {
    name: "Draguignan",
    slug: "draguignan",
    department: "Var",
    departmentCode: "83",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "40 826",
    description: "Installation sécurité Draguignan par HD Connect. Sous-préfecture du Var : protection commerces, industries et résidences. Alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Les Collettes", "Sainte-Barbe", "Les Négadis", "Les Incapis"],
    nearbyTowns: ["Trans-en-Provence", "Flayosc", "Les Arcs", "Lorgues", "Vidauban", "Salernes", "Le Cannet-des-Maures", "Le Luc", "Le Plan-de-la-Tour", "Carcès", "Flassans-sur-Issole", "Grimaud"]
  },
  // NORD (59) - Zone très sensible
  {
    name: "Roubaix",
    slug: "roubaix",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "98 000",
    description: "Expert sécurité Roubaix par HD Connect. Protection commerces, usines textiles et résidences. Vidéosurveillance IA, alarmes anti-intrusion renforcées.",
    neighborhoods: ["Centre-Ville", "Alma-Gare", "Pile", "Croix-Bas Saint-Pierre", "Barbieux"],
    nearbyTowns: ["Tourcoing", "Wattrelos", "Croix", "Wasquehal", "Hem"]
  },
  {
    name: "Tourcoing",
    slug: "tourcoing",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "98 772",
    description: "Sécurité Tourcoing par HD Connect. Protection zone transfrontalière, commerces et résidences. Vidéosurveillance HD, contrôle d'accès.",
    neighborhoods: ["Centre-Ville", "Croix-Rouge", "Epidème", "Virolois", "Phalempins"],
    nearbyTowns: ["Mouvaux", "Neuville-en-Ferrain", "Roncq", "Roubaix", "Wattrelos", "Bondues", "Croix", "Wasquehal", "Marcq-en-Barœul", "Linselles", "Halluin", "Lys-lez-Lannoy"]
  },
  {
    name: "Dunkerque",
    slug: "dunkerque",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "86 263",
    description: "HD Connect Dunkerque : sécurité portuaire et industrielle. Protection terminaux, usines sidérurgiques et commerces. Caméras résistantes environnement marin.",
    neighborhoods: ["Centre-Ville", "Malo-les-Bains", "Rosendaël", "Petite-Synthe", "Saint-Pol-sur-Mer"],
    nearbyTowns: ["Cappelle-la-Grande", "Grande-Synthe", "Coudekerque-Branche", "Téteghem-Coudekerque-Village", "Leffrinckoucke", "Bergues", "Loon-Plage", "Hoymille", "Ghyvelde", "Bourbourg", "Bray-Dunes", "Gravelines"]
  },
  {
    name: "Villeneuve-d'Ascq",
    slug: "villeneuve-d-ascq",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "62 868",
    description: "Installation sécurité Villeneuve-d'Ascq par HD Connect. Protection campus universitaires, centres commerciaux et résidences. Vidéosurveillance intelligente.",
    neighborhoods: ["Hôtel de Ville", "Pont de Bois", "Flers-Bourg", "Brigode", "Cousinerie"],
    nearbyTowns: ["Hem", "Chéreng", "Toufflers", "Baisieux", "Lesquin", "Leers", "Fretin", "Cysoing", "Templemars", "Wambrechies", "Templeuve-en-Pévèle", "Pont-à-Marcq"]
  },
  // RHÔNE (69) - Agglomération lyonnaise sensible
  {
    name: "Vénissieux",
    slug: "venissieux",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "65 502",
    description: "Expert sécurité Vénissieux par HD Connect. Protection zones industrielles, commerces et résidences. Vidéosurveillance IA 4K, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Minguettes", "Parilly", "Moulin à Vent", "Max Barel"],
    nearbyTowns: ["Feyzin", "Corbas", "Saint-Priest", "Irigny", "Mions", "Saint-Genis-Laval", "Saint-Symphorien-d'Ozon", "Solaize", "Chassieu", "Vernaison", "Charly", "Sérézin-du-Rhône"]
  },
  {
    name: "Vaulx-en-Velin",
    slug: "vaulx-en-velin",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "53 069",
    description: "Sécurité Vaulx-en-Velin par HD Connect. Protection zones d'activités, commerces et résidences. Vidéosurveillance renforcée, alarmes anti-intrusion.",
    neighborhoods: ["Centre-Ville", "Mas du Taureau", "Écoin", "Village", "Grappinière"],
    nearbyTowns: ["Décines-Charpieu", "Rillieux-la-Pape", "Sathonay-Camp", "Meyzieu", "Saint-Maurice-de-Beynost", "Miribel", "Fontaines-sur-Saône", "Beynost", "Jonage", "Genas", "Fontaines-Saint-Martin", "Saint-Cyr-au-Mont-d'Or"]
  },
  {
    name: "Saint-Priest",
    slug: "saint-priest",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "47 000",
    description: "HD Connect Saint-Priest : sécurité zone industrielle Mi-Plaine. Protection entrepôts, commerces et résidences. Vidéosurveillance périmétrique.",
    neighborhoods: ["Centre-Ville", "Bel Air", "Ménival", "Village", "Revaison"],
    nearbyTowns: ["Vénissieux", "Bron", "Mions", "Chassieu", "Corbas"]
  },
  // GIRONDE (33) - Bordeaux Métropole
  {
    name: "Mérignac",
    slug: "merignac",
    department: "Gironde",
    departmentCode: "33",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "78 090",
    description: "Expert sécurité Mérignac par HD Connect. Protection aéroport Bordeaux-Mérignac, entreprises aéronautiques et résidences. Vidéosurveillance IA.",
    neighborhoods: ["Centre-Ville", "Arlac", "Capeyron", "Beutre", "Chemin Long"],
    nearbyTowns: ["Le Haillan", "Pessac", "Canéjan", "Gradignan", "Le Taillan-Médoc", "Martignas-sur-Jalle", "Saint-Médard-en-Jalles", "Saint-Jean-d'Illac", "Saint-Aubin-de-Médoc", "Léognan", "Le Pian-Médoc", "Bouliac"]
  },
  {
    name: "Pessac",
    slug: "pessac",
    department: "Gironde",
    departmentCode: "33",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "66 000",
    description: "Sécurité Pessac par HD Connect. Protection campus universitaire, domaines viticoles et résidences. Vidéosurveillance, alarmes connectées.",
    neighborhoods: ["Centre-Ville", "Campus", "Alouette", "Saige", "Magonty"],
    nearbyTowns: ["Bordeaux", "Talence", "Gradignan", "Mérignac", "Cestas"]
  },
  {
    name: "Talence",
    slug: "talence",
    department: "Gironde",
    departmentCode: "33",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "44 000",
    description: "Installation sécurité Talence par HD Connect. Protection campus, commerces et résidences. Vidéosurveillance HD, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Thouars", "Forum", "Peixotto", "Plume La Poule"],
    nearbyTowns: ["Bordeaux", "Pessac", "Villenave-d'Ornon", "Bègles", "Gradignan"]
  },
  // HAUTE-GARONNE (31) - Toulouse Métropole
  {
    name: "Blagnac",
    slug: "blagnac",
    department: "Haute-Garonne",
    departmentCode: "31",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "26 000",
    description: "Expert sécurité Blagnac par HD Connect. Protection aéroport Toulouse-Blagnac, usines Airbus et résidences. Vidéosurveillance aéronautique.",
    neighborhoods: ["Centre-Ville", "Andromède", "Grand Noble", "Odyssud", "Grenade"],
    nearbyTowns: ["Toulouse", "Colomiers", "Beauzelle", "Cornebarrieu", "L'Union"]
  },
  {
    name: "Colomiers",
    slug: "colomiers",
    department: "Haute-Garonne",
    departmentCode: "31",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "40 000",
    description: "Sécurité Colomiers par HD Connect. 2e ville de Haute-Garonne : protection zones aéronautiques, commerces et résidences. Alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Perget", "Val d'Aran", "En Jacca", "Ramassiers"],
    nearbyTowns: ["Toulouse", "Blagnac", "Tournefeuille", "Pibrac", "Plaisance-du-Touch"]
  },
  // HAUTS-DE-SEINE (92) - Complément Zone Primaire
  {
    name: "Courbevoie",
    slug: "courbevoie",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "82 000",
    description: "Expert sécurité Courbevoie et La Défense. HD Connect protège sièges sociaux, commerces et résidences de standing. Vidéosurveillance IA 4K, contrôle d'accès biométrique.",
    neighborhoods: ["Bécon", "Faubourg de l'Arche", "Cœur de Ville", "Gambetta", "La Défense"],
    nearbyTowns: ["Puteaux", "Nanterre", "La Garenne-Colombes", "Neuilly-sur-Seine", "Levallois-Perret"]
  },
  {
    name: "Nanterre",
    slug: "nanterre",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "97 783",
    description: "Installation sécurité Nanterre par HD Connect. Protection préfecture, campus et quartiers d'affaires. Vidéosurveillance, alarmes certifiées NF&A2P, SAV 7j/7.",
    neighborhoods: ["Centre-Ville", "Le Mont-Valérien", "La Boule", "Parc Nord", "Petit Nanterre"],
    nearbyTowns: ["Carrières-sur-Seine", "Rueil-Malmaison", "Houilles", "Chatou", "Courbevoie", "Neuilly-sur-Seine", "Sartrouville", "Le Vésinet", "Montesson", "Croissy-sur-Seine", "Bougival", "Levallois-Perret"]
  },
  {
    name: "Asnières-sur-Seine",
    slug: "asnieres-sur-seine",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "86 000",
    description: "HD Connect Asnières-sur-Seine : solutions de sécurité intelligentes. Vidéosurveillance HD, alarmes connectées et domotique pour pavillons et commerces.",
    neighborhoods: ["Bécon-les-Bruyères", "Grésillons", "Quartier de la Mairie", "Bords de Seine", "Flachat"],
    nearbyTowns: ["Gennevilliers", "Bois-Colombes", "Clichy", "Levallois-Perret", "Courbevoie"]
  },
  {
    name: "Colombes",
    slug: "colombes",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "86 000",
    description: "Sécurité Colombes par HD Connect. Protection zones pavillonnaires et commerciales. Vidéosurveillance IA, alarmes sans fil, installation rapide sous 48h.",
    neighborhoods: ["Centre-Ville", "Petite Garenne", "Fossés-Jean", "Plateau", "Agent Sarre"],
    nearbyTowns: ["Bois-Colombes", "La Garenne-Colombes", "Nanterre", "Bezons", "Argenteuil"]
  },
  {
    name: "Rueil-Malmaison",
    slug: "rueil-malmaison",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "78 000",
    description: "Expert sécurité Rueil-Malmaison par HD Connect. Protection propriétés d'exception et bureaux. Vidéosurveillance haut de gamme, alarmes certifiées.",
    neighborhoods: ["Buzenval", "Plaine-Gare", "Centre-Ville", "Richelieu-Châtaigneraie", "Malmaison"],
    nearbyTowns: ["Nanterre", "Suresnes", "Saint-Cloud", "Bougival", "Chatou"]
  },
  {
    name: "Levallois-Perret",
    slug: "levallois-perret",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "64 000",
    description: "HD Connect Levallois-Perret : sécurité urbaine de précision. Vidéosurveillance IA, contrôle d'accès et alarmes pour commerces et résidences de luxe.",
    neighborhoods: ["Front de Seine", "Centre-Ville", "Jean Zay", "Alsace", "Louise Michel"],
    nearbyTowns: ["Clichy", "Neuilly-sur-Seine", "Asnières-sur-Seine", "Paris 17e", "Courbevoie"]
  },
];

// ===== BANLIEUES LYON =====
const lyonSuburbs: CityData[] = [
  {
    name: "Caluire-et-Cuire",
    slug: "caluire-et-cuire",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "43 000",
    description: "HD Connect Caluire-et-Cuire : sécurité résidentielle haut de gamme. Protection pavillons, copropriétés et commerces. Vidéosurveillance discrète.",
    neighborhoods: ["Montessuy", "Saint-Clair", "Vassieux", "Cuire", "Centre-Ville"],
    nearbyTowns: ["Lyon 4e", "Rillieux-la-Pape", "Sathonay-Camp", "Fontaines-sur-Saône", "Collonges-au-Mont-d'Or"]
  },
  {
    name: "Bron",
    slug: "bron",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "42 000",
    description: "Expert sécurité Bron par HD Connect. Protection aéroport Lyon-Bron, hôpitaux et résidences. Vidéosurveillance HD, alarmes certifiées.",
    neighborhoods: ["Parilly", "Terraillon", "Centre-Ville", "La Grande Île", "Revaison"],
    nearbyTowns: ["Lyon 8e", "Villeurbanne", "Vénissieux", "Saint-Priest", "Chassieu"]
  },
  {
    name: "Oullins",
    slug: "oullins",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "26 000",
    description: "Sécurité Oullins par HD Connect. Protection commerces, entreprises et résidences. Vidéosurveillance, alarmes connectées.",
    neighborhoods: ["Centre-Ville", "La Saulaie", "Pierre Bénite", "Sœurs", "Les Cèdres"],
    nearbyTowns: ["Lyon 7e", "Pierre-Bénite", "La Mulatière", "Saint-Genis-Laval", "Sainte-Foy-lès-Lyon"]
  },
  {
    name: "Écully",
    slug: "ecully",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "18 000",
    description: "HD Connect Écully : sécurité haut de gamme. Protection campus EM Lyon, propriétés de prestige et entreprises. Vidéosurveillance discrète.",
    neighborhoods: ["Centre-Ville", "Chalin", "Crépieux", "Sources", "Maisons Neuves"],
    nearbyTowns: ["Lyon 5e", "Lyon 9e", "Dardilly", "Tassin-la-Demi-Lune", "Champagne-au-Mont-d'Or"]
  },
  {
    name: "Tassin-la-Demi-Lune",
    slug: "tassin-la-demi-lune",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "22 000",
    description: "Expert sécurité Tassin-la-Demi-Lune par HD Connect. Protection villas, résidences et commerces. Vidéosurveillance périmétrique.",
    neighborhoods: ["Centre-Ville", "Alaï", "Le Méridien", "Libération", "Victor Hugo"],
    nearbyTowns: ["Lyon 5e", "Écully", "Francheville", "Craponne", "Charbonnières-les-Bains"]
  },
  {
    name: "Rillieux-la-Pape",
    slug: "rillieux-la-pape",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "31 000",
    description: "Sécurité Rillieux-la-Pape par HD Connect. Protection zones commerciales, pavillons et copropriétés. Vidéosurveillance IA, alarmes.",
    neighborhoods: ["Les Alagniers", "Ville Nouvelle", "Vancia", "Crépieux", "Velette"],
    nearbyTowns: ["Caluire-et-Cuire", "Vaulx-en-Velin", "Sathonay-Camp", "Miribel", "Neyron"]
  },
  {
    name: "Décines-Charpieu",
    slug: "decines-charpieu",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "28 000",
    description: "HD Connect Décines-Charpieu : sécurité Groupama Stadium OL. Protection événementiel, commerces et résidences. Vidéosurveillance HD.",
    neighborhoods: ["Centre-Ville", "Charpieu", "Montaberlet", "Le Prainet", "Jean Macé"],
    nearbyTowns: ["Villeurbanne", "Vaulx-en-Velin", "Meyzieu", "Chassieu", "Bron"]
  },
  {
    name: "Meyzieu",
    slug: "meyzieu",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "34 000",
    description: "Expert sécurité Meyzieu par HD Connect. Protection zones industrielles, Grand Large et résidences. Alarmes certifiées, vidéosurveillance.",
    neighborhoods: ["Centre-Ville", "Les Plantées", "Le Grand Large", "Mathiolan", "Les Servizières"],
    nearbyTowns: ["Décines-Charpieu", "Jonage", "Pusignan", "Chassieu", "Genas"]
  },
];

// ===== BANLIEUES MARSEILLE =====
const marseilleSuburbs: CityData[] = [
  {
    name: "La Seyne-sur-Mer",
    slug: "la-seyne-sur-mer",
    department: "Var",
    departmentCode: "83",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "65 000",
    description: "HD Connect La Seyne-sur-Mer : sécurité chantiers navals et résidences. Protection port, commerces et copropriétés. Caméras anti-corrosion.",
    neighborhoods: ["Centre-Ville", "Tamaris", "Les Sablettes", "Berthe", "Mar Vivo"],
    nearbyTowns: ["Toulon", "Six-Fours-les-Plages", "Ollioules", "Saint-Mandrier-sur-Mer", "La Garde"]
  },
  {
    name: "Six-Fours-les-Plages",
    slug: "six-fours-les-plages",
    department: "Var",
    departmentCode: "83",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "36 000",
    description: "Expert sécurité Six-Fours-les-Plages par HD Connect. Protection villas, commerces balnéaires et résidences. Vidéosurveillance résistante sel.",
    neighborhoods: ["Centre-Ville", "Le Brusc", "Reynier", "Les Lônes", "La Reppe"],
    nearbyTowns: ["La Seyne-sur-Mer", "Sanary-sur-Mer", "Ollioules", "Toulon", "Bandol"]
  },
  {
    name: "La Penne-sur-Huveaune",
    slug: "la-penne-sur-huveaune",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "6 000",
    description: "Sécurité La Penne-sur-Huveaune par HD Connect. Protection résidences et commerces. Vidéosurveillance, alarmes connectées.",
    neighborhoods: ["Centre-Ville", "Les Music", "La Valentine"],
    nearbyTowns: ["Marseille 11e", "Aubagne", "La Bouilladisse", "Roquevaire", "Gémenos"]
  },
  {
    name: "Allauch",
    slug: "allauch",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "21 000",
    description: "HD Connect Allauch : sécurité village provençal. Protection villas, bastides et commerces. Vidéosurveillance discrète, alarmes certifiées.",
    neighborhoods: ["Village", "La Pounche", "Fontvieille", "Enco de Botte", "Logis Neuf"],
    nearbyTowns: ["Marseille 12e", "Marseille 13e", "Plan-de-Cuques", "Aubagne", "La Bouilladisse"]
  },
  {
    name: "Plan-de-Cuques",
    slug: "plan-de-cuques",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "11 000",
    description: "Expert sécurité Plan-de-Cuques par HD Connect. Protection résidences pavillonnaires et commerces. Vidéosurveillance, alarmes sans fil.",
    neighborhoods: ["Centre-Ville", "Beausoleil", "Les Music", "La Parade"],
    nearbyTowns: ["Marseille 13e", "Allauch", "Marseille 12e", "Mimet", "Simiane-Collongue"]
  },
  {
    name: "Cassis",
    slug: "cassis",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "7 500",
    description: "Sécurité Cassis par HD Connect. Protection villas de luxe, port et commerces. Vidéosurveillance haut de gamme, discrétion garantie.",
    neighborhoods: ["Port", "Village", "Bestouan", "Les Janots", "La Certiole"],
    nearbyTowns: ["Marseille 9e", "La Ciotat", "Roquefort-la-Bédoule", "Carnoux-en-Provence", "Gémenos"]
  },
  {
    name: "Carnoux-en-Provence",
    slug: "carnoux-en-provence",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "7 000",
    description: "HD Connect Carnoux-en-Provence : sécurité résidentielle provençale. Protection villas et commerces. Alarmes, vidéosurveillance périmétrique.",
    neighborhoods: ["Centre-Ville", "La Crémade", "Les Music"],
    nearbyTowns: ["Cassis", "Roquefort-la-Bédoule", "Aubagne", "La Ciotat", "Gémenos"]
  },
];

// ===== VILLES MANQUANTES IDF PETITE COURONNE =====
const additionalIdfCities: CityData[] = [
  {
    name: "Pantin",
    slug: "pantin",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "55 000",
    description: "HD Connect Pantin : sécurité quartiers créatifs et entreprises. Protection studios, commerces et résidences. Vidéosurveillance IA, alarmes.",
    neighborhoods: ["Quatre Chemins", "Centre-Ville", "Église", "Petit Pantin", "Hoche"],
    nearbyTowns: ["Le Pré-Saint-Gervais", "Les Lilas", "Aubervilliers", "Bobigny", "Romainville"]
  },
  {
    name: "Noisy-le-Grand",
    slug: "noisy-le-grand",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "67 000",
    description: "Expert sécurité Noisy-le-Grand par HD Connect. Protection Mont d'Est, Champy et zones commerciales. Vidéosurveillance HD, alarmes certifiées.",
    neighborhoods: ["Mont d'Est", "Champy", "Pavé Neuf", "Centre-Ville", "Hauts Bâtons"],
    nearbyTowns: ["Gournay-sur-Marne", "Champs-sur-Marne", "Villiers-sur-Marne", "Bry-sur-Marne", "Neuilly-sur-Marne"]
  },
  {
    name: "Rosny-sous-Bois",
    slug: "rosny-sous-bois",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "45 000",
    description: "Sécurité Rosny-sous-Bois par HD Connect. Protection Rosny 2, commerces et résidences. Vidéosurveillance, alarmes anti-intrusion.",
    neighborhoods: ["Centre-Ville", "Bois Perrier", "La Boissière", "Nanteuil", "Général Leclerc"],
    nearbyTowns: ["Montreuil", "Fontenay-sous-Bois", "Noisy-le-Sec", "Villemomble", "Neuilly-Plaisance"]
  },
  {
    name: "Livry-Gargan",
    slug: "livry-gargan",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "45 000",
    description: "HD Connect Livry-Gargan : sécurité zones pavillonnaires et commerces. Vidéosurveillance, alarmes connectées, contrôle d'accès.",
    neighborhoods: ["Centre-Ville", "Gargan", "Danton", "Poudrerie", "Jacob"],
    nearbyTowns: ["Clichy-sous-Bois", "Montfermeil", "Sevran", "Les Pavillons-sous-Bois", "Vaujours"]
  },
  {
    name: "Clichy-sous-Bois",
    slug: "clichy-sous-bois",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "31 000",
    description: "Expert sécurité Clichy-sous-Bois par HD Connect. Protection zones en rénovation, commerces et résidences. Vidéosurveillance renforcée.",
    neighborhoods: ["Centre-Ville", "Chêne Pointu", "Le Haut Clichy", "Forestière", "Bas Clichy"],
    nearbyTowns: ["Montfermeil", "Livry-Gargan", "Gagny", "Le Raincy", "Coubron"]
  },
  {
    name: "Gagny",
    slug: "gagny",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "40 000",
    description: "Sécurité Gagny par HD Connect. Protection zones pavillonnaires, commerces et résidences. Alarmes, vidéosurveillance périmétrique.",
    neighborhoods: ["Centre-Ville", "Les Abbesses", "Maison Blanche", "La Ferme", "Chenay"],
    nearbyTowns: ["Villemomble", "Montfermeil", "Neuilly-sur-Marne", "Le Raincy", "Clichy-sous-Bois"]
  },
  {
    name: "Fontenay-sous-Bois",
    slug: "fontenay-sous-bois",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "53 000",
    description: "HD Connect Fontenay-sous-Bois : sécurité résidences et commerces. Protection Val de Fontenay, pavillons et copropriétés. Vidéosurveillance.",
    neighborhoods: ["Val de Fontenay", "Centre-Ville", "Grands Pêchers", "Redoute", "Bois Cadet"],
    nearbyTowns: ["Vincennes", "Montreuil", "Nogent-sur-Marne", "Rosny-sous-Bois", "Neuilly-Plaisance"]
  },
  {
    name: "Le Kremlin-Bicêtre",
    slug: "le-kremlin-bicetre",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "26 000",
    description: "Expert sécurité Le Kremlin-Bicêtre par HD Connect. Protection hôpitaux, commerces et résidences. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Hôpital", "Liberté", "Fontainebleau", "Alouettes"],
    nearbyTowns: ["Paris 13e", "Gentilly", "Arcueil", "Villejuif", "Ivry-sur-Seine"]
  },
  {
    name: "Villejuif",
    slug: "villejuif",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "58 000",
    description: "Sécurité Villejuif par HD Connect. Protection Institut Gustave Roussy, commerces et résidences. Vidéosurveillance HD, alarmes.",
    neighborhoods: ["Centre-Ville", "Louis Aragon", "Hautes Bruyères", "Léon Blum", "Pasteur"],
    nearbyTowns: ["Le Kremlin-Bicêtre", "Arcueil", "Cachan", "L'Haÿ-les-Roses", "Vitry-sur-Seine"]
  },
  {
    name: "Thiais",
    slug: "thiais",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "30 000",
    description: "HD Connect Thiais : sécurité Belle Épine et zones commerciales. Protection grandes surfaces, entreprises et résidences. Vidéosurveillance IA.",
    neighborhoods: ["Centre-Ville", "Belle Épine", "Moulin Vert", "Grignon", "Le Pavé"],
    nearbyTowns: ["Orly", "Choisy-le-Roi", "Vitry-sur-Seine", "Chevilly-Larue", "Rungis"]
  },
  {
    name: "Choisy-le-Roi",
    slug: "choisy-le-roi",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "45 000",
    description: "Expert sécurité Choisy-le-Roi par HD Connect. Protection bords de Seine, commerces et résidences. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Gondoles", "Navigateurs", "Lugo", "Briand"],
    nearbyTowns: ["Vitry-sur-Seine", "Thiais", "Orly", "Villeneuve-le-Roi", "Créteil"]
  },
  {
    name: "Alfortville",
    slug: "alfortville",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "45 000",
    description: "Sécurité Alfortville par HD Connect. Protection bords de Marne, commerces et résidences. Vidéosurveillance, alarmes anti-intrusion.",
    neighborhoods: ["Centre-Ville", "Grand Ensemble", "Mairie", "Toulon", "Port à l'Anglais"],
    nearbyTowns: ["Maisons-Alfort", "Ivry-sur-Seine", "Vitry-sur-Seine", "Charenton-le-Pont", "Créteil"]
  },
  {
    name: "Clamart",
    slug: "clamart",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "53 000",
    description: "HD Connect Clamart : sécurité résidentielle et commerciale. Protection pavillons, copropriétés et entreprises. Vidéosurveillance, alarmes.",
    neighborhoods: ["Centre-Ville", "Petit Clamart", "Percy", "Plaine", "Jardin Parisien"],
    nearbyTowns: ["Meudon", "Issy-les-Moulineaux", "Châtillon", "Fontenay-aux-Roses", "Vanves"]
  },
  {
    name: "Meudon",
    slug: "meudon",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "46 000",
    description: "Expert sécurité Meudon par HD Connect. Protection observatoire, propriétés de prestige et commerces. Vidéosurveillance discrète.",
    neighborhoods: ["Meudon-la-Forêt", "Bellevue", "Centre-Ville", "Val Fleury", "Trivaux"],
    nearbyTowns: ["Sèvres", "Clamart", "Issy-les-Moulineaux", "Boulogne-Billancourt", "Chaville"]
  },
  {
    name: "Sèvres",
    slug: "sevres",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "23 000",
    description: "Sécurité Sèvres par HD Connect. Protection Manufacture, résidences de standing et commerces. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Brancas", "Brimborion", "Croix Bosset", "Abbaye"],
    nearbyTowns: ["Meudon", "Saint-Cloud", "Boulogne-Billancourt", "Chaville", "Ville-d'Avray"]
  },
  {
    name: "Saint-Cloud",
    slug: "saint-cloud",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "30 000",
    description: "HD Connect Saint-Cloud : sécurité haut de gamme. Protection propriétés d'exception, commerces et entreprises. Vidéosurveillance discrète.",
    neighborhoods: ["Centre-Ville", "Coteaux", "Village", "Montretout", "Parc"],
    nearbyTowns: ["Boulogne-Billancourt", "Suresnes", "Garches", "Marnes-la-Coquette", "Sèvres"]
  },
  {
    name: "Suresnes",
    slug: "suresnes",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "49 000",
    description: "Expert sécurité Suresnes par HD Connect. Protection Mont Valérien, entreprises et résidences. Vidéosurveillance HD, contrôle d'accès.",
    neighborhoods: ["Centre-Ville", "Mont Valérien", "Caron", "Raguidelles", "Belvédère"],
    nearbyTowns: ["Puteaux", "Nanterre", "Rueil-Malmaison", "Saint-Cloud", "Boulogne-Billancourt"]
  },
  {
    name: "Puteaux",
    slug: "puteaux",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "45 000",
    description: "Sécurité Puteaux et La Défense par HD Connect. Protection tours de bureaux, commerces et résidences de standing. Vidéosurveillance IA.",
    neighborhoods: ["La Défense", "Centre-Ville", "Ile de Puteaux", "Vieille Église", "Bergères"],
    nearbyTowns: ["Courbevoie", "Nanterre", "Neuilly-sur-Seine", "Suresnes", "La Garenne-Colombes"]
  },
  {
    name: "Gennevilliers",
    slug: "gennevilliers",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "48 000",
    description: "HD Connect Gennevilliers : sécurité zones portuaires et industrielles. Protection entrepôts, commerces et résidences. Vidéosurveillance HD.",
    neighborhoods: ["Centre-Ville", "Village", "Luth", "Grésillons", "Chandon"],
    nearbyTowns: ["Asnières-sur-Seine", "Villeneuve-la-Garenne", "Colombes", "Clichy", "Épinay-sur-Seine"]
  },
  {
    name: "Antony",
    slug: "antony",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "64 263",
    description: "Expert sécurité Antony par HD Connect. Protection parc de Sceaux, résidences et commerces. Vidéosurveillance, alarmes certifiées NF&A2P.",
    neighborhoods: ["Centre-Ville", "Croix de Berny", "Antonypole", "Fontaine Michalon", "Pajeaud"],
    nearbyTowns: ["Fresnes", "Sceaux", "Wissous", "Verrières-le-Buisson", "Massy", "Châtenay-Malabry", "Bourg-la-Reine", "Rungis", "Fontenay-aux-Roses", "Le Plessis-Robinson", "Chilly-Mazarin", "Cachan"]
  },
];

// ===== VILLES NATIONALES COMPLÉMENTAIRES =====
const nationalExpansionCities: CityData[] = [
  // HAUTS-DE-FRANCE
  {
    name: "Calais",
    slug: "calais",
    department: "Pas-de-Calais",
    departmentCode: "62",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "67 571",
    description: "Expert sécurité Calais par HD Connect. Protection port transmanche, zones industrielles et commerces frontaliers. Vidéosurveillance renforcée, alarmes certifiées NF&A2P.",
    neighborhoods: ["Centre-Ville", "Saint-Pierre", "Beau Marais", "Fort Nieulay", "Les Cailloux"],
    nearbyTowns: ["Coulogne", "Marck", "Sangatte", "Guînes", "Ardres", "Oye-Plage", "Audruicq", "Grand-Fort-Philippe", "Marquise", "Éperlecques", "Wimille", "Wimereux"]
  },
  {
    name: "Valenciennes",
    slug: "valenciennes",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "43 468",
    description: "HD Connect Valenciennes : sécurité pour industries automobiles Toyota, commerces et résidences du Hainaut. Vidéosurveillance IA, alarmes connectées.",
    neighborhoods: ["Centre-Ville", "Faubourg de Paris", "Dutemple", "Saint-Waast", "La Briquette"],
    nearbyTowns: ["Anzin", "Marly", "La Sentinelle", "Beuvrages", "Petite-Forêt", "Trith-Saint-Léger", "Bruay-sur-l'Escaut", "Saint-Saulve", "Aulnoy-lez-Valenciennes", "Hérin", "Raismes", "Onnaing"]
  },
  {
    name: "Douai",
    slug: "douai",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "40 250",
    description: "Sécurité Douai par HD Connect. Protection Renault Douai, beffroi et commerces. Vidéosurveillance, alarmes certifiées pour industries et particuliers.",
    neighborhoods: ["Centre-Ville", "Frais Marais", "Dorignies", "Faubourg de Béthune", "Gayant"],
    nearbyTowns: ["Waziers", "Sin-le-Noble", "Dechy", "Roost-Warendin", "Lambres-lez-Douai", "Flers-en-Escrebieux", "Guesnain", "Auby", "Cuincy", "Lallaing", "Montigny-en-Ostrevent", "Raimbeaucourt"]
  },
  {
    name: "Boulogne-sur-Mer",
    slug: "boulogne-sur-mer",
    department: "Pas-de-Calais",
    departmentCode: "62",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "40 539",
    description: "Expert sécurité Boulogne-sur-Mer par HD Connect. Protection premier port de pêche français, Nausicaá et commerces. Vidéosurveillance maritime.",
    neighborhoods: ["Ville Haute", "Capécure", "Le Portel", "Outreau", "Bréquerecque"],
    nearbyTowns: ["Le Portel", "Saint-Martin-Boulogne", "Outreau", "Saint-Léonard", "Saint-Étienne-au-Mont", "Neufchâtel-Hardelot", "Samer", "Desvres", "Étaples", "Le Touquet-Paris-Plage", "Cucq", "Merlimont"]
  },
  // AUVERGNE-RHÔNE-ALPES
  {
    name: "Valence",
    slug: "valence",
    department: "Drôme",
    departmentCode: "26",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "64 458",
    description: "HD Connect Valence : sécurité vallée du Rhône. Protection industries agroalimentaires, commerces et résidences. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Fontbarlettes", "Plan", "Briffaut", "Châteauvert"],
    nearbyTowns: ["Guilherand-Granges", "Malissard", "Bourg-lès-Valence", "Portes-lès-Valence", "Beaumont-lès-Valence", "Saint-Marcel-lès-Valence", "Saint-Péray", "Chabeuil", "Montélier", "Charmes-sur-Rhône", "Châteauneuf-sur-Isère", "Étoile-sur-Rhône"]
  },
  // NOUVELLE-AQUITAINE
  {
    name: "Angoulême",
    slug: "angouleme",
    department: "Charente",
    departmentCode: "16",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "41 908",
    description: "Expert sécurité Angoulême par HD Connect. Protection festival BD, industries papetières et résidences. Vidéosurveillance, alarmes connectées.",
    neighborhoods: ["Centre-Ville", "Ma Campagne", "Basseau", "Grande Garenne", "Saint-Cybard"],
    nearbyTowns: ["Saint-Michel", "Gond-Pontouvre", "Saint-Yrieix-sur-Charente", "L'Isle-d'Espagnac", "Soyaux", "La Couronne", "Fléac", "Magnac-sur-Touvre", "Ruelle-sur-Touvre", "Champniers", "Roullet-Saint-Estèphe", "Brie"]
  },
  {
    name: "Périgueux",
    slug: "perigueux",
    department: "Dordogne",
    departmentCode: "24",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "29 055",
    description: "HD Connect Périgueux : sécurité Périgord. Protection sites touristiques, commerces gastronomiques et résidences. Vidéosurveillance discrète.",
    neighborhoods: ["Centre Historique", "Toulon", "Cité", "Chamiers", "Le Gour de l'Arche"],
    nearbyTowns: ["Champcevinel", "Coulounieix-Chamiers", "Chancelade", "Marsac-sur-l'Isle", "Trélissac", "Boulazac Isle Manoire", "Sanilhac", "Bassillac et Auberoche", "Saint-Astier", "Brantôme en Périgord", "Neuvic", "Ribérac"]
  },
  {
    name: "Niort",
    slug: "niort",
    department: "Deux-Sèvres",
    departmentCode: "79",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "59 854",
    description: "Sécurité Niort par HD Connect. Capitale française des mutuelles : protection sièges sociaux, commerces et résidences. Vidéosurveillance, contrôle d'accès.",
    neighborhoods: ["Centre-Ville", "Tour Chabot", "Gavacherie", "Souché", "Saint-Florent"],
    nearbyTowns: ["Aiffres", "Chauray", "Échiré", "Vouillé", "Benet", "La Crèche", "Aigondigné", "Celles-sur-Belle", "Saint-Maixent-l'École", "Melle", "Fontenay-le-Comte", "Saint-Jean-de-Liversay"]
  },
  {
    name: "Agen",
    slug: "agen",
    department: "Lot-et-Garonne",
    departmentCode: "47",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "32 801",
    description: "HD Connect Agen : expert sécurité Lot-et-Garonne. Protection exploitations agricoles, commerces et résidences. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Mondésir", "Pin", "Montanou", "Tapie"],
    nearbyTowns: ["Le Passage", "Boé", "Bon-Encontre", "Pont-du-Casse", "Foulayronnes", "Colayrac-Saint-Cirq", "Layrac", "Pujols", "Sainte-Livrade-sur-Lot", "Nérac", "Aiguillon", "Valence"]
  },
  // OCCITANIE
  {
    name: "Narbonne",
    slug: "narbonne",
    department: "Aude",
    departmentCode: "11",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "57 587",
    description: "Expert sécurité Narbonne par HD Connect. Protection zones viticoles, commerces et résidences méditerranéennes. Vidéosurveillance, alarmes adaptées climat.",
    neighborhoods: ["Centre Historique", "Bourg", "Razimbaud", "Saint-Jean-Saint-Pierre", "Nouveau Narbonne"],
    nearbyTowns: ["Gruissan", "Coursan", "Salles-d'Aude", "Cuxac-d'Aude", "Sigean", "Fleury", "Port-la-Nouvelle", "Sallèles-d'Aude", "Nissan-lez-Enserune", "Capestang", "Lézignan-Corbières", "Puisserguier"]
  },
  {
    name: "Carcassonne",
    slug: "carcassonne",
    department: "Aude",
    departmentCode: "11",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "46 080",
    description: "Sécurité Carcassonne par HD Connect. Protection Cité médiévale UNESCO, commerces et résidences. Vidéosurveillance discrète patrimoine.",
    neighborhoods: ["La Cité", "Bastide Saint-Louis", "La Conte", "Grazailles", "Montredon"],
    nearbyTowns: ["Villemoustaussou", "Trèbes", "Limoux", "Bram", "Mazamet", "Aussillon", "Labruguière", "Castelnaudary"]
  },
  {
    name: "Albi",
    slug: "albi",
    department: "Tarn",
    departmentCode: "81",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "51 290",
    description: "HD Connect Albi : sécurité cité épiscopale UNESCO. Protection patrimoine, commerces et résidences. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre Historique", "Cantepau", "Lapanouse", "Rayssac", "Fonlabour"],
    nearbyTowns: ["Lescure-d'Albigeois", "Puygouzon", "Saint-Juéry", "Marssac-sur-Tarn", "Carmaux", "Réalmont", "Graulhet", "Lisle-sur-Tarn", "Rabastens"]
  },
  {
    name: "Tarbes",
    slug: "tarbes",
    department: "Hautes-Pyrénées",
    departmentCode: "65",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "44 399",
    description: "Expert sécurité Tarbes par HD Connect. Protection industries aéronautiques, résidences et commerces. Vidéosurveillance, alarmes Pyrénées.",
    neighborhoods: ["Centre-Ville", "Laubadère", "Ormeau", "Solazur", "Bel Air"],
    nearbyTowns: ["Aureilhan", "Bordères-sur-l'Échez", "Séméac", "Odos", "Juillan", "Barbazan-Debat", "Vic-en-Bigorre", "Lourdes", "Lannemezan", "Bagnères-de-Bigorre"]
  },
  {
    name: "Sète",
    slug: "sete",
    department: "Hérault",
    departmentCode: "34",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "45 337",
    description: "Sécurité Sète par HD Connect. Protection port de pêche, commerces et résidences. Vidéosurveillance maritime, caméras résistantes sel.",
    neighborhoods: ["Centre-Ville", "Corniche", "Ile de Thau", "Mont Saint-Clair", "Métairies"],
    nearbyTowns: ["Mèze", "Marseillan", "Balaruc-les-Bains", "Frontignan", "Poussan", "Villeveyrac", "Gigean", "Montagnac", "Florensac", "Vic-la-Gardiole", "Cournonsec", "Bessan"]
  },
  // BRETAGNE
  {
    name: "Saint-Malo",
    slug: "saint-malo",
    department: "Ille-et-Vilaine",
    departmentCode: "35",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "47 439",
    description: "HD Connect Saint-Malo : sécurité cité corsaire. Protection intra-muros, hôtels, commerces et résidences. Vidéosurveillance résistante embruns.",
    neighborhoods: ["Intra-Muros", "Saint-Servan", "Paramé", "Rothéneuf", "Courtoisville"],
    nearbyTowns: ["Dinard", "Saint-Méloir-des-Ondes", "Pleurtuit", "Cancale", "Beaussais-sur-Mer", "Plouër-sur-Rance", "Pleslin-Trigavou", "Miniac-Morvan", "Saint-Cast-le-Guildo", "Quévert", "Plancoët", "Lanvallay"]
  },
  {
    name: "Saint-Brieuc",
    slug: "saint-brieuc",
    department: "Côtes-d'Armor",
    departmentCode: "22",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "44 364",
    description: "Expert sécurité Saint-Brieuc par HD Connect. Protection commerces, industries agroalimentaires et résidences. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Cesson", "Robien", "Le Plateau", "La Croix-Saint-Lambert"],
    nearbyTowns: ["Ploufragan", "Trégueux", "Plérin", "Langueux", "Yffiniac", "Plédran", "Pordic", "Hillion", "Plaintel", "Quessoy", "Plélo", "Binic-Étables-sur-Mer"]
  },
  // NORMANDIE
  {
    name: "Évreux",
    slug: "evreux",
    department: "Eure",
    departmentCode: "27",
    region: "Normandie",
    regionSlug: "normandie",
    population: "49 360",
    description: "Sécurité Évreux par HD Connect. Préfecture de l'Eure : protection base aérienne, commerces et résidences. Vidéosurveillance, alarmes.",
    neighborhoods: ["Centre-Ville", "La Madeleine", "Navarre", "Nétreville", "Saint-Michel"],
    nearbyTowns: ["Gravigny", "Saint-Sébastien-de-Morsent", "Guichainville", "Saint-André-de-l'Eure", "Conches-en-Ouche", "Pacy-sur-Eure", "Mesnils-sur-Iton", "Le Val d'Hazey", "Gaillon", "La Chapelle-Longueville", "Saint-Marcel", "Le Neubourg"]
  },
  // PAYS DE LA LOIRE
  {
    name: "La Roche-sur-Yon",
    slug: "la-roche-sur-yon",
    department: "Vendée",
    departmentCode: "85",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "54 849",
    description: "HD Connect La Roche-sur-Yon : sécurité Vendée. Protection commerces, industries et résidences. Vidéosurveillance, alarmes certifiées NF&A2P.",
    neighborhoods: ["Centre-Ville", "Les Pyramides", "Jean Yole", "Val d'Ornay", "La Généraudière"],
    nearbyTowns: ["Mouilleron-le-Captif", "Aubigny-Les Clouzeaux", "Nesmy", "La Ferrière", "Venansault", "La Chaize-le-Vicomte", "Rives de l'Yon", "Dompierre-sur-Yon", "Le Poiré-sur-Vie", "Bellevigny", "Aizenay", "Essarts-en-Bocage"]
  },
  {
    name: "Cholet",
    slug: "cholet",
    department: "Maine-et-Loire",
    departmentCode: "49",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "54 404",
    description: "Expert sécurité Cholet par HD Connect. Capitale industrielle des Mauges : protection usines, commerces et résidences. Vidéosurveillance, alarmes.",
    neighborhoods: ["Centre-Ville", "Bonnevay", "Jean Monnet", "Bretagne", "Turbaudières"],
    nearbyTowns: ["La Tessoualle", "Saint-Léger-sous-Cholet", "Mortagne-sur-Sèvre", "La Séguinière", "Maulévrier", "Saint-Laurent-sur-Sèvre", "Le May-sur-Èvre", "Trémentines", "Chanverrie", "Mauléon", "La Gaubretière", "Sèvremont"]
  },
  {
    name: "Laval",
    slug: "laval",
    department: "Mayenne",
    departmentCode: "53",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "49 400",
    description: "Sécurité Laval par HD Connect. Protection industries agroalimentaires, commerces et résidences mayennaises. Vidéosurveillance, alarmes connectées.",
    neighborhoods: ["Centre-Ville", "Saint-Nicolas", "Les Pommeraies", "Hilard", "Ferrié"],
    nearbyTowns: ["L'Huisserie", "Bonchamp-lès-Laval", "Saint-Berthevin", "Changé", "Louverné", "Cossé-le-Vivien", "Montsûrs", "Évron", "Craon", "Argentré-du-Plessis", "Ernée", "Mayenne"]
  },
  // CENTRE-VAL DE LOIRE
  {
    name: "Chartres",
    slug: "chartres",
    department: "Eure-et-Loir",
    departmentCode: "28",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "38 324",
    description: "HD Connect Chartres : sécurité Cosmetic Valley. Protection cathédrale, industries cosmétiques et résidences. Vidéosurveillance, alarmes.",
    neighborhoods: ["Centre-Ville", "Beaulieu", "Maunoury", "La Madeleine", "Rechèvres"],
    nearbyTowns: ["Champhol", "Le Coudray", "Luisant", "Lucé", "Lèves", "Mainvilliers", "Maintenon", "Gallardon", "Auneau-Bleury-Saint-Symphorien", "Nogent-le-Roi", "Les Villages Vovéens", "Épernon"]
  },
  {
    name: "Bourges",
    slug: "bourges",
    department: "Cher",
    departmentCode: "18",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "64 186",
    description: "Expert sécurité Bourges par HD Connect. Protection industries MBDA, cathédrale UNESCO et commerces. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Val d'Auron", "Aéroport", "Gionne", "Chancellerie"],
    nearbyTowns: ["Saint-Doulchard", "Trouy", "La Chapelle-Saint-Ursin", "Saint-Germain-du-Puy", "Mehun-sur-Yèvre", "Saint-Florent-sur-Cher", "Dun-sur-Auron", "Issoudun"]
  },
  {
    name: "Blois",
    slug: "blois",
    department: "Loir-et-Cher",
    departmentCode: "41",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "47 219",
    description: "Sécurité Blois par HD Connect. Protection château royal, commerces et résidences. Vidéosurveillance discrète patrimoine Loire.",
    neighborhoods: ["Centre-Ville", "Vienne", "Cabochon", "Quinière", "Les Grouëts"],
    nearbyTowns: ["Saint-Gervais-la-Forêt", "La Chaussée-Saint-Victor", "Vineuil", "Mont-près-Chambord", "Veuzain-sur-Loire", "Le Controis-en-Sologne", "Mer", "Montrichard Val de Cher", "Saint-Laurent-Nouan", "Château-Renault", "Amboise", "Nazelles-Négron"]
  },
  // BOURGOGNE-FRANCHE-COMTÉ
  {
    name: "Belfort",
    slug: "belfort",
    department: "Territoire de Belfort",
    departmentCode: "90",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "45 912",
    description: "HD Connect Belfort : sécurité industrielle Lion. Protection sites Alstom, commerces et résidences. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Résidences", "Glacis du Château", "Les Barres", "Mont"],
    nearbyTowns: ["Essert", "Bavilliers", "Valdoie", "Offemont", "Danjoutin", "Héricourt", "Bethoncourt", "Grand-Charmont", "Champagney", "Sochaux", "Étupes", "Exincourt"]
  },
  {
    name: "Auxerre",
    slug: "auxerre",
    department: "Yonne",
    departmentCode: "89",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "35 097",
    description: "Expert sécurité Auxerre par HD Connect. Protection vignobles Chablis, patrimoine et commerces. Vidéosurveillance, alarmes connectées.",
    neighborhoods: ["Centre-Ville", "Sainte-Geneviève", "Les Rosoirs", "Saint-Siméon", "Rive Droite"],
    nearbyTowns: ["Saint-Georges-sur-Baulche", "Monéteau", "Appoigny", "Migennes", "Brienon-sur-Armançon", "Saint-Florentin", "Joigny", "Tonnerre"]
  },
  {
    name: "Mâcon",
    slug: "macon",
    department: "Saône-et-Loire",
    departmentCode: "71",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "35 177",
    description: "Sécurité Mâcon par HD Connect. Protection vignobles mâconnais, commerces et résidences. Vidéosurveillance, alarmes certifiées NF&A2P.",
    neighborhoods: ["Centre-Ville", "Les Blanchettes", "Saint-Clément", "Flacé", "Saugeraies"],
    nearbyTowns: ["Charnay-lès-Mâcon", "Replonges", "Feillens", "Crêches-sur-Saône", "La Chapelle-de-Guinchay", "Cluny", "Belleville-en-Beaujolais"]
  },
  // GRAND EST
  {
    name: "Thionville",
    slug: "thionville",
    department: "Moselle",
    departmentCode: "57",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "42 658",
    description: "HD Connect Thionville : sécurité transfrontalière Luxembourg. Protection entreprises, commerces et résidences. Vidéosurveillance, contrôle d'accès.",
    neighborhoods: ["Centre-Ville", "Beauregard", "Côte des Roses", "Garche", "Veymerange"],
    nearbyTowns: ["Manom", "Terville", "Yutz", "Florange", "Hettange-Grande", "Serémange-Erzange", "Algrange", "Hayange", "Uckange", "Nilvange", "Fameck", "Knutange"]
  },
  // PACA
  {
    name: "Salon-de-Provence",
    slug: "salon-de-provence",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "44 194",
    description: "Expert sécurité Salon-de-Provence par HD Connect. Protection base aérienne, commerces et résidences. Vidéosurveillance, alarmes Patrouille de France.",
    neighborhoods: ["Centre-Ville", "Canourgue", "La Crau", "Les Canourgues", "Bel Air"],
    nearbyTowns: ["Robion", "La Roque-d'Anthéron", "Lauris", "Rognes", "Noves", "Caumont-sur-Durance", "Cadenet", "Villelaure", "Le Thor", "Graveson"]
  },
  {
    name: "Arles",
    slug: "arles",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "51 811",
    description: "Sécurité Arles par HD Connect. Protection patrimoine romain UNESCO, Rencontres photo et résidences. Vidéosurveillance discrète.",
    neighborhoods: ["Centre Historique", "Trinquetaille", "Barriol", "Griffeuille", "Trébon"],
    nearbyTowns: ["Saint-Martin-de-Crau", "Port-Saint-Louis-du-Rhône", "Fontvieille", "Saint-Gilles", "Mouriès", "Bellegarde", "Vauvert", "Saint-Rémy-de-Provence", "Saint-Mitre-les-Remparts", "Beauvoisin", "Grans", "Jonquières-Saint-Vincent"]
  },
  // CORSE
  {
    name: "Porto-Vecchio",
    slug: "porto-vecchio",
    department: "Corse-du-Sud",
    departmentCode: "2A",
    region: "Corse",
    regionSlug: "corse",
    population: "12 000",
    description: "HD Connect Porto-Vecchio : sécurité villas de luxe et résidences balnéaires. Protection commerces touristiques et ports. Vidéosurveillance haut de gamme.",
    neighborhoods: ["Centre-Ville", "Palombaggia", "Santa Giulia", "Marine", "Cala Rossa"],
    nearbyTowns: ["Lecci", "Zonza", "Sainte-Lucie-de-Porto-Vecchio", "Sari-Solenzara", "Bonifacio"]
  },
  {
    name: "Calvi",
    slug: "calvi",
    department: "Haute-Corse",
    departmentCode: "2B",
    region: "Corse",
    regionSlug: "corse",
    population: "5 500",
    description: "Expert sécurité Calvi par HD Connect. Protection citadelle, hôtels de luxe et résidences. Vidéosurveillance adaptée environnement insulaire.",
    neighborhoods: ["Citadelle", "Marine", "Centre-Ville", "Revellata", "Lumio"],
    nearbyTowns: ["Lumio", "Calenzana", "L'Île-Rousse", "Galeria", "Monticello"]
  },
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return [...citiesData, ...lyonSuburbs, ...marseilleSuburbs, ...additionalIdfCities, ...nationalExpansionCities].find(city => city.slug === slug);
};

export const getCitiesByRegion = (region: string): CityData[] => {
  return [...citiesData, ...lyonSuburbs, ...marseilleSuburbs, ...additionalIdfCities, ...nationalExpansionCities].filter(city => city.region === region);
};

export const getCitiesByRegionSlug = (regionSlug: string): CityData[] => {
  return [...citiesData, ...lyonSuburbs, ...marseilleSuburbs, ...additionalIdfCities, ...nationalExpansionCities].filter(city => city.regionSlug === regionSlug);
};

export const getCitiesByDepartment = (departmentCode: string): CityData[] => {
  return [...citiesData, ...lyonSuburbs, ...marseilleSuburbs, ...additionalIdfCities, ...nationalExpansionCities].filter(city => city.departmentCode === departmentCode);
};

export const getAllCitySlugs = (): string[] => {
  return [...citiesData, ...lyonSuburbs, ...marseilleSuburbs, ...additionalIdfCities, ...nationalExpansionCities].map(city => city.slug);
};

// Export all cities combined
export const allCitiesData: CityData[] = [...citiesData, ...lyonSuburbs, ...marseilleSuburbs, ...additionalIdfCities, ...nationalExpansionCities];
