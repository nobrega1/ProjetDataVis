const fs = require('fs');
const chemin = '../../datasSets/Video_Game_Sales_as_of_Jan_2017.csv';

const file = fs.readFileSync(chemin, 'utf-8');

/* console.log(
    file.split(`\n`)
      .map(line => line.split(','))
  )
 */
console.log(
  JSON.stringify(
    file.split(`\n`)
      .map(line => line.split(','))
      .map(cells => ({
        year: cells[2],
        editeur: cells[4],
        globalSells: cells[9]*1000000

      }))
  )
)