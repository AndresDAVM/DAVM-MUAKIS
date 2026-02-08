/* TEXTO ANIMADO */
const textos = [
  "Hola Mi Niña 💖",
  "Hice este lugar solo para ti",
  "Porque lo nuestro merece algo eterno",
  "Eres calma, hogar y amor, y todo para mi",
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

  document.getElementById("contador").innerText =
    `⏳ ${dias} días, ${horas} horas y ${minutos} minutos a tu ladito miamoshito 💞`;
}
setInterval(actualizarContador, 1000);
actualizarContador();

/* CARTAS CON CONTRASEÑA DIFERENTE */
function abrirCarta(num) {
  let passCorrecta, texto;

  if (num === 1) {
    passCorrecta = "200725";
    texto = "Mi niña, incluso cuando el mundo se pone lento y en nuestra, mi corazón te elige sin dudar. Gracias por seguir a mi ladito.";
  } else {
    passCorrecta = "A+D";
    texto = "Este mensajito guarda un amor que no se rinde, que aprende y que te elige incluso en silencio, incluso en los errores y problemas. Te amo.";
  }

  const pass = prompt("Contraseña 💗");
  if (pass !== passCorrecta) {
    alert("Esa no es 🥺");
    return;
  }

  document.getElementById("textoCarta").innerText = texto;
  document.getElementById("overlay").classList.remove("oculto");
}

function cerrarCarta() {
  document.getElementById("overlay").classList.add("oculto");
}

/* FLORES */
function crearFlor() {
  const flores = ["🌸", "🌷", "🌹", "🌼"];
  const flor = document.createElement("div");
  flor.innerText = flores[Math.floor(Math.random() * flores.length)];
  flor.style.position = "absolute";
  flor.style.fontSize = "26px";
  flor.style.left = Math.random() < 0.5 ? "5%" : "90%";
  flor.style.top = Math.random() * 80 + "%";
  flor.style.animation = "flotar 2s ease";
  document.body.appendChild(flor);
  setTimeout(() => flor.remove(), 5000);
}

for (let i = 0; i < 6; i++) {
  setTimeout(crearFlor, i * 400);
}

