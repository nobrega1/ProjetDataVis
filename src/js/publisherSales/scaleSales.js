import { scaleLinear, scaleLog, scalePow } from 'd3'
import { GRAPH_WIDTH, GRAPH_HEIGHT } from './configSales'

export const xScale = scaleLog().domain([100000, 10000000]).range([0, GRAPH_WIDTH])
export const yScale = scaleLinear().domain([100000, 10000000]).range([GRAPH_HEIGHT, 0]) //nbr de vente en millions
export const rScale = scalePow().domain([100000, 10000000]).range([2, 40])