import bb from 'billboard.js'
import data from '../../../data/ConsoleParAn/data.json'


export default graphId => {
   // let mesdonnes = data.filter(d => d.year <= 2010).filter(d => d['console'] == "PC" || d['console'] == "PS2" ||d['console'] == "XBOX" || d['console'] == "GBA" || d['console'] == "PSP" || d['console'] == "WII" || d['console'] == "PS3" || d['console'] == "X360" );
    const annees = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010]
    const consoles = ['PC', 'XBOX','GBA', 'PS2','WII', 'PS3','X360']
    const trouverParAnneeEtConsole = (annee, konsole) => {
      const existe = data.find(d => d['console'] === konsole && d.year === annee)
      return existe ? existe.nombreDeSorties : 0
    }
    const resultat = consoles.map(konsole => ([konsole, ...annees.map(annee => trouverParAnneeEtConsole(annee, konsole))]))
    let graph = bb.generate({
        data: {
            x: "x",
            columns:[
              ["x","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010"],
              ...resultat,
            ],
            types: {
              data1: "area"
            }
          },
          bindto: document.getElementById(graphId)
        });
}    
