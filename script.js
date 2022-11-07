var slideshow = ['img1','img2','img3','img4','img5'];
var x = 0;

function view(image) {
    document.getElementById("largeImage").style.display = "block";
    var source = image.src;
    var image = document.getElementById("largeImage");
    image.src = source;
}

function hover(image) {
    image.style.transform = "scale(1.2)";
}

function normal(image) {
    image.style.transform = "scale(1)";
}