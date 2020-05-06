import bb from 'billboard.js'
import "nes.css/css/nes.min.css";
import dataTab from '../../../data/TypeJeu/data.json'

let stringEntries=["x"]
dataTab.forEach(element => {
 stringEntries.push(Object.keys(element)[0])
});
console.log(dataTab);

export default graphId => {
  bb.generate({
    data: {
      x: "x",
      columns: dataTab,
  
      type: "radar",
      labels: true
    },
    radar: {
      axis: {
        max: 120

      },
      level: {
        depth: 6
      },
      direction: {
        clockwise: true
      }
    },
    bindto: document.getElementById(graphId)
  })
}
