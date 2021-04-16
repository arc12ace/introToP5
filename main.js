tintColor=""

function preload(){
}
function setup(){
    canvas=createCanvas(500, 500);
    canvas.position(200, 300);
    video=createCapture(VIDEO)
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 500);
    tint(tintColor);
}

function applyFilter(){
    tintColor=document.getElementById("color_input").value;
}

function take_snapshot(){
    save("picture.png");
}