const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
let img = new Image();

function setCanvasDimensions() {
    canvas.width = 300;
    canvas.height = 300;
}

function drawRectangle(height, width) {
    context.beginPath();
    context.rect(0, 0, height, width);
    context.stroke();
}

function drawImg() {
        img.onload = function(e) {
            context.drawImage(img, 10, 10);
        }
        img.src = "pic.jpg"    
}

setCanvasDimensions();
//drawRectangle(150, 150);
drawImg();