import bb from 'billboard.js'
import data from '../../../data/ConsoleParAn/data.json'

export default graphId => {
    bb.generate({
        data: {
            json: {
                ['console']: data.map(d => d['console']),
                ['nombre sortie']: data.map(d => d['nombreDeSorties']),
            },
            type: "donut",  
        },
        donut: {
            title: "Console Games Releases Per Year"
          },
        bindto: "#donutConsole"
        })
      }
      