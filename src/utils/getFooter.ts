import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getFooter() {
  const query = `
    query MyQuery {
      footer(where: {title: "Footer"}) {
        iframe
        address
        phone
        email
        facebookUrl
        instagramUrl
        linkedInUrl
        whatsAppNumber
      }
    }  
  `

  return fetchHygraphQuery(query)
}