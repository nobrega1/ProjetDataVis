import bb from 'billboard.js'
import "nes.css/css/nes.min.css";
import dataTab from '../../../data/TypeJeu/dataShort.json'


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
        max: 300

      },
      level: {
        depth: 6
      },
      direction: {
        clockwise: false
      }
    },
    bindto: document.getElementById(graphId)
  })
}


