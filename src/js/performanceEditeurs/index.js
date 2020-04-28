import { select, scaleLinear, max } from 'd3'
import data from '../../../data/performanceEditeurs/data.json'
const WIDTH = 1000
const HEIGHT = 500
const RECT_SPACE = HEIGHT / 10
const RECT_HEIGHT = RECT_SPACE * 0.8

const randomColor = () =>
  `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`

const getRects = svg =>
  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('height', RECT_HEIGHT)
    .attr('fill', () => randomColor())

const onYearChange = (rects, display, year) => {

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

  onYearChange(rects, display, 2016)

  const input = document.getElementById(`${sectionId}-year-input`)
  input.addEventListener('input', e => onYearChange(rects, display, Number(e.target.value)))

}