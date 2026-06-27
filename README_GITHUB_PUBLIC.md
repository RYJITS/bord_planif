# Bord PLANIF

## Rapport complet

Ce depot public presente le concept, les fonctions, les choix de conception, les outils utilises, les commandes locales et les captures d'ecran de l'application. Il est genere par l'orchestrateur uniquement apres validation de publication publique.

## Concept

Tableau de bord de planification autour d'un classeur metier. Il sert a organiser les lignes de suivi, les jalons, les priorites et les donnees utiles au pilotage.

Transformer un fichier de planification en cockpit lisible, suivi par l'orchestrateur et pret a etre relie au hub sans ecraser les donnees source.

Public vise: Usage operationnel: planification, suivi de priorites, lecture rapide d'un planning et preparation d'une interface plus claire.


## Fonctionnement de l'application

L'application ouvre une interface type Excel avec ruban d'actions, onglets de feuilles, barre de formule, grille paginee, filtres, mode compact/complet et edition de lignes. Elle genere environ 14 905 lignes fictives sur 18 feuilles: PLANING, BUFFER, CLIENT, SUIVI_MET, capacites CAPAMET, metteurs en train, archives, PRT, starts, machines, confirmations, gammes, nomenclature et versions production. Les calculs JavaScript simulent les taux de couverture, buffers, capacites, retards, statuts planif et heatmaps de charge. Les modifications restent dans le navigateur via localStorage et les tables peuvent etre importees/exportees en CSV.

## Fonctions de l'application

- Reference le classeur de planification.
- Prepare une lecture plus visuelle des jalons et priorites.
- Garde le suivi orchestrateur et les statuts de publication separes.
- Peut etre presente dans le hub avec une vignette dediee.
- Naviguer dans 18 feuilles de planification type Excel
- Lire un cockpit KPI avec risques, lignes actives, capacites et graphiques canvas
- Filtrer par statut, semaine, recherche et groupes de colonnes
- Consulter les vues Planning, Buffer, Capacite, MET, Sources et Audit
- Ajouter, modifier ou supprimer des lignes fictives
- Simuler une actualisation et creer un snapshot d'archive
- Importer et exporter des tables en CSV
- Conserver les changements locaux dans le navigateur

## Actualisations et evolution

- Statut courant: PUBLIC_READY.
- Securite: OK_PUBLIC.
- Fonctionnement: FONCTIONNEL.

## Options et conception

Le projet a ete concu comme un clone fonctionnel et prudent du classeur metier: garder l'ergonomie et la logique de pilotage sans publier les valeurs sensibles du fichier source. La page web separe les jeux fictifs, les calculs recalcules en JavaScript, les vues specialisees et les actions de simulation pour pouvoir presenter ou tester le fonctionnement sans ouvrir le classeur original.

### Outils, IA et moteurs utilises

- Classeur source BORD_DEC_MRPC17.xlsm analyse en structure seulement
- Interface HTML/CSS/JavaScript autonome
- Grille type Excel
- Ruban d'actions
- Barre de formule explicative
- Canvas pour graphiques KPI
- localStorage pour overrides et preferences
- Import/export CSV
- JavaScript vanilla
- Seed deterministe pour donnees fictives
- Recalcul de formules Excel en fonctions JS
- Pagination et tri cote client
- Filtres statut/semaine/recherche
- Edition CRUD en modale
- Canvas charts
- Persistance localStorage
- Design Windows 11 / Fluent

### Options techniques detectees

- Type de projet: static-html
- Lien public: https://planner.c2rdesign.com/
- Statut securite: OK_PUBLIC

### Stack et dependances principales

- HTML statique
- JavaScript vanilla
- Seed deterministe pour donnees fictives
- Recalcul de formules Excel en fonctions JS
- Pagination et tri cote client
- Filtres statut/semaine/recherche
- Edition CRUD en modale
- Canvas charts
- Persistance localStorage
- Design Windows 11 / Fluent

### Scripts disponibles

- Aucun script detecte.

### Dependances applicatives

- Aucune dependance applicative detectee.

### Dependances de developpement

- Aucune dependance de developpement detectee.

## Automatisations et comportements internes

- Generation deterministe des donnees fictives au chargement
- Recalcul automatique des lignes planning et buffer apres edition
- Sauvegarde locale des ajouts, modifications et suppressions
- Simulation de refresh PowerQuery et journal d'actualisation
- Creation de snapshots d'archive depuis les lignes planning
- Import CSV avec materialisation dans les overrides
- Export CSV de la vue active
- Rendu automatique des graphiques selon la vue

## Installation locale

```powershell
# Aucune installation requise
```

## Lancement

```powershell
Start-Process .\index.html
```

## Captures d'ecran

![Capture capture](docs/github-captures/05-bord-planif-2026-06-20_1858-cockpit.png)

![Capture capture](docs/github-captures/05-bord-planif-2026-06-20_1858-planning.png)

## Variables d'environnement

Aucune variable d'environnement n'a ete detectee par l'orchestrateur.

## Securite

Ne jamais publier `.env`, tokens, sessions, logs sensibles, cles privees ou donnees personnelles.
