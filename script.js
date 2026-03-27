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

const audio = document.getElementById("weddingAudio");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function() {
    if (audio.paused) {
        audio.play().then(() => {
            musicBtn.innerHTML = "⏸ PAUSAR MÚSICA";
        }).catch(error => {
            console.log("Error al reproducir:", error);
            alert("Haz clic de nuevo para activar la música");
        });
    } else {
        audio.pause();
        musicBtn.innerHTML = "ESCUCHAR NUESTRA CANCIÓN";
    }
});


// 3. GALERÍA
const swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: { el: ".swiper-pagination" },
});
