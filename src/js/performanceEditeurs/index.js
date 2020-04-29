import { select, scaleLinear, max, interpolateRound, lab } from 'd3'
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
    .attr('font-family', 'sans-serif')
    .attr('font-size', 10)
  
const getRects = svg =>
  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('height', RECT_HEIGHT)
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

    //append des labels, je me suis basé sur l'exemple envoyé sur slack mais très dur à comprendre
    label
   .transition()
   .text(d => d.editeur)
   .attr("transform", d => `translate(${d.data.find(d => d.annee === year).ventes},${d.data.find(d => d.annee === year).rang * RECT_SPACE + 25})`)
   .attr("x", d => d.data.find(d => d.annee === year).ventes + 100)
   .attr("y", 0)
   .attr("dy", "-0.25em")

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
  //ajout des labels lors du changement sur le slider
  input.addEventListener('input', e => onYearChange(rects, display, Number(e.target.value), label))

}