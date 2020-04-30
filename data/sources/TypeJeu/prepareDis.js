const fs = require('fs')
const path = require('path')

const chemin = path.resolve(__dirname, 'Video_Game_Sales_as_of_Jan_2017FULL.csv')
const csv = fs.readFileSync(chemin, 'utf-8')

const fixLine = line => line.split(',')
  .map(d => d.trim())
const [head, ...lines] = csv.split('\n').map(fixLine)

const data = lines
  .map(line => head.reduce((result, key, index) => ({ ...result, [key]: line[index] }), {}))
  .map(d => ({
    year: Number(d.Year_of_Release),
    Genre: d.Genre,
  }))

  
console.log(
  JSON.stringify(data)
)