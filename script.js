image = document.getElementById("img1")
image2 = document.getElementById("img2")

function enlarge() {
    image.style.transform = "scale(1.3)";
    image.style.transition = "transform 0.5s";
}

function resetSize() {
    image.style.transform = "scale(1)";
}

function hoverEnlarge(){
    image2.style.transform = "scale(1.5)"
    image2.style.transition = "transform 0.5s";
}



