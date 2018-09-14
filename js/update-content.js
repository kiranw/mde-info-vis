$('input[name=options]').on('change', function() {
    $("#chart-legend").html("");
    window[settings.functionName]($('input[name=options]:checked').attr("id"));
    $("#section").animate({ scrollTop: 0 }, "slow");
});


function carla() {
    console.log("called");
    // put your images in the "img" folder
    images = [
        // "Carla1.png",
        // "Carla2.png",
        // "Carla3.png"
    ];


    // Add your references, one per line in this format
    references = [
        'Wittenstein, Matthew, Jesse Scott, and Noor Miza Muhamad Razali. Electricity Security across Borders. PDF. International Energy Agency, 2016.',
        'Statistical Fact Sheet. PDF. European Network of Transmission System Operator of Electricity, May 4, 2018.'
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Integration of Renewable Energy Globally (GWh)");
    $("#section-title").text("Between Blurred and Enforced Borders");
    $("#section-name").text("Carla Saad");
    $("#section-description").html("<p>Borders between countries are caught in a duality nowadays: enforced and blurred. For the advantage of countries' economies and strategies, the state of borders fluctuate between those two extents.</p> <p>The energy sector is one of the examples that embody the need of countries for cooperation in order to meet their needs specially in light of climate change. The recent investments of the European Union to reach a more energy independent strategy through exchange of renewable energy across borders is an illustration of geographical interconnectedness with the deployment of new technologies.</p> <p>Advanced Technologies are also used to enforce the frontier line but now under the \"smart borders\" title. The idea of linking geographic lines to the human body as a way of identification moving the discourse into the digital realm. The integration of biometrics in defining the identity and human flow across borders for security purpose following the concept of \"the body does not lie\" does not really protect systems from being hacked and infiltration to happen.</p>");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));


    // Put your data file name here
    // updateSaifData("Carla_Data.tsv");
    // Carla1 = Europe, Carla2 = World
    updateCarlaData("Carla1.csv");
    options = "<div id=\"section-options\"><form class=\"radioOptions\" action=\"\">"
    +
        '<input type="radio" class="radio" id="carla1" onclick="updateCarlaData(\'Carla1.csv\')\"> <label for="carla1" class="btn btn-secondary">Energy flow across European borders (MW)</label>'
        +
        '<input type="radio" class="radio" id="carla2" onclick="updateCarlaData(\'Carla2.csv\')\"> <label for="carla2" class="btn btn-secondary">Physical Energy Flows: (Imports - Exports) (GWh)</label>'
        +
        "<br><br></form></div><br>";

    $("#section-description").prepend("<div id='options'></div>");
    $("#options").html(options);
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
      'Pew Research Center. June, 2018. “Social Media Use Continues To Rise in Developing Countries, but Plateaus Across Developed Ones”. <a href="http://assets.pewresearch.org/wp-content/uploads/sites/2/2018/06/15135408/Pew-Research-Center_Global-Tech-Social-Media-Use_2018.06.19.pdf">http://assets.pewresearch.org/wp-content/uploads/sites/2/2018/06/15135408/Pew-Research-Center_Global-Tech-Social-Media-Use_2018.06.19.pdf</a>',
      'Flurrymobile. "Flurry State of Mobile 2017: With Captive Mobile Audiences, New App Growth Stagnates." Flurry Blog. January 10, 2018. Accessed September 14, 2018. <a href="http://flurrymobile.tumblr.com/post/169545749110/state-of-mobile-2017-mobile-stagnates">http://flurrymobile.tumblr.com/post/169545749110/state-of-mobile-2017-mobile-stagnates</a>.'
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Global Adult Smart Phone Usage (%)")
    $("#section-title").text("Reevaluating how we physically connect to the digital world");
    $("#section-name").text("Terra Moran");
    $("#section-description").html("<p>New technologies (notably, the smart phone) have led to an unsurmountable amount of information that is almost always easily accessible. This has transformed society in many positive ways, but it also means that the average American will spend 5 hours a day on a mobile device.</p><p>Is this constant connectivity a problem, or is it entirely positive? Is there even a desire to spend less time on devices? Can we create a better design for when and how we recieve information, or a new way to stay connected, but not distracted?</p>");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}

function jenny() {
    // put your images in the "img" folder
    images = [ 'Jenny1.png', 'Jenny2.png'];

    // Put your data file name here
    datapath = "jenny_data.csv";

    // Add your references, one per line in this format
    references = [
        "'Statistics and Market Data about the Internet.' Statista, 2018. https://www.statista.com/markets/424/internet/",
        "'United Nations E-Government Development Database (UNeGovDD) Knowledgebase.' UN, 2018. https://publicadministration.un.org/egovkb/en-us/Data-Center",
        "'World Telecommunication/ICT Indicators Database.' International Telecommunications Union, July 2018. https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx",
        'Townsend, Anthony M. ""Smart Cities: Big Data, Civic Hackers, and the Quest for a New Utopia."" New York: W.W. Norton & Company, 2014."'
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Distributed Governance of Digital Infrastructure");
    $("#section-title").text("Physical assets support the parallel digital world");
    $("#section-name").text("Jenny Fan");
    $("#section-description").html("<p>In 2018, the barriers between the physical and the digital are more porous than ever. The backbone of the global digital world has always been supported by physical infrastructure residing in real locations. ICT serves as a public utility, but much of its infrastructure is private, with a constantly shifting regulation environment. The modern individual maintains an increasingly curated digital identity and lives, communicates, and works as fluidly within their smart homes, offices, and vehicles as in their online communities. On a larger scale, cities scramble to fund and implement Smart City infrastructure projects while their streets are tested by private-sector solutions offering everything from connected streetlights to autonomous vehicles. By 2020, the sheer number of IoT devices would mean there are 4x more devices connected to the internet than humans. We are at a turning point as society becomes ever more digitized and connected. We need new ICT models for the smart city to manage distributed infrastructure in a 'phygital' world.</p>");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));

    // Put your data file name here
    $("#section-description").prepend("<div id='options'></div>");
    datapath = "jenny_data.csv";
    updateJennyData(datapath, "Telecommunication Infrastructure Index");
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
        'The Diffusion of Institutions Wilson, D. S. and A. Kirman, eds. Complexity and Evolution: Toward a New Synthesis for Economics. Strungmann Forum Reports, vol. 19, chapter 9, pp. 147-166. Cambridge, MA: The MIT Press, 2016."'
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Genetic Distance of Countries (To USA)");
    $("#section-title").text("Catallaxy: A Market Place of Ideas");
    $("#section-name").text("Saif Haobsh");
    $("#section-description").text('Catallaxy presents a “market-place of ideas” to understand how information is dispersed or restrained in relation to geographic, genetic, linguistic, and ideological phenomenological. Layering notions of institutional ontogeny, technological development, geo-political activity, and economic growth, an improved foundation for negotiating social plurality can emerge. This creates an opportunity for bringing outdated modes of political representation up to speed with emergent technologies.');

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
        "Anon, Dennis. 2018. What does the US government know about you? February 17. Accessed September 13, 2018. <a href='https://privacy.net/us-government-surveillance-spying-data-collection/'>https://privacy.net/us-government-surveillance-spying-data-collection/.</a>.",
        "Domestic Surveillance Directorate. n.d. Your Data: If You Have Nothing to Hide, You Have Nothing to Fear. Accessed September 13, 2018. <a href='https://nsa.gov1.info/data/'>https://nsa.gov1.info/data/</a>.",
        "Freedom House. n.d. 'Freedom on the Net 2016.'' Silencing the Messenger: Communication Apps Under Pressure. Accessed September 13, 2018. <a href='https://freedomhouse.org/sites/default/files/FOTN_2016_Full_Report.pdf'>https://freedomhouse.org/sites/default/files/FOTN_2016_Full_Report.pdf</a>",
        "Google. n.d. We want you to understand what data we collect and use. Accessed September 13, 2018. <a href='https://privacy.google.com/your-data.html'>https://privacy.google.com/your-data.html</a>.",
        "International Telecommunications Union (ITU). 2017. 'Countries with the highest internet penetration rate as of 2016.' Statista. July. Accessed September 13, 2018. <a href='https://www.statista.com/statistics/227082/countries-with-the-highest-internet-penetration-rate/'>https://www.statista.com/statistics/227082/countries-with-the-highest-internet-penetration-rate/</a>.",
        "Reporters Without Borders. 2013. The Enemies of Internet, Special Edition: Surveillance. Accessed September 13, 2018. <a href='https://web.archive.org/web/20140711164547/http://surveillance.rsf.org/en/'>https://web.archive.org/web/20140711164547/http://surveillance.rsf.org/en/</a>.",
        "United Nations Human Rights Council. 2016. 'Oral Revisions.' United Nations General Assembly. June 30. Accessed September 13, 2018. <a href='https://www.article19.org/data/files/Internet_Statement_Adopted.pdf'>https://www.article19.org/data/files/Internet_Statement_Adopted.pdf</a>."
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Global Internet Penetration Rates (by % of population)");
    $("#section-title").text("Amorphous Data Relationships");
    $("#section-name").text("Kate Spies");
    $("#section-description").text("In 2016 the United Nations Human Rights Council declared the ‘promotion, protection and enjoyment of human rights on the Internet’ a fundamental freedom. The ability to access the internet is no longer a luxury, but rather a commodity, and as the volume and depth of personal data collection and surveillance grows, the terms of the relationship become critically important. What data is collected, what data is surveilled, how is the data shared, and what control do I have over dissemination and derived-profits? Uncertain data relationships are consciously and sub-consciously navigated at each click, how might we commit to a more equanimous exchange for all players?");

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
        'We Are Social. 2018. Global Digital Report 2018. <a href="https://digitalreport.wearesocial.com">https://digitalreport.wearesocial.com</a>',
        'The Verge. Octover 2017. The Verge Tech Survey. <a href="https://www.theverge.com/2017/10/27/16550640/">https://www.theverge.com/2017/10/27/16550640/</a>'
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Global Social Network Penetration (%)");
    $("#section-title").text("Motivating constructive online conversations");
    $("#section-name").text("Janet Sung");
    $("#section-description").text("" +
        "On average, global Internet users spend 135 minutes on social network, which is over one-third of their time online. Messaging family and friends is the most common activity. While social network makes private communication easier, it is potentially a platform for public discussion.");

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}


function kiran() {
    // put your images in the "img" folder
    images = [
        "Kiran1.png",
        "Kiran2.png",
        "Kiran3.png",
        "Kiran4.png"
    ];

    // Put your data file name here
    datapath = "kiran_data.csv";
    updateKiranQuantitativeData(datapath);

    // Add your references, one per line in this format
    references = [
        '<a href="https://www.parlament.gv.at/PAKT/EU/XXVI/EU/00/55/EU_05523/imfname_10772510.pdf">https://www.parlament.gv.at/PAKT/EU/XXVI/EU/00/55/EU_05523/imfname_10772510.pdf</a>',
        'PNR: List of Member States who have decided to apply the Directive (EU) 2016/681 to intra-EU flights, Migration and Home Affairs, European Commission. 1 June, 2018, <a href="https://ec.europa.eu/home-affairs/news/list-member-states-applying-pnr-directive-intra-eu-flights_en">https://ec.europa.eu/home-affairs/news/list-member-states-applying-pnr-directive-intra-eu-flights_en</a>',
    ]

    // Update these fields and put them in quotes
    $("#chart-title").text("Countries Transposing EU Directive 2016/681");
    $("#section-title").text("GitLaw: Precedent Provenance and Restructured Revision");
    $("#section-name").text("Kiran Wattamwar");
    $("#section-description").text(
        "Very loosely, this project aims to bring law into version control and build a Github-like interface and system to track changes and improve legal legibility. This explores an inversion of Lawrence Lessig's \"Code is Law\" thesis and takes it quite literally. The parallels between both are extremely clear and present, and law lends itself well to a system like this because it often follows a consistent syntax, contains references to other documents and is, in its current form, difficult to track seamlessly. In a world where laws carry their own embedded lineages, tracking changes can begin to construct an extremely clear image on the provenance of its contents. This data exercise compares the transposition of an EU Directive that recently met its transposition deadline across various countries to measure overlap in common language and identify major differences between them."
    );

    // Dont touch this stuff
    $("#section-images").html(generateImgHTML(images));
    $("#section-references").html(generateReferenceHTML(references));
}









function generateImgHTML(images) {
    var imgHTML = "";
    var link = '<a href="img/';
    var imgPrefix = '" data-featherlight="image" data-featherlight-variant="lightbox"><img class="section-image" src="img/';
    var imgSuffix = '"></a>';
    images.forEach( function(i) { imgHTML += link + i + imgPrefix + i + imgSuffix; });
    return imgHTML;
}

function generateReferenceHTML(references) {
    var refHTML = "";
    var refPrefix = '<div class="reference">';
    var refSuffix = '</div><br>';
    references.forEach( function(r) { refHTML += refPrefix + r + refSuffix; });
    return refHTML;
}


function updateJennyData(dataPath, columnName){
    $("#chart-title").text(columnName);
    console.log("gettinghere");
    console.log(columnName);
    $("#chart-legend").html("");
    d3.json("js/world_countries.json", function(data){
        d3.csv("data/" + dataPath, function(customData) {
            console.log(customData[0][columnName]);
            totalColumns = Object.keys(customData[0]).length;
            var columnNames = Object.keys(customData[0]).slice(6, totalColumns);

            optionsPrefix = "<div id=\"section-options\"><form class=\"radioOptions\" action=\"\">";
            radioPrefix = '<input type="radio" class="radio" name="jenny" id="';
            radioID = '" value="';
            radioMid = '" onclick="updateJennyData(\'Jenny_Data.csv\',\'';
            radioSuffix = '\')"><label class="btn btn-secondary" for="';
            radioID2 = '">';
            radioLabel = '</label><br>';
            optionsSuffix = "</form></div>";

            optionsHTML = optionsPrefix;

            columnNames.forEach(function(c){
                optionsHTML += radioPrefix + c + radioID + c + radioMid + c + radioSuffix + c + radioID2 + c + radioLabel;
            })
            optionsHTML += "<br><br>" + optionsSuffix;

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



function updateCarlaData(dataPath){
    $("#chart-legend").html("");

    d3.json("js/world_countries.json", function(data){
        d3.csv("data/" + dataPath, function(customData){
            min = Math.pow(10, 1000);
            max = -Math.pow(10, 1000);
            var columnName = Object.keys(customData[0])[2];
            console.log(dataPath, columnName);

            $("#chart-title").html(columnName);

            var dataById = data_template;
            customData.forEach(function(d) {
                if (d[columnName] != null) {
                    if (+d[columnName] > max) {
                        max = +d[columnName];
                    }
                    if (+d[columnName] < min) {
                        min = +d[columnName];
                    }
                    dataById[data_country_to_id[d.name]] = +d[columnName];
                }
            });
            // console.log(dataById);
            data.features.forEach(function(d) { d.countries = dataById[d.id] });


            colorSaif = d3.scaleLinear().domain([min,max])
                .range([d3.rgb("#F2F2F2"), d3.rgb('#e03b1a')]);

            // console.log(dataById);

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
            // console.log(dataById);
            data.features.forEach(function(d) { d.countries = dataById[d.id] });


            colorSaif = d3.scaleLinear().domain([min,max])
                .range([d3.rgb("#F2F2F2"), d3.rgb('#e03b1a')]);

            // console.log(dataById);

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
            // console.log(dataById);
            data.features.forEach(function(d) { d.countries = dataById[d.id] });


            colorSaif = d3.scaleLinear().domain([min,max])
                .range([d3.rgb("#F2F2F2"), d3.rgb('#e03b1a')]);

            // console.log(dataById);

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
            // console.log(dataById);
            data.features.forEach(function(d) { d.countries = dataById[d.id] });


            colorSaif = d3.scaleLinear().domain([0,100])
                .range([d3.rgb("#F2F2F2"), d3.rgb('#e03b1a')]);

            // console.log(dataById);

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
            // console.log(dataById);
            data.features.forEach(function(d) { d.countries = dataById[d.id] });


            colorKate = d3.scaleLinear().domain([0,100])
                .range([d3.rgb("#F2F2F2"), d3.rgb('#e03b1a')]);

            // console.log(dataById);

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

            // console.log(dataById);

            d3.selectAll(".country")
                .transition()
                .duration(300)
                .style("fill", function(d){ return dataById[d.id] == 1 ? "#ed8a76":"#032c4f"; });
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

          // console.log(dataById);

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
