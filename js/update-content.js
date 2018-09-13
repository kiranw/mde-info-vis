$('input[name=options]').on('change', function() {
    $("#chart-legend").html("");
    window[settings.functionName]($('input[name=options]:checked').attr("id"));
    $("#section").scrollTop = 0;
});


function carla() {
    console.log("called");
    // put your images in the "img" folder
    images = [
        "malaria1.png"
    ];

    // Put your data file name here
    datapath = "data_template.csv";

    // Add your references, one per line in this format
    references = [
        "reference 1",
    ]

    // Update these fields and put them in quotes
    $("#section-title").text("Title of your thing");
    $("#section-name").text("Carla Saad");
    $("#section-description").text("Description paragraph of your text");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}


function terra() {
    // put your images in the "img" folder
    images = [
    ];

    // Put your data file name here
    datapath = "terra.csv";
    updateTerraQuantitativeData(datapath);

    // Add your references, one per line in this format
    references = [
        "Pew Research, <a href='http://assets.pewresearch.org/wp-content/uploads/sites/2/2018/06/15135408/Pew-Research-Center_Global-Tech-Social-Media-Use_2018.06.19.pdf'>http://assets.pewresearch.org/wp-content/uploads/sites/2/2018/06/15135408/Pew-Research-Center_Global-Tech-Social-Media-Use_2018.06.19.pdf</a>",
        "Pew Research, <a href='http://www.pewinternet.org/dataset/jan-3-10-2018-core-trends-survey/Pew Research'>http://www.pewinternet.org/dataset/jan-3-10-2018-core-trends-survey/Pew Research</a>",
        "Pew Research, <a href='http://assets.pewresearch.org/wp-content/uploads/sites/2/2018/06/15135408/Pew-Research-Center_Global-Tech-Social-Media-Use_2018.06.19.pdf'>http://assets.pewresearch.org/wp-content/uploads/sites/2/2018/06/15135408/Pew-Research-Center_Global-Tech-Social-Media-Use_2018.06.19.pdf</a>",
        "Pew Research, <a href='http://www.pewinternet.org/dataset/jan-3-10-2018-core-trends-survey/'>http://www.pewinternet.org/dataset/jan-3-10-2018-core-trends-survey/</a>"
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Percentages of Adults who Reported owning a Smart Phone")
    $("#section-title").text("Smartphone Usage, Globally");
    $("#section-name").text("Terra Moran");
    $("#section-description").text("Description paragraph of your text");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}

function jenny() {
    // put your images in the "img" folder
    images = ["malaria1.png", "malaria2.png"];

    // Put your data file name here
    datapath = "jenny_data.csv";

    // Add your references, one per line in this format
    references = [
        "'Statistics and Market Data about the Internet.' Statista, 2018. https://www.statista.com/markets/424/internet/",
        "'United Nations E-Government Development Database (UNeGovDD) Knowledgebase.' UN, 2018. https://publicadministration.un.org/egovkb/en-us/Data-Center",
        "'World Telecommunication/ICT Indicators Database.' International Telecommunications Union, July 2018. https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx",
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Distributed Governance of Digital Infrastructure");
    $("#section-title").text("Understanding the physical assets support the parallel digital world");
    $("#section-name").text("Jenny Fan");
    $("#section-description").text("Description paragraph of your text");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}


function saif() {
    // put your images in the "img" folder
    images = ["malaria1.png", "malaria2.png"];

    // Put your data file name here
    datapath = "data_template.csv";

    // Add your references, one per line in this format
    references = [
        "reference 1",
        "reference 2",
        "reference 3",
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Chart title");
    $("#section-title").text("Title of your thing");
    $("#section-name").text("Saif Haobsh");
    $("#section-description").text("Description paragraph of your text");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}



function kate() {
    // put your images in the "img" folder
    images = ["malaria1.png", "malaria2.png"];

    // Put your data file name here
    datapath = "data_template.csv";

    // Add your references, one per line in this format
    references = [
        "reference 1",
        "reference 2",
        "reference 3",
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Chart title");
    $("#section-title").text("Title of your thing");
    $("#section-name").text("Kate Spies");
    $("#section-description").text("Description paragraph of your text");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}



function janet() {
    // put your images in the "img" folder
    images = ["malaria1.png", "malaria2.png"];

    // Put your data file name here
    datapath = "data_template.csv";

    // Add your references, one per line in this format
    references = [
        "reference 1",
        "reference 2",
        "reference 3",
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Chart title");
    $("#section-title").text("Title of your thing");
    $("#section-name").text("Janet Sung");
    $("#section-description").text("Description paragraph of your text");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}


function kiran() {
    // put your images in the "img" folder
    images = ["malaria1.png", "malaria2.png"];

    // Put your data file name here
    datapath = "kiran_data.csv";
    updateKiranQuantitativeData(datapath);

    // Add your references, one per line in this format
    references = [
        "reference 1",
        "reference 2",
        "reference 3",
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Countries by Directive Overlaps : EU Directive 2016/681");
    $("#section-title").text("GitLaw: Precedent Provenance and Restructured Revision");
    $("#section-name").text("Kiran Wattamwar");
    $("#section-description").text(
        "Paragraph you want displayed"
    );

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}



function generateImgHTML(images) {
    var imgHTML = "";
    var imgPrefix = '<img class="section-image" src="img/';
    var imgSuffix = '">';
    images.forEach( function(i) { imgHTML += imgPrefix + i + imgSuffix; });
    return imgHTML;
}

function generateReferenceHTML(references) {
    var refHTML = "";
    var refPrefix = '<div>';
    var refSuffix = '</div>';
    references.forEach( function(r) { refHTML += refPrefix + r + refSuffix; });
    return refHTML;
}




function updateKiranQuantitativeData(dataPath) {
    d3.json("js/world_countries.json", function(data){
        d3.csv("data/" + dataPath, function(customData){
            console.log(customData);
            var dataById = {};
            customData.forEach(function(d) { dataById[d.id] = +d.countries; });
            data.features.forEach(function(d) { d.countries = dataById[d.id] });

            console.log(dataById);

            d3.selectAll(".country")
                .transition()
                .duration(300)
                .style("fill", function(d){ return dataById[d.id] == 0 ? "#032c4f": "#ed8a76"; });
        })
    })
}

console.log(data_template);
console.log(data_country_to_id);
function updateTerraQuantitativeData(dataPath) {
    d3.json("js/world_countries.json", function(data){
        d3.csv("data/" + dataPath, function(customData){
            min = Math.pow(10, 1000);
            max = -Math.pow(10, 1000);

            var dataById = data_template;
            customData.forEach(function(d) {
                if (+d.values > max){
                    max = +d.values;
                }
                if (+d.values < min){
                    min = +d.values;
                }
                dataById[data_country_to_id[d.Country]] = +d.values;
            });
            console.log(dataById);
            data.features.forEach(function(d) { d.countries = dataById[d.id] });


            colorTerra = d3.scaleLinear().domain([min,100])
                // .interpolate(d3.interpolateHcl)
                .range([d3.rgb("#F2F2F2"), d3.rgb('#e03b1a')]);

            console.log(dataById);

            $("#chart-legend").innerHTML = "";

            var legendsvg = d3.select("#chart-legend")
                .append("svg")
                .attr("height", 40)
                .attr("width", 800)
                .attr("id","legend");

            var colorLegend = d3.legendColor()
                .shapeWidth(30)
                .shapeHeight(20)
                .cells(11)
                .orient("horizontal")
                .scale(colorTerra);

            legendsvg.append("g")
                .attr("class", "legendLinear")
                .attr("color", "white")
                .call(colorLegend);



            d3.selectAll(".country")
                .transition()
                .duration(300)
                .style("fill", function(d){
                    if (dataById[d.id] == null){
                        return "#032c4f";
                    }
                    return colorTerra(dataById[d.id]); })
        })
    })
}
