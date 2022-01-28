const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const video = document.querySelector("video");
const constraints = {
    video: true,
};

const FPS = 120; // change this to set the video frame refresh rate.

setInterval(function() {
    draw(),
    loadAndPredict()
}, FPS);

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

function drawBodyPart(x, y)
{
    context.fillStyle = "red";

    context.beginPath();
    context.rect(x, y, 5, 5);
    context.fill();
}

async function loadAndPredict()
{
    const net = await bodyPix.load({
        architecture: 'MobileNetV1',
        outputStride: 16,
        multiplier: 0.5,
        quantBytes: 1
    });
    const segmentation = await net.segmentPerson(canvas);

    for (let i = 0; i < segmentation.allPoses.length; i+=1)
    {
        for (let j = 0; j < segmentation.allPoses[i].keypoints.length; j+=1)
        {
            let part = segmentation.allPoses[i].keypoints[j].part;
            let x = segmentation.allPoses[i].keypoints[j].position.x;
            let y = segmentation.allPoses[i].keypoints[j].position.y;
            let score = segmentation.allPoses[i].keypoints[j].score;
            
            if (score >= 0.75)
            {
                drawBodyPart(x, y);
            }
        }
    }
}

getWebcamAccess();
