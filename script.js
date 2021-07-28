let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;

let cobra = [
    {
        x: 8 * box,
        y: 8 * box
    }
];

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

    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if (direcao == 'right') cobraX += box;
    if (direcao == 'left') cobraX -= box;
    if (direcao == 'up') cobraY -= box;
    if (direcao == 'down') cobraY += box;

    cobra.pop();

    let cabeca = {
        x: cobraX,
        y: cobraY
    };

    cobra.unshift(cabeca);
}

let jogo = setInterval(iniciarJogo, 100);
