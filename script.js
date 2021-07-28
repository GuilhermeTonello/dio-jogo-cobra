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

function iniciarJogo() {
    criarFundo();
    criarCobra();

    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if (direcao == 'right') cobraX += box;
    else if (direcao == 'left') cobraX -= box;
    else if (direcao == 'up') cobraY -= box;
    else if (direcao == 'down') cobraY += box;

    cobra.pop();

    let cabeca = {
        x: cobraX,
        y: cobraY
    };

    cobra.unshift(cabeca);
}

let jogo = setInterval(iniciarJogo, 100);
