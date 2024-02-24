var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var s = 30;
var ox = 100;
var oy = 100;

function frame(ox, oy) {
    ctx.beginPath();
    //frame
    ctx.rect(ox, oy, 10 * s, 20 * s);
    ctx.stroke();
}

function scale(o,n) {
    return o + n * s;
}

function tmino(pox, poy) {
    //tmino
    pox = scale(ox, pox);
    poy = scale(oy, poy);
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox+s, poy, s, s);
    ctx.rect(pox+s * 2, poy, s, s);
    ctx.rect(pox+s, poy+s, s, s);
    ctx.stroke();
}

function imino(pox, poy) {
    //imino
    pox = scale(ox, pox);
    poy = scale(oy, poy);
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox + s * 2, poy , s, s);
    ctx.rect(pox + s * 3, poy , s, s);
    ctx.stroke();
}

function omino(pox, poy) {
    //omino
    pox = scale(ox, pox);
    poy = scale(oy, poy);
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox, poy + s, s, s);
    ctx.rect(pox + s, poy + s, s, s);
    ctx.stroke();
}

function lmino(pox, poy) {
    //lmino
    pox = scale(ox, pox);
    poy = scale(oy, poy);
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox + s * 2, poy , s, s);
    ctx.rect(pox , poy + s, s, s);
    ctx.stroke();
}

function jmino(pox, poy) {
    //jmino
    pox = scale(ox, pox);
    poy = scale(oy, poy);
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox + s * 2, poy , s, s);
    ctx.rect(pox + s * 2, poy + s, s, s);
    ctx.stroke();
}

function zmino(pox, poy) {
    //zmino
    pox = scale(ox, pox);
    poy = scale(oy, poy);
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox + s , poy + s, s, s);
    ctx.rect(pox + s * 2, poy + s, s, s);
    ctx.stroke();
}

function smino(pox, poy) {
    //smino
    pox = scale(ox, pox);
    poy = scale(oy, poy);
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
    tmino (3,0);
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


