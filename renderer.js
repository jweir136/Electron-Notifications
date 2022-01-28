const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

function setCanvasDimensions() {
    canvas.width = 300;
    canvas.height = 300;
}

function drawRectangle(height, width) {
    alert("1");
    context.beginPath();
    context.rect(0, 0, height, width);
    context.stroke();
}

setCanvasDimensions();
drawRectangle(150, 150);