// Mensaje romántico
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("message").textContent =
    "Mi Dulcesita, muchas felicidades, te deseo que sigas cumpliendo muchos años mas y sobre todo espero tener la fortuna de poder celebrarlos a tu lado 💕🌷";
});

// Flores cayendo
const container = document.querySelector(".falling-container");
const flowers = [
  "images/petalo.png",
  "images/tulipan.png"
];

function createFlower() {
  const flower = document.createElement("img");
  flower.src = flowers[Math.floor(Math.random() * flowers.length)];
  flower.classList.add("fall");

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 6 + Math.random() * 6 + "s";
  flower.style.width = 30 + Math.random() * 25 + "px";

  container.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 12000);
}

setInterval(createFlower, 500);

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.bottom = "0px";

  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 4000);
}

setInterval(createSparkle, 800);

const lines = [
    "Dulcesita, amarte ha sido la forma más hermosa de aprender a vivir.",
    "",
    "En tu sonrisa encontré calma,",
    "en tus abrazos hogar",
    "y en tu corazón mi lugar seguro.",
    "",
    "Hoy celebro tu vida,",
    "tu luz",
    "y cada instante que compartimos.",
    "",
    "Feliz cumpleaños, amor mío.",
    "Siempre estare contigo",
    "mientras Dios me preste vida🌷"
];

const textElement = document.getElementById("typing-text");
let lineIndex = 0;
let charIndex = 0;
const speed2 = 45; // velocidad suave

function typeLines() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      textElement.innerHTML += lines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeLines, speed2);
    } else {
      textElement.innerHTML += "<br>";
      charIndex = 0;
      lineIndex++;
      setTimeout(typeLines, 400); // pausa entre renglones
    }
  }
}

window.addEventListener("load", typeLines);
