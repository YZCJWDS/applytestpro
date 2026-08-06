export const ORG_INFO = {
  fullName: "Organization for the recording, observation, and conservation of trees and other plants",
  shortName: "OROCTP / PlantProtect",
  domain: "plantprotect.npu.codes",
  charityId: "107233456RR0001",
  country: "Canada",
  registrationAct: "Alberta Charitable Fund-raising Act",
  effectiveDate: "March 12, 2025",
  issuer: "Canada Revenue Agency / Agence du revenu du Canada (Charities Directorate)",
  directorName: "Levi Predovic",
  missionStatement: "To systematically record, observe, and understand the growth patterns, phenology, and ecological health of trees and native plants, empowering communities to safeguard plant biodiversity.",
  stats: {
    loggedObservations: "14,820+",
    trackedSpecies: "385",
    activeVolunteers: "1,240",
    protectedHabitats: "42 Sites",
    dataAccuracy: "99.4%"
  }
};

export const SAMPLE_OBSERVATIONS = [
  {
    id: "OBS-2026-0891",
    commonName: "Sugar Maple",
    scientificName: "Acer saccharum",
    category: "Trees",
    status: "Stable",
    location: "Kananaskis Country, Alberta",
    coordinates: "50.9304° N, 115.1432° W",
    observedDate: "2026-08-02",
    observer: "Dr. Sarah Lin (Field Ecologist)",
    healthIndex: 94,
    phenology: "Late Summer Foliage",
    notes: "Densely leafed canopy with healthy chlorophyll levels. Trunk circumference measured at 1.42m. No signs of fungal leaf spot.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    tags: ["Deciduous", "Native", "Boreal Transition"]
  },
  {
    id: "OBS-2026-0884",
    commonName: "Western Redcedar",
    scientificName: "Thuja plicata",
    category: "Trees",
    status: "Vulnerable",
    location: "Pacific Rim Reserve, British Columbia",
    coordinates: "49.0122° N, 125.6881° W",
    observedDate: "2026-07-29",
    observer: "Marcus Vance (Botanical Observer)",
    healthIndex: 78,
    phenology: "Coning / Seed Mature",
    notes: "Old-growth specimen estimated over 350 years old. Micro-climate humidity drop detected; active soil moisture monitoring initiated.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    tags: ["Conifer", "Old Growth", "Rainforest"]
  },
  {
    id: "OBS-2026-0872",
    commonName: "Western Blue Iris",
    scientificName: "Iris missouriensis",
    category: "Wildflowers",
    status: "Protected",
    location: "Foothills Fescue Prairie, Alberta",
    coordinates: "51.1784° N, 114.3683° W",
    observedDate: "2026-07-25",
    observer: "Elena Rostova (Citizen Scientist)",
    healthIndex: 88,
    phenology: "Post-Bloom Fruiting",
    notes: "Thriving cluster of 45 stems along moisture seepage zone. Pollinator activity observed (Bombus ternarius present).",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
    tags: ["Perennial", "Prairie Native", "Wetland Habitat"]
  },
  {
    id: "OBS-2026-0865",
    commonName: "Ostrich Fern",
    scientificName: "Matteuccia struthiopteris",
    category: "Ferns & Mosses",
    status: "Stable",
    location: "Bow River Valley, Alberta",
    coordinates: "51.0447° N, 114.0719° W",
    observedDate: "2026-07-20",
    observer: "Prof. Kenneth Wright",
    healthIndex: 92,
    phenology: "Spore Dispersal Active",
    notes: "Understory moisture optimal. Height averaging 1.1 meters across patch colony.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
    tags: ["Fern", "Shade Tolerant", "Riparian"]
  },
  {
    id: "OBS-2026-0850",
    commonName: "Subalpine Fir",
    scientificName: "Abies lasiocarpa",
    category: "Trees",
    status: "Stable",
    location: "Banff High Alpine Zone, AB",
    coordinates: "51.1784° N, 115.5708° W",
    observedDate: "2026-07-15",
    observer: "Chloe Bouchard",
    healthIndex: 85,
    phenology: "Active Vegetative Growth",
    notes: "Krummholz formation recorded near timberline at 2,240m elevation. Extreme weather adaptation verified.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Alpine", "Conifer", "High Altitude"]
  },
  {
    id: "OBS-2026-0842",
    commonName: "Showy Lady's Slipper Orchid",
    scientificName: "Cypripedium reginae",
    category: "Wildflowers",
    status: "Endangered",
    location: "Protected Fen Sanctuary, AB/SK Border",
    coordinates: "53.5461° N, 110.0055° W",
    observedDate: "2026-07-10",
    observer: "Conservation Team Alpha",
    healthIndex: 96,
    phenology: "Peak Flowering State",
    notes: "Sensors report stable water table pH (6.8). Geo-fenced site protection active to prevent unauthorized picking.",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80",
    tags: ["Orchid", "Rare Specimen", "Fen Ecosystem"]
  }
];

export const CONSERVATION_PROJECTS = [
  {
    id: "PROJ-01",
    title: "Canadian Old-Growth Tree Phenology Sentinel",
    location: "Pacific & Rocky Mountain Belts",
    focus: "Longitudinal observation of ancient tree response to climate variation.",
    impact: "Over 850 ancient trees tagged with micro-dendrometers.",
    status: "Active Field Monitoring",
    badge: "Priority Project"
  },
  {
    id: "PROJ-02",
    title: "Wild Native Flora Digital Flora Mapping",
    location: "Alberta & Prairie Provinces",
    focus: "Crowdsourced high-resolution spatial logging of indigenous flora.",
    impact: "12,000+ verifiable observation entries uploaded by volunteers.",
    status: "Community Expanded",
    badge: "Citizen Science"
  },
  {
    id: "PROJ-03",
    title: "Endangered Fen & Wetland Flora Protection",
    location: "Western Boreal Peatlands",
    focus: "Conservation of fragile orchid and moss species vulnerable to drainage.",
    impact: "3 dedicated habitat protection zones established.",
    status: "Active Conservation",
    badge: "Habitat Safeguard"
  }
];
