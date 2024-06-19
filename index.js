const sim = document.getElementById("opcyes");
const nao = document.getElementById("opcNo");
const fundo = document.getElementById("area");
const resp = document.getElementById("textinho");
let audio = new Audio("./careless_whispers.mp3");

audio.addEventListener("loadedmetadata", function () {
    let timeLeft = Math.round(audio.duration);
    updateTimeLeft(timeLeft);
});

// Eventos de mouse
nao.addEventListener("mouseenter", entrar);

// Eventos de toque
nao.addEventListener("touchstart", entrar);

function entrar() {
    const areaWidth = fundo.clientWidth;
    const areaHeight = fundo.clientHeight;
    const naoWidth = nao.clientWidth;
    const naoHeight = nao.clientHeight;

    const randomX = Math.random() * areaWidth * 2;
    const randomY = Math.random() * (areaHeight - naoHeight);

    nao.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Evento de clique para o botão "sim"
sim.addEventListener("click", clicar);

// Evento de toque para o botão "sim"
sim.addEventListener("touchstart", clicar);

function clicar() {
    resp.innerHTML = "<p id='resposta'>Eu não falei o que vamos comer, mas você pode descobrir</p><img src='./cachorro.gif'> ";
    sim.style.transform = "translate(0px)";
    nao.style.transform = "translate(0px, 0px)";
    resp.style.opacity = 1;

    // Definir o volume para 50%
    audio.volume = 0.5;

    audio.play().catch(error => {
        console.error("Erro ao tentar tocar o áudio:", error);
    });

}

function updateTimeLeft(timeLeft) {
    // Função para atualizar o tempo restante, se necessário
    console.log(`Tempo restante: ${timeLeft} segundos`);
}
