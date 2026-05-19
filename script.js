const artists = [
    {
        id: "anger",
        name: "Anger Uschis",
        bio: "Bio Text...",
        image: "images/anger-uschis.png",
        links: {
            spotify: "",
            applemusic: "",
            deezer: "",
            amazonmusic: "",
            soundcloud: "",
            bandlab: "",
            tiktok: "",
            youtube: "",
            youtubemusic: "",
            beatport: ""
        }
    },
    {
        id: "silber",
        name: "Silberstreif",
        bio: "Bio Text...",
        image: "images/silberstreif.png",
        links: {
            spotify: "https://spotify.com",
            youtube: "https://youtube.com"
        }
    }
];

const icons = {
    spotify: "icons/spotify.svg",
    applemusic: "icons/applemusic.svg",
    deezer: "icons/deezer.svg",
    amazonmusic: "icons/amazonmusic.svg",
    soundcloud: "icons/soundcloud.svg",
    bandlab: "icons/bandlab.svg",
    tiktok: "icons/tiktok.svg",
    youtube: "icons/youtube.svg",
    youtubemusic: "icons/youtubemusic.svg",
    beatport: "icons/beatport.svg"
};

const iconOrder = [
    "spotify",
    "applemusic",
    "deezer",
    "amazonmusic",
    "soundcloud",
    "bandlab",
    "tiktok",
    "youtube",
    "youtubemusic",
    "beatport"
];

/* -------------------------
   STATE SAFETY FLAGS
-------------------------- */
let introClosed = false;
let popupOpen = false;

/* -------------------------
   ARTIST GRID
-------------------------- */
function renderGrid() {
    const grid = document.getElementById("artistGrid");
    if (!grid) return;

    grid.innerHTML = "";

    artists.forEach(a => {
        const img = document.createElement("img");
        img.src = a.image;
        img.className = "artist";

        img.onerror = () => {
            img.src = "images/placeholder.png";
        };

        img.onclick = () => openPopup(a.id);

        grid.appendChild(img);
    });

    // STRICT PLACEHOLDER RULE
    if (artists.length % 2 !== 0) {
        const ph = document.createElement("img");
        ph.src = "images/placeholder.png";
        ph.className = "artist placeholder";

        ph.onclick = null;

        ph.style.pointerEvents = "none";
        ph.style.opacity = "0.4";

        grid.appendChild(ph);
    }
}

/* -------------------------
   POPUP SYSTEM
-------------------------- */
function openPopup(id) {
    const a = artists.find(x => x.id === id);
    if (!a) return;

    const popup = document.getElementById("popup");
    if (!popup) return;

    popupOpen = true;

    document.getElementById("popupImage").src = a.image;
    document.getElementById("popupName").textContent = a.name;
    document.getElementById("popupBio").textContent = a.bio || "";

    const container = document.getElementById("popupIcons");
    container.innerHTML = "";

    iconOrder.forEach(k => {
        const link = a.links?.[k];

        if (typeof link === "string" && link.trim() !== "") {
            const el = document.createElement("a");
            el.href = link;
            el.target = "_blank";
            el.rel = "noopener noreferrer";

            const img = document.createElement("img");
            img.src = icons[k];

            el.appendChild(img);
            container.appendChild(el);
        }
    });

    popup.classList.remove("hidden");

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
}

function closePopup() {
    const popup = document.getElementById("popup");
    if (!popup) return;

    popupOpen = false;

    popup.classList.add("hidden");

    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
}

/* -------------------------
   POPUP EVENTS
-------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    renderGrid();

    const closeBtn = document.getElementById("closePopup");
    if (closeBtn) closeBtn.onclick = closePopup;
});

/* -------------------------
   INTRO SYSTEM
-------------------------- */
const video = document.getElementById("introVideo");
const intro = document.getElementById("intro");

if (video) {
    video.src = window.innerWidth < 768
        ? "videos/intro-mobile.mp4"
        : "videos/intro-web.mp4";

    window.addEventListener("load", () => {
        const playAttempt = video.play();

        if (playAttempt !== undefined) {
            playAttempt.catch(() => {
                video.muted = true;
                video.play().catch(() => {});
            });
        }
    });

    video.onended = () => {
        if (intro) intro.remove();
        introClosed = true;
    };
}

const closeIntroBtn = document.getElementById("closeIntro");
if (closeIntroBtn) {
    closeIntroBtn.onclick = () => {
        if (intro) intro.remove();
        introClosed = true;
    };
}

const muteBtn = document.getElementById("muteBtn");
if (muteBtn && video) {
    muteBtn.onclick = () => {
        video.muted = !video.muted;
        muteBtn.textContent = video.muted ? "Unmute" : "Mute";
    };
}

/* -------------------------
   HARD SAFETY FALLBACK
-------------------------- */
window.addEventListener("error", () => {
    // verhindert UI deadlocks
    const intro = document.getElementById("intro");
    if (intro && introClosed) intro.remove();

    const popup = document.getElementById("popup");
    if (popup && !popup.classList.contains("hidden")) {
        closePopup();
    }
});
