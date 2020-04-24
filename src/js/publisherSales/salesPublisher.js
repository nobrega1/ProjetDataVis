import { select, scaleLinear, max } from 'd3'
import * as d3 from 'd3'
import {yearDisplay} from './element.js'
const input = document.getElementById('year-input')
const datas = require('../../datasSets/globalSales_def.json')
const onYearChange = year => {
  getData(year)
}

input.addEventListener('input', e => onYearChange(Number(e.target.value)))

const getData = (yearChosen) => {
  let dataToShow = [];
  datas.forEach(element => {
    element.forEach(entity => {
      if(entity.annee == yearChosen && entity.vente > 0) {
        dataToShow.push(entity)
      }
    });
  });

  generateDom(dataToShow)
}

let generateDom = (DATA) => {

  const WIDTH = 1000
  const HEIGHT = 500
  const MARGIN = 5
  const MARGIN_BOTTOM = HEIGHT / 10
  
    // l'échelle de couleur
  const fillScale = scaleLinear()
    .domain([0, max(DATA)])
    .range(['white', 'indianred'])

  $('#graph').empty()
  const svg = select('#graph')
    .append('svg')
    .attr('width', WIDTH)
    .attr('height', HEIGHT)
  
  const BAR_WIDTH = WIDTH / DATA.length
  const yScale = scaleLinear()
    .domain([0, max(DATA, d => d.vente)])
    .range([HEIGHT, 0])
  
  svg.selectAll('rect')
    .data(DATA)
    .enter()
    .append('rect')
    .attr('x', (d, i) =>  i * BAR_WIDTH)
    .attr('width', BAR_WIDTH - MARGIN)
    .attr('y', d => yScale(d.vente))
    .attr('height', d => HEIGHT - yScale(d.vente))
    .attr('fill', 'pink')

    svg.selectAll('text')
    .data(DATA)
    .enter()
    .append('text')
    .attr('x', (d, i) => i * BAR_WIDTH + BAR_WIDTH / 2)
    .attr('y', HEIGHT - MARGIN_BOTTOM + 20)
    .attr()
    .attr('text-anchor', 'middle')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 10)
    .text(d => d.editeur)
  

    yearDisplay.text(DATA[0].annee)
}