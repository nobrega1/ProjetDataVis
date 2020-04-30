const R = require('ramda')
const scoresPerConsole = require('../sources/scoresPerGame/data.json')

const consoles = R.uniq(scoresPerConsole.map(d => d.console))
const years = R.uniq(scoresPerConsole.map(d => d.year)).sort()


const data = R.flatten(
    years.map(year =>
      consoles.map(c => ({ year, 'console': c, nombreDeSorties: scoresPerConsole.filter(d => d.year === year && d['console'] === c).length }))
    )
  )

console.log(
    JSON.stringify(data)
)
