document.addEventListener("DOMContentLoaded", () => {

    /* ======================
       CACHE
    ====================== */

    const intro = document.getElementById("intro");
    const video = document.getElementById("introVideo");
    const closeIntroBtn = document.getElementById("closeIntro");
    const muteBtn = document.getElementById("muteBtn");

    const popup = document.getElementById("popup");
    const nameEl = document.getElementById("name");
    const bioEl = document.getElementById("bio");
    const closePopupBtn = document.getElementById("closePopup");

    let introActive = true;

    /* ======================
       INTRO LOGIC
    ====================== */

    if (video) {
        video.muted = true;

        video.src = window.innerWidth < 768
            ? "videos/intro-mobile.mp4"
            : "videos/intro-web.mp4";

        video.load();
    }

    if (closeIntroBtn && intro) {
        closeIntroBtn.addEventListener("click", () => {
            introActive = false;
            intro.remove();
        });
    }

    if (muteBtn && video) {
        muteBtn.addEventListener("click", () => {
            if (!introActive) return;

            video.muted = !video.muted;
            muteBtn.textContent = video.muted ? "Unmute" : "Mute";
        });
    }

    /* ======================
       POPUP LOGIC
    ====================== */

    function openPopup(name, bio) {
        if (!popup || !nameEl || !bioEl) return;

        nameEl.textContent = name || "";
        bioEl.textContent = bio || "";

        popup.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }

    function closePopup() {
        if (!popup) return;

        popup.classList.add("hidden");
        document.body.style.overflow = "";
    }

    document.querySelectorAll(".artist").forEach(el => {
        el.addEventListener("click", () => {
            openPopup(el.dataset.name, el.dataset.bio);
        });
    });

    if (closePopupBtn) closePopupBtn.addEventListener("click", closePopup);

    if (popup) {
        popup.addEventListener("click", (e) => {
            if (e.target === popup) closePopup();
        });
    }

    /* ======================
       SAFETY RESET
    ====================== */

    window.addEventListener("beforeunload", () => {
        document.body.style.overflow = "";
    });

});
