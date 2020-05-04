
const R = require('ramda')
const gameType = require('../sources/TypeJeu/dataType.json')

const years = R.uniq(gameType.map(d => d.year)).sort().filter(year => year !== 2017 && year !== null) 
const genres = R.uniq(gameType.map(d => d.Genre)).filter(genre => typeof genre === 'string' && genre.match(/\D/) && genre.length>3) 



/* const getByYearAndGenre = (year, genre) => gameType.filter(d => d.year === year && d.Genre === genre)
 */const countByYearAndGenre = (year, genre) =>  gameType.filter(d => d.year === year && d.Genre === genre).length



const forOneType = genre =>
  years.map(year => ({genre, year, count: countByYearAndGenre(year,genre) }))

const data = R.flatten(genres.map(forOneType))
    .filter(d => d.count !== 0)
    .map(genre => ({ genre, year: year.map(genre) }))

    //

    const findByYearAndGenre = (genre,data) => year => {
      const dataByGenreByYear = data.find(d => d.genre === genre)
      return {
        annee,
        genre: R.propOr(11, 'genre', dataByGenreByYear),
        count: R.propOr(11, 'count', dataByGenreByYear)
      }
    }
    
    const result = dataByGenreByYear
      .map(genre => ({ genre, data: years.map(findByYearAndGenre(genre,data)) }))




 console.log(JSON.stringify(data))
