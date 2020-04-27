const R = require('ramda')
const scoresPerGame = require('../sources/scoresPerGame/data.json')

const years = R.uniq(scoresPerGame.map(d => d.year))
    .filter(Boolean)
    .sort()

const countGamesPerYear = year => scoresPerGame.filter(d => d.year === year).length

const data = years.map(year => ({
    year,
    count: countGamesPerYear(year)
}))

console.log(
    JSON.stringify(data)
)
