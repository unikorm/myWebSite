
// canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = 




drawStuff();

// draw stuff
function drawStuff() {
    // background
    rectangle("#edf5e1", 0, 0, canvas.width, canvas.height);


    // draw rectangle
    function rectangle(color, x, y, width, height) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

}

