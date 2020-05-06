
const R = require('ramda')
const jeux = require('../sources/jeux2017/data.json')

const years = R.uniq(jeux.map(d => d.year_of_release))
  .filter(year => year !== 2017 && year !== null && year > 1995) 
  .sort()
const genres = R.uniq(jeux.map(d => d.genre))
  .sort()

const countByYearAndGenre = (year, genre) =>
  jeux.filter(d => d.year_of_release === year && d.genre === genre).length

const byYearAndGenre = R.flatten(
  years.map(year =>
    genres.map(genre => ({ year, genre, count: countByYearAndGenre(year, genre) })) ) 
)

const head = ['x', ...genres]

const lines = years.map(year =>
  ([String(year), ...genres.map(genre => countByYearAndGenre(year, genre))])
)

console.log(
  JSON.stringify([
    head,
    ...lines,
  ])
)
