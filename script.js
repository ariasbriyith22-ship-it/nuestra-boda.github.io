const audio = document.getElementById("weddingAudio");
const musicBtn = document.getElementById("musicBtn");

// Intentar pre-cargar el audio
window.addEventListener('load', () => {
    audio.load();
});

musicBtn.addEventListener("click", () => {
    if (audio.paused) {
        // Truco: reasignar el src si hay error de carga
        if (!audio.src || audio.src === "") {
            audio.src = "cancion.mp3";
        }
        audio.play().then(() => {
            musicBtn.innerHTML = "PAUSAR MÚSICA";
        }).catch(err => {
            console.log("Reintentando reproducción...");
            audio.load();
            audio.play();
            musicBtn.innerHTML = "PAUSAR MÚSICA";
        });
    } else {
        audio.pause();
        musicBtn.innerHTML = "ESCUCHAR NUESTRA CANCIÓN";
    }
});

// Cuenta regresiva
const weddingDate = new Date("October 22, 2026 16:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const d = weddingDate - now;
    document.getElementById("days").innerText = Math.floor(d / 86400000);
    document.getElementById("hours").innerText = Math.floor((d % 86400000) / 3600000);
    document.getElementById("minutes").innerText = Math.floor((d % 3600000) / 60000);
    document.getElementById("seconds").innerText = Math.floor((d % 60000) / 1000);
}, 1000);

new Swiper(".mySwiper", { loop: true, autoplay: { delay: 3000 }, pagination: { el: ".swiper-pagination" } });
