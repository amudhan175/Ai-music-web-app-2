song_venom="";
song_hope="";
function preload(){
song_venom = loadSound("Venom - Eminem-(DJMaza).mp3");
song_hope = loadSound("XXXTENTACION-Hope.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.position(430,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}