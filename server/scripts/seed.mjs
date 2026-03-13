/**
 * Seed-script – kjøres med:  node seed.mjs
 * Ingen Sanity CLI eller login nødvendig – bruker bare SANITY_API_TOKEN.
 *
 * Kjør fra rotmappen:  node seed.mjs
 */

import { readFileSync } from 'fs'

// Les .env.local automatisk
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
  } catch { /* env-vars allerede satt */ }
}

loadEnv()

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rnl5hcxh'
const DATASET    = process.env.NEXT_PUBLIC_SANITY_DATASET    || 'production'
const API_VERSION = '2024-01-01'
const TOKEN      = process.env.NEXT_SANITY_API_TOKEN || 'skpH4dl0Q6qxDz2y6Rr7HpcoPeDQpmN6Cc05BvOOuSeXjd2hAyciFaTWsBhXV2E4sOu4LlHICILRBHvvVYhZzSMUyHDKWA4Eptahwq39E6STqPeMty7ZHPdN5nWvhsZTcdDfCEyexAwZ41UpTyyVVyQcD9Z7dn40TesWFwxFwIN1BvMZmPHu'

if (!TOKEN) {
  console.error('Mangler SANITY_API_TOKEN i .env.local')
  process.exit(1)
}

const BASE = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data`

async function getDocument(id) {
  const res = await fetch(`${BASE}/doc/${DATASET}/${id}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  })
  const json = await res.json()
  return json.documents?.[0] ?? null
}

async function mutate(mutations) {
  const res = await fetch(`${BASE}/mutate/${DATASET}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mutations }),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Sanity API feil: ${err}`)
  }
  return res.json()
}

const categories = [
  {
    _id: 'category-technology',
    _type: 'category',
    name: 'Teknologi',
    slug: { _type: 'slug', current: 'technology' },
    buttonText: 'BRUK TEKNOLOGIENE',
    order: 1,
  },
  {
    _id: 'category-projects',
    _type: 'category',
    name: 'Prosjekter',
    slug: { _type: 'slug', current: 'projects' },
    buttonText: 'KOM I GANG MED ET PROSJEKT',
    order: 2,
  },
  {
    _id: 'category-courses',
    _type: 'category',
    name: 'Kurs',
    slug: { _type: 'slug', current: 'courses' },
    buttonText: 'DIGITALE KURS',
    order: 3,
  },
  {
    _id: 'category-gallery',
    _type: 'category',
    name: 'Galleri',
    slug: { _type: 'slug', current: 'gallery' },
    buttonText: 'PROSJEKTER',
    order: 4,
  },
  {
    _id: 'category-about',
    _type: 'category',
    name: 'Om oss',
    slug: { _type: 'slug', current: 'about' },
    buttonText: 'OM OSS',
    order: 5,
  },
]

async function seed() {
  console.log('Seeder kategorier i Sanity...\n')

  for (const cat of categories) {
    const existing = await getDocument(cat._id)
    if (existing) {
      console.log(`Hopper over "${cat.name}" – finnes allerede.`)
      continue
    }
    await mutate([{ createOrReplace: cat }])
    console.log(`Opprettet: ${cat.name}`)
  }

  console.log('\nFerdig!')
}

seed().catch((err) => {
  console.error('Feil:', err.message)
  process.exit(1)
})
