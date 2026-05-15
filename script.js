// Artist Data mit Beschreibungen
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
// VIDEO MODAL FUNCTIONALITY
// ========================================

const videoToggle = document.getElementById('videoToggle');
const videoModal = document.getElementById('videoModal');
const videoClose = document.getElementById('videoClose');
const introVideo = document.getElementById('introVideo');
const videoMute = document.getElementById('videoMute');

// Video öffnen
videoToggle.addEventListener('click', () => {
    videoModal.classList.remove('hidden');
    introVideo.play();
});

// Video schließen
videoClose.addEventListener('click', () => {
    videoModal.classList.add('hidden');
    introVideo.pause();
    introVideo.currentTime = 0;
});

// Video Modal mit ESC schließen
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) {
        videoClose.click();
    }
});

// Mute Toggle
videoMute.addEventListener('click', () => {
    if (introVideo.muted) {
        introVideo.muted = false;
        videoMute.textContent = '🔊 Ton an';
    } else {
        introVideo.muted = true;
        videoMute.textContent = '🔇 Ton aus';
    }
});

// ========================================
// ARTIST MODAL FUNCTIONALITY
// ========================================

const artistCards = document.querySelectorAll('.artist-card');
const artistModal = document.getElementById('artistModal');
const artistClose = document.getElementById('artistClose');
const modalArtistImage = document.getElementById('modalArtistImage');
const modalArtistName = document.getElementById('modalArtistName');
const modalArtistBio = document.getElementById('modalArtistBio');
const artistLinks = document.querySelectorAll('.artist-links .link-btn');

// Artist Card Click
artistCards.forEach(card => {
    card.addEventListener('click', () => {
        const artistKey = card.dataset.artist;
        const artist = artistsData[artistKey];
        
        if (artist) {
            // Bild und Text aktualisieren
            modalArtistImage.src = artist.image;
            modalArtistName.textContent = artist.name;
            modalArtistBio.textContent = artist.bio;
            
            // Links aktualisieren
            const links = [
                { selector: '.spotify-btn', url: artist.links.spotify, platform: 'Spotify' },
                { selector: '.apple-btn', url: artist.links.apple, platform: 'Apple Music' },
                { selector: '.amazon-btn', url: artist.links.amazon, platform: 'Amazon' },
                { selector: '.beatport-btn', url: artist.links.beatport, platform: 'Beatport' },
                { selector: '.youtube-btn', url: artist.links.youtube, platform: 'YouTube' }
            ];
            
            links.forEach(link => {
                const btn = document.querySelector(link.selector);
                if (btn) {
                    btn.href = link.url;
                    btn.textContent = link.platform;
                }
            });
            
            // Modal öffnen
            artistModal.classList.remove('hidden');
        }
    });
});

// Artist Modal schließen
artistClose.addEventListener('click', () => {
    artistModal.classList.add('hidden');
});

// Artist Modal mit ESC schließen
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !artistModal.classList.contains('hidden')) {
        artistClose.click();
    }
});

// ========================================
// NEWSLETTER FUNCTIONALITY
// ========================================

const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const checkbox = newsletterForm.querySelector('input[type="checkbox"]');
    const submitBtn = newsletterForm.querySelector('.submit-btn');
    
    // Validierung
    if (!emailInput.value) {
        alert('Bitte gib deine E-Mail-Adresse ein!');
        return;
    }
    
    if (!checkbox.checked) {
        alert('Bitte akzeptiere die Datenschutzerklärung!');
        return;
    }
    
    // Erfolgreich
    alert(`Danke! ${emailInput.value} wurde zum Newsletter hinzugefügt. 🎵`);
    
    // Formular reset
    newsletterForm.reset();
});

// ========================================
// SMOOTH SCROLLING
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// CONSOLE WELCOME MESSAGE
// ========================================

console.log('%c🎵 Willkommen zu ROKKO! Records 🎵', 'font-size: 24px; color: #E7760D; font-weight: bold;');
console.log('%cDas Label für neurodiverse Künstler aus dem Spektrum', 'font-size: 14px; color: #E7760D;');
console.log('%cWebsite by Skarramushvandango-tech', 'font-size: 12px; color: #888;');