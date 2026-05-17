// Artist Data
const artistsData = {
    'skaramush-vandango': {
        name: 'SkaRamush Vandango',
        image: 'images/skaramush-vandango.png',
        bio: 'SkaRamush ist der LabelChef von ROKKO! Records und auch der Writer, Produzent und DJ. Er ist bereits seit 2004 als Produzent und DJ unterwegs und arbeitet gerade an seinem Album: NeuroCentric, welches sich um sein Leben als Autist beschäftigen wird.',
        links: {
            spotify: 'https://open.spotify.com/artist/YOUR_ARTIST_ID',
            appleMusic: 'https://music.apple.com/artist/YOUR_ARTIST_ID',
            amazon: 'https://music.amazon.com/artists/YOUR_ARTIST_ID',
            beatport: 'https://www.beatport.com/artist/YOUR_ARTIST_ID',
            youtube: 'https://www.youtube.com/@YOUR_CHANNEL'
        }
    },
    'silberstreif': {
        name: 'Silberstreif',
        image: 'images/silberstreif.png',
        bio: 'Ihre Single flammend Herz avanciert bereits in kleineren Clubs zum Sommerhit und liefert den Soundtrack zum süßen Schmerz der sommerlichen Liebschaften.',
        links: {
            spotify: 'https://open.spotify.com/artist/YOUR_ARTIST_ID',
            appleMusic: 'https://music.apple.com/artist/YOUR_ARTIST_ID',
            amazon: 'https://music.amazon.com/artists/YOUR_ARTIST_ID',
            beatport: 'https://www.beatport.com/artist/YOUR_ARTIST_ID',
            youtube: 'https://www.youtube.com/@YOUR_CHANNEL'
        }
    },
    'anger-uschis': {
        name: 'Anger Uschis',
        image: 'images/anger-uschis.png',
        bio: 'Mit ihrem Debütalbum "politisch inkontinent" liefern die Anger Uschis ein politisch orientiertes Mahnmal gegen Hass, Hetze und Faschismus.',
        links: {
            spotify: 'https://open.spotify.com/artist/YOUR_ARTIST_ID',
            appleMusic: 'https://music.apple.com/artist/YOUR_ARTIST_ID',
            amazon: 'https://music.amazon.com/artists/YOUR_ARTIST_ID',
            beatport: 'https://www.beatport.com/artist/YOUR_ARTIST_ID',
            youtube: 'https://www.youtube.com/@YOUR_CHANNEL'
        }
    },
    'henri-bellieu': {
        name: 'Henri Bellieu',
        image: 'images/henri-bellieu.png',
        bio: 'Der Franzose liefert mit seiner Single la Femme bereits seine zweite Ode an die Weiblichkeit und feierte mit petite Colibri im letzten Jahr einen charmanten Einstieg in die Welt der Popmusik.',
        links: {
            spotify: 'https://open.spotify.com/artist/YOUR_ARTIST_ID',
            appleMusic: 'https://music.apple.com/artist/YOUR_ARTIST_ID',
            amazon: 'https://music.amazon.com/artists/YOUR_ARTIST_ID',
            beatport: 'https://www.beatport.com/artist/YOUR_ARTIST_ID',
            youtube: 'https://www.youtube.com/@YOUR_CHANNEL'
        }
    },
    'fleur-et-beunie': {
        name: 'Fléur et Beunié',
        image: 'images/fleur-et-beunie.png',
        bio: 'Das französische House-Duo lieferte mit Feu Léger 2025 eine French/House Hymne der extraklasse. Selbst die Remixe überzeugen leichtfüßig.',
        links: {
            spotify: 'https://open.spotify.com/artist/YOUR_ARTIST_ID',
            appleMusic: 'https://music.apple.com/artist/YOUR_ARTIST_ID',
            amazon: 'https://music.amazon.com/artists/YOUR_ARTIST_ID',
            beatport: 'https://www.beatport.com/artist/YOUR_ARTIST_ID',
            youtube: 'https://www.youtube.com/@YOUR_CHANNEL'
        }
    },
    'sukram': {
        name: 'SUKRAM',
        image: 'images/sukram.png',
        bio: 'Der böse Bube mit der großen Klappe liefert mit Deutschland du mein Fiebertraum eine Ansage an das hier und jetzt und nimmt dabei kein Blatt vor den Mund.',
        links: {
            spotify: 'https://open.spotify.com/artist/YOUR_ARTIST_ID',
            appleMusic: 'https://music.apple.com/artist/YOUR_ARTIST_ID',
            amazon: 'https://music.amazon.com/artists/YOUR_ARTIST_ID',
            beatport: 'https://www.beatport.com/artist/YOUR_ARTIST_ID',
            youtube: 'https://www.youtube.com/@YOUR_CHANNEL'
        }
    }
};

// Video Popup Handler
function initVideoPopup() {
    const videoPopup = document.getElementById('videoPopup');
    const isMobile = window.innerWidth < 768;
    
    if (!videoPopup.classList.contains('hidden')) {
        return;
    }

    // Show popup on page load
    setTimeout(() => {
        videoPopup.classList.remove('hidden');
    }, 500);

    // Click outside to close
    videoPopup.addEventListener('click', (e) => {
        if (e.target === videoPopup) {
            closeVideoPopup();
        }
    });
}

function closeVideoPopup() {
    document.getElementById('videoPopup').classList.add('hidden');
    document.getElementById('introVideo').pause();
}

function toggleMute() {
    const video = document.getElementById('introVideo');
    const muteBtn = document.getElementById('muteBtn');
    
    if (video.muted) {
        video.muted = false;
        muteBtn.textContent = '🔊 Mute';
    } else {
        video.muted = true;
        muteBtn.textContent = '🔇 Unmute';
    }
}

// Artist Modal Handler
function openArtistModal(artistId) {
    const artist = artistsData[artistId];
    if (!artist) return;

    const modal = document.getElementById('artistModal');
    document.getElementById('modalArtistName').textContent = artist.name;
    document.getElementById('modalArtistImage').src = artist.image;
    document.getElementById('modalArtistBio').textContent = artist.bio;

    // Update streaming links
    const spotifyBtn = document.querySelector('.streaming-btn.spotify');
    const appleMusicBtn = document.querySelector('.streaming-btn.apple-music');
    const amazonBtn = document.querySelector('.streaming-btn.amazon');
    const beatportBtn = document.querySelector('.streaming-btn.beatport');
    const youtubeBtn = document.querySelector('.streaming-btn.youtube');

    spotifyBtn.href = artist.links.spotify;
    appleMusicBtn.href = artist.links.appleMusic;
    amazonBtn.href = artist.links.amazon;
    beatportBtn.href = artist.links.beatport;
    youtubeBtn.href = artist.links.youtube;

    modal.classList.remove('hidden');
}

function closeArtistModal() {
    document.getElementById('artistModal').classList.add('hidden');
}

// Newsletter Handler
function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    const checkbox = form.querySelector('input[type="checkbox"]').checked;

    if (!email || !checkbox) {
        alert('Bitte fülle alle Felder aus');
        return;
    }

    // Here you would send the email to your backend
    console.log('Newsletter signup:', { email });
    alert(`Danke für die Anmeldung mit: ${email}`);
    
    // Reset form
    form.reset();
}

// Close modal on outside click
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('artistModal');
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeArtistModal();
        }
    });

    // Initialize video popup
    initVideoPopup();
});