// JavaScript für interaktive Funktionen

window.onload = function() {
    const closeVideoBtn = document.getElementById('close-video');
    const introVideoWeb = document.getElementById('intro-video-web');
    const introVideoMobile = document.getElementById('intro-video-mobile');

    // Video-Popup schließen
    closeVideoBtn.addEventListener('click', () => {
        introVideoWeb.style.display = 'none';
        introVideoMobile.style.display = 'none';
        closeVideoBtn.style.display = 'none';
    });

    // Mobilgerät unterscheiden
    if (window.innerWidth <= 768) {
        introVideoWeb.style.display = 'none';
        introVideoMobile.style.display = 'block';
    } else {
        introVideoWeb.style.display = 'block';
        introVideoMobile.style.display = 'none';
    }
};