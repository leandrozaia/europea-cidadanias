import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getInternationalCareer() {
  const query = `
    query MyQuery {
      internationalCareer(where: {title: "InternationalCareer"}) {
        bodyEn {
          raw
        }
        bodyEs {
          raw
        }
        bodyIt {
          raw
        }
        bodyPt {
          raw
        }
        image {
          url
        }
      }
    }  
  `

  return fetchHygraphQuery(query)
}