var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var ox = 0;
var oy = 0;
var pox = ox+50;
var poy = oy+60;

function frame(ox, oy) {
    ctx.beginPath();
    //frame
    ctx.rect(ox, oy, 100, 200);
    ctx.stroke();
}

function tmino(pox, poy) {
    //tmino
    ctx.beginPath();
    ctx.rect(pox, poy, 10, 10);
    ctx.rect(pox+10, poy, 10, 10);
    ctx.rect(pox+20, poy, 10, 10);
    ctx.rect(pox+10, poy+10, 10, 10);
    ctx.stroke();
}

function draw(ts){
    frame (ox,oy);
    tmino (ts%100, ts%200);
}

function run(ts){
    draw(ts);
    requestAnimationFrame(tick);
}

function tick(ts) {
    draw(ts);
    requestAnimationFrame(tick);
}

requestAnimationFrame(run);
