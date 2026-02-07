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

// ===== CARTAS CON CONTRASEÑA =====
function abrirCarta(num) {
  const pass = prompt("Contraseña 💗");
  if (pass !== "daniela") {
    alert("Esa no es 🥺");
    return;
  }

  const texto =
    num === 1
      ? "Daniela, incluso cuando el mundo se pone silencioso, mi corazón te sigue eligiendo. Gracias por ser mi calma, mi refugio y mi razón."
      : "Si algún día dudas de lo nuestro, vuelve aquí. Hay un amor que te piensa, te cuida y te elige sin condiciones.";

  document.getElementById("textoCarta").innerText = texto;
  document.getElementById("overlay").classList.remove("oculto");
}


function cerrarCarta() {
  document.getElementById("overlay").classList.add("oculto");
}

// ===== CONTADOR DESDE 20 JULIO 2025 =====
function actualizarContador() {
  const inicio = new Date("2025-07-20T00:00:00");
  const ahora = new Date();
  const diff = ahora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("contador").innerText =
    `⏳ ${dias} días, ${horas} horas y ${minutos} minutos contigo 💞`;
}

setInterval(actualizarContador, 1000);
actualizarContador();



// ===== FLORES AL ENTRAR =====
function crearFlor() {
  const flores = ["🌸", "🌷", "🌹", "🌼"];
  const flor = document.createElement("div");
  flor.innerText = flores[Math.floor(Math.random() * flores.length)];

  flor.style.position = "absolute";
  flor.style.fontSize = "28px";
  flor.style.opacity = "0";
  flor.style.transition = "all 3s ease";

  // izquierda o derecha de la caja
  const lado = Math.random() < 0.5 ? "left" : "right";
  flor.style[lado] = "5%";
  flor.style.top = Math.random() * 80 + 10 + "%";

  document.body.appendChild(flor);

  setTimeout(() => {
    flor.style.opacity = "1";
    flor.style.transform = "translateY(-20px)";
  }, 100);

  setTimeout(() => flor.remove(), 6000);
}

// generar varias apenas entra
for (let i = 0; i < 6; i++) {
  setTimeout(crearFlor, i * 400);
}
