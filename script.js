const artists = {
  "anger-uschis": { name:"Anger Uschis", bio:"Politisches Debüt gegen Hass und Hetze." },
  "silberstreif": { name:"Silberstreif", bio:"Sommerhit Sound." },
  "henri-bellieu": { name:"Henri Bellieu", bio:"French Pop." },
  "fleur-et-beunie": { name:"Fléur et Beunié", bio:"House Music." },
  "sukram": { name:"SUKRAM", bio:"Direkte Ansage." },
  "skaramush-vandango": { name:"SkaRamush Vandango", bio:"Labelchef & Producer." },
  "anthony-sinclair": { name:"Anthony Sinclair", bio:"80s Synth Wave." }
};

/* ARTIST POPUP */
document.querySelectorAll(".artist").forEach(img => {
  img.addEventListener("click", () => {

    const key = img.src.split("/").pop().replace(".png","");
    const a = artists[key];

    if(!a) return;

    document.getElementById("popupName").textContent = a.name;
    document.getElementById("popupBio").textContent = a.bio;

    document.getElementById("popup").classList.remove("hidden");
  });
});

/* CLOSE POPUP */
document.querySelector(".popup-close").addEventListener("click", () => {
  document.getElementById("popup").classList.add("hidden");
});

/* INTRO VIDEO LOGIC */
const intro = document.getElementById("intro");
const video = document.getElementById("introVideo");

const isMobile = window.innerWidth < 768;

video.src = isMobile
  ? "videos/intro-mobile.mp4"
  : "videos/intro-web.mp4";

document.querySelector(".intro-close").onclick = () => {
  intro.classList.add("hidden");
};
