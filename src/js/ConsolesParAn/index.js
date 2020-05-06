import bb from 'billboard.js'
import data from '../../../data/ConsoleParAn/data.json'
let idsAEnlever
export default graphId => {
    let mesdonnes = data.filter(d => d.year === 2000).filter(d => d.nombreDeSorties != 0);
    idsAEnlever = mesdonnes.map(d => d['console'])
    let graph = bb.generate({
        data: {
            columns:mesdonnes.map(d => ([d['console'], d.nombreDeSorties])),
            type: "donut",  
        },
        bindto: document.getElementById(graphId)
        })
    let input= document.getElementById(`${graphId}-input`);
    input.addEventListener('input', e=> {
        input =  Number(e.target.value);
        let mesdonnes = data.filter(d => d.year === input).filter(d => d.nombreDeSorties != 0);
        graph.unload({
            ids: idsAEnlever,
            done: () => {
                idsAEnlever = mesdonnes.map(d => d['console'])
                graph.load({
                    json: mesdonnes.reduce((r, d) => ({ ...r, [d['console']]: [d.nombreDeSorties]}), {}),
                })
            }
        });
    })    
}
