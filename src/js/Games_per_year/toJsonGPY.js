const fs = require('fs');
const path = require('path');
const chemin = path.relative(__dirname, '../../datasSets/Video_Games_Per_Year.csv', 'utf-8');
const file = fs.readFileSync(chemin, 'utf-8');


const date = file.split(`\n`)
    .map(line => line.split(','))
    .map(cells => ({
    date : cells[5]
    }));
 console.log(date);

