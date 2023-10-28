import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getPosts() {
  const query = `
    query MyQuery {
      posts {
        titlePt
        titleEn
        titleEs
        titleIt
        bodyPt {
          raw
        }
        bodyEn {
          raw
        }
        bodyEs {
          raw
        }
        bodyIt {
          raw
        }
        authorName
        authorPicture {
          url
        }
        coverPhoto {
          url
        }
        date
        slug
        tag
      }
    }  
  `

  return fetchHygraphQuery(query)
}