// 1. CUENTA REGRESIVA REAL
const weddingDate = new Date("October 22, 2026 16:00:00").getTime();

setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// 2. CONTROL DE MÚSICA
const audio = document.getElementById("weddingAudio");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        musicBtn.innerText = "⏸ Pausar nuestra canción";
    } else {
        audio.pause();
        musicBtn.innerText = "🎵 Dale Play a nuestra canción";
    }
});

// 3. GALERÍA
const swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: { el: ".swiper-pagination" },
});
