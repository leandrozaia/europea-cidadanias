import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getMembers() {
  const query = `
    query MyQuery {
      members {
        profilePicture {
          url
        }
        name
        captionPt
        captionEn
        captionEs
        captionIt
        descriptionPt
        descriptionEn
        descriptionEs
        descriptionIt
        facebookUrl
        instagramUrl
        linkedInUrl
        whatsAppNumber
      }
    }  
  `

  return fetchHygraphQuery(query)
}