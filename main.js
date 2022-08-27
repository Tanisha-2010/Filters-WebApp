function preload() {}

function draw() {
    image(video, 0, 0, 640, 430);

    tint(tint_color);
}

function setup() {
    canvas = createCanvas(640, 430);
    canvas.center();
    canvas.position(300, 220);

    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

    tint_color = "";
}

function modelLoaded() {
    console.log("Model is Loaded");
}

function takeSnapshot() {
    save("image.png");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        console.log("X cordinate of nose :" + result[0].pose.nose.x);
        console.log("Y coordinate of nose : " + result[0].pose.nose.y);
    }
}

function applyTint() {
    tint_color = document.getElementById("input_tint").value;
}