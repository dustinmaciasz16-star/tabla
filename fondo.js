// ====== CONFIG ======
const CHARS = "0123456789×+=-";
const OPS = [
  "3×3=9","5×2=10","7×4=28","9×9=81",
  "6×3=18","8×5=40","4×4=16","2×7=14",
  "10×3=30","12×2=24"
];

// ====== SETUP DOM ======
const wrap = document.createElement("div");
wrap.className = "fondo-pro";
const canvas = document.createElement("canvas");
wrap.appendChild(canvas);
document.body.appendChild(wrap);

const ctx = canvas.getContext("2d");

// ====== RESIZE ======
let W, H, columns, drops;
function resize(){
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;

  const fontSize = 18;
  columns = Math.floor(W / fontSize);
  drops = new Array(columns).fill(0).map(() => Math.random() * H);
}
window.addEventListener("resize", resize);
resize();

// ====== INTERACCIÓN MOUSE ======
let mouse = { x: W/2, y: H/2 };
window.addEventListener("mousemove", (e)=>{
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// ====== DIBUJO ======
const fontSize = 18;
function draw(){
  // fondo con fade (cola tipo Matrix)
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, W, H);

  ctx.font = fontSize + "px monospace";

  for(let i=0; i<drops.length; i++){
    const x = i * fontSize;
    const y = drops[i];

    // alterna entre dígitos y operaciones
    const text = Math.random() < 0.08
      ? OPS[(Math.random() * OPS.length) | 0]
      : CHARS[(Math.random() * CHARS.length) | 0];

    // distancia al mouse (ligera reacción)
    const dx = x - mouse.x;
    const dy = y - mouse.y;
    const dist = Math.sqrt(dx*dx + dy*dy);

    // brillo según cercanía
    const glow = Math.max(0, 1 - dist / 200);
    const alpha = 0.25 + glow * 0.5;

    ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;

    // glow neón
    ctx.shadowBlur = 10 + glow * 20;
    ctx.shadowColor = "rgba(0,255,255,0.8)";

    ctx.fillText(text, x, y);

    // reset de gotas
    if(y > H && Math.random() > 0.975){
      drops[i] = 0;
    } else {
      drops[i] = y + fontSize;
    }
  }

  requestAnimationFrame(draw);
}
draw();