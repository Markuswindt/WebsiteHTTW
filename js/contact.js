$.preloadImages = function () {
for (var i = 0; i < arguments.length; i++) {
$("<img>").attr("src", arguments[i]);
}
};
if ($(window).width() > 768) {
$.preloadImages("../images/contact/testgif1.gif", "../images/contact/testgif2.gif", "../images/contact/testgif3.gif", "../images/contact/testgif4.gif", "../images/contact/testgif5.gif", "../images/contact/testgif6.gif", "../images/contact/testgif7.gif"
)};

var counter = 1;

var textArray = ["", "<p2>Let's work!</p2>", "<p2>Don't hesitate!</p2>", "<p2>Drop me a mail!</p2>", "<p2>Say hello.</p2>", "<p2>Psyched to work with you!</p2>", "<p2>I'm gonna nail it!</p2>", "<p2>How I'll go to work.</p2>"];

function mouseEnter() {
	var imageToChoose = "testgif" + counter + ".gif";
	document.getElementById('imagebox').style.backgroundImage = "url(images/contact/" + imageToChoose + ")";
    
    document.getElementById("hello").innerHTML= textArray[counter];
}

function mouseLeft() {
	document.getElementById('imagebox').style.backgroundImage = "url(images/contact/)";

    document.getElementById("hello").innerHTML="hello<p1>[a]</p1>markuswindt.de";
    
	if (counter < 7) {
		counter++;
	} else {
		counter = 1;
	}
}