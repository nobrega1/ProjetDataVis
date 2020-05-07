import bb from 'billboard.js'
import data from '../../../data/ConsoleParAn/data.json'


export default graphId => {
    let mesdonnes = data.filter(d => d.year >= 2010).filter(d=>d.nombreDeSorties != 0);
    console.log(mesdonnes)
    const annees = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
    const consoles = ['PC', 'XBOX','3DS', 'PS3','X360','PS4','XONE','Switch']
    const trouverParAnneeEtConsole = (annee, konsole) => {
      const existe = data.find(d => d['console'] === konsole && d.year === annee)
      return existe ? existe.nombreDeSorties : 0
    }
    const resultat = consoles.map(konsole => ([konsole, ...annees.map(annee => trouverParAnneeEtConsole(annee, konsole))]))
    let graph = bb.generate({
        data: {
            x: "x",
            columns:[
              ["x","2010","2011","2012","2013","2014","2015","2016","2017","2018"],
              ...resultat,
            ],
            types: {
              data1: "area"
            }
          },
          bindto: document.getElementById(graphId)
        });
}    
