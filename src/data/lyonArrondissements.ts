 // Données des 9 arrondissements de Lyon pour SEO local
 export interface LyonArrondissementData {
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
 
 export const lyonArrondissements: LyonArrondissementData[] = [
   {
     name: "Lyon 1er - Pentes de la Croix-Rousse",
     slug: "lyon-1er-pentes-croix-rousse",
     number: 1,
     population: "30 000",
     quartiers: ["Pentes de la Croix-Rousse", "Terreaux", "Saint-Nizier", "Martinière"],
     landmarks: ["Place des Terreaux", "Opéra de Lyon", "Hôtel de Ville", "Musée des Beaux-Arts"],
     description: "HD Connect sécurise le 1er arrondissement de Lyon, quartier historique des Terreaux et des Pentes. Installation vidéosurveillance pour boutiques créatives, galeries et résidences des canuts.",
     economicActivity: "Commerces créatifs, galeries d'art, restauration gastronomique",
     priority: "haute"
   },
   {
     name: "Lyon 2e - Presqu'île",
     slug: "lyon-2e-presquile",
     number: 2,
     population: "32 000",
     quartiers: ["Bellecour", "Cordeliers", "Ainay", "Perrache", "Confluence"],
     landmarks: ["Place Bellecour", "Musée des Confluences", "Basilique Saint-Martin d'Ainay", "Centre d'échanges de Perrache"],
     description: "Expert sécurité Lyon 2e : protection des commerces de luxe de Bellecour, bureaux de la Presqu'île et nouveau quartier Confluence. Vidéosurveillance HD, contrôle d'accès biométrique.",
     economicActivity: "Commerce de luxe, sièges sociaux, bureaux, hôtellerie haut de gamme",
     priority: "critique"
   },
   {
     name: "Lyon 3e - Part-Dieu",
     slug: "lyon-3e-part-dieu",
     number: 3,
     population: "103 000",
     quartiers: ["Part-Dieu", "Préfecture", "Sans Souci", "Montchat", "Villette", "Dauphiné"],
     landmarks: ["Tour Part-Dieu (Le Crayon)", "Gare Part-Dieu", "Auditorium de Lyon", "Parc Bazin"],
     description: "HD Connect protège le 3e arrondissement de Lyon, premier quartier d'affaires. Sécurité renforcée pour tours de bureaux, centre commercial Part-Dieu et gare TGV. Alarmes certifiées NF&A2P.",
     economicActivity: "Quartier d'affaires majeur, centre commercial, gare TGV, sièges d'entreprises",
     priority: "critique"
   },
   {
     name: "Lyon 4e - Croix-Rousse",
     slug: "lyon-4e-croix-rousse",
     number: 4,
     population: "37 000",
     quartiers: ["Plateau de la Croix-Rousse", "Gros Caillou", "Serin"],
     landmarks: ["Boulevard de la Croix-Rousse", "Gros Caillou", "Jardin Rosa Mir", "Mur des Canuts"],
     description: "Sécurité Lyon 4e : protection du plateau de la Croix-Rousse, village dans la ville. Installation discrète pour commerces de proximité, ateliers d'artisans et résidences familiales.",
     economicActivity: "Artisanat, commerces de proximité, marché de la Croix-Rousse",
     priority: "moyenne"
   },
   {
     name: "Lyon 5e - Vieux Lyon",
     slug: "lyon-5e-vieux-lyon",
     number: 5,
     population: "49 000",
     quartiers: ["Vieux Lyon", "Saint-Jean", "Saint-Paul", "Saint-Georges", "Fourvière", "Point du Jour"],
     landmarks: ["Cathédrale Saint-Jean", "Basilique de Fourvière", "Théâtres romains", "Traboules"],
     description: "HD Connect sécurise le 5e arrondissement, Vieux Lyon classé UNESCO. Vidéosurveillance discrète pour bouchons lyonnais, hôtels patrimoniaux et résidences des traboules. Protection anti-intrusion.",
     economicActivity: "Tourisme, restauration traditionnelle, patrimoine UNESCO",
     priority: "haute"
   },
   {
     name: "Lyon 6e - Brotteaux",
     slug: "lyon-6e-brotteaux",
     number: 6,
     population: "51 000",
     quartiers: ["Brotteaux", "Bellecombe", "Tête d'Or", "Masséna", "Foch"],
     landmarks: ["Parc de la Tête d'Or", "Gare des Brotteaux", "Cité Internationale", "Musée d'Art Contemporain"],
     description: "Expert sécurité Lyon 6e : arrondissement résidentiel de standing. Protection villas et appartements haut de gamme, cabinets médicaux, ambassades. Vidéosurveillance discrète et domotique.",
     economicActivity: "Résidentiel premium, professions libérales, consulats, Cité Internationale",
     priority: "haute"
   },
   {
     name: "Lyon 7e - Gerland",
     slug: "lyon-7e-gerland",
     number: 7,
     population: "84 000",
     quartiers: ["Gerland", "Guillotière", "Jean Macé", "Saxe-Gambetta", "Saint-Louis"],
     landmarks: ["Stade de Gerland", "Halle Tony Garnier", "ENS Lyon", "Parc de Gerland"],
     description: "HD Connect protège le 7e arrondissement de Lyon : quartier étudiant Guillotière, pôle scientifique Gerland. Sécurité résidences étudiantes, laboratoires, entreprises biotech.",
     economicActivity: "Recherche scientifique, biotech, universités, événementiel Halle Tony Garnier",
     priority: "haute"
   },
   {
     name: "Lyon 8e - États-Unis",
     slug: "lyon-8e-etats-unis",
     number: 8,
     population: "86 000",
     quartiers: ["États-Unis", "Monplaisir", "Mermoz", "Grand Trou", "Le Bachut"],
     landmarks: ["Institut Lumière", "Musée Urbain Tony Garnier", "Hôpital Édouard Herriot", "Manufacture des Tabacs"],
     description: "Sécurité Lyon 8e par HD Connect : protection quartiers populaires et commerces. Vidéosurveillance HD 4K, alarmes anti-intrusion pour pavillons, commerces et copropriétés.",
     economicActivity: "Commerces de proximité, hôpitaux, université Lumière Lyon 2",
     priority: "critique"
   },
   {
     name: "Lyon 9e - Vaise",
     slug: "lyon-9e-vaise",
     number: 9,
     population: "53 000",
     quartiers: ["Vaise", "Gorge de Loup", "La Duchère", "Saint-Rambert", "Île Barbe"],
     landmarks: ["Quartier de l'Industrie", "Parc de la Duchère", "Île Barbe", "Gare de Vaise"],
     description: "HD Connect sécurise le 9e arrondissement de Lyon : zones d'activités de Vaise, quartier en rénovation de la Duchère. Installation vidéosurveillance entreprises, entrepôts et résidences.",
     economicActivity: "Zones d'activités industrielles et tertiaires, entreprises média, logistique",
     priority: "haute"
   }
 ];
 
 export const getLyonArrondissementBySlug = (slug: string): LyonArrondissementData | undefined => {
   return lyonArrondissements.find(arr => arr.slug === slug);
 };
 
 export const getLyonArrondissementByNumber = (number: number): LyonArrondissementData | undefined => {
   return lyonArrondissements.find(arr => arr.number === number);
 };
 
 export const getAllLyonArrondissementSlugs = (): string[] => {
   return lyonArrondissements.map(arr => arr.slug);
 };
 
 export const getCriticalLyonArrondissements = (): LyonArrondissementData[] => {
   return lyonArrondissements.filter(arr => arr.priority === 'critique');
 };
 
 export const getHighPriorityLyonArrondissements = (): LyonArrondissementData[] => {
   return lyonArrondissements.filter(arr => arr.priority === 'haute');
 };