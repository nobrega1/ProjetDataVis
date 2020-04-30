const R = require('ramda')
const globalSales = require('../sources/globalSales/dataRepartitions.json')


const annees = R.uniq(globalSales.map(d => d.year)).sort().filter(annee => annee !== 2017 && annee !== null) 
console.log(annees)
const REGIONS = [
  "NA", "JP", "EU", "OTHERS"
]

const getResult = ((annee, region) => {

  let resultNA = R.sum(
    globalSales
      .filter(d => d.year === annee)
      .map(d => d.NA))

  let resultEU = R.sum(
    globalSales
      .filter(d => d.year === annee)
      .map(d => d.EU))

  let resultOTHERS = R.sum(
    globalSales
      .filter(d => d.year === annee)
      .map(d => d.OTHERS))

  let resultJP = R.sum(
    globalSales
      .filter(d => d.year === annee)
      .map(d => d.JP))

      let result = {
        annee: annee,
        regions: {
          NA: resultNA,
          JP: resultJP,
          EU: resultEU,
          OTHERS: resultOTHERS,
          sales: resultOTHERS + resultEU + resultJP + resultNA
        }
      }
      return result
})

let result = []
annees.forEach(annee => {
  result.push(getResult(annee, REGIONS))
});

console.log(JSON.stringify(result))