var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var s = 30;
var ox = 0;
var oy = 0;

function frame(ox, oy) {
    ctx.beginPath();
    //frame
    ctx.rect(ox, oy, 10 * s, 20 * s);
    ctx.stroke();
}

function tmino(pox, poy) {
    //tmino
    pox *= s;
    poy *= s;
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox+s, poy, s, s);
    ctx.rect(pox+s * 2, poy, s, s);
    ctx.rect(pox+s, poy+s, s, s);
    ctx.stroke();
}

function imino(pox, poy) {
    //imino
    pox *= s;
    poy *= s;
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox + s * 2, poy , s, s);
    ctx.rect(pox + s * 3, poy , s, s);
    ctx.stroke();
}

function omino(pox, poy) {
    //omino
    pox *= s;
    poy *= s;
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox, poy + s, s, s);
    ctx.rect(pox + s, poy + s, s, s);
    ctx.stroke();
}

function lmino(pox, poy) {
    //lmino
    pox *= s;
    poy *= s;
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox + s * 2, poy , s, s);
    ctx.rect(pox , poy + s, s, s);
    ctx.stroke();
}

function jmino(pox, poy) {
    //jmino
    pox *= s;
    poy *= s;
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox + s * 2, poy , s, s);
    ctx.rect(pox + s * 2, poy + s, s, s);
    ctx.stroke();
}

function zmino(pox, poy) {
    //zmino
    pox *= s;
    poy *= s;
    ctx.beginPath();
    ctx.rect(pox, poy, s, s);
    ctx.rect(pox + s, poy , s, s);
    ctx.rect(pox + s , poy + s, s, s);
    ctx.rect(pox + s * 2, poy + s, s, s);
    ctx.stroke();
}

function smino(pox, poy) {
    //smino
    pox *= s;
    poy *= s;
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
    smino (3,0);
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


