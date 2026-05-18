// Artist Data with provided links (only provided links included)
const artistsData = {
    'silberstreif': {
        name: 'Silberstreif',
        bio: 'Silberstreif — Flammend Herz',
        image: 'images/silberstreif.png',
        links: {
            spotify: 'https://open.spotify.com/artist/6IRLmlTvLsC41s71PiI5AW?si=e1_xR6ohQsujIPMmyDvHLg',
            appleMusic: 'https://music.apple.com/de/album/flammend-herz-single/1893949801',
            amazon: 'https://amazon.de/music/player/albums/B0GXG1GYGM?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_s85yutXPLbQoHmSPohAQDFoDt&trackAsin=B0GXG27F9J'
        }
    },
    'anger-uschis': {
        name: 'Anger Uschis',
        bio: 'Anger Uschis — politisch inkontinent',
        image: 'images/anger-uschis.png',
        links: {
            amazon: 'https://amazon.de/music/player/albums/B0GWQY499Q?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_d3pi1ZFsE0tCJefSkBjc0zb9z',
            beatport: 'https://www.beatport.com/de/release/oh-junge/6401437',
            spotify: 'https://open.spotify.com/playlist/6PynmXodpYNGmi6m0xKuDP?si=g4wlfy-qS9uDCzKDbYjbqw&pi=YdEbk2Y5T3-4v',
            soundcloud: 'https://on.soundcloud.com/yF0Gsyrta73BPuIGPx',
            appleMusic: 'https://music.apple.com/de/artist/anger-uschis/1885764250',
            youtube: 'https://www.youtube.com/@AngerUschis',
            tiktok: 'https://www.tiktok.com/@angeruschis',
            facebook: 'https://www.facebook.com/profile.php?id=61587765440458'
        }
    },
    'sukram': {
        name: 'SUKRAM',
        bio: 'SUKRAM — Deutschland du mein Fiebertraum',
        image: 'images/sukram.png',
        links: {
            soundcloud: 'https://on.soundcloud.com/4AamGVxekfGxUZnA8L',
            spotify: 'https://open.spotify.com/artist/0XabsS6hlubIfQTtJ5ZTkU?si=jnl_P0fpSFuxgaEI_fNz7Q',
            appleMusic: 'https://music.apple.com/de/album/deutschland-mein-fiebertraum-single/1893907436'
        }
    },
    'henri-bellieu': {
        name: 'Henri Bellieu',
        bio: 'Henri Bellieu — la Femme & mehr',
        image: 'images/henri-bellieu.png',
        links: {
            spotify: 'https://open.spotify.com/playlist/0CfFyyijTPSRqCn72ADfZM?si=IMIm836_Q4SDDaRx-ZaAnw&pi=XMWVcQ-bSs69-',
            appleMusic: 'https://music.apple.com/de/artist/henri-bellieu/1844457359',
            amazon: 'https://amazon.de/music/player/artists/B0FV13NT6R/henri-bellieu?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_Sjl9Ta9PLH0YZ2H7Wn6aMB08U'
        }
    },
    'fleur-et-beunie': {
        name: 'Fléur et Beunié',
        bio: 'Fléur et Beunié — French House',
        image: 'images/fleur-et-beunie.png',
        links: {
            spotify: 'https://open.spotify.com/artist/3TJ6OTJwduYPDW1MBwDnSd?si=eayMaoeYT6i3hvJTC8wL9A',
            appleMusic: 'https://music.apple.com/de/artist/fl%C3%A9ur-et-beuni%C3%A9/1844299316',
            soundcloud: 'https://on.soundcloud.com/Kbt1h7TfrPexsg8eo7'
        }
    },
    'skank-schablonski': {
        name: 'Skank Schablonski',
        bio: 'Skank Schablonski — live & more',
        image: 'images/skank-schablonski.png',
        links: {
            soundcloud: 'https://on.soundcloud.com/nWJzxBb1tfJHw4vSYv',
            spotify: 'https://open.spotify.com/artist/7cuRsdHdZNay3cQV5zU8LM?si=zH27p79kSaeyw4tin9P8Jg',
            appleMusic: 'https://music.apple.com/de/artist/skank-schablonski/1849740629'
        }
    },
    'skaramush-vandango': {
        name: 'SkaRamush Vandango',
        bio: 'SkaRamush Vandango — Labelchef, Producer, DJ',
        image: 'images/skaramush-vandango.png',
        links: {
            facebook: 'https://www.facebook.com/chose.your.username?',
            soundcloud: 'https://on.soundcloud.com/Ro413zcJKImIS42aKp',
            instagram: 'https://www.instagram.com/skaramush_vandango?igsh=MTd4ZHltMndpcGhkag%3D%3D&utm_source=qr',
            tiktok: 'https://www.tiktok.com/@skaramush_vandango'
        }
    },
    'anthony-sinclair': {
        name: 'Anthony Sinclair',
        bio: 'Anthony Sinclair — aktuell keine Releases',
        image: 'images/anthony-sinclair.png',
        links: {}
    }
};

// YouTube IDs from your list
const youtubeIDs = ['NDTqSrEDmAg','syk0pMR_3As','AxdEv4-b6Bs','ryfHdYA_VLU'];

// Helper: create streaming button element
function createStreamingButton(label, href) {
    const a = document.createElement('a');
    a.className = 'streaming-btn';
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = label;
    return a;
}

// Close Video Popup (and restore scroll)
function closeVideoPopup() {
    const videoPopup = document.getElementById('videoPopup');
    if (videoPopup) {
        videoPopup.classList.add('hidden');
    }
    const video = document.getElementById('introVideo');
    if (video) {
        video.pause();
        try { video.currentTime = 0; } catch (e) {}
    }
    document.body.style.overflow = '';
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

// Artist Modal functions
function openArtistModal(artistId) {
    const artist = artistsData[artistId];
    if (!artist) return;
    const modal = document.getElementById('artistModal');
    const nameEl = document.getElementById('modalArtistName');
    const imageEl = document.getElementById('modalArtistImage');
    const bioEl = document.getElementById('modalArtistBio');
    const linksContainer = document.getElementById('modalStreamingLinks') || document.querySelector('.streaming-links');
    if (!modal || !nameEl || !imageEl || !bioEl || !linksContainer) return;

    nameEl.textContent = artist.name;
    imageEl.src = artist.image;
    bioEl.textContent = artist.bio || '';

    // clear and add only available links in consistent order
    linksContainer.innerHTML = '';
    const order = ['spotify','appleMusic','amazon','beatport','youtube','soundcloud','facebook','instagram','tiktok'];
    const labels = { spotify: 'Spotify', appleMusic: 'Apple Music', amazon: 'Amazon', beatport: 'Beatport', youtube: 'YouTube', soundcloud: 'SoundCloud', facebook: 'Facebook', instagram: 'Instagram', tiktok: 'TikTok' };
    order.forEach(key => {
        if (artist.links && artist.links[key]) {
            linksContainer.appendChild(createStreamingButton(labels[key], artist.links[key]));
        }
    });

    modal.classList.remove('hidden');
    // prevent background scroll while modal open
    document.body.style.overflow = 'hidden';
}

function closeArtistModal() {
    const modal = document.getElementById('artistModal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// YouTube Lightbox
function buildYouTubeGrid() {
    const grid = document.getElementById('youtubeGrid');
    if (!grid) return;
    grid.innerHTML = '';
    youtubeIDs.forEach(id => {
        const thumb = document.createElement('div');
        thumb.className = 'youtube-thumb';
        thumb.dataset.id = id;
        const img = document.createElement('img');
        img.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
        img.alt = 'YouTube Video';
        thumb.appendChild(img);
        const title = document.createElement('div');
        title.className = 'yt-title';
        title.textContent = '';
        thumb.appendChild(title);
        thumb.addEventListener('click', () => openYouTubeLightbox(id));
        grid.appendChild(thumb);
    });
}

function openYouTubeLightbox(id) {
    // create overlay
    let overlay = document.getElementById('ytLightbox');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'ytLightbox';
        overlay.style.position = 'fixed';
        overlay.style.inset = '0';
        overlay.style.background = 'rgba(0,0,0,0.95)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '3000';
        overlay.addEventListener('click', (e) => { if (e.target === overlay) closeYouTubeLightbox(); });
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '×';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '12px';
        closeBtn.style.right = '12px';
        closeBtn.style.fontSize = '32px';
        closeBtn.style.background = 'var(--orange)';
        closeBtn.style.color = 'var(--black)';
        closeBtn.style.border = 'none';
        closeBtn.style.width = '44px';
        closeBtn.style.height = '44px';
        closeBtn.style.borderRadius = '50%';
        closeBtn.style.cursor = 'pointer';
        closeBtn.addEventListener('click', closeYouTubeLightbox);
        overlay.appendChild(closeBtn);
        const holder = document.createElement('div');
        holder.style.width = '90%';
        holder.style.maxWidth = '1000px';
        holder.style.aspectRatio = '16/9';
        holder.style.background = '#000';
        overlay.appendChild(holder);
        document.body.appendChild(overlay);
    }
    const holder = overlay.querySelector('div:nth-child(2)');
    holder.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeYouTubeLightbox() {
    const overlay = document.getElementById('ytLightbox');
    if (overlay) {
        overlay.style.display = 'none';
        const holder = overlay.querySelector('div:nth-child(2)');
        if (holder) holder.innerHTML = '';
    }
    document.body.style.overflow = '';
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // build youtube grid
    buildYouTubeGrid();

    // Show video popup shortly after load
    const videoPopup = document.getElementById('videoPopup');
    const introVideo = document.getElementById('introVideo');
    if (videoPopup && introVideo) {
        setTimeout(() => { videoPopup.classList.remove('hidden'); document.body.style.overflow = 'hidden'; }, 500);

        // Auto-close 1s after video end
        introVideo.addEventListener('ended', () => {
            setTimeout(() => { closeVideoPopup(); }, 1000);
        });

        // Allow clicking outside to close
        videoPopup.addEventListener('click', (e) => { if (e.target === videoPopup) closeVideoPopup(); });
    }

    // Ensure existing inline onclicks still work and delegate if using data-artist
    document.querySelectorAll('[data-artist]').forEach(el => {
        el.addEventListener('click', (e) => {
            const id = el.dataset.artist;
            if (id) openArtistModal(id);
        });
    });

    // Close modals on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const videoPopup = document.getElementById('videoPopup');
            const artistModal = document.getElementById('artistModal');
            const yt = document.getElementById('ytLightbox');
            if (yt && yt.style.display !== 'none') closeYouTubeLightbox();
            if (videoPopup && !videoPopup.classList.contains('hidden')) closeVideoPopup();
            if (artistModal && !artistModal.classList.contains('hidden')) closeArtistModal();
        }
    });

    // Artist modal outside click
    const artistModal = document.getElementById('artistModal');
    if (artistModal) {
        artistModal.addEventListener('click', (e) => { if (e.target === artistModal) closeArtistModal(); });
    }
});

// Expose functions globally for inline onclicks
window.openArtistModal = openArtistModal;
window.closeArtistModal = closeArtistModal;
window.closeVideoPopup = closeVideoPopup;
window.toggleMute = toggleMute;
window.openMerch = function() { // scroll to merch section and on mobile it can occupy full screen
    const merch = document.getElementById('merchSection');
    if (!merch) return;
    merch.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
