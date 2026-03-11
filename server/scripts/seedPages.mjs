/**
 * Seed-script – oppretter eksempel-sider med blokker fra /client-designet.
 *
 * Kjør fra rotmappen:
 *   node server/scripts/seedPages.mjs <org-slug>
 *
 * Eksempel:
 *   node server/scripts/seedPages.mjs hiof
 *
 * Krever SANITY_API_TOKEN i next-digital-fabrikasjon/.env.local
 * Kategoriene fra seedCategories/seed.mjs må finnes fra før.
 */

import { readFileSync } from 'fs'

// ─── Env ────────────────────────────────────────────────────────────────────

function loadEnv() {
  try {
    const raw = readFileSync('./next-digital-fabrikasjon/.env.local', 'utf8')
    for (const line of raw.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const idx = trimmed.indexOf('=')
      if (idx === -1) continue
      process.env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim()
    }
  } catch { /* env allerede satt */ }
}

loadEnv()

const ORG_SLUG = process.argv[2]
if (!ORG_SLUG) {
  console.error('Bruk: node server/scripts/seedPages.mjs <org-slug>')
  console.error('Eksempel: node server/scripts/seedPages.mjs hiof')
  process.exit(1)
}

const PROJECT_ID  = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rnl5hcxh'
const DATASET     = process.env.NEXT_PUBLIC_SANITY_DATASET    || 'production'
const API_VERSION = '2024-01-01'
const TOKEN       = process.env.SANITY_API_TOKEN

if (!TOKEN) {
  console.error('Mangler SANITY_API_TOKEN i .env.local')
  process.exit(1)
}

const BASE = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data`

// ─── API helpers ─────────────────────────────────────────────────────────────

async function query(groq, params = {}) {
  const encoded = encodeURIComponent(groq)
  const paramStr = Object.entries(params)
    .map(([k, v]) => `$${k}=${encodeURIComponent(JSON.stringify(v))}`)
    .join('&')
  const url = `${BASE}/query/${DATASET}?query=${encoded}${paramStr ? '&' + paramStr : ''}`
  const res = await fetch(url, { headers: { Authorization: `Bearer ${TOKEN}` } })
  const json = await res.json()
  if (json.error) throw new Error(json.error.description || JSON.stringify(json.error))
  return json.result
}

async function mutate(mutations) {
  const res = await fetch(`${BASE}/mutate/${DATASET}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ mutations }),
  })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Deterministic Sanity document _id */
const pageId = (slug) => `seed-page-${ORG_SLUG}-${slug}`

/** Simple portable text paragraph */
function para(text) {
  return {
    _type: 'block',
    _key: `p-${Math.random().toString(36).slice(2, 8)}`,
    style: 'normal',
    children: [{ _type: 'span', _key: 'sp1', text, marks: [] }],
    markDefs: [],
  }
}

/** Reference object */
const ref = (id) => ({ _type: 'reference', _ref: id })

/** Random _key for array items */
const key = (prefix) => `${prefix}-${Math.random().toString(36).slice(2, 8)}`

// ─── Look up org ──────────────────────────────────────────────────────────────

console.log(`\nSlår opp organisasjon: ${ORG_SLUG}`)
const org = await query(
  `*[_type == "organization" && slug.current == $slug][0]{ _id, name }`,
  { slug: ORG_SLUG }
)

if (!org) {
  console.error(`Fant ingen organisasjon med slug "${ORG_SLUG}"`)
  console.error('Sjekk at org er opprettet i Sanity Studio.')
  process.exit(1)
}

console.log(`  ✓ Fant: ${org.name} (${org._id})`)
const ORG_REF = ref(org._id)

// ─── Page definitions ─────────────────────────────────────────────────────────

const pages = [

  // ══════════════════════════════════════════════════════════════════════════
  // 1. TEKNOLOGI-OVERSIKT  (TechnologyPage.jsx → CardGrid)
  // ══════════════════════════════════════════════════════════════════════════
  {
    _id: pageId('technology'),
    _type: 'page',
    name: 'Teknologier',
    slug: { _type: 'slug', current: 'technology' },
    organization: ORG_REF,
    category: ref('category-technology'),
    layout: 'full',
    active: true,
    order: 1,
    blocks: [
      {
        _type: 'cardGridBlock',
        _key: key('cg'),
        heading: 'Teknologier ved ditt valgte område',
        columns: 3,
        cards: [
          { _key: key('c'), title: '3D-PRINTING',        link: `/${ORG_SLUG}/3d-printing` },
          { _key: key('c'), title: 'LASERKUTTING',        link: `/${ORG_SLUG}/laserkutting` },
          { _key: key('c'), title: 'CNC-FRESING',         link: `/${ORG_SLUG}/cnc-fresing` },
          { _key: key('c'), title: 'ELEKTRONIKK',         link: `/${ORG_SLUG}/elektronikk` },
          { _key: key('c'), title: 'TRYKK & PROFILERING', link: `/${ORG_SLUG}/trykk-profilering` },
          { _key: key('c'), title: 'AIRBRUSHING',         link: `/${ORG_SLUG}/airbrushing` },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 2. 3D-PRINTING VERSJONSLISTE  (SelectedTechnology.jsx → VersionListBlock)
  // ══════════════════════════════════════════════════════════════════════════
  {
    _id: pageId('3d-printing'),
    _type: 'page',
    name: '3D-Printing',
    slug: { _type: 'slug', current: '3d-printing' },
    organization: ORG_REF,
    category: ref('category-technology'),
    parentPage: ref(pageId('technology')),
    layout: 'full',
    active: true,
    order: 1,
    blocks: [
      {
        _type: 'versionListBlock',
        _key: key('vl'),
        heading: '3D-PRINTING',
        items: [
          {
            _key: key('vi'),
            title: 'Original Prusa MK4S',
            description: 'Kompakt og pålitelig printer. Nozzle 0.4 mm. Maks printestørrelse: 250×210×220 mm.',
            link: `/${ORG_SLUG}/prusa-mk4s`,
          },
          {
            _key: key('vi'),
            title: 'Original Prusa MINI+',
            description: 'Liten og begynner-vennlig printer. Maks printestørrelse: 180×180×180 mm.',
            link: `/${ORG_SLUG}/prusa-mini`,
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 3. PRUSA MK4S GUIDE  (GuidePage.jsx → GuideBlock)
  // ══════════════════════════════════════════════════════════════════════════
  {
    _id: pageId('prusa-mk4s'),
    _type: 'page',
    name: 'Original Prusa MK4S – Guide',
    slug: { _type: 'slug', current: 'prusa-mk4s' },
    organization: ORG_REF,
    parentPage: ref(pageId('3d-printing')),
    layout: 'full',
    active: true,
    order: 1,
    blocks: [
      {
        _type: 'guideBlock',
        _key: key('gb'),
        steps: [
          {
            _key: key('gs'),
            title: 'Introduksjon og sikkerhet',
            content: [
              para('Sikkerhet er spesielt viktig ved bruk av ulike teknologier. Ved 3D-printing må du tenke på sikkerhetspunktene under.'),
              para('Lær mer om 3D-printing ved å gjennomføre det digitale kurset.'),
            ],
            infoBox: {
              title: 'VIKTIGE SIKKERHETSPUNKTER VED 3D-PRINTING',
              items: [
                'Printeren kan bli svært varm – ikke berør nozzle under print',
                'Smeltet plastikk er varmt – bruk hansker ved håndtering',
                'Ha god ventilasjon – damper fra filament kan irritere luftveiene',
              ],
            },
            courseLink: {
              label: 'Ta kurset om 3D-printing',
              href: `/${ORG_SLUG}/courses/3d-printing`,
            },
          },
          {
            _key: key('gs'),
            title: '1. 3D-modell',
            content: [
              para('Last ned eller lag en 3D-modell i STL- eller 3MF-format. Du kan finne modeller på Printables eller Thingiverse, eller lage egne i Fusion 360, TinkerCAD eller Blender.'),
            ],
          },
          {
            _key: key('gs'),
            title: '2. Forbered printen (Slicing)',
            content: [
              para('Åpne PrusaSlicer og importer modellen din. Velg riktig printer og filament-profil. Juster innstillingene og eksporter G-koden til USB-pinne.'),
            ],
          },
          {
            _key: key('gs'),
            title: '3. Klargjøring av printeren',
            content: [
              para('Sjekk at platen er ren og jevn. Bruk isopropanol for rengjøring. Last inn filament via Filament → Load Filament i menyen.'),
            ],
          },
          {
            _key: key('gs'),
            title: '4. Kjøre printeren',
            content: [
              para('Sett inn USB og velg filen via Print → [filnavn]. Følg med på de første lagene – avbryt om noe ser galt ut (dårlig adhesjon, stringing, warp).'),
            ],
          },
          {
            _key: key('gs'),
            title: '5. Oppfølging av printen',
            content: [
              para('Sjekk at filamentet fester seg godt til platen. Se etter stringing eller lag-separasjon. Du trenger ikke stå ved siden av hele tiden, men sjekk jevnlig.'),
            ],
          },
          {
            _key: key('gs'),
            title: '6. Ferdig print',
            content: [
              para('Vent til platen er avkjølt til romtemperatur. Bøy platen forsiktig for å løsne printen. Ikke bruk kraft mens platen er varm – det kan skade overflaten.'),
            ],
          },
          {
            _key: key('gs'),
            title: '7. Etterbehandling',
            content: [
              para('Fjern støtte-strukturer med tang eller kniv (vær forsiktig). Slipp overflaten med sandpapir om ønskelig: start med 120 grit, deretter 240 og 400 for finere overflate.'),
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 4. FILAMENT  (FilamentPage.jsx → TextBlock + MaterialCardBlock)
  // ══════════════════════════════════════════════════════════════════════════
  {
    _id: pageId('filament'),
    _type: 'page',
    name: 'Filament',
    slug: { _type: 'slug', current: 'filament' },
    organization: ORG_REF,
    parentPage: ref(pageId('3d-printing')),
    layout: 'full',
    active: true,
    order: 2,
    blocks: [
      {
        _type: 'textBlock',
        _key: key('tb'),
        heading: 'Filament',
        content: [
          para('Filament er råmaterialet som brukes i 3D-printing med FDM-teknologi. Det finnes mange typer med ulike egenskaper.'),
          para('Velg riktig type basert på hva du skal lage og hvilken printer du bruker.'),
        ],
      },
      {
        _type: 'materialCardBlock',
        _key: key('mc'),
        heading: 'VELG FILAMENT',
        intro: 'Når du skal velge filament og printer er det viktig å tenke på hva det skal brukes til.',
        materials: [
          {
            _key: key('m'),
            name: 'PLA',
            specs: [
              { _key: key('s'), label: 'Nozzle (°C)', value: '200–220' },
              { _key: key('s'), label: 'Bed (°C)', value: '0–60' },
            ],
            fordeler: ['Billig', 'Lett å printe', 'Lite lukt', 'Bionedbrytbart'],
            ulemper: ['Mindre varmebestandig (myk ved ~60°C)', 'Mindre slitesterk enn PETG/ABS'],
            anbefalingBruk: ['Prototyping', 'Dekorative deler', 'Skoleprosjekter'],
          },
          {
            _key: key('m'),
            name: 'PETG',
            specs: [
              { _key: key('s'), label: 'Nozzle (°C)', value: '220–250' },
              { _key: key('s'), label: 'Bed (°C)', value: '70–90' },
            ],
            fordeler: ['Mer slitesterk enn PLA', 'Tåler fukt', 'God lagadhesjon'],
            ulemper: ['Mer stringing enn PLA', 'Litt vanskeligere å printe'],
            anbefalingBruk: ['Utendørs bruk', 'Mekaniske deler', 'Beholdere'],
          },
          {
            _key: key('m'),
            name: 'ABS',
            specs: [
              { _key: key('s'), label: 'Nozzle (°C)', value: '220–250' },
              { _key: key('s'), label: 'Bed (°C)', value: '100–110' },
            ],
            fordeler: ['Varmebestandig (opp til ~100°C)', 'Slitesterk', 'Kan etterbehandles med aceton'],
            ulemper: ['Krever innkapslet printer', 'Sterk lukt', 'Warp-problemer'],
            anbefalingBruk: ['Funksjonelle deler', 'Høy-temperatur-miljøer'],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 5. OM OSS (parent-side)
  // ══════════════════════════════════════════════════════════════════════════
  {
    _id: pageId('om-oss'),
    _type: 'page',
    name: 'Om oss',
    slug: { _type: 'slug', current: 'om-oss' },
    organization: ORG_REF,
    category: ref('category-about'),
    layout: 'full',
    active: true,
    order: 1,
    blocks: [
      {
        _type: 'heroBlock',
        _key: key('hb'),
        title: 'Om oss',
        subtitle: 'Les mer om teamet, lokalet og åpningstidene.',
        alignment: 'left',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 6. KART OVER OMRÅDET  (AboutUs.jsx → TextBlock, sidebar-layout)
  // ══════════════════════════════════════════════════════════════════════════
  {
    _id: pageId('kart'),
    _type: 'page',
    name: 'Kart over området',
    slug: { _type: 'slug', current: 'kart' },
    organization: ORG_REF,
    parentPage: ref(pageId('om-oss')),
    layout: 'sidebar',
    active: true,
    order: 1,
    blocks: [
      {
        _type: 'textBlock',
        _key: key('tb'),
        heading: 'Kart over området',
        content: [
          para('Høgskolen i Østfold avdeling Halden har en MakerSpace og en FabLab med tilgang til ulike teknologier og utstyr.'),
          para('MakerSpace finner du i bygning B, 2. etasje. FabLab ligger i tilstøtende lokaler.'),
          para('(Last opp et kart-bilde via Image Block-komponenten i Studio)'),
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 7. ANSATTE  (Staff.jsx → StaffGridBlock, sidebar-layout)
  // ══════════════════════════════════════════════════════════════════════════
  {
    _id: pageId('ansatte'),
    _type: 'page',
    name: 'Ansatte',
    slug: { _type: 'slug', current: 'ansatte' },
    organization: ORG_REF,
    parentPage: ref(pageId('om-oss')),
    layout: 'sidebar',
    active: true,
    order: 2,
    blocks: [
      {
        _type: 'staffGridBlock',
        _key: key('sg'),
        heading: 'Ansatte',
        intro: 'MakerSpace og FabLab har flere ansatte som er her for å hjelpe deg.',
        staff: [
          { _key: key('st'), name: 'Fahad',    role: 'Ansvarlig',          contact: 'fahad@hiof.no' },
          { _key: key('st'), name: 'Jennifer', role: 'Studentassistent',   contact: 'jennifer@hiof.no' },
          { _key: key('st'), name: 'Marianne', role: 'Studentassistent',   contact: 'marianne@hiof.no' },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 8. ÅPNINGSTIDER  (sidebar-layout, søsken til kart og ansatte)
  // ══════════════════════════════════════════════════════════════════════════
  {
    _id: pageId('apningstider'),
    _type: 'page',
    name: 'Åpningstider',
    slug: { _type: 'slug', current: 'apningstider' },
    organization: ORG_REF,
    parentPage: ref(pageId('om-oss')),
    layout: 'sidebar',
    active: true,
    order: 3,
    blocks: [
      {
        _type: 'textBlock',
        _key: key('tb'),
        heading: 'Åpningstider',
        content: [
          para('Mandag – fredag: 08:00 – 16:00'),
          para('Lørdag – søndag: Stengt'),
          para('I eksamensperioden kan det forekomme endrede åpningstider. Følg med på oppslagstavlen utenfor lokalet.'),
        ],
      },
    ],
  },
]

// ─── Create pages ─────────────────────────────────────────────────────────────

console.log(`\nOppretter ${pages.length} sider for org "${ORG_SLUG}"...\n`)

for (const page of pages) {
  const existing = await query(
    `*[_id == $id][0]{ _id }`,
    { id: page._id }
  )

  if (existing) {
    console.log(`  ~ Hopper over "${page.name}" – finnes allerede (${page._id})`)
    continue
  }

  await mutate([{ createOrReplace: page }])
  console.log(`  ✓ Opprettet: ${page.name}  →  /${ORG_SLUG}/${page.slug.current}`)
}

console.log(`
Ferdig! 🎉

Hierarki:
  /${ORG_SLUG}/technology          ← CardGrid (teknologier)
  /${ORG_SLUG}/3d-printing         ← VersionListBlock (Prusa-modeller)
  /${ORG_SLUG}/prusa-mk4s          ← GuideBlock (steg-for-steg)
  /${ORG_SLUG}/filament            ← MaterialCardBlock (PLA/PETG/ABS)
  /${ORG_SLUG}/om-oss              ← Hero (parent for Om oss-seksjonen)
  /${ORG_SLUG}/kart                ← TextBlock, sidebar
  /${ORG_SLUG}/ansatte             ← StaffGridBlock, sidebar
  /${ORG_SLUG}/apningstider        ← TextBlock, sidebar

OBS: Bilder (ikoner, ansattbilder, kart) lastes opp manuelt i Sanity Studio.
     Kjør seed.mjs først om kategoriene ikke finnes:
       node server/scripts/seed.mjs
`)
