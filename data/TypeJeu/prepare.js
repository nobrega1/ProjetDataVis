
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

    const chaqueAnneePourUnGenre = genre =>
    years.map(year => ({genre, year}))

 let Action = data.filter(d => d.genre === "Action")
 let Sport = data.filter(d => d.genre === "Sport")
 let Plateform = data.filter(d => d.genre === "Plateform")
 let Racing = data.filter(d => d.genre === "Racing")
 let RolePlaying = data.filter(d => d.genre === "Role-playing")
 let Puzzle = data.filter(d => d.genre === "Puzzle") 
 let Shooter = data.filter(d => d.genre === "Shooter")
 let Simulation = data.filter(d => d.genre === "Simulation")  
 let Fighting = data.filter(d => d.genre === "Fighting")
 let Adventure = data.filter(d => d.genre === "Adventure")
 
 let bigTab = [
     {Action: Action}, 
     {Sport},
     {Plateform}, 
     {Racing}, 
     {RolePlaying}, 
     {Puzzle},
     {Shooter},
     {Simulation},
     {Fighting},
     {Adventure}
 ]


console.log(JSON.stringify(bigTab))
