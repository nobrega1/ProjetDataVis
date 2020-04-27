const fs = require('fs')
const path = require('path')

const chemin = path.resolve(__dirname, 'Video_Games_Per_Year.csv')
const csv = fs.readFileSync(chemin, 'utf-8')

const splitLine = line => line.split(',').map(d => d.trim())
const [first, ...lines] = csv.split('\n').map(splitLine)

const head = [...first, 'year']

const data = lines
  .filter(d => d.length !== 1)
  .map(d =>
    d.length === head.length
      ? d
      : [d[0], `${d[1]}, ${d[2]}`, d[3], d[4], d[5], d[6]]
  )
  .map(line => head.reduce((result, key, index) => ({ ...result, [key]: line[index] }), {}))
  .map(d => ({
    ...d,
    metascore: Number(d.metascore),
    userscore: Number(d.userscore),
    year: Number(d.year)
  }))
  .filter(d => d.metascore)

console.log(
  JSON.stringify(data)
)