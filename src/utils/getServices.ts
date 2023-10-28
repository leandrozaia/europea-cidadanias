import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getServices() {
  const query = `
    query MyQuery {
      services {
        iconSvg
        namePt
        nameEn
        nameEs
        nameIt
        descriptionPt
        descriptionEn
        descriptionEs
        descriptionIt
        phone
      }
    }  
  `

  return fetchHygraphQuery(query)
}