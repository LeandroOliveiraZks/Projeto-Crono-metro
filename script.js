let segundos = 0;
let minutos = 0;
let hora = 0;

const buttonPlay = document.getElementById("iniciar");
const buttonPause = document.getElementById("pausar");
const buttonStop = document.getElementById("parar");
const timer = document.getElementById("timer");

let countTime;

const eventsButton = {
    iniciar() {
        countTime = setInterval(time, 15);
    },
    
    pausar() {
        clearInterval(countTime);
    },
    
    parar() {
        clearInterval(countTime);
        segundos = 0;
        minutos = 0;
        hora = 0;
        
        timer.innerHTML = `${formatTime(hora)}:${formatTime(minutos)}:${formatTime(segundos)}`;
    },
};

buttonPlay.addEventListener("click", eventsButton.iniciar);
buttonPause.addEventListener("click", eventsButton.pausar);
buttonStop.addEventListener("click", eventsButton.parar);

function formatTime(timer) {
    if (timer < 10) {
        return `0${timer}`;
    } else {
        return timer;
    }
}

function time() {
    segundos++;
    
    if (segundos === 60) {
        minutos += 1;
        segundos = 0;

        if (minutos === 60) {
            hora += 1;
            minutos = 0;
        }
    }

    timer.innerHTML = `${formatTime(hora)}:${formatTime(minutos)}:${formatTime(segundos)}`;
}