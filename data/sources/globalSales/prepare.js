const fs = require('fs')
const path = require('path')

const chemin = path.resolve(__dirname, 'Video_Game_Sales_as_of_Jan_2017.csv')
const csv = fs.readFileSync(chemin, 'utf-8')

const fixLine = line => line.split(';')
  .filter((d, i) => i !== 3)
  .map(d => d.trim())
const [head, ...lines] = csv.split('\n').map(fixLine)

const data = lines
  .map(line => head.reduce((result, key, index) => ({ ...result, [key]: line[index] }), {}))
  .map(d => ({
    publisher: d.Publisher,
    year: Number(d.Year_of_Release),
    sales: Number(d.Global_Sales),
  }))
  .filter(d => d.sales && d.sales !== 0)

console.log(
  JSON.stringify(data)
)