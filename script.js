const artists = {
    "skaramush-vandango":{
        name:"SkaRamush Vandango",
        bio:"DJ / Producer",
        image:"images/skaramush-vandango.png",
        links:{
            soundcloud:"https://on.soundcloud.com/Ro413zcJKImIS42aKp",
            instagram:"https://instagram.com/skaramush_vandango",
            tiktok:"https://tiktok.com/@skaramush_vandango"
        }
    },
    "silberstreif":{
        name:"Silberstreif",
        bio:"",
        image:"images/silberstreif.png",
        links:{}
    }
};

const platforms = [
    ["soundcloud","SoundCloud"],
    ["instagram","Instagram"],
    ["tiktok","TikTok"]
];

function openArtist(id){
    const a = artists[id];
    if(!a) return;

    document.getElementById("artistModal").classList.remove("hidden");
    document.getElementById("modalArtistImage").src = a.image;
    document.getElementById("modalArtistName").textContent = a.name;
    document.getElementById("modalArtistBio").textContent = a.bio;

    const box = document.getElementById("modalStreamingLinks");
    box.innerHTML = "";

    platforms.forEach(([k,label])=>{
        if(!a.links?.[k]) return;
        const el = document.createElement("a");
        el.href = a.links[k];
        el.target = "_blank";
        el.textContent = label;
        box.appendChild(el);
    });
}

function closeArtistModal(){
    document.getElementById("artistModal").classList.add("hidden");
}

function closeVideoPopup(){
    document.getElementById("videoPopup").classList.add("hidden");
}

function toggleMute(){
    const v = document.getElementById("introVideo");
    v.muted = !v.muted;
}
