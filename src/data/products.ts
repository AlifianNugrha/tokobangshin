
export type Category = "sword" | "melee" | "item";

export interface MaterialItem {
  qty: number;
  name: string;
}

export interface ProductBundle {
  id: string;
  name: string;
  subtitle: string;
  image?: string;
  category: Category;
  emoji: string;
  howToGet?: string;
  materials: MaterialItem[];
  extraMaterials?: { label: string; items: MaterialItem[] }[];
  gems?: number;
  cash?: string;
  jokiAddons?: string[];
  notes?: string;
  prerequisite?: string;
  titleRequired?: string;
  raceRequired?: string;
  clanRequired?: string;
  questReqs?: string[];
  price?: string;
  fSkill?: { materials: MaterialItem[] };
}
export const allSwords: ProductBundle[] = [
  {
    id: "saber",
    name: "Saber Sword",
    price: "Rp 5.000",
    subtitle: "Drop dari Saber Boss (2% chance)",
    category: "sword",
    emoji: "⚔️",
    howToGet: "Kalahkan Saber Boss (2% drop) atau tukar 65 Boss Tickets",
    materials: [
      { qty: 200, name: "Boss Ticket" },
    ],
    notes: "Drop rate 2% dari Saber Boss, atau tukar 65 Boss Tickets.",
  },
  {
    id: "shadowsword",
    name: "Shadow Sword",
    price: "Rp 10.000",
    subtitle: "Syarat dasar Atomic Sword",
    category: "sword",
    emoji: "🌘",
    materials: [
      { qty: 1, name: "Atomic Core" },
      { qty: 4, name: "Shadow Essence" },
      { qty: 8, name: "Void Seed" },
      { qty: 20, name: "Umbral Capsule" },
    ],
    gems: 15000,
    cash: "10 Juta",
  },
  {
    id: "rimuru",
    name: "Rimuru Sword",
    price: "Rp 8.000",
    subtitle: "Tensei Shitara Slime — Slime Island",
    category: "sword",
    emoji: "🫧",
    materials: [
      { qty: 9, name: "Sage Pulse" },
      { qty: 6, name: "Tempest Seal" },
      { qty: 3, name: "Slime Remnant" },
      { qty: 1, name: "Slime Core" },
    ],
    gems: 20000,
    cash: "30 Juta",
    titleRequired: "Demon Lord",
    fSkill: {
      materials: [
        { qty: 10000, name: "NPC Kills" }
      ]
    },
    jokiAddons: ["Kill Rimuru Boss 15x (Hard/Extreme)", "Gacha Slime Race"],
  },
  {
    id: "aizenv1",
    price: "Rp 10.000",
    name: "Aizen Sword (V1)",
    subtitle: "Manipulator — Hollow Island",
    category: "sword",
    emoji: "🔮",
    materials: [
      { qty: 10, name: "Mirage Pendant" },
      { qty: 6, name: "Illusion Prism" },
      { qty: 3, name: "Reiatsu Core" },
      { qty: 1, name: "Ayoku Fragment" },
    ],
    gems: 10000,
    cash: "6 Juta",
  },
  {
    id: "ichigo",
    name: "Ichigo Sword (Soul Reaper)",
    price: "Rp 6.000",
    subtitle: "Pedang Ichigo — Hollow Island",
    category: "sword",
    emoji: "💀",
    materials: [
      { qty: 8, name: "Soul Fragment" },
      { qty: 4, name: "Spiritual Core" },
      { qty: 2, name: "Soul Flame" },
    ],
    fSkill: {
      materials: [
        { qty: 10, name: "Soul Fragment" },
        { qty: 1, name: "Soul Core" },
      ]
    },
    jokiAddons: ["Kill Ichigo Boss 15x"],
    gems: 8500,
    cash: "5 Juta",
  },
  {
    id: "escanor",
    price: "200 TowerTicket / 1.000",
    name: "Escanor Sword",
    subtitle: "Drop dari Boss Rush — Sailor Island",
    category: "sword",
    emoji: "☀️",
    materials: [],
    howToGet: "Kalahkan Escanor di Boss Rush (low chance drop)",
    fSkill: {
      materials: [
        { qty: 5, name: "Sun Essence" },
        { qty: 1, name: "Solar Core" },
      ]
    },
    jokiAddons: ["Kill Escanor Boss 15x"],
    notes: "Tidak pakai material crafting. Drop langsung dari Boss Rush.",
  },
  {
    id: "yamato",
    name: "Yamato Sword",
    price: "Rp 8.000",
    subtitle: "Pedang Vergil — Judgement Island",
    category: "sword",
    emoji: "⚔️",
    materials: [
      { qty: 1, name: "Azure Heart" },
      { qty: 3, name: "Silent Storm" },
      { qty: 7, name: "Yamato Essence" },
      { qty: 14, name: "Frozen Will" },
    ],
    gems: 30000,
    titleRequired: "Blade Sovereign",
    raceRequired: "Swordblessed",
    fSkill: {
      materials: [
        { qty: 5, name: "Yamato Essence" },
        { qty: 75, name: "Frozen Will" },
      ]
    },
    jokiAddons: ["Kill Yamato Boss 15x"],
  },
  {
    id: "aizenv2",
    price: "Rp 15.000",
    name: "True Aizen (True Manipulator)",
    subtitle: "Aizen V2 — Soul Dominion",
    category: "sword",
    emoji: "🔮",
    materials: [
      { qty: 1, name: "Evolution Fragment" },
      { qty: 3, name: "Transcendent Core" },
      { qty: 8, name: "Divinity Essence" },
      { qty: 15, name: "Fusion Ring" },
      { qty: 75, name: "Chrysalis Sigil" },
    ],
    gems: 35000,
    prerequisite: "Aizen Sword (V1)",
    titleRequired: "Transcendent Being",
    extraMaterials: [
      {
        label: "Material Aizen V1 (Syarat Dasar)",
        items: [
          { qty: 10, name: "Mirage Pendant" },
          { qty: 6, name: "Illusion Prism" },
          { qty: 3, name: "Reiatsu Core" },
          { qty: 1, name: "Ayoku Fragment" },
        ],
      },
    ],
    fSkill: {
      materials: [
        { qty: 5, name: "Transmutation Shard" },
        { qty: 1, name: "Hogyoku Fragment" },
      ]
    },
    jokiAddons: ["Kill True Aizen Hard/Extreme 15x", "Gacha Espada Clan"],
  },
  {
    id: "jinwov2",
    name: "Shadow Monarch Sword",
    price: "Rp 10.000",
    subtitle: "Sung Jinwoo V2 — DMG 999!",
    category: "sword",
    emoji: "👤",
    materials: [
      { qty: 10, name: "Monarch Core" },
      { qty: 5, name: "Monarch Essence" },
      { qty: 2, name: "Kamish Dagger" },
      { qty: 1, name: "Shadow Crystal" },
    ],
    prerequisite: "Jinwoo Sword (V1)",
    titleRequired: "King of Shadows",
    extraMaterials: [
      {
        label: "Material Solo Hunter / Jinwoo V1 (Syarat Dasar)",
        items: [
          { qty: 6, name: "Abyss Edge" },
          { qty: 3, name: "Dark Ring" },
          { qty: 1, name: "Shadow Heart" },
        ],
      },
    ],
    fSkill: {
      materials: [
        { qty: 3, name: "Monarch Core" },
        { qty: 10, name: "Monarch Essence" },
      ]
    },
    jokiAddons: [
      "F Skill Mission: Kill Shadow Monarch Boss 20x",
      "Gacha Shadow Monarch Title Required",
    ],
    cash: "2.5 Juta",
    gems: 7500,
  },
  {
    id: "cidv2",
    name: "Atomic Sword",
    price: "Rp 15.000",
    subtitle: "Cid V2 — Lawless Island",
    category: "sword",
    emoji: "⚛️",
    materials: [
      { qty: 1, name: "Atomic Omen" },
      { qty: 3, name: "Eminence Essence" },
      { qty: 9, name: "Shadow Remnant" },
      { qty: 16, name: "Magic Shard" },
      { qty: 80, name: "Abyss Sigil" },
    ],
    gems: 45000,
    prerequisite: "Shadow Sword",
    titleRequired: "Eminence Incarnate",
    extraMaterials: [
      {
        label: "Material Shadow Sword (Syarat Dasar)",
        items: [
          { qty: 1, name: "Atomic Core" },
          { qty: 4, name: "Shadow Essence" },
          { qty: 8, name: "Void Seed" },
          { qty: 20, name: "Umbral Capsule" },
        ],
      },
    ],
    jokiAddons: [
      "Kill Atomic Boss 20x (Hard/Extreme)",
      "Gacha Eminence Clan",
      "Infinite Tower Lantai 51 x5 (F Move)",
    ],
    fSkill: {
      materials: [
        { qty: 5, name: "Eminence Essence" },
        { qty: 25, name: "Atomic Core" },
      ]
    },
  },
  {
    id: "icequeen",
    name: "Ice Queen Sword",
    price: "Rp 15.000",
    subtitle: "Esdeath — Ice Update terbaru!",
    category: "sword",
    emoji: "❄️",
    materials: [
      { qty: 1, name: "Ice Core" },
      { qty: 4, name: "Frozen Brand" },
      { qty: 9, name: "Glacier Remnant" },
      { qty: 17, name: "Battle Shard" },
      { qty: 25, name: "Frost Relic" },
    ],
    gems: 40000,
    titleRequired: "Frost Empress",
    jokiAddons: [
      "Tambah F Skill: +2x Ice Core, +10x Frozen Brand, +85x Frost Relic",
      "Gacha Clan Frostbane (Mythical)",
    ],
    fSkill: {
      materials: [
        { qty: 2, name: "Ice Core" },
        { qty: 10, name: "Frozen Brand" },
        { qty: 85, name: "Frost Relic" },
      ]
    },
  },

];


export const allMelee: ProductBundle[] = [
  {
    id: "dio",
    name: "DIO (The World)",
    price: "Tanya Admin",
    subtitle: "Vampire Lord — Time Stop",
    category: "melee",
    emoji: "🧛‍♂️",
    materials: [
      { qty: 1, name: "Vampire Mask" },
      { qty: 5, name: "Timestop Shard" },
    ],
    cash: "Tanya Admin",
    gems: 0,
  },
  {
    id: "cosmic-garou",
    name: "Cosmic Garou",
    price: "Rp 70.000",
    subtitle: "Cosmic Fear Awakened Mode",
    category: "melee",
    emoji: "🌌",
    materials: [
      { qty: 1, name: "Cosmic Core" },
      { qty: 10, name: "Stardust Fragment" },
      { qty: 25, name: "Fear Essence" },
    ],
    cash: "Tanya Admin",
    gems: 50000,
    titleRequired: "Absolute Evil",
  },
  {
    id: "frieren",
    name: "Frieren (Great Mage)",
    price: "Rp 35.000",
    subtitle: "High Magic Damage — Mage Tower",
    category: "melee",
    emoji: "🪄",
    materials: [
      { qty: 1, name: "Grimoire of Frieren" },
      { qty: 5, name: "Mana Crystal" },
      { qty: 10, name: "Ancient Magic Dust" },
    ],
    cash: "5 Juta",
    gems: 25000,
    titleRequired: "Great Mage",
  },
  {
    id: "gojo",
    name: "Gojo (Strongest of Today V1)",
    price: "Rp 6.000",
    subtitle: "AoE + crowd control — Shibuya Station",
    category: "melee",
    emoji: "👁️",
    materials: [
      { qty: 6, name: "Void Fragment" },
      { qty: 3, name: "Limitless Ring" },
      { qty: 1, name: "Infinity Core" },
    ],
    gems: 4000,
    cash: "750.000",
    questReqs: [
      "Kill 350 mobs",
      "Gunakan melee ability 350x",
      "Kill Gojo Boss 15x",
    ],
  },
  {
    id: "sukuna",
    name: "Sukuna",
    price: "Rp 6.000",
    subtitle: "High burst PvP — Shibuya Station",
    category: "melee",
    emoji: "👹",
    materials: [
      { qty: 6, name: "Cursed Finger" },
      { qty: 3, name: "Dismantle Fang" },
      { qty: 1, name: "Crimson Heart" },
    ],
    gems: 5000,
    cash: "1.250.000",
    questReqs: [
      "Deal 35M damage",
      "Kill 25 players",
      "Kill Sukuna Boss 15x",
    ],
  },
  {
    id: "qinshi",
    name: "Qin Shi",
    price: "Rp 5.000",
    subtitle: "Balanced AoE — Boss Island",
    category: "melee",
    emoji: "🏯",
    materials: [
      { qty: 7, name: "Jade Tablet" },
      { qty: 3, name: "Imperial Seal" },
    ],
    gems: 2500,
    cash: "500.000",
    notes: "Butuh 250 Boss Tickets dari Boss Exchange NPC.",
  },
  {
    id: "yuji",
    name: "Yuji",
    price: "Rp 5.000",
    subtitle: "Combo cepat, cooldown pendek — Shibuya",
    category: "melee",
    emoji: "🥊",
    materials: [
      { qty: 7, name: "Energy Core" },
      { qty: 3, name: "Flash Impact" },
      { qty: 1, name: "Divergent Pulse" },
    ],
  },
  {
    id: "alucard",
    name: "Alucard (Vampire King)",
    price: "Rp 10.000",
    subtitle: "Lifesteal super tebal — Sailor Island",
    category: "melee",
    emoji: "🧛",
    materials: [
      { qty: 5, name: "Soul Amulet" },
      { qty: 1, name: "Casull" },
      { qty: 1, name: "Blood Ring" },
    ],
    gems: 10000,
    cash: "6.5 Juta",
    raceRequired: "Vampire",
    titleRequired: "Vampire King",
  },
  {
    id: "gojov2",
    name: "Strongest of Today (Gojo V2)",
    price: "Rp 10.000",
    subtitle: "High AoE + farming — Shinjuku Island",
    category: "melee",
    emoji: "💠",
    materials: [
      { qty: 9, name: "Reversal Pulse" },
      { qty: 3, name: "Blue Singularity" },
      { qty: 1, name: "Infinity Essence" },
    ],
    titleRequired: "Strongest Sorcerer",
    notes: "Harus consume 6x Six Eyes terlebih dahulu.",
    fSkill: {
      materials: [
        { qty: 1, name: "Infinity Essence" },
        { qty: 15, name: "Reversal Pulse" },
      ]
    },
    jokiAddons: [
      "F Skill Mission: Kill Gojo Boss 15x",
      "Consume 6x Six Eyes Required",
    ],
  },
  {
    id: "sukunav2",
    name: "Strongest in History (Sukuna V2)",
    price: "Rp 10.000",
    subtitle: "Top-tier AoE & endgame scaling — Shinjuku",
    category: "melee",
    emoji: "🔥",
    materials: [
      { qty: 7, name: "Vessel Ring" },
      { qty: 3, name: "Malevolent Soul" },
      { qty: 1, name: "Cursed Flesh" },
    ],
    titleRequired: "Disgraced One",
    notes: "Harus consume 20x Awakened Cursed Fingers terlebih dahulu.",
    fSkill: {
      materials: [
        { qty: 1, name: "Cursed Flesh" },
        { qty: 20, name: "Vessel Ring" },
      ]
    },
    jokiAddons: [
      "F Skill Mission: Kill Sukuna Boss 15x",
      "Consume 20x Awakened Fingers Required",
    ],
  },
  {
    id: "gilgamesh",
    name: "Gilgamesh (King of Heroes) + F Move",
    price: "Rp 12.000",
    subtitle: "Farming efficiency terbaik — Boss Island",
    category: "melee",
    emoji: "👑",
    materials: [
      { qty: 12, name: "Throne Remnant" },
      { qty: 6, name: "Ancient Shard" },
      { qty: 3, name: "Golden Essence" },
      { qty: 1, name: "Phantasm Core" },
    ],
    gems: 22500,
    cash: "25 Juta",
    titleRequired: "Golden King",
    fSkill: {
      materials: [
        { qty: 1, name: "Babylon Key" },
        { qty: 100, name: "Broken Sword" },
        { qty: 5, name: "Golden Essence" },
      ]
    },
    jokiAddons: [
      "F Skill Mission: Kill Gilgamesh Boss 15x",
      "Servant Race Required",
    ],
  },
  {
    id: "anos",
    name: "Anos (Demon King)",
    price: "Rp 8.000",
    subtitle: "Damage raw paling brutal — Academy Island",
    category: "melee",
    emoji: "😈",
    materials: [
      { qty: 65, name: "Calamity Seal" },
      { qty: 12, name: "Demonic Fragment" },
      { qty: 6, name: "Demonic Shard" },
      { qty: 2, name: "Destruction Eye" },
      { qty: 1, name: "Imperial Mark" },
    ],
    clanRequired: "Voldigoat",
    titleRequired: "Demon King",
  },
  {
    id: "blessedmaiden",
    name: "Blessed Maiden",
    price: "Rp 10.000",
    subtitle: "AoE + late-game scaling — Boss Island",
    category: "melee",
    emoji: "✨",
    materials: [
      { qty: 1, name: "Celestial Mark" },
      { qty: 3, name: "Aero Core" },
      { qty: 8, name: "Gale Essence" },
      { qty: 14, name: "Tide Remnant" },
      { qty: 25, name: "Tempest Relic" },
    ],
    gems: 32500,
    titleRequired: "Astral Empress",
    fSkill: {
      materials: [
        { qty: 3, name: "Aero Core" },
        { qty: 75, name: "Tempest Relic" },
      ]
    },
    jokiAddons: ["Gacha Galevorn Race"],
  },
  {
    id: "saberalter",
    name: "Saber Alter (Corrupt Excalibur)",
    price: "Rp 13.000",
    subtitle: "High burst corruption — Boss Island",
    category: "melee",
    emoji: "🖤",
    materials: [
      { qty: 25, name: "Dark Grail" },
      { qty: 15, name: "Morgan Remnant" },
      { qty: 8, name: "Alter Essence" },
      { qty: 3, name: "Corruption Core" },
      { qty: 1, name: "Corrupt Crown" },
    ],
    titleRequired: "Corrupt Tyrant",
    fSkill: {
      materials: [
        { qty: 8, name: "Corruption Core" },
        { qty: 85, name: "Dark Grail" },
      ]
    },
    jokiAddons: ["Gacha Alter Clan"],
  },
  {
    id: "strongestshinobi",
    name: "Strongest Shinobi",
    price: "Rp 10.000",
    subtitle: "High burst + special — Ninja Island",
    category: "melee",
    emoji: "🥷",
    materials: [
      { qty: 1, name: "Path Fragment" },
      { qty: 3, name: "Eternal Core" },
      { qty: 8, name: "Battle Sigil" },
      { qty: 15, name: "Power Remnant" },
    ],
    gems: 40000,
    titleRequired: "Battlefield Warlord",
    fSkill: {
      materials: [
        { qty: 2, name: "Path Fragment" },
        { qty: 10, name: "Battle Sigil" },
        { qty: 5, name: "Eternal Core" },
      ]
    },
  },
  {
    id: "moonslayer",
    name: "Moon Slayer (Six Eyed Demon) + F Move",
    price: "Rp 15.000",
    subtitle: "Quick burst + low cooldown — TERBARU!",
    category: "melee",
    emoji: "🌙",
    materials: [
      { qty: 1, name: "Moon Crest" },
      { qty: 4, name: "Crescent Shard" },
      { qty: 9, name: "Lunar Essence" },
      { qty: 16, name: "Demon Remnant" },
      { qty: 25, name: "Upper Seal" },
    ],
    gems: 37500,
    titleRequired: "Six Eyed Demon",
    jokiAddons: [
      "Tambah F Skill: +2x Moon Crest, +10x Crescent Shard, +85x Upper Seal",
      "Gacha Clan Upper",
    ],
    fSkill: {
      materials: [
        { qty: 2, name: "Moon Crest" },
        { qty: 10, name: "Crescent Shard" },
        { qty: 85, name: "Upper Seal" },
      ]
    },
  },
];

export const allItems: ProductBundle[] = [
  {
    id: "clanreroll",
    name: "Clan Reroll",
    price: "Rp 2.000",
    subtitle: "Ganti Clan (Common to Mythical)",
    category: "item",
    emoji: "🎲",
    materials: [],
  },
  {
    id: "racereroll",
    name: "Race Reroll",
    price: "Rp 1.000",
    subtitle: "Ganti Ras (Human, Mink, Cyb, etc.)",
    category: "item",
    emoji: "🧬",
    materials: [],
  },
  {
    id: "traitreroll",
    name: "Trait Reroll",
    price: "Rp 1.000",
    subtitle: "Ganti Pasif/Trait Senjata",
    category: "item",
    emoji: "✨",
    materials: [],
  },
  {
    id: "mythicalchest",
    name: "Mythical Chest (Gems)",
    price: "Rp 1.000",
    subtitle: "Paket Gems untuk Gacha",
    category: "item",
    emoji: "💎",
    materials: [],
  },
  {
    id: "jokititle",
    name: "Joki Title",
    price: "DM Admin",
    subtitle: "Pengerjaan Title (Semua Island)",
    category: "item",
    emoji: "🏆",
    materials: [],
    howToGet: "Hubungi Admin via WhatsApp",
  },
  {
    id: "auracrate",
    name: "Aura Crate",
    price: "Rp 1.000",
    subtitle: "Gacha Aura Visual",
    category: "item",
    emoji: "✨",
    materials: [],
  },
  {
    id: "cosmeticchest",
    name: "Cosmetic Chest",
    price: "Rp 1.000",
    subtitle: "Gacha Skin Senjata",
    category: "item",
    emoji: "📦",
    materials: [],
  },
  {
    id: "more",
    name: "More Items",
    price: "Tanya Admin",
    subtitle: "Material Crafting Lainnya",
    category: "item",
    emoji: "🐚",
    materials: [],
  },
];


export const ascensionData = [
  { rank: 2, materials: "2x Limitless Ring, 5x Void Fragment" },
  { rank: 3, materials: "5x Dark Ring, 7x Dismantle Fang" },
  { rank: 4, materials: "1x Blood Ring, 4x Reiatsu Core" },
  { rank: 5, materials: "2x Atomic Core, 2x Hogyoku Fragment" },
  { rank: 6, materials: "3x Soul Flame, 3x Blood Ring" },
  { rank: 7, materials: "2x Infinity Essence, 2x Cursed Flesh" },
  { rank: 8, materials: "3x Slime Core, 2x Phantasm Core" },
  { rank: 9, materials: "2x Azure Heart, 2x Evolution Fragment" },
  { rank: 10, materials: "3x Corrupt Crown, 2x Path Fragment" },
];
