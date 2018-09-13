var width2 = 1300;
var height2 = 800;

var secondSvg = d3.select("#vis-second").append("svg").attr("height", height2).attr("width", width2),
    margin = {top: 50, right: 150, bottom: 200, left: 150},
    width3 = secondSvg.attr("width") - margin.left - margin.right,
    height3 = secondSvg.attr("height") - margin.top - margin.bottom,
    g = secondSvg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseDate = d3.timeParse("%Y");
var formatDate = d3.timeFormat("%Y");

var x = d3.scaleTime()
    .range([0, width3]);
var y = d3.scaleLinear()
    .range([height3, 0]);

var xAxis = d3.axisBottom(x).tickFormat(function(d) { return formatDate(d);});
var yAxis = d3.axisLeft(y);

var line = d3.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Amount); })
    .curve(d3.curveCardinal);

var color = d3.scaleOrdinal(d3.schemeCategory10);

d3.csv("data/global-funding.csv", function(error, data) {
    if (error) throw error;
    color.domain(d3.keys(data[0]).filter(function(key) { return key !== "Source"; }));

    data.forEach(function(d) {
        d.Source = parseDate(d.Source);
    });

    var fundingSources = color.domain().map(function(name) {
        return {
            name: name,
            values: data.map(function(d) {
                var val = +d[name];
                if (d[name] == "--") {
                    val = 0;
                }
                return {Year: d.Source, Amount: val};
            })
        };
    });

    x.domain(d3.extent(data, function(d) { return d.Source; }));

    y.domain([
        d3.min(fundingSources, function(c) { return d3.min(c.values, function(v) { return v.Amount; }); }),
        d3.max(fundingSources, function(c) { return d3.max(c.values, function(v) { return v.Amount; }); })
    ]);

    g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height3 + ")")
        .call(xAxis);

    g.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Score (%)");

    var fundingSource = g.selectAll(".fundingSource")
        .data(fundingSources)
        .enter().append("g")
        .attr("class", "fundingSource");

    fundingSource.append("path")
        .attr("class", "line")
        .attr("d", function(d) { return line(d.values); })
        .style("stroke", function(d) { return color(d.name); });

    fundingSource.append("text")
        .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
        .attr("transform", function(d) { return "translate(" + x(d.value.Year) + "," + y(d.value.Amount) + ")"; })
        .attr("x", 3)
        .attr("dy", ".35em")
        .text(function(d) { return d.name; })
        .attr("fill",function(d){ return color(d.name)});

    // add the X gridlines
    g.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height3 + ")")
        .call(xAxis.tickSize(-height3)
            .tickFormat(""));

    var focus = g.append("g")
        .style("display", "none");

    bisectDate = d3.bisector(function(d) { return d[1]; }).left;

    // append the y line
    focus.append("line")
        .attr("class", "x")
        .style("stroke", "black")
        .style("stroke-width", "1px")
        .style("opacity", 0.3)
        .style("stroke-dasharray", "8,3")
        .style("opacity", 0.5)
        .attr("y1", 0)
        .attr("y2", height3);

    secondSvg.append("rect")
        .attr("width", width3)
        .attr("height", height3)
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", function() { focus.style("display", null); })
        .on("mouseout", function() { focus.style("display", "none"); })
        .on("mousemove", mousemove);

    var circles = g.append("g").selectAll("circle")
        .attr("class","circles")
        .data(fundingSources)
        .enter()
        .append("circle")
        .attr("r",4)
        .attr("cx", function(d){ return x(parseDate('2005')); })
        .attr("cy", function(d){
            return y(+d.values.filter(function(e){ return new Date(e.Year).getFullYear() == new Date(parseDate("2005")).getFullYear() })[0].Amount); })
        .attr("fill",function(d){ return color(d.name)});

    function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0]);
        i = bisectDate(data, x0, 1);
        focus.select(".x")
            .attr("transform", "translate(" + x(parseDate(new Date(x0).getFullYear())) + "," + 0 + ")")
            .attr("y2", height3);
        circles.attr("cx",x(parseDate(new Date(x0).getFullYear())))
            .attr("cy", function(d){
                return y(+d.values.filter(function(e){ return formatDate(e.Year) == formatDate(x0); })[0].Amount) ;})
    }

});

$(".fundingSource").mouseenter(function(){
    console.log("happening")
    console.log($(this));
}).mouseleave(function() {
    // $(this).hide();
});
