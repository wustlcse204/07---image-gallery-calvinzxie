var slideshow = ["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg"];
var slideshowIndex = 0;
var source;

function view(image) {
    document.getElementById("largeImage").style.display = "block";
    source = image.src;
    document.getElementById("largeImage").src = source;
    console.log(source);
}

function hover(image) {
    image.style.transform = "scale(1.2)";
}

function normal(image) {
    image.style.transform = "scale(1)";
}

function next() {
    slideshowIndex++;
    slideshowIndex = Math.abs(slideshowIndex);
    slideshowIndex = slideshowIndex % slideshow.length;
    var x = document.getElementById("largeImage").src;
    document.getElementById("largeImage").src = slideshow[slideshowIndex];
}

function previous() {
    slideshowIndex--;
    slideshowIndex = Math.abs(slideshowIndex);
    slideshowIndex = slideshowIndex % slideshow.length;
    var x = document.getElementById("largeImage").src;
    document.getElementById("largeImage").src = slideshow[slideshowIndex];
}