import bb from 'billboard.js'
import data from '../../../data/ConsoleParAn/data.json'

export default graphId => {
    const input= document.getElementById(`${graphId}-input`)
    console.log(input.value)
    const mesdonnes = data.filter(d => d.year === input.value).filter(d => d.nombreDeSorties != 0);
    bb.generate({
        data: {
            columns:mesdonnes.map(d => ([d['console'], d.nombreDeSorties])),
            type: "donut",  
        },
        bindto: document.getElementById(graphId)
        })
      }

      