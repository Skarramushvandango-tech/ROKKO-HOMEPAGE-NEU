/* ===================================================
   ROKKO! Records — script.js
   Artist Popups · Press Lightbox · Video Modal · Form

   REPO-STRUKTUR (Dateien die du brauchst):
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── fonts/
   │   ├── LifeSaver-Regular.ttf
   │   ├── LifeSavers-Bold.ttf
   │   └── LifeSavers-ExtraBold.ttf
   ├── images/
   │   ├── header.png, anger-uschis.png, silberstreif.png
   │   ├── anthony-sinclair.png, sukram.png
   │   ├── fleur-et-beunie.png, skaramush-vandango.png
   │   ├── henri-bellieu.png, placeholder.png
   │   ├── merch.png, youtube.png
   ├── pressefotos/
   │   └── (alle Pressefotos als .png)
   └── videos/
       ├── intro-web.mp4      ← Desktop Version
       └── intro-mobile.mp4   ← Mobile Version
   =================================================== */

'use strict';

/* ── Artist Data ─────────────────────────────────── */
const ARTISTS = {
  'anger-uschis': {
    name: 'Anger Uschis',
    img: './images/anger-uschis.png',
    bio: 'Mit ihrem Debütalbum „politisch inkontinent" liefern die Anger Uschis ein politisch orientiertes Mahnmal gegen Hass, Hetze und Faschismus.',
    links: [
      { label: 'Spotify',    url: 'https://open.spotify.com/playlist/6PynmXodpYNGmi6m0xKuDP?si=g4wlfy-qS9uDCzKDbYjbqw&pi=YdEbk2Y5T3-4v', icon: 'spotify' },
      { label: 'Apple Music',url: 'https://music.apple.com/de/artist/anger-uschis/1885764250', icon: 'apple' },
      { label: 'Amazon',     url: 'https://www.amazon.de/gp/product/B0GWQY499Q', icon: 'amazon' },
      { label: 'Beatport',   url: 'https://www.beatport.com/de/release/oh-junge/6401437', icon: 'beatport' },
      { label: 'SoundCloud', url: 'https://on.soundcloud.com/yF0Gsyrta73BPuIGPx', icon: 'soundcloud' },
      { label: 'YouTube',    url: 'https://www.youtube.com/@AngerUschis', icon: 'youtube' },
      { label: 'TikTok',     url: 'https://www.tiktok.com/@angeruschis', icon: 'tiktok' },
      { label: 'Facebook',   url: 'https://www.facebook.com/profile.php?id=61587765440458', icon: 'facebook' },
    ]
  },
  'silberstreif': {
    name: 'Silberstreif',
    img: './images/silberstreif.png',
    bio: 'Ihre Single flammend Herz avanciert bereits in kleineren Clubs zum Sommerhit und liefert den Soundtrack zum süßen Schmerz der sommerlichen Liebschaften.',
    links: [
      { label: 'Spotify',    url: 'https://open.spotify.com/artist/6IRLmlTvLsC41s71PiI5AW?si=e1_xR6ohQsujIPMmyDvHLg', icon: 'spotify' },
      { label: 'Apple Music',url: 'https://music.apple.com/de/album/flammend-herz-single/1893949801', icon: 'apple' },
      { label: 'Amazon',     url: 'https://amazon.de/music/player/albums/B0GXG1GYGM?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_2LZD6HeMSoL4oJJA3mEdGEUna', icon: 'amazon' },
    ]
  },
  'anthony-sinclair': {
    name: 'Anthony Sinclair',
    img: './images/anthony-sinclair.png',
    bio: 'Eine Zeitreise zurück in die Synthesizer regierenden, achtziger Jahre. Neonfarbener Herzschmerz mit eklektischer Warhol Attitüde.',
    links: []
  },
  'sukram': {
    name: 'SUKRAM',
    img: './images/sukram.png',
    bio: 'Der böse Bube mit der großen Klappe liefert mit Deutschland du mein Fiebertraum eine Ansage an das hier und jetzt und nimmt dabei kein Blatt vor den Mund.',
    links: [
      { label: 'Spotify',    url: 'https://open.spotify.com/artist/0XabsS6hlubIfQTtJ5ZTkU?si=jnl_P0fpSFuxgaEI_fNz7Q', icon: 'spotify' },
      { label: 'Apple Music',url: 'https://music.apple.com/de/album/deutschland-mein-fiebertraum-single/1893907436', icon: 'apple' },
      { label: 'SoundCloud', url: 'https://on.soundcloud.com/4AamGVxekfGxUZnA8L', icon: 'soundcloud' },
    ]
  },
  'fleur-et-beunie': {
    name: 'Fléur et Beunié',
    img: './images/fleur-et-beunie.png',
    bio: 'Das französische House-Duo lieferte mit Feu Léger 2025 eine French/House Hymne der extraklasse. Selbst die Remixe überzeugen leichtfüßig.',
    links: [
      { label: 'Spotify',    url: 'https://open.spotify.com/artist/3TJ6OTJwduYPDW1MBwDnSd?si=eayMaoeYT6i3hvJTC8wL9A', icon: 'spotify' },
      { label: 'Apple Music',url: 'https://music.apple.com/de/artist/fl%C3%A9ur-et-beuni%C3%A9/1844299316', icon: 'apple' },
      { label: 'SoundCloud', url: 'https://on.soundcloud.com/Kbt1h7TfrPexsg8eo7', icon: 'soundcloud' },
    ]
  },
  'skaramush-vandango': {
    name: 'SkaRamush Vandango',
    img: './images/skaramush-vandango.png',
    bio: 'SkaRamush ist der LabelChef von ROKKO! Records und auch der Writer, Produzent und DJ. Er ist bereits seit 2004 als Produzent und DJ unterwegs und arbeitet gerade an seinem Album: NeuroCentric, welches sich um sein Leben als Autist beschäftigen wird.',
    links: [
      { label: 'SoundCloud', url: 'https://on.soundcloud.com/Ro413zcJKImIS42aKp', icon: 'soundcloud' },
      { label: 'Instagram',  url: 'https://www.instagram.com/skaramush_vandango?igsh=MTd4ZHltMndpcGhkag%3D%3D&utm_source=qr', icon: 'instagram' },
      { label: 'TikTok',     url: 'https://www.tiktok.com/@skaramush_vandango', icon: 'tiktok' },
      { label: 'Facebook',   url: 'https://www.facebook.com/chose.your.username', icon: 'facebook' },
    ]
  },
  'henri-bellieu': {
    name: 'Henri Bellieu',
    img: './images/henri-bellieu.png',
    bio: 'Der charmante Franzose liefert mit seiner Single la Femme bereits seine zweite Ode an die Weiblichkeit und feierte mit petite Colibri im letzten Jahr seinen Einstieg in die Welt der Popmusik.',
    links: [
      { label: 'Spotify',    url: 'https://open.spotify.com/playlist/0CfFyyijTPSRqCn72ADfZM?si=IMIm836_Q4SDDaRx-ZaAnw&pi=XMWVcQ-bSs69-', icon: 'spotify' },
      { label: 'Apple Music',url: 'https://music.apple.com/de/artist/henri-bellieu/1844457359', icon: 'apple' },
      { label: 'Amazon',     url: 'https://amazon.de/music/player/artists/B0FV13NT6R/henri-bellieu?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_Sjl9Ta9PLH0YZ2H7Wn6aMB08U', icon: 'amazon' },
    ]
  },
  'skank-schablonski': {
    name: 'Skank Schablonski',
    img: './images/placeholder.png',
    bio: '',
    links: [
      { label: 'Spotify',    url: 'https://open.spotify.com/artist/7cuRsdHdZNay3cQV5zU8LM?si=zH27p79kSaeyw4tin9P8Jg', icon: 'spotify' },
      { label: 'Apple Music',url: 'https://music.apple.com/de/artist/skank-schablonski/1849740629', icon: 'apple' },
      { label: 'SoundCloud', url: 'https://on.soundcloud.com/nWJzxBb1tfJHw4vSYv', icon: 'soundcloud' },
    ]
  }
};

/* ── Streaming Icon SVGs (inline) ────────────────── */
const ICONS = {
  spotify:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.496 17.278a.75.75 0 01-1.031.249c-2.825-1.727-6.383-2.118-10.574-1.16a.75.75 0 01-.334-1.463c4.587-1.048 8.516-.597 11.69 1.343a.75.75 0 01.249 1.031zm1.468-3.264a.938.938 0 01-1.287.311c-3.231-1.985-8.158-2.56-11.983-1.4a.938.938 0 01-.542-1.793c4.37-1.322 9.795-.681 13.501 1.595a.937.937 0 01.311 1.287zm.127-3.4C15.355 8.4 9.298 8.2 5.7 9.28a1.125 1.125 0 01-.651-2.153c4.17-1.26 11.1-1.017 15.479 1.623a1.125 1.125 0 01-1.437 1.735z"/></svg>`,
  apple:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/></svg>`,
  soundcloud: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.175 12.225c-.015.132-.023.264-.023.396 0 .13.008.262.023.393a.39.39 0 00.78 0 4.75 4.75 0 000-.393 4.75 4.75 0 000-.396.39.39 0 00-.78 0zm1.79-.23a.39.39 0 00-.39.39v.63a.39.39 0 00.78 0v-.63a.39.39 0 00-.39-.39zm1.77-.512a.39.39 0 00-.39.39v1.14a.39.39 0 00.78 0v-1.14a.39.39 0 00-.39-.39zm1.77.23a.39.39 0 00-.39.39v.67a.39.39 0 00.78 0v-.67a.39.39 0 00-.39-.39zm1.77-.512a.39.39 0 00-.39.39v1.2a.39.39 0 00.78 0v-1.2a.39.39 0 00-.39-.39zm2.003-5.04a5.25 5.25 0 00-5.22 5.25c0 .19.013.378.036.563H6.9a5.25 5.25 0 005.25-5.25 5.25 5.25 0 00-.043-.638 5.262 5.262 0 00-.6-.075zM18 8.25a6 6 0 00-5.993 5.657H7.313A5.252 5.252 0 002.063 12a5.25 5.25 0 005.25 5.25h10.688A3.75 3.75 0 0018 8.25z"/></svg>`,
  youtube:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  amazon:     `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705a.66.66 0 01-.753.074c-1.056-.877-1.244-1.284-1.826-2.121-1.745 1.78-2.982 2.313-5.239 2.313-2.678 0-4.762-1.653-4.762-4.964 0-2.584 1.401-4.341 3.399-5.199 1.731-.764 4.151-.9 5.998-1.11v-.412c0-.757.06-1.651-.385-2.306-.385-.581-1.134-.82-1.791-.82-1.217 0-2.302.625-2.568 1.92-.054.285-.261.567-.549.58l-3.075-.333c-.26-.056-.547-.267-.472-.663C6.163 1.36 9.237 0 12 0c1.402 0 3.232.373 4.337 1.434C17.67 2.718 17.67 4.44 17.67 5.87v5.38c0 1.62.671 2.331 1.304 3.207.221.311.271.684-.014.913a129.15 129.15 0 01-1.816 1.425zM21.447 19.5c-2.529 1.864-6.2 2.857-9.362 2.857-4.428 0-8.414-1.637-11.432-4.358-.236-.215-.025-.508.261-.341 3.256 1.897 7.286 3.038 11.454 3.038 2.808 0 5.894-.582 8.732-1.79.428-.183.786.281.347.594zm.997-1.131c-.323-.414-2.143-.197-2.96-.098-.249.03-.287-.186-.063-.342 1.45-1.02 3.832-.726 4.111-.384.278.344-.073 2.727-1.434 3.863-.209.174-.408.081-.315-.15.306-.762.993-2.476.661-2.889z"/></svg>`,
  beatport:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.2c-3.975 0-7.2-3.225-7.2-7.2S8.025 4.8 12 4.8s7.2 3.225 7.2 7.2-3.225 7.2-7.2 7.2zm0-12c-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8 4.8-2.15 4.8-4.8-2.15-4.8-4.8-4.8zm0 7.2c-1.325 0-2.4-1.075-2.4-2.4S10.675 9.6 12 9.6s2.4 1.075 2.4 2.4-1.075 2.4-2.4 2.4z"/></svg>`,
  instagram:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
  tiktok:     `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.77 1.52V6.78a4.85 4.85 0 01-1-.09z"/></svg>`,
  facebook:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
};

function getIconSVG(key) {
  return ICONS[key] || `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>`;
}

/* ── Artist Modal ─────────────────────────────────── */
const artistModal      = document.getElementById('artistModal');
const artistModalImg   = document.getElementById('artistModalImg');
const artistModalName  = document.getElementById('artistModalName');
const artistModalBio   = document.getElementById('artistModalBio');
const artistModalLinks = document.getElementById('artistModalLinks');
const artistModalClose = document.getElementById('artistModalClose');

function openArtistModal(artistKey) {
  const artist = ARTISTS[artistKey];
  if (!artist) return;

  artistModalImg.src           = artist.img;
  artistModalImg.alt           = artist.name;
  artistModalName.textContent  = artist.name;
  artistModalBio.textContent   = artist.bio || 'Infos folgen in Kürze.';

  artistModalLinks.innerHTML = '';
  artist.links.forEach(function(link) {
    const a = document.createElement('a');
    a.href      = link.url;
    a.target    = '_blank';
    a.rel       = 'noopener noreferrer';
    a.className = 'stream-link';
    a.innerHTML = getIconSVG(link.icon) + '<span>' + link.label + '</span>';
    artistModalLinks.appendChild(a);
  });

  artistModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  artistModalClose.focus();
}

function closeArtistModal() {
  artistModal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.artist-tile').forEach(function(tile) {
  tile.addEventListener('click', function() {
    openArtistModal(this.dataset.artist);
  });
  tile.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openArtistModal(this.dataset.artist);
    }
  });
});

artistModalClose.addEventListener('click', closeArtistModal);
artistModal.addEventListener('click', function(e) {
  if (e.target === artistModal) closeArtistModal();
});

/* ── Press Card Toggle ────────────────────────────── */
const pressCardStack  = document.getElementById('pressCardStack');
const pressCardHeader = document.getElementById('pressCardHeader');
const pressToggleBtn  = document.getElementById('pressToggleBtn');

pressCardHeader.addEventListener('click', function() {
  pressCardStack.classList.toggle('press-open');
  const isOpen = pressCardStack.classList.contains('press-open');
  pressToggleBtn.setAttribute('aria-expanded', String(isOpen));
  pressToggleBtn.setAttribute('aria-label', isOpen ? 'Pressefotos schließen' : 'Pressefotos öffnen');
});

pressCardHeader.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    pressCardHeader.click();
  }
});

/* ── Press Photo Lightbox ─────────────────────────── */
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev  = document.getElementById('lightboxPrev');
const lightboxNext  = document.getElementById('lightboxNext');

const pressPhotos = Array.from(document.querySelectorAll('.press-photo'));
let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  const img = pressPhotos[index].querySelector('img');
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function showLightboxAt(index) {
  currentLightboxIndex = (index + pressPhotos.length) % pressPhotos.length;
  const img = pressPhotos[currentLightboxIndex].querySelector('img');
  lightboxImg.style.opacity = '0';
  setTimeout(function() {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxImg.style.opacity = '1';
  }, 120);
}

pressPhotos.forEach(function(photo) {
  photo.addEventListener('click', function() {
    openLightbox(parseInt(this.dataset.index, 10));
  });
  photo.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(parseInt(this.dataset.index, 10));
    }
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) closeLightbox();
});
lightboxPrev.addEventListener('click', function() {
  showLightboxAt(currentLightboxIndex - 1);
});
lightboxNext.addEventListener('click', function() {
  showLightboxAt(currentLightboxIndex + 1);
});

/* ── Video Modal ──────────────────────────────────── */
const videoTrigger    = document.getElementById('videoTrigger');
const videoModal      = document.getElementById('videoModal');
const videoModalClose = document.getElementById('videoModalClose');
const introVideo      = document.getElementById('introVideo');
const muteBtn         = document.getElementById('muteBtn');
const muteIcon        = document.getElementById('muteIcon');
const videoSrcMp4     = document.getElementById('videoSrcMp4');

function isMobile() {
  return window.matchMedia('(max-width: 680px)').matches;
}

function openVideoModal() {
  const src = isMobile() ? './videos/intro-mobile.mp4' : './videos/intro-web.mp4';
  videoSrcMp4.src   = src;
  introVideo.muted  = true;
  muteIcon.textContent = '\uD83D\uDD07';
  introVideo.load();
  videoModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  introVideo.play().catch(function() {});
}

function closeVideoModal() {
  videoModal.classList.remove('open');
  introVideo.pause();
  introVideo.currentTime = 0;
  videoSrcMp4.src = '';
  document.body.style.overflow = '';
}

/* Video endet → Modal schließt sich automatisch */
introVideo.addEventListener('ended', function() {
  setTimeout(closeVideoModal, 400);
});

videoTrigger.addEventListener('click', openVideoModal);
videoModalClose.addEventListener('click', closeVideoModal);
videoModal.addEventListener('click', function(e) {
  if (e.target === videoModal) closeVideoModal();
});

muteBtn.addEventListener('click', function() {
  introVideo.muted     = !introVideo.muted;
  muteIcon.textContent = introVideo.muted ? '\uD83D\uDD07' : '\uD83D\uDD0A';
});

/* ── Keyboard / Escape ────────────────────────────── */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (artistModal.classList.contains('open')) closeArtistModal();
    if (lightbox.classList.contains('open'))    closeLightbox();
    if (videoModal.classList.contains('open'))  closeVideoModal();
  }
  if (lightbox.classList.contains('open')) {
    if (e.key === 'ArrowLeft')  showLightboxAt(currentLightboxIndex - 1);
    if (e.key === 'ArrowRight') showLightboxAt(currentLightboxIndex + 1);
  }
});

/* ── Contact Form ─────────────────────────────────── */
const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');

contactForm.addEventListener('submit', async function(e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName');
  const lastName  = document.getElementById('lastName');
  const email     = document.getElementById('email');
  const message   = document.getElementById('message');
  const privacy   = document.getElementById('privacy');

  let valid = true;

  [firstName, lastName, email, message].forEach(function(field) {
    field.classList.remove('invalid');
    if (!field.value.trim()) {
      field.classList.add('invalid');
      valid = false;
    }
  });

  if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.classList.add('invalid');
    valid = false;
  }

  if (!privacy.checked) {
    formStatus.textContent = 'Bitte stimme der Datenschutzerklärung zu.';
    formStatus.className   = 'form-status error';
    return;
  }

  if (!valid) {
    formStatus.textContent = 'Bitte alle Pflichtfelder ausfüllen.';
    formStatus.className   = 'form-status error';
    return;
  }

  const submitBtn = contactForm.querySelector('.submit-btn');
  submitBtn.disabled     = true;
  submitBtn.textContent  = 'Wird gesendet\u2026';
  formStatus.textContent = '';
  formStatus.className   = 'form-status';

  const payload = {
    firstName: firstName.value.trim(),
    lastName:  lastName.value.trim(),
    email:     email.value.trim(),
    message:   message.value.trim()
  };

  try {
    const response = await fetch('/api/contact', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    });

    if (response.ok) {
      formStatus.textContent = 'Danke! Deine Nachricht wurde gesendet.';
      formStatus.className   = 'form-status success';
      contactForm.reset();
    } else {
      throw new Error('Server error');
    }
  } catch (err) {
    formStatus.textContent = 'Fehler beim Senden. Bitte versuche es sp\u00e4ter erneut.';
    formStatus.className   = 'form-status error';
  } finally {
    submitBtn.disabled    = false;
    submitBtn.textContent = 'Absenden';
  }
});
