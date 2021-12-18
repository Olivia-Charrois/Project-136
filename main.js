status = "";

function setup()
{
 canvas = createCanvas(280, 280);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(280, 280);
 video.hide();
}

function start()
{
 objectDetector = ml5.objectDetector('cocossd', modelLoaded);
 document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
 console.log("Model Loaded!");
 status = true;
 video.loop();
 video.speed(1);
 video.volume(0);
}

function draw()
{
 image(video, 0, 0, 280, 280);
}