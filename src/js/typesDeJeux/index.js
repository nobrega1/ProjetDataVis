import bb from 'billboard.js'
import "nes.css/css/nes.min.css";
import dataTab from '../../../data/TypeJeu/dataClean.json'

let stringEntries=["x"]
dataTab.forEach(element => {
 stringEntries.push(Object.keys(element)[0])
});
console.log(stringEntries);
/* data.find(d => d.annee === 2016).regions.NA
 */
export default graphId => {
  bb.generate({
    data: {
      x: "x",
      columns: [
        stringEntries,
        
        ["2", 130, 100, 350, 200, 80],
        ["3", 130, 100, 350, 200, 80],
        ["4", 130, 100, 350, 200, 80],
        ["5", 130, 100, 350, 200, 80],
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
        depth: 6
      },
      direction: {
        clockwise: true
      }
    },
    bindto: document.getElementById(graphId)
  })
}
