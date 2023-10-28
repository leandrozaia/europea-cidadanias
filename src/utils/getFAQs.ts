import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getFAQs() {
  const query = `
    query MyQuery {
      faqs {
        questionPt
        questionEn
        questionEs
        questionIt
        answerPt
        answerEn
        answerEs
        answerIt
      }
    }  
  `

  return fetchHygraphQuery(query)
}