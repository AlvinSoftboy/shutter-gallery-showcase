export type Category = "landscape" | "portrait" | "commercial" | "wedding";

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  body: string;
};

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
    readTime: "8 min read",
    tags: ["Landscape", "Travel", "Gear"],
    image:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=80",
    body: `Blue hour in the Arctic doesn't last long — maybe twenty minutes on a good day, ten on a cloudy one. You learn to be ready before the light arrives, or you miss it entirely.

I spent ten days above the arctic circle in Lofoten with a single lens: the Sony 16-35 GM. No zoom safety net. No switching between focal lengths when the moment arrives. Just one perspective, one discipline.

The decision forced something useful. Instead of reacting to the scene, I had to anticipate it — reading the terrain, pre-visualising the frame, committing to a position before the colour even appeared in the sky.

**What I learned**

The best frames came when I stopped hunting and started waiting. I'd identify a composition in daylight, return at dusk, and simply hold still. The mountains didn't move. The water didn't move. Only the light changed, and my job was to not miss it.

Cold weather affects batteries faster than any spec sheet admits. I was rotating three Sony NP-FZ100 packs and still lost one shoot to a dead body. Now I keep one inside my jacket at all times below freezing.

**On shooting with one lens**

The 16-35 GM is sharp edge to edge at f/8, fast enough at f/2.8 for stars, and wide enough to make fjords feel as enormous as they are. But wide glass punishes sloppy horizons — tilt the camera even slightly and the lines curve noticeably. It made me slower. More deliberate. Better.

If you're planning a trip like this: don't. Just go. The planning becomes a reason not to leave.`,
  },
  {
    slug: "one-light-portraits",
    title: "The Case for One-Light Portraits",
    excerpt: "Why constraint is the fastest path to a signature look.",
    date: "May 04, 2025",
    readTime: "6 min read",
    tags: ["Portrait", "Lighting", "Technique"],
    image:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=1200&q=80",
    body: `Every photographer I admire has a recognisable quality of light. Not a preset, not a colour grade — light. The way shadows fall, the way highlights bloom, the quality of the transition between the two.

Most of them got there by working with less, not more.

I run single-light portraits almost exclusively now. One Profoto B10, one large octobox, sometimes a reflector if the location demands it. That's the kit. The constraint has become the look.

**Why one light works**

Multiple lights give you control. One light gives you character. When you're balancing three sources, you're solving a technical problem. When you're working with one, you're making aesthetic decisions — where does the shadow fall? How deep is it? Does it serve the face or fight it?

The answers compound into a style.

**The setup I come back to**

Large octobox, camera left, slightly above eye level, angled down at roughly 30 degrees. Subject 1.5 metres from the light. That's it. From there, I move the subject relative to the source — closer for softer light, further for more contrast — and read the shadow on the far cheek.

When that shadow is clean and the catch light is sharp, I shoot.

**On working with people**

One light means fewer assistants, less setup time, and a smaller physical footprint in the room. People relax faster when there isn't a crew reconfiguring equipment around them. Some of my quietest, most honest portraits came from sessions that looked, from the outside, barely like shoots at all.`,
  },
  {
    slug: "camera-doesnt-matter",
    title: "Your Camera Doesn't Matter (Until It Does)",
    excerpt: "A working photographer's take on gear, honestly.",
    date: "Apr 18, 2025",
    readTime: "5 min read",
    tags: ["Gear", "Opinion", "Business"],
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
    body: `I've shot campaigns with a Phase One IQ4 and personal work on a Ricoh GR IIIx. Both sold. Both got compliments. One cost forty times the other.

The internet has decided that gear doesn't matter. I think that's mostly right and occasionally wrong, and the difference is worth understanding.

**Where gear doesn't matter**

At the level most photographers operate — clients, editorial, portraits, events — any modern mirrorless camera with a decent prime lens is technically sufficient. The sensor resolves more than the output requires. The autofocus is fast enough. The dynamic range is wide enough.

If your images aren't working, the camera is not the problem.

**Where gear does matter**

Large-format advertising. Billboard-scale print. Catalogue work requiring extreme cropping latitude. These use cases exist, they pay well, and they genuinely require medium format or high-resolution full-frame bodies.

More practically: ergonomics matter for long shoots. Weather sealing matters in harsh conditions. Battery life matters when you can't stop. These aren't aesthetic upgrades — they're operational ones.

**The honest answer**

Buy the best lens you can afford, then forget about gear for two years. Shoot constantly. The equipment conversation is mostly a way to avoid the harder conversation about whether the work is good.

When the work is good, the equipment conversation becomes genuinely interesting — because you'll have specific problems to solve, not theoretical ones.`,
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
