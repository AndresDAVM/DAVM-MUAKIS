/* TEXTO QUE SE ESCRIBE */
const textos = [
  "Hola Daniela 💖",
  "Hice este lugar solo para ti",
  "Porque lo nuestro merece algo eterno",
  "Eres calma, hogar y amor",
  "Siempre tú ❤️"
];

let index = 0;
let char = 0;
const mensaje = document.getElementById("mensaje");

function escribir() {
  if (char < textos[index].length) {
    mensaje.innerHTML += textos[index].charAt(char);
    char++;
    setTimeout(escribir, 50);
  } else {
    setTimeout(() => {
      mensaje.innerHTML = "";
      char = 0;
      index = (index + 1) % textos.length;
      escribir();
    }, 2000);
  }
}
escribir();

/* CONTADOR */
function actualizarContador() {
  const inicio = new Date("2025-07-20T00:00:00");
  const ahora = new Date();
  const diff = ahora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("contador").innerHTML =
    `⏳ ${dias} días, ${horas} horas y ${minutos} minutos contigo 💞`;
}
setInterval(actualizarContador, 1000);
actualizarContador();

/* CARTAS CON CONTRASEÑA */
function abrirCarta(num) {
  const pass = prompt("Contraseña 💗");
  if (pass !== "200725") {
    alert("Esa no es 🥺");
    return;
  }

  const texto = num === 1
    ? "Daniela, incluso en los días silenciosos mi corazón te elige. Gracias por existir y por ser mi lugar seguro."
    : "Si alguna vez dudas, vuelve aquí. Siempre habrá alguien que te ame con todo lo que es.";

  document.getElementById("textoCarta").innerText = texto;
  document.getElementById("overlay").classList.remove("oculto");
}

function cerrarCarta() {
  document.getElementById("overlay").classList.add("oculto");
}

/* CORAZONES */
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

/* ESTRELLAS */
setInterval(() => {
  const star = document.createElement("div");
  star.innerHTML = "✨";
  star.style.position = "absolute";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 2000);
}, 800);
