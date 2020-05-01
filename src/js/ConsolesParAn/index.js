import bb from 'billboard.js'
import data from '../../../data/ConsoleParAn/data.json'

export default graphId => {
    bb.generate({
        data: {
<<<<<<< HEAD
            columns:[
                [data.filter(d => d.year === input).map(d => d['console']), data.filter(d => d.year === input).map(d => d.nombreDeSorties)],
            ],
=======
            json: {
                ['console']: data.map(d => d['console']),
                ['nombre sortie']: data.map(d => d['nombreDeSorties']),
            },
>>>>>>> parent of 6066fd1... uptade
            type: "donut",  
        },
        donut: {
            title: "Console Games Releases Per Year"
          },
        bindto: "#donutConsole"
        })
      }
      