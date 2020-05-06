const fs = require('fs')

const csv = fs.readFileSync(__dirname + '/Video_Game_Sales_as_of_Jan_2017.csv', 'utf-8')

const separateLine = line => line.split('\t').map(d => d.trim())

const [head, ...lines] = csv.split('\n').map(separateLine)

const keys = head.filter(d => d !== '').map(d => d.toLowerCase())

const result = lines
  .map(line =>
    keys.reduce((r, key, index) => ({ ...r, [key]: line[index] }), {})
  )
  .map(d => ({
    ...d,
    year_of_release: Number(d.year_of_release),
    na_sales: Number(d.na_sales),
    eu_sales: Number(d.eu_sales),
    jp_sales: Number(d.jp_sales),
    other_sales: Number(d.other_sales),
    global_sales: Number(d.global_sales),
  }))
  .filter(d => d.name !== '')

console.log(
  JSON.stringify(result)
)