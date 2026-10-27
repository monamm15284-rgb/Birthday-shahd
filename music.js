const music = document.querySelector(".background-music");
const musicButton = document.querySelector(".music-button");
const musicNote = document.querySelector(".music-note");

if (music && musicButton && musicNote) {
    music.volume = 0.8;
    music.loop = true;

    music.addEventListener("error", () => {
        musicNote.textContent = "تعذّر تحميل ملف الأغنية.";
    });

    async function playMusic() {
        try {
            await music.play();
            musicButton.textContent = "الأغنية شغّالة باستمرار";
            musicButton.setAttribute("aria-pressed", "true");
            musicNote.textContent = "الأغنية هتفضل تتكرر طول ما الصفحة مفتوحة";
        } catch (error) {
            musicButton.textContent = "حاولي تشغيل الأغنية";
            musicButton.setAttribute("aria-pressed", "false");
            musicNote.textContent = "المتصفح منع التشغيل التلقائي. اضغطي الزر لتشغيل الأغنية.";
            if (error.name !== "NotAllowedError") {
                console.error("Could not play the music file:", error);
            }
        }
    }

    musicButton.addEventListener("click", playMusic);

    playMusic();
}
