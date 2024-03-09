import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getCitizenships() {
  const query = `
    query MyQuery {
      citizenships(first: 30) {
        ancor
        type
        labelPt
        labelEn
        labelEs
        labelIt
        headingPt
        headingEn
        headingEs
        headingIt
        descriptionPt
        descriptionEn
        descriptionEs
        descriptionIt
        image {
          url
        }
      }
    }  
  `

  return fetchHygraphQuery(query)
}