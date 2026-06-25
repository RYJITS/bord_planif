# Bord Planif - V2

Application web locale reconstruite depuis l'analyse structurelle de `BORD_DEC_MRPC17.xlsm`.

La V2 vise un clone fonctionnel du classeur : onglets de feuilles, ruban d'actions, barre de formule, grille type Excel, indicateurs, logique de calcul, archivage, import/export et modification des lignes.

## Fichiers

- `index.html` : point d'entrée de l'application.
- `styles.css` : design Windows 11 / Fluent, responsive.
- `app.js` : génération de données fictives, vues, calculs, CRUD, filtres, graphiques, import/export CSV.

## Données

Aucune donnée réelle du fichier Excel n'est reprise.

L'application conserve uniquement :

- la structure du classeur ;
- le nombre et le rôle des feuilles ;
- les volumes de lignes/colonnes ;
- les familles de formules ;
- les indicateurs et actions macro observables.

Volumétrie initiale générée : 14 905 lignes fictives réparties sur 18 feuilles.

Les ajouts, modifications, suppressions et actions simulées sont stockés localement dans le navigateur via `localStorage`. Les données de base sont régénérées par seed déterministe.

## Fonctions principales

- vue `Classeur` avec 18 onglets de feuilles ;
- ruban type Excel : actualisation, archivage, filtres, production, suppression, journal, ajout, import et export ;
- barre de formule synthétique pour expliquer les calculs de chaque feuille ;
- grille paginée avec mode compact/complet ;
- ajout, modification et suppression de lignes ;
- cockpit KPI avec graphiques canvas ;
- vues spécialisées Planning, Buffer, Capacité, MET, Sources et Audit ;
- import/export CSV ;
- journal local des actions.

## Utilisation

Ouvrir `index.html` dans un navigateur moderne.
