import { scaleLinear, scaleLog, scalePow } from 'd3'
import { GRAPH_WIDTH, GRAPH_HEIGHT } from './configRossling'

export const xScale = scaleLog().domain([500, 140000]).range([0, GRAPH_WIDTH])
export const yScale = scaleLinear().domain([20, 85]).range([GRAPH_HEIGHT, 0])
export const rScale = scalePow().domain([25000, 1000000000]).range([2, 40])