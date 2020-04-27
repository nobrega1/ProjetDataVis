import bb from 'billboard.js'
import data from '../../../data/jeuxParAn/data.json'

export default graphId => {
  bb.generate({
    data: {
      json: {
        ['Nombre de jeux publiés']: data.map(({ count }) => count),
      },
      type: 'bar',
    },
    axis: {
      x: {
        type: 'category',
        categories: data.map(({ year }) => year),
      }
    },
    bindto: document.getElementById(graphId)
  })
}
