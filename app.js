"use strict";

const STORAGE_KEY = "bordPlanifSyntheticOverrides.v1";
const UI_KEY = "bordPlanifUiState.v1";
const BASE_SEED = 20260619;

function makeWideColumns(baseColumns, totalColumns, prefix = "C") {
  const columns = baseColumns.slice();
  while (columns.length < totalColumns) {
    columns.push(`${prefix}${String(columns.length + 1).padStart(3, "0")}`);
  }
  return columns.slice(0, totalColumns);
}

const PLANNING_COLUMNS = [
  "KEY",
  "Taux.C",
  "Diff",
  "Taux.C-1",
  "% ok Buffer Cible après DEC",
  "% ok Cible Prod après DEC",
  "Capa Planif",
  "CAPA",
  "Moy Ouput",
  "RETARD",
  "Besoin Hebdo",
  "Besoin 52 sem",
  "WIP Après Dec",
  "Stock OK",
  "Prochain Start",
  "Taillage",
  "Roulage",
  "TS",
  "TP",
  "Remarques Planning",
  "Sem Besoin client",
  "SEM MET",
  "PROD VER.",
  "Article",
  "Designation",
  "Calibre",
  "MRPC",
  "No Mach",
  "W.C",
  "Type Mach",
  "Machines",
  "N° Met",
  "Dates Insertions",
  "Délais Planification",
  "Délais PROD",
  "Sem",
  "Année",
  "PLANIF",
  "Etat Machine",
  "Article Matière",
  "Matière",
  "TC/S",
  "Capa-Machine/SEM",
  "CAPA Prod",
  "Capa planifier",
  "Output/Moy 2s /ITEMS",
  "NBR_SEM",
  "Client"
];

const BUFFER_COLUMNS = [
  "Niv Nom",
  "Component",
  "Component description",
  "MS",
  "ProcType",
  "MRPC",
  "MRPC Name",
  "Caliber",
  "Backlog",
  "besoin Hebdo max",
  "Reste à livrer semaine actuelle",
  "Stock OK",
  "Stock Q",
  "TOTAL WIP OK",
  "Besoin 12 mois",
  "besoin 4,5 mois",
  "besoin 2 mois",
  "Wip ok après dec ",
  "Stock ok + WIP ok apres dec",
  "Grp techno Dec",
  "Buffer Cible",
  "% ok Buffer Cible après DEC",
  "Cible Prod",
  "% ok Cible Prod après DEC",
  "Nb semaine Manco Y-3",
  "Nb semaine Manco Y-2",
  "Nb semaine Manco Y-1",
  "Nb semaine Manco Y",
  "Nb semaine Manco depuis Y-3",
  "WIP Attente Décision",
  "WIP Aging Att Décision",
  "WIP REWORK",
  "WIP Aging REWORK",
  "Date pour Prio",
  "Prio",
  "Client",
  "Date rupture",
  "% Scrap Y-5",
  "% Scrap Y-4",
  "% Scrap Y-3",
  "% Scrap Y-2",
  "% Scrap Y-1",
  "% Scrap moy. 5Y",
  "nb week Rec réclamation Y-3",
  "nb week Rec réclamation Y-2",
  "nb week Rec réclamation Y-1",
  "nb week Rec réclamation Y",
  "nb week Rec réclamation depuis Y-3",
  "Nb Réclamation",
  "DEC",
  "TAIL",
  "TDS1",
  "ROUL",
  "TDS2",
  "T0",
  "WIP DEC",
  "Waiting day DEC",
  "WIP TAIL1",
  "Waiting day TAIL1",
  "WIP TAIL2",
  "Waiting day TAIL2",
  "WIP DECOUP",
  "Waiting day DECOUP",
  "WIP TDS",
  "Waiting day TDS",
  "WIP ROUL1",
  "Waiting day ROUL",
  "WIP ROUL 2",
  "Waiting day ROUL2",
  "WIP TDS 2",
  "Waiting day TDS2",
  "WIP CTRL",
  "Waiting day CTRL",
  "WIP T0",
  "Waiting day T0",
  "WIP CTRL T0",
  "Waiting day CTRL T0",
  "WIP Emb",
  "Waiting day Emb",
  "Mise en stock J-1",
  "Mise en stock J-2",
  "Mise en stock J-3",
  "Mise en stock J-4",
  "Mise en stock J-5",
  "Mise en stock J-6",
  "Mise en stock J-7",
  "Mise en stock global S-1",
  "Expé J-1",
  "Expé J-2",
  "Expé J-3",
  "Expé J-4",
  "Expé J-5",
  "Expé J-6",
  "Expé J-7",
  "Expé global S-1",
  "STATUT PLANIF",
  "STATUT PROD",
  "IND.KEY PLANIF"
];

const DATASETS = {
  planning: {
    label: "Planning",
    table: "T_Planning",
    rows: 146,
    icon: "calendar-clock",
    columns: PLANNING_COLUMNS,
    computed: [
      "Taux.C",
      "Diff",
      "% ok Buffer Cible après DEC",
      "% ok Cible Prod après DEC",
      "Capa Planif",
      "Délais Planification",
      "Délais PROD",
      "PLANIF",
      "Etat Machine",
      "Capa planifier",
      "NBR_SEM"
    ],
    compact: [
      "KEY",
      "Article",
      "Designation",
      "MRPC",
      "Machines",
      "Sem",
      "Année",
      "Besoin Hebdo",
      "Stock OK",
      "WIP Après Dec",
      "Taux.C",
      "% ok Buffer Cible après DEC",
      "RETARD",
      "PLANIF",
      "Etat Machine",
      "Client"
    ]
  },
  buffer: {
    label: "Buffer",
    table: "DB_CEWB_Nomenclature__2",
    rows: 641,
    icon: "boxes",
    columns: BUFFER_COLUMNS,
    computed: [
      "Stock ok + WIP ok apres dec",
      "% ok Buffer Cible après DEC",
      "% ok Cible Prod après DEC",
      "Prio",
      "STATUT PLANIF",
      "STATUT PROD",
      "IND.KEY PLANIF"
    ],
    compact: [
      "Component",
      "Component description",
      "MRPC",
      "Caliber",
      "Backlog",
      "besoin Hebdo max",
      "Stock OK",
      "TOTAL WIP OK",
      "Buffer Cible",
      "% ok Buffer Cible après DEC",
      "Cible Prod",
      "% ok Cible Prod après DEC",
      "Prio",
      "Client",
      "STATUT PLANIF",
      "STATUT PROD"
    ]
  },
  clients: {
    label: "Clients",
    table: "CLIENT",
    rows: 1542,
    icon: "users",
    columns: ["Client", "Article", "Date besoin", "Jours ouvrés", "Statut"]
  },
  suiviMet: {
    label: "Suivi MET",
    table: "SUIVI_MET",
    rows: 2177,
    icon: "clipboard-list",
    columns: makeWideColumns(["MET", "Article", "Machine", "Opération", "Date début", "Date fin", "Qté", "Statut", "Commentaire"], 84, "SM")
  },
  capacityW16: {
    label: "Capacité W16",
    table: "CAPAMETW16",
    rows: 102,
    icon: "activity",
    columns: makeWideColumns(["Semaine", "Machine", "Type Mach", "Charge planifiée", "Capacité dispo", "Taux charge", "Attente", "Statut"], 147, "W16")
  },
  capacityW15: {
    label: "Capacité W15",
    table: "CAPAMETW15",
    rows: 129,
    icon: "activity",
    columns: makeWideColumns(["Semaine", "Machine", "Type Mach", "Charge planifiée", "Capacité dispo", "Taux charge", "Attente", "Statut"], 97, "W15")
  },
  metteurs: {
    label: "Metteurs",
    table: "Metteur en train",
    rows: 51,
    icon: "user-cog",
    columns: makeWideColumns(["Metteur", "Machine", "Semaine", "Ordre", "Article", "Temps prévu", "Temps réalisé", "Ecart", "Statut"], 60, "MT")
  },
  statusCatalog: {
    label: "Statuts",
    table: "O",
    rows: 49,
    icon: "list-checks",
    columns: makeWideColumns(["Status Planing", "Famille", "Couleur", "Actif"], 24, "O")
  },
  bang: {
    label: "!",
    table: "!",
    rows: 20,
    icon: "badge-alert",
    columns: makeWideColumns(["Paramètre", "Valeur", "Famille", "Actif"], 8, "CFG")
  },
  refreshLog: {
    label: "Refresh log",
    table: "Refresh_Log",
    rows: 176,
    icon: "history",
    columns: ["Horodatage", "Action", "Table", "Lignes", "Durée ms", "Résultat", "Message"]
  },
  archive: {
    label: "Archive",
    table: "03_Archive_BORD_DEC",
    rows: 2487,
    icon: "archive",
    columns: ["Taux.C", "% ok Buffer Cible après DEC", "% ok Cible Prod après DEC", "Besoin Hebdo", "Remarques Planning", "Article", "Date_Archive", "Semaines", "SemainesArticle"]
  },
  prt: {
    label: "PRT",
    table: "PRT",
    rows: 31,
    icon: "component",
    columns: ["Group", "Description", "Target qty", "Basic fin.", "MRPC", "TDC", "Component", "Component description"]
  },
  starts: {
    label: "Starts",
    table: "COOIS_DELAIS_START",
    rows: 401,
    icon: "timer",
    columns: ["Material", "Prochain Start"]
  },
  machines: {
    label: "Machines",
    table: "PROD",
    rows: 240,
    icon: "factory",
    columns: ["STATUT", "N° MACH.", "N° MACH. ALT.", "DESC. MACH.", "INV. MACH.", "FAMILLE", "ART.", "ART. DESC.", "CALIBRE", "PLAN", "TDC", "TDO", "JOURS", "PCES / SEM.", "ART. MAT.", "ART. MAT. DESC.", "KG/1000", "OPERATEUR", "CDF", "TYPE", "WC DESC.", "WC", "CHECK WC", "CROM", "ETAT", "ARTICLE", "PERSONNE", "MachItem"]
  },
  confirmations: {
    label: "Confirmations",
    table: "ZCONF",
    rows: 3258,
    icon: "check-check",
    columns: ["Material", "Yield", "Work Ctr.1", "Entered"]
  },
  routing: {
    label: "Gamme",
    table: "DB_ZPPROUTLIST_ALL",
    rows: 955,
    icon: "route",
    columns: ["Material", "Material Description", "Operation short text", "Work Ctr", "Group", "Grp.Countr", "User Field", "MaterialGroupGrp", "DB_ZETAPV.Ver.", "DB_ZETAPV.Text", "DB_ZETAPV.Valid from", "ArtVer."]
  },
  bom: {
    label: "Nomenclature",
    table: "DB_CEWB_Nomenclature",
    rows: 1001,
    icon: "network",
    columns: ["Material", "Component", "Component description", "ItemAltBOM", "DB_ZETAPV.Ver.", "DB_ZETAPV.Text", "MatVer."]
  },
  versions: {
    label: "Versions",
    table: "DB_ZETAPV",
    rows: 1499,
    icon: "git-branch",
    columns: ["Column1", "GroupGRC", "Plnt", "Material", "Material Description", "Ver.", "Text", "Prod.Vers.Locked", "Check date", "Valid from", "Valid to", "LSzeFrom", "LotSzeTo", "AltBOM", "BOM Usg", "TLType", "ProdS", "_1", "ItemALtbom"]
  }
};

const EXCEL_PROFILE = {
  file: "BORD_DEC_MRPC17.xlsm",
  sheets: 18,
  formulas: 11177,
  tables: 12,
  charts: { bar: 9, line: 9 },
  pivots: 2,
  definedNames: 93,
  queryTables: 8,
  externalLinks: 1,
  vba: {
    modules: 26,
    procedures: 46,
    lines: 982,
    functions: 9,
    subs: 37
  },
  formulaFamilies: [
    { label: "Logique", count: 10507 },
    { label: "Agrégation", count: 3299 },
    { label: "Dates", count: 886 },
    { label: "Texte", count: 732 },
    { label: "Recherche", count: 64 },
    { label: "Volatile", count: 297 }
  ],
  macroRoles: [
    { label: "Actualisation", count: 15 },
    { label: "Navigation", count: 14 },
    { label: "Mise en forme", count: 11 },
    { label: "Archive/export", count: 10 },
    { label: "Dialogue", count: 10 },
    { label: "Filtres", count: 5 }
  ]
};

const SHEET_CONFIGS = [
  { name: "PLANING", dataset: "planning", rows: 149, dataRows: 146, cols: 48, formulas: 3065, tables: 1, charts: 0, images: 1, merged: 1, note: "Table planning principale" },
  { name: "BUFFER", dataset: "buffer", rows: 649, dataRows: 641, cols: 98, formulas: 1923, tables: 1, charts: 0, images: 1, merged: 3, note: "Buffer et nomenclature décision" },
  { name: "CLIENT", dataset: "clients", rows: 1543, dataRows: 1542, cols: 5, formulas: 1542, tables: 0, charts: 0, images: 0, merged: 0, note: "Calcul client et jours ouvrés" },
  { name: "SUIVI_MET", dataset: "suiviMet", rows: 2178, dataRows: 2177, cols: 84, formulas: 0, tables: 0, charts: 0, images: 0, merged: 0, note: "Suivi opérationnel MET" },
  { name: "CAPAMETW16", dataset: "capacityW16", rows: 103, dataRows: 102, cols: 147, formulas: 1846, tables: 0, charts: 4, images: 0, merged: 0, note: "Capacité semaine W16" },
  { name: "CAPAMETW15", dataset: "capacityW15", rows: 130, dataRows: 129, cols: 97, formulas: 2270, tables: 0, charts: 5, images: 0, merged: 9, note: "Capacité semaine W15" },
  { name: "Metteur en train", dataset: "metteurs", rows: 52, dataRows: 51, cols: 60, formulas: 531, tables: 0, charts: 0, images: 0, merged: 0, note: "Plan de charge metteurs" },
  { name: "O", dataset: "statusCatalog", rows: 50, dataRows: 49, cols: 24, formulas: 0, tables: 2, charts: 0, images: 3, merged: 0, note: "Paramètres et statuts" },
  { name: "!", dataset: "bang", rows: 21, dataRows: 20, cols: 8, formulas: 0, tables: 0, charts: 0, images: 0, merged: 0, note: "Configuration courte" },
  { name: "Refresh_Log", dataset: "refreshLog", rows: 177, dataRows: 176, cols: 7, formulas: 0, tables: 0, charts: 0, images: 0, merged: 0, note: "Journal d'actualisation" },
  { name: "03_Archive_BORD_DEC", dataset: "archive", rows: 2488, dataRows: 2487, cols: 9, formulas: 0, tables: 1, charts: 0, images: 0, merged: 0, note: "Archive décision" },
  { name: "PRT", dataset: "prt", rows: 32, dataRows: 31, cols: 8, formulas: 0, tables: 1, charts: 0, images: 0, merged: 0, note: "Table PRT" },
  { name: "COOIS_DELAIS_START", dataset: "starts", rows: 402, dataRows: 401, cols: 2, formulas: 0, tables: 1, charts: 0, images: 0, merged: 0, note: "Délais prochains starts" },
  { name: "ListMach", dataset: "machines", rows: 241, dataRows: 240, cols: 28, formulas: 0, tables: 1, charts: 0, images: 0, merged: 0, note: "Liste machines" },
  { name: "ZCONF", dataset: "confirmations", rows: 3259, dataRows: 3258, cols: 4, formulas: 0, tables: 1, charts: 0, images: 0, merged: 0, note: "Confirmations production" },
  { name: "DB_ZPPROUTLIST_ALL", dataset: "routing", rows: 956, dataRows: 955, cols: 12, formulas: 0, tables: 1, charts: 0, images: 0, merged: 0, note: "Gamme et opérations" },
  { name: "DB_CEWB_Nomenclature", dataset: "bom", rows: 1002, dataRows: 1001, cols: 7, formulas: 0, tables: 1, charts: 0, images: 0, merged: 0, note: "Nomenclature source" },
  { name: "DB_ZETAPV", dataset: "versions", rows: 1500, dataRows: 1499, cols: 19, formulas: 0, tables: 1, charts: 0, images: 0, merged: 0, note: "Versions production" }
];

const NAV_ITEMS = [
  { id: "workbook", label: "Classeur", icon: "table-properties" },
  { id: "dashboard", label: "Cockpit", icon: "layout-dashboard" },
  { id: "planning", label: "Planning", icon: "calendar-clock", dataset: "planning" },
  { id: "buffer", label: "Buffer", icon: "boxes", dataset: "buffer" },
  { id: "capacity", label: "Capacité", icon: "activity" },
  { id: "met", label: "MET", icon: "user-cog", dataset: "suiviMet" },
  { id: "sources", label: "Sources", icon: "database" },
  { id: "audit", label: "Audit Excel", icon: "scan-search" }
];

const SOURCE_DATASETS = [
  "clients",
  "statusCatalog",
  "bang",
  "refreshLog",
  "archive",
  "prt",
  "starts",
  "machines",
  "confirmations",
  "routing",
  "bom",
  "versions"
];

const OPTION_SETS = {
  planif: ["A planifier", "Planifié", "Surveiller", "Bloqué", "Terminé"],
  machine: ["Disponible", "Saturée", "Réglage", "Maintenance", "Attente matière"],
  prod: ["OK", "A risque", "Critique", "En attente"],
  mrpc: ["M10", "M20", "M30", "M40", "M50", "M60"],
  typeMach: ["DEC", "TAIL", "ROUL", "TDS", "CTRL", "EMB", "T0"],
  client: ["Orion Luxe", "Helvetic Motion", "Nova Parts", "Alpine Tools", "Blue Forge", "Atelier Vector", "Meca Nord", "Linea Systems"],
  caliber: ["A12", "B18", "C24", "D32", "E48", "F64"],
  status: ["OK", "A risque", "Critique", "En cours", "Terminé", "Bloqué"],
  operators: ["L. Martin", "S. Keller", "A. Morel", "N. Bernard", "E. Dubois", "C. Girard", "T. Meyer", "J. Favre"]
};

const COLUMN_GROUPS = {
  planning: [
    { id: "scrap", label: "SCRAP", columns: ["Diff", "Taux.C-1"] },
    { id: "tp", label: "TP", columns: ["TP", "TS", "TC/S"] },
    { id: "wip", label: "WIP", columns: ["WIP Après Dec"] },
    { id: "stock", label: "Stock DEC", columns: ["Stock OK", "Article Matière", "Matière"] },
    { id: "clientNeed", label: "Besoin client", columns: ["Sem Besoin client", "Client"] },
    { id: "buffer", label: "Buffer", columns: ["% ok Buffer Cible après DEC", "% ok Cible Prod après DEC"] },
    { id: "machine", label: "Machine", columns: ["No Mach", "W.C", "Type Mach", "Machines", "N° Met", "Etat Machine"] }
  ],
  buffer: [
    { id: "mancos", label: "Mancos", columns: ["Nb semaine Manco Y-3", "Nb semaine Manco Y-2", "Nb semaine Manco Y-1", "Nb semaine Manco Y", "Nb semaine Manco depuis Y-3"] },
    { id: "scrap", label: "SCRAP", columns: ["% Scrap Y-5", "% Scrap Y-4", "% Scrap Y-3", "% Scrap Y-2", "% Scrap Y-1", "% Scrap moy. 5Y"] },
    { id: "claims", label: "Réclamations", columns: ["nb week Rec réclamation Y-3", "nb week Rec réclamation Y-2", "nb week Rec réclamation Y-1", "nb week Rec réclamation Y", "nb week Rec réclamation depuis Y-3", "Nb Réclamation"] },
    { id: "wip", label: "WIP NOK", columns: ["WIP Attente Décision", "WIP Aging Att Décision", "WIP REWORK", "WIP Aging REWORK"] },
    { id: "expedition", label: "Expédition", columns: ["Expé J-1", "Expé J-2", "Expé J-3", "Expé J-4", "Expé J-5", "Expé J-6", "Expé J-7", "Expé global S-1"] },
    { id: "stock", label: "Mise en stock", columns: ["Mise en stock J-1", "Mise en stock J-2", "Mise en stock J-3", "Mise en stock J-4", "Mise en stock J-5", "Mise en stock J-6", "Mise en stock J-7", "Mise en stock global S-1"] }
  ]
};

const state = {
  view: "workbook",
  activeSheet: "PLANING",
  sourceDataset: "clients",
  query: "",
  status: "all",
  week: "all",
  sort: { column: "", direction: "asc" },
  page: 1,
  pageSize: 25,
  columnPreset: "compact",
  density: "comfortable",
  groups: {
    planning: Object.fromEntries((COLUMN_GROUPS.planning || []).map((group) => [group.id, true])),
    buffer: Object.fromEntries((COLUMN_GROUPS.buffer || []).map((group) => [group.id, true]))
  }
};

let baseData = {};
let data = {};
let overrides = { edits: {}, added: {}, deleted: {} };
let activeEdit = null;

document.addEventListener("DOMContentLoaded", () => {
  loadUiState();
  baseData = buildBaseData();
  overrides = loadOverrides();
  data = materializeAll();
  wireDialog();
  renderNav();
  render();
});

function mulberry32(seed) {
  return function random() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildBaseData() {
  const random = mulberry32(BASE_SEED);
  const machines = makeGenericRows("machines", DATASETS.machines.rows, DATASETS.machines.columns, random);
  const planning = Array.from({ length: DATASETS.planning.rows }, (_, index) => buildPlanningRow(index, random));
  const buffer = Array.from({ length: DATASETS.buffer.rows }, (_, index) => buildBufferRow(index, random, planning));
  const clients = makeGenericRows("clients", DATASETS.clients.rows, DATASETS.clients.columns, random);
  const suiviMet = makeGenericRows("suiviMet", DATASETS.suiviMet.rows, DATASETS.suiviMet.columns, random);
  const capacityW16 = makeCapacityRows("capacityW16", DATASETS.capacityW16.rows, 16, random);
  const capacityW15 = makeCapacityRows("capacityW15", DATASETS.capacityW15.rows, 15, random);
  const metteurs = makeGenericRows("metteurs", DATASETS.metteurs.rows, DATASETS.metteurs.columns, random);
  const statusCatalog = makeStatusRows(random);
  const bang = makeGenericRows("bang", DATASETS.bang.rows, DATASETS.bang.columns, random);
  const refreshLog = makeRefreshRows(random);
  const archive = makeArchiveRows(random, planning);
  const prt = makeGenericRows("prt", DATASETS.prt.rows, DATASETS.prt.columns, random);
  const starts = makeGenericRows("starts", DATASETS.starts.rows, DATASETS.starts.columns, random);
  const confirmations = makeGenericRows("confirmations", DATASETS.confirmations.rows, DATASETS.confirmations.columns, random);
  const routing = makeGenericRows("routing", DATASETS.routing.rows, DATASETS.routing.columns, random);
  const bom = makeGenericRows("bom", DATASETS.bom.rows, DATASETS.bom.columns, random);
  const versions = makeGenericRows("versions", DATASETS.versions.rows, DATASETS.versions.columns, random);

  return {
    planning,
    buffer,
    clients,
    suiviMet,
    capacityW16,
    capacityW15,
    metteurs,
    statusCatalog,
    bang,
    refreshLog,
    archive,
    prt,
    starts,
    machines,
    confirmations,
    routing,
    bom,
    versions
  };
}

function buildPlanningRow(index, random) {
  const article = `ART-${String(700000 + index).padStart(6, "0")}`;
  const material = `MAT-${String(400000 + index * 3).padStart(6, "0")}`;
  const week = 12 + (index % 24);
  const year = 2026;
  const besoinHebdo = rndInt(random, 18, 360);
  const stockOk = rndInt(random, 0, Math.max(40, besoinHebdo * 2));
  const wip = rndInt(random, 0, Math.max(28, besoinHebdo * 2.3));
  const capa = rndInt(random, 80, 620);
  const capaProd = rndInt(random, 70, 540);
  const output = rndInt(random, 16, 180);
  const retard = Math.max(0, Math.round((besoinHebdo - stockOk * rndFloat(random, 0.2, 0.9)) * rndFloat(random, 0.05, 0.55)));
  const startDate = addDays("2026-03-02", index - 30 + rndInt(random, 0, 70));
  const row = {
    __id: `planning-${index + 1}`,
    KEY: `PLN-${String(index + 1).padStart(4, "0")}`,
    "Taux.C-1": pct(rndFloat(random, 0.42, 1.22)),
    CAPA: capa,
    "Moy Ouput": output,
    RETARD: retard,
    "Besoin Hebdo": besoinHebdo,
    "Besoin 52 sem": besoinHebdo * 52,
    "WIP Après Dec": wip,
    "Stock OK": stockOk,
    "Prochain Start": startDate,
    Taillage: rndInt(random, 0, 18),
    Roulage: rndInt(random, 0, 18),
    TS: rndInt(random, 0, 8),
    TP: rndInt(random, 0, 9),
    "Remarques Planning": pick(["", "Décision à confirmer", "Préparer outillage", "Risque capacité", "Priorité client"], random),
    "Sem Besoin client": week + rndInt(random, -2, 4),
    "SEM MET": week + rndInt(random, -1, 3),
    "PROD VER.": `PV-${rndInt(random, 1, 6)}`,
    Article: article,
    Designation: `Module fictif ${String.fromCharCode(65 + (index % 26))}-${rndInt(random, 10, 99)}`,
    Calibre: pick(OPTION_SETS.caliber, random),
    MRPC: pick(OPTION_SETS.mrpc, random),
    "No Mach": `M-${rndInt(random, 100, 999)}`,
    "W.C": `WC-${rndInt(random, 10, 90)}`,
    "Type Mach": pick(OPTION_SETS.typeMach, random),
    Machines: `Cellule ${pick(["Alpha", "Beta", "Gamma", "Delta", "Sigma"], random)}-${rndInt(random, 1, 9)}`,
    "N° Met": `MET-${rndInt(random, 10, 88)}`,
    "Dates Insertions": addDays("2026-02-01", index),
    Sem: week,
    Année: year,
    "Article Matière": material,
    Matière: `Alliage synthétique ${pick(["A", "B", "C", "D"], random)}`,
    "TC/S": rndFloat(random, 0.4, 4.8).toFixed(2),
    "Capa-Machine/SEM": rndInt(random, 80, 420),
    "CAPA Prod": capaProd,
    "Output/Moy 2s /ITEMS": rndInt(random, 10, 220),
    Client: pick(OPTION_SETS.client, random)
  };
  return recalculatePlanning(row);
}

function recalculatePlanning(row) {
  const need = toNumber(row["Besoin Hebdo"]);
  const stock = toNumber(row["Stock OK"]);
  const wip = toNumber(row["WIP Après Dec"]);
  const capa = toNumber(row.CAPA);
  const capaProd = toNumber(row["CAPA Prod"]);
  const retard = toNumber(row.RETARD);
  const bufferTarget = Math.max(1, need * 2.4);
  const prodTarget = Math.max(1, need * 1.8);
  const tauxC = clamp((stock + wip) / Math.max(1, need + retard), 0, 2.2);
  const bufferPct = clamp((stock + wip) / bufferTarget, 0, 2.4);
  const prodPct = clamp((stock + wip + capaProd * 0.25) / prodTarget, 0, 2.4);
  const previous = parsePercent(row["Taux.C-1"]) || Math.max(0.1, tauxC - 0.08);
  const planCapacity = Math.max(0, Math.min(capa, need + retard - stock - wip * 0.55));
  const delayPlanning = Math.max(0, Math.round((need + retard - stock) / Math.max(1, capa / 5)));
  const delayProd = Math.max(0, Math.round((need + retard - wip) / Math.max(1, capaProd / 5)));

  row["Taux.C"] = pct(tauxC);
  row.Diff = pct(tauxC - previous);
  row["% ok Buffer Cible après DEC"] = pct(bufferPct);
  row["% ok Cible Prod après DEC"] = pct(prodPct);
  row["Capa Planif"] = Math.round(planCapacity);
  row["Capa planifier"] = Math.round(planCapacity);
  row["Délais Planification"] = delayPlanning;
  row["Délais PROD"] = delayProd;
  row.NBR_SEM = Math.max(1, Math.ceil((need + retard) / Math.max(1, capa)));
  row.PLANIF = planStatus(bufferPct, retard, planCapacity);
  row["Etat Machine"] = machineStatus(capa, planCapacity, delayProd);
  return row;
}

function buildBufferRow(index, random, planning) {
  const plan = planning[index % planning.length];
  const need = rndInt(random, 8, 320);
  const stock = rndInt(random, 0, need * 3);
  const totalWip = rndInt(random, 0, need * 4);
  const wipAfter = rndInt(random, 0, need * 2);
  const bufferTarget = Math.max(1, rndInt(random, Math.round(need * 1.5), Math.round(need * 4.2)));
  const prodTarget = Math.max(1, rndInt(random, Math.round(need * 1.2), Math.round(need * 3.4)));
  const row = {
    __id: `buffer-${index + 1}`,
    "Niv Nom": 1 + (index % 4),
    Component: `CMP-${String(900000 + index).padStart(6, "0")}`,
    "Component description": `Composant fictif ${String.fromCharCode(65 + (index % 26))}-${rndInt(random, 100, 999)}`,
    MS: pick(["F", "E", "L", "N"], random),
    ProcType: pick(["Interne", "Externe", "Mixte"], random),
    MRPC: plan.MRPC || pick(OPTION_SETS.mrpc, random),
    "MRPC Name": `Planif ${pick(["Nord", "Sud", "Centre", "Atelier"], random)}`,
    Caliber: plan.Calibre || pick(OPTION_SETS.caliber, random),
    Backlog: rndInt(random, 0, need),
    "besoin Hebdo max": need,
    "Reste à livrer semaine actuelle": rndInt(random, 0, need),
    "Stock OK": stock,
    "Stock Q": rndInt(random, 0, need),
    "TOTAL WIP OK": totalWip,
    "Besoin 12 mois": need * 52,
    "besoin 4,5 mois": Math.round(need * 19.5),
    "besoin 2 mois": need * 8,
    "Wip ok après dec ": wipAfter,
    "Grp techno Dec": pick(OPTION_SETS.typeMach, random),
    "Buffer Cible": bufferTarget,
    "Cible Prod": prodTarget,
    "Nb semaine Manco Y-3": rndInt(random, 0, 9),
    "Nb semaine Manco Y-2": rndInt(random, 0, 10),
    "Nb semaine Manco Y-1": rndInt(random, 0, 12),
    "Nb semaine Manco Y": rndInt(random, 0, 13),
    "WIP Attente Décision": rndInt(random, 0, 80),
    "WIP Aging Att Décision": rndInt(random, 0, 44),
    "WIP REWORK": rndInt(random, 0, 40),
    "WIP Aging REWORK": rndInt(random, 0, 55),
    "Date pour Prio": addDays("2026-03-01", index % 130),
    Client: pick(OPTION_SETS.client, random),
    "Date rupture": addDays("2026-04-01", rndInt(random, -20, 180)),
    DEC: rndInt(random, 0, 90),
    TAIL: rndInt(random, 0, 90),
    TDS1: rndInt(random, 0, 90),
    ROUL: rndInt(random, 0, 90),
    TDS2: rndInt(random, 0, 90),
    T0: rndInt(random, 0, 90)
  };

  for (const column of BUFFER_COLUMNS) {
    if (row[column] === undefined) {
      row[column] = syntheticValue(column, index, random, "buffer");
    }
  }
  return recalculateBuffer(row);
}

function recalculateBuffer(row) {
  const stock = toNumber(row["Stock OK"]);
  const wip = toNumber(row["Wip ok après dec "]);
  const totalWip = toNumber(row["TOTAL WIP OK"]);
  const bufferTarget = Math.max(1, toNumber(row["Buffer Cible"]));
  const prodTarget = Math.max(1, toNumber(row["Cible Prod"]));
  const backlog = toNumber(row.Backlog);
  const bufferPct = clamp((stock + wip) / bufferTarget, 0, 2.4);
  const prodPct = clamp((stock + totalWip) / prodTarget, 0, 2.4);

  row["Stock ok + WIP ok apres dec"] = stock + wip;
  row["% ok Buffer Cible après DEC"] = pct(bufferPct);
  row["% ok Cible Prod après DEC"] = pct(prodPct);
  row["Nb semaine Manco depuis Y-3"] = ["Nb semaine Manco Y-3", "Nb semaine Manco Y-2", "Nb semaine Manco Y-1", "Nb semaine Manco Y"].reduce((sum, key) => sum + toNumber(row[key]), 0);
  row["nb week Rec réclamation depuis Y-3"] = ["nb week Rec réclamation Y-3", "nb week Rec réclamation Y-2", "nb week Rec réclamation Y-1", "nb week Rec réclamation Y"].reduce((sum, key) => sum + toNumber(row[key]), 0);
  row["% Scrap moy. 5Y"] = pct(["% Scrap Y-5", "% Scrap Y-4", "% Scrap Y-3", "% Scrap Y-2", "% Scrap Y-1"].reduce((sum, key) => sum + parsePercent(row[key]), 0) / 5);
  row.Prio = bufferPct < 0.75 || backlog > 20 ? "Haute" : bufferPct < 1 ? "Moyenne" : "Normale";
  row["STATUT PLANIF"] = bufferPct < 0.65 ? "A planifier" : bufferPct < 1 ? "Surveiller" : "Planifié";
  row["STATUT PROD"] = prodPct < 0.65 ? "Critique" : prodPct < 1 ? "A risque" : "OK";
  row["IND.KEY PLANIF"] = `${row.Component}-${row.MRPC}-${row.Prio}`;
  return row;
}

function makeCapacityRows(key, count, week, random) {
  return Array.from({ length: count }, (_, index) => {
    const capacity = rndInt(random, 120, 760);
    const planned = rndInt(random, 40, Math.round(capacity * 1.35));
    const load = planned / Math.max(1, capacity);
    const row = {
      __id: `${key}-${index + 1}`,
      Semaine: week,
      Machine: `Cellule ${pick(["Alpha", "Beta", "Gamma", "Delta", "Sigma"], random)}-${rndInt(random, 1, 12)}`,
      "Type Mach": pick(OPTION_SETS.typeMach, random),
      "Charge planifiée": planned,
      "Capacité dispo": capacity,
      "Taux charge": pct(load),
      Attente: rndInt(random, 0, 42),
      Statut: load > 1.08 ? "Saturée" : load > 0.88 ? "Surveiller" : "OK"
    };
    for (const column of DATASETS[key].columns) {
      if (row[column] === undefined) row[column] = syntheticValue(column, index, random, key);
    }
    return row;
  });
}

function makeGenericRows(datasetKey, count, columns, random) {
  return Array.from({ length: count }, (_, index) => {
    const row = { __id: `${datasetKey}-${index + 1}` };
    for (const column of columns) {
      row[column] = syntheticValue(column, index, random, datasetKey);
    }
    return row;
  });
}

function makeStatusRows(random) {
  return Array.from({ length: DATASETS.statusCatalog.rows }, (_, index) => ({
    ...DATASETS.statusCatalog.columns.reduce((row, column) => {
      if (row[column] === undefined) row[column] = syntheticValue(column, index, random, "statusCatalog");
      return row;
    }, {
      __id: `statusCatalog-${index + 1}`,
      "Status Planing": OPTION_SETS.planif[index % OPTION_SETS.planif.length],
      Famille: pick(["Planification", "Production", "Qualité", "Logistique"], random),
      Couleur: pick(["Bleu", "Vert", "Orange", "Rouge", "Violet"], random),
      Actif: index % 7 === 0 ? "Non" : "Oui"
    })
  }));
}

function makeRefreshRows(random) {
  const actions = ["Refresh PowerQuery", "Recalcul indicateurs", "Archivage", "Filtre table", "Contrôle volumétrie"];
  return Array.from({ length: DATASETS.refreshLog.rows }, (_, index) => ({
    __id: `refreshLog-${index + 1}`,
    Horodatage: addDays("2026-02-01", index),
    Action: pick(actions, random),
    Table: DATASETS[pick(Object.keys(DATASETS), random)].table,
    Lignes: rndInt(random, 24, 3400),
    "Durée ms": rndInt(random, 120, 8400),
    Résultat: index % 17 === 0 ? "A contrôler" : "OK",
    Message: index % 17 === 0 ? "Ecart fictif détecté" : "Traitement terminé"
  }));
}

function makeArchiveRows(random, planning) {
  return Array.from({ length: DATASETS.archive.rows }, (_, index) => {
    const plan = planning[index % planning.length];
    const week = 1 + (index % 52);
    return {
      __id: `archive-${index + 1}`,
      "Taux.C": plan["Taux.C"],
      "% ok Buffer Cible après DEC": plan["% ok Buffer Cible après DEC"],
      "% ok Cible Prod après DEC": plan["% ok Cible Prod après DEC"],
      "Besoin Hebdo": Math.max(1, toNumber(plan["Besoin Hebdo"]) + rndInt(random, -12, 12)),
      "Remarques Planning": pick(["Snapshot fictif", "Décision simulée", "Contrôle mensuel", ""], random),
      Article: plan.Article,
      Date_Archive: addDays("2026-01-01", index % 180),
      Semaines: week,
      SemainesArticle: `${week}-${plan.Article}`
    };
  });
}

function syntheticValue(column, index, random, datasetKey) {
  const lower = column.toLowerCase();
  const exact = lower.trim();
  if (["taillage", "roulage", "ts", "tp", "moy ouput", "tc/s", "output/moy 2s /items"].includes(exact)) return rndInt(random, 0, 220);
  if (["année", "year"].includes(exact)) return 2026;
  if (["sem besoin client", "sem met", "sem", "semaine", "semaines"].includes(exact)) return 1 + (index % 52);
  if (exact.includes("n° met")) return `MET-${rndInt(random, 10, 88)}`;
  if (lower.includes("date") || lower.includes("valid") || lower.includes("basic fin") || lower.includes("prochain start") || lower.includes("entered")) {
    return addDays("2026-01-05", (index % 220) + rndInt(random, -12, 24));
  }
  if (lower.includes("client")) return pick(OPTION_SETS.client, random);
  if (lower.includes("mrpc")) return pick(OPTION_SETS.mrpc, random);
  if (lower.includes("calib")) return pick(OPTION_SETS.caliber, random);
  if (lower.includes("capa-machine")) return rndInt(random, 80, 420);
  if (lower.includes("machine") || lower.includes("mach.") || lower.includes(" mach") || lower.includes("work ctr") || lower === "wc" || lower.includes("w.c")) {
    return `M-${rndInt(random, 100, 999)}`;
  }
  if (lower.includes("type") || lower.includes("famille") || lower.includes("grp techno")) return pick(OPTION_SETS.typeMach, random);
  if (lower.includes("statut") || lower.includes("status") || lower.includes("etat")) return pick(OPTION_SETS.status, random);
  if (lower.includes("article") || lower.includes("material") || lower.includes("component") || lower.includes("art.")) {
    const prefix = lower.includes("component") ? "CMP" : lower.includes("material") || lower.includes("mati") ? "MAT" : "ART";
    return `${prefix}-${String(600000 + index * 7 + rndInt(random, 1, 99)).padStart(6, "0")}`;
  }
  if (lower.includes("description") || lower.includes("designation") || lower === "text" || lower.includes("desc")) {
    return `Référence fictive ${datasetKey.toUpperCase()} ${index + 1}`;
  }
  if (lower.includes("%") || lower.includes("taux") || lower.includes("scrap")) return pct(rndFloat(random, 0.01, 1.28));
  if (lower.includes("sem") || lower.includes("week")) return 1 + (index % 52);
  if (lower.includes("année") || lower.includes("year")) return 2026;
  if (lower.includes("qty") || lower.includes("qte") || lower.includes("qté") || lower.includes("yield") || lower.includes("capa") || lower.includes("charge") || lower.includes("stock") || lower.includes("wip") || lower.includes("besoin") || lower.includes("backlog") || lower.includes("target") || lower.includes("reste") || lower.includes("nb ") || lower.includes("waiting") || lower.includes("attente") || lower.includes("retard") || lower.includes("jours") || lower.includes("durée") || lower.includes("kg") || lower.includes("pieces") || lower.includes("pces")) {
    return rndInt(random, 0, 520);
  }
  if (lower.includes("opérateur") || lower.includes("operateur") || lower.includes("personne") || lower.includes("metteur")) return pick(OPTION_SETS.operators, random);
  if (lower.includes("commentaire") || lower.includes("message") || lower.includes("remarque")) return pick(["", "Point fictif à suivre", "Contrôle planifié", "Risque simulé"], random);
  if (lower.includes("actif")) return index % 5 === 0 ? "Non" : "Oui";
  if (lower.includes("locked")) return index % 11 === 0 ? "Oui" : "Non";
  if (lower.includes("group")) return `GRP-${String((index % 18) + 1).padStart(2, "0")}`;
  if (lower.includes("ver")) return `V${(index % 6) + 1}`;
  if (lower.includes("prio")) return pick(["Normale", "Moyenne", "Haute"], random);
  return `${column.slice(0, 4).toUpperCase()}-${String(index + 1).padStart(4, "0")}`;
}

function loadOverrides() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      edits: parsed.edits || {},
      added: parsed.added || {},
      deleted: parsed.deleted || {}
    };
  } catch {
    return { edits: {}, added: {}, deleted: {} };
  }
}

function saveOverrides() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
}

function materializeAll() {
  return Object.fromEntries(Object.keys(DATASETS).map((key) => [key, materializeDataset(key)]));
}

function materializeDataset(key) {
  const deleted = new Set(overrides.deleted[key] || []);
  const edits = overrides.edits[key] || {};
  const added = overrides.added[key] || [];
  const baseRows = (baseData[key] || [])
    .filter((row) => !deleted.has(row.__id))
    .map((row) => normalizeRow(key, { ...row, ...(edits[row.__id] || {}), __origin: "base" }));
  return baseRows.concat(added.map((row) => normalizeRow(key, { ...row, __origin: "added" })));
}

function normalizeRow(key, row) {
  if (key === "planning") return recalculatePlanning(row);
  if (key === "buffer") return recalculateBuffer(row);
  if (key === "capacityW15" || key === "capacityW16") {
    const load = toNumber(row["Charge planifiée"]) / Math.max(1, toNumber(row["Capacité dispo"]));
    row["Taux charge"] = pct(load);
    row.Statut = load > 1.08 ? "Saturée" : load > 0.88 ? "Surveiller" : "OK";
  }
  return row;
}

function persistRow(key, row) {
  row = normalizeRow(key, row);
  const existsInBase = (baseData[key] || []).some((item) => item.__id === row.__id);
  overrides.edits[key] ||= {};
  overrides.added[key] ||= [];
  overrides.deleted[key] ||= [];

  if (existsInBase) {
    overrides.edits[key][row.__id] = stripRuntime(row);
  } else {
    const index = overrides.added[key].findIndex((item) => item.__id === row.__id);
    if (index >= 0) overrides.added[key][index] = stripRuntime(row);
    else overrides.added[key].push(stripRuntime(row));
  }
  saveOverrides();
  data[key] = materializeDataset(key);
}

function deleteRow(key, rowId) {
  overrides.edits[key] ||= {};
  overrides.added[key] ||= [];
  overrides.deleted[key] ||= [];
  const addedIndex = overrides.added[key].findIndex((row) => row.__id === rowId);
  if (addedIndex >= 0) {
    overrides.added[key].splice(addedIndex, 1);
  } else {
    delete overrides.edits[key][rowId];
    if (!overrides.deleted[key].includes(rowId)) overrides.deleted[key].push(rowId);
  }
  saveOverrides();
  data[key] = materializeDataset(key);
}

function stripRuntime(row) {
  const clone = { ...row };
  delete clone.__origin;
  return clone;
}

function loadUiState() {
  try {
    const saved = JSON.parse(localStorage.getItem(UI_KEY) || "{}");
    Object.assign(state, saved);
    if (!SHEET_CONFIGS.some((sheet) => sheet.name === state.activeSheet)) state.activeSheet = "PLANING";
    state.groups ||= {
      planning: Object.fromEntries((COLUMN_GROUPS.planning || []).map((group) => [group.id, true])),
      buffer: Object.fromEntries((COLUMN_GROUPS.buffer || []).map((group) => [group.id, true]))
    };
  } catch {
    return;
  }
}

function saveUiState() {
  const saved = {
    view: state.view,
    activeSheet: state.activeSheet,
    sourceDataset: state.sourceDataset,
    columnPreset: state.columnPreset,
    density: state.density,
    groups: state.groups
  };
  localStorage.setItem(UI_KEY, JSON.stringify(saved));
}

function renderNav() {
  const nav = document.getElementById("navList");
  nav.innerHTML = NAV_ITEMS.map((item) => {
    const datasetCount = item.dataset ? (data[item.dataset] || []).length : "";
    return `
      <button class="nav-button ${state.view === item.id ? "active" : ""}" data-view="${item.id}" type="button">
        <i data-lucide="${item.icon}"></i>
        <span>${item.label}</span>
        ${datasetCount ? `<span class="nav-count">${formatCompact(datasetCount)}</span>` : ""}
      </button>
    `;
  }).join("");
  nav.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      state.page = 1;
      state.query = "";
      state.status = "all";
      state.week = "all";
      state.sort = { column: "", direction: "asc" };
      saveUiState();
      render();
    });
  });
  refreshIcons();
}

function render() {
  document.body.classList.toggle("density-compact", state.density === "compact");
  renderNav();
  document.getElementById("syntheticCount").textContent = `${formatNumber(totalRows())} lignes`;

  const titles = {
    workbook: ["Classeur Excel", activeSheetConfig().name],
    dashboard: ["Cockpit", "Tableau de bord"],
    planning: ["Table structurée", "Planning"],
    buffer: ["Table structurée", "Buffer"],
    capacity: ["Indicateurs", "Capacité machine"],
    met: ["Suivi", "Metteurs en train"],
    sources: ["Tables sources", DATASETS[state.sourceDataset].label],
    audit: ["Migration", "Audit Excel"]
  };
  const [eyebrow, title] = titles[state.view] || titles.dashboard;
  document.getElementById("pageEyebrow").textContent = eyebrow;
  document.getElementById("pageTitle").textContent = title;
  document.getElementById("commandBar").innerHTML = commandBarHtml();
  wireCommandBar();

  const workspace = document.getElementById("workspace");
  if (state.view === "dashboard") workspace.innerHTML = renderDashboard();
  if (state.view === "workbook") workspace.innerHTML = renderWorkbook();
  if (state.view === "planning") workspace.innerHTML = renderDatasetPage("planning");
  if (state.view === "buffer") workspace.innerHTML = renderDatasetPage("buffer");
  if (state.view === "capacity") workspace.innerHTML = renderCapacity();
  if (state.view === "met") workspace.innerHTML = renderDatasetPage("suiviMet");
  if (state.view === "sources") workspace.innerHTML = renderSources();
  if (state.view === "audit") workspace.innerHTML = renderAudit();

  wireWorkspace();
  refreshIcons();
  requestAnimationFrame(drawActiveCharts);
}

function commandBarHtml() {
  const datasetKey = currentDatasetKey();
  const dataset = datasetKey ? DATASETS[datasetKey] : null;
  const addButton = dataset ? `
    <button class="primary-button" type="button" data-action="add-row">
      <i data-lucide="plus"></i>
      Ajouter
    </button>` : "";
  const importButton = dataset ? `
    <button class="soft-button" type="button" data-action="import-csv" title="Importer CSV">
      <i data-lucide="upload"></i>
      Importer
    </button>` : "";
  const exportButton = dataset ? `
    <button class="soft-button" type="button" data-action="export-csv" title="Exporter CSV">
      <i data-lucide="download"></i>
      Exporter
    </button>` : "";
  return `
    ${addButton}
    ${importButton}
    ${exportButton}
    <button class="soft-button" type="button" data-action="refresh">
      <i data-lucide="refresh-cw"></i>
      Actualiser
    </button>
    <button class="soft-button" type="button" data-action="archive">
      <i data-lucide="archive"></i>
      Archiver
    </button>
    <button class="icon-button" type="button" data-action="density" title="Densité" aria-label="Densité">
      <i data-lucide="${state.density === "compact" ? "rows-3" : "rows-4"}"></i>
    </button>
    <button class="icon-button" type="button" data-action="fullscreen" title="Plein écran" aria-label="Plein écran">
      <i data-lucide="maximize"></i>
    </button>
  `;
}

function wireCommandBar() {
  const commandBar = document.getElementById("commandBar");
  commandBar.querySelector('[data-action="refresh"]')?.addEventListener("click", simulateRefresh);
  commandBar.querySelector('[data-action="archive"]')?.addEventListener("click", createArchiveSnapshot);
  commandBar.querySelector('[data-action="density"]')?.addEventListener("click", () => {
    state.density = state.density === "compact" ? "comfortable" : "compact";
    saveUiState();
    render();
  });
  commandBar.querySelector('[data-action="fullscreen"]')?.addEventListener("click", () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  });
  commandBar.querySelector('[data-action="add-row"]')?.addEventListener("click", () => openRecordDialog(currentDatasetKey(), null));
  commandBar.querySelector('[data-action="export-csv"]')?.addEventListener("click", () => exportCsv(currentDatasetKey()));
  commandBar.querySelector('[data-action="import-csv"]')?.addEventListener("click", () => {
    const input = document.getElementById("csvInput");
    input.dataset.dataset = currentDatasetKey();
    input.value = "";
    input.click();
  });
}

function wireWorkspace() {
  document.querySelectorAll("[data-query]").forEach((input) => {
    input.addEventListener("input", () => {
      state.query = input.value;
      state.page = 1;
      render();
    });
  });
  document.querySelectorAll("[data-status-filter]").forEach((select) => {
    select.addEventListener("change", () => {
      state.status = select.value;
      state.page = 1;
      render();
    });
  });
  document.querySelectorAll("[data-week-filter]").forEach((select) => {
    select.addEventListener("change", () => {
      state.week = select.value;
      state.page = 1;
      render();
    });
  });
  document.querySelectorAll("[data-column-preset]").forEach((select) => {
    select.addEventListener("change", () => {
      state.columnPreset = select.value;
      state.page = 1;
      saveUiState();
      render();
    });
  });
  document.querySelectorAll("[data-source-dataset]").forEach((button) => {
    button.addEventListener("click", () => {
      state.sourceDataset = button.dataset.sourceDataset;
      state.page = 1;
      state.query = "";
      state.status = "all";
      saveUiState();
      render();
    });
  });
  document.querySelectorAll("[data-sheet-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeSheet = button.dataset.sheetTab;
      state.page = 1;
      state.query = "";
      state.status = "all";
      state.week = "all";
      state.sort = { column: "", direction: "asc" };
      state.view = "workbook";
      saveUiState();
      render();
    });
  });
  document.querySelectorAll("[data-macro-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.macroAction;
      if (action === "clear-filters") {
        state.query = "";
        state.status = "all";
        state.week = "all";
        state.sort = { column: "", direction: "asc" };
      }
      if (action.startsWith("layout-")) {
        state.columnPreset = action === "layout-log" ? "complete" : "compact";
        state.density = action === "layout-prod" ? "compact" : "comfortable";
      }
      saveUiState();
      render();
    });
  });
  document.querySelectorAll('#workspace [data-action="add-row"]').forEach((button) => {
    button.addEventListener("click", () => openRecordDialog(currentDatasetKey(), null));
  });
  document.querySelectorAll('#workspace [data-action="import-csv"]').forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById("csvInput");
      input.dataset.dataset = currentDatasetKey();
      input.value = "";
      input.click();
    });
  });
  document.querySelectorAll('#workspace [data-action="export-csv"]').forEach((button) => {
    button.addEventListener("click", () => exportCsv(currentDatasetKey()));
  });
  document.querySelectorAll('#workspace [data-action="refresh"]').forEach((button) => {
    button.addEventListener("click", simulateRefresh);
  });
  document.querySelectorAll('#workspace [data-action="archive"]').forEach((button) => {
    button.addEventListener("click", createArchiveSnapshot);
  });
  document.querySelectorAll("[data-toggle-group]").forEach((button) => {
    button.addEventListener("click", () => {
      const datasetKey = button.dataset.dataset;
      const group = button.dataset.toggleGroup;
      state.groups[datasetKey][group] = !state.groups[datasetKey][group];
      state.page = 1;
      saveUiState();
      render();
    });
  });
  document.querySelectorAll("[data-sort]").forEach((button) => {
    button.addEventListener("click", () => {
      const column = button.dataset.sort;
      state.sort = {
        column,
        direction: state.sort.column === column && state.sort.direction === "asc" ? "desc" : "asc"
      };
      render();
    });
  });
  document.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      state.page = Math.max(1, state.page + Number(button.dataset.page));
      render();
    });
  });
  document.querySelectorAll("[data-edit-row]").forEach((button) => {
    button.addEventListener("click", () => openRecordDialog(button.dataset.dataset, button.dataset.editRow));
  });
  document.querySelectorAll("[data-delete-row]").forEach((button) => {
    button.addEventListener("click", () => {
      if (confirm("Supprimer cette ligne fictive ?")) {
        deleteRow(button.dataset.dataset, button.dataset.deleteRow);
        render();
      }
    });
  });
}

function renderDashboard() {
  const metrics = dashboardMetrics();
  return `
    <div class="grid kpi-grid">
      ${kpiCard("Charge planning", formatNumber(metrics.planningRows), "Lignes fictives actives", "calendar-days", "status-info")}
      ${kpiCard("Risques ouverts", formatNumber(metrics.riskCount), `${formatPctValue(metrics.riskRate)} du planning`, "alert-triangle", metrics.riskRate > 0.28 ? "status-danger" : "status-low")}
      ${kpiCard("Couverture buffer", formatPctValue(metrics.avgBuffer), "Moyenne après décision", "shield-check", metrics.avgBuffer >= 1 ? "status-ok" : "status-low")}
      ${kpiCard("Charge capacité", formatPctValue(metrics.avgLoad), "W15 + W16", "gauge", metrics.avgLoad > 1 ? "status-danger" : "status-ok")}
    </div>

    <div class="grid chart-grid" style="margin-top:14px">
      <section class="panel">
        <div class="panel-head">
          <h3>Planification hebdomadaire</h3>
          <span class="status-info">${metrics.weekCount} semaines</span>
        </div>
        <div class="canvas-wrap"><canvas id="weeklyChart" aria-label="Planification hebdomadaire"></canvas></div>
      </section>
      <section class="panel">
        <div class="panel-head">
          <h3>Statuts planning</h3>
          <span class="status-neutral">${formatNumber(metrics.planningRows)} lignes</span>
        </div>
        <div class="canvas-wrap"><canvas id="statusChart" aria-label="Statuts planning"></canvas></div>
      </section>
    </div>

    <div class="grid split-grid" style="margin-top:14px">
      <section class="panel">
        <div class="panel-head">
          <h3>Buffer et production</h3>
          <span class="status-ok">${formatPctValue(metrics.prodCoverage)}</span>
        </div>
        <div class="panel-body metric-list">
          ${meterRow("Couverture buffer", metrics.avgBuffer)}
          ${meterRow("Couverture cible prod", metrics.prodCoverage)}
          ${meterRow("Capacité disponible", 1 - Math.min(1, metrics.avgLoad - 0.65))}
          ${meterRow("WIP exploitable", metrics.wipCoverage)}
        </div>
      </section>
      <section class="panel">
        <div class="panel-head">
          <h3>Equivalence Excel</h3>
          <span class="status-info">${EXCEL_PROFILE.file}</span>
        </div>
        <div class="panel-body metric-list">
          ${metricLine("Feuilles analysées", EXCEL_PROFILE.sheets)}
          ${metricLine("Formules recensées", formatNumber(EXCEL_PROFILE.formulas))}
          ${metricLine("Macros VBA", `${EXCEL_PROFILE.vba.procedures} procédures`)}
          ${metricLine("Graphiques", `${EXCEL_PROFILE.charts.bar} barres, ${EXCEL_PROFILE.charts.line} lignes`)}
        </div>
      </section>
    </div>
  `;
}

function renderDatasetPage(datasetKey) {
  const dataset = DATASETS[datasetKey];
  const rows = filteredRows(datasetKey);
  const columns = visibleColumns(datasetKey);
  const pageCount = Math.max(1, Math.ceil(rows.length / state.pageSize));
  state.page = Math.min(state.page, pageCount);
  const paged = rows.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
  const weekOptions = weekFilterOptions(datasetKey);
  const statusOptions = statusFilterOptions(datasetKey);
  return `
    ${datasetToolbar(datasetKey, rows.length, weekOptions, statusOptions)}
    ${groupToggles(datasetKey)}
    <section class="panel table-shell">
      <div class="panel-head">
        <h3>${dataset.label}</h3>
        <span class="status-neutral">${dataset.table} - ${formatNumber(rows.length)} lignes</span>
      </div>
      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              ${columns.map((column) => `<th><button class="soft-button" type="button" data-sort="${escapeAttr(column)}">${escapeHtml(column)}${sortMark(column)}</button></th>`).join("")}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${paged.map((row) => tableRow(datasetKey, row, columns)).join("") || `<tr><td colspan="${columns.length + 1}"><div class="empty-state">Aucune ligne fictive</div></td></tr>`}
          </tbody>
        </table>
      </div>
      ${paginationHtml(rows.length, pageCount)}
    </section>
  `;
}

function renderSources() {
  const datasetKey = state.sourceDataset;
  const chips = SOURCE_DATASETS.map((key) => `
    <button class="segmented-button ${key === datasetKey ? "active" : ""}" type="button" data-source-dataset="${key}">
      ${DATASETS[key].label}
    </button>
  `).join("");
  return `
    <div class="chip-row" style="margin-bottom:12px">${chips}</div>
    ${renderDatasetPage(datasetKey)}
  `;
}

function renderWorkbook() {
  const sheet = activeSheetConfig();
  const datasetKey = sheet.dataset;
  const dataset = DATASETS[datasetKey];
  const rows = filteredRows(datasetKey);
  const columns = visibleColumns(datasetKey);
  const pageCount = Math.max(1, Math.ceil(rows.length / state.pageSize));
  state.page = Math.min(state.page, pageCount);
  const paged = rows.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
  return `
    <section class="workbook-shell">
      <div class="excel-ribbon">
        <div class="ribbon-group">
          <span>Fichier</span>
          <button class="soft-button" type="button" data-action="refresh"><i data-lucide="refresh-cw"></i>Actualiser</button>
          <button class="soft-button" type="button" data-action="archive"><i data-lucide="archive"></i>Archiver</button>
          <button class="soft-button" type="button" data-macro-action="clear-filters"><i data-lucide="filter-x"></i>Filtres</button>
        </div>
        <div class="ribbon-group">
          <span>Layout</span>
          <button class="soft-button" type="button" data-macro-action="layout-prod"><i data-lucide="factory"></i>Prod</button>
          <button class="soft-button" type="button" data-macro-action="layout-supp"><i data-lucide="layers-2"></i>Supp</button>
          <button class="soft-button" type="button" data-macro-action="layout-log"><i data-lucide="history"></i>Log</button>
        </div>
        <div class="ribbon-group">
          <span>Données</span>
          <button class="primary-button" type="button" data-action="add-row"><i data-lucide="plus"></i>Ajouter</button>
          <button class="soft-button" type="button" data-action="import-csv"><i data-lucide="upload"></i>Importer</button>
          <button class="soft-button" type="button" data-action="export-csv"><i data-lucide="download"></i>Exporter</button>
        </div>
      </div>

      <div class="formula-bar">
        <span class="name-box">${sheet.name}!A1</span>
        <span class="fx-box">fx</span>
        <input value="${escapeAttr(formulaBarText(sheet))}" readonly aria-label="Formule active" />
      </div>

      <div class="sheet-tabs" role="tablist" aria-label="Feuilles du classeur">
        ${SHEET_CONFIGS.map((item) => `
          <button class="sheet-tab ${item.name === sheet.name ? "active" : ""}" type="button" role="tab" data-sheet-tab="${escapeAttr(item.name)}" aria-selected="${item.name === sheet.name}">
            ${escapeHtml(item.name)}
            <span>${formatNumber(item.dataRows)}</span>
          </button>
        `).join("")}
      </div>

      <div class="grid audit-grid workbook-meta">
        ${auditCard("Feuille", sheet.name, `${sheet.rows} lignes Excel, ${sheet.cols} colonnes`)}
        ${auditCard("Données fictives", formatNumber((data[datasetKey] || []).length), dataset.table)}
        ${auditCard("Formules", formatNumber(sheet.formulas), `${sheet.tables} table(s), ${sheet.charts} graphique(s)`)}
      </div>

      ${datasetToolbar(datasetKey, rows.length, weekFilterOptions(datasetKey), statusFilterOptions(datasetKey))}
      ${groupToggles(datasetKey)}

      <section class="panel table-shell">
        <div class="panel-head">
          <h3>${escapeHtml(sheet.name)}</h3>
          <span class="status-neutral">${escapeHtml(sheet.note)} - ${formatNumber(rows.length)} lignes</span>
        </div>
        <div class="table-scroll excel-grid">
          <table>
            <thead>
              <tr>
                <th class="row-number">#</th>
                ${columns.map((column) => `<th><button class="soft-button" type="button" data-sort="${escapeAttr(column)}">${escapeHtml(column)}${sortMark(column)}</button></th>`).join("")}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${paged.map((row, index) => workbookRow(datasetKey, row, columns, (state.page - 1) * state.pageSize + index + 1)).join("") || `<tr><td colspan="${columns.length + 2}"><div class="empty-state">Aucune ligne fictive</div></td></tr>`}
            </tbody>
          </table>
        </div>
        ${paginationHtml(rows.length, pageCount)}
      </section>
    </section>
  `;
}

function workbookRow(datasetKey, row, columns, rowNumber) {
  return `
    <tr>
      <td class="row-number">${rowNumber}</td>
      ${columns.map((column) => `<td>${cellHtml(row[column], column)}</td>`).join("")}
      <td>
        <div class="row-actions">
          <button class="icon-button" type="button" title="Modifier" aria-label="Modifier" data-dataset="${datasetKey}" data-edit-row="${row.__id}">
            <i data-lucide="pencil"></i>
          </button>
          <button class="icon-button" type="button" title="Supprimer" aria-label="Supprimer" data-dataset="${datasetKey}" data-delete-row="${row.__id}">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </td>
    </tr>
  `;
}

function formulaBarText(sheet) {
  if (sheet.formulas === 0) return "Valeurs sources fictives, pas de formule dans cette feuille.";
  if (sheet.name === "PLANING") return "=IFERROR / COUNTIFS / SUMIFS / NETWORKDAYS traduits en calculs JS sur T_Planning";
  if (sheet.name === "BUFFER") return "=XLOOKUP / LET / IF / agrégations buffer traduits en calculs JS sur DB_CEWB_Nomenclature__2";
  if (sheet.name.startsWith("CAPAMET")) return "=COUNTIFS et sommes capacité par machine/semaine traduits en heatmap et grille";
  return "Formules Excel détectées et représentées par indicateurs calculés.";
}

function activeSheetConfig() {
  return SHEET_CONFIGS.find((sheet) => sheet.name === state.activeSheet) || SHEET_CONFIGS[0];
}

function renderCapacity() {
  const rows = data.capacityW15.concat(data.capacityW16);
  const load = average(rows.map((row) => parsePercent(row["Taux charge"])));
  return `
    <div class="grid kpi-grid">
      ${kpiCard("Lignes capacité", formatNumber(rows.length), "W15 + W16", "activity", "status-info")}
      ${kpiCard("Charge moyenne", formatPctValue(load), "Toutes cellules", "gauge", load > 1 ? "status-danger" : "status-ok")}
      ${kpiCard("Saturations", rows.filter((row) => row.Statut === "Saturée").length, "Cellules au-dessus cible", "triangle-alert", "status-danger")}
      ${kpiCard("Attente cumulée", formatNumber(sum(rows.map((row) => row.Attente))), "Jours fictifs", "hourglass", "status-low")}
    </div>
    <div class="grid chart-grid" style="margin-top:14px">
      <section class="panel">
        <div class="panel-head">
          <h3>Charge par type machine</h3>
          <span class="status-neutral">${formatNumber(rows.length)} lignes</span>
        </div>
        <div class="canvas-wrap"><canvas id="capacityChart" aria-label="Charge par type machine"></canvas></div>
      </section>
      <section class="panel">
        <div class="panel-head">
          <h3>Heatmap W15/W16</h3>
          <span class="status-info">${formatPctValue(load)}</span>
        </div>
        <div class="panel-body">
          <div class="heatmap">${capacityHeatCells(rows)}</div>
        </div>
      </section>
    </div>
    <div style="margin-top:14px">${renderDatasetPage("capacityW16")}</div>
  `;
}

function renderAudit() {
  const totalDatasetRows = Object.values(DATASETS).reduce((sumRows, dataset) => sumRows + dataset.rows, 0);
  return `
    <div class="grid audit-grid">
      ${auditCard("Feuilles", EXCEL_PROFILE.sheets, "Planning, buffer, capacité, archives et sources")}
      ${auditCard("Formules", formatNumber(EXCEL_PROFILE.formulas), "IF, IFERROR, COUNTIFS, SUMIFS, TODAY, NETWORKDAYS")}
      ${auditCard("Macros", EXCEL_PROFILE.vba.procedures, `${EXCEL_PROFILE.vba.modules} modules, ${EXCEL_PROFILE.vba.lines} lignes`)}
      ${auditCard("Données fictives", formatNumber(totalDatasetRows), "Même volumétrie cible que les tables analysées")}
      ${auditCard("Graphiques", EXCEL_PROFILE.charts.bar + EXCEL_PROFILE.charts.line, "Barres et lignes reconstruits en canvas")}
      ${auditCard("Connexions", EXCEL_PROFILE.queryTables, "Actualisation simulée et log local")}
    </div>

    <div class="grid split-grid" style="margin-top:14px">
      <section class="panel">
        <div class="panel-head">
          <h3>Familles de formules</h3>
          <span class="status-neutral">${formatNumber(EXCEL_PROFILE.formulas)}</span>
        </div>
        <div class="panel-body metric-list">
          ${EXCEL_PROFILE.formulaFamilies.map((item) => meterRow(item.label, item.count / EXCEL_PROFILE.formulas, formatNumber(item.count))).join("")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-head">
          <h3>Rôles macro équivalents</h3>
          <span class="status-info">VBA vers UI web</span>
        </div>
        <div class="panel-body metric-list">
          ${EXCEL_PROFILE.macroRoles.map((item) => metricLine(item.label, item.count)).join("")}
        </div>
      </section>
    </div>

    <section class="panel" style="margin-top:14px">
      <div class="panel-head">
        <h3>Tables reconstruites</h3>
        <span class="status-ok">${Object.keys(DATASETS).length} jeux</span>
      </div>
      <div class="table-scroll">
        <table>
          <thead><tr><th>Jeu</th><th>Table source</th><th>Lignes fictives</th><th>Colonnes</th><th>Edition</th></tr></thead>
          <tbody>
            ${Object.entries(DATASETS).map(([key, dataset]) => `
              <tr>
                <td>${escapeHtml(dataset.label)}</td>
                <td>${escapeHtml(dataset.table)}</td>
                <td>${formatNumber(dataset.rows)}</td>
                <td>${dataset.columns.length}</td>
                <td><span class="status-ok">CRUD actif</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function datasetToolbar(datasetKey, count, weekOptions, statusOptions) {
  return `
    <div class="toolbar">
      <div class="filters">
        <input class="input" type="search" placeholder="Recherche" value="${escapeAttr(state.query)}" data-query />
        ${statusOptions.length ? `<select class="select" data-status-filter>${selectOptions(["all", ...statusOptions], state.status, "Tous statuts")}</select>` : ""}
        ${weekOptions.length ? `<select class="select" data-week-filter>${selectOptions(["all", ...weekOptions], state.week, "Toutes semaines")}</select>` : ""}
        <select class="select" data-column-preset>
          <option value="compact" ${state.columnPreset === "compact" ? "selected" : ""}>Compact</option>
          <option value="complete" ${state.columnPreset === "complete" ? "selected" : ""}>Complet</option>
        </select>
      </div>
      <div class="table-actions">
        <span class="status-neutral">${formatNumber(count)} lignes</span>
      </div>
    </div>
  `;
}

function groupToggles(datasetKey) {
  const groups = COLUMN_GROUPS[datasetKey];
  if (!groups) return "";
  return `
    <div class="chip-row" style="margin-bottom:12px">
      ${groups.map((group) => `
        <button class="chip ${state.groups[datasetKey][group.id] ? "active" : ""}" type="button" data-dataset="${datasetKey}" data-toggle-group="${group.id}">
          ${group.label}
        </button>
      `).join("")}
    </div>
  `;
}

function tableRow(datasetKey, row, columns) {
  return `
    <tr>
      ${columns.map((column) => `<td>${cellHtml(row[column], column)}</td>`).join("")}
      <td>
        <div class="row-actions">
          <button class="icon-button" type="button" title="Modifier" aria-label="Modifier" data-dataset="${datasetKey}" data-edit-row="${row.__id}">
            <i data-lucide="pencil"></i>
          </button>
          <button class="icon-button" type="button" title="Supprimer" aria-label="Supprimer" data-dataset="${datasetKey}" data-delete-row="${row.__id}">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </td>
    </tr>
  `;
}

function cellHtml(value, column) {
  const stringValue = value == null ? "" : String(value);
  if (statusColumn(column)) return statusBadge(stringValue);
  if (column.includes("%") || column.toLowerCase().includes("taux")) return `<strong>${escapeHtml(stringValue)}</strong>`;
  return escapeHtml(stringValue);
}

function statusBadge(value) {
  const lower = value.toLowerCase();
  let cls = "status-neutral";
  if (lower.includes("ok") || lower.includes("planifié") || lower.includes("terminé") || lower.includes("normale") || lower.includes("disponible")) cls = "status-ok";
  if (lower.includes("surveiller") || lower.includes("moyenne") || lower.includes("réglage") || lower.includes("attente")) cls = "status-low";
  if (lower.includes("critique") || lower.includes("bloqué") || lower.includes("saturée") || lower.includes("haute")) cls = "status-danger";
  if (lower.includes("cours")) cls = "status-info";
  return `<span class="${cls}">${escapeHtml(value)}</span>`;
}

function paginationHtml(total, pageCount) {
  return `
    <div class="pagination">
      <button class="soft-button" type="button" data-page="-1" ${state.page <= 1 ? "disabled" : ""}>
        <i data-lucide="chevron-left"></i>
        Précédent
      </button>
      <span>Page ${state.page} / ${pageCount} - ${formatNumber(total)} lignes</span>
      <button class="soft-button" type="button" data-page="1" ${state.page >= pageCount ? "disabled" : ""}>
        Suivant
        <i data-lucide="chevron-right"></i>
      </button>
    </div>
  `;
}

function visibleColumns(datasetKey) {
  const dataset = DATASETS[datasetKey];
  let columns = state.columnPreset === "complete" ? dataset.columns.slice() : (dataset.compact || dataset.columns.slice(0, Math.min(14, dataset.columns.length))).slice();
  const groups = COLUMN_GROUPS[datasetKey];
  if (groups) {
    const hidden = new Set();
    for (const group of groups) {
      if (!state.groups[datasetKey][group.id]) {
        group.columns.forEach((column) => hidden.add(column));
      }
    }
    columns = columns.filter((column) => !hidden.has(column));
  }
  return columns;
}

function filteredRows(datasetKey) {
  let rows = (data[datasetKey] || []).slice();
  const query = state.query.trim().toLowerCase();
  if (query) {
    rows = rows.filter((row) => Object.values(row).some((value) => String(value ?? "").toLowerCase().includes(query)));
  }
  if (state.status !== "all") {
    rows = rows.filter((row) => rowStatusValues(row).includes(state.status));
  }
  if (state.week !== "all") {
    rows = rows.filter((row) => String(row.Sem ?? row.Semaine ?? row.Semaines ?? row["Sem Besoin client"] ?? "") === String(state.week));
  }
  if (state.sort.column) {
    rows.sort((a, b) => compareValues(a[state.sort.column], b[state.sort.column]) * (state.sort.direction === "asc" ? 1 : -1));
  }
  return rows;
}

function rowStatusValues(row) {
  return Object.entries(row)
    .filter(([column]) => statusColumn(column))
    .map(([, value]) => String(value));
}

function statusColumn(column) {
  const lower = column.toLowerCase();
  return lower.includes("statut") || lower.includes("status") || lower.includes("etat") || lower === "planif" || lower === "prio" || lower === "status planing";
}

function statusFilterOptions(datasetKey) {
  const values = new Set();
  for (const row of data[datasetKey] || []) {
    rowStatusValues(row).forEach((value) => values.add(value));
  }
  return Array.from(values).filter(Boolean).sort().slice(0, 28);
}

function weekFilterOptions(datasetKey) {
  const values = new Set();
  for (const row of data[datasetKey] || []) {
    const value = row.Sem ?? row.Semaine ?? row.Semaines ?? row["Sem Besoin client"];
    if (value !== undefined && value !== "") values.add(String(value));
  }
  return Array.from(values).sort((a, b) => Number(a) - Number(b)).slice(0, 60);
}

function selectOptions(values, selected, allLabel) {
  return values.map((value) => {
    const label = value === "all" ? allLabel : value;
    return `<option value="${escapeAttr(value)}" ${String(value) === String(selected) ? "selected" : ""}>${escapeHtml(label)}</option>`;
  }).join("");
}

function openRecordDialog(datasetKey, rowId) {
  const dataset = DATASETS[datasetKey];
  const existing = rowId ? (data[datasetKey] || []).find((row) => row.__id === rowId) : createNewRow(datasetKey);
  activeEdit = { datasetKey, rowId: existing.__id };
  document.getElementById("dialogDataset").textContent = dataset.table;
  document.getElementById("dialogTitle").textContent = rowId ? `Modifier ${dataset.label}` : `Ajouter ${dataset.label}`;
  const computed = new Set(dataset.computed || []);
  const formGrid = document.getElementById("formGrid");
  formGrid.innerHTML = dataset.columns.map((column) => fieldHtml(column, existing[column], computed.has(column))).join("");
  formGrid.querySelectorAll("input, select, textarea").forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
  });
  document.getElementById("recordDialog").showModal();
  refreshIcons();
}

function fieldHtml(column, value, readonly) {
  const type = inputType(column);
  const id = `field-${column.replace(/[^a-z0-9]/gi, "-")}`;
  const safeValue = value == null ? "" : String(value);
  const options = selectValues(column);
  const control = options.length && !readonly
    ? `<select id="${id}" name="${escapeAttr(column)}">${options.map((option) => `<option value="${escapeAttr(option)}" ${String(option) === safeValue ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`
    : longTextColumn(column)
      ? `<textarea id="${id}" name="${escapeAttr(column)}" ${readonly ? "readonly" : ""}>${escapeHtml(safeValue)}</textarea>`
      : `<input id="${id}" name="${escapeAttr(column)}" type="${type}" value="${escapeAttr(safeValue)}" ${readonly ? "readonly" : ""} />`;
  return `
    <div class="field" data-field="${escapeAttr(column)}">
      <label for="${id}">${escapeHtml(column)}${readonly ? " - calculé" : ""}</label>
      ${control}
      <span class="field-error">Valeur invalide</span>
    </div>
  `;
}

function wireDialog() {
  const dialog = document.getElementById("recordDialog");
  document.getElementById("closeDialog").addEventListener("click", () => dialog.close());
  document.getElementById("cancelDialog").addEventListener("click", () => dialog.close());
  document.getElementById("recordForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const inputs = Array.from(document.querySelectorAll("#formGrid input, #formGrid select, #formGrid textarea"));
    const valid = inputs.every(validateField);
    if (!valid || !activeEdit) return;
    const row = { __id: activeEdit.rowId };
    const dataset = DATASETS[activeEdit.datasetKey];
    for (const column of dataset.columns) {
      const input = inputs.find((field) => field.name === column);
      if (!input) continue;
      row[column] = coerceInputValue(column, input.value);
    }
    persistRow(activeEdit.datasetKey, row);
    dialog.close();
    render();
  });
  document.getElementById("csvInput").addEventListener("change", handleCsvImport);
}

function validateField(input) {
  const field = input.closest(".field");
  const numeric = input.type === "number";
  const invalid = numeric && input.value !== "" && Number.isNaN(Number(input.value));
  field.classList.toggle("invalid", invalid);
  return !invalid;
}

function createNewRow(datasetKey) {
  const dataset = DATASETS[datasetKey];
  const random = mulberry32(Date.now() % 2147483647);
  const index = (data[datasetKey] || []).length + 1;
  const row = { __id: `user-${datasetKey}-${Date.now()}` };
  for (const column of dataset.columns) {
    row[column] = syntheticValue(column, index, random, datasetKey);
  }
  if (datasetKey === "planning") {
    row.KEY = `USR-${String(index).padStart(4, "0")}`;
    row.Article = `ART-USR-${String(index).padStart(4, "0")}`;
    return recalculatePlanning(row);
  }
  if (datasetKey === "buffer") {
    row.Component = `CMP-USR-${String(index).padStart(4, "0")}`;
    return recalculateBuffer(row);
  }
  return normalizeRow(datasetKey, row);
}

function simulateRefresh() {
  const row = {
    __id: `user-refreshLog-${Date.now()}`,
    Horodatage: new Date().toISOString().slice(0, 10),
    Action: "Actualisation web",
    Table: currentDatasetKey() ? DATASETS[currentDatasetKey()].table : "Toutes",
    Lignes: currentDatasetKey() ? data[currentDatasetKey()].length : totalRows(),
    "Durée ms": rndInt(mulberry32(Date.now()), 180, 1800),
    Résultat: "OK",
    Message: "Synchronisation fictive"
  };
  persistRow("refreshLog", row);
  render();
}

function createArchiveSnapshot() {
  const random = mulberry32(Date.now() % 2147483647);
  const planningRows = data.planning.slice(0, 12);
  for (const plan of planningRows) {
    persistRow("archive", {
      __id: `user-archive-${Date.now()}-${plan.__id}`,
      "Taux.C": plan["Taux.C"],
      "% ok Buffer Cible après DEC": plan["% ok Buffer Cible après DEC"],
      "% ok Cible Prod après DEC": plan["% ok Cible Prod après DEC"],
      "Besoin Hebdo": plan["Besoin Hebdo"],
      "Remarques Planning": pick(["Archive web fictive", "Snapshot décision", "Revue capacité"], random),
      Article: plan.Article,
      Date_Archive: new Date().toISOString().slice(0, 10),
      Semaines: plan.Sem,
      SemainesArticle: `${plan.Sem}-${plan.Article}`
    });
  }
  persistRow("refreshLog", {
    __id: `user-refreshLog-${Date.now()}`,
    Horodatage: new Date().toISOString().slice(0, 10),
    Action: "Archivage web",
    Table: DATASETS.archive.table,
    Lignes: planningRows.length,
    "Durée ms": rndInt(random, 220, 2200),
    Résultat: "OK",
    Message: "Snapshot fictif ajouté"
  });
  render();
}

function exportCsv(datasetKey) {
  if (!datasetKey) return;
  const dataset = DATASETS[datasetKey];
  const rows = data[datasetKey] || [];
  const csv = [
    dataset.columns.map(csvCell).join(";"),
    ...rows.map((row) => dataset.columns.map((column) => csvCell(row[column])).join(";"))
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${dataset.table}_fictif.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function handleCsvImport(event) {
  const file = event.target.files[0];
  const datasetKey = event.target.dataset.dataset;
  if (!file || !datasetKey) return;
  const reader = new FileReader();
  reader.onload = () => {
    const rows = parseCsv(String(reader.result || ""));
    if (!rows.length) return;
    const dataset = DATASETS[datasetKey];
    const headers = rows[0];
    for (const values of rows.slice(1)) {
      if (!values.some(Boolean)) continue;
      const row = { __id: `user-${datasetKey}-${Date.now()}-${Math.random().toString(16).slice(2)}` };
      for (const column of dataset.columns) {
        const index = headers.indexOf(column);
        row[column] = index >= 0 ? coerceInputValue(column, values[index]) : syntheticValue(column, data[datasetKey].length, mulberry32(Date.now()), datasetKey);
      }
      persistRow(datasetKey, row);
    }
    render();
  };
  reader.readAsText(file, "utf-8");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if ((char === ";" || char === ",") && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell);
  if (row.length > 1 || row[0]) rows.push(row);
  return rows;
}

function drawActiveCharts() {
  if (state.view === "dashboard") {
    drawWeeklyChart();
    drawStatusChart();
  }
  if (state.view === "capacity") drawCapacityChart();
}

function drawWeeklyChart() {
  const grouped = groupBy(data.planning, (row) => row.Sem);
  const weeks = Object.keys(grouped).sort((a, b) => Number(a) - Number(b)).slice(0, 20);
  const series = weeks.map((week) => ({
    label: `S${week}`,
    value: sum(grouped[week].map((row) => toNumber(row["Besoin Hebdo"]))),
    secondary: sum(grouped[week].map((row) => toNumber(row["Capa Planif"])))
  }));
  drawLineBarCanvas("weeklyChart", series, { bar: "#0078d4", line: "#16833a", labelA: "Besoin", labelB: "Capa" });
}

function drawStatusChart() {
  const grouped = groupBy(data.planning, (row) => row.PLANIF);
  const series = Object.entries(grouped).map(([label, rows]) => ({ label, value: rows.length }));
  drawBarCanvas("statusChart", series, ["#0078d4", "#16833a", "#b45309", "#b91c1c", "#7c3aed"]);
}

function drawCapacityChart() {
  const rows = data.capacityW15.concat(data.capacityW16);
  const grouped = groupBy(rows, (row) => row["Type Mach"]);
  const series = Object.entries(grouped).map(([label, values]) => ({
    label,
    value: average(values.map((row) => parsePercent(row["Taux charge"])))
  }));
  drawBarCanvas("capacityChart", series, ["#0078d4", "#16833a", "#b45309", "#7c3aed", "#dc2626", "#0f766e"], true);
}

function drawLineBarCanvas(canvasId, series, colors) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const { ctx, width, height } = setupCanvas(canvas);
  const pad = { left: 42, right: 18, top: 18, bottom: 42 };
  const max = Math.max(1, ...series.flatMap((item) => [item.value, item.secondary]));
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  ctx.clearRect(0, 0, width, height);
  drawGrid(ctx, pad, plotW, plotH, max);
  const barW = plotW / Math.max(1, series.length) * 0.55;
  ctx.fillStyle = colors.bar;
  series.forEach((item, index) => {
    const x = pad.left + (index + 0.5) * (plotW / series.length) - barW / 2;
    const h = (item.value / max) * plotH;
    roundRect(ctx, x, pad.top + plotH - h, barW, h, 5);
    ctx.fill();
  });
  ctx.strokeStyle = colors.line;
  ctx.lineWidth = 3;
  ctx.beginPath();
  series.forEach((item, index) => {
    const x = pad.left + (index + 0.5) * (plotW / series.length);
    const y = pad.top + plotH - (item.secondary / max) * plotH;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
  drawAxisLabels(ctx, series, pad, plotW, plotH);
}

function drawBarCanvas(canvasId, series, colors, asPercent = false) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const { ctx, width, height } = setupCanvas(canvas);
  const pad = { left: 128, right: 24, top: 20, bottom: 26 };
  const max = Math.max(1, ...series.map((item) => item.value));
  const rowH = (height - pad.top - pad.bottom) / Math.max(1, series.length);
  ctx.clearRect(0, 0, width, height);
  ctx.font = "12px Segoe UI, sans-serif";
  ctx.textBaseline = "middle";
  series.forEach((item, index) => {
    const y = pad.top + index * rowH + rowH * 0.22;
    const barH = Math.max(10, rowH * 0.48);
    const barW = (width - pad.left - pad.right) * (item.value / max);
    ctx.fillStyle = "#526172";
    ctx.fillText(truncate(item.label, 18), 12, y + barH / 2);
    ctx.fillStyle = colors[index % colors.length];
    roundRect(ctx, pad.left, y, barW, barH, 5);
    ctx.fill();
    ctx.fillStyle = "#111827";
    ctx.fillText(asPercent ? formatPctValue(item.value) : formatNumber(item.value), pad.left + barW + 8, y + barH / 2);
  });
}

function setupCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.max(1, Math.floor(rect.height * ratio));
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  return { ctx, width: rect.width, height: rect.height };
}

function drawGrid(ctx, pad, plotW, plotH, max) {
  ctx.strokeStyle = "rgba(15, 23, 42, 0.10)";
  ctx.lineWidth = 1;
  ctx.font = "11px Segoe UI, sans-serif";
  ctx.fillStyle = "#64748b";
  for (let i = 0; i <= 4; i += 1) {
    const y = pad.top + (plotH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(pad.left + plotW, y);
    ctx.stroke();
    ctx.fillText(formatCompact(Math.round(max - (max / 4) * i)), 4, y + 3);
  }
}

function drawAxisLabels(ctx, series, pad, plotW, plotH) {
  ctx.fillStyle = "#64748b";
  ctx.font = "11px Segoe UI, sans-serif";
  const step = Math.max(1, Math.ceil(series.length / 8));
  series.forEach((item, index) => {
    if (index % step !== 0) return;
    const x = pad.left + (index + 0.5) * (plotW / series.length);
    ctx.save();
    ctx.translate(x - 8, pad.top + plotH + 16);
    ctx.rotate(-Math.PI / 8);
    ctx.fillText(item.label, 0, 0);
    ctx.restore();
  });
}

function roundRect(ctx, x, y, width, height, radius) {
  const safeHeight = Math.max(0, height);
  const safeRadius = Math.min(radius, Math.abs(width) / 2, Math.abs(safeHeight) / 2);
  ctx.beginPath();
  ctx.moveTo(x + safeRadius, y);
  ctx.arcTo(x + width, y, x + width, y + safeHeight, safeRadius);
  ctx.arcTo(x + width, y + safeHeight, x, y + safeHeight, safeRadius);
  ctx.arcTo(x, y + safeHeight, x, y, safeRadius);
  ctx.arcTo(x, y, x + width, y, safeRadius);
  ctx.closePath();
}

function dashboardMetrics() {
  const planning = data.planning || [];
  const buffer = data.buffer || [];
  const capacity = (data.capacityW15 || []).concat(data.capacityW16 || []);
  const risks = planning.filter((row) => ["A planifier", "Bloqué", "Surveiller"].includes(row.PLANIF));
  return {
    planningRows: planning.length,
    riskCount: risks.length,
    riskRate: risks.length / Math.max(1, planning.length),
    avgBuffer: average(buffer.map((row) => parsePercent(row["% ok Buffer Cible après DEC"]))),
    prodCoverage: average(buffer.map((row) => parsePercent(row["% ok Cible Prod après DEC"]))),
    avgLoad: average(capacity.map((row) => parsePercent(row["Taux charge"]))),
    weekCount: new Set(planning.map((row) => row.Sem)).size,
    wipCoverage: average(buffer.map((row) => toNumber(row["TOTAL WIP OK"]) / Math.max(1, toNumber(row["besoin Hebdo max"]) * 2)))
  };
}

function kpiCard(label, value, detail, icon, statusClass) {
  return `
    <article class="kpi-card">
      <div class="kpi-trend"><i data-lucide="${icon}"></i><h3>${label}</h3></div>
      <div class="kpi-value">${value}</div>
      <span class="${statusClass}">${detail}</span>
    </article>
  `;
}

function auditCard(label, value, detail) {
  return `
    <article class="audit-card">
      <h3>${label}</h3>
      <strong>${value}</strong>
      <p>${detail}</p>
    </article>
  `;
}

function meterRow(label, value, displayValue = null) {
  const safeValue = clamp(value, 0, 1.4);
  return `
    <div>
      <div class="metric-row">
        <span class="metric-label">${label}</span>
        <strong>${displayValue || formatPctValue(value)}</strong>
      </div>
      <div class="meter"><span style="width:${Math.min(100, safeValue * 100)}%"></span></div>
    </div>
  `;
}

function metricLine(label, value) {
  return `
    <div class="metric-row">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function capacityHeatCells(rows) {
  return rows.slice(0, 48).map((row) => {
    const load = parsePercent(row["Taux charge"]);
    const color = load > 1.05 ? "#fecaca" : load > 0.88 ? "#fde68a" : "#bbf7d0";
    return `
      <div class="heat-cell" style="background:${color}">
        <strong>${escapeHtml(row.Machine)}</strong>
        <span>${escapeHtml(row["Type Mach"])} - ${row["Taux charge"]}</span>
      </div>
    `;
  }).join("");
}

function currentDatasetKey() {
  if (state.view === "workbook") return activeSheetConfig().dataset;
  if (state.view === "planning") return "planning";
  if (state.view === "buffer") return "buffer";
  if (state.view === "met") return "suiviMet";
  if (state.view === "sources") return state.sourceDataset;
  if (state.view === "capacity") return "capacityW16";
  return null;
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function totalRows() {
  return Object.values(data).reduce((sumRows, rows) => sumRows + rows.length, 0);
}

function groupBy(rows, getter) {
  return rows.reduce((acc, row) => {
    const key = getter(row);
    acc[key] ||= [];
    acc[key].push(row);
    return acc;
  }, {});
}

function sum(values) {
  return values.reduce((total, value) => total + toNumber(value), 0);
}

function average(values) {
  const clean = values.map(Number).filter((value) => Number.isFinite(value));
  return clean.length ? clean.reduce((total, value) => total + value, 0) / clean.length : 0;
}

function compareValues(a, b) {
  const na = toNumber(a);
  const nb = toNumber(b);
  if (String(a).trim() !== "" && String(b).trim() !== "" && !Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
  return String(a ?? "").localeCompare(String(b ?? ""), "fr", { numeric: true, sensitivity: "base" });
}

function planStatus(bufferPct, retard, capacity) {
  if (bufferPct < 0.55 || retard > 80) return "Bloqué";
  if (bufferPct < 0.82 || capacity > 160) return "A planifier";
  if (bufferPct < 1 || retard > 24) return "Surveiller";
  return "Planifié";
}

function machineStatus(capa, planned, delay) {
  const load = planned / Math.max(1, capa);
  if (load > 1.05) return "Saturée";
  if (delay > 18) return "Attente matière";
  if (load > 0.85) return "Réglage";
  return "Disponible";
}

function inputType(column) {
  const lower = column.toLowerCase();
  if (lower.includes("date") || lower.includes("valid") || lower.includes("start") || lower.includes("fin") || lower.includes("entered")) return "date";
  if (lower.includes("%") || lower.includes("taux")) return "text";
  if (numericColumn(column)) return "number";
  return "text";
}

function numericColumn(column) {
  const lower = column.toLowerCase();
  const weekLike = ["sem", "semaine", "semaines", "sem besoin client", "sem met", "semaine actuelle"].includes(lower);
  return lower.includes("%") || lower.includes("taux") || lower.includes("qty") || lower.includes("qté") || lower.includes("yield") || lower.includes("capa") || lower.includes("stock") || lower.includes("wip") || lower.includes("besoin") || lower.includes("backlog") || lower.includes("target") || lower.includes("reste") || lower.includes("nb ") || lower.includes("waiting") || lower.includes("attente") || lower.includes("retard") || lower.includes("jours") || weekLike || lower.includes("charge") || lower.includes("durée") || lower.includes("lignes");
}

function longTextColumn(column) {
  const lower = column.toLowerCase();
  return lower.includes("remarque") || lower.includes("commentaire") || lower.includes("message") || lower.includes("description");
}

function selectValues(column) {
  const lower = column.toLowerCase();
  if (lower.includes("sem")) return [];
  if (lower.includes("charge plan")) return [];
  if (lower === "planif" || lower.includes("statut planif") || lower.includes("status planing")) return OPTION_SETS.planif;
  if (lower.includes("etat machine")) return OPTION_SETS.machine;
  if (lower.includes("statut prod") || lower === "statut" || lower === "status") return OPTION_SETS.status;
  if (lower === "prio") return ["Normale", "Moyenne", "Haute"];
  if (lower.includes("mrpc")) return OPTION_SETS.mrpc;
  if (lower.includes("type mach") || lower.includes("grp techno")) return OPTION_SETS.typeMach;
  if (lower.includes("client")) return OPTION_SETS.client;
  if (lower.includes("calib")) return OPTION_SETS.caliber;
  return [];
}

function coerceInputValue(column, value) {
  if (numericColumn(column) && value !== "" && !column.includes("%") && !column.toLowerCase().includes("taux")) return Number(value);
  return value;
}

function toNumber(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  const parsed = Number(String(value ?? "").replace("%", "").replace(",", ".").trim());
  return Number.isFinite(parsed) ? parsed : 0;
}

function parsePercent(value) {
  if (typeof value === "number") return value > 2 ? value / 100 : value;
  const str = String(value ?? "").replace("%", "").replace(",", ".").trim();
  const parsed = Number(str);
  if (!Number.isFinite(parsed)) return 0;
  return parsed / 100;
}

function pct(value) {
  return `${Math.round(value * 1000) / 10}%`;
}

function formatPctValue(value) {
  return `${Math.round(value * 1000) / 10}%`;
}

function formatNumber(value) {
  return new Intl.NumberFormat("fr-FR").format(Math.round(Number(value) || 0));
}

function formatCompact(value) {
  return new Intl.NumberFormat("fr-FR", { notation: "compact", maximumFractionDigits: 1 }).format(Number(value) || 0);
}

function sortMark(column) {
  if (state.sort.column !== column) return "";
  return state.sort.direction === "asc" ? " ↑" : " ↓";
}

function rndInt(random, min, max) {
  return Math.floor(random() * (max - min + 1)) + min;
}

function rndFloat(random, min, max) {
  return random() * (max - min) + min;
}

function pick(values, random) {
  return values[Math.floor(random() * values.length)];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function addDays(isoDate, days) {
  const date = new Date(`${isoDate}T00:00:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function truncate(value, length) {
  const text = String(value);
  return text.length > length ? `${text.slice(0, length - 1)}…` : text;
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}
