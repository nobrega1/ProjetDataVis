import bb from 'billboard.js'
import data from '../../../data/ConsoleParAn/data.json'


export default graphId => {
    let mesdonnes = data.filter(d => d.year <= 2010).filter(d => d['console'] == "PC" || d['console'] == "PS2" ||d['console'] == "XBOX" || d['console'] == "GBA" || d['console'] == "PSP" || d['console'] == "WII" || d['console'] == "PS3" || d['console'] == "X360" );
    let graph = bb.generate({
        data: {
            x: "x",
            columns: mesdonnes.map(d => ([d['console'], d.nombreDeSorties || 0 ])),
            types: {
              data1: "area-line-range"
            }
          },
          axis: {
            x: {
              type: "date",
              tick: {
                format: mesdonnes.map(d=>d.year)
              }
            }
          },
          bindto: document.getElementById(graphId)
        });
}    

