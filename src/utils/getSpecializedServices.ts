import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getSpecializedServices() {
  const query = `
    query MyQuery {
      specializedServices {
        namePt
        nameEn
        nameEs
        nameIt
        descriptionPt
        descriptionEn
        descriptionEs
        descriptionIt
        phone
        image {
          url
        }
      }
    }  
  `

  return fetchHygraphQuery(query)
}