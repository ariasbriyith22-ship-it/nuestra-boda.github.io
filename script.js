// 1. CONFIGURACIÓN DE LA CUENTA REGRESIVA
const weddingDate = new Date("October 22, 2026 16:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Inserción en el HTML
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Si la fecha llega a su fin
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown h2").innerText = "¡Llegó el gran día!";
    }
}, 1000);

// 2. CONTROL INTERACTIVO DE MÚSICA
const audio = document.getElementById("weddingAudio");
const musicBtn = document.getElementById("musicBtn");

// Aseguramos que el navegador intente cargar el archivo al inicio
audio.load();

musicBtn.addEventListener("click", function() {
    if (audio.paused) {
        audio.play().then(() => {
            // Cambio de texto al sonar
            musicBtn.innerHTML = "PAUSAR MÚSICA";
        }).catch(error => {
            // Manejo silencioso de errores de carga del navegador
            console.log("Esperando interacción o carga de archivo...");
            audio.load();
            audio.play();
            musicBtn.innerHTML = "PAUSAR MÚSICA";
        });
    } else {
        audio.pause();
        // Texto original al pausar
        musicBtn.innerHTML = "ESCUCHAR NUESTRA CANCIÓN";
    }
});

// 3. GALERÍA DESLIZABLE (SWIPER)
const swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true, // Cambia el cursor a una mano para indicar que se puede arrastrar
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
