const R = require('ramda')
const gameType = require('../sources/TypeJeu/dataType.json')


const annees = R.uniq(gameType.map(d => d.year)).sort().filter(annee => annee !== 2017 && annee !== null) 
const genre = R.uniq(gameType.map(d => d.Genre))

const startingValue = []

//compter les genre de jeu
const countGameType = (res, d) => {
  const exist = res.find(({ genre }) => name === d.Genre)
  if (!exist) {
    return [
      ...res,
      { genre: d.Genre, count: 1 },
    ]
  }
  return [
    ...res.filter(({ genre }) => genre !== d.Genre),
    { ...exist, count: exist.count + 1 },
  ]
}
/* const resultat = data.reduce(countGameType, startingValue)
 */
console.log(JSON.stringify(genre))
const getResult = ((annee, genre) => {

  let resultSports = R.countGameType(
    gameType
      .filter(d => d.year === annee)
      .map(d => d.genre === "Sports"))


  
      let result = {
        annee: annee,
        genres: {
          Sports: resultSports,
          /* Platform: resultPlatform,
          Racing: resultRacing,
          Roleplaying: resultRoleplaying,
          Puzzle: resultPuzzle,
          Misc: resultMisc,
          Shooter: resultShooter,
          Simulation: resultSimulation,
          Action: resultAction,
          Fighting: resultFighting,
          Adventure: resultAdventure,
          Strategy: resultStrategy */

        }
      }
      return result
})

let result = []
annees.forEach(annee => {
  result.push(getResult(annee, genre))
});

console.log(JSON.stringify(result))