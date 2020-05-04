
const R = require('ramda')
const gameType = require('../sources/TypeJeu/dataType.json')

const years = R.uniq(gameType.map(d => d.year)).sort().filter(year => year !== 2017 && year !== null) 
const genres = R.uniq(gameType.map(d => d.Genre)).filter(genre => typeof genre === 'string' && genre.match(/\D/) && genre.length>3) 



const getByYearAndGenre = (year, genre) => gameType.filter(d => d.year === year && d.Genre === genre)
const countByYearAndGenre = (year, genre) =>  gameType.filter(d => d.year === year && d.Genre === genre).length




const count = R.flatten(
  years.map(year =>
    genres.map(genre => ({ year, genre, count: countByYearAndGenre(year, genre) })) ) 
)
 console.log(JSON.stringify(count))
