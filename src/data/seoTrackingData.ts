// Fichier de suivi SEO des villes - Stratégie locale/nationale
// Référence Excel: Strategie_SEO_Locale_Nationale_Simplifiee.xlsx
// Statut: false = à faire, true = fait, "partial" = page existe mais incomplète

export type CityStatus = boolean | 'partial';

export interface CityEntry {
  done: CityStatus;
  region: string;
  city: string;
  population: number | null;
  type: 'Pilier' | 'Secondaire' | 'Structure';
  secondaryCities: string;
  notes?: string; // Notes d'audit
}

// Critères de validation pour une page ville complète
// Mis à jour: 2026-02-08 - Audit conformité modèle page ville
export const validationCriteria = {
  h1_unique: "H1 contenant le nom de la ville ✅",
  contenu_local: "150-250 mots de contenu contextualisé unique ✅",
  services_links: "8 services avec liens vers pages services ✅",
  zones_couvertes: "Quartiers + 12 communes secondaires Excel ✅",
  faq_locale: "6 questions locales ✅",
  cta_visible: "CTA avec nom de ville et téléphone ✅",
  villes_secondaires: "Toutes les villes secondaires du Excel mentionnées ✅",
  maillage_interne: "Liens vers région + autres villes ✅",
  temoignages_locaux: "Témoignages dynamiques par ville ✅",
  breadcrumb: "Fil d'Ariane: Zones > Région > Ville ✅"
};

// Statut de conformité global au modèle page ville
export const modelConformityStatus = {
  lastAudit: "2026-02-08",
  components: {
    CityHeroParallax: "✅ Conforme - H1, badge, stats, CTAs",
    CityLocalContent: "✅ Conforme - Contenu unique par département",
    CityServicesGrid: "✅ Conforme - 8 services avec liens",
    CityCoverageSection: "✅ Conforme - nearbyTowns enrichis, maillage",
    MiniTestimonials: "✅ Conforme - Témoignages dynamiques par ville",
    WhyHDConnect: "✅ Conforme - Pain points localisés",
    FAQAccordion: "✅ Conforme - 6 questions locales"
  },
  dataFiles: {
    citiesData: "✅ nearbyTowns enrichis avec 12 communes Excel",
    seoTrackingData: "✅ Suivi complet villes Pilier + Secondaires"
  }
};

// Données de suivi des villes par région
// Statuts mis à jour après audit du 2026-02-08
export const seoTrackingData: CityEntry[] = [
  // ================== AUVERGNE-RHÔNE-ALPES ==================
  { done: 'partial', region: "Auvergne-Rhône-Alpes", city: "Lyon", population: 519127, type: "Pilier", secondaryCities: "La Mulatière, Sainte-Foy-lès-Lyon, Villeurbanne, Caluire-et-Cuire, Écully, Oullins-Pierre-Bénite, Champagne-au-Mont-d'Or, Bron, Tassin-la-Demi-Lune, Saint-Fons, Francheville, Collonges-au-Mont-d'Or", notes: "nearbyTowns enrichi ✓, vérifier FAQ" },
  { done: 'partial', region: "Auvergne-Rhône-Alpes", city: "Saint-Étienne", population: 173136, type: "Pilier", secondaryCities: "La Ricamarie, Roche-la-Molière, Saint-Genest-Lerpt, Le Chambon-Feugerolles, Villars, Saint-Priest-en-Jarez, Saint-Jean-Bonnefonds, La Talaudière, Firminy, Unieux, La Fouillouse, Fraisses", notes: "nearbyTowns enrichi ✓" },
  { done: 'partial', region: "Auvergne-Rhône-Alpes", city: "Grenoble", population: 156140, type: "Pilier", secondaryCities: "Fontaine, La Tronche, Seyssinet-Pariset, Saint-Martin-le-Vinoux, Saint-Martin-d'Hères, Eybens, Échirolles, Seyssins, Corenc, Sassenage, Saint-Égrève, Gières", notes: "nearbyTowns enrichi ✓" },
  { done: 'partial', region: "Auvergne-Rhône-Alpes", city: "Villeurbanne", population: 163684, type: "Pilier", secondaryCities: "", notes: "Page existe ✓" },
  { done: 'partial', region: "Auvergne-Rhône-Alpes", city: "Clermont-Ferrand", population: 146351, type: "Pilier", secondaryCities: "Aubière, Chamalières, Beaumont, Aulnat, Cébazat, Blanzat, Gerzat, Royat, Ceyrat, Lempdes, Châteaugay, Romagnat", notes: "Page existe" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Vénissieux", population: 65502, type: "Pilier", secondaryCities: "Feyzin, Corbas, Saint-Priest, Irigny, Mions, Saint-Genis-Laval, Saint-Symphorien-d'Ozon, Solaize, Chassieu, Vernaison, Charly, Sérézin-du-Rhône" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Valence", population: 64458, type: "Pilier", secondaryCities: "Guilherand-Granges, Malissard, Bourg-lès-Valence, Portes-lès-Valence, Beaumont-lès-Valence, Saint-Marcel-lès-Valence, Saint-Péray, Chabeuil, Montélier, Charmes-sur-Rhône, Châteauneuf-sur-Isère, Étoile-sur-Rhône" },
  { done: 'partial', region: "Auvergne-Rhône-Alpes", city: "Chambéry", population: 59964, type: "Pilier", secondaryCities: "Bassens, Cognin, Jacob-Bellecombette, Barberaz, Saint-Alban-Leysse, La Motte-Servolex, La Ravoire, Barby, Challes-les-Eaux, Le Bourget-du-Lac, Drumettaz-Clarafond, Porte-de-Savoie", notes: "Page existe" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Vaulx-en-Velin", population: 53069, type: "Pilier", secondaryCities: "Décines-Charpieu, Rillieux-la-Pape, Sathonay-Camp, Meyzieu, Saint-Maurice-de-Beynost, Miribel, Fontaines-sur-Saône, Beynost, Jonage, Genas, Fontaines-Saint-Martin, Saint-Cyr-au-Mont-d'Or" },
  { done: 'partial', region: "Auvergne-Rhône-Alpes", city: "Annecy", population: 132117, type: "Pilier", secondaryCities: "Sevrier, Epagny Metz-Tessy, Poisy, Argonay, Chavanod, Villaz, Saint-Jorioz, Sillingy, La Balme-de-Sillingy, Groisy, Fillière, Cruseilles", notes: "Page existe" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Bourg-en-Bresse", population: 42372, type: "Secondaire", secondaryCities: "Péronnas, Saint-Denis-lès-Bourg, Viriat, Ceyzériat, Attignat, Vonnas, Châtillon-sur-Chalaronne, Bâgé-Dommartin, Montréal-la-Cluse, Villars-les-Dombes, Nantua, Bellignat" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Thonon-les-Bains", population: 37928, type: "Secondaire", secondaryCities: "Allinges, Publier, Évian-les-Bains, Sciez, Neuvecelle, Bons-en-Chablais, Douvaine, Chens-sur-Léman, Saint-Cergues, Veigy-Foncenex, Cranves-Sales, Viuz-en-Sallaz" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Annemasse", population: 37628, type: "Secondaire", secondaryCities: "Vétraz-Monthoux, Ambilly, Ville-la-Grand, Gaillard, Bonne, Reignier-Ésery, Fillinges, Collonges-sous-Salève, Pers-Jussy, Ferney-Voltaire, Beaumont, Ornex" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Villefranche-sur-Saône", population: 36172, type: "Secondaire", secondaryCities: "Limas, Jassans-Riottier, Gleizé, Arnas, Anse, Trévoux, Porte des Pierres Dorées, Quincieux, Saint-Georges-de-Reneins, Reyrieux, Montmerle-sur-Saône, Chazay-d'Azergues" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Saint-Chamond", population: 35646, type: "Secondaire", secondaryCities: "L'Horme, La Grand-Croix, Saint-Paul-en-Jarez, Sorbiers, Lorette, Genilac, Rive-de-Gier, Saint-Martin-la-Plaine, Saint-Héand, Pélussin, Chabanière, Saint-Symphorien-sur-Coise" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Roanne", population: 35409, type: "Secondaire", secondaryCities: "Le Coteau, Riorges, Mably, Commelle-Vernay, Villerest, Renaison, Charlieu, Thizy-les-Bourgs, Amplepuis, Cours, Chauffailles, Tarare" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Montluçon", population: 33147, type: "Secondaire", secondaryCities: "Désertines, Domérat, Commentry, Saint-Éloy-les-Mines" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Romans-sur-Isère", population: 33464, type: "Secondaire", secondaryCities: "Mours-Saint-Eusèbe, Bourg-de-Péage, Chatuzange-le-Goubet, Saint-Donat-sur-l'Herbasse, Pont-de-l'Isère, Tain-l'Hermitage, La Roche-de-Glun, Tournon-sur-Rhône, Saint-Vallier, Saint-Marcellin, Anneyron, Saint-Rambert-d'Albon" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Aix-les-Bains", population: 32406, type: "Secondaire", secondaryCities: "Grésy-sur-Aix, Entrelacs, Yenne, Belley, Saint-Genix-les-Villages, Culoz-Béon, Saint-Pierre-d'Albigny, Montmélian, Doussard, Chapareillan, Le Pont-de-Beauvoisin, Les Avenières Veyrins-Thuellin" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Vienne", population: 31778, type: "Secondaire", secondaryCities: "Pont-Évêque, Estrablin, Chasse-sur-Rhône, Communay, Ternay, Condrieu, Givors, Grigny-sur-Rhône, Saint-Clair-du-Rhône, Chaponnay, Millery, Montagny" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Bourgoin-Jallieu", population: 30151, type: "Secondaire", secondaryCities: "L'Isle-d'Abeau, Saint-Savin, Ruy-Montceau, Saint-Chef, Cessieu, Villefontaine, La Verpillière, Saint-Quentin-Fallavier, La Tour-du-Pin, Crémieu, Saint-Georges-d'Espéranche, Saint-Jean-de-Bournay" },
  { done: false, region: "Auvergne-Rhône-Alpes", city: "Montélimar", population: 40595, type: "Secondaire", secondaryCities: "Le Teil, Viviers, Donzère, Chomérac, Villeneuve-de-Berg, Pierrelatte, Privas, Loriol-sur-Drôme, Bourg-Saint-Andéol, Saint-Paul-Trois-Châteaux, Dieulefit, Livron-sur-Drôme" },

  // ================== BOURGOGNE-FRANCHE-COMTÉ ==================
  { done: 'partial', region: "Bourgogne-Franche-Comté", city: "Dijon", population: 161830, type: "Pilier", secondaryCities: "Fontaine-lès-Dijon, Talant, Saint-Apollinaire, Chenôve, Longvic, Quetigny, Marsannay-la-Côte, Chevigny-Saint-Sauveur, Neuilly-Crimolois, Genlis, Nuits-Saint-Georges, Is-sur-Tille", notes: "Page existe" },
  { done: false, region: "Bourgogne-Franche-Comté", city: "Besançon", population: 118489, type: "Pilier", secondaryCities: "Saône, Saint-Vit, Ornans, Valdahon, Baume-les-Dames" },
  { done: false, region: "Bourgogne-Franche-Comté", city: "Belfort", population: 45912, type: "Secondaire", secondaryCities: "Essert, Bavilliers, Valdoie, Offemont, Danjoutin, Héricourt, Bethoncourt, Grand-Charmont, Champagney, Sochaux, Étupes, Exincourt" },
  { done: false, region: "Bourgogne-Franche-Comté", city: "Chalon-sur-Saône", population: 45102, type: "Secondaire", secondaryCities: "Châtenoy-le-Royal, Saint-Marcel, Saint-Rémy, Givry, Ouroux-sur-Saône, Chagny, Tournus, Le Breuil, Montchanin, Louhans" },

  // ================== BRETAGNE ==================
  { done: 'partial', region: "Bretagne", city: "Rennes", population: 230890, type: "Pilier", secondaryCities: "Vezin-le-Coquet, Montgermont, Saint-Grégoire, Saint-Jacques-de-la-Lande, Cesson-Sévigné, Chantepie, Noyal-Châtillon-sur-Seiche, Pacé, Le Rheu, Betton, La Chapelle-des-Fougeretz, Chartres-de-Bretagne", notes: "Page existe" },
  { done: 'partial', region: "Bretagne", city: "Brest", population: 142346, type: "Pilier", secondaryCities: "Bohars, Guilers, Gouesnou, Le Relecq-Kerhuon, Guipavas, Plouzané, Milizac-Guipronvel, Saint-Renan, Bourg-Blanc, Plougastel-Daoulas, Plabennec, Locmaria-Plouzané", notes: "Page existe" },
  { done: false, region: "Bretagne", city: "Quimper", population: 64385, type: "Pilier", secondaryCities: "Ergué-Gabéric, Pluguffan, Saint-Évarzec, Plomelin, Plogonnec, Pleuven, Combrit, Saint-Yvi, Briec, La Forêt-Fouesnant, Bénodet, Elliant" },
  { done: false, region: "Bretagne", city: "Lorient", population: 58329, type: "Pilier", secondaryCities: "Larmor-Plage, Locmiquélic, Lanester, Quéven, Ploemeur, Riantec, Caudan, Kervignac, Guidel, Hennebont, Pont-Scorff, Merlevenez" },
  { done: false, region: "Bretagne", city: "Vannes", population: 55790, type: "Pilier", secondaryCities: "Séné, Saint-Avé, Arradon, Ploeren, Plescop, Saint-Nolff, Theix-Noyalo, Monterblanc, Baden, Surzur, Grand-Champ, Elven" },

  // ================== CENTRE-VAL DE LOIRE ==================
  { done: 'partial', region: "Centre-Val de Loire", city: "Tours", population: 139259, type: "Pilier", secondaryCities: "Saint-Pierre-des-Corps, Saint-Cyr-sur-Loire, La Riche, Saint-Avertin, La Ville-aux-Dames, Rochecorbon, Notre-Dame-d'Oé, Joué-lès-Tours, Chambray-lès-Tours, Fondettes, La Membrolle-sur-Choisille, Chanceaux-sur-Choisille", notes: "Page existe" },
  { done: 'partial', region: "Centre-Val de Loire", city: "Orléans", population: 116357, type: "Pilier", secondaryCities: "Saint-Jean-le-Blanc, Olivet, Saint-Denis-en-Val, Saint-Jean-de-la-Ruelle, Saint-Pryvé-Saint-Mesmin, La Chapelle-Saint-Mesmin, Saint-Hilaire-Saint-Mesmin, Saint-Jean-de-Braye, Saint-Cyr-en-Val, Fleury-les-Aubrais, Semoy, Saran", notes: "Page existe" },
  { done: false, region: "Centre-Val de Loire", city: "Bourges", population: 64186, type: "Pilier", secondaryCities: "Saint-Doulchard, Trouy, La Chapelle-Saint-Ursin, Saint-Germain-du-Puy, Mehun-sur-Yèvre, Saint-Florent-sur-Cher, Dun-sur-Auron, Issoudun" },

  // ================== CORSE ==================
  { done: false, region: "Corse", city: "Ajaccio", population: 76320, type: "Pilier", secondaryCities: "Alata, Afa, Bastelicaccia, Sarrola-Carcopino, Grosseto-Prugna, Propriano" },
  { done: false, region: "Corse", city: "Bastia", population: 46867, type: "Secondaire", secondaryCities: "Ville-di-Pietrabugno, Furiani, San-Martino-di-Lota, Biguglia, Borgo, Lucciana, Vescovato, Penta-di-Casinca" },

  // ================== GRAND EST ==================
  { done: 'partial', region: "Grand Est", city: "Strasbourg", population: 293771, type: "Pilier", secondaryCities: "Ostwald, Schiltigheim, Bischheim, Illkirch-Graffenstaden, Eckbolsheim, Lingolsheim, Hœnheim, Oberhausbergen, Souffelweyersheim, Wolfisheim, Holtzheim, Mundolsheim", notes: "Page existe" },
  { done: 'partial', region: "Grand Est", city: "Reims", population: 177674, type: "Pilier", secondaryCities: "Cormontreuil, Tinqueux, Bétheny, Saint-Brice-Courcelles, Bezannes, Witry-lès-Reims, Aÿ-Champagne, Mourmelon-le-Grand, Fismes", notes: "Page existe" },
  { done: 'partial', region: "Grand Est", city: "Metz", population: 122572, type: "Pilier", secondaryCities: "Montigny-lès-Metz, Saint-Julien-lès-Metz, Longeville-lès-Metz, Le Ban-Saint-Martin, Marly, Moulins-lès-Metz, Woippy, Ars-sur-Moselle, Maizières-lès-Metz, Marange-Silvange, Courcelles-Chaussy, Talange", notes: "Page existe" },
  { done: false, region: "Grand Est", city: "Mulhouse", population: 104978, type: "Pilier", secondaryCities: "Riedisheim, Pfastatt, Illzach, Brunstatt-Didenheim, Kingersheim, Lutterbach, Richwiller, Morschwiller-le-Bas, Rixheim, Wittenheim, Sausheim, Wittelsheim" },
  { done: 'partial', region: "Grand Est", city: "Nancy", population: 103671, type: "Pilier", secondaryCities: "Saint-Max, Maxéville, Vandœuvre-lès-Nancy, Jarville-la-Malgrange, Tomblaine, Malzéville, Laxou, Heillecourt, Villers-lès-Nancy, Essey-lès-Nancy, Champigneulles, Saulxures-lès-Nancy", notes: "Page existe" },
  { done: false, region: "Grand Est", city: "Colmar", population: 66970, type: "Pilier", secondaryCities: "Horbourg-Wihr, Ingersheim, Kaysersberg Vignoble, Wintzenheim, Turckheim, Sainte-Croix-en-Plaine, Ribeauvillé, Marckolsheim, Rouffach, Châtenois, Orbey, Scherwiller" },
  { done: false, region: "Grand Est", city: "Troyes", population: 62088, type: "Pilier", secondaryCities: "Saint-André-les-Vergers, Saint-Julien-les-Villas, Les Noës-près-Troyes, Rosières-près-Troyes, Pont-Sainte-Marie, Sainte-Savine, La Chapelle-Saint-Luc, Saint-Parres-aux-Tertres, Bréviandes, La Rivière-de-Corps, Aix-Villemaur-Pâlis" },

  // ================== HAUTS-DE-FRANCE ==================
  { done: 'partial', region: "Hauts-de-France", city: "Lille", population: 238246, type: "Pilier", secondaryCities: "Lambersart, La Madeleine, Loos, Saint-André-lez-Lille, Sequedin, Faches-Thumesnil, Ronchin, Mons-en-Barœul, Marquette-lez-Lille, Wattignies, Haubourdin, Emmerin", notes: "Page existe" },
  { done: 'partial', region: "Hauts-de-France", city: "Amiens", population: 136449, type: "Pilier", secondaryCities: "Rivery, Salouël, Camon, Longueau, Ailly-sur-Somme, Boves, Corbie, Villers-Bretonneux, Flixecourt, Moreuil, Doullens, Albert", notes: "Page existe" },
  { done: 'partial', region: "Hauts-de-France", city: "Tourcoing", population: 98772, type: "Pilier", secondaryCities: "Mouvaux, Neuville-en-Ferrain, Roncq, Roubaix, Wattrelos, Bondues, Croix, Wasquehal, Marcq-en-Barœul, Linselles, Halluin, Lys-lez-Lannoy", notes: "Page existe" },
  { done: 'partial', region: "Hauts-de-France", city: "Dunkerque", population: 86263, type: "Pilier", secondaryCities: "Cappelle-la-Grande, Grande-Synthe, Coudekerque-Branche, Téteghem-Coudekerque-Village, Leffrinckoucke, Bergues, Loon-Plage, Hoymille, Ghyvelde, Bourbourg, Bray-Dunes, Gravelines", notes: "Page existe" },
  { done: false, region: "Hauts-de-France", city: "Calais", population: 67571, type: "Pilier", secondaryCities: "Coulogne, Marck, Sangatte, Guînes, Ardres, Oye-Plage, Audruicq, Grand-Fort-Philippe, Marquise, Éperlecques, Wimille, Wimereux" },
  { done: false, region: "Hauts-de-France", city: "Villeneuve-d'Ascq", population: 62868, type: "Pilier", secondaryCities: "Hem, Chéreng, Toufflers, Baisieux, Lesquin, Leers, Fretin, Cysoing, Templemars, Wambrechies, Templeuve-en-Pévèle, Pont-à-Marcq" },
  { done: false, region: "Hauts-de-France", city: "Beauvais", population: 55550, type: "Pilier", secondaryCities: "Bresles, Crèvecœur-le-Grand, Sainte-Geneviève, Mouy, Andeville, Agnetz, Méru, Chaumont-en-Vexin, Clermont, Saint-Just-en-Chaussée, Breuil-le-Vert, Breteuil" },
  { done: false, region: "Hauts-de-France", city: "Saint-Quentin", population: 52813, type: "Pilier", secondaryCities: "Gauchy, Ham, Bohain-en-Vermandois, Tergnier, Guise, Chauny, Péronne, Caudry, Le Cateau-Cambrésis, Proville" },

  // ================== NORMANDIE ==================
  { done: 'partial', region: "Normandie", city: "Le Havre", population: 166687, type: "Pilier", secondaryCities: "Sainte-Adresse, Harfleur, Gonfreville-l'Orcher, Montivilliers, Octeville-sur-Mer, Honfleur, Trouville-sur-Mer, Touques, Deauville, Saint-Romain-de-Colbosc, Beuzeville, Pont-l'Évêque", notes: "Page existe" },
  { done: 'partial', region: "Normandie", city: "Rouen", population: 117662, type: "Pilier", secondaryCities: "Mont-Saint-Aignan, Le Petit-Quevilly, Sotteville-lès-Rouen, Bonsecours, Bihorel, Bois-Guillaume, Déville-lès-Rouen, Darnétal, Amfreville-la-Mi-Voie, Le Grand-Quevilly, Le Mesnil-Esnard, Saint-Léger-du-Bourg-Denis", notes: "Page existe" },
  { done: false, region: "Normandie", city: "Caen", population: 109400, type: "Pilier", secondaryCities: "Hérouville-Saint-Clair, Bretteville-sur-Odon, Fleury-sur-Orne, Cormelles-le-Royal, Mondeville, Ifs, Carpiquet, Colombelles, Giberville, Biéville-Beuville, Blainville-sur-Orne, Verson" },
  { done: false, region: "Normandie", city: "Cherbourg-en-Cotentin", population: 78258, type: "Pilier", secondaryCities: "La Hague, Valognes, Les Pieux, Bricquebec-en-Cotentin, Picauville" },

  // ================== NOUVELLE-AQUITAINE ==================
  { done: 'partial', region: "Nouvelle-Aquitaine", city: "Bordeaux", population: 267991, type: "Pilier", secondaryCities: "Le Bouscat, Bruges, Cenon, Eysines, Lormont, Floirac, Talence, Bassens, Blanquefort, Bègles, Artigues-près-Bordeaux, Carbon-Blanc", notes: "Page existe" },
  { done: false, region: "Nouvelle-Aquitaine", city: "Limoges", population: 129937, type: "Pilier", secondaryCities: "Couzeix, Isle, Panazol, Condat-sur-Vienne, Le Palais-sur-Vienne, Verneuil-sur-Vienne, Feytiat, Aixe-sur-Vienne, Rilhac-Rancon, Boisseuil, Ambazac, Saint-Léonard-de-Noblat" },
  { done: 'partial', region: "Nouvelle-Aquitaine", city: "La Rochelle", population: 79851, type: "Pilier", secondaryCities: "Lagord, L'Houmeau, Nieul-sur-Mer, Puilboreau, Aytré, Périgny, Angoulins, Marsilly, Saint-Xandre, Dompierre-sur-Mer, La Flotte, Sainte-Marie-de-Ré", notes: "Page existe" },
  { done: false, region: "Nouvelle-Aquitaine", city: "Mérignac", population: 78090, type: "Pilier", secondaryCities: "Le Haillan, Pessac, Canéjan, Gradignan, Le Taillan-Médoc, Martignas-sur-Jalle, Saint-Médard-en-Jalles, Saint-Jean-d'Illac, Saint-Aubin-de-Médoc, Léognan, Le Pian-Médoc, Bouliac" },
  { done: false, region: "Nouvelle-Aquitaine", city: "Pau", population: 77855, type: "Pilier", secondaryCities: "Billère, Lescar, Jurançon, Lons, Bizanos, Mazères-Lezons, Idron, Gelos, Serres-Castet, Gan, Nay, Lées-Athas" },
  { done: false, region: "Nouvelle-Aquitaine", city: "Poitiers", population: 91856, type: "Pilier", secondaryCities: "Buxerolles, Chasseneuil-du-Poitou, Mignaloux-Beauvoir, Saint-Benoît, Biard, Migné-Auxances, Vouneuil-sous-Biard, Fontaine-le-Comte, Montamisé, Jaunay-Marigny, Chauvigny, Lusignan" },
  { done: false, region: "Nouvelle-Aquitaine", city: "Bayonne", population: 51594, type: "Pilier", secondaryCities: "Anglet, Biarritz, Saint-Jean-de-Luz, Boucau, Bidart, Hendaye, Urrugne, Ciboure, Bassussarry, Ustaritz, Arbonne, Guéthary" },
  { done: false, region: "Nouvelle-Aquitaine", city: "Niort", population: 59854, type: "Pilier", secondaryCities: "Aiffres, Chauray, Échiré, Vouillé, Benet, La Crèche, Aigondigné, Celles-sur-Belle, Saint-Maixent-l'École, Melle, Fontenay-le-Comte, Saint-Jean-de-Liversay" },

  // ================== OCCITANIE ==================
  { done: 'partial', region: "Occitanie", city: "Toulouse", population: 493465, type: "Pilier", secondaryCities: "Blagnac, Colomiers, Tournefeuille, Balma, L'Union, Cugnaux, Ramonville-Saint-Agne, Saint-Orens-de-Gameville, Portet-sur-Garonne, Muret, Plaisance-du-Touch, Castanet-Tolosan", notes: "Page existe" },
  { done: 'partial', region: "Occitanie", city: "Montpellier", population: 290053, type: "Pilier", secondaryCities: "Castelnau-le-Lez, Lattes, Mauguio, Saint-Jean-de-Védas, Juvignac, Clapiers, Le Crès, Jacou, Saint-Gély-du-Fesc, Grabels, Vendargues, Pérols", notes: "Page existe" },
  { done: 'partial', region: "Occitanie", city: "Nîmes", population: 148923, type: "Pilier", secondaryCities: "Marguerittes, Caissargues, Garons, Manduel, Rodilhan, Saint-Gilles, Bouillargues, Caveirac, Redessan, Uchaud, Vauvert, Milhaud", notes: "Page existe" },
  { done: 'partial', region: "Occitanie", city: "Perpignan", population: 120316, type: "Pilier", secondaryCities: "Canet-en-Roussillon, Saint-Estève, Cabestany, Le Soler, Toulouges, Bompas, Pia, Rivesaltes, Pollestres, Thuir, Elne, Saleilles", notes: "Page existe" },
  { done: 'partial', region: "Occitanie", city: "Béziers", population: 78558, type: "Pilier", secondaryCities: "Villeneuve-lès-Béziers, Sérignan, Sauvian, Portiragnes, Vias, Colombiers, Boujan-sur-Libron, Servian, Maraussan, Bessan, Capestang, Murviel-lès-Béziers", notes: "Page existe" },
  { done: false, region: "Occitanie", city: "Montauban", population: 62945, type: "Pilier", secondaryCities: "Montbeton, Saint-Étienne-de-Tulmont, Bressols, Albias, Labastide-Saint-Pierre, La Ville-Dieu-du-Temple, Montech, Nègrepelisse, Fronton, Castelsarrasin, Caussade, Villemur-sur-Tarn" },
  { done: false, region: "Occitanie", city: "Narbonne", population: 52855, type: "Pilier", secondaryCities: "Coursan, Cuxac-d'Aude, Lézignan-Corbières, Fleury, Narbonne-Plage, Sigean, Port-la-Nouvelle, Leucate, Gruissan, Montredon-des-Corbières, Ouveillan, Bize-Minervois" },

  // ================== PAYS DE LA LOIRE ==================
  { done: 'partial', region: "Pays de la Loire", city: "Nantes", population: 327734, type: "Pilier", secondaryCities: "Saint-Herblain, Saint-Sébastien-sur-Loire, Orvault, Sainte-Luce-sur-Loire, Rezé, La Chapelle-sur-Erdre, Basse-Goulaine, Bouguenais, Indre, Carquefou, Treillières, Sautron", notes: "Page existe" },
  { done: 'partial', region: "Pays de la Loire", city: "Angers", population: 159022, type: "Pilier", secondaryCities: "Avrillé, Beaucouzé, Écouflant, Sainte-Gemmes-sur-Loire, Saint-Barthélemy-d'Anjou, Trélazé, Les Ponts-de-Cé, Bouchemaine, Verrières-en-Anjou, Montreuil-Juigné, Mûrs-Erigné, Saint-Léger-de-Linières", notes: "Page existe" },
  { done: false, region: "Pays de la Loire", city: "Le Mans", population: 146249, type: "Pilier", secondaryCities: "Allonnes, Arnage, Coulaines, Ruaudin, Changé, Sargé-lès-le-Mans, Mulsanne, Yvré-l'Évêque, Moncé-en-Belin, Champagné, Guécélard, Teloché" },
  { done: false, region: "Pays de la Loire", city: "Saint-Nazaire", population: 74568, type: "Pilier", secondaryCities: "Trignac, Pornichet, Saint-Brevin-les-Pins, Saint-André-des-Eaux, Montoir-de-Bretagne, La Baule-Escoublac, Saint-Malo-de-Guersac, Saint-Joachim, Saint-Père-en-Retz, Saint-Lyphard, Donges, Le Pouliguen" },
  { done: false, region: "Pays de la Loire", city: "La Roche-sur-Yon", population: 54849, type: "Pilier", secondaryCities: "Mouilleron-le-Captif, Aubigny-Les Clouzeaux, Nesmy, La Ferrière, Venansault, La Chaize-le-Vicomte, Rives de l'Yon, Dompierre-sur-Yon, Le Poiré-sur-Vie, Bellevigny, Aizenay, Essarts-en-Bocage" },
  { done: false, region: "Pays de la Loire", city: "Cholet", population: 54404, type: "Pilier", secondaryCities: "La Tessoualle, Saint-Léger-sous-Cholet, Mortagne-sur-Sèvre, La Séguinière, Maulévrier, Saint-Laurent-sur-Sèvre, Le May-sur-Èvre, Trémentines, Chanverrie, Mauléon, La Gaubretière, Sèvremont" },

  // ================== PROVENCE-ALPES-CÔTE D'AZUR ==================
  { done: 'partial', region: "Provence-Alpes-Côte d'Azur", city: "Marseille", population: 886040, type: "Pilier", secondaryCities: "La Penne-sur-Huveaune, Plan-de-Cuques, Septèmes-les-Vallons, Le Rove, Carnoux-en-Provence, Cassis, Simiane-Collongue, Gignac-la-Nerthe, Mimet, Ensuès-la-Redonne, Saint-Victoret, Saint-Savournin", notes: "Page existe" },
  { done: 'partial', region: "Provence-Alpes-Côte d'Azur", city: "Nice", population: 357737, type: "Pilier", secondaryCities: "Saint-André-de-la-Roche, Villefranche-sur-Mer, Saint-Laurent-du-Var, Beaulieu-sur-Mer, Colomars, La Gaude, La Trinité, Cagnes-sur-Mer, Drap, Tourrette-Levens, Gattières, Saint-Jeannet", notes: "Page existe" },
  { done: 'partial', region: "Provence-Alpes-Côte d'Azur", city: "Toulon", population: 179116, type: "Pilier", secondaryCities: "La Valette-du-Var, Le Revest-les-Eaux, Ollioules, Saint-Mandrier-sur-Mer, La Garde, La Seyne-sur-Mer, Le Pradet, Solliès-Toucas, La Farlède, Sanary-sur-Mer, Le Beausset, Six-Fours-les-Plages", notes: "Page existe" },
  { done: 'partial', region: "Provence-Alpes-Côte d'Azur", city: "Aix-en-Provence", population: 149695, type: "Pilier", secondaryCities: "Éguilles, Ventabren, Cabriès, Bouc-Bel-Air, Meyreuil, Saint-Cannat, Coudoux, Venelles, Velaux, Gardanne, Rognac, Le Puy-Sainte-Réparade", notes: "Page existe" },
  { done: 'partial', region: "Provence-Alpes-Côte d'Azur", city: "Avignon", population: 92188, type: "Pilier", secondaryCities: "Le Pontet, Villeneuve-lès-Avignon, Rognonas, Morières-lès-Avignon, Les Angles, Châteaurenard, Vedène, Sorgues, Pujaut, Châteauneuf-de-Gadagne, Barbentane, Saint-Saturnin-lès-Avignon", notes: "Page existe" },
  { done: 'partial', region: "Provence-Alpes-Côte d'Azur", city: "Antibes", population: 77637, type: "Pilier", secondaryCities: "Vallauris, Biot, Villeneuve-Loubet, Valbonne, Mougins, Cannes, Le Cannet, Roquefort-les-Pins, La Colle-sur-Loup, Mouans-Sartoux, Saint-Paul-de-Vence, La Roquette-sur-Siagne", notes: "Page existe" },
  { done: false, region: "Provence-Alpes-Côte d'Azur", city: "Fréjus", population: 59719, type: "Pilier", secondaryCities: "Saint-Raphaël, Puget-sur-Argens, Bagnols-en-Forêt, Roquebrune-sur-Argens, Montauroux, Le Muy, Callian, Sainte-Maxime, Pégomas, Fayence, Le Tignet, La Motte" },
  { done: false, region: "Provence-Alpes-Côte d'Azur", city: "Hyères", population: 55858, type: "Pilier", secondaryCities: "La Londe-les-Maures, Bormes-les-Mimosas, Carqueiranne, Pierrefeu-du-Var, Le Lavandou, Solliès-Pont, Puget-Ville, Cuers, Carnoules, Pignans, Gonfaron, Cavalaire-sur-Mer" },
  { done: false, region: "Provence-Alpes-Côte d'Azur", city: "Arles", population: 51811, type: "Pilier", secondaryCities: "Saint-Martin-de-Crau, Port-Saint-Louis-du-Rhône, Fontvieille, Saint-Gilles, Mouriès, Bellegarde, Vauvert, Saint-Rémy-de-Provence, Saint-Mitre-les-Remparts, Beauvoisin, Grans, Jonquières-Saint-Vincent" },
  { done: false, region: "Provence-Alpes-Côte d'Azur", city: "Grasse", population: 50970, type: "Pilier", secondaryCities: "Châteauneuf-Grasse, Peymeinade, Auribeau-sur-Siagne, Le Rouret, Saint-Vallier-de-Thiey, Tourrettes-sur-Loup, Saint-Cézaire-sur-Siagne, Carros, Saint-Martin-du-Var, Levens" },
  { done: 'partial', region: "Provence-Alpes-Côte d'Azur", city: "Cannes", population: 74000, type: "Secondaire", secondaryCities: "Antibes, Mougins, Le Cannet, Mandelieu-la-Napoule, Vallauris", notes: "Page existe" },

  // ================== ÎLE-DE-FRANCE ==================
  { done: 'partial', region: "Île-de-France", city: "Paris", population: 2103778, type: "Pilier", secondaryCities: "20 arrondissements", notes: "Page existe + pages arrondissements" },
  { done: 'partial', region: "Île-de-France", city: "Boulogne-Billancourt", population: 119019, type: "Pilier", secondaryCities: "Issy-les-Moulineaux, Saint-Cloud, Sèvres, Vanves, Meudon, Suresnes, Garches, Malakoff, Clamart, Chaville, Puteaux, Châtillon", notes: "Page existe" },
  { done: 'partial', region: "Île-de-France", city: "Montreuil", population: 111934, type: "Pilier", secondaryCities: "Bagnolet, Vincennes, Fontenay-sous-Bois, Romainville, Les Lilas, Rosny-sous-Bois, Noisy-le-Sec, Saint-Mandé, Nogent-sur-Marne, Le Pré-Saint-Gervais, Neuilly-Plaisance, Le Perreux-sur-Marne", notes: "Page existe" },
  { done: 'partial', region: "Île-de-France", city: "Argenteuil", population: 106130, type: "Pilier", secondaryCities: "Sannois, Colombes, Saint-Gratien, Gennevilliers, Bezons, Cormeilles-en-Parisis, Bois-Colombes, Ermont, Franconville, Enghien-les-Bains, La Garenne-Colombes, Asnières-sur-Seine", notes: "Page existe" },
  { done: 'partial', region: "Île-de-France", city: "Nanterre", population: 97783, type: "Pilier", secondaryCities: "Carrières-sur-Seine, Rueil-Malmaison, Houilles, Chatou, Courbevoie, Neuilly-sur-Seine, Sartrouville, Le Vésinet, Montesson, Croissy-sur-Seine, Bougival, Levallois-Perret", notes: "Page existe" },
  { done: 'partial', region: "Île-de-France", city: "Vitry-sur-Seine", population: 93963, type: "Pilier", secondaryCities: "Alfortville, Villejuif, Ivry-sur-Seine, Thiais, Choisy-le-Roi, Maisons-Alfort, Le Kremlin-Bicêtre, Charenton-le-Pont, Chevilly-Larue, L'Haÿ-les-Roses, Créteil, Gentilly", notes: "Page existe" },
  { done: false, region: "Île-de-France", city: "Aulnay-sous-Bois", population: 87599, type: "Pilier", secondaryCities: "Le Blanc-Mesnil, Sevran, Villepinte, Drancy, Livry-Gargan, Les Pavillons-sous-Bois, Le Bourget, Bondy, Gonesse, Tremblay-en-France, Bobigny, Clichy-sous-Bois" },
  { done: 'partial', region: "Île-de-France", city: "Versailles", population: 84095, type: "Pilier", secondaryCities: "Le Chesnay-Rocquencourt, Buc, Viroflay, Saint-Cyr-l'École, Bailly, Ville-d'Avray, Guyancourt, Vaucresson, La Celle-Saint-Cloud, Jouy-en-Josas, Fontenay-le-Fleury, Vélizy-Villacoublay", notes: "Page existe" },
  { done: false, region: "Île-de-France", city: "Champigny-sur-Marne", population: 78072, type: "Pilier", secondaryCities: "Villiers-sur-Marne, Bry-sur-Marne, Saint-Maur-des-Fossés, Chennevières-sur-Marne, Noisy-le-Grand, Ormesson-sur-Marne, Joinville-le-Pont, Le Plessis-Trévise, Noiseau, Bonneuil-sur-Marne, Neuilly-sur-Marne, Sucy-en-Brie" },
  { done: 'partial', region: "Île-de-France", city: "Cergy", population: 70906, type: "Pilier", secondaryCities: "Vauréal, Jouy-le-Moutier, Courdimanche, Osny, Pontoise, Maurecourt, Éragny, Menucourt, Conflans-Sainte-Honorine, Saint-Ouen-l'Aumône, Vaux-sur-Seine, Andrésy", notes: "Page existe" },
  { done: 'partial', region: "Île-de-France", city: "Évry-Courcouronnes", population: 66919, type: "Pilier", secondaryCities: "Ris-Orangis, Lisses, Bondoufle, Corbeil-Essonnes, Soisy-sur-Seine, Fleury-Mérogis, Saint-Germain-lès-Corbeil, Étiolles, Grigny, Villabé, Draveil, Viry-Châtillon", notes: "Page existe" },
  { done: 'partial', region: "Île-de-France", city: "Saint-Denis", population: 149077, type: "Pilier", secondaryCities: "La Courneuve, Villetaneuse, Stains, Villeneuve-la-Garenne, Aubervilliers, L'Île-Saint-Denis, Montmagny, Saint-Ouen-sur-Seine, Épinay-sur-Seine, Garges-lès-Gonesse, Dugny, Deuil-la-Barre", notes: "Page existe" },
  { done: false, region: "Île-de-France", city: "Antony", population: 64263, type: "Pilier", secondaryCities: "Fresnes, Sceaux, Wissous, Verrières-le-Buisson, Massy, Châtenay-Malabry, Bourg-la-Reine, Rungis, Fontenay-aux-Roses, Le Plessis-Robinson, Chilly-Mazarin, Cachan" },
  { done: false, region: "Île-de-France", city: "Clichy", population: 64410, type: "Pilier", secondaryCities: "Pantin, Soisy-sous-Montmorency, Groslay, Montrouge, Eaubonne, Montmorency, Margency, Arcueil, Saint-Brice-sous-Forêt, Sarcelles, Bagneux, La Frette-sur-Seine" },
  { done: 'partial', region: "Île-de-France", city: "Meaux", population: 56905, type: "Pilier", secondaryCities: "Nanteuil-lès-Meaux, Crégy-lès-Meaux, Mareuil-lès-Meaux, Villenoy, Trilport, Chauconin-Neufmontiers, Quincy-Voisins, Esbly, Montry, Saint-Germain-sur-Morin, Crécy-la-Chapelle, Coupvray", notes: "Page existe" },
  { done: false, region: "Île-de-France", city: "Chelles", population: 54620, type: "Pilier", secondaryCities: "Montfermeil, Gournay-sur-Marne, Vaires-sur-Marne, Brou-sur-Chantereine, Courtry, Gagny, Coubron, Champs-sur-Marne, Noisiel, Torcy, Vaujours, Le Raincy" },
  { done: 'partial', region: "Île-de-France", city: "Créteil", population: 92000, type: "Secondaire", secondaryCities: "Maisons-Alfort, Saint-Maur-des-Fossés, Alfortville, Choisy-le-Roi, Bonneuil-sur-Marne", notes: "Page existe" },
];

// Fonctions utilitaires pour le suivi
export const getStats = () => {
  const total = seoTrackingData.filter(c => c.type !== 'Structure').length;
  const done = seoTrackingData.filter(c => c.done === true && c.type !== 'Structure').length;
  const partial = seoTrackingData.filter(c => c.done === 'partial' && c.type !== 'Structure').length;
  const todo = seoTrackingData.filter(c => c.done === false && c.type !== 'Structure').length;
  
  const piliers = seoTrackingData.filter(c => c.type === 'Pilier');
  const piliersDone = piliers.filter(c => c.done === true).length;
  const piliersPartial = piliers.filter(c => c.done === 'partial').length;
  
  const secondaires = seoTrackingData.filter(c => c.type === 'Secondaire');
  const secondairesDone = secondaires.filter(c => c.done === true).length;

  return {
    total,
    done,
    partial,
    todo,
    piliers: { total: piliers.length, done: piliersDone, partial: piliersPartial },
    secondaires: { total: secondaires.length, done: secondairesDone },
    progress: Math.round(((done + partial * 0.5) / total) * 100),
  };
};

export const getCitiesByRegion = (region: string) => {
  return seoTrackingData.filter(c => c.region === region && c.type !== 'Structure');
};

export const getCitiesByStatus = (status: CityStatus) => {
  return seoTrackingData.filter(c => c.done === status && c.type !== 'Structure');
};

export const getPilierCities = () => {
  return seoTrackingData.filter(c => c.type === 'Pilier');
};

export const getIncompleteCities = () => {
  return seoTrackingData.filter(c => c.done === 'partial' || c.done === false);
};

export const getRegions = () => {
  return [...new Set(seoTrackingData.map(c => c.region))];
};

// Audit: villes qui ont une page mais nécessitent enrichissement nearbyTowns
export const getCitiesNeedingEnrichment = () => {
  return seoTrackingData.filter(c => c.done === 'partial' && c.notes?.includes('nearbyTowns'));
};
