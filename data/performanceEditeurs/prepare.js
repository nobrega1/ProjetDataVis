const R = require('ramda')
const globalSales = require('../sources/globalSales/data.json')

const editeurs = R.uniq(globalSales.map(d => d.publisher))
const annees = R.uniq(globalSales.map(d => d.year)).sort().filter(annee => annee !== 2017)

const sommeParEditeurEtAnnee = (editeur, annee) =>
  R.sum(
    globalSales
      .filter(d => d.publisher === editeur && d.year === annee)
      .map(d => d.sales)
  )

const chaqueAnneePourUnEditeur = editeur =>
  annees.map(annee => ({editeur, annee, vente: sommeParEditeurEtAnnee(editeur, annee) }))

const data = R.flatten(editeurs.map(chaqueAnneePourUnEditeur))
    .filter(d => d.vente !== 0)

const dixPremiersParAnnee = annees
  .map(annee => {
    const toutesLesVentesDeCetteAnnee = data.filter(d => d.annee === annee)
    const ordreParVentes = toutesLesVentesDeCetteAnnee.sort((a, b) => a.vente > b.vente ? -1 : 1)
    const dixPremiers = R.take(10, ordreParVentes)
    const dixPremiersAvecRang = dixPremiers.map((d, i) => ({ ...d, rang: i }))
    return { annee, parEditeur: dixPremiersAvecRang.map(R.omit(['annee'])) }
  })

const editeursDansDixPremiersParAnnee = R.uniq(
  R.flatten(
  dixPremiersParAnnee.map(d => d.parEditeur)
  ).map(d => d.editeur)
)

const chercherValeursParAnneeEtEditeur = editeur => annee => {
  const { parEditeur } = dixPremiersParAnnee.find(d => d.annee === annee)
  const donneesPourEditeurPourCetteAnnee = parEditeur.find(d => d.editeur === editeur)
  return {
    annee,
    rang: R.propOr(11, 'rang', donneesPourEditeurPourCetteAnnee),
    ventes: R.propOr(0, 'vente', donneesPourEditeurPourCetteAnnee)
  }
}

const result = editeursDansDixPremiersParAnnee
  .map(editeur => ({ editeur, data: annees.map(chercherValeursParAnneeEtEditeur(editeur)) }))

console.log(JSON.stringify(result))