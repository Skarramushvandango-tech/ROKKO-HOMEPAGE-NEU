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

function renderGrid() {
    const grid = document.getElementById("artistGrid");
    grid.innerHTML = "";

    artists.forEach(a => {
        const img = document.createElement("img");
        img.src = a.image;
        img.className = "artist";
        img.onclick = () => openPopup(a.id);
        grid.appendChild(img);
    });

    if (artists.length % 2 !== 0) {
        const ph = document.createElement("img");
        ph.src = "images/placeholder.png";
        ph.className = "artist placeholder";
        grid.appendChild(ph);
    }
}

function openPopup(id) {
    const a = artists.find(x => x.id === id);
    if (!a) return;

    document.getElementById("popupImage").src = a.image;
    document.getElementById("popupName").textContent = a.name;
    document.getElementById("popupBio").textContent = a.bio;

    const container = document.getElementById("popupIcons");
    container.innerHTML = "";

    iconOrder.forEach(k => {
        const link = a.links[k];
        if (link) {
            const el = document.createElement("a");
            el.href = link;
            el.target = "_blank";

            const img = document.createElement("img");
            img.src = icons[k];

            el.appendChild(img);
            container.appendChild(el);
        }
    });

    document.getElementById("popup").classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
}

document.getElementById("closePopup").onclick = closePopup;

const video = document.getElementById("introVideo");

video.src = window.innerWidth < 768
    ? "videos/intro-mobile.mp4"
    : "videos/intro-web.mp4";

window.addEventListener("load", () => {
    video.play().catch(() => {
        video.muted = true;
        video.play();
    });
});

video.onended = () => {
    document.getElementById("intro").remove();
};

document.getElementById("closeIntro").onclick = () => {
    document.getElementById("intro").remove();
};

document.getElementById("muteBtn").onclick = () => {
    video.muted = !video.muted;
};

document.addEventListener("DOMContentLoaded", renderGrid);
