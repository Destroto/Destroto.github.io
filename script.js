const SOURCE_LINKS = {
  driveRoot: "https://drive.google.com/drive/folders/1--voDZq_j_efkoUehk4LHyAa04KLcjcY",
  weenFolder: "https://drive.google.com/drive/folders/1NWxDwBykcIYTYq2Q5GB3cDibmXAv5tnA",
  characterSheetsFolder: "https://drive.google.com/drive/folders/1LZT627qfIiw0t-vf08aZVl4FCr74tOmd",
  spellsFolder: "https://drive.google.com/drive/folders/1afSgfj0P0wnJB-aRv6m0-zRcwkOdHMrs",
  gamebrewFolder: "https://drive.google.com/drive/folders/1AU88Z-sSTG7rbfaktryV6_Ul3_Ng5Aqd",
  helianaFolder: "https://drive.google.com/drive/folders/1hR5tP-xwphFcRClzqltrvllWsGYyHScZ",
  mageHandFolder: "https://drive.google.com/drive/folders/1YIPg0wwlq9iakvmrdXTURenP_nPkruBD",
  thuleFolder: "https://drive.google.com/drive/folders/1zjXEj0sAbMQpnD6ABe9lGazdWAZkgBuV",
  phb: "https://drive.google.com/file/d/1uhNMVtyZmuK0ECoUs-oPzwcQogJ5LWUu/view?usp=drive_web",
  tasha: "https://drive.google.com/file/d/13FLiCpRTHTVxUA8cQ6qas5AjwcbazXOK/view?usp=drive_web",
  ryoko: "https://drive.google.com/file/d/1mFSZu4MfufNKqQ12iByWelv1t2-CICB6/view?usp=drive_web",
  armorer: "https://drive.google.com/file/d/18us8iV34xurYftllCF7k-ooCovmXCP0D/view?usp=drive_web",
  gunslinger: "https://drive.google.com/file/d/1JzipERFx1mMSniFkCfI6BF3A2LVXq44x/view?usp=drive_web",
  calen: "https://docs.google.com/spreadsheets/d/1ItAk26kepFyVrklgIlfGp_IM-nQDUrGBR0PrECb1xRw/edit?usp=drive_web",
  trey: "https://docs.google.com/spreadsheets/d/1b_Nywk5XyQqX-1No6Rsy9yfexvUyNJDdhi9H1glHoro/edit?usp=drive_web",
  template: "https://docs.google.com/spreadsheets/d/1Dwg2gQoiJzIh8s0WxrPBdEMilE_QzOYHN1GQfa-Adak/edit?usp=drive_web",
  featsLinked: "https://drive.google.com/file/d/1JJpNe4U7QvdI8yCn3Tan3K8JoS363Osr/view?usp=drive_web",
  options5e: "https://drive.google.com/file/d/1fv8pL9ne64p4M7H1nfsvwJWZ7BzNIGra/view?usp=drive_web",
  bloodHunter: "https://drive.google.com/file/d/1n3WZdwN2jZhta_ILJkVnZp1Yo4dzOXRW/view?usp=drive_web",
  bloodHunterPrint: "https://drive.google.com/file/d/1enCL2K-oUgEdRjqIXn7a3U1h2wLAOgOn/view?usp=drive_web",
  elementalist: "https://drive.google.com/file/d/1lEsYI9vMIUoUh3vq90lvW9PNCZG-NuyF/view?usp=drive_web",
  fighterFolio: "https://drive.google.com/file/d/1_bi7DFfrPbVbnmFOxJfrr-tzyR4cFbYb/view?usp=drive_web",
  bookLostSpells: "https://drive.google.com/file/d/1v6QL5lDGX5qxQuVfYCXMfjd5Dkcu3PMB/view?usp=drive_web",
  beyondDamageDice: "https://drive.google.com/file/d/19G5zpBNWUBVMW5Ue6UkvQTaQInVBfc0X/view?usp=drive_web",
  magicalIndustrial: "https://drive.google.com/file/d/1bson3fFXSZ-qMXXoZP_nAv9yBY7Tjhpn/view?usp=drive_web",
  heliana: "https://drive.google.com/file/d/1HSRuUFKM3VDovP2A-lno8lU6qi-DGuk_/view?usp=drive_web",
  steinhardt: "https://drive.google.com/file/d/1k1ufak8ZDKWVgj1_K5mI3gE6VBTDAv7v/view?usp=drive_web",
  steinhardtOptions: "https://drive.google.com/file/d/1UK5QRuxjwF01wm8yMRKBjJVHU5CWXXiw/view?usp=drive_web",
  middleEarthPlayer: "https://drive.google.com/file/d/1KfGO-5zlcmIb5FD1R2M0dNfVzvE7DD33/view?usp=drive_web",
  middleEarthLoremaster: "https://drive.google.com/file/d/1NKckXKgAUdNbKd3Zdh8j7MzHatSM6nXd/view?usp=drive_web",
  middleEarthMaps: "https://drive.google.com/file/d/1Jjkad4Aeu2KkyVFR6e5G3a3QEIi9K5fq/view?usp=drive_web",
  borderlandAdventures: "https://drive.google.com/file/d/1tXoZ2rJSiU9yV8p8jeKRPnsmqkymIAQm/view?usp=drive_web",
  borderlandProvinces: "https://drive.google.com/file/d/1MuHvh4kn9b3U0lZBm6S7FudkNT8eIUFF/view?usp=drive_web",
  bookLairs: "https://drive.google.com/file/d/1P5O5YvDzmbE5bTbmHOVes6_BmBOi3wP3/view?usp=drive_web",
  bookLairsMaps: "https://drive.google.com/file/d/1zvuU85HJXgavzq-GSVRBgxW76NDdkmqO/view?usp=drive_web",
  fifthEditionFoes: "https://drive.google.com/file/d/1dMKbeJiz8Qr3iLSH5VT9hjlEqwEKhPL_/view?usp=drive_web",
  bloodVaults: "https://drive.google.com/file/d/1zWjDxjODWIMneSf41KF6f-JIWBnaYnh4/view?usp=drive_web",
  ryokoItems: "https://drive.google.com/file/d/1O_j5b3Az28vITLfchZGNng_z9vNIzcLs/view?usp=drive_web",
  bombuku: "https://drive.google.com/file/d/12U-R-lW6v50vlw-5QcwBx6CF4V5gtrmX/view?usp=drive_web",
  amethyst: "https://drive.google.com/file/d/1Td_M0oqmPNtWUAa80gVzUFPMQDHyLbiL/view?usp=drive_web"
};

const SOURCES = {
  driveRoot: "D&D 5e Google Drive Library",
  weenFolder: "Ween Hut Jr Drive Folder",
  characterSheetsFolder: "Character Sheets Folder",
  spellsFolder: "Spells Folder",
  gamebrewFolder: "GameBrew Folder",
  helianaFolder: "Heliana's Guide Folder",
  mageHandFolder: "Mage Hand Press Folder",
  thuleFolder: "THULE Folder",
  phb: "Player's Handbook 5E",
  tasha: "Tasha's Cauldron of Everything",
  ryoko: "Ryoko's Guide to the Yokai Realms",
  armorer: "Armorer's Handbook: Heavyarms",
  gunslinger: "Gunslinger: Heavyarms",
  calen: "Calen Marr Character Sheet",
  trey: "TREY Character Sheet",
  template: "Character Sheet Template",
  featsLinked: "5e Feats Linked",
  options5e: "5E Options",
  bloodHunter: "Blood Hunter",
  bloodHunterPrint: "Blood Hunter Printer Friendly",
  elementalist: "Elementalist 5E Class",
  fighterFolio: "Fighter Folio",
  bookLostSpells: "Book of Lost Spells",
  beyondDamageDice: "Beyond Damage Dice",
  magicalIndustrial: "Magical Industrial Revolution",
  heliana: "Heliana's Guide to Monster Hunting",
  steinhardt: "Steinhardt's Guide to the Eldritch Hunt",
  steinhardtOptions: "Steinhardt Player Options",
  middleEarthPlayer: "Adventures in Middle Earth Player's Guide",
  middleEarthLoremaster: "Adventures in Middle Earth Loremaster Guide",
  middleEarthMaps: "Adventures in Middle Earth Maps",
  borderlandAdventures: "Adventures in the Borderland Provinces",
  borderlandProvinces: "Borderland Provinces",
  bookLairs: "Book of Lairs",
  bookLairsMaps: "Book of Lairs Maps",
  fifthEditionFoes: "Altered Beasts / Fifth Edition Foes",
  bloodVaults: "Blood Vaults of Sister Alkava",
  ryokoItems: "Ryoko Item Cards",
  bombuku: "Bombuku's Notebook of Knowhow",
  amethyst: "Amethyst Quintessence"
};

const categories = [
  {
    id: "races",
    label: "Races",
    eyebrow: "Lineages and Bloodlines",
    title: "Races and Variants",
    childLabel: "Race variants",
    layout: "resource",
    entries: [
      { name: "Dwarf", source: "phb", page: 18, children: ["Hill Dwarf", "Mountain Dwarf"] },
      { name: "Elf", source: "phb", page: 21, children: ["High Elf", "Wood Elf", "Dark Elf"] },
      { name: "Halfling", source: "phb", page: 26, children: ["Lightfoot Halfling", "Stout Halfling"] },
      { name: "Human", source: "phb", page: 29, children: ["Standard Human", "Variant Human"] },
      { name: "Dragonborn", source: "phb", page: 32, children: [] },
      { name: "Gnome", source: "phb", page: 35, children: ["Forest Gnome", "Rock Gnome"] },
      { name: "Half-Elf", source: "phb", page: 38, children: [] },
      { name: "Half-Orc", source: "phb", page: 40, children: [] },
      { name: "Tiefling", source: "phb", page: 42, children: [] },
      { name: "Custom Lineage", source: "tasha", page: 9, children: ["Custom origin options"] },
      { name: "Enkoh", source: "ryoko", page: 123, children: ["Hulking Enkoh", "Springtail Enkoh"] },
      { name: "Fuyōren", source: "ryoko", page: 126, children: [] },
      { name: "Hanamori", source: "ryoko", page: 128, children: [] },
      { name: "Haniwa", source: "ryoko", page: 130, children: [] },
      { name: "Isetsu", source: "ryoko", page: 132, children: [] },
      { name: "Kitsune", source: "ryoko", page: 134, children: [] },
      { name: "Oniborne", source: "ryoko", page: 137, children: ["Red Oniborne", "Blue Oniborne", "Green Oniborne"] },
      { name: "Ryokido", source: "ryoko", page: 141, children: [] },
      { name: "Tatsumi", source: "ryoko", page: 143, children: ["Nishikin", "Ryūjin"] },
      { name: "Tengu", source: "ryoko", page: 147, children: ["Hanataka Tengu", "Karasu Tengu"] }
    ]
  },
  {
    id: "classes",
    label: "Classes",
    eyebrow: "Professions and Orders",
    title: "Classes and Subclasses",
    childLabel: "Subclasses",
    layout: "resource",
    entries: [
      { name: "Artificer", source: "tasha", page: 10, children: ["Alchemist", "Armorer", "Artillerist", "Battle Smith"] },
      { name: "Barbarian", source: "phb", page: 46, children: ["Path of the Berserker", "Path of the Totem Warrior", "Path of the Beast", "Path of Wild Magic", "Path of the Kaiju"] },
      { name: "Bard", source: "phb", page: 51, children: ["College of Lore", "College of Valor", "College of Creation", "College of Eloquence", "College of Hanabi", "College of Masks"] },
      { name: "Bender", source: "ryoko", page: 161, children: ["Disciple of Ferocity", "Disciple of Fortification", "Disciple of Fusion", "Disciple of Invigoration"] },
      { name: "Blood Hunter", source: "bloodHunter", page: null, children: ["Lycan", "Mutant", "Ghostslayer", "Profane Soul"] },
      { name: "Cleric", source: "phb", page: 56, children: ["Knowledge Domain", "Life Domain", "Light Domain", "Nature Domain", "Tempest Domain", "Trickery Domain", "War Domain", "Order Domain", "Peace Domain", "Twilight Domain", "Shrine Warden Domain"] },
      { name: "Druid", source: "phb", page: 64, children: ["Circle of the Land", "Circle of the Moon", "Circle of Spores", "Circle of Stars", "Circle of Wildfire", "Circle of the Yokai"] },
      { name: "Elementalist", source: "elementalist", page: null, children: [] },
      { name: "Fighter", source: "phb", page: 70, children: ["Champion", "Battle Master", "Eldritch Knight", "Psi Warrior", "Rune Knight", "Skeletal Blade", "Fighter Folio options"] },
      { name: "Gunslinger", source: "gunslinger", page: 4, children: ["Maverick", "Beastrider", "Enforcer", "Preacher", "Revelator"] },
      { name: "Monk", source: "phb", page: 76, children: ["Way of the Open Hand", "Way of Shadow", "Way of the Four Elements", "Way of Mercy", "Way of the Astral Self", "Way of the Eight Gates"] },
      { name: "Paladin", source: "phb", page: 82, children: ["Oath of Devotion", "Oath of the Ancients", "Oath of Vengeance", "Oath of Glory", "Oath of the Watchers", "Oath of the Yojimbo"] },
      { name: "Ranger", source: "phb", page: 89, children: ["Hunter", "Beast Master", "Fey Wanderer", "Swarmkeeper", "Rōnin"] },
      { name: "Rogue", source: "phb", page: 94, children: ["Thief", "Assassin", "Arcane Trickster", "Phantom", "Soulknife", "Tamaya"] },
      { name: "Sorcerer", source: "phb", page: 99, children: ["Draconic Bloodline", "Wild Magic", "Aberrant Mind", "Clockwork Soul", "Spirit Caller"] },
      { name: "Tamer", source: "ryoko", page: 196, children: ["Sensei"] },
      { name: "Warlock", source: "phb", page: 105, children: ["The Archfey", "The Fiend", "The Great Old One", "The Fathomless", "The Genie", "The Shinigami"] },
      { name: "Wizard", source: "phb", page: 112, children: ["School of Abjuration", "School of Conjuration", "School of Divination", "School of Enchantment", "School of Evocation", "School of Illusion", "School of Necromancy", "School of Transmutation", "Bladesinging", "Order of Scribes", "Shinobi"] }
    ]
  },
  {
    id: "spells",
    label: "Spells",
    eyebrow: "Aetheric Formulae",
    title: "Spells and Spellbooks",
    layout: "compact",
    entries: [
      ...["Acid Rain", "Bakuryō’s Blessèd Blizzard", "Blinding Radiance", "Bloodweave", "Cloud Stride", "Concussion", "Cyclone", "Depth Charge", "Earthskin", "Endoleech", "Endure", "Extract Shirikodama", "Feverskin", "Flashbang", "Ice Moon", "Inner Flame", "Mireball", "Mirror of Reflection", "Pins & Needles", "Protection", "Reinforce", "Riptide", "Ryoko's Revelation", "Shielding Word", "Smokescreen", "Spark", "Steelskin", "Sundering Sky", "Switcheroo", "The Bends", "Water Wyrm", "Wind Strike"].map((name) => ({ name, source: "ryoko", page: 278, type: "Spell" })),
      ...["Booming Blade", "Green-Flame Blade", "Lightning Lure", "Mind Sliver", "Sword Burst", "Blade of Disaster", "Dream of the Blue Veil", "Intellect Fortress", "Spirit Shroud", "Summon Aberration", "Summon Beast", "Summon Celestial", "Summon Construct", "Summon Elemental", "Summon Fey", "Summon Fiend", "Summon Shadowspawn", "Summon Undead", "Tasha's Caustic Brew", "Tasha's Mind Whip"].map((name) => ({ name, source: "tasha", page: 106, type: "Spell" })),
      { name: "Book of Lost Spells", source: "bookLostSpells", page: null, type: "Spell compendium" },
      { name: "Spells Drive Folder", source: "spellsFolder", page: null, type: "Folder" }
    ]
  },
  {
    id: "gear",
    label: "Gear",
    eyebrow: "Armories and Relics",
    title: "Items, Equipment, and Upgrades",
    layout: "compact",
    entries: [
      ...["Adventuring Gear", "Armor and Shields", "Weapons", "Tools", "Mounts and Vehicles", "Trinkets"].map((name) => ({ name, source: "phb", page: 143, type: "Equipment" })),
      ...["Magic Tattoos", "Spellbooks", "Elemental Essence Shard", "Far Realm Shard", "Ghost Step Tattoo", "Illuminator's Tattoo", "Libram of Souls and Flesh", "Lyre of Building", "Prosthetic Limb", "Spellwrought Tattoo"].map((name) => ({ name, source: "tasha", page: 118, type: "Magic item" })),
      ...["All-Terrain Leg", "Armour of the Oni King", "Blo Staff", "Courtesan's War Fan", "Draakannon", "Earthpiercer", "G.R.A.P.P.L.E.R.", "Glaive of the Green Tyrant", "Hakuja-tō", "Hanabi Kicker", "Kageboshi", "Kanaboom Stick", "Kitsune Mask", "Mask of the Oni", "Mask of the Tengu", "Onikiri, Demon Cutter", "Reaper's Kama", "Tanuki-zake", "Wyrm's Breath Grenade"].map((name) => ({ name, source: "ryoko", page: 248, type: "Magic item" })),
      { name: "Ryoko Prostheses and Armaments Cards", source: "ryokoItems", page: null, type: "Item cards" }
    ]
  },
  {
    id: "firearms",
    label: "Firearms",
    eyebrow: "Powder, Brass, and Aether",
    title: "Firearms and Industrial Tech",
    layout: "compact",
    entries: [
      { name: "Gunslinger Class", source: "gunslinger", page: 4, type: "Class" },
      { name: "Firearms", source: "gunslinger", page: 10, type: "Weapon rules" },
      { name: "Firearm Feats", source: "gunslinger", page: 10, type: "Feats" },
      { name: "Magic Firearms", source: "gunslinger", page: 12, type: "Magic items" },
      { name: "Firearm Modifications", source: "gunslinger", page: 13, type: "Upgrades" },
      { name: "Magical Industrial Revolution", source: "magicalIndustrial", page: null, type: "Aetherpunk city tech" },
      { name: "Armorer's Handbook", source: "armorer", page: 6, type: "Equipment upgrades" },
      { name: "Beyond Damage Dice", source: "beyondDamageDice", page: null, type: "Weapon options" }
    ]
  },
  {
    id: "crafting",
    label: "Crafting",
    eyebrow: "Workshops and Guild Ledgers",
    title: "Crafting, Harvesting, and Runes",
    layout: "compact",
    entries: [
      { name: "Ryoko Crafting", source: "ryoko", page: 62, type: "Crafting" },
      { name: "Ryoko Harvesting", source: "ryoko", page: 54, type: "Harvesting" },
      { name: "Ryoko Equipment and Prostheses", source: "ryoko", page: 78, type: "Equipment" },
      { name: "Upgrading Equipment", source: "armorer", page: 7, type: "Equipment upgrades" },
      { name: "Runestones", source: "armorer", page: 15, type: "Rune magic" },
      { name: "Runesmithing", source: "armorer", page: 15, type: "Crafting system" },
      { name: "Bombuku's Notebook of Knowhow", source: "bombuku", page: null, type: "Crafting and knowhow" },
      { name: "Heliana's Monster Harvesting", source: "heliana", page: null, type: "Harvesting and crafting" }
    ]
  },
  {
    id: "feats",
    label: "Feats",
    eyebrow: "Training and Tricks",
    title: "Feats and Character Options",
    layout: "compact",
    entries: [
      { name: "5e Feats Linked", source: "featsLinked", page: null, type: "Feats" },
      { name: "5E Options", source: "options5e", page: null, type: "Character options" },
      { name: "Tasha's Feats", source: "tasha", page: 80, type: "Feats" },
      { name: "Ryoko Backgrounds", source: "ryoko", page: 214, type: "Backgrounds" },
      { name: "Ryoko Feats", source: "ryoko", page: 221, type: "Feats" },
      { name: "Ryoko Racial Feats", source: "ryoko", page: 226, type: "Racial feats" },
      { name: "Fighter Folio", source: "fighterFolio", page: null, type: "Fighter options" },
      { name: "Steinhardt Player Options", source: "steinhardtOptions", page: null, type: "Dark industrial options" }
    ]
  },
  {
    id: "bestiary",
    label: "Bestiary",
    eyebrow: "Field Notes and Wanted Posters",
    title: "Monsters, Hunts, and Kaiju",
    layout: "compact",
    entries: [
      { name: "Ryoko Kaiju Fighting", source: "ryoko", page: 10, type: "Kaiju rules" },
      { name: "Creatures of the Yokai Realms", source: "ryoko", page: 306, type: "Bestiary" },
      { name: "Familiars", source: "ryoko", page: 230, type: "Familiars" },
      { name: "Heliana's Guide to Monster Hunting", source: "heliana", page: null, type: "Monster hunting" },
      { name: "Heliana's Guide Folder", source: "helianaFolder", page: null, type: "Folder" },
      { name: "Altered Beasts / Fifth Edition Foes", source: "fifthEditionFoes", page: null, type: "Bestiary" },
      { name: "Blood Vaults of Sister Alkava", source: "bloodVaults", page: null, type: "Adventure and monsters" },
      { name: "Steinhardt's Guide to the Eldritch Hunt", source: "steinhardt", page: null, type: "Horror hunt setting" }
    ]
  },
  {
    id: "worlds",
    label: "Worlds",
    eyebrow: "City, Frontier, and Beyond",
    title: "Settings, Adventures, and Sourcebooks",
    layout: "compact",
    entries: [
      { name: "Magical Industrial Revolution", source: "magicalIndustrial", page: null, type: "Urban aetherpunk reference" },
      { name: "Amethyst Quintessence", source: "amethyst", page: null, type: "Science fantasy setting" },
      { name: "Adventures in Middle Earth Player's Guide", source: "middleEarthPlayer", page: null, type: "Player guide" },
      { name: "Adventures in Middle Earth Loremaster Guide", source: "middleEarthLoremaster", page: null, type: "GM guide" },
      { name: "Adventures in Middle Earth Maps", source: "middleEarthMaps", page: null, type: "Maps" },
      { name: "Adventures in the Borderland Provinces", source: "borderlandAdventures", page: null, type: "Adventure" },
      { name: "Borderland Provinces", source: "borderlandProvinces", page: null, type: "Frontier setting" },
      { name: "Book of Lairs", source: "bookLairs", page: null, type: "Adventure sites" },
      { name: "Book of Lairs Maps", source: "bookLairsMaps", page: null, type: "Maps" },
      { name: "THULE Folder", source: "thuleFolder", page: null, type: "Setting folder" },
      { name: "GameBrew Folder", source: "gamebrewFolder", page: null, type: "Homebrew folder" },
      { name: "Mage Hand Press Folder", source: "mageHandFolder", page: null, type: "Publisher folder" }
    ]
  },
  {
    id: "sheets",
    label: "Sheets",
    eyebrow: "Desk Files",
    title: "Character Sheets and Library Folders",
    layout: "compact",
    entries: [
      { name: "Calen Marr Character Sheet", source: "calen", page: null, type: "Spreadsheet" },
      { name: "TREY Character Sheet", source: "trey", page: null, type: "Spreadsheet" },
      { name: "Blank Character Sheet Template", source: "template", page: null, type: "Spreadsheet" },
      { name: "Character Sheets Folder", source: "characterSheetsFolder", page: null, type: "Folder" },
      { name: "Original Ween Hut Jr Folder", source: "weenFolder", page: null, type: "Folder" },
      { name: "Full D&D 5e Drive Library", source: "driveRoot", page: null, type: "Folder" }
    ]
  }
];

const sourceKeys = ["driveRoot", "weenFolder", "phb", "tasha", "ryoko", "armorer", "gunslinger", "calen", "trey", "template"];

function linkFor(entry) {
  const base = SOURCE_LINKS[entry.source] || "#";
  return entry.page ? `${base}#page=${entry.page}` : base;
}

function sourceName(entry) {
  return SOURCES[entry.source] || entry.source;
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'")
    .toLowerCase();
}

function matches(entry, query) {
  if (!query) return true;
  const haystack = [
    entry.name,
    entry.type,
    sourceName(entry),
    ...(entry.children || [])
  ].join(" ");
  return normalizeText(haystack).includes(normalizeText(query));
}

function resourceCard(entry, childLabel) {
  const childLinks = (entry.children || []).map((child) => `<a class="child-link" href="${linkFor(entry)}">${child}</a>`).join("");
  return `
    <article class="card resource-card">
      <div class="card-header">
        <div>
          <h3>${entry.name}</h3>
          <p class="meta">${sourceName(entry)}${entry.page ? `, p. ${entry.page}` : ""}</p>
        </div>
        <span class="source-tag">${entry.source.toUpperCase()}</span>
      </div>
      <a class="source-link" href="${linkFor(entry)}" target="_blank" rel="noopener">Open source</a>
      ${childLinks ? `<div class="children" aria-label="${childLabel}">${childLinks}</div>` : ""}
    </article>
  `;
}

function compactCard(entry) {
  return `
    <article class="card compact-card">
      <div class="card-header">
        <div>
          <h3>${entry.name}</h3>
          <p class="meta">${entry.type || "Reference"} · ${sourceName(entry)}${entry.page ? `, p. ${entry.page}` : ""}</p>
        </div>
        <span class="source-tag">${entry.source.toUpperCase()}</span>
      </div>
      <a class="source-link" href="${linkFor(entry)}" target="_blank" rel="noopener">Open source</a>
    </article>
  `;
}

function renderTabs() {
  const tabList = document.querySelector("#tabList");
  const panels = document.querySelector("#tabPanels");
  tabList.innerHTML = categories.map((category, index) => `
    <button class="tab-button ${index === 0 ? "active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" data-tab="${category.id}">
      ${category.label}
    </button>
  `).join("");
  panels.innerHTML = categories.map((category, index) => `
    <section id="${category.id}" class="tab-panel ${index === 0 ? "active" : ""}" role="tabpanel">
      <div class="section-heading">
        <p class="eyebrow">${category.eyebrow}</p>
        <h2>${category.title}</h2>
      </div>
      <div class="${category.layout === "resource" ? "resource-grid" : "compact-grid"}" data-grid="${category.id}"></div>
    </section>
  `).join("");

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tab));
  });
}

function activateTab(tab) {
  const selectedButton = document.querySelector(`.tab-button[data-tab="${tab}"]`);
  if (!selectedButton) return;
  document.querySelectorAll(".tab-button").forEach((item) => {
    item.classList.toggle("active", item === selectedButton);
    item.setAttribute("aria-selected", item === selectedButton ? "true" : "false");
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === tab);
  });
}

function render() {
  const query = document.querySelector("#searchInput").value.trim();
  let total = 0;

  categories.forEach((category) => {
    const matchesForCategory = category.entries.filter((entry) => matches(entry, query));
    total += matchesForCategory.length;
    const grid = document.querySelector(`[data-grid="${category.id}"]`);
    grid.innerHTML = matchesForCategory.map((entry) => (
      category.layout === "resource" ? resourceCard(entry, category.childLabel) : compactCard(entry)
    )).join("");
  });

  document.querySelector("#stats").textContent = `${total} matching entries across ${categories.length} tabs`;
}

function renderSources() {
  const list = document.querySelector("#sourceList");
  list.innerHTML = sourceKeys.map((key) => `<li><a href="${SOURCE_LINKS[key]}" target="_blank" rel="noopener">${SOURCES[key]}</a></li>`).join("");
}

renderTabs();
renderSources();
render();

document.querySelector("#searchInput").addEventListener("input", render);
document.querySelectorAll(".nav-actions a").forEach((link) => {
  link.addEventListener("click", () => activateTab(link.getAttribute("href").replace("#", "")));
});

if (window.location.hash) {
  activateTab(window.location.hash.replace("#", ""));
}
