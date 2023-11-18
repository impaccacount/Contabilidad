var i = 0;
var images = [
    "./assets/img/slideshow/1.jpg",
    "./assets/img/slideshow/2.png",
    "./assets/img/slideshow/3.jpg",
    "./assets/img/slideshow/4.jpg",
];
const img = document.getElementsByClassName("slideshow")[0];
img.style.transition = "opacity 1s ease-in-out";
changeImg();

function changeImg(){
    img.style.opacity = 0;
  if(i < images.length -1) i++;
  else i = 0;
    img.src = images[i]
    img.style.opacity = 1;
   setTimeout(changeImg, 3000);
}
