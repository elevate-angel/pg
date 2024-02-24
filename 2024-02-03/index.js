var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var s = 30;
var ox = 0;
var oy = 0;
var pox = ox+50;
var poy = oy+60;

function frame(ox, oy) {
    ctx.beginPath();
    //frame
    ctx.rect(ox, oy, 10 * s, 20 * s);
    ctx.stroke();
}

function tmino(pox, poy) {
    //tmino
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox+s, poy, s, s);
    ctx.rect(pox+s * 2, poy, s, s);
    ctx.rect(pox+s, poy+s, s, s);
    ctx.stroke();
}

function imino(pox, poy) {
    //imino
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox + s * 2, poy , s, s);
    ctx.rect(pox + s * 3, poy , s, s);
    ctx.stroke();
}

function omino(pox, poy) {
    //omino
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox, poy + s, s, s);
    ctx.rect(pox + s, poy + s, s, s);
    ctx.stroke();
}

function lmino(pox, poy) {
    //lmino
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox + s * 2, poy , s, s);
    ctx.rect(pox , poy + s, s, s);
    ctx.stroke();
}

function jmino(pox, poy) {
    //jmino
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox + s * 2, poy , s, s);
    ctx.rect(pox + s * 2, poy + s, s, s);
    ctx.stroke();
}

function zmino(pox, poy) {
    //zmino
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox + s , poy + s, s, s);
    ctx.rect(pox + s * 2, poy + s, s, s);
    ctx.stroke();
}

function smino(pox, poy) {
    //smino
    ctx.beginPath();
    ctx.rect(pox + s * 2, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox + s , poy + s, s, s);
    ctx.rect(pox, poy + s, s, s);
    ctx.stroke();
}

function draw(ts){
    ctx.clearRect(0,0,800,600);
    frame (ox,oy);
    smino (ox,oy);
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

