let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;

let cobra = [
    {
        x: 8 * box,
        y: 8 * box
    }
];

let comida = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
};

let pontos = 0;

let direcao = 'right';

function criarFundo() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobra() {
    for (let i = 0; i < cobra.length; i++) {
        context.fillStyle = 'green';
        context.fillRect(cobra[i].x, cobra[i].y, box, box);
    }
}

function criarComida() {
    context.fillStyle = 'red';
    context.fillRect(comida.x, comida.y, box, box);
}

document.addEventListener('keydown', atualizarJogo);
function atualizarJogo(evento) {
    if (evento.keyCode == 37 && direcao != 'right') direcao = 'left';
    if (evento.keyCode == 38 && direcao != 'down') direcao = 'up';
    if (evento.keyCode == 39 && direcao != 'left') direcao = 'right';
    if (evento.keyCode == 40 && direcao != 'up') direcao = 'down';
}

function iniciarJogo() {


    if (cobra[0].x > 15 * box && direcao == 'right') cobra[0].x = 0;
    if (cobra[0].x < 0 && direcao == 'left') cobra[0].x = 15 * box;
    if (cobra[0].y > 15 * box && direcao == 'down') cobra[0].y = 0;
    if (cobra[0].y < 0 && direcao == 'up') cobra[0].y = 15 * box;

    criarFundo();
    criarCobra();
    criarComida();

    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if (direcao == 'right') cobraX += box;
    if (direcao == 'left') cobraX -= box;
    if (direcao == 'up') cobraY -= box;
    if (direcao == 'down') cobraY += box;

    for (let i = 1; i < cobra.length; i++) {
        if (cobra[0].x == cobra[i].x && cobra[0].y == cobra[i].y) {
            clearInterval(jogo);
            alert('Acabou o Jogo. Total de pontos: ' + pontos);
            pontos = 0;
            location.reload();
        } 
    }

    if (cobraX != comida.x || cobraY != comida.y) {
        cobra.pop();
    } else {
        comida.x = Math.floor(Math.random() * 15 + 1) * box;
        comida.y = Math.floor(Math.random() * 15 + 1) * box;
        pontos++;
    }

    let cabeca = {
        x: cobraX,
        y: cobraY
    };

    cobra.unshift(cabeca);
}

let jogo = setInterval(iniciarJogo, 100);
