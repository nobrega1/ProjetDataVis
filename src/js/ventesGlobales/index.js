import { select, scaleLinear, max, interpolateRound, lab } from 'd3'
import "nes.css/css/nes.min.css";
import bb from 'billboard.js'
import data from '../../../data/ventesGlobales/data.json'
const WIDTH = 300
const HEIGHT = 320
const RECT_SPACE = HEIGHT / 10
const RECT_HEIGHT = RECT_SPACE * 0.8

const randomColor = () =>
  `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
  

const onYearChange = (display, year, chart) => {
  display.text(year)
  chart.load({
    columns: [
        ["NA", data.find(d => d.annee === year).regions.NA],
        ["EU", data.find(d => d.annee === year).regions.EU], 
        ["JP", data.find(d => d.annee === year).regions.JP], 
        ["OTHERS", data.find(d => d.annee === year).regions.OTHERS], 
        ]
});

}

export default sectionId => {

  const svg = select(`#${sectionId}-year`).append('svg')
  .attr("width", WIDTH)
  .attr("height", "50px")

  let chart = bb.generate({
        data: {
          colors: {
            data1: "red", 
            data2: "pink"
          },
          columns: [
          ["NA", data.find(d => d.annee === 2016).regions.NA],
          ["EU", data.find(d => d.annee === 2016).regions.EU], 
          ["JP", data.find(d => d.annee === 2016).regions.JP], 
          ["OTHERS", data.find(d => d.annee === 2016).regions.OTHERS], 
          ],
          type: "pie",
          onclick: function(d, i) {
         },
          onover: function(d, i) {
         },
          onout: function(d, i) {
         }
        },
        bindto: document.getElementById(`${sectionId}-graph`)
      })
      
      const display = svg.append('text')
      .attr('x', WIDTH - 20)
      .attr('y', 50 - 20)
      .attr('font-size', RECT_HEIGHT)
      .attr('text-anchor', 'end')

    onYearChange(display, 2016, chart)

  const input = document.getElementById(`${sectionId}-year-input`)
  //ajout des labels lors du changement sur le slider
  input.addEventListener('input', e => 
  onYearChange(display, Number(e.target.value), chart))

}