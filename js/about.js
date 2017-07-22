var audio = $("#HitMe")[0];
$(".hitme").mouseenter(function() {
  audio.play()
$(".hitme").mouseleave(function() {
  audio.pause();
}); 
});   
