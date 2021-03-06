import { select, scaleLinear, max, interpolateRound, lab } from 'd3'
import "nes.css/css/nes.min.css";
import data from '../../../data/performanceEditeurs/data.json'
const WIDTH = 1000
const HEIGHT = 500
const RECT_SPACE = HEIGHT / 10
const RECT_HEIGHT = RECT_SPACE * 0.8

const randomColor = () =>
  `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
  
//création des labels  
const getLabel = svg =>
  svg.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('font-size', 10)
  
const getRects = svg =>
  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('height', RECT_HEIGHT)
    .attr("fill-opacity", "0.35")
    .attr('fill', () => randomColor())
   


const onYearChange = (rects, display, year, label) => {

  display.text(year)
  const maxVentes = max(
    data
      .map(d => d.data.find(d => d.annee === year))
      .map(d => d.ventes)
  )
  const xScale = scaleLinear().domain([0, maxVentes]).range([0, WIDTH])
    rects
    .transition()
    .attr('y', d => d.data.find(d => d.annee === year).rang * RECT_SPACE)
    .attr('width', d => xScale(d.data.find(d => d.annee === year).ventes)) 

    label
   .transition()
   .text(d => d.editeur + " : " + (d.data.find(d => d.annee === year).ventes).toFixed(2))
   .attr("transform", d => `translate(${d.data.find(d => d.annee === year).ventes},${d.data.find(d => d.annee === year).rang * RECT_SPACE + 25})`)
   .attr("x", d => d.data.find(d => d.annee === year).ventes + 100)
   .attr("rang", d => d.data.find(d => d.annee === year).rang)

}

export default sectionId => {
  const svg = select(`#${sectionId}-graph`).append('svg')
    .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)
    
  const display = svg.append('text')
    .attr('x', WIDTH - 20)
    .attr('y', HEIGHT - 20)
    .attr('font-size', RECT_HEIGHT)
    .attr('text-anchor', 'end')

  const rects = getRects(svg)
  const label = getLabel(svg);
  onYearChange(rects, display, 2016, label)

  const input = document.getElementById(`${sectionId}-year-input`)
  input.addEventListener('input', e => 
  onYearChange(rects, display, Number(e.target.value), label))

}