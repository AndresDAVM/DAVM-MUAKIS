const texto = [
  "Hola Daniela 💖",
  "Este pequeño mundo lo hice solo para ti",
  "Porque tu sonrisa merece algo especial",
  "Eres luz, calma y hogar",
  "Te quiero más de lo que las palabras saben decir ❤️"
];

let index = 0;
let char = 0;
const mensaje = document.getElementById("mensaje");

function escribir() {
  if (char < texto[index].length) {
    mensaje.innerHTML += texto[index].charAt(char);
    char++;
    setTimeout(escribir, 50);
  } else {
    setTimeout(() => {
      mensaje.innerHTML = "";
      char = 0;
      index = (index + 1) % texto.length;
      escribir();
    }, 2000);
  }
}

escribir();

function sorpresa() {
  alert("Daniela, eres mi persona favorita en este universo 💫💖");
}


setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  heart.style.fontSize = Math.random() * 30 + 20 + "px";
  heart.style.animation = "subir 4s linear";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 300);

