const fs = require('fs');
const path = require('path');
const dir = path.relative(__dirname, 'src/datasSets/Video_Game_Sales_as_of_Jan_2017.csv');

const file = fs.readFileSync(dir, 'utf-8');


console.log(
    file.split(`\n`)
      .map(line => line.split(','))
      .map(cells => ({
        year: cells[0],
        genre: cells[4]
      }))
  )