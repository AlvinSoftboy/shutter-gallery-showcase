export type Category = "landscape" | "portrait" | "commercial" | "wedding";

export type Project = {
  slug: string;
  title: string;
  category: Category;
  year: string;
  location: string;
  client?: string;
  cover: string;
  images: string[];
  description: string;
  gear: string[];
};

export const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "landscape", label: "Landscape" },
  { id: "portrait", label: "Portrait" },
  { id: "commercial", label: "Commercial" },
  { id: "wedding", label: "Wedding" },
];

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PROJECTS: Project[] = [
  {
    slug: "northern-silence",
    title: "Northern Silence",
    category: "landscape",
    year: "2025",
    location: "Lofoten, Norway",
    cover: img("photo-1508739773434-c26b3d09e071"),
    images: [
      img("photo-1508739773434-c26b3d09e071"),
      img("photo-1500534314209-a25ddb2bd429"),
      img("photo-1483728642387-6c3bdd6c93e5"),
    ],
    description:
      "A ten-day expedition through the arctic circle chasing blue hour and the raw geometry of fjords under a low winter sun.",
    gear: ["Sony A7R V", "16-35 GM", "70-200 GM II"],
  },
  {
    slug: "concrete-portraits",
    title: "Concrete Portraits",
    category: "portrait",
    year: "2025",
    client: "Independent",
    location: "Tokyo, Japan",
    cover: img("photo-1544005313-94ddf0286df2"),
    images: [
      img("photo-1544005313-94ddf0286df2"),
      img("photo-1524504388940-b1c1722653e1"),
      img("photo-1502823403499-6ccfcf4fb453"),
    ],
    description:
      "Editorial portrait series exploring identity against the brutalist geometry of Shibuya after dusk.",
    gear: ["Leica SL3", "50 Summilux", "Profoto B10"],
  },
  {
    slug: "aether-campaign",
    title: "Aether — SS26 Campaign",
    category: "commercial",
    year: "2025",
    client: "Aether Apparel",
    location: "Los Angeles, USA",
    cover: img("photo-1441986300917-64674bd600d8"),
    images: [
      img("photo-1441986300917-64674bd600d8"),
      img("photo-1483985988355-763728e1935b"),
      img("photo-1490481651871-ab68de25d43d"),
    ],
    description:
      "Global campaign for Aether's Spring/Summer 2026 collection. Studio and on-location production across three days.",
    gear: ["Phase One IQ4", "Schneider 80mm", "Broncolor Siros"],
  },
  {
    slug: "the-vow",
    title: "The Vow",
    category: "wedding",
    year: "2024",
    location: "Ubud, Bali",
    cover: img("photo-1519741497674-611481863552"),
    images: [
      img("photo-1519741497674-611481863552"),
      img("photo-1511285560929-80b456fea0bc"),
      img("photo-1465495976277-4387d4b0e4a6"),
    ],
    description:
      "An intimate documentary wedding in the Balinese highlands — quiet moments, warm rain, and a golden processional.",
    gear: ["Sony A7 IV", "35 GM", "85 GM"],
  },
  {
    slug: "iron-coast",
    title: "Iron Coast",
    category: "landscape",
    year: "2024",
    location: "Faroe Islands",
    cover: img("photo-1470071459604-3b5ec3a7fe05"),
    images: [
      img("photo-1470071459604-3b5ec3a7fe05"),
      img("photo-1418065460487-3e41a6c84dc5"),
      img("photo-1454496522488-7a8e488e8606"),
    ],
    description:
      "Storm systems rolling across basalt cliffs. Shot handheld between squalls with weather-sealed bodies.",
    gear: ["Sony A7R V", "24-70 GM II"],
  },
  {
    slug: "atlas-motors",
    title: "Atlas Motors",
    category: "commercial",
    year: "2024",
    client: "Atlas Motors",
    location: "Berlin, Germany",
    cover: img("photo-1503376780353-7e6692767b70"),
    images: [
      img("photo-1503376780353-7e6692767b70"),
      img("photo-1511919884226-fd3cad34687c"),
      img("photo-1493238792000-8113da705763"),
    ],
    description:
      "Product and lifestyle imagery for Atlas Motors' electric flagship. Underground garage lighting design in-house.",
    gear: ["Canon R5", "RF 24-70 f/2.8", "Aputure 600d"],
  },
];

export const PRESSED_LOGOS = [
  "APPLE",
  "NATIONAL GEOGRAPHIC",
  "NIKE",
  "SONY",
  "LEICA",
  "PATAGONIA",
  "MONOCLE",
];

export const STORE_ITEMS = [
  {
    id: "signature-presets",
    name: "Signature Presets — Vol. 03",
    price: "$49",
    tag: "Lightroom",
    image:
      "https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cine-luts",
    name: "Cinematic LUT Pack",
    price: "$39",
    tag: "Video",
    image:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "field-guide",
    name: "The Field Guide — eBook",
    price: "$24",
    tag: "PDF",
    image:
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "portrait-course",
    name: "Portrait Masterclass",
    price: "$129",
    tag: "Course",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
];

export const JOURNAL_POSTS = [
  {
    slug: "chasing-blue-hour",
    title: "Chasing Blue Hour in the Arctic",
    excerpt: "Notes from ten days above the arctic circle with a single lens.",
    date: "Jun 12, 2025",
    image:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "one-light-portraits",
    title: "The Case for One-Light Portraits",
    excerpt: "Why constraint is the fastest path to a signature look.",
    date: "May 04, 2025",
    image:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "camera-doesnt-matter",
    title: "Your Camera Doesn't Matter (Until It Does)",
    excerpt: "A working photographer's take on gear, honestly.",
    date: "Apr 18, 2025",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
  },
];

export const SERVICES = [
  {
    name: "Commercial & Campaign",
    price: "From $8,500 / day",
    points: [
      "Concept & mood direction",
      "Full production crew",
      "Licensed usage across channels",
      "Post-production included",
    ],
  },
  {
    name: "Editorial Portrait",
    price: "From $2,400 / session",
    points: [
      "Half-day studio or location",
      "One-light or natural setup",
      "20 retouched selects",
      "72-hour turnaround",
    ],
  },
  {
    name: "Wedding & Story",
    price: "From $4,200",
    points: [
      "Documentary approach",
      "Two photographers",
      "Full-day coverage",
      "Fine-art gallery delivery",
    ],
  },
];
