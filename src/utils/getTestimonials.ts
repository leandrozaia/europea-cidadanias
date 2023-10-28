import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getTestimonials() {
  const query = `
    query MyQuery {
      testimonials {
        name
        descriptionPt
        descriptionEn
        descriptionEs
        descriptionIt
        stars
        profilePicture {
          url
        }
      }
    }  
  `

  return fetchHygraphQuery(query)
}