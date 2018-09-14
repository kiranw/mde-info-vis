$('input[name=options]').on('change', function() {
    $("#chart-legend").html("");
    window[settings.functionName]($('input[name=options]:checked').attr("id"));
    $("#section").scrollTop = 0;
});


function carla() {
    console.log("called");
    // put your images in the "img" folder
    images = [
        // "Carla1.png",
        // "Carla2.png",
        // "Carla3.png"
    ];

    // Put your data file name here
    datapath = "Carla_Data.tsv";
    updateSaifData(datapath);

    // Add your references, one per line in this format
    references = [
        'Wittenstein, Matthew, Jesse Scott, and Noor Miza Muhamad Razali. Electricity Security across Borders. PDF. International Energy Agency, 2016.',
        'Statistical Fact Sheet. PDF. European Network of Transmission System Operator of Electricity, May 4, 2018.'
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Integration of Renewable Energy Globally (GWh)");
    $("#section-title").text("Between blurred and enforced borders");
    $("#section-name").text("Carla Saad");
    $("#section-description").text("Description paragraph of your text");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}


function terra() {
    // put your images in the "img" folder
    images = [
        // "Terra1.png",
        // "Terra2.png",
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
    $("#chart-title").text("Global Smart Phone Usage: Percentages of Adults who Reported owning a Smart Phone")
    $("#section-title").text("Reevaluating how we physically connect to the digital world");
    $("#section-name").text("Terra Moran");
    $("#section-description").html("<p>New technologies (notably, the smart phone) have led to an unsurmountable amount of information that is almost always easily accessible. This has transformed society in many positive ways, but it also means that the average American will spend 5 hours a day on a mobile device.</p>" +
        "<p>Is this constant connectivity a problem, or is it all positive? Is there a desire to spend less time on devices? Is there a way to stay connected, but not distracted?</p>");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}

function jenny() {
    // put your images in the "img" folder
    images = ["Jenny1.png","Jenny2.png"];

    // Add your references, one per line in this format
    references = [
        "'Statistics and Market Data about the Internet.' Statista, 2018. https://www.statista.com/markets/424/internet/",
        "'United Nations E-Government Development Database (UNeGovDD) Knowledgebase.' UN, 2018. https://publicadministration.un.org/egovkb/en-us/Data-Center",
        "'World Telecommunication/ICT Indicators Database.' International Telecommunications Union, July 2018. https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx",
        'Townsend, Anthony M. ""Smart Cities: Big Data, Civic Hackers, and the Quest for a New Utopia."" New York: W.W. Norton & Company, 2014."'
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Distributed Governance of Digital Infrastructure");
    $("#section-title").text("Understanding the physical assets support the parallel digital world");
    $("#section-name").text("Jenny Fan");
    $("#section-description").html("<p>The backbone of the global digital world has always been supported by physical infrastructure residing in real locations. Despite its role as public utility, much of this ICT infrastructure is private, with a constantly shifting environment over common carriage, net neutrality, and governmental regulation.</p>" +
        "<p>In 2018, the barriers between the physical and the digital are more porous than ever. The modern individual maintains an increasingly curated digital identity and lives, communicates, and works as fluidly within their smart homes, offices, and vehicles as in their online communities. On a larger scale, cities scramble to fund and implement Smart City infrastructure projects while their streets are tested by private-sector solutions offering everything from connected streetlights to autonomous vehicles. By 2020, the sheer number of IoT devices would mean there are 4x more devices connected to the internet than humans.</p>" +
        "<p>We are at a turning point as society becomes ever more digitized and connected. Will the ICT model of the new smart city be public, private, or follow a commons model enabled by new forms of distributed collaboration and governance? How will we manage the distributed governance of that infrastructure in a “phygital” world?</p>");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));

    // Put your data file name here
    $("#section-description").prepend("<div id='options'></div>");
    datapath = "jenny_data.csv";
    updateJennyData(datapath, "Population (2018 est)");
}


function saif() {
    // put your images in the "img" folder
    images = [
        // "Saif1.png",
        // "Saif2.png"
    ];

    // Put your data file name here
    datapath = "Saif_Data.tsv";
    updateSaifMultiplierData(datapath);

    // Add your references, one per line in this format
    references = [
        '"Ancestry and Development: New Evidence Journal of Applied Econometrics, vol. 33, no. 5, August 2018, pp. 748-762.',
        'Culture, Ethnicity and Diversity American Economic Review, vol. 107, no. 9, September 2017, pp. 2479-2513.',
        'The Diffusion of Institutions Wilson, D. S. and A. Kirman, eds. Complexity and Evolution: Toward a New Synthesis for Economics. Strüngmann Forum Reports, vol. 19, chapter 9, pp. 147-166. Cambridge, MA: The MIT Press, 2016."'
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Genetic Distance of Countries (To USA)");
    $("#section-title").text("Catallaxy: A Market Place of Ideas");
    $("#section-name").text("Saif Haobsh");
    $("#section-description").text('Catallaxy presents a “market-place of ideas” to understand how information is dispersed or restrained in relation to geographic, genetic, linguistic, and ideological phenomenologies. Layering notions of instutional ontogeny, technological development, geo-political activity, and economic growth, the project seeks to formulate a robust basis for negotiating social plurality.');

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}



function kate() {
    // put your images in the "img" folder
    images = [
        // "Kate1.png",
        // "Kate2.png"
    ];

    // Put your data file name here
    datapath = "Kate_Data.tsv";
    updateKateData(datapath);

    // Add your references, one per line in this format
    references = [
        "reference 1"
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Global Internet Penetration Rates (by % of population)");
    $("#section-title").text("Amorphous Data Relationships");
    $("#section-name").text("Kate Spies");
    $("#section-description").text("In 2016 the United Nations Human Rights Council declared the ‘promotion, protection and enjoyment of human rights on the Internet’ a fundamental freedom. The ability to access the internet is no longer a luxury, but rather a commodity, and as the volume and depth of personal data collection and surveillance grows, the terms of the relationship become critically important. What data is collected, what data is surveilled, how is the data shared, and what control do I have over dissemination and derived-profits? Uncertain data relationships are consciously and sub-consciously navigated at each click, how might we commit to a more equanimous exchange for all players?text");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}



function janet() {
    // put your images in the "img" folder
    images = ["Janet1.png", "Janet2.png"];

    // Put your data file name here
    datapath = "Janet_Data.tsv";
    updateSaifDataMinMax(datapath, 0,100);

    // Add your references, one per line in this format
    references = [
        '"Zhang, Amy X., Bryan Culbertson, and Praveen Paritosh. "Characterizing online discussion using coarse discourse sequences." In Proceedings of the Eleventh International Conference on Web and Social Media. AAAI Press. 2017.',
        'We Are Social. 2018. Global Digital Report 2018. https://digitalreport.wearesocial.com',
        'The Verge. Octover 2017. The Verge Tech Survey. https://www.theverge.com/2017/10/27/16550640/'
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Global Social Network Penetration");
    $("#section-title").text("How can we motivate constructive online conversations?");
    $("#section-name").text("Janet Sung");
    $("#section-description").text("" +
        "In average, global Internet users spend 135 minutes on social network, which is over one-third of their time online. Messaging family and friends is the most common activity. While social network makes private communication easier, it is potentially a platform for public discussion.");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}


function kiran() {
    // put your images in the "img" folder
    images = [
        // "Kiran1.png",
        // "Kiran2.png"
    ];

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






function updateJennyData(dataPath, columnName){
    console.log("gettinghere");
    console.log(columnName);
    $("#chart-legend").html("");
    d3.json("js/world_countries.json", function(data){
        d3.csv("data/" + dataPath, function(customData) {
            console.log(customData[0][columnName]);
            totalColumns = Object.keys(customData[0]).length;
            var columnNames = Object.keys(customData[0]).slice(3, totalColumns);

            optionsPrefix = "<div id=\"section-options\"><form action=\"\">";
            radioPrefix = '<input type="radio" class="radio" name="jenny" value="';
            radioMid = '" onclick="updateJennyData(\'Jenny_Data.csv\',\'';
            radioSuffix = '\')">';
            optionsSuffix = "</form></div>";

            optionsHTML = optionsPrefix;

            columnNames.forEach(function(c){
                optionsHTML += radioPrefix + c + radioMid + c + radioSuffix + c + "<br><br>"
            })
            optionsHTML += optionsSuffix;

            $("#options").html(optionsHTML);



            // mapping
            min = Math.pow(10, 1000);
            max = -Math.pow(10, 1000);

            var dataById = data_template;
            customData.forEach(function(d) {
                if (d[columnName] != null) {
                    d[columnName] = d[columnName].replace('%','');
                    if (+d[columnName] > max) {
                        max = +d[columnName];
                    }
                    if (+d[columnName] < min) {
                        min = +d[columnName];
                    }
                    dataById[data_country_to_id[d.name]] = +d[columnName];
                }
            });
            console.log(dataById);
            data.features.forEach(function(d) { d.countries = dataById[d.id] });


            colorSaif = d3.scaleLinear().domain([min,max])
                .range([d3.rgb("#F2F2F2"), d3.rgb('#e03b1a')]);

            console.log(dataById);

            $("#chart-legend").innerHTML = "";

            var legendsvg = d3.select("#chart-legend")
                .append("svg")
                .attr("height", 40)
                .attr("width", 800)
                .attr("id","legend");

            var colorLegend = d3.legendColor()
                .shapeWidth(50)
                .shapeHeight(15)
                .cells(11)
                .orient("horizontal")
                .scale(colorSaif);

            legendsvg.append("g")
                .attr("class", "legendLinear")
                .attr("color", "white")
                .call(colorLegend);

            d3.selectAll(".country")
                .transition()
                .duration(300)
                .style("fill", function(d){
                    if (dataById[d.id] == null || isNaN(dataById[d.id])){
                        return "#032c4f";
                    }
                    return colorSaif(dataById[d.id]); });
        });
    });
}






function updateSaifData(dataPath) {
    d3.json("js/world_countries.json", function(data){
        d3.tsv("data/" + dataPath, function(customData){
            min = Math.pow(10, 1000);
            max = -Math.pow(10, 1000);

            var dataById = data_template;
            customData.forEach(function(d) {
                if (d.values != null) {
                    if (+d.values > max) {
                        max = +d.values;
                    }
                    if (+d.values < min) {
                        min = +d.values;
                    }
                    dataById[data_country_to_id[d.name]] = +d.values;
                }
            });
            console.log(dataById);
            data.features.forEach(function(d) { d.countries = dataById[d.id] });


            colorSaif = d3.scaleLinear().domain([min,max])
                .range([d3.rgb("#F2F2F2"), d3.rgb('#e03b1a')]);

            console.log(dataById);

            $("#chart-legend").innerHTML = "";

            var legendsvg = d3.select("#chart-legend")
                .append("svg")
                .attr("height", 40)
                .attr("width", 800)
                .attr("id","legend");

            var colorLegend = d3.legendColor()
                .shapeWidth(50)
                .shapeHeight(15)
                .cells(11)
                .orient("horizontal")
                .scale(colorSaif);

            legendsvg.append("g")
                .attr("class", "legendLinear")
                .attr("color", "white")
                .call(colorLegend);

            d3.selectAll(".country")
                .transition()
                .duration(300)
                .style("fill", function(d){
                    if (dataById[d.id] == null || isNaN(dataById[d.id])){
                        return "#032c4f";
                    }
                    return colorSaif(dataById[d.id]); })
        })
    })
}


function updateSaifMultiplierData(dataPath){
    d3.json("js/world_countries.json", function(data){
        d3.tsv("data/" + dataPath, function(customData){
            min = Math.pow(10, 1000);
            max = -Math.pow(10, 1000);

            var dataById = data_template;
            customData.forEach(function(d) {
                if (d.values != null) {
                    if (+d.values*100 > max) {
                        max = +d.values*100;
                    }
                    if (+d.values*100 < min) {
                        min = +d.values*100;
                    }
                    dataById[data_country_to_id[d.name]] = +d.values*100;
                }
            });
            console.log(dataById);
            data.features.forEach(function(d) { d.countries = dataById[d.id] });


            colorSaif = d3.scaleLinear().domain([min,max])
                .range([d3.rgb("#F2F2F2"), d3.rgb('#e03b1a')]);

            console.log(dataById);

            $("#chart-legend").innerHTML = "";

            var legendsvg = d3.select("#chart-legend")
                .append("svg")
                .attr("height", 40)
                .attr("width", 800)
                .attr("id","legend");

            var colorLegend = d3.legendColor()
                .shapeWidth(50)
                .shapeHeight(15)
                .cells(11)
                .orient("horizontal")
                .scale(colorSaif);

            legendsvg.append("g")
                .attr("class", "legendLinear")
                .attr("color", "white")
                .call(colorLegend);

            d3.selectAll(".country")
                .transition()
                .duration(300)
                .style("fill", function(d){
                    if (dataById[d.id] == null || isNaN(dataById[d.id])){
                        return "#032c4f";
                    }
                    return colorSaif(dataById[d.id]); })
        })
    })
}



function updateSaifDataMinMax(dataPath, min, max){
    d3.json("js/world_countries.json", function(data){
        d3.tsv("data/" + dataPath, function(customData){
            min = Math.pow(10, 1000);
            max = -Math.pow(10, 1000);

            var dataById = data_template;
            customData.forEach(function(d) {
                if (d.values != null) {
                    dataById[data_country_to_id[d.name]] = +d.values;
                }
            });
            console.log(dataById);
            data.features.forEach(function(d) { d.countries = dataById[d.id] });


            colorSaif = d3.scaleLinear().domain([0,100])
                .range([d3.rgb("#F2F2F2"), d3.rgb('#e03b1a')]);

            console.log(dataById);

            $("#chart-legend").innerHTML = "";

            var legendsvg = d3.select("#chart-legend")
                .append("svg")
                .attr("height", 40)
                .attr("width", 800)
                .attr("id","legend");

            var colorLegend = d3.legendColor()
                .shapeWidth(50)
                .shapeHeight(15)
                .cells(11)
                .orient("horizontal")
                .scale(colorSaif);

            legendsvg.append("g")
                .attr("class", "legendLinear")
                .attr("color", "white")
                .call(colorLegend);

            d3.selectAll(".country")
                .transition()
                .duration(300)
                .style("fill", function(d){
                    if (dataById[d.id] == null || isNaN(dataById[d.id])){
                        return "#032c4f";
                    }
                    return colorSaif(dataById[d.id]); })
        })
    })
}



function updateKateData(dataPath) {
    d3.json("js/world_countries.json", function(data){
        d3.tsv("data/" + dataPath, function(customData){
            min = Math.pow(10, 1000);
            max = -Math.pow(10, 1000);

            var dataById = data_template;
            customData.forEach(function(d) {
                dataById[data_country_to_id[d.name]] = +d.values;
            });
            console.log(dataById);
            data.features.forEach(function(d) { d.countries = dataById[d.id] });


            colorKate = d3.scaleLinear().domain([0,100])
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
                .shapeWidth(50)
                .shapeHeight(15)
                .cells(11)
                .orient("horizontal")
                .scale(colorKate);

            legendsvg.append("g")
                .attr("class", "legendLinear")
                .attr("color", "white")
                .call(colorLegend);

            d3.selectAll(".country")
                .transition()
                .duration(300)
                .style("fill", function(d){
                    if (dataById[d.id] == null || isNaN(dataById[d.id])){
                        return "#032c4f";
                    }
                    return colorKate(dataById[d.id]); })
        })
    })
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

function updateTerraQuantitativeData(dataPath) {
    d3.json("js/world_countries.json", function(data){
        d3.csv("data/" + dataPath, function(customData){
            min = Math.pow(10, 1000);
            max = -Math.pow(10, 1000);

            var dataById = data_template;
            customData.forEach(function(d) {
                if (d.values != "null" && d.values != null) {
                    if (+d.values > max) {
                        max = +d.values;
                    }
                    if (+d.values < min) {
                        min = +d.values;
                    }
                    dataById[data_country_to_id[d.Country]] = +d.values;
                }
                else {
                    console.log(d);
                }
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
                .shapeWidth(50)
                .shapeHeight(15)
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
                    if (dataById[d.id] == null || isNaN(dataById[d.id])){
                        return "#032c4f";
                        console.log(d.id);
                    }
                    return colorTerra(dataById[d.id]); })
        })
    })
}
