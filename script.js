var slideshow = ['img1','img2','img3','img4','img5'];
var x = 0;

function view(e) {
    var img = document.getElementById(e);
    var largeimg = document.getElementById("largeimg")
    largeimg.src = e;
    largeimg.style.display = "block";
    largeimg.style.transform = "scale(2)";
    largeimg.style.position = 'absolute';
  
}