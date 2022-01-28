const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const video = document.querySelector("video");
const constraints = {
    video: true,
};

const FPS = 10; // change this to set the video frame refresh rate.

setInterval(draw, FPS);

function draw()
{
    context.drawImage(video, 0, 0);
    //context.clearRect(0, 0, canvas.width, canvas.height);

}

function getWebcamAccess()
{
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        video.srcObject = stream;
    });
}

getWebcamAccess();
