// Artist Data with full descriptions
const artistsData = {
    'skaramush-vandango': {
        name: 'SkaRamush Vandango',
        bio: 'SkaRamush ist der LabelChef von ROKKO! Records und auch der Writer, Produzent und DJ. Er ist bereits seit 2004 als Produzent und DJ unterwegs und arbeitet gerade an seinem Album: Neurodiverse Sound Design.',
        image: 'images/skaramush-vandango.png',
        links: {
            spotify: 'https://open.spotify.com/artist/PLACEHOLDER',
            appleMusic: 'https://music.apple.com/artist/PLACEHOLDER',
            amazon: 'https://music.amazon.com/artists/PLACEHOLDER',
            beatport: 'https://www.beatport.com/artist/PLACEHOLDER',
            youtube: 'https://www.youtube.com/@PLACEHOLDER'
        }
    },
    'silberstreif': {
        name: 'Silberstreif',
        bio: 'Ihre Single flammend Herz avanciert bereits in kleineren Clubs zum Sommerhit und liefert den Soundtrack zum süßen Schmerz der sommerlichen Liebschaften.',
        image: 'images/silberstreif.png',
        links: {
            spotify: 'https://open.spotify.com/artist/PLACEHOLDER',
            appleMusic: 'https://music.apple.com/artist/PLACEHOLDER',
            amazon: 'https://music.amazon.com/artists/PLACEHOLDER',
            beatport: 'https://www.beatport.com/artist/PLACEHOLDER',
            youtube: 'https://www.youtube.com/@PLACEHOLDER'
        }
    },
    'anger-uschis': {
        name: 'Anger Uschis',
        bio: 'Mit ihrem Debütalbum "politisch inkontinent" liefern die Anger Uschis ein politisch orientiertes Mahnmal gegen Hass, Hetze und Faschismus.',
        image: 'images/anger-uschis.png',
        links: {
            spotify: 'https://open.spotify.com/artist/PLACEHOLDER',
            appleMusic: 'https://music.apple.com/artist/PLACEHOLDER',
            amazon: 'https://music.amazon.com/artists/PLACEHOLDER',
            beatport: 'https://www.beatport.com/artist/PLACEHOLDER',
            youtube: 'https://www.youtube.com/@PLACEHOLDER'
        }
    },
    'henri-bellieu': {
        name: 'Henri Bellieu',
        bio: 'Der Franzose liefert mit seiner Single la Femme bereits seine zweite Ode an die Weiblichkeit und feierte mit petite Colibri im letzten Jahr einen charmanten Einstieg in die Welt der Musik.',
        image: 'images/henri-bellieu.png',
        links: {
            spotify: 'https://open.spotify.com/artist/PLACEHOLDER',
            appleMusic: 'https://music.apple.com/artist/PLACEHOLDER',
            amazon: 'https://music.amazon.com/artists/PLACEHOLDER',
            beatport: 'https://www.beatport.com/artist/PLACEHOLDER',
            youtube: 'https://www.youtube.com/@PLACEHOLDER'
        }
    },
    'fleur-et-beunie': {
        name: 'Fléur et Beunié',
        bio: 'Das französische House-Duo lieferte mit Feu Léger 2025 eine French/House Hymne der extraklasse. Selbst die Remixe überzeugen leichtfüßig.',
        image: 'images/fleur-et-beunie.png',
        links: {
            spotify: 'https://open.spotify.com/artist/PLACEHOLDER',
            appleMusic: 'https://music.apple.com/artist/PLACEHOLDER',
            amazon: 'https://music.amazon.com/artists/PLACEHOLDER',
            beatport: 'https://www.beatport.com/artist/PLACEHOLDER',
            youtube: 'https://www.youtube.com/@PLACEHOLDER'
        }
    },
    'sukram': {
        name: 'SUKRAM',
        bio: 'Der böse Bube mit der großen Klappe liefert mit Deutschland du mein Fiebertraum eine Ansage an das hier und jetzt und nimmt dabei kein Blatt vor den Mund.',
        image: 'images/sukram.png',
        links: {
            spotify: 'https://open.spotify.com/artist/PLACEHOLDER',
            appleMusic: 'https://music.apple.com/artist/PLACEHOLDER',
            amazon: 'https://music.amazon.com/artists/PLACEHOLDER',
            beatport: 'https://www.beatport.com/artist/PLACEHOLDER',
            youtube: 'https://www.youtube.com/@PLACEHOLDER'
        }
    }
};

// ========================================
// VIDEO MODAL FUNCTIONALITY
// ========================================

function closeVideoPopup() {
    const videoPopup = document.getElementById('videoPopup');
    if (videoPopup) {
        videoPopup.classList.add('hidden');
        const video = document.getElementById('introVideo');
        if (video) {
            video.pause();
        }
    }
}

function toggleMute() {
    const video = document.getElementById('introVideo');
    const muteBtn = document.getElementById('muteBtn');
    
    if (!video || !muteBtn) return;
    
    if (video.muted) {
        video.muted = false;
        muteBtn.textContent = '🔊 Mute';
    } else {
        video.muted = true;
        muteBtn.textContent = '🔇 Unmute';
    }
}

// ========================================
// ARTIST MODAL FUNCTIONALITY
// ========================================

function openArtistModal(artistId) {
    const artist = artistsData[artistId];
    if (!artist) return;

    const modal = document.getElementById('artistModal');
    const nameEl = document.getElementById('modalArtistName');
    const imageEl = document.getElementById('modalArtistImage');
    const bioEl = document.getElementById('modalArtistBio');

    if (!modal || !nameEl || !imageEl || !bioEl) return;

    nameEl.textContent = artist.name;
    imageEl.src = artist.image;
    bioEl.textContent = artist.bio;

    // Update streaming links
    const spotifyBtn = document.querySelector('.streaming-btn.spotify');
    const appleMusicBtn = document.querySelector('.streaming-btn.apple-music');
    const amazonBtn = document.querySelector('.streaming-btn.amazon');
    const beatportBtn = document.querySelector('.streaming-btn.beatport');
    const youtubeBtn = document.querySelector('.streaming-btn.youtube');

    if (spotifyBtn) spotifyBtn.href = artist.links.spotify;
    if (appleMusicBtn) appleMusicBtn.href = artist.links.appleMusic;
    if (amazonBtn) amazonBtn.href = artist.links.amazon;
    if (beatportBtn) beatportBtn.href = artist.links.beatport;
    if (youtubeBtn) youtubeBtn.href = artist.links.youtube;

    modal.classList.remove('hidden');
}

function closeArtistModal() {
    const modal = document.getElementById('artistModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// ========================================
// NEWSLETTER FUNCTIONALITY
// ========================================

function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');
    const checkbox = form.querySelector('input[type="checkbox"]');

    if (!emailInput || !checkbox) return;

    const email = emailInput.value;

    if (!email || !checkbox.checked) {
        alert('Bitte fülle alle Felder aus!');
        return;
    }

    alert(`Danke für die Anmeldung mit: ${email} 🎵`);
    form.reset();
}

// ========================================
// INITIALIZATION ON PAGE LOAD
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Video popup
    const videoPopup = document.getElementById('videoPopup');
    if (videoPopup) {
        setTimeout(() => {
            videoPopup.classList.remove('hidden');
        }, 500);

        videoPopup.addEventListener('click', (e) => {
            if (e.target === videoPopup) {
                closeVideoPopup();
            }
        });
    }

    // Artist modal outside click
    const artistModal = document.getElementById('artistModal');
    if (artistModal) {
        artistModal.addEventListener('click', (e) => {
            if (e.target === artistModal) {
                closeArtistModal();
            }
        });
    }

    // ESC key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const videoPopup = document.getElementById('videoPopup');
            const artistModal = document.getElementById('artistModal');
            
            if (videoPopup && !videoPopup.classList.contains('hidden')) {
                closeVideoPopup();
            }
            if (artistModal && !artistModal.classList.contains('hidden')) {
                closeArtistModal();
            }
        }
    });
});

// ========================================
// CONSOLE WELCOME
// ========================================

console.log('%c🎵 Willkommen zu ROKKO! Records 🎵', 'font-size: 24px; color: #E7760D; font-weight: bold;');
console.log('%cDas Label für neurodiverse Künstler aus dem Spektrum', 'font-size: 14px; color: #E7760D;');
