const fs = require('fs');
const path = require('path');
const chemin = path.relative(__dirname, 'src/datasSets/Video_Game_Sales_as_of_Jan_2017.csv');

const file = fs.readFileSync(chemin, 'utf-8');

/* console.log(
    file.split(`\n`)
      .map(line => line.split(','))
  )
 */
console.log(
    file.split(`\n`)
      .map(line => line.split(','))
      .map(cells => ({
        year: cells[0],
        editeur: cells[1],
        globalSells: cells[8]

      }))
  )