var format = d3.format(",");
var format_pct = d3.format(".00%");

// Set tooltips
var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>";
            // + "<strong>Population: </strong><span class='details'>" + format(d.population) +"</span>";
    })

var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = $("#chart").width(),
    height = window.outerHeight*0.70 - $(".button-row").height() - $("#chart-title").height();

var color = d3.scaleThreshold()
    .domain([10000,100000,500000,1000000,5000000,10000000,50000000,100000000,500000000,1500000000])
    .range(["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)","rgb(33,113,181)","rgb(8,81,156)","rgb(8,48,107)","rgb(3,19,43)"]);

var path = d3.geoPath();

var svg = d3.select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    // zoom
    .call(d3.zoom()
        .scaleExtent([1,2])
        .on("zoom", function () { svg.attr("transform", d3.event.transform) })
      )
    // regular appending
    .append('g')
    .attr('class', 'map');

var projection = d3.geoMercator()
    .scale(130)
    .translate( [width / 2, height / 1.5]);

var path = d3.geoPath().projection(projection);

var data_template = {};
var data_country_to_id = {};

svg.call(tip);

queue()
    .defer(d3.json, "js/world_countries.json")
    .defer(d3.csv, "data/data_template.csv")
    .await(ready);

function ready(error, data, yourdata) {
    var dataById = {};

    yourdata.forEach(function(d) { data_template[d.id] = null; });
    yourdata.forEach(function(d) { data_country_to_id[d.name] = d.id; });

    yourdata.forEach(function(d) { dataById[d.id] = +d.yourcolumn; });
    data.features.forEach(function(d) { d.yourcolumnname = dataById[d.id] });

    svg.append("g")
        .attr("class", "countries")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
        .attr("class","country")
        .style("fill", function(d) { return "#001e38"; })
        .style('stroke', 'white')
        .style('stroke-width', 1.5)
        .style("opacity",0.95)
        // tooltips
        .style("stroke","white")
        .style('stroke-width', 0.3)
        .on('mouseover',function(d){
            tip.show(d);

            d3.select(this)
                .style("opacity", 1)
                .style("stroke","white")
                .style("stroke-width",3);
        })
        .on('mouseout', function(d){
            tip.hide(d);

            d3.select(this)
                .style("opacity", 0.95)
                .style("stroke","white")
                .style("stroke-width",0.3);
        });

    svg.append("path")
        .datum(topojson.mesh(data.features, function(a, b) { return a.id !== b.id; }))
        // .datum(topojson.mesh(data.features, function(a, b) { return a !== b; }))
        .attr("class", "names")
        .attr("d", path);
}
