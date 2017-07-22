var image, yPos;
function yScroll(){
  image = document.getElementById('image');
  yPos = window.pageYOffset;
  if(yPos > 35){
    image.style.height = "20%";
  } else {
    image.style.height = "50%";
  }
}
window.addEventListener("scroll", yScroll);


var audio = $("#HitMe")[0];
$(".hitme").mouseenter(function() {
  audio.play()
$(".hitme").mouseleave(function() {
  audio.pause();
}); 
});   