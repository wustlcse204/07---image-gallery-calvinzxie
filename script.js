var slideshow = ["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img6.jpg","images/img7.jpg","images/img8.jpg","images/img9.jpg","images/img10.jpg","images/img11.jpg","images/img12.jpg"];
var slideshowIndex = 0;
var source;

function view(image) {
    document.getElementById("largeImage").style.display = "block";
    document.getElementById("next_arrow").style.display = "block";
    document.getElementById("prev_arrow").style.display = "block";
    document.getElementById("close_button").style.display = "block";
    document.getElementById("images").addClass('no-hover');
    source = image.src;
    document.getElementById("largeImage").src = source;
    slideshowIndex = source.charAt(source.length-5)-1;
}

function next() {
    slideshowIndex++;
    slideshowIndex = Math.abs(slideshowIndex);
    slideshowIndex = slideshowIndex % slideshow.length;
    document.getElementById("largeImage").src = slideshow[slideshowIndex];
} 

function previous() {
    if (slideshowIndex>0) {
        slideshowIndex--;
    }
    else {
        slideshowIndex = 11;
    }
    slideshowIndex = Math.abs(slideshowIndex);
    slideshowIndex = slideshowIndex % slideshow.length;
    document.getElementById("largeImage").src = slideshow[slideshowIndex];
}

function closeImage() {
    document.getElementById("largeImage").style.display = "none";
    document.getElementById("next_arrow").style.display = "none";
    document.getElementById("prev_arrow").style.display = "none";
    document.getElementById("close_button").style.display = "none";
}
