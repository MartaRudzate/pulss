 myfile = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVlJJp4jCFbUpEqnafZ-YlI0fgGaA7l7Vde93rPu1GCy4x1NuJiNGjEPMXBxhSOIzmp3CXn_piX-LV/pub?gid=0&single=true&output=csv'



d3.csv(myfile, function (data) {
  // Variables
  var body = d3.select('body')
	var margin = { top: 50, right: 50, bottom: 50, left: 50 }
	var h = 500 - margin.top - margin.bottom
	var w = 500 - margin.left - margin.right
	var formatPercent = d3.format('.2%')
	// Scales
  var colorScale = d3.scale.category20()
  var xScale = d3.scale.linear()
    .domain([
    	d3.min([60,d3.min(data,function (d) { return d.bpulss })]),
    	d3.max([85,d3.max(data,function (d) { return d.bpulss })])
    	])
    .range([0,w])
  var yScale = d3.scale.linear()
    .domain([
    	d3.min([30,d3.min(data,function (d) { return d.bindekss })]),
    	d3.max([110,d3.max(data,function (d) { return d.bindekss })])
    	])
    .range([h,0])
	// SVG
	var svg = body.append('svg')
	    .attr('height',h + margin.top + margin.bottom)
	    .attr('width',w + margin.left + margin.right)
	  .append('g')
	    .attr('transform','translate(' + margin.left + ',' + margin.top + ')')
	// X-axis
	var xAxis = d3.svg.axis()
	  .scale(xScale)
	  //.tickFormat(formatPercent)
	  .ticks(5)
	  .orient('bottom')
  // Y-axis
	var yAxis = d3.svg.axis()
	  .scale(yScale)
	  //.tickFormat(formatPercent)
	  .ticks(5)
	  .orient('left')
  // Circles
  var circles = svg.selectAll('circle')
      .data(data)
      .enter()
    .append('circle')
      .attr('cx',function (d) { return xScale(d.bpulss) })
      .attr('cy',function (d) {return yScale(d.bindekss) })
      .attr('r','5')
      .attr('stroke','black')
      .attr('stroke-width',1)
      .attr('fill',function (d,i) { if (d.dzimums == 'Meitene') {return "#FF0000"} else {return "#00FFFF" }})
      .on('mouseover', function () {
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r',10)
          .attr('stroke-width',3)
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r',5)
          .attr('stroke-width',1)
      })
    .append('title') // Tooltip
      .text(function (d) { return d.Dzimums +
                           '\nMiera pulss: ' + (d.bpulss) +
                           '\nFiziskās sagatavotības indekss: ' + (d.bindekss) })
  // X-axis
  svg.append('g')
      .attr('class','axis')
      .attr('transform', 'translate(0,' + h + ')')
      .call(xAxis)
    .append('text') // X-axis Label
      .attr('class','label')
      .attr('y',-10)
      .attr('x',w)
      .attr('dy','.71em')
      .style('text-anchor','end')
      .text('Miera pulss')
  // Y-axis
  svg.append('g')
      .attr('class', 'axis')
      .call(yAxis)
    .append('text') // y-axis Label
      .attr('class','label')
      .attr('transform','rotate(-90)')
      .attr('x',0)
      .attr('y',5)
      .attr('dy','.71em')
      .style('text-anchor','end')
      .text('Fiziskās sagatavotības indekss')
})
