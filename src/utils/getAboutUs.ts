import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getAboutUs() {
  const query = `
    query MyQuery {
      aboutUs(where: {title: "AboutUs"}) {
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