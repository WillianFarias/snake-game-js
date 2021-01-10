let canvas = document.getElementById("snake");

//renderizando o desenho
let context = canvas.getContext("2d");
//cada retangulo tem 32px
let box = 32;

function criarBG() {
  context.fillStyle = "lightgreen";
  //desenhando retangolo
  context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();