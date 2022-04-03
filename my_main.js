function setup() {
    canvas=createCanvas(600,600);
    video=createCapture(VIDEO);
    video.size(600,600);
    ml5=ml5.poseNet(video,ok);
    poseNet.on("pose",Ans);
    canvas.parent("c");
}