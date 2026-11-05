var COMPANY = "GharFix",
  WHATSAPP = "923268114126";
// code, name, description, palette dark→light, vein colour, seed, type, extra
var MX = [
  [
    "MX-01",
    "Liquid Silver",
    "Silver and white swirls over a graphite base. Clean and modern.",
    ["#1d2227", "#5b6772", "#aab5be", "#f2f6f9"],
    "#ffffff",
    3,
    "m",
  ],
  [
    "MX-02",
    "Midnight Galaxy",
    "Deep navy with electric blue and silver star-like flow.",
    ["#03060f", "#0c2a7a", "#2f6bff", "#bcd0ff"],
    "#dbe6ff",
    11,
    "m",
  ],
  [
    "MX-03",
    "Copper Lava",
    "Molten copper streams through a black base.",
    ["#0b0504", "#5e2408", "#c9692a", "#ffc07d"],
    "#ffd9a8",
    21,
    "m",
  ],
  [
    "MX-04",
    "Ocean Wave",
    "Teal and aqua waves with white foam lines.",
    ["#03262b", "#0a7f86", "#25d3cb", "#eafffd"],
    "#ffffff",
    5,
    "m",
  ],
  [
    "MX-05",
    "Gold Rush",
    "Champagne gold veins on deep charcoal. Showroom style.",
    ["#0f0d08", "#5e4812", "#d1a238", "#fbe9ac"],
    "#fff3c4",
    8,
    "m",
  ],
  [
    "MX-06",
    "Emerald Marble",
    "Green marble look with fine white veining.",
    ["#021a14", "#0a6a47", "#26c58a", "#d8ffee"],
    "#ffffff",
    14,
    "m",
  ],
  [
    "MX-07",
    "Rose Quartz",
    "Soft rose gold and blush on a warm pearl base.",
    ["#3a1e24", "#b8706f", "#efb4ac", "#fff1ee"],
    "#ffffff",
    17,
    "m",
  ],
  [
    "MX-08",
    "Black Pearl",
    "Near-black with pearl shimmer. Bold and quiet.",
    ["#030406", "#1a2027", "#59636d", "#c3ccd5"],
    "#e6ecf1",
    29,
    "m",
  ],
  [
    "MX-09",
    "Sapphire Depths",
    "Rich blue deepening to turquoise highlights.",
    ["#030f2c", "#0c3f9e", "#15a8d6", "#b6f0ff"],
    "#e0f8ff",
    33,
    "m",
  ],
  [
    "MX-10",
    "Desert Dune",
    "Bronze, sand and brown ripples like wind-blown dunes.",
    ["#24160a", "#6d4723", "#bd8d52", "#f3dcb0"],
    "#fff0cf",
    40,
    "m",
  ],
  [
    "MX-11",
    "Amethyst Nebula",
    "Violet and magenta clouds over black.",
    ["#08030f", "#4a1a99", "#b13fb4", "#efc1ff"],
    "#f6d9ff",
    47,
    "m",
  ],
  [
    "MX-12",
    "Arctic Pearl",
    "White pearl with ice-blue flow. Bright and airy.",
    ["#aebfcc", "#dbe6ee", "#f6fafc", "#ffffff"],
    "#7fb2d6",
    52,
    "m",
  ],
  [
    "MX-13",
    "Royal Bronze",
    "Warm antique bronze with dark chocolate depth.",
    ["#150b05", "#4e2c14", "#a56a32", "#e9b97a"],
    "#ffe0b0",
    61,
    "m",
  ],
  [
    "MX-14",
    "Crimson Flame",
    "Deep red metallic with glowing orange edges.",
    ["#0c0203", "#5e0a12", "#d3202c", "#ff9a62"],
    "#ffd0a8",
    66,
    "m",
  ],
  [
    "MX-15",
    "Jade Dragon",
    "Dark jade green with gold-tinted highlights.",
    ["#02130d", "#0b4a33", "#2f9a6c", "#d6e8a0"],
    "#f4f0b8",
    71,
    "m",
  ],
  [
    "MX-16",
    "Steel Storm",
    "Stormy steel grey with bright silver lightning.",
    ["#0a0d10", "#2c353d", "#76848f", "#dfe7ed"],
    "#ffffff",
    76,
    "m",
  ],
  [
    "MX-17",
    "Sunset Orange",
    "Burnt orange and gold glow, warm and lively.",
    ["#1c0803", "#a2310c", "#f08224", "#ffe08a"],
    "#fff0b8",
    81,
    "m",
  ],
  [
    "MX-18",
    "Glacier Blue",
    "Cool ice blue with white frost lines.",
    ["#082a44", "#2a78b0", "#8fd0ee", "#f2fcff"],
    "#ffffff",
    86,
    "m",
  ],
  [
    "MX-19",
    "Pink Champagne",
    "Blush pink with champagne gold shimmer.",
    ["#3d2227", "#c88a92", "#f2c6b8", "#fff3dc"],
    "#ffe9b8",
    91,
    "m",
  ],
  [
    "MX-20",
    "Titanium Smoke",
    "Smoky titanium with soft grey clouds. Industrial look.",
    ["#0f1215", "#3a4249", "#838d95", "#cdd3d8"],
    "#eef1f3",
    96,
    "m",
  ],
  [
    "MX-21",
    "Pink Nebula",
    "Hot pink and magenta clouds over deep plum.",
    ["#12041a", "#6a1a7a", "#e0489c", "#ffd0ec"],
    "#ffe6f5",
    101,
    "m",
  ],
  [
    "MX-22",
    "Neon Teal Abyss",
    "Glowing teal rising from a near-black base.",
    ["#00100f", "#005a55", "#00d0b0", "#c8fff2"],
    "#e8fffa",
    106,
    "m",
  ],
  [
    "MX-23",
    "Platinum Frost",
    "Bright platinum with frosty white highlights.",
    ["#2a2f35", "#8a949d", "#d5dbe0", "#ffffff"],
    "#ffffff",
    111,
    "m",
  ],
  [
    "MX-24",
    "Burgundy Wine",
    "Rich wine red fading to soft rose. Elegant and warm.",
    ["#14030a", "#5a0f2a", "#a8284f", "#f0a0b4"],
    "#ffd0dc",
    116,
    "m",
  ],
  [
    "MX-25",
    "Golden Sand",
    "Soft gold and sand tones with a light, sunny feel.",
    ["#2a1d08", "#8a6a2a", "#e0bb68", "#fff2cc"],
    "#fff8e0",
    121,
    "m",
  ],
  [
    "MX-26",
    "Cosmic Violet",
    "Deep indigo with bright violet flow.",
    ["#05020e", "#2a1475", "#7a4ae0", "#d4c4ff"],
    "#ece4ff",
    126,
    "m",
  ],
  [
    "MX-27",
    "Forest Moss",
    "Dark forest green with fresh moss highlights.",
    ["#040d06", "#1a4a1e", "#5a9a3a", "#d8eca8"],
    "#f0ffd0",
    131,
    "m",
  ],
  [
    "MX-28",
    "Ruby Fire",
    "Blazing ruby red with orange sparks.",
    ["#0a0102", "#6a0614", "#e02a3a", "#ffc0a0"],
    "#ffe0cc",
    136,
    "m",
  ],
  [
    "MX-29",
    "Cyan Lagoon",
    "Clear tropical cyan with white sparkle.",
    ["#02202c", "#067a9a", "#34d0e8", "#e0fbff"],
    "#ffffff",
    141,
    "m",
  ],
  [
    "MX-30",
    "Smoked Gold",
    "Dark smoky base with antique gold glow.",
    ["#0b0a09", "#3a3226", "#9a7e4a", "#e8d49a"],
    "#fff0c0",
    146,
    "m",
  ],
  [
    "MX-31",
    "Lilac Silk",
    "Soft lilac and white. Calm and modern.",
    ["#2a2038", "#8a74b0", "#cbb8e8", "#faf4ff"],
    "#ffffff",
    151,
    "m",
  ],
  [
    "MX-32",
    "Ink Blue Silver",
    "Midnight ink blue with silver streaks.",
    ["#02040c", "#0a1a40", "#4a6aa8", "#dfe8ff"],
    "#ffffff",
    156,
    "m",
  ],
  [
    "MX-33",
    "Pearl White",
    "Clean pearl white with soft grey swirls. Bright and elegant.",
    ["#d9dee2", "#eceff2", "#f8fafb", "#ffffff"],
    "#aab4bc",
    301,
    "m",
  ],
  [
    "MX-34",
    "Ivory Cream",
    "Warm ivory and cream with gentle gold-beige flow.",
    ["#d8cdb8", "#eadfca", "#f6efe0", "#fffaf0"],
    "#c2ab80",
    306,
    "m",
  ],
  [
    "MX-35",
    "Soft Sky",
    "Light sky blue with white clouds. Fresh and calm.",
    ["#a9cde8", "#cfe5f4", "#e8f4fb", "#ffffff"],
    "#7fb0d4",
    311,
    "m",
  ],
  [
    "MX-36",
    "Mint Breeze",
    "Pale mint green with white shimmer.",
    ["#a8d8c4", "#cdeadc", "#e8f6ef", "#ffffff"],
    "#7cc0a2",
    316,
    "m",
  ],
  [
    "MX-37",
    "Blush Pink",
    "Soft blush pink with a light pearl finish.",
    ["#e8b8c0", "#f4d2d6", "#fbe8ea", "#ffffff"],
    "#d890a0",
    321,
    "m",
  ],
  [
    "MX-38",
    "Champagne Light",
    "Light champagne with a gentle golden glow.",
    ["#d8c49a", "#ead9b4", "#f6ecd2", "#fffaee"],
    "#c9a45c",
    326,
    "m",
  ],
  [
    "MX-39",
    "Light Silver Grey",
    "Light silver and grey. Neutral for any space.",
    ["#aeb6bd", "#cdd3d8", "#e6eaed", "#fafbfc"],
    "#8e98a1",
    331,
    "m",
  ],
  [
    "MX-40",
    "Lavender Mist",
    "Soft lavender fading to white. Quiet and modern.",
    ["#c4b4de", "#ddd2ee", "#efe9f7", "#ffffff"],
    "#a692cc",
    336,
    "m",
  ],
  [
    "MX-41",
    "Sand Beige",
    "Light sand and beige tones. Warm and natural.",
    ["#cdb893", "#e0d0b2", "#efe4cc", "#fbf6ea"],
    "#b39a6a",
    341,
    "m",
  ],
  [
    "MX-42",
    "Aqua Pearl",
    "Pale aqua with a pearl sheen, like shallow water.",
    ["#9edce0", "#c6ecee", "#e4f7f8", "#ffffff"],
    "#6cc0c8",
    346,
    "m",
  ],
  [
    "MX-43",
    "Peach Glow",
    "Soft peach and cream. Cheerful and warm.",
    ["#f0b898", "#f7d2ba", "#fce8da", "#fffaf5"],
    "#e49a70",
    351,
    "m",
  ],
  [
    "MX-44",
    "Moonstone",
    "Cool grey-blue with a soft moonlight shine.",
    ["#b9c4d0", "#d5dde6", "#ebf0f5", "#fdfeff"],
    "#98a8ba",
    356,
    "m",
  ],
];
var AR = [
  [
    "AR-01",
    "Ocean River",
    "Epoxy river of blue water between dark stone banks.",
    ["#05080c", "#101a24", "#233648", "#4a6a86"],
    "#9ec4e0",
    101,
    "river",
    ["#0fb5c9", "#6ff0f0", "#ffffff"],
  ],
  [
    "AR-02",
    "Timber River",
    "Warm wood-tone banks with a clear blue river through the middle.",
    ["#1f1208", "#4a2a14", "#7c4a24", "#b07a45"],
    "#f0c890",
    106,
    "river",
    ["#0b6fbf", "#3ec3ee", "#eaffff"],
  ],
  [
    "AR-03",
    "Amethyst Geode",
    "Layered purple crystal rings, like a cut geode.",
    ["#150528", "#5b1fa8", "#b46be0", "#f3e1ff"],
    "#ffffff",
    111,
    "geode",
  ],
  [
    "AR-04",
    "Gold Vein Marble",
    "Black marble with fine gold veins. Luxury lobbies and showrooms.",
    ["#060606", "#101010", "#1b1b1b", "#2a2a2a"],
    "#e5b94a",
    116,
    "marble",
  ],
  [
    "AR-05",
    "Carrara White",
    "Classic white marble with soft grey veins.",
    ["#d4d9dd", "#e9edf0", "#f6f8f9", "#ffffff"],
    "#7b838a",
    121,
    "marble",
  ],
  [
    "AR-06",
    "Terrazzo Classic",
    "Colourful stone chips set in a pale base.",
    ["#e9e4dc", "#c46a4a", "#3a4a58", "#d8b36a"],
    "#fff",
    126,
    "chips",
  ],
  [
    "AR-07",
    "Terrazzo Mono",
    "Black, grey and white chips. Modern and clean.",
    ["#2a2d31", "#f4f4f2", "#9aa0a6", "#5a6168"],
    "#fff",
    131,
    "chips",
  ],
  [
    "AR-08",
    "Granite Flake",
    "Speckled granite look. Hides dirt, great for garages.",
    ["#3a3f43", "#5c6368", "#8d949a", "#c4c9cd"],
    "#fff",
    136,
    "flake",
  ],
  [
    "AR-09",
    "Sunset Waves",
    "Layered waves from deep purple to golden yellow.",
    ["#3b0d4f", "#c2254f", "#ff7a2f", "#ffd36a"],
    "#fff",
    141,
    "waves",
  ],
  [
    "AR-10",
    "Coastal Shore",
    "Sea water rolling onto a sandy beach.",
    ["#0a6c8f", "#1fb0b8", "#8fe3dc", "#f1e2b8"],
    "#fff",
    146,
    "waves",
  ],
  [
    "AR-11",
    "Fluid Rainbow",
    "Bold poured colours with flowing cells and lacing.",
    ["#1b0a4a", "#d3207b", "#12c4c9", "#ffe45e"],
    "#ffffff",
    151,
    "fluid",
  ],
  [
    "AR-12",
    "Aurora Lights",
    "Green and violet northern lights across a dark sky.",
    ["#02101c", "#0a6e5a", "#35e0a1", "#8f6bff"],
    "#d9fff0",
    156,
    "fluid",
  ],
];
var MB = [
  [
    "MB-01",
    "Calacatta Gold",
    "White marble with bold gold veins. Premium and bright.",
    ["#e6e2da", "#f1eee8", "#faf8f4", "#ffffff"],
    "#c9a24a",
    501,
    "marble",
  ],
  [
    "MB-02",
    "Nero Marquina",
    "Deep black marble with sharp white veins.",
    ["#050505", "#0c0c0c", "#161616", "#222222"],
    "#f2f2f2",
    506,
    "marble",
  ],
  [
    "MB-03",
    "Emerald Green Marble",
    "Dark green marble with pale veining. Rich and classic.",
    ["#06281c", "#0c4a34", "#16694a", "#238a62"],
    "#e8fff4",
    511,
    "marble",
  ],
  [
    "MB-04",
    "Royal Blue Marble",
    "Deep blue marble with light blue-white veins.",
    ["#071a44", "#0d2d78", "#1648a8", "#2862c8"],
    "#d6e6ff",
    516,
    "marble",
  ],
  [
    "MB-05",
    "Rosa Pink Marble",
    "Soft pink marble with rose-brown veins.",
    ["#e8c4c8", "#f2d6d8", "#f9e8e8", "#fff4f4"],
    "#b8707c",
    521,
    "marble",
  ],
  [
    "MB-06",
    "Grey Statuario",
    "Light grey marble with strong dark grey veins.",
    ["#aab0b6", "#c4c9ce", "#dcdfe2", "#f1f3f4"],
    "#4a525a",
    526,
    "marble",
  ],
  [
    "MB-07",
    "Bronze Onyx",
    "Warm bronze-brown marble with golden streaks.",
    ["#2a1a0e", "#50321a", "#8a5c32", "#c89458"],
    "#ffe3b0",
    531,
    "marble",
  ],
  [
    "MB-08",
    "Burgundy Marble",
    "Deep wine marble with pink-white veins.",
    ["#2a0a14", "#4e1226", "#7a1c3c", "#a02e55"],
    "#f6d2dc",
    536,
    "marble",
  ],
  [
    "MB-09",
    "Travertine Beige",
    "Natural beige stone look with soft brown veining.",
    ["#c9b898", "#dccdb0", "#ece2cc", "#f8f2e4"],
    "#a48e68",
    541,
    "marble",
  ],
  [
    "MB-10",
    "Violet Amethyst Marble",
    "Purple marble with light lilac veins.",
    ["#1a0b2e", "#33185a", "#5a2e98", "#8452c8"],
    "#eadcff",
    546,
    "marble",
  ],
];
var CM = [
  [
    "CM-01",
    "Corporate Grey",
    "Fine speckled mid-grey. Hides dirt, ideal for open offices.",
    ["#7a8086", "#8a9096", "#9aa0a6", "#aab0b5"],
    "#fff",
    701,
    "flake",
  ],
  [
    "CM-02",
    "Polished Concrete Look",
    "Soft mottled concrete finish. Modern and neutral.",
    ["#8d9296", "#9ca1a5", "#aeb3b6", "#c0c4c7"],
    "#fff",
    706,
    "conc",
  ],
  [
    "CM-03",
    "Executive Charcoal",
    "Deep charcoal with a subtle mottled finish. Boardrooms and lobbies.",
    ["#23272a", "#2e3337", "#3a4044", "#484f54"],
    "#fff",
    711,
    "conc",
  ],
  [
    "CM-04",
    "Showroom White",
    "Bright, clean white gloss. Showrooms, clinics and labs.",
    ["#dfe2e4", "#eaedee", "#f4f6f6", "#fcfdfd"],
    "#fff",
    716,
    "conc",
  ],
  [
    "CM-05",
    "Terrazzo Office",
    "Light terrazzo with soft grey chips. Reception and corridors.",
    ["#e6e4e0", "#b8b4ac", "#8f9aa3", "#d2cfc8"],
    "#fff",
    721,
    "chips",
  ],
  [
    "CM-06",
    "Graphite Terrazzo",
    "Dark terrazzo with grey and white chips. Strong and modern.",
    ["#33383c", "#6a7076", "#9aa1a7", "#d0d4d7"],
    "#fff",
    726,
    "chips",
  ],
  [
    "CM-07",
    "Navy Corporate",
    "Deep navy tone that suits corporate brand colours.",
    ["#0f1d33", "#16294a", "#1f3a63", "#2b4c7c"],
    "#fff",
    731,
    "conc",
  ],
  [
    "CM-08",
    "Sage Calm",
    "Muted sage green. Calm for clinics, schools and studios.",
    ["#8fa395", "#a0b3a6", "#b2c3b7", "#c6d3c9"],
    "#fff",
    736,
    "conc",
  ],
  [
    "CM-09",
    "Warm Stone",
    "Warm stone beige. Welcoming for retail and hospitality.",
    ["#b2a794", "#c0b6a4", "#cfc6b6", "#ded7ca"],
    "#fff",
    741,
    "conc",
  ],
  [
    "CM-10",
    "Silver Metallic Corporate",
    "Subtle silver metallic flow. Professional, not flashy.",
    ["#4a5158", "#7b858d", "#aeb7be", "#e0e5e9"],
    "#ffffff",
    746,
    "m",
  ],
  [
    "CM-11",
    "Granite Reception",
    "Granite-style flake for busy reception and walkways.",
    ["#3a3f43", "#5c6368", "#8d949a", "#c4c9cd"],
    "#fff",
    751,
    "flake",
  ],
  [
    "CM-12",
    "Slate Blue Metallic",
    "Slate blue metallic finish. Executive offices and lounges.",
    ["#1a2430", "#34495e", "#6b87a3", "#c3d2e0"],
    "#e4edf5",
    756,
    "m",
  ],
];
var SG = [
  [
    "SG-01",
    "Blue Agate Swirl",
    "Deep blue, black and white swirls with silver lines, like flowing agate.",
    ["#040a16", "#0f3a78", "#7d9cc0", "#eef3f8"],
    "#fff",
    901,
    "swirl",
  ],
  [
    "SG-02",
    "Cream & Gold River",
    "Cream base with a blue river edged in gold lines. Luxury living rooms.",
    ["#d8c9a8", "#e8dcc0", "#f4ecd6", "#fffaee"],
    "#c9a24a",
    906,
    "river",
    ["#1d4f9a", "#5a8fd0", "#d4a84a"],
  ],
  [
    "SG-03",
    "Steel Blue Marble",
    "Smooth steel-blue marble with soft light veins and a deep gloss.",
    ["#1a2f4a", "#2c4a6e", "#4a6f96", "#7d9cbd"],
    "#d6e4f2",
    911,
    "marble",
  ],
  [
    "SG-04",
    "Blue River on Black",
    "Bright blue and turquoise river with silver edges over a dark floor.",
    ["#05080e", "#0b1424", "#15233a", "#2a3d5a"],
    "#c8d6e6",
    916,
    "river",
    ["#0a6ec2", "#2ec4e6", "#e8f0f8"],
  ],
  [
    "SG-05",
    "Misty Grey Marble",
    "Light grey-white marble with soft grey veins. Kitchens and hallways.",
    ["#b8bcc0", "#d0d3d6", "#e4e6e8", "#f6f7f8"],
    "#6a7077",
    921,
    "marble",
  ],
  [
    "SG-06",
    "Ivory Gold Trail",
    "Polished ivory with a trail of gold shimmer. Bright and elegant.",
    ["#e2d8c4", "#efe7d6", "#f8f3e8", "#fffdf8"],
    "#d9b45c",
    926,
    "m",
  ],
  [
    "SG-07",
    "Teal Ocean Marble",
    "Teal, emerald and blue waves with white veins. Bold feature floor.",
    ["#052a3a", "#0a6a78", "#1aa38f", "#7fd8c8"],
    "#ffffff",
    931,
    "m",
  ],
  [
    "SG-08",
    "Charcoal Silver Swirl",
    "Charcoal base with white and silver swirls. Modern kitchens.",
    ["#0a0c0e", "#2a3036", "#7b858e", "#f2f5f7"],
    "#fff",
    936,
    "swirl",
  ],
  [
    "SG-09",
    "Dark Brushed Steel",
    "Dark streaked steel look with a glossy mirror finish.",
    ["#0c0e10", "#23282c", "#4a5259", "#7c868e"],
    "#b0bac2",
    941,
    "brush",
  ],
  [
    "SG-10",
    "Showroom Grey Slab",
    "Grey stone-slab look with fine white lines. Showrooms and garages.",
    ["#4a4e52", "#62676c", "#7e848a", "#9aa0a6"],
    "#e8ebee",
    946,
    "marble",
  ],
  [
    "SG-11",
    "Black & White Swirl",
    "Black, grey and white swirls with a hint of blue. Garages and workshops.",
    ["#050608", "#1c2a40", "#8a96a6", "#ffffff"],
    "#fff",
    951,
    "swirl",
  ],
  [
    "SG-12",
    "Pearl Cream Flow",
    "Soft cream and white flow with a gentle pearl sheen.",
    ["#d9cfb8", "#ece4d0", "#f8f3e6", "#ffffff"],
    "#fff",
    956,
    "swirl",
  ],
];
var D = MX.concat(SG, MB, AR, CM);
function $(i) {
  return document.getElementById(i);
}
function hx(h) {
  return [1, 3, 5].map(function (i) {
    return (parseInt(h.substr(i, 2), 16) / 255).toFixed(3);
  });
}
function mix(a, b, t) {
  var A = [1, 3, 5].map(function (i) {
      return parseInt(a.substr(i, 2), 16);
    }),
    B = [1, 3, 5].map(function (i) {
      return parseInt(b.substr(i, 2), 16);
    });
  return (
    "rgb(" +
    A.map(function (x, i) {
      return Math.round(x + (B[i] - x) * t);
    }).join(",") +
    ")"
  );
}
function rnd(s) {
  return function () {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}
var TY = {
  m: { f: "0.0045 0.009", o: 4, k: 3.2, b: -1.15, v: ["0.005 0.011", 2, -4, 0.62] },
  river: { f: "0.0045 0.009", o: 4, k: 3.2, b: -1.15, v: ["0.005 0.011", 2, -4, 0.62] },
  fluid: { f: "0.012 0.02", o: 3, k: 3.4, b: -1.2, v: ["0.012 0.02", 2, -6, 0.55] },
  geode: { f: "0.0035 0.007", o: 3, k: 3.4, b: -1.2, cyc: 1 },
  marble: { f: "0.004 0.008", o: 3, k: 3, b: -1.1, v: ["0.0035 0.008", 4, -5, 0.95] },
  swirl: { f: "0.0022 0.004", o: 3, k: 2.2, b: -0.55, cyc: 1 },
  brush: { f: "0.002 0.03", o: 3, k: 3.2, b: -1.15, v: ["0.002 0.03", 2, -4, 0.62] },
  conc: { f: "0.012 0.016", o: 4, k: 1.6, b: -0.3 },
  flake: { f: "0.32", o: 2, k: 2.3, b: -0.65, disc: 1 },
};
function sv(d, uid, defs, body, S) {
  S = S || 1;
  var W = 400 * S,
    H = 300 * S;
  return (
    '<svg viewBox="0 0 ' +
    W +
    " " +
    H +
    '" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' +
    d[1] +
    ' sample"><defs>' +
    defs +
    '<linearGradient id="s' +
    uid +
    '" x1="0" y1="0" x2="1" y2="1"><stop offset=".30" stop-color="#fff" stop-opacity="0"/><stop offset=".48" stop-color="#fff" stop-opacity=".30"/><stop offset=".56" stop-color="#fff" stop-opacity="0"/><stop offset=".78" stop-color="#fff" stop-opacity=".12"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>' +
    body +
    '<rect width="' +
    W +
    '" height="' +
    H +
    '" fill="url(#s' +
    uid +
    ')"/></svg>'
  );
}
function filt(id, d, o) {
  var p = d[3].map(hx),
    s = d[5],
    tv = o.cyc
      ? [0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3].map(function (i) {
          return p[i];
        })
      : p;
  var T = function (k) {
      return tv
        .map(function (c) {
          return c[k];
        })
        .join(" ");
    },
    ty = o.disc ? "discrete" : "table",
    m = o.k + " 0 0 0 " + o.b + " ";
  var f =
    '<filter id="' +
    id +
    '" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="' +
    o.f +
    '" numOctaves="' +
    o.o +
    '" seed="' +
    s +
    '" result="n"/><feColorMatrix in="n" values="' +
    m +
    m +
    m +
    '0 0 0 0 1" result="g"/>' +
    '<feComponentTransfer in="g" result="col"><feFuncR type="' +
    ty +
    '" tableValues="' +
    T(0) +
    '"/><feFuncG type="' +
    ty +
    '" tableValues="' +
    T(1) +
    '"/><feFuncB type="' +
    ty +
    '" tableValues="' +
    T(2) +
    '"/></feComponentTransfer>';
  if (o.v) {
    var v = hx(d[4]);
    f +=
      '<feTurbulence type="turbulence" baseFrequency="' +
      o.v[0] +
      '" numOctaves="' +
      o.v[1] +
      '" seed="' +
      (s + 9) +
      '" result="t"/><feColorMatrix in="t" values="0 0 0 0 ' +
      v[0] +
      " 0 0 0 0 " +
      v[1] +
      " 0 0 0 0 " +
      v[2] +
      " " +
      o.v[2] +
      " 0 0 0 " +
      o.v[3] +
      '" result="vn"/><feMerge><feMergeNode in="col"/><feMergeNode in="vn"/></feMerge>';
  }
  return f + "</filter>";
}
function art(d, uid, S) {
  var ty = d[6],
    c = d[3],
    b,
    i;
  S = ty === "river" || ty === "waves" ? 1 : S || 1;
  var W = 400 * S,
    H = 300 * S;
  if (ty === "chips") {
    var R = rnd(d[5] * 977 + 13);
    b = '<rect width="' + W + '" height="' + H + '" fill="' + c[0] + '"/>';
    for (i = 0; i < 95 * S * S; i++) {
      var cx = R() * W,
        cy = R() * H,
        r = 4 + R() * R() * 24,
        n = 5 + Math.floor(R() * 3),
        a0 = R() * 6.28,
        pts = [];
      for (var j = 0; j < n; j++) {
        var an = a0 + (j * 6.283) / n + R() * 0.5,
          rr = r * (0.7 + R() * 0.6);
        pts.push((cx + Math.cos(an) * rr).toFixed(1) + "," + (cy + Math.sin(an) * rr).toFixed(1));
      }
      b += '<polygon points="' + pts.join(" ") + '" fill="' + c[1 + Math.floor(R() * 3)] + '"/>';
    }
    return sv(d, uid, "", b, S);
  }
  if (ty === "waves") {
    var R2 = rnd(d[5] * 31 + 7),
      N = 9;
    b = '<rect width="' + W + '" height="' + H + '" fill="' + c[0] + '"/>';
    for (i = 0; i < N; i++) {
      var y = 30 + i * 30,
        f = (i / (N - 1)) * 3,
        k = Math.min(2, Math.floor(f)),
        a = 18 + R2() * 16,
        ph = R2() * 60;
      b +=
        '<path d="M-10 ' +
        y +
        " C " +
        (60 + ph) +
        " " +
        (y - a) +
        " " +
        (150 + ph) +
        " " +
        (y + a) +
        " " +
        (230 + ph / 2) +
        " " +
        y +
        " S 340 " +
        (y - a) +
        " 410 " +
        (y + 4) +
        ' V310 H-10Z" fill="' +
        mix(c[k], c[k + 1], f - k) +
        '" stroke="#fff" stroke-opacity=".55" stroke-width="2.5"/>';
    }
    return sv(d, uid, "", b, S);
  }
  var o = TY[ty],
    id = "f" + uid;
  b = '<rect width="' + W + '" height="' + H + '" filter="url(#' + id + ')"/>';
  if (ty === "river") {
    var e = d[7],
      P = "M-30 60 C 90 10 130 190 230 165 S 340 140 430 240";
    b +=
      '<g fill="none" stroke-linecap="round"><path d="' +
      P +
      '" stroke="' +
      e[2] +
      '" stroke-width="74" opacity=".85"/><path d="' +
      P +
      '" stroke="' +
      e[0] +
      '" stroke-width="62"/><path d="' +
      P +
      '" stroke="' +
      e[1] +
      '" stroke-width="32" opacity=".9"/><path d="' +
      P +
      '" stroke="#fff" stroke-width="2" opacity=".6" transform="translate(0,-8)"/></g>';
  }
  return sv(d, uid, filt(id, d, o), b, S);
}
var sel = {},
  cur = null,
  grid = $("grid");
function sec(id, t, s) {
  var h = document.createElement("div");
  h.className = "sec";
  h.id = id;
  h.innerHTML = "<h2>" + t + "</h2><p>" + s + "</p>";
  grid.appendChild(h);
}
D.forEach(function (d, i) {
  if (i === 0)
    sec(
      "metallic",
      "3D metallic designs",
      "44 flowing metallic colours with deep gloss, from dark and bold to light and soft.",
    );
  if (d[0] === "SG-01")
    sec(
      "designer",
      "Designer swirl &amp; river looks",
      "Popular real-floor styles: agate swirls, rivers, gold lines and glossy slab looks.",
    );
  if (d[0] === "MB-01")
    sec(
      "marble",
      "Marble effect designs",
      "Natural marble looks with fine veining and a polished gloss.",
    );
  if (d[0] === "AR-01")
    sec(
      "art",
      "Resin art designs",
      "River, geode, terrazzo, waves and fluid art. Custom colours available.",
    );
  if (d[0] === "CM-01")
    sec(
      "commercial",
      "Commercial &amp; office designs",
      "Calm, professional finishes for offices, clinics, showrooms, schools and retail. Seamless, durable and easy to clean.",
    );
  var c = document.createElement("div");
  c.className = "item";
  c.innerHTML =
    '<button class="sw" type="button" aria-label="Enlarge ' +
    d[1] +
    '">' +
    art(d, "g" + i) +
    '<span class="tick" aria-hidden="true">✓</span><span class="zoom">See on floor</span></button>' +
    '<div class="meta"><div class="code">' +
    d[0] +
    '</div><h3 class="name">' +
    d[1] +
    '</h3><p class="desc">' +
    d[2] +
    '</p><button class="pick" type="button" aria-pressed="false">Select this design</button></div>';
  c.querySelector(".sw").onclick = function () {
    openLb(i);
  };
  c.querySelector(".pick").onclick = function () {
    toggle(i);
  };
  d.card = c;
  grid.appendChild(c);
});
function toggle(i) {
  var d = D[i],
    k = d[0],
    on = !sel[k];
  if (on) sel[k] = d[1];
  else delete sel[k];
  d.card.classList.toggle("on", on);
  var b = d.card.querySelector(".pick");
  b.setAttribute("aria-pressed", on);
  b.textContent = on ? "Selected ✓" : "Select this design";
  update();
  if (cur === i) lbState();
}
function lbState() {
  $("lbpick").textContent = sel[D[cur][0]] ? "Selected ✓ (tap to remove)" : "Select this design";
}

function bx(l, t, w, hh, s) {
  return (
    '<i style="left:' +
    l +
    "px;top:" +
    t +
    "px;width:" +
    w +
    "px;height:" +
    hh +
    "px;" +
    s +
    '"></i>'
  );
}
var SC = {
  living: {
    ln: 331,
    w: ["#ece7df", "#d8d0c3"],
    wall:
      bx(
        560,
        40,
        300,
        200,
        "background:linear-gradient(#cfe9fb,#f4fbff);border:8px solid #fff;box-sizing:border-box;box-shadow:0 0 50px rgba(255,255,255,.8)",
      ) +
      bx(704, 40, 8, 200, "background:#fff") +
      bx(560, 136, 300, 8, "background:#fff") +
      bx(90, 60, 170, 110, "background:#c0b196;border:8px solid #fff;box-sizing:border-box") +
      bx(112, 82, 126, 66, "background:#8aa0a8"),
    ob:
      bx(
        60,
        198,
        840,
        30,
        "background:radial-gradient(ellipse at center,rgba(0,0,0,.4),transparent 70%)",
      ) +
      bx(80, 120, 350, 70, "background:#b8ab97;border-radius:12px") +
      bx(90, 64, 330, 70, "background:#cbbfae;border-radius:16px 16px 6px 6px") +
      bx(66, 100, 44, 92, "background:#a89b87;border-radius:12px") +
      bx(400, 100, 44, 92, "background:#a89b87;border-radius:12px") +
      bx(120, 110, 130, 40, "background:#d8cdbd;border-radius:8px") +
      bx(260, 110, 130, 40, "background:#d8cdbd;border-radius:8px") +
      bx(520, 150, 200, 18, "background:#f1f1ef;border-radius:4px") +
      bx(540, 168, 8, 42, "background:#777") +
      bx(692, 168, 8, 42, "background:#777") +
      bx(800, 160, 46, 50, "background:#7a5a44;border-radius:4px 4px 10px 10px") +
      bx(785, 60, 76, 110, "background:#3f7a4a;border-radius:50%") +
      bx(765, 90, 50, 80, "background:#4b8d57;border-radius:50%") +
      bx(835, 90, 50, 80, "background:#356b40;border-radius:50%") +
      bx(470, 40, 6, 170, "background:#555") +
      bx(452, 24, 42, 34, "background:#f6edd8;border-radius:6px 6px 2px 2px"),
  },
  office: {
    ln: 331,
    w: ["#f0f2f4", "#d7dce0"],
    wall:
      bx(40, 40, 880, 210, "background:linear-gradient(#bfdcf3,#eaf5fc)") +
      bx(120, 170, 60, 80, "background:#9db4c7") +
      bx(230, 130, 50, 120, "background:#8da7bd") +
      bx(330, 190, 80, 60, "background:#a7bccd") +
      bx(560, 150, 60, 100, "background:#8da7bd") +
      bx(700, 180, 70, 70, "background:#9db4c7") +
      [1, 2, 3, 4, 5]
        .map(function (k) {
          return bx(40 + k * 146, 40, 6, 210, "background:#fff");
        })
        .join("") +
      bx(40, 246, 880, 8, "background:#fff"),
    ob:
      bx(
        60,
        198,
        840,
        30,
        "background:radial-gradient(ellipse at center,rgba(0,0,0,.4),transparent 70%)",
      ) +
      bx(100, 110, 380, 14, "background:#3b4046;border-radius:3px") +
      bx(112, 124, 10, 86, "background:#222") +
      bx(458, 124, 10, 86, "background:#222") +
      bx(
        230,
        36,
        120,
        72,
        "background:#16191c;border:5px solid #2b3036;box-sizing:border-box;border-radius:4px",
      ) +
      bx(284, 108, 14, 10, "background:#2b3036") +
      bx(540, 120, 80, 22, "background:#2d3237;border-radius:10px") +
      bx(548, 50, 64, 76, "background:#353b41;border-radius:14px") +
      bx(576, 142, 8, 52, "background:#222") +
      bx(546, 192, 72, 8, "background:#222") +
      bx(700, 110, 200, 14, "background:#3b4046;border-radius:3px") +
      bx(712, 124, 10, 86, "background:#222") +
      bx(878, 124, 10, 86, "background:#222") +
      bx(
        760,
        36,
        100,
        72,
        "background:#16191c;border:5px solid #2b3036;box-sizing:border-box;border-radius:4px",
      ) +
      bx(805, 108, 14, 10, "background:#2b3036"),
  },
  garage: {
    ln: 346,
    w: ["#d4d8db", "#a8aeb3"],
    wall:
      bx(
        110,
        36,
        560,
        270,
        "background:repeating-linear-gradient(#e2e6e8 0 16px,#c3c9cd 16px 18px);border:6px solid #eee;box-sizing:border-box",
      ) +
      bx(740, 50, 170, 110, "background:#8a7a64;border:6px solid #5c4f3e;box-sizing:border-box") +
      bx(740, 160, 170, 8, "background:#5c4f3e") +
      bx(760, 70, 40, 40, "background:#c9552e") +
      bx(820, 76, 60, 34, "background:#3b6ea5"),
    ob:
      bx(
        60,
        198,
        840,
        30,
        "background:radial-gradient(ellipse at center,rgba(0,0,0,.45),transparent 70%)",
      ) +
      bx(180, 110, 460, 70, "background:#2e3a48;border-radius:40px 60px 20px 20px") +
      bx(280, 56, 260, 70, "background:#394859;border-radius:60px 80px 0 0") +
      bx(300, 70, 100, 48, "background:#9fb7c9;border-radius:40px 10px 0 0") +
      bx(410, 70, 110, 48, "background:#9fb7c9;border-radius:10px 40px 0 0") +
      bx(
        230,
        150,
        66,
        66,
        "background:#111;border:10px solid #555;box-sizing:border-box;border-radius:50%",
      ) +
      bx(
        520,
        150,
        66,
        66,
        "background:#111;border:10px solid #555;box-sizing:border-box;border-radius:50%",
      ) +
      bx(628, 126, 20, 12, "background:#ffe9a8;border-radius:3px"),
  },
};

var SH = "background:radial-gradient(ellipse at center,rgba(0,0,0,.42),transparent 70%)";
function pleat(c1, c2) {
  return "background:repeating-linear-gradient(90deg," + c1 + " 0 14px," + c2 + " 14px 28px)";
}
function glow(l, t) {
  return bx(
    l,
    t,
    30,
    30,
    "background:radial-gradient(circle,#fff6c8 0,rgba(255,226,140,.5) 40%,transparent 70%)",
  );
}
SC.drawing = {
  ln: 331,
  w: ["#efe6d6", "#d9ccb4"],
  wall:
    [0, 1, 2, 3, 4]
      .map(function (k) {
        return bx(
          200 + k * 130,
          70,
          110,
          200,
          "border:3px solid #c9a24a;box-sizing:border-box;background:rgba(255,255,255,.28)",
        );
      })
      .join("") +
    bx(190, 28, 580, 8, "background:#c9a24a") +
    bx(0, 0, 175, 331, pleat("#7a1f2b", "#a33645")) +
    bx(785, 0, 175, 331, pleat("#7a1f2b", "#a33645")) +
    bx(0, 0, 960, 30, "background:#5a3a22") +
    bx(478, 0, 4, 70, "background:#c9a24a") +
    bx(400, 70, 160, 14, "background:#c9a24a;border-radius:8px") +
    bx(
      430,
      84,
      100,
      40,
      "background:linear-gradient(#e2c15f,#b88a2c);border-radius:0 0 50px 50px",
    ) +
    bx(350, 80, 40, 8, "background:#c9a24a;border-radius:6px") +
    bx(570, 80, 40, 8, "background:#c9a24a;border-radius:6px") +
    glow(335, 60) +
    glow(595, 60) +
    glow(450, 96) +
    glow(480, 96),
  ob:
    bx(40, 198, 880, 30, SH) +
    bx(250, 60, 460, 80, "background:#8c2a38;border-radius:20px 20px 8px 8px") +
    bx(244, 50, 472, 14, "background:#5a3a22;border-radius:8px") +
    bx(240, 125, 480, 62, "background:#a33645;border-radius:12px") +
    bx(222, 92, 40, 102, "background:#7a1f2b;border-radius:14px") +
    bx(698, 92, 40, 102, "background:#7a1f2b;border-radius:14px") +
    bx(284, 96, 100, 50, "background:#efe2c8;border-radius:10px") +
    bx(430, 96, 100, 50, "background:#efe2c8;border-radius:10px") +
    bx(576, 96, 100, 50, "background:#efe2c8;border-radius:10px") +
    bx(250, 187, 14, 22, "background:#5a3a22") +
    bx(696, 187, 14, 22, "background:#5a3a22") +
    bx(40, 110, 150, 40, "background:#8c2a38;border-radius:14px 14px 4px 4px") +
    bx(34, 140, 162, 50, "background:#a33645;border-radius:10px") +
    bx(46, 188, 10, 20, "background:#5a3a22") +
    bx(176, 188, 10, 20, "background:#5a3a22") +
    bx(770, 110, 150, 40, "background:#8c2a38;border-radius:14px 14px 4px 4px") +
    bx(764, 140, 162, 50, "background:#a33645;border-radius:10px") +
    bx(776, 188, 10, 20, "background:#5a3a22") +
    bx(906, 188, 10, 20, "background:#5a3a22") +
    bx(
      400,
      172,
      160,
      10,
      "background:rgba(255,255,255,.7);border:2px solid #d7b869;box-sizing:border-box;border-radius:4px",
    ) +
    bx(410, 182, 8, 28, "background:#d7b869") +
    bx(542, 182, 8, 28, "background:#d7b869") +
    bx(466, 150, 28, 22, "background:#d7b869;border-radius:6px") +
    bx(470, 134, 20, 20, "background:#3f7a4a;border-radius:50%"),
};
SC.reception = {
  ln: 331,
  w: ["#e9ebed", "#cfd4d8"],
  wall:
    bx(
      120,
      40,
      720,
      210,
      "background:repeating-linear-gradient(90deg,#6b4a30 0 18px,#5a3d27 18px 22px)",
    ) +
    '<i style="left:300px;top:110px;width:360px;height:60px;color:#fff;font:800 46px/60px Bricolage Grotesque,sans-serif;text-align:center;letter-spacing:2px">GharFix</i>' +
    bx(200, 0, 3, 70, "background:#999") +
    bx(480, 0, 3, 60, "background:#999") +
    bx(760, 0, 3, 70, "background:#999") +
    bx(176, 70, 52, 24, "background:#fff6d8;border-radius:50%;box-shadow:0 0 30px #fff3c0") +
    bx(456, 60, 52, 24, "background:#fff6d8;border-radius:50%;box-shadow:0 0 30px #fff3c0") +
    bx(736, 70, 52, 24, "background:#fff6d8;border-radius:50%;box-shadow:0 0 30px #fff3c0"),
  ob:
    bx(60, 198, 840, 30, SH) +
    bx(250, 80, 460, 16, "background:#f4f4f2;border-radius:6px") +
    bx(
      260,
      96,
      440,
      104,
      "background:repeating-linear-gradient(90deg,#8a6a48 0 10px,#7a5b3b 10px 12px)",
    ) +
    bx(260, 190, 440, 12, "background:#2b2b2b") +
    bx(
      430,
      30,
      70,
      50,
      "background:#16191c;border:4px solid #2b3036;box-sizing:border-box;border-radius:4px",
    ) +
    bx(80, 130, 120, 60, "background:#4a5159;border-radius:12px") +
    bx(70, 100, 140, 44, "background:#59616a;border-radius:12px 12px 4px 4px") +
    bx(760, 130, 120, 60, "background:#4a5159;border-radius:12px") +
    bx(750, 100, 140, 44, "background:#59616a;border-radius:12px 12px 4px 4px") +
    bx(900, 160, 40, 50, "background:#2b2b2b;border-radius:4px") +
    bx(890, 60, 60, 110, "background:#3f7a4a;border-radius:50%"),
};
function room(d, v, k) {
  var s = SC[v],
    ln = s.ln,
    ot = ln - 196;
  return (
    '<div class="room" style="transform:scale(' +
    k +
    ");--w1:" +
    s.w[0] +
    ";--w2:" +
    s.w[1] +
    '">' +
    '<div class="wall" style="height:' +
    ln +
    'px">' +
    s.wall +
    "</div>" +
    '<div class="fw" style="top:' +
    ln +
    'px"><div class="fl" style="height:' +
    (720 - ln) * 1.35 +
    'px">' +
    art(d, "rf", 2.5) +
    '</div><div class="gloss"></div></div>' +
    '<div class="refl" style="top:' +
    (ot + 180) +
    'px"><div class="ob">' +
    s.ob +
    "</div></div>" +
    '<div class="objs" style="top:' +
    ot +
    'px"><div class="ob">' +
    s.ob +
    "</div></div></div>"
  );
}
var lbView = "drawing";
function sizeBig() {
  var w = Math.max(260, Math.min(960, innerWidth - 40, ((innerHeight - 230) * 4) / 3)),
    b = $("big");
  b.style.width = w + "px";
  b.style.height = w * 0.75 + "px";
  return w / 960;
}
function renderLb() {
  var d = D[cur],
    big = $("big");
  $("ownctl").style.display = "none";
  big.style.touchAction = "";
  if (lbView === "own") {
    renderOwn();
  } else {
    var k = sizeBig();
    big.innerHTML = lbView === "swatch" ? art(d, "lb") : room(d, lbView, k);
  }
  [].forEach.call(document.querySelectorAll("#tabs button"), function (t) {
    t.setAttribute("aria-pressed", t.getAttribute("data-v") === lbView);
  });
}
[].forEach.call(document.querySelectorAll("#tabs button"), function (t) {
  t.onclick = function () {
    lbView = t.getAttribute("data-v");
    renderLb();
  };
});
function openLb(i) {
  cur = i;
  lbView = D[i][0].indexOf("CM") === 0 ? "reception" : "drawing";
  $("cap").textContent = D[i][0] + "  " + D[i][1];
  lbState();
  $("lb").classList.add("open");
  renderLb();
  $("close").focus();
}
function shut() {
  $("lb").classList.remove("open");
  cur = null;
}
$("close").onclick = shut;
$("lbpick").onclick = function () {
  if (cur !== null) toggle(cur);
};
$("lb").onclick = function (e) {
  if (e.target === $("lb")) shut();
};
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") shut();
});

var own = { url: null, w: 0, h: 0, pts: [], drag: null },
  LAB = ["far left", "far right", "near right", "near left"];
function homog(s, t) {
  var A = [],
    i,
    j,
    k,
    n = 8;
  for (i = 0; i < 4; i++) {
    var x = s[i][0],
      y = s[i][1],
      u = t[i][0],
      v = t[i][1];
    A.push([x, y, 1, 0, 0, 0, -u * x, -u * y, u]);
    A.push([0, 0, 0, x, y, 1, -v * x, -v * y, v]);
  }
  for (i = 0; i < n; i++) {
    var m = i;
    for (j = i + 1; j < n; j++) if (Math.abs(A[j][i]) > Math.abs(A[m][i])) m = j;
    var tmp = A[i];
    A[i] = A[m];
    A[m] = tmp;
    for (j = i + 1; j < n; j++) {
      var f = A[j][i] / A[i][i];
      for (k = i; k <= n; k++) A[j][k] -= f * A[i][k];
    }
  }
  var X = [];
  for (i = n - 1; i >= 0; i--) {
    var sm = A[i][n];
    for (j = i + 1; j < n; j++) sm -= A[i][j] * X[j];
    X[i] = sm / A[i][i];
  }
  return X;
}
function loadPhoto(f) {
  if (!f) return;
  var u = URL.createObjectURL(f),
    im = new Image();
  im.onload = function () {
    own.url = u;
    own.w = im.naturalWidth;
    own.h = im.naturalHeight;
    own.pts = [];
    renderLb();
  };
  im.src = u;
}
function ownPx() {
  var b = $("big");
  return [b.clientWidth, b.clientHeight];
}
function applyPts() {
  var s = ownPx(),
    P = own.pts.map(function (q) {
      return [q[0] * s[0], q[1] * s[1]];
    });
  P.forEach(function (q, i) {
    var e = document.getElementById("pt" + i);
    if (e) {
      e.style.left = q[0] + "px";
      e.style.top = q[1] + "px";
    }
  });
  var c = document.getElementById("oclip");
  if (!c || P.length < 4) return;
  var TW = 1000,
    TH = 700,
    H = homog(
      [
        [0, 0],
        [TW, 0],
        [TW, TH],
        [0, TH],
      ],
      P,
    );
  c.style.clipPath =
    "polygon(" +
    P.map(function (q) {
      return q[0].toFixed(1) + "px " + q[1].toFixed(1) + "px";
    }).join(",") +
    ")";
  document.getElementById("otex").style.transform =
    "matrix3d(" +
    [H[0], H[3], 0, H[6], H[1], H[4], 0, H[7], 0, 0, 1, 0, H[2], H[5], 0, 1].join(",") +
    ")";
}
function hint() {
  var n = own.pts.length;
  $("ownhint").textContent = !own.url
    ? ""
    : n < 4
      ? "Tap floor corner " + (n + 1) + " of 4: " + LAB[n] + " (go around the visible floor)"
      : "Drag the numbered dots to fit the floor. Use the shine slider to match the room’s light.";
}
function renderOwn() {
  var big = $("big"),
    ctl = $("ownctl");
  if (!own.url) {
    sizeBig();
    ctl.style.display = "none";
    big.innerHTML =
      '<label class="up"><input type="file" accept="image/*" id="ownfile"><b>Upload a photo of your room or office</b><span>Take a photo or choose one, with the floor clearly visible. The photo stays on your phone and is not uploaded anywhere.</span></label>';
    $("ownfile").onchange = function (e) {
      loadPhoto(e.target.files[0]);
    };
    return;
  }
  var asp = own.w / own.h,
    aw = Math.min(960, innerWidth - 40),
    mh = innerHeight - 300,
    dw = Math.max(240, Math.min(aw, mh * asp)),
    dh = dw / asp;
  big.style.width = dw + "px";
  big.style.height = dh + "px";
  big.style.touchAction = "none";
  ctl.style.display = "flex";
  var html = '<img class="ph" src="' + own.url + '" alt="Your room">';
  if (own.pts.length === 4)
    html +=
      '<div class="clip" id="oclip"><div class="tex" id="otex" style="width:1000px;height:700px">' +
      art(D[cur], "ow", 3) +
      '</div><img class="shn" id="oshn" src="' +
      own.url +
      '" alt="" style="opacity:' +
      $("ownshine").value / 100 +
      '"></div>';
  own.pts.forEach(function (q, i) {
    html += '<i class="pt" id="pt' + i + '" data-i="' + i + '">' + (i + 1) + "</i>";
  });
  big.innerHTML = html;
  applyPts();
  hint();
}
(function () {
  var big = $("big");
  big.addEventListener("pointerdown", function (e) {
    if (lbView !== "own" || !own.url) return;
    var t = e.target;
    if (t.classList && t.classList.contains("pt")) {
      own.drag = +t.getAttribute("data-i");
      try {
        t.setPointerCapture(e.pointerId);
      } catch (x) {}
      e.preventDefault();
      return;
    }
    if (own.pts.length < 4) {
      var r = big.getBoundingClientRect();
      own.pts.push([(e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height]);
      renderLb();
    }
  });
  big.addEventListener("pointermove", function (e) {
    if (own.drag === null) return;
    var r = big.getBoundingClientRect();
    own.pts[own.drag] = [
      Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)),
      Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)),
    ];
    applyPts();
  });
  function end() {
    own.drag = null;
  }
  big.addEventListener("pointerup", end);
  big.addEventListener("pointercancel", end);
  $("ownreset").onclick = function () {
    own.pts = [];
    renderLb();
  };
  $("ownfile2").onchange = function (e) {
    loadPhoto(e.target.files[0]);
  };
  $("ownshine").oninput = function () {
    var s = $("oshn");
    if (s) s.style.opacity = this.value / 100;
  };
})();
function setCap() {
  $("cap").textContent = D[cur][0] + "  " + D[cur][1];
  lbState();
}
function showLb(i, v) {
  cur = i;
  lbView = v;
  setCap();
  $("lb").classList.add("open");
  renderLb();
  $("close").focus();
}
function stepLb(n) {
  cur = (cur + n + D.length) % D.length;
  setCap();
  renderLb();
}
$("prev").onclick = function () {
  stepLb(-1);
};
$("next").onclick = function () {
  stepLb(1);
};
$("tryown").onclick = function () {
  showLb(0, "own");
};
function listText() {
  return Object.keys(sel)
    .map(function (k) {
      return k + " " + sel[k];
    })
    .join(", ");
}
function update() {
  var keys = Object.keys(sel),
    s = $("sel"),
    a = $("send");
  if (!keys.length) {
    s.textContent = "No design selected yet";
    a.setAttribute("aria-disabled", "true");
    a.href = "#";
    return;
  }
  var designs = listText();
  s.textContent = keys.length + " selected: " + designs;
  a.href =
    "https://wa.me/" +
    WHATSAPP +
    "?text=" +
    encodeURIComponent(
      "Hello " + COMPANY + ", I would like to choose these epoxy floor designs: " + designs + ".",
    );
  a.removeAttribute("aria-disabled");
}
$("copy").onclick = function () {
  var t = listText(),
    b = $("copy");
  if (!t) return;
  try {
    navigator.clipboard.writeText(t).then(function () {
      b.textContent = "Copied";
      setTimeout(function () {
        b.textContent = "Copy list";
      }, 1500);
    });
  } catch (e) {}
};
