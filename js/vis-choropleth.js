// CREATE SVG DRAWING AREA
var width = 800;
var height = 700;
var backgroundColor = 'rgba(106, 116, 132, 0.3)'

var chloroplethSvg = d3.select("#chloropleth-container")
                        .append("svg")
                        .attr("height", height+200)
                        .attr("width",width);

var colorScale = d3.scaleLinear().range(["#FCE4C2", "#EB8A02"]).interpolate(d3.interpolateLab);

function getColor(d, low, high){
    if (currentKey in d.malariaData){
        if (d.malariaData[currentKey] != 'N/A'){
            var value = +d.malariaData[currentKey];
            var index = (value-low)/(high-low);
            // console.log(index);
            return d3.interpolateOrRd(index);
        }
    }
    return backgroundColor;
}

var projection = d3.geoMercator()
    .scale(480) // mess with this if you want
    .translate([width / 2.4, height / 1.9]);

var path = d3.geoPath()
    .projection(projection);

var currentKey = "At_high_risk";

var hashedCountryData = {};

var malariaData = [];

var tip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// Use the Queue.js library to read two files
queue()
  .defer(d3.json, "data/africa.topo.json")
  .defer(d3.csv, "data/global-malaria-2015.csv")
  .await(function(error, mapTopJson, malariaDataCsv){
        malariaData = malariaDataCsv.filter(function(d){ return d.WHO_region == 'African'; });

        malariaData.forEach(function(d){
          hashedCountryData[d.Country] = d;
        });

        var mapData = topojson.feature(mapTopJson, mapTopJson.objects.collection).features;
        mapData.forEach(function(d){
          if (d.properties.name in hashedCountryData){
              d.malariaData = hashedCountryData[d.properties.name];
          }
          else {
              d.malariaData = {};
          }
        });

        chloroplethSvg.selectAll('.country')
          .data(mapData)
          .enter()
          .append('path')
          .attr('class', 'country')
          .attr('d', path)
          .attr('stroke', 'white')
          .attr('stroke-width', 1)
          .on("mouseover", function(d) {
              tip.transition().duration(300)
                  .style("opacity", 1)
              tip.text(d.properties.name + ", " + currentKey.split("_").join(" ") + ": " + d.malariaData[currentKey])
                  .style("left", (d3.event.pageX) + "px")
                  .style("top", (d3.event.pageY -30) + "px");
          })
          .on("mouseout", function() {
              tip.transition().duration(300)
                  .style("opacity", 0);
          })

      var h = 80, w = 400;
      var key = d3.select("#chloropleth-key")
          .append("svg")
          .attr("width", w)
          .attr("height", h);
      var legend = key.append("defs")
          .append("svg:linearGradient")
          .attr("id", "gradient")
          .attr("x1", "0%")
          .attr("y1", "100%")
          .attr("x2", "100%")
          .attr("y2", "100%")
          .attr("spreadMethod", "pad");

      legend.append("stop")
          .attr("offset", "0%")
          .attr("stop-color", d3.interpolateOrRd(0))
          .attr("stop-opacity", 1);
      legend.append("stop")
          .attr("offset", "50%")
          .attr("stop-color", d3.interpolateOrRd(0.5))
          .attr("stop-opacity", 1);
      legend.append("stop")
          .attr("offset", "100%")
          .attr("stop-color", d3.interpolateOrRd(1))
          .attr("stop-opacity", 1);

      key.append("rect")
          .attr("width", w - 100)
          .attr("height", h - 60)
          .style("fill", "url(#gradient)")
          .attr("transform", "translate(0,10)");

      key.append("text")
          .attr("id","low-extent")
          .attr("transform", "translate("+0+ ","+ (h-30)+")");
      key.append("text")
          .attr("id","high-extent")
          .attr("transform", "translate("+ (w-100) + ","+ (h-30) +")")
          .attr("text-anchor", "end");

        // Update choropleth
        updateChloropleth();
  });
    

function updateChloropleth() {
    currentKey = $("input[name='area']:checked").val();
    colorScale.domain(d3.extent(
        malariaData.filter(function(d){ return d[currentKey] != "N/A"; })
            .map(function(d){return +d[currentKey]})
    ));
    var extents = colorScale.domain();

    d3.select("#low-extent").text(extents[0]);
    d3.select("#high-extent").text(extents[1]);

    chloroplethSvg.selectAll('.country')
        .transition()
        .duration(200)
        .attr('fill', function(d,i) {
            return getColor(d, extents[0], extents[1]);
        })

}

$("input[type='radio']").click(function(){
    updateChloropleth();
});