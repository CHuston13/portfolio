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

function getProjectOne(){
    window.location = "https://github.com/CHuston13/Wave";
}

function p1Preview(){
    window.location ="https://chuston13.github.io/WaveClone/";
}