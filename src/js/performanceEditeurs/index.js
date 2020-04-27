import { select, scaleLinear, max } from 'd3'
import datas from '../../../data/performanceEditeurs/data.json'
const WIDTH = 1000
const HEIGHT = WIDTH / 4
const MARGIN = WIDTH / 200
const svg = select(`#perf-editeurs-graph`)
      .append('svg')
      .attr('width', WIDTH)
      .attr('height', HEIGHT)

const onYearChange = (sectionId, year) => {
  getData(sectionId, year)
}

const getData = (sectionId, yearChosen) => {
  let dataToShow = [];
  let count = 0;
    datas.forEach(element => {
    element.forEach(entity => {
      if(entity.annee == yearChosen && entity.vente > 0) {
        entity.vente*1000000
        dataToShow.push(entity)
        count++;
      }
    });
  });
  dataToShow.sort(function(a, b){return b.vente - a.vente})
    generateDom(dataToShow.slice(0, 10))
}

let generateDom = (DATA) => {
  console.log(DATA[0].vente)
  const heightScale = scaleLinear()
    .domain([0, max(DATA[0].vente)])
    .range([0, HEIGHT])
  const BAR_WIDTH = WIDTH / DATA.length

  svg.empty()
  const bars = svg.selectAll('rect')
  .data(DATA)
  .enter()
  .append('rect')
  .attr('x', (d, i) =>  i * BAR_WIDTH)
  .attr('width', BAR_WIDTH - MARGIN)
  .attr('y',  d => HEIGHT - heightScale(d)) //pas compris
  .attr('height', heightScale)

  bars.data(DATA)
  .transition()
  .duration(1000)
  .attr('y', d => HEIGHT - heightScale(d)) //pas compris
  
  .attr('height', heightScale)
  
}


export default sectionId => {
  onYearChange(sectionId, 2017)
  const input = document.getElementById(`${sectionId}-year-input`)
  input.addEventListener('input', e => onYearChange(sectionId, Number(e.target.value)))
}