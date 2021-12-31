
var image = new Array();
image[0] = "./deokdam/1 (1).png";
image[1] = "./deokdam/2.png";
image[2] = "./deokdam/3.png";
image[3] = "./deokdam/4.png";
image[4] = "./deokdam/7.png";
function show()
{
    var number = Math.round(Math.random()*4);
    var showImage = document.getElementById("img");
    showImage.src = image[number];
}




 
