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

