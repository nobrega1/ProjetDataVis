import data from '../../datasSets/dataGlobalSales.json';
import { select } from 'd3'
import { WIDTH, HEIGHT, MARGIN_LEFT, MARGIN_TOP } from './configSales'

const div = select('#graph')

console.log(div.html());

// récupération de l'élément slider
const input = document.getElementById('year-input')


//écoute des changements du slider
input.addEventListener('input', e => onYearChange(Number(e.target.value)))

const svg = div.append('svg').attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const bubblesGroup = svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT}, ${MARGIN_TOP})`)

  const bubbles = bubblesGroup.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('fill', 'black')
  .attr('fill-opacity', 0.4)
  .attr('stroke', 'black')

  const onYearChange = year => {
    const index = year - 1800
    bubbles
      .attr('cx', d => xScale(d.gdp[index]))
      .attr('cy', d => yScale(d.lex[index]))
      .attr('r', d => rScale(d.pop[index]))
  }