const artistsData = {
    'skaramush-vandango': {
        name: 'SkaRamush Vandango',
        bio: 'DJ / Producer / Label',
        image: 'images/skaramush-vandango.png',
        links: {
            spotify: 'https://open.spotify.com',
            soundcloud: 'https://soundcloud.com'
        }
    },
    'silberstreif': {
        name: 'Silberstreif',
        bio: '',
        image: 'images/silberstreif.png',
        links: {
            spotify: 'https://open.spotify.com'
        }
    }
};

let video = document.getElementById("introVideo");
let popup = document.getElementById("videoPopup");

function closeVideoPopup() {
    popup.classList.add("hidden");
    video.pause();
}

function toggleMute() {
    video.muted = !video.muted;
}

function openArtistModal(id) {
    const a = artistsData[id];

    document.getElementById("modalArtistImage").src = a.image;
    document.getElementById("modalArtistName").innerText = a.name;
    document.getElementById("modalArtistBio").innerText = a.bio;

    const box = document.getElementById("modalStreamingLinks");
    box.innerHTML = "";

    for (let k in a.links) {
        let btn = document.createElement("a");
        btn.href = a.links[k];
        btn.innerText = k;
        btn.className = "streaming-btn";
        btn.target = "_blank";
        box.appendChild(btn);
    }

    document.getElementById("artistModal").classList.remove("hidden");
}

function closeArtistModal() {
    document.getElementById("artistModal").classList.add("hidden");
}

window.openArtistModal = openArtistModal;
window.closeArtistModal = closeArtistModal;
window.closeVideoPopup = closeVideoPopup;
window.toggleMute = toggleMute;
