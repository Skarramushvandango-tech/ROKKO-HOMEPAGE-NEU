// ===============================
// ROKKO! RECORDS - CLEAN SCRIPT
// ===============================

// -------------------------------
// ARTIST DATA (single source)
// -------------------------------
const artistsData = {
    'skaramush-vandango': {
        name: 'SkaRamush Vandango',
        bio: 'Labelchef, Producer, DJ',
        image: 'images/skaramush-vandango.png',
        links: {
            facebook: 'https://www.facebook.com/chose.your.username',
            soundcloud: 'https://on.soundcloud.com/Ro413zcJKImIS42aKp',
            instagram: 'https://www.instagram.com/skaramush_vandango',
            tiktok: 'https://www.tiktok.com/@skaramush_vandango'
        }
    },
    'silberstreif': {
        name: 'Silberstreif',
        bio: 'Flammend Herz',
        image: 'images/silberstreif.png',
        links: {
            spotify: 'https://open.spotify.com/artist/6IRLmlTvLsC41s71PiI5AW',
            apple: 'https://music.apple.com/de/album/flammend-herz-single',
            amazon: 'https://amazon.de/music'
        }
    },
    'anger-uschis': {
        name: 'Anger Uschis',
        bio: 'Politisch inkontinent',
        image: 'images/anger-uschis.png',
        links: {
            spotify: 'https://open.spotify.com/',
            apple: 'https://music.apple.com/',
            soundcloud: 'https://soundcloud.com/',
            youtube: 'https://youtube.com/'
        }
    },
    'henri-bellieu': {
        name: 'Henri Bellieu',
        bio: 'French Pop',
        image: 'images/henri-bellieu.png',
        links: {
            spotify: 'https://open.spotify.com/',
            apple: 'https://music.apple.com/'
        }
    },
    'fleur-et-beunie': {
        name: 'Fléur et Beunie',
        bio: 'French House',
        image: 'images/fleur-et-beunie.png',
        links: {
            spotify: 'https://open.spotify.com/',
            soundcloud: 'https://soundcloud.com/'
        }
    },
    'sukram': {
        name: 'SUKRAM',
        bio: 'Deutschland du mein Fiebertraum',
        image: 'images/sukram.png',
        links: {
            spotify: 'https://open.spotify.com/',
            apple: 'https://music.apple.com/'
        }
    },
    'skank-schablonski': {
        name: 'Skank Schablonski',
        bio: 'Ruhrpott Rebel',
        image: 'images/skank-schablonski.png',
        links: {
            spotify: 'https://open.spotify.com/',
            soundcloud: 'https://soundcloud.com/'
        }
    },
    'anthony-sinclair': {
        name: 'Anthony Sinclair',
        bio: 'Synthwave',
        image: 'images/anthony-sinclair.png',
        links: {}
    }
};

// -------------------------------
// PLATFORM LABELS
// -------------------------------
const platformLabels = {
    spotify: "Spotify",
    apple: "Apple Music",
    amazon: "Amazon",
    soundcloud: "SoundCloud",
    beatport: "Beatport",
    youtube: "YouTube",
    facebook: "Facebook",
    instagram: "Instagram",
    tiktok: "TikTok"
};

// -------------------------------
// ARTIST MODAL
// -------------------------------
function openArtistModal(id) {
    const artist = artistsData[id];
    if (!artist) return;

    const modal = document.getElementById('artistModal');
    const img = document.getElementById('modalArtistImage');
    const name = document.getElementById('modalArtistName');
    const bio = document.getElementById('modalArtistBio');
    const linksBox = document.getElementById('modalStreamingLinks');

    if (!modal || !img || !name || !bio || !linksBox) return;

    img.src = artist.image;
    name.textContent = artist.name;
    bio.textContent = artist.bio || "";

    linksBox.innerHTML = "";

    Object.keys(artist.links || {}).forEach(key => {
        const url = artist.links[key];
        if (!url) return;

        const a = document.createElement("a");
        a.className = "streaming-btn";
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = platformLabels[key] || key;

        linksBox.appendChild(a);
    });

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeArtistModal() {
    const modal = document.getElementById('artistModal');
    if (!modal) return;

    modal.classList.add("hidden");
    document.body.style.overflow = "";
}

// -------------------------------
// VIDEO POPUP
// -------------------------------
function closeVideoPopup() {
    const popup = document.getElementById('videoPopup');
    const video = document.getElementById('introVideo');

    if (popup) popup.classList.add("hidden");
    if (video) {
        video.pause();
        video.currentTime = 0;
    }

    document.body.style.overflow = "";
}

function toggleMute() {
    const video = document.getElementById('introVideo');
    const btn = document.getElementById('muteBtn');

    if (!video || !btn) return;

    video.muted = !video.muted;
    btn.textContent = video.muted ? "🔇 Unmute" : "🔊 Mute";
}

// auto show video
function initVideo() {
    const popup = document.getElementById('videoPopup');
    if (!popup) return;

    setTimeout(() => {
        popup.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }, 500);
}

// -------------------------------
// MERCH
// -------------------------------
function toggleMerchShop() {
    const merch = document.getElementById('merchSection');
    if (!merch) return;

    merch.classList.toggle("open");

    if (merch.classList.contains("open")) {
        merch.scrollIntoView({ behavior: "smooth" });
    }
}

function closeMerchShop() {
    const merch = document.getElementById('merchSection');
    if (!merch) return;

    merch.classList.remove("open");
}

// -------------------------------
// YOUTUBE GRID
// -------------------------------
const youtubeIDs = [
    'NDTqSrEDmAg',
    'syk0pMR_3As',
    'AxdEv4-b6Bs',
    'ryfHdYA_VLU'
];

function buildYouTubeGrid() {
    const grid = document.getElementById("youtubeGrid");
    if (!grid) return;

    grid.innerHTML = "";

    youtubeIDs.forEach(id => {
        const div = document.createElement("div");
        div.className = "youtube-item";

        div.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${id}" 
                allowfullscreen>
            </iframe>
        `;

        grid.appendChild(div);
    });
}

// -------------------------------
// INIT
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
    initVideo();
    buildYouTubeGrid();
});

// expose for HTML onclick
window.openArtistModal = openArtistModal;
window.closeArtistModal = closeArtistModal;
window.closeVideoPopup = closeVideoPopup;
window.toggleMute = toggleMute;
window.toggleMerchShop = toggleMerchShop;
window.closeMerchShop = closeMerchShop;
