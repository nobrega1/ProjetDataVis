const R = require('ramda')
const globalSales = require('../sources/globalSales/data.json')

const editeurs = R.uniq(globalSales.map(d => d.publisher))
const annees = R.uniq(globalSales.map(d => d.year)).sort()

const sommeParEditeurEtAnnee = (editeur, annee) =>
  R.sum(
    globalSales
      .filter(d => d.publisher === editeur && d.year === annee)
      .map(d => d.sales)
  )
const chaqueAnneePourUnEditeur = editeur =>
  annees.map(annee => ({editeur, annee, vente: sommeParEditeurEtAnnee(editeur, annee) }))

const data = editeurs.map(chaqueAnneePourUnEditeur)

console.log(
  JSON.stringify(data)
)