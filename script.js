const artistsData = {
    'skaramush-vandango': {
        name: 'SkaRamush Vandango',
        bio: 'SkaRamush ist der LabelChef von ROKKO! Records und auch der Writer, Produzent und DJ. Er ist bereits seit 2004 als Produzent und DJ unterwegs und arbeitet gerade an seinem Album: NeuroCentric, welches sich um sein Leben als Autist beschäftigen wird.',
        image: 'images/skaramush-vandango.png',
        links: {
            soundcloud: 'https://on.soundcloud.com/Ro413zcJKImIS42aKp',
            instagram:  'https://www.instagram.com/skaramush_vandango?igsh=MTd4ZHltMndpcGhkag%3D%3D&utm_source=qr',
            facebook:   'https://www.facebook.com/chose.your.username',
            tiktok:     'https://www.tiktok.com/@skaramush_vandango'
        }
    },
    'silberstreif': {
        name: 'Silberstreif',
        bio: 'Ihre Single Flammend Herz avanciert bereits in kleineren Clubs zum Sommerhit und liefert den Soundtrack zum süßen Schmerz der sommerlichen Liebschaften.',
        image: 'images/silberstreif.png',
        links: {
            spotify: 'https://open.spotify.com/artist/6IRLmlTvLsC41s71PiI5AW?si=e1_xR6ohQsujIPMmyDvHLg',
            apple:   'https://music.apple.com/de/album/flammend-herz-single/1893949801',
            amazon:  'https://amazon.de/music/player/albums/B0GXG1GYGM?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_s85yutXPLbQoHmSPohAQDFoDt&trackAsin=B0GXG27F9J'
        }
    },
    'anger-uschis': {
        name: 'Anger Uschis',
        bio: 'Mit ihrem Debütalbum „politisch inkontinent" liefern die Anger Uschis ein politisch orientiertes Mahnmal gegen Hass, Hetze und Faschismus.',
        image: 'images/anger-uschis.png',
        links: {
            spotify:    'https://open.spotify.com/playlist/6PynmXodpYNGmi6m0xKuDP?si=g4wlfy-qS9uDCzKDbYjbqw&pi=YdEbk2Y5T3-4v',
            apple:      'https://music.apple.com/de/artist/anger-uschis/1885764250',
            amazon:     'https://www.amazon.de/gp/product/B0GWQY499Q/',
            beatport:   'https://www.beatport.com/de/release/oh-junge/6401437',
            soundcloud: 'https://on.soundcloud.com/yF0Gsyrta73BPuIGPx',
            youtube:    'https://www.youtube.com/@AngerUschis',
            tiktok:     'https://www.tiktok.com/@angeruschis',
            facebook:   'https://www.facebook.com/profile.php?id=61587765440458'
        }
    },
    'henri-bellieu': {
        name: 'Henri Bellieu',
        bio: 'Der Franzose liefert mit seiner Single la Femme bereits seine zweite Ode an die Weiblichkeit und feierte mit petite Colibri im letzten Jahr einen charmanten Einstieg in die Welt der Popmusik.',
        image: 'images/henri-bellieu.png',
        links: {
            spotify: 'https://open.spotify.com/playlist/0CfFyyijTPSRqCn72ADfZM?si=IMIm836_Q4SDDaRx-ZaAnw&pi=XMWVcQ-bSs69-',
            apple:   'https://music.apple.com/de/artist/henri-bellieu/1844457359',
            amazon:  'https://amazon.de/music/player/artists/B0FV13NT6R/henri-bellieu?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_Sjl9Ta9PLH0YZ2H7Wn6aMB08U'
        }
    },
    'fleur-et-beunie': {
        name: 'Fléur et Beunié',
        bio: 'Das französische House-Duo lieferte mit Feu Léger 2025 eine French-House Hymne der Extraklasse. Selbst die Remixe überzeugen leichtfüßig.',
        image: 'images/fleur-et-beunie.png',
        links: {
            spotify:    'https://open.spotify.com/artist/3TJ6OTJwduYPDW1MBwDnSd?si=eayMaoeYT6i3hvJTC8wL9A',
            apple:      'https://music.apple.com/de/artist/fl%C3%A9ur-et-beuni%C3%A9/1844299316',
            soundcloud: 'https://on.soundcloud.com/Kbt1h7TfrPexsg8eo7'
        }
    },
    'sukram': {
        name: 'SUKRAM',
        bio: 'Der böse Bube mit der großen Klappe liefert mit Deutschland du mein Fiebertraum eine Ansage an das Hier und Jetzt und nimmt dabei kein Blatt vor den Mund.',
        image: 'images/sukram.png',
        links: {
            spotify:    'https://open.spotify.com/artist/0XabsS6hlubIfQTtJ5ZTkU?si=jnl_P0fpSFuxgaEI_fNz7Q',
            apple:      'https://music.apple.com/de/album/deutschland-mein-fiebertraum-single/1893907436',
            soundcloud: 'https://on.soundcloud.com/4AamGVxekfGxUZnA8L'
        }
    },
    'skank-schablonski': {
        name: 'Skank Schablonski',
        bio: '',
        image: 'images/skank-schablonski.png',
        links: {
            spotify:    'https://open.spotify.com/artist/7cuRsdHdZNay3cQV5zU8LM?si=zH27p79kSaeyw4tin9P8Jg',
            apple:      'https://music.apple.com/de/artist/skank-schablonski/1849740629',
            soundcloud: 'https://on.soundcloud.com/nWJzxBb1tfJHw4vSYv'
        }
    },
    'anthony-sinclair': {
        name: 'Anthony Sinclair',
        bio: 'Eine Zeitreise zurück in die Synthesizer regierenden achtziger Jahre. Neonfarbener Herzschmerz mit eklektischer Warhol-Attitüde.',
        image: 'images/anthony-sinclair.png',
        links: {}
    }
};

// YouTube Video-IDs — ersetze PLACEHOLDER durch echte IDs
const youtubeVideos = [
    { id: 'PLACEHOLDER', title: 'Video 1' },
    { id: 'PLACEHOLDER', title: 'Video 2' },
    { id: 'PLACEHOLDER', title: 'Video 3' },
    { id: 'PLACEHOLDER', title: 'Video 4' }
];

// Alle möglichen Plattformen mit Label
const platforms = [
    ['spotify',    'Spotify'],
    ['apple',      'Apple Music'],
    ['amazon',     'Amazon Music'],
    ['beatport',   'Beatport'],
    ['soundcloud', 'SoundCloud'],
    ['youtube',    'YouTube'],
    ['tiktok',     'TikTok'],
    ['facebook',   'Facebook'],
    ['instagram',  'Instagram']
];

// VIDEO POPUP
var videoPopup = document.getElementById('videoPopup');
var introVideo = document.getElementById('introVideo');
var muteBtn    = document.getElementById('muteBtn');

function closeVideoPopup() {
    if (!videoPopup) return;
    videoPopup.classList.add('hidden');
    if (introVideo) { introVideo.pause(); introVideo.currentTime = 0; }
}
function toggleMute() {
    if (!introVideo) return;
    introVideo.muted = !introVideo.muted;
    muteBtn.textContent = introVideo.muted ? '🔇 Unmute' : '🔊 Ton an';
}
if (videoPopup) {
    videoPopup.addEventListener('click', function(e) { if (e.target === this) closeVideoPopup(); });
}

// ARTIST MODAL
var artistModal         = document.getElementById('artistModal');
var modalArtistImage    = document.getElementById('modalArtistImage');
var modalArtistName     = document.getElementById('modalArtistName');
var modalArtistBio      = document.getElementById('modalArtistBio');
var modalStreamingLinks = document.getElementById('modalStreamingLinks');

function openArtistModal(key) {
    var artist = artistsData[key];
    if (!artist || !artistModal) return;

    modalArtistImage.src        = artist.image;
    modalArtistName.textContent = artist.name;
    modalArtistBio.textContent  = artist.bio || '';
    modalStreamingLinks.innerHTML = '';

    // Nur Buttons anzeigen für die ein echter Link vorhanden ist
    platforms.forEach(function(p) {
        var url = artist.links[p[0]];
        if (!url || url === '') return;
        var btn = document.createElement('a');
        btn.textContent = p[1];
        btn.href        = url;
        btn.target      = '_blank';
        btn.rel         = 'noopener noreferrer';
        btn.className   = 'streaming-btn';
        modalStreamingLinks.appendChild(btn);
    });

    artistModal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    artistModal.scrollTop = 0;
}

function closeArtistModal() {
    if (!artistModal) return;
    artistModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
}

if (artistModal) {
    artistModal.addEventListener('click', function(e) {
        if (e.target === this) closeArtistModal();
    });
}

// MERCH SHOP
var merchSection = document.getElementById('merchSection');

function toggleMerchShop() {
    if (!merchSection) return;
    if (merchSection.classList.contains('open')) {
        closeMerchShop();
    } else {
        merchSection.classList.add('open');
        setTimeout(function() {
            merchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
    }
}

function closeMerchShop() {
    if (!merchSection) return;
    merchSection.classList.remove('open');
    setTimeout(function() {
        var tile = document.querySelector('.merch-tile');
        if (tile) tile.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 80);
}

// YOUTUBE GRID
function buildYoutubeGrid() {
    var grid = document.getElementById('youtubeGrid');
    if (!grid) return;
    grid.innerHTML = '';
    youtubeVideos.forEach(function(video) {
        if (!video.id || video.id === 'PLACEHOLDER') return;
        var item   = document.createElement('div');
        item.className = 'youtube-item';
        var iframe = document.createElement('iframe');
        iframe.src             = 'https://www.youtube.com/embed/' + video.id;
        iframe.title           = video.title;
        iframe.allow           = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        item.appendChild(iframe);
        grid.appendChild(item);
    });
}

// NEWSLETTER
function handleNewsletterSubmit(e) {
    e.preventDefault();
    var form  = e.target;
    var email = form.querySelector('input[type="email"]');
    var check = form.querySelector('input[type="checkbox"]');
    if (!email.value) { alert('Bitte gib deine E-Mail-Adresse ein!'); return; }
    if (!check.checked) { alert('Bitte akzeptiere die Datenschutzerklärung!'); return; }
    alert('Danke! ' + email.value + ' wurde zum Newsletter hinzugefügt. 🎵');
    form.reset();
}

// ESC TASTE
document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    if (videoPopup  && !videoPopup.classList.contains('hidden'))  closeVideoPopup();
    if (artistModal && !artistModal.classList.contains('hidden')) closeArtistModal();
    if (merchSection && merchSection.classList.contains('open'))  closeMerchShop();
});

// SCROLL REVEAL
function initScrollReveal() {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal, .reveal-card').forEach(function(el) {
        observer.observe(el);
    });
}

// INIT
document.addEventListener('DOMContentLoaded', function() {
    buildYoutubeGrid();

    var ytObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); ytObserver.unobserve(entry.target); }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.youtube-item').forEach(function(el) {
        el.classList.add('reveal-card');
        ytObserver.observe(el);
    });

    initScrollReveal();
});

console.log('%c🎵 Willkommen zu ROKKO! Records 🎵', 'font-size: 24px; color: #E7760D; font-weight: bold;');
console.log('%cDas Label für neurodiverse Künstler aus dem Spektrum', 'font-size: 14px; color: #E7760D;');
