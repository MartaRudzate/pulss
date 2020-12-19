myfile = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQYoW-Iy38kzrY_L6tN2CNqeprUeuTV3he09cMwYHvepiMw3B4_vWCjzje_gN5qxEcUPb1_OyK968yX/pub?gid=0&single=true&output=csv'
//myfile = 'pulsa_dati.csv'

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
    	d3.min([60,d3.min(data,function (d) { return d.miera_pulss })]),
    	d3.max([85,d3.max(data,function (d) { return d.miera_pulss })])
    	])
    .range([0,w])
  var yScale = d3.scale.linear()
    .domain([
    	d3.min([70,d3.min(data,function (d) { return d.pulss_videospeles })]),
    	d3.max([120,d3.max(data,function (d) { return d.pulss_videospeles })])
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
      .attr('cx',function (d) { return xScale(d.miera_pulss) })
      .attr('cy',function (d) { return yScale(d.pulss_videospeles) })
      .attr('r','5')
      .attr('stroke','black')
      .attr('stroke-width',1)
      .attr('fill',function (d,i) { if (d.Dzimums == 'b') {return "#FF0000"} else {return "#00FFFF" }})
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
      .text(function (d) { return d.ID +
                           '\nmiera pulss: ' + (d.miera_pulss) +
                           '\npulss videospēļu laikā: ' + (d.pulss_videospeles) })
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
      .text('miera pulss')
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
      .text('vidējais pulss videospēles laikā')
})




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
    	d3.min([60,d3.min(data,function (d) { return d.miera_pulss })]),
    	d3.max([85,d3.max(data,function (d) { return d.miera_pulss })])
    	])
    .range([0,w])
  var yScale = d3.scale.linear()
    .domain([
    	d3.min([40,d3.min(data,function (d) { return d.fiziskais_indekss })]),
    	d3.max([100,d3.max(data,function (d) { return d.fiziskais_indekss })])
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
      .attr('cx',function (d) { return xScale(d.miera_pulss) })
      .attr('cy',function (d) { return yScale(d.fiziskais_indekss) })
      .attr('r','5')
      .attr('stroke','black')
      .attr('stroke-width',1)
      .attr('fill',function (d,i) { if (d.Dzimums == 'b') {return "#FF0000"} else {return "#00FFFF" }})
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
      .text(function (d) { return d.ID +
                           '\nmiera pulss: ' + (d.miera_pulss) +
                           '\nfiziskās sagatavotības indekss: ' + (d.fiziskais_indekss) })
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
      .text('miera pulss')
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
      .text('fiziskās sagatavotības indekss')
})




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
    	d3.min([70,d3.min(data,function (d) { return d.pulss_videospeles })]),
    	d3.max([120,d3.max(data,function (d) { return d.pulss_videospeles })])
    	])
    .range([0,w])
  var yScale = d3.scale.linear()
    .domain([
    	d3.min([40,d3.min(data,function (d) { return d.fiziskais_indekss })]),
    	d3.max([100,d3.max(data,function (d) { return d.fiziskais_indekss })])
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
      .attr('cx',function (d) { return xScale(d.pulss_videospeles) })
      .attr('cy',function (d) { return yScale(d.fiziskais_indekss) })
      .attr('r','5')
      .attr('stroke','black')
      .attr('stroke-width',1)
      .attr('fill',function (d,i) { if (d.Dzimums == 'b') {return "#FF0000"} else {return "#00FFFF" }})
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
      .text(function (d) { return d.ID +
                           '\nvidējais pulss videospēles laikā: ' + (d.pulss_videospeles) +
                           '\nfiziskās sagatavotības indekss: ' + (d.fiziskais_indekss) })
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
      .text('vidējais pulss videospēles laikā')
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
      .text('fiziskās sagatavotības indekss')
})




import numpy as np
import matplotlib.pyplot as plt

x1 = np.array([78, 82, 72, 77, 74, 69, 65, 70, 62, 82])
y1 = np.array([44.44, 46.32, 90.91, 83.33, 78.95, 74.44, 94.94, 84.51, 99.12, 42.55])

x2 = np.array([87, 88, 76, 81, 75, 80, 73, 80, 67, 84])
y2 = np.array([42.74, 56.28, 87.51, 71.09, 69.15, 84.59, 74.26, 60.22, 83.16, 83.18])

plt.scatter(x1, y1, c = 'g', marker = 'o', label = "Pirms karantīnas")
plt.scatter(x2, y2, c = 'r', marker = 'o', label = "Pēc karantīnas")
plt.title("Pirms un pēc karantīnas")
plt.xlabel("Miera stāvokļa pulss")
plt.ylabel("Fiziskās sagatavotības indekss")
plt.legend(loc = 3)
plt.legend(loc = "center left", bbox_to_anchor = (1, 0.5), numpoints = 1)


xDaj = np.array([78, 87])
yDaj = np.array([44.44, 42.74])
plt.plot(xDaj, yDaj)

xKr = np.array([82, 88])
yKr = np.array([46.32, 56.28])
plt.plot(xKr, yKr)

xMa = np.array([72, 76])
yMa = np.array([90.91, 87.51])
plt.plot(xMa, yMa)

xGu = np.array([77, 81])
yGu = np.array([83.33, 71.09])
plt.plot(xGu, yGu)

xZa = np.array([74, 75])
yZa = np.array([78.95, 69.15])
plt.plot(xZa, yZa)

xIe = np.array([69, 80])
yIe = np.array([74.44, 84.59])
plt.plot(xIe, yIe)

xDa = np.array([65, 73])
yDa = np.array([94.94, 74.26])
plt.plot(xDa, yDa)

xAr = np.array([70, 80])
yAr = np.array([84.51, 60.22])
plt.plot(xAr, yAr)

xRe = np.array([62, 67])
yRe = np.array([99.12, 83.16])
plt.plot(xRe, yRe)

xRo = np.array([82, 84])
yRo = np.array([42.55, 83.18])
plt.plot(xRo, yRo)
 
