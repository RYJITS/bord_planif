# Brouillon contenu fiche - Bord PLANIF - Toolkit de planification

## Resume
Bord PLANIF est une application web de planification MRP pour suivre les lignes a planifier, les priorites, les capacites, les retards et les indicateurs de pilotage.

## A quoi sert le projet
L'application sert a piloter un planning operationnel sans se perdre dans un tableau brut. Elle aide a voir ce qui doit etre planifie, ce qui est bloque, ce qui est sous surveillance, les capacites disponibles et les priorites a traiter.

## Fonctionnement
L'application s'ouvre dans un navigateur et presente un cockpit avec indicateurs, ruban d'actions, vues specialisees, grille paginee, filtres et edition de lignes. L'utilisateur peut passer d'une vue planning a une vue capacite ou audit, filtrer les informations, modifier une ligne, simuler une actualisation, exporter les donnees en CSV ou creer un snapshot. Les changements restent sauvegardes localement dans le navigateur.

## Construction
Le projet est une application statique HTML, CSS et JavaScript. La logique cote client gere la navigation, les filtres, les calculs d'indicateurs, les graphiques, les heatmaps, les modales d'edition, l'import/export CSV et la persistance locale. Le jeu de demonstration reste fictif pour presenter les fonctions sans exposer de donnees sensibles.

## Installation
Aucune installation applicative standard n'est requise. Ouvrir `index.html` dans un navigateur moderne avec JavaScript active. Pour une utilisation plus confortable, le dossier peut aussi etre servi par un petit serveur local.

## Utilisation
Ouvrir l'application, choisir une vue, filtrer les lignes utiles, controler les indicateurs du cockpit, corriger ou completer les lignes de planning, puis exporter ou archiver un etat lorsque c'est necessaire.

## Fonctions
- Cockpit KPI avec risques et indicateurs.
- Navigation multi-vues de planification.
- Filtrage par statut, semaine, recherche et groupe de colonnes.
- Edition CRUD des lignes avec validation integree.
- Recalcul dynamique des couvertures, capacites, buffers et retards.
- Graphiques et heatmaps de charge.
- Snapshots d'archive.
- Import/export CSV.
- Persistance locale des modifications.
- Interface responsive compatible navigateur moderne.
