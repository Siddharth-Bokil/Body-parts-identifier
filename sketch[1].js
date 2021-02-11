let video;
let poseNet;
let noseX = 0,
  noseY = 0;
let lEyeX = 0,
  lEyeY = 0;
let rEyeX = 0,
  rEyeY = 0;
let lEarX = 0,
  lEarY = 0;
let rEarX = 0,
  rEarY = 0;
let lShoX = 0,
  lShoY = 0;
let rShoX = 0,
  rShoY = 0;
let lElbX = 0,
  lElbY = 0;
let rElbX = 0,
  rElbY = 0;
let lWriX = 0,
  lWriY = 0;
let rWriX = 0,
  rWriY = 0;
let lHipX = 0,
  lHipY = 0;
let rHipX = 0,
  rHipY = 0;
let lKneX = 0,
  lKneY = 0;
let rKneX = 0,
  rKneY = 0;
let lAnkX = 0,
  lAnkY = 0;
let rAnkX = 0,
  rAnkY = 0;

function setup() {
  createCanvas(600, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video);
  poseNet.on('pose', gotPoses);

}

function gotPoses(result) {
  // console.log(result);
  if (result.length > 0) {
    noseX = result[0].pose.keypoints[0].position.x;
    noseY = result[0].pose.keypoints[0].position.y;
    lEyeX = result[0].pose.keypoints[1].position.x;
    lEyeY = result[0].pose.keypoints[1].position.y;
    rEyeX = result[0].pose.keypoints[2].position.x;
    rEyeY = result[0].pose.keypoints[2].position.y;
    lEarX = result[0].pose.keypoints[3].position.x;
    lEarY = result[0].pose.keypoints[3].position.y;
    rEarX = result[0].pose.keypoints[4].position.x;
    rEarY = result[0].pose.keypoints[4].position.y;
    lShoX = result[0].pose.keypoints[5].position.x;
    lShoY = result[0].pose.keypoints[5].position.y;
    rShoX = result[0].pose.keypoints[6].position.x;
    rShoY = result[0].pose.keypoints[6].position.y;
    lElbX = result[0].pose.keypoints[7].position.x;
    lElbY = result[0].pose.keypoints[7].position.y;
    rElbX = result[0].pose.keypoints[8].position.x;
    rElbY = result[0].pose.keypoints[8].position.y;
    lWriX = result[0].pose.keypoints[9].position.x;
    lWriY = result[0].pose.keypoints[9].position.y;
    rWriX = result[0].pose.keypoints[10].position.x;
    rWriY = result[0].pose.keypoints[10].position.y;
    lHipX = result[0].pose.keypoints[11].position.x;
    lHipY = result[0].pose.keypoints[11].position.y;
    rHipX = result[0].pose.keypoints[12].position.x;
    rHipY = result[0].pose.keypoints[12].position.y;
    lKneX = result[0].pose.keypoints[13].position.x;
    lKneY = result[0].pose.keypoints[13].position.y;
    rKneX = result[0].pose.keypoints[14].position.x;
    rKneY = result[0].pose.keypoints[14].position.y;
    lAnkX = result[0].pose.keypoints[15].position.x;
    lAnkY = result[0].pose.keypoints[15].position.y;
    rAnkX = result[0].pose.keypoints[16].position.x;
    rAnkY = result[0].pose.keypoints[16].position.y;
  }

}

function draw() {
  background(220);
  image(video, 0, 0);

  fill(255, 0, 0);
  ellipse(noseX, noseY, 15);
  fill(255, 0, 0);
  ellipse(lEyeX, lEyeY, 15);
  fill(0, 255, 0);
  ellipse(rEyeX, rEyeY, 15);
  fill(0, 255, 0);
  ellipse(lEarX, lEarY, 15);
  fill(0, 0, 255);
  ellipse(rEarX, rEarY, 15);
  fill(0, 0, 255);
  ellipse(lShoX, lShoY, 15);
  fill(255, 255, 255);
  ellipse(rShoX, rShoY, 15);
  fill(255, 255, 255);
  ellipse(rElbX, rElbY, 15);
  fill(255, 255, 0);
  ellipse(lElbX, lElbY, 15);
  fill(255, 255, 0);
  ellipse(rWriX, rWriY, 15);
  fill(0, 0, 150);
  ellipse(lWriX, lWriY, 15);
  fill(0, 255, 255);
  ellipse(rHipX, rHipY, 15);
  fill(0, 255, 255);
  ellipse(lHipX, lHipY, 15);
  fill(255, 0, 255);
  ellipse(rKneX, rKneY, 15);
  fill(255, 0, 255);
  ellipse(lKneX, lKneY, 15);
  fill(150, 150, 150);
  ellipse(rAnkX, rAnkY, 15);
  fill(150, 150, 150);
  ellipse(lAnkX, lAnkY, 15);
}