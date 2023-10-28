import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getPostBySlug(slug: string) {
  const query = `
    query MyQuery {
      post(where: {slug: "${slug}"}) {
        slug
        tag
        date
        authorName
        authorPicture {
          url
        }
        coverPhoto {
          url
        }
        titlePt
        titleEn
        titleEs
        titleIt
        bodyPt {
          raw
        }
        bodyIt {
          raw
        }
        bodyEs {
          raw
        }
        bodyEn {
          raw
        }
        related {
          slug
          coverPhoto {
            url
          }
          tag
          authorName
          authorPicture {
            url
          }
          titlePt
          titleEn
          titleEs
          titleIt
        }
      }
    }  
  `

  return fetchHygraphQuery(query)
}