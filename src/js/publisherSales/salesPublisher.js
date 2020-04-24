// prendre l'"input" avec l'"id" "year-input"
const input = document.getElementById('year-input')

// quand la valeur change nous souhaitons faire quelque chose
const onYearChange = year => {
  // pour l'instant nous ne faisons qu'envoyer l'année à la console
  console.log(year)
}

// écouter les changements sur la valeur de "input"
input.addEventListener('input', e => onYearChange(Number(e.target.value)))

const data = require('./dataGlobalSales.json')
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
  annees.map(annee => ({ annee, vente: sommeParEditeurEtAnnee(editeur, annee) }))
console.log(
  editeurs.map(chaqueAnneePourUnEditeur)
)