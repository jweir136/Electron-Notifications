const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const image = document.querySelector("img");
let img = new Image();


function drawImageOnCanvas()
{
    canvas.width = 5000;
    canvas.height = 1000;
    img.onload = function(e) {
        context.drawImage(img, 0, 0);
    }
    img.src = "person.png";
}

function drawBodyPart(x, y)
{
    context.fillStyle = "red";

    context.beginPath();
    context.rect(x, y, 5, 5);
    context.fill();
}


async function getWebcamAccess()
{
    // load the BodyPix model from a checkpoint
    const net = await bodyPix.load();
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

drawImageOnCanvas();
getWebcamAccess();