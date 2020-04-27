let generateDom = (sectionId, DATA) => {

    const WIDTH = 1000
    const HEIGHT = 500
    const MARGIN = 5
    const MARGIN_BOTTOM = HEIGHT / 10
    
      // l'échelle de couleur
    const fillScale = scaleLinear()
      .domain([0, max(DATA)])
      .range(['white', 'indianred'])
  
    $(`#${sectionId}-graph`).empty()
    const svg = select(`#${sectionId}-graph`)
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
      .attr('fill', 'black')
  
      svg.selectAll('text')
      .data(DATA)
      .enter()
      .append('text')
      .attr('x', (d, i) => i * BAR_WIDTH + BAR_WIDTH / 2)
      .attr('y', HEIGHT - MARGIN_BOTTOM + 20)
      .attr('transform', (d, i) => {
        const x = i * BAR_WIDTH + BAR_WIDTH / 2
        const y = HEIGHT - MARGIN_BOTTOM + 20
        return `rotate(90, ${x}, ${y})`
      })
      .attr('text-anchor', 'middle')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 10)
      .text(d => d.editeur)
  
  }