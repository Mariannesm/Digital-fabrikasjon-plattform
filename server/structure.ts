import type { StructureBuilder, StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S, context) => {
  const { documentStore } = context

  // Fetch all organizations to build the structure dynamically
  const orgsQuery = `*[_type == "organization"] | order(name asc) { _id, name, slug }`

  return S.list()
    .title('Innhold')
    .items([
      // --- Per-organization section ---
      S.listItem()
        .title('Organisasjoner')
        .icon(() => '🏢')
        .child(
          S.documentTypeList('organization')
            .title('Velg organisasjon')
            .child((orgId) =>
              S.list()
                .title('Innhold')
                .items([
                  S.listItem()
                    .title('Sider')
                    .icon(() => '📄')
                    .child(
                      S.documentList()
                        .title('Sider')
                        .filter('_type == "page" && organization._ref == $orgId')
                        .params({ orgId })
                        .defaultOrdering([{ field: 'order', direction: 'asc' }])
                    ),

                  S.listItem()
                    .title('Kurs')
                    .icon(() => '📚')
                    .child(
                      S.documentList()
                        .title('Kurs')
                        .filter('_type == "course" && organization._ref == $orgId')
                        .params({ orgId })
                        .defaultOrdering([{ field: 'order', direction: 'asc' }])
                    ),

                  S.listItem()
                    .title('Prosjekter')
                    .icon(() => '🛠️')
                    .child(
                      S.documentList()
                        .title('Prosjekter')
                        .filter('_type == "project" && organization._ref == $orgId')
                        .params({ orgId })
                        .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
                    ),
                ])
            )
        ),

      S.divider(),

      // --- Global / admin section ---
      S.listItem()
        .title('Kategorier')
        .icon(() => '🏷️')
        .child(S.documentTypeList('category').title('Kategorier')),

      S.divider(),

      S.listItem()
        .title('Alle organisasjoner')
        .icon(() => '⚙️')
        .child(S.documentTypeList('organization').title('Organisasjoner')),
    ])
}
