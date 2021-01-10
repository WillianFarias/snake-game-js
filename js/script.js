let canvas = document.getElementById("snake");

//renderizando o desenho
let context = canvas.getContext("2d");
//cada retangulo tem 32px
let box = 32;
let snake = [];

snake[0] = {
  x: 8 * box,
  y: 8 * box
}

function criarBG() {
  context.fillStyle = "lightgreen";
  //desenhando retangolo
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
  for (let i = 0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

criarBG();
criarCobrinha();