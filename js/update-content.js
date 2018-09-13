$('input[name=options]').on('change', function() {
    window[settings.functionName]($('input[name=options]:checked').attr("id"));
    $("#section").scrollTop = 0;
});


function carla() {
    console.log("called");
    // put your images in the "img" folder
    images = [
        "malaria1.png",
        "malaria2.jpg"
    ];

    // Put your data file name here
    datapath = "data_template.csv";

    // Add your references, one per line in this format
    references = [
        "reference 1",
        "reference 2",
        "reference 3",
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
        "malaria1.png",
        "malaria2.jpg"];

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
    datapath = "data_template.csv";

    // Add your references, one per line in this format
    references = [
        "reference 1",
        "reference 2",
        "reference 3",
    ]

    // Update these fields and put them in quotes
    $("#section-title").text("Title of your thing");
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
                .duration(100)
                .style("fill", function(d){ return dataById[d.id] == 0 ? "white": "#ed8a76"; });
        })
    })
}

console.log(data_template);
console.log(data_country_to_id);
function updateTerraQuantitativeData(dataPath) {
    d3.json("js/world_countries.json", function(data){
        d3.csv("data/" + dataPath, function(customData){
            console.log(customData);
            min = Math.pow(10, 1000);
            max = -Math.pow(10, 1000);

            var dataById = data_template;
            customData.forEach(function(d) {
                if (+d.value > max){
                    max = +d.value;
                }
                if (+d.value < min){
                    min = +d.value;
                }
                dataById[data_country_to_id[d.Country]] = +d.value;
            });
            data.features.forEach(function(d) { d.countries = dataById[d.id] });


            colorTerra = d3.scaleLinear().domain([min,max])
                .interpolate(d3.interpolateHcl)
                .range([d3.rgb("#007AFF"), d3.rgb('#FFF500')]);

            console.log(dataById);

            d3.selectAll(".country")
                .transition()
                .duration(100)
                .style("fill", function(d){ return colorTerra(dataById[d.id]); });
        })
    })
}

//
// function ready(error, data, yourdata) {
//     var dataById = {};
//
//     yourdata.forEach(function(d) { dataById[d.id] = +d.yourcolumn; });
//     data.features.forEach(function(d) { d.yourcolumnname = dataById[d.id] });
//
//     svg.append("g")
//         .attr("class", "countries")
//         .selectAll("path")
//         .data(data.features)
//         .enter().append("path")
//         .attr("d", path)
//         .style("fill", function(d) { return color(dataById[d.id]); })
//         .style('stroke', 'white')
//         .style('stroke-width', 1.5)
//         .style("opacity",0.8)
//         // tooltips
//         .style("stroke","white")
//         .style('stroke-width', 0.3)
//         .on('mouseover',function(d){
//             tip.show(d);
//
//             d3.select(this)
//                 .style("opacity", 1)
//                 .style("stroke","white")
//                 .style("stroke-width",3);
//         })
//         .on('mouseout', function(d){
//             tip.hide(d);
//
//             d3.select(this)
//                 .style("opacity", 0.8)
//                 .style("stroke","white")
//                 .style("stroke-width",0.3);
//         });
//
//     svg.append("path")
//         .datum(topojson.mesh(data.features, function(a, b) { return a.id !== b.id; }))
//         // .datum(topojson.mesh(data.features, function(a, b) { return a !== b; }))
//         .attr("class", "names")
//         .attr("d", path);
// }