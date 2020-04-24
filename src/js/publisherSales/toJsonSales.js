const fs = require('fs');
const data = require('../../datasSets/dataGlobalSales.json')
const R = require('ramda')
const editeurs = R.uniq(data.map(d => d.editeur))
const annees = R.uniq(data.map(d => d.year)).sort()
const sommeParEditeurEtAnnee = (editeur, annee) =>
  R.sum(
    data
      .filter(d => d.editeur === editeur && d.year === annee)
      .map(d => d.globalSells)
  )
const chaqueAnneePourUnEditeur = editeur =>
  annees.map(annee => ({editeur, annee, vente: sommeParEditeurEtAnnee(editeur, annee) }))
console.log(
  JSON.stringify(editeurs.map(chaqueAnneePourUnEditeur))
)

/* console.log(
  JSON.stringify(
    file.split(`\n`)
      .map(line => line.split(';'))
      .map(cells => ({
        year: cells[0],
        editeur: cells[1],
        globalSells: cells[2]*1000000

      }))
  )
) */