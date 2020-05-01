import bb from 'billboard.js'
import "nes.css/css/nes.min.css";
/* import data from '../../../data/typeJeu/dataClean.json'
 */
export default graphId => {
  bb.generate({
    data: {
      x: "x",
      columns: [
        ["x", "Data A", "Data B", "Data C", "Data D", "Data E"],
        ["data1", 330, 350, 200, 380, 150],
        ["data2", 130, 100, 30, 200, 80],
        ["data3", 230, 153, 85, 300, 250]
      ],
      type: "radar",
      labels: true
    },
    radar: {
      axis: {
        max: 400
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
