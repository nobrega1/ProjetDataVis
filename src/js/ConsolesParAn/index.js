import bb from 'billboard.js'
import data from '../../../data/ConsoleParAn/data.json'

export default graphId => {
    const input = document.getElementById(`${graphId}-year-input`)
    bb.generate({
        data: {
            columns:[
                [data.filter(d => d.year === year).map(d => d['console']), data.filter(d => d.year === year).map(d => d.nombreDeSorties)],
            ],
            type: "donut",  
        },
        donut: {
            title: "Console Games Releases Per Year"
          },
        bindto: document.getElementById(graphId)
        })
      }
      