nosex=""
nosey=""

function preload(){
clown_nose=loadImage("https://i.postimg.cc/ZYNqV9Z1/114-1147898-clown-nose-png-clip-art-clown-nose-transparent-removebg-preview.png")
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet= ml5.poseNet(video , modelloaded);
posenet.on('pose',gotposes);

}
function modelloaded(){
    console.log("posenet is loaded");
}

function gotposes(results){
    if(results.length>0){
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log(results);
        console.log("nose x"+nosex);
        console.log("nose y"+nosey);
    } 
    }

function draw(){
image(video,0,0,300,300);
fill("red");
stroke("brown");
circle(nosex,nosey,20);
image(clown_nose,nosex,nosey,30,30);

}
function snapshot(){
    save("name.png")
}