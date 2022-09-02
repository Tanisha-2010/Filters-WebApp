///lipstick_img - https://i.postimg.cc/PxFvYgkv/l1.png
///mustache img - https://i.postimg.cc/3x3QzSGq/m.png

lip_x = 0;
lip_y = 0;
mustache_x = 0;
mustache_y = 0;


function preload() {
    mustache_img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    lipstick_img = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function draw() {
    image(video, 0, 0, 640, 430);

    tint(tint_color);

    image(mustache_, img, mustache_x, mustache_y, 110, 60);
    image(lipstick_img, lip_x, lip_y, 110, 50);
}

function setup() {
    canvas = createCanvas(550, 400);
    canvas.center();
    canvas.position(350, 190);

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
        console.log("X cordinate of Lip :" + result[0].pose.nose.x);
        console.log("Y coordinate of Lip : " + result[0].pose.nose.y);
        console.log("Y coordinate of Mustache : " + result[0].pose.nose.y);
        console.log("Y coordinate of Mustache : " + result[0].pose.nose.y);
        lip_x = result[0].pose.nose.x + 55;
        lip_y = result[0].pose.nose.y + 53;
        mustache_x = result[0].pose.nose.x + 65;
        mustache_y = result[0].pose.nose.y + 15;
    }
}

function applyTint() {
    tint_color = document.getElementById("input_tint").value;
}