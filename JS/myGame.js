
// canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// game
const titleSize = 50;
const tileCountX = canvas.width / titleSize;
const tileCountY = canvas.height / titleSize;




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

