/* ============================================================
   KCMSBL Store — demo data
   In a real build this would come from a database / admin panel.
   Teams self-serve: a manager sets team name, colors, logo, and
   picks which catalog products to offer. Players order their own.
   ============================================================ */

// The shared product catalog every team draws from.
// A team store = these products with the team's logo + colors applied.
const CATALOG = [
  { id: 'tee',      name: 'Team T-Shirt',        base: 22, sizes: ['S','M','L','XL','2XL','3XL'], img: '👕', desc: 'Moisture-wicking short sleeve tee with team logo.' },
  { id: 'hoodie',   name: 'Pullover Hoodie',     base: 45, sizes: ['S','M','L','XL','2XL','3XL'], img: '🧥', desc: 'Heavyweight fleece hoodie, embroidered team logo.' },
  { id: 'cap',      name: 'Fitted Cap',          base: 28, sizes: ['S/M','L/XL'],                 img: '🧢', desc: 'On-field style fitted cap with 3D embroidered logo.' },
  { id: 'jersey',   name: 'Game Jersey',         base: 65, sizes: ['S','M','L','XL','2XL','3XL'], img: '⚾', desc: 'Full-button game jersey. Add name + number below.', custom: true },
  { id: 'pants',    name: 'Baseball Pants',      base: 38, sizes: ['S','M','L','XL','2XL','3XL'], img: '👖', desc: 'Piped baseball pants in team colors.' },
  { id: 'bag',      name: 'Equipment Bag',       base: 55, sizes: ['One Size'],                   img: '🎒', desc: 'Player bat/gear bag with embroidered team name.' },
];

// League-wide gear (KCMSBL branded — sold from the main store).
const LEAGUE_PRODUCTS = [
  { id: 'lg-tee',    name: 'KCMSBL Logo Tee',        base: 24, sizes: ['S','M','L','XL','2XL','3XL'], img: '👕', desc: 'Official league logo t-shirt.' },
  { id: 'lg-hood',   name: 'KCMSBL Hoodie',          base: 48, sizes: ['S','M','L','XL','2XL','3XL'], img: '🧥', desc: 'Official league hoodie.' },
  { id: 'lg-cap',    name: 'KCMSBL Cap',             base: 30, sizes: ['S/M','L/XL'],                 img: '🧢', desc: 'League logo fitted cap.' },
  { id: 'champ',     name: '2026 Champions Tee',     base: 28, sizes: ['S','M','L','XL','2XL','3XL'], img: '🏆', desc: 'Commemorative championship shirt. Available after playoffs.', seasonal: true },
  { id: 'allstar',   name: 'All-Star Game Tee',      base: 26, sizes: ['S','M','L','XL','2XL','3XL'], img: '⭐', desc: 'All-Star game participant shirt.', seasonal: true },
  { id: 'trophy',    name: 'Replica Champion Trophy',base: 75, sizes: ['One Size'],                   img: '🏆', desc: 'Buy your own replica trophy (managers get one free).', hardgood: true },
];

// Teams. Each manager configures name, colors, logo emoji, and which
// catalog items they want to offer. slug drives the URL: /team.html?t=federal-blues
const TEAMS = {
  'federal-blues': {
    name: 'Federal Blues',
    league: 'Federal League',
    primary: '#1b3a6b',
    accent: '#c8102e',
    logo: '🔵',
    offers: ['tee','hoodie','cap','jersey','pants','bag'],
  },
  'federal-royals': {
    name: 'Federal Royals',
    league: 'Federal League',
    primary: '#004687',
    accent: '#bd9b60',
    logo: '👑',
    offers: ['tee','hoodie','cap','jersey'],
  },
  'national-athletics': {
    name: 'National Athletics',
    league: '18+ National League',
    primary: '#003831',
    accent: '#efb21e',
    logo: '🟢',
    offers: ['tee','hoodie','cap','jersey','bag'],
  },
  'national-blues': {
    name: 'National Blues',
    league: '18+ National League',
    primary: '#0a3161',
    accent: '#ffffff',
    logo: '🔷',
    offers: ['tee','hoodie','cap','jersey'],
  },
};

// Player roster — in the real build this comes from the league's existing
// roster data. Login maps a player to their EXACT team so they can't
// accidentally buy from a similarly-named team in another division
// (e.g. "Federal Blues" vs "National Blues").
const PLAYERS = {
  'mrivera@example.com':  { name: 'M. Rivera',  team: 'federal-blues' },
  'jsmith@example.com':   { name: 'J. Smith',   team: 'national-blues' },
  'dlee@example.com':     { name: 'D. Lee',     team: 'national-athletics' },
  'tkim@example.com':     { name: 'T. Kim',     team: 'federal-royals' },
};

