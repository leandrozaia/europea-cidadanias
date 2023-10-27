import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getBanner() {
  const query = `
    query MyQuery {
      banner(where: {title: "Banner"}) {
        descriptionPt
        descriptionEn
        descriptionEs
        descriptionIt
        headingPt
        headingEn
        headingEs
        headingIt
        video {
          url
        }
      }
    }    
  `

  return fetchHygraphQuery(query)
}