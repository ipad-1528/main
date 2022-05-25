const canvas = document.getElementById('canvas');
const ctx = canvas.getContext(canvas);

canvas.width  = 400;
canvas.height = 300;

/**
 * mainloopdelay
 * @type {number}
 */
const mainloopdelay = 1;

/**
 * mainloop interval
 * @type {(number|undefined)}
 */
let interval;

canvas.onclick = () => {
  interval = setInterval(mainloop,mainloopdelay)
  canvas.onclick = null;
}