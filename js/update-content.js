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
    datapath = "test-data.tsv";

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
    datapath = "test-data.tsv";

    // Add your references, one per line in this format
    references = [
        "reference 1",
        "reference 2",
        "reference 3",
    ]

    // Update these fields and put them in quotes
    $("#section-title").text("Title of your thing");
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
    datapath = "test-data.tsv";

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
    datapath = "test-data.tsv";

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
    datapath = "test-data.tsv";

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
    datapath = "test-data.tsv";

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
    datapath = "test-data.tsv";

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