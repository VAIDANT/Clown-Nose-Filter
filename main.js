nox=0;
noy=0;
function preload() {
    img = loadImage("nose.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet Is Loaded');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(img, nox, noy)
}

function take_snapshot() {
    save('FilteredImage.jpg')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nox = results[0].pose.nose.x + 15;
        noy = results[0].pose.nose.y + 15;
        console.log("nose x = " + nox);
        console.log("nose y = " + noy);
    }
}
