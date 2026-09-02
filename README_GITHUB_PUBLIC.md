# Bord PLANIF - Toolkit de planification

## Presentation

Bord PLANIF - Toolkit de planification est presente ici avec son concept, ses fonctions, ses choix de conception et ses informations d'utilisation.

## Demarrage rapide

### Pre-requis

- Git installe localement.

### Installer et lancer

```powershell
git clone https://github.com/RYJITS/bord_planif.git
cd bord_planif
# Aucune installation requise
Start-Process .\index.html
```

## Installation locale

Aucune installation applicative standard n'est requise. Ouvrir index.html dans un navigateur moderne avec JavaScript active. Pour une utilisation plus confortable, le dossier peut aussi etre servi par un petit serveur local.

### Pre-requis
- Verifier les pre-requis propres au projet dans le README.

### Commandes
```powershell
git clone https://github.com/RYJITS/bord_planif.git
cd bord_planif
# Aucune installation requise
```

## Lancement

```powershell
Start-Process .\index.html
```

## Utilisation

Ouvrir l'application, choisir une vue, filtrer les lignes utiles, controler les indicateurs du cockpit, corriger ou completer les lignes de planning, puis exporter ou archiver un etat lorsque c'est necessaire.

## Concept

Application web de planification MRP pour suivre les lignes a planifier, les priorites, les capacites, les retards et les indicateurs de pilotage.

Donner une vue claire et exploitable du planning operationnel: savoir quoi traiter, quoi surveiller, ou sont les blocages et quelles capacites restent disponibles.

Public vise: Planificateurs, responsables d'activite, equipes supply chain et production qui veulent piloter un planning sans se perdre dans un tableau brut.


## Fonctionnement de l'application

L'application s'ouvre dans un navigateur et presente un cockpit avec indicateurs, ruban d'actions, vues specialisees, grille paginee, filtres et edition de lignes. L'utilisateur peut passer d'une vue planning a une vue capacite ou audit, filtrer les informations, modifier une ligne, simuler une actualisation, exporter les donnees en CSV ou creer un snapshot. Les changements restent sauvegardes localement dans le navigateur.

## Fonctions de l'application

- Afficher un cockpit KPI de planification
- Naviguer dans les vues Planning, Buffer, Capacite, MET, Sources et Audit
- Filtrer les lignes par statut, semaine, recherche et groupes de colonnes
- Identifier rapidement les retards, risques, blocages et priorites
- Modifier, ajouter ou supprimer des lignes de planning dans l'interface
- Recalculer les indicateurs de couverture, capacite, buffer et retard
- Afficher des graphiques et heatmaps de charge
- Importer et exporter des tables en CSV

## Actualisations et evolution

- Fiche recentree sur l'usage de l'application et non sur la reconstruction technique initiale
- Retrait du lien application incorrect tant qu'aucun lien public fiable n'est valide
- Lien GitHub conserve comme source publique correcte
- Fiche recentree sur l'usage de l'application
- Retrait du lien application incorrect
- Conservation du lien GitHub public correct

## Comment le projet a ete reflechi et construit

Le projet est une application statique HTML, CSS et JavaScript concue comme un outil de pilotage leger. La logique cote client gere la navigation, les filtres, les calculs d'indicateurs, les graphiques, les heatmaps, les modales d'edition, l'import/export CSV et la persistance locale. Le jeu de demonstration reste fictif pour presenter les fonctions sans exposer de donnees sensibles.

### Outils, IA et moteurs utilises

- HTML5, CSS3 et JavaScript vanilla
- Canvas pour les graphiques KPI
- localStorage pour la persistance
- Import/export CSV natif
- Architecture statique HTML/CSS/JS
- Calculs cote client
- Pagination et tri cote client
- Filtres synchronises
- Modales d'edition
- Rendu dynamique des graphiques
- Persistance locale

### Options techniques detectees

- Type de projet: static-html

### Stack et dependances principales

- HTML statique
- Calculs cote client
- Pagination et tri cote client
- Filtres synchronises
- Modales d'edition
- Rendu dynamique des graphiques
- Persistance locale

### Scripts disponibles

- Aucun script detecte.

### Dependances applicatives

- Aucune dependance applicative detectee.

### Dependances de developpement

- Aucune dependance de developpement detectee.

## Automatisations et comportements internes

- Generation du jeu de demonstration au chargement
- Recalcul des indicateurs apres edition
- Sauvegarde automatique des modifications dans localStorage
- Rendu dynamique des graphiques selon la vue active
- Simulation d'actualisation et journalisation des actions

## Captures d'ecran

![Capture capture](docs/github-captures/05-bord-planif-2026-06-20_1858-cockpit.png)

![Capture capture](docs/github-captures/05-bord-planif-2026-06-20_1858-planning.png)

## Variables d'environnement

Aucune variable d'environnement n'est requise d'apres les fichiers publies.

## Securite

Ne jamais publier `.env`, tokens, sessions, logs sensibles, cles privees ou donnees personnelles.
