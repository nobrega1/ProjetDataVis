const fs = require('fs');

const file = fs.readFileSync('../datasSets/Video_Game_Sales_as_of_Jan_2017.csv', 'utf-8');

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

      }))
  )