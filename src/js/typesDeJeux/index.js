import bb from 'billboard.js'
import "nes.css/css/nes.min.css";
import data from '../../../data/TypeJeu/dataClean.json'
console.log(data);

export default graphId => {
  bb.generate({
    data: {
      x: "x",
      columns: [
        ["x", "Shooting", "Sports", "etc", "Data D", "Data E"],
        ["1997", 330, 350, 200, 380, 150],
        ["1998", 130, 100, 350, 200, 80],
        ["1998", 130, 100, 350, 200, 80],
        ["1998", 130, 100, 350, 200, 80],
        ["1998", 130, 100, 350, 200, 80],
        ["1998", 130, 100, 350, 200, 80],
        ["1999", 230, 153, 85, 300, 250]
      ],
      type: "radar",
      labels: true
    },
    radar: {
      axis: {
        max: 450

      },
      level: {
        depth: 4
      },
      direction: {
        clockwise: true
      }
    },
    bindto: document.getElementById(graphId)
  })
}
