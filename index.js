var index = 0;
var text = 'Hi, I am Christian , a front end developer';
var speed = 50;

function textEffect() {
if (index < text.length) {
document.getElementById("effect")
.innerHTML += text.charAt(index);
index++;
setTimeout(textEffect, speed);
}
}