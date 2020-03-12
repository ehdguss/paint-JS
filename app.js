const canvas = document.getElementById("js-canvas");

let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX,
        y = event.offsetY;
}

function onMouseDown(event) {
    painting = true;
}

function onMouseUp(event) {
    stopPainting();
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}