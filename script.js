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

const intro = document.getElementById("intro");
const introVideo = document.getElementById("introVideo");
const closeIntroBtn = document.getElementById("closeIntro");
const muteBtn = document.getElementById("muteBtn");

const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopup");

const popupImage = document.getElementById("popupImage");
const popupName = document.getElementById("popupName");
const popupBio = document.getElementById("popupBio");
const popupIcons = document.getElementById("popupIcons");

const artistGrid = document.getElementById("artistGrid");

const newsletterForm = document.getElementById("newsletterForm");

let introClosed = false;

/* -------------------------------- */
/* BODY LOCK */
/* -------------------------------- */

function lockScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
}

function unlockScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
}

/* -------------------------------- */
/* INTRO */
/* -------------------------------- */

function getIntroVideoSource() {
    return window.innerWidth < 768
        ? "videos/intro-mobile.mp4"
        : "videos/intro-web.mp4";
}

function closeIntro() {

    if (introClosed) return;

    introClosed = true;

    if (!intro) return;

    intro.classList.add("hidden");

    try {
        introVideo.pause();
        introVideo.currentTime = 0;
    } catch (err) {
        console.error(err);
    }

    unlockScroll();
}

async function initIntro() {

    if (!intro || !introVideo) return;

    lockScroll();

    introVideo.src = getIntroVideoSource();

    introVideo.load();

    try {

        await introVideo.play();

    } catch (err) {

        try {

            introVideo.muted = true;
            await introVideo.play();

        } catch (secondErr) {

            console.error(secondErr);

            setTimeout(() => {
                closeIntro();
            }, 1200);
        }
    }
}

function updateMuteButton() {

    if (!muteBtn || !introVideo) return;

    muteBtn.textContent = introVideo.muted
        ? "Sound On"
        : "Muted";
}

if (introVideo) {

    introVideo.addEventListener("ended", () => {
        closeIntro();
    });

    introVideo.addEventListener("error", () => {
        closeIntro();
    });
}

if (closeIntroBtn) {

    closeIntroBtn.addEventListener("click", () => {
        closeIntro();
    });
}

if (muteBtn) {

    muteBtn.addEventListener("click", () => {

        introVideo.muted = !introVideo.muted;

        updateMuteButton();
    });
}

/* -------------------------------- */
/* ARTIST GRID */
/* -------------------------------- */

function createArtistCard(artist) {

    const card = document.createElement("button");

    card.type = "button";
    card.className = "artist-card";
    card.setAttribute("aria-label", artist.name);

    const image = document.createElement("img");

    image.src = artist.image;
    image.alt = artist.name;
    image.className = "artist-image";
    image.draggable = false;
    image.loading = "lazy";

    card.appendChild(image);

    card.addEventListener("click", () => {
        openPopup(artist.id);
    });

    return card;
}

function createPlaceholderCard() {

    const wrapper = document.createElement("div");

    wrapper.className = "artist-card placeholder";

    const image = document.createElement("img");

    image.src = "images/placeholder.png";
    image.alt = "";
    image.className = "artist-image";
    image.draggable = false;
    image.loading = "lazy";

    wrapper.appendChild(image);

    return wrapper;
}

function renderGrid() {

    if (!artistGrid) return;

    artistGrid.innerHTML = "";

    artists.forEach((artist) => {

        const card = createArtistCard(artist);

        artistGrid.appendChild(card);
    });

    if (artists.length % 2 !== 0) {

        const placeholder = createPlaceholderCard();

        artistGrid.appendChild(placeholder);
    }
}

/* -------------------------------- */
/* POPUP */
/* -------------------------------- */

function openPopup(id) {

    const artist = artists.find((entry) => entry.id === id);

    if (!artist || !popup) return;

    popupImage.src = artist.image;
    popupImage.alt = artist.name;

    popupName.textContent = artist.name;
    popupBio.textContent = artist.bio;

    popupIcons.innerHTML = "";

    iconOrder.forEach((key) => {

        const link = artist.links[key];

        if (!link || !icons[key]) return;

        const anchor = document.createElement("a");

        anchor.href = link;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.setAttribute("aria-label", key);

        const icon = document.createElement("img");

        icon.src = icons[key];
        icon.alt = key;
        icon.loading = "lazy";

        anchor.appendChild(icon);

        popupIcons.appendChild(anchor);
    });

    popup.classList.remove("hidden");

    popup.setAttribute("aria-hidden", "false");

    lockScroll();
}

function closePopup() {

    if (!popup) return;

    popup.classList.add("hidden");

    popup.setAttribute("aria-hidden", "true");

    popupIcons.innerHTML = "";

    unlockScroll();
}

if (closePopupBtn) {

    closePopupBtn.addEventListener("click", () => {
        closePopup();
    });
}

if (popup) {

    popup.addEventListener("click", (event) => {

        if (event.target === popup) {
            closePopup();
        }
    });
}

/* -------------------------------- */
/* GLOBAL EVENTS */
/* -------------------------------- */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closePopup();
        closeIntro();
    }
});

window.addEventListener("resize", () => {

    if (!introClosed && introVideo) {

        const currentSource = introVideo.src;
        const newSource = getIntroVideoSource();

        if (!currentSource.includes(newSource)) {

            introVideo.src = newSource;

            introVideo.load();

            introVideo.play().catch(() => {});
        }
    }
});

/* -------------------------------- */
/* NEWSLETTER */
/* -------------------------------- */

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (event) => {

        event.preventDefault();
    });
}

/* -------------------------------- */
/* INIT */
/* -------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

    renderGrid();

    updateMuteButton();

    initIntro();
});
