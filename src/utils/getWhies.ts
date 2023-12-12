import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getWhies() {
  const query = `
    query MyQuery {
      whies {
        titlePt
        titleEn
        titleEs
        titleIt
      }
    }   
  `

  return fetchHygraphQuery(query)
}