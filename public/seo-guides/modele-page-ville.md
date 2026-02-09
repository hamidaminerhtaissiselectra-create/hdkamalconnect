# VILLE (pilier locale) – Modèle minimum efficace

## Objectif de la page ville

Une page ville pilier a pour rôle de capter l'intention locale (Service + Ville), de rassurer l'utilisateur local et de renforcer les pages services via le maillage interne.

Elle ne doit pas remplacer une page service, ni détailler excessivement les prestations. C'est une page de contextualisation locale.

---

## 1. Hero (zone immédiatement visible)

### Éléments attendus :
- **H1 unique** : Service principal à Ville
- Introduction courte mentionnant la ville et les communes alentours
- Appel à l'action visible

### Rôle SEO :
- Ancrage immédiat de la requête service + ville
- Confirmation de la pertinence géographique

---

## 2. Bloc « Service à Ville » (contextualisation locale)

### Contenu attendu :
- Présentation du service dans le contexte local
- Spécificités de la ville (habitat, entreprises, zones résidentielles…)
- Manière dont l'entreprise intervient localement

### Bonnes pratiques :
- 150 à 250 mots
- Ton factuel
- Aucun copier-coller entre villes

---

## 3. Bloc « Nos services disponibles à Ville »

### Éléments attendus :
- Liste de 3 à 6 services maximum
- Liens vers les pages services correspondantes

### Rôle SEO :
- Renforcement du maillage interne
- Clarification Ville → Services

---

## 4. Bloc « Zones couvertes autour de Ville »

### Contenu attendu :
- Quartiers principaux
- Communes proches
- Département si pertinent

### Rôle SEO :
- Capture de la longue traîne locale
- Renforcement de la légitimité territoriale

---

## 5. Bloc de preuves locales

### Exemples :
- Témoignage client local
- Intervention réalisée dans la ville
- Référence ou photo locale

### Rôle SEO :
- Renforcement de la crédibilité (E-E-A-T)

---

## 6. FAQ locale – Ville

### Recommandations :
- 2 à 4 questions maximum
- Questions réellement locales :
  - Intervenez-vous rapidement à Ville ?
  - Couvrez-vous les communes voisines ?
  - Comment se déroule une intervention locale ?

---

## 7. Call-To-Action localisé

- Demander un devis à Ville
- Intervention à Ville
- Numéro de téléphone visible

---

## Critères de validation

Une page ville est **complète** si :

| Critère | Composant | Requis | Statut actuel |
|---------|-----------|--------|---------------|
| H1 unique avec ville | `CityHeroParallax.tsx` | ✅ | ✅ Conforme |
| Introduction avec département + région | `CityHeroParallax.tsx` | ✅ | ✅ Conforme |
| Contenu contextualisé (150-250 mots) | `CityLocalContent.tsx` | ✅ | ✅ Contenu unique par département |
| Liste des services avec liens (3-8) | `CityServicesGrid.tsx` | ✅ | ✅ 8 services liés |
| Zones couvertes (quartiers + communes) | `CityCoverageSection.tsx` | ✅ | ✅ nearbyTowns enrichis Excel |
| Preuves locales (témoignages) | `MiniTestimonials.tsx` | ⭐ | ✅ Témoignages dynamiques par ville |
| FAQ locale (2-6 questions) | `CityServicePage.tsx` | ✅ | ✅ 6 questions localisées |
| CTA visible avec ville + téléphone | CTA final | ✅ | ✅ Conforme |
| Maillage interne région | `CityCoverageSection.tsx` | ✅ | ✅ Liens villes voisines |
| Villes secondaires Excel | `nearbyTowns` | ✅ | ✅ 12 communes par ville Pilier |

---

## Audit technique - Février 2026

### Composants conformes au modèle :
- ✅ `CityHeroParallax.tsx` : H1 dynamique, badge département, stats, CTAs
- ✅ `CityLocalContent.tsx` : Contenu unique par code département (16 départements couverts)
- ✅ `CityServicesGrid.tsx` : 8 services avec liens vers pages détail ville+service
- ✅ `CityCoverageSection.tsx` : Affiche TOUS les nearbyTowns + liens maillage région
- ✅ `MiniTestimonials.tsx` : Témoignages pseudo-uniques par ville
- ✅ `WhyHDConnect.tsx` : Pain points + engagements localisés
- ✅ `FAQAccordion.tsx` : 6 questions FAQ locales

### Données enrichies :
- ✅ `citiesData.ts` : nearbyTowns alignés sur fichier Excel (12 communes/ville)
- ✅ `seoTrackingData.ts` : Suivi statut toutes villes Pilier + Secondaires

---

## Règle essentielle

> **Une page ville ne doit jamais chercher à tout faire.**
> 
> Elle explique pourquoi et comment le service existe dans cette ville, puis redirige vers les pages services.

---

## Checklist rapide avant publication

```
[ ] H1 contient le nom de la ville
[ ] Description mentionne département + région
[ ] 8 services listés avec liens
[ ] nearbyTowns = 12 communes Excel minimum
[ ] FAQ contient 4-6 questions locales
[ ] CTA affiche numéro téléphone + nom ville
[ ] Liens vers autres villes de la région
[ ] Breadcrumb : Accueil > Région > Ville
```
