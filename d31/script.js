  
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
    	d3.min([30,d3.min(data,function (d) { return d.fiziskais_indekss })]),
    	d3.max([110,d3.max(data,function (d) { return d.fiziskais_indekss })])
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
      .attr('cy',function (d) {return yScale(d.fiziskais_indekss) })
      .attr('r','5')
      .attr('stroke','black')
      .attr('stroke-width',1)
      .attr('fill',function (d,i) { if (d.Dzimums == 'Meitene') {return "#FF0000"} else {return "#00FFFF" }})
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
                           '\nMiera pulss: ' + (d.miera_pulss) +
                           '\nFiziskās sagatavotības indekss: ' + (d.fiziskais_indekss) })
  
  
  
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

	    // see below for an explanation of the calcLinear function
	    var lg = calcLinear(myfile, "x", "y", d3.min(myfile, function(d){ return d.miera_pulss}), d3.min(myfile, function(d){ return d.miera_pulss}));

	    svg.append("line")
	        .attr("class", "regression")
	        .attr("x1", x(lg.ptA.x))
	        .attr("y1", y(lg.ptA.y))
	        .attr("x2", x(lg.ptB.x))
	        .attr("y2", y(lg.ptB.y));

	    svg.append("g")
	        .attr("class", "x axis")
	        .attr("transform", "translate(0," + height + ")")
	        .call(xAxis)

	    svg.append("g")
	        .attr("class", "y axis")
	        .call(yAxis);

	    svg.selectAll(".point")
	        .data(myfile)
	      .enter().append("circle")
	        .attr("class", "point")
	        .attr("r", 3)
	        .attr("cy", function(d){ return y(d.fiziskais_indekss); })
	        .attr("cx", function(d){ return x(d.miera_pulss); });

	

	  function types(d){
	    d.miera_pulss = +d.miera_pulss;
	    d.fiziskais_indekss = +d.fiziskais_indekss;

	    return d;
	  }

    // Calculate a linear regression from the data

		// Takes 5 parameters:
    // (1) Your data
    // (2) The column of data plotted on your x-axis
    // (3) The column of data plotted on your y-axis
    // (4) The minimum value of your x-axis
    // (5) The minimum value of your y-axis

    // Returns an object with two points, where each point is an object with an x and y coordinate

    function calcLinear(data, x, y, minX, minY){
      /////////
      //SLOPE//
      /////////

      // Let n = the number of data points
      var n = data.length;

      // Get just the points
      var pts = [];
      data.forEach(function(d,i){
        var obj = {};
        obj.x = d[x];
        obj.y = d[y];
        obj.mult = obj.x*obj.y;
        pts.push(obj);
      });

      // Let a equal n times the summation of all x-values multiplied by their corresponding y-values
      // Let b equal the sum of all x-values times the sum of all y-values
      // Let c equal n times the sum of all squared x-values
      // Let d equal the squared sum of all x-values
      var sum = 0;
      var xSum = 0;
      var ySum = 0;
      var sumSq = 0;
      pts.forEach(function(pt){
        sum = sum + pt.mult;
        xSum = xSum + pt.x;
        ySum = ySum + pt.y;
        sumSq = sumSq + (pt.x * pt.x);
      });
      var a = sum * n;
      var b = xSum * ySum;
      var c = sumSq * n;
      var d = xSum * xSum;

      // Plug the values that you calculated for a, b, c, and d into the following equation to calculate the slope
      // slope = m = (a - b) / (c - d)
      var m = (a - b) / (c - d);

      /////////////
      //INTERCEPT//
      /////////////

      // Let e equal the sum of all y-values
      var e = ySum;

      // Let f equal the slope times the sum of all x-values
      var f = m * xSum;

      // Plug the values you have calculated for e and f into the following equation for the y-intercept
      // y-intercept = b = (e - f) / n
      var b = (e - f) / n;

			// Print the equation below the chart
			//document.getElementsByClassName("equation")[0].innerHTML = "y = " + m + "x + " + b;
			//document.getElementsByClassName("equation")[1].innerHTML = "x = ( y - " + b + " ) / " + m;

      // return an object of two points
      // each point is an object with an x and y coordinate
      return {
        ptA : {
          x: minX,
          y: m * minX + b
        },
        ptB : {
          y: minY,
          x: (minY - b) / m
        }
      }

   }
