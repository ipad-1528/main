const canvas = document.getElementById('canvas');
const ctx = canvas.getContext(canvas);

canvas.width  = 400;
canvas.height = 300;

let interval;

canvas.onclick = () => {

  canvas.onclick = null;
}