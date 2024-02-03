var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var ox = 0;
var oy = 0;
var pox = ox+50;
var poy = oy+60;
ctx.beginPath();
//frame
ctx.rect(ox, oy, 100, 200);
//tmino
ctx.rect(pox, poy, 10, 10);
ctx.rect(pox+10, poy, 10, 10);
ctx.rect(pox+20, poy, 10, 10);
ctx.rect(pox+10, poy+10, 10, 10);
ctx.stroke();