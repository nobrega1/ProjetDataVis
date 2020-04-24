import * as d3 from 'd3'
const YEAR_DISPLAY_SIZE = 50
export const WIDTH = 500
export const HEIGHT = 400
export const MARGIN_LEFT = 30
export const MARGIN_TOP = 20
export const MARGIN_BOTTOM = 30
export const GRAPH_WIDTH = WIDTH - MARGIN_LEFT
export const GRAPH_HEIGHT = HEIGHT - MARGIN_BOTTOM - MARGIN_TOP
const div = d3.select('#year')
const svg = div.append('svg').attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)
export const yearDisplay = svg.append('text')
  .attr('x', WIDTH)
  .attr('y', HEIGHT - MARGIN_BOTTOM - 20)
  .attr('font-size', YEAR_DISPLAY_SIZE)
  .attr('text-anchor', 'end')
  .attr('opacity', 0.5)
  .text(2020)