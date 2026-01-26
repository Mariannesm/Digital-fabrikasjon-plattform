import { getCliClient } from 'sanity/cli'

const client = getCliClient()

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
]

async function seedCategories() {
  console.log('Seeding categories...')

  for (const category of categories) {
    const existing = await client.getDocument(category._id)

    if (existing) {
      console.log(`Category "${category.name}" already exists, skipping.`)
      continue
    }

    await client.createOrReplace(category)
    console.log(`Created category: ${category.name}`)
  }

  console.log('Done seeding categories!')
}

seedCategories().catch(console.error)
