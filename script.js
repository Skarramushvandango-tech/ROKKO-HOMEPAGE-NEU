// ========================================
// ARTIST DATA
// ========================================

const artistsData = {
    'skaramush-vandango': {
        name: 'SkaRamush Vandango',
        bio: 'SkaRamush ist der LabelChef von ROKKO! Records und auch der Writer, Produzent und DJ. Er ist bereits seit 2004 als Produzent und DJ unterwegs und arbeitet gerade an seinem Album: NeuroCentric, welches sich um sein Leben als Autist beschäftigen wird.',
        image: 'images/skaramush-vandango.png',
        links: {
            spotify: 'https://open.spotify.com/artist/PLACEHOLDER',
            apple: 'https://music.apple.com/artist/PLACEHOLDER',
            amazon: 'https://www.amazon.com/music/artist/PLACEHOLDER',
            beatport: 'https://www.beatport.com/artist/PLACEHOLDER',
            youtube: 'https://www.youtube.com/channel/PLACEHOLDER'
        }
    },
    'silberstreif': {
        name: 'Silberstreif',
        bio: 'Ihre Single flammend Herz avanciert bereits in kleineren Clubs zum Sommerhit und liefert den Soundtrack zum süßen Schmerz der sommerlichen Liebschaften.',
        image: 'images/silberstreif.png',
        links: {
            spotify: 'https://open.spotify.com/artist/PLACEHOLDER',
            apple: 'https://music.apple.com/artist/PLACEHOLDER',
            amazon: 'https://www.amazon.com/music/artist/PLACEHOLDER',
            beatport: 'https://www.beatport.com/artist/PLACEHOLDER',
            youtube: 'https://www.youtube.com/channel/PLACEHOLDER'
        }
    },
    'anger-uschis': {
        name: 'Anger Uschis',
        bio: 'Mit ihrem Debütalbum „politisch inkontinent" liefern die Anger Uschis ein politisch orientiertes Mahnmal gegen Hass, Hetze und Faschismus.',
        image: 'images/anger-uschis.png',
        links: {
            spotify: 'https://open.spotify.com/artist/PLACEHOLDER',
            apple: 'https://music.apple.com/artist/PLACEHOLDER',
            amazon: 'https://www.amazon.com/music/artist/PLACEHOLDER',
            beatport: 'https://www.beatport.com/artist/PLACEHOLDER',
            youtube: 'https://www.youtube.com/channel/PLACEHOLDER'
        }
    },
    'henri-bellieu': {
        name: 'Henri Bellieu',
        bio: 'Der Franzose liefert mit seiner Single la Femme bereits seine zweite Ode an die Weiblichkeit und feierte mit petite Colibri im letzten Jahr einen charmanten Einstieg in die Welt der Popmusik.',
        image: 'images/henri-bellieu.png',
        links: {
            spotify: 'https://open.spotify.com/artist/PLACEHOLDER',
            apple: 'https://music.apple.com/artist/PLACEHOLDER',
            amazon: 'https://www.amazon.com/music/artist/PLACEHOLDER',
            beatport: 'https://www.beatport.com/artist/PLACEHOLDER',
            youtube: 'https://www.youtube.com/channel/PLACEHOLDER'
        }
    },
    'fleur-et-beunie': {
        name: 'Fléur et Beunié',
        bio: 'Das französische House-Duo lieferte mit Feu Léger 2025 eine French/House Hymne der extraklasse. Selbst die Remixe überzeugen leichtfüßig.',
        image: 'images/fleur-et-beunie.png',
        links: {
            spotify: 'https://open.spotify.com/artist/PLACEHOLDER',
            apple: 'https://music.apple.com/artist/PLACEHOLDER',
            amazon: 'https://www.amazon.com/music/artist/PLACEHOLDER',
            beatport: 'https://www.beatport.com/artist/PLACEHOLDER',
            youtube: 'https://www.youtube.com/channel/PLACEHOLDER'
        }
    },
    'sukram': {
        name: 'SUKRAM',
        bio: 'Der böse Bube mit der großen Klappe liefert mit Deutschland du mein Fiebertraum eine Ansage an das hier und jetzt und nimmt dabei kein Blatt vor den Mund.',
        image: 'images/sukram.png',
        links: {
            spotify: 'https://open.spotify.com/artist/PLACEHOLDER',
            apple: 'https://music.apple.com/artist/PLACEHOLDER',
            amazon: 'https://www.amazon.com/music/artist/PLACEHOLDER',
            beatport: 'https://www.beatport.com/artist/PLACEHOLDER',
            youtube: 'https://www.youtube.com/channel/PLACEHOLDER'
        }
    },
    'skank-schablonski': {
        name: 'Skank Schablonski',
        bio: '',
        image: 'images/skank-schablonski.png',
        links: {
            spotify: 'https://open.spotify.com/artist/PLACEHOLDER',
            apple: 'https://music.apple.com/artist/PLACEHOLDER',
            amazon: 'https://www.amazon.com/music/artist/PLACEHOLDER',
            beatport: 'https://www.beatport.com/artist/PLACEHOLDER',
            youtube: 'https://www.youtube.com/channel/PLACEHOLDER'
        }
    },
    'anthony-sinclair': {
        name: 'Anthony Sinclair',
        bio: 'Eine Zeitreise zurück in die Synthesizer regierenden, achtziger Jahre. Neonfarbener Herzschmerz mit eklektischer Warhol Attitüde.',
        image: 'images/anthony-sinclair.png',
        links: {
            spotify: 'https://open.spotify.com/artist/PLACEHOLDER',
            apple: 'https://music.apple.com/artist/PLACEHOLDER',
            amazon: 'https://www.amazon.com/music/artist/PLACEHOLDER',
            beatport: 'https://www.beatport.com/artist/PLACEHOLDER',
            youtube: 'https://www.youtube.com/channel/PLACEHOLDER'
        }
    }
};

// ========================================
// YOUTUBE VIDEOS
// Replace PLACEHOLDER with your actual YouTube video IDs
// e.g. 'dQw4w9WgXcQ' from https://www.youtube.com/watch?v=dQw4w9WgXcQ
// ========================================

const youtubeVideos = [
    { id: 'PLACEHOLDER', title: 'Video 1' },
    { id: 'PLACEHOLDER', title: 'Video 2' },
    { id: 'PLACEHOLDER', title: 'Video 3' },
    { id: 'PLACEHOLDER', title: 'Video 4' }
];

// ========================================
// VIDEO POPUP FUNCTIONALITY
// ========================================

const videoPopup = document.getElementById('videoPopup');
const introVideo = document.getElementById('introVideo');
const muteBtn = document.getElementById('muteBtn');

function closeVideoPopup() {
    videoPopup.classList.add('hidden');
    if (introVideo) {
        introVideo.pause();
        introVideo.currentTime = 0;
    }
}

function toggleMute() {
    if (!introVideo) return;
    if (introVideo.muted) {
        introVideo.muted = false;
        muteBtn.textContent = '🔊 Ton an';
    } else {
        introVideo.muted = true;
        muteBtn.textContent = '🔇 Ton aus';
    }
}

if (videoPopup) {
    videoPopup.addEventListener('click', function (e) {
        if (e.target === this) closeVideoPopup();
    });
}

// ========================================
// ARTIST MODAL FUNCTIONALITY
// ========================================

const artistModal = document.getElementById('artistModal');
const modalArtistImage = document.getElementById('modalArtistImage');
const modalArtistName = document.getElementById('modalArtistName');
const modalArtistBio = document.getElementById('modalArtistBio');
const modalStreamingLinks = document.getElementById('modalStreamingLinks');

const streamingPlatforms = [
    { key: 'spotify',  label: 'Spotify',      className: 'spotify-btn'  },
    { key: 'apple',    label: 'Apple Music',   className: 'apple-btn'    },
    { key: 'amazon',   label: 'Amazon Music',  className: 'amazon-btn'   },
    { key: 'beatport', label: 'Beatport',      className: 'beatport-btn' },
    { key: 'youtube',  label: 'YouTube',       className: 'youtube-btn'  }
];

function openArtistModal(artistKey) {
    const artist = artistsData[artistKey];
    if (!artist) return;

    modalArtistImage.src = artist.image;
    modalArtistName.textContent = artist.name;
    modalArtistBio.textContent = artist.bio || '';

    // Build buttons dynamically — only show links that are not placeholders
    modalStreamingLinks.innerHTML = '';
    if (artist.links) {
        streamingPlatforms.forEach(function (platform) {
            const url = artist.links[platform.key];
            if (url && !url.includes('PLACEHOLDER')) {
                const btn = document.createElement('a');
                btn.href = url;
                btn.target = '_blank';
                btn.rel = 'noopener noreferrer';
                btn.className = 'streaming-btn ' + platform.className;
                btn.textContent = platform.label;
                modalStreamingLinks.appendChild(btn);
            }
        });
    }

    artistModal.classList.remove('hidden');
}

function closeArtistModal() {
    artistModal.classList.add('hidden');
}

if (artistModal) {
    artistModal.addEventListener('click', function (e) {
        if (e.target === this) closeArtistModal();
    });
}

// ========================================
// MERCH MODAL FUNCTIONALITY
// ========================================

const merchModal = document.getElementById('merchModal');

function openMerchModal() {
    if (merchModal) merchModal.classList.remove('hidden');
}

function closeMerchModal() {
    if (merchModal) merchModal.classList.add('hidden');
}

if (merchModal) {
    merchModal.addEventListener('click', function (e) {
        if (e.target === this) closeMerchModal();
    });
}

// ========================================
// YOUTUBE GRID
// ========================================

function buildYoutubeGrid() {
    const grid = document.getElementById('youtubeGrid');
    if (!grid) return;

    grid.innerHTML = '';

    youtubeVideos.forEach(function (video) {
        if (!video.id || video.id === 'PLACEHOLDER') return;

        const item = document.createElement('div');
        item.className = 'youtube-item';

        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/' + video.id;
        iframe.title = video.title;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        item.appendChild(iframe);
        grid.appendChild(item);
    });
}

// ========================================
// NEWSLETTER
// ========================================

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const emailInput = form.querySelector('input[type="email"]');
    const checkbox = form.querySelector('input[type="checkbox"]');

    if (!emailInput.value) {
        alert('Bitte gib deine E-Mail-Adresse ein!');
        return;
    }
    if (!checkbox.checked) {
        alert('Bitte akzeptiere die Datenschutzerklärung!');
        return;
    }

    alert('Danke! ' + emailInput.value + ' wurde zum Newsletter hinzugefügt. 🎵');
    form.reset();
}

// ========================================
// ESC KEY — closes any open modal
// ========================================

document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (videoPopup && !videoPopup.classList.contains('hidden')) closeVideoPopup();
    if (artistModal && !artistModal.classList.contains('hidden')) closeArtistModal();
    if (merchModal && !merchModal.classList.contains('hidden')) closeMerchModal();
});
// ========================================
// SCROLL REVEAL
// ========================================

function initScrollReveal() {
   ... (scroll reveal code)
}

// ========================================
// INIT
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    buildYoutubeGrid();
    initScrollReveal();
    ... (youtube observer)
});

console.log('%c🎵 Willkommen zu ROKKO! Records 🎵', ...);
console.log('%cDas Label für neurodiverse Künstler...', ...);


