# Brouillon contenu fiche - Bord PLANIF - Cockpit de planification MRP

## Resume
Application web autonome simulant un cockpit de planification MRP à partir d'une structure métier analysée, avec interface type Excel et données fictives.

## A quoi sert le projet
Fournir une interface visuelle et interactive pour organiser, suivre et piloter les lignes de planification, jalons, priorités et données opérationnelles sans exposer les données sensibles du fichier source.

## Fonctionnement
L'application s'exécute dans un navigateur moderne et présente une interface composée d'un ruban d'actions, de 18 onglets de feuilles (PLANING, BUFFER, CLIENT, SUIVI_MET, CAPAMET, etc.), d'une barre de formule, d'une grille paginée, de filtres, d'un mode compact/complet et d'une édition de lignes. Elle génère environ 14 905 lignes fictives réparties sur les feuilles, avec des calculs JavaScript simulant les taux de couverture, buffers, capacités, retards et heatmaps de charge. Les modifications sont sauvegardées localement via localStorage et peuvent être importées/exportées en CSV.

## Construction
Le projet a été conçu comme un clone fonctionnel et prudent du classeur métier, en séparant les jeux de données fictifs, les calculs recalculés en JavaScript, les vues spécialisées et les actions de simulation. L'architecture repose sur une interface HTML/CSS/JavaScript autonome, avec une séparation claire entre la logique métier (simulée) et l'interface utilisateur. Les choix de design incluent une grille type Excel, un ruban d'actions, une barre de formule explicative, des graphiques Canvas pour les KPI, et une persistance locale des overrides. Le projet utilise une seed déterministe pour générer les données fictives et recalcule dynamiquement les indicateurs après chaque édition. L'approche CRUD avec modales permet une édition intuitive des lignes.

## Installation
Aucune installation applicative standard n'est requise. L'application est conçue pour être exécutée localement en ouvrant le fichier index.html dans un navigateur moderne. Prérequis : navigateur web (Chrome, Firefox, Edge, Safari) avec JavaScript activé. Pour une utilisation avancée, il est possible de servir le projet via un serveur local (ex: Live Server dans VS Code) pour éviter les restrictions de sécurité liées au chargement de fichiers locaux.

## Utilisation
1. Ouvrir index.html dans un navigateur. 2. Utiliser le ruban d'actions pour naviguer entre les feuilles (onglets). 3. Appliquer des filtres (statut, semaine, recherche) pour affiner l'affichage. 4. Cliquer sur une ligne pour l'éditer via la modale dédiée. 5. Utiliser les commandes du ruban pour importer/export CSV, simuler un refresh ou créer un snapshot. 6. Les modifications sont sauvegardées automatiquement dans le navigateur et persistent entre les sessions.

## Fonctions
- Navigation multi-feuilles (18 onglets)
- Affichage de cockpits KPI avec risques et indicateurs
- Filtrage avancé (statut, semaine, recherche, groupes de colonnes)
- Édition CRUD des lignes fictives
- Simulation de refresh et création de snapshots
- Import/export CSV des tables
- Persistance locale des modifications
- Génération déterministe de 14 905 lignes fictives sur 18 feuilles
- Recalcul dynamique des indicateurs (taux de couverture, buffers, capacités, retards)
- Affichage de heatmaps de charge et graphiques KPI
- Design responsive et compatible Windows 11 / Fluent
