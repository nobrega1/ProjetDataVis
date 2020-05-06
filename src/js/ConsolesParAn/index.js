import bb from 'billboard.js'
import data from '../../../data/ConsoleParAn/data.json'

export default graphId => {
    let mesdonnes = data.filter(d => d.year === 2000).filter(d => d.nombreDeSorties != 0);
    let graph = bb.generate({
        data: {
            columns:mesdonnes.map(d => ([d['console'], d.nombreDeSorties])),
            type: "donut",  
        },
        bindto: document.getElementById(graphId)
        })
    
/*
        const changeYea= e => {
            mesdonnes =  data.filter(d => d.year === Number(e.target.value)).filter(d => d.nombreDeSorties != 0);
            chart.load({
                columns: [mesdonnes.map(d => ([d['console'], d.nombreDeSorties]))]
                });
        }   
*/
    let input= document.getElementById(`${graphId}-input`);
    input.addEventListener('input', e=> {
        graph.unload({
            ids: mesdonnes
        });
        input =  Number(e.target.value);
        let mesdonnes = data.filter(d => d.year === input).filter(d => d.nombreDeSorties != 0);
        graph.load({
            columns: mesdonnes.map(d => ([d['console'], d.nombreDeSorties]))
        })
    })    

    /*
    input.addEventListener('input', e => 
    changeYea(e)
    )*/
}
