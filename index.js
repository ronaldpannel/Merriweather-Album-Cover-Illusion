/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

const rotationSlider = document.getElementById('rotation')
const r5Value = document.getElementById('rValue')

let scaler = Number(rotationSlider.value)
const size = 25;
rotationSlider.addEventListener("change", () => {
  scaler = Number(rotationSlider.value)
  updateValue()
  genEffect()
});

function genEffect() {
  for (let x = 0; x < canvas.width; x += size) {
    for (let y = 0; y < canvas.height; y += size) {
      let rotation = (x + y) * scaler;
      let smallRad = size * 0.25;
      let largeRad = size / 2;

      ctx.beginPath();
      ctx.ellipse(
        x + size / 2,
        y + size / 2,
        largeRad,
        smallRad,
        rotation,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "green";
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(
        x + size / 2,
        y + size / 2,
        largeRad,
        smallRad,
        rotation,
        0,
        Math.PI
      );
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(
        x + size / 2,
        y + size / 2,
        largeRad,
        smallRad,
        rotation,
        0,
        Math.PI,
        true
      );
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }
}
function updateValue(){
r5Value.innerHTML = rotationSlider.value;
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  genEffect();
  requestAnimationFrame(animate);
}
animate();
