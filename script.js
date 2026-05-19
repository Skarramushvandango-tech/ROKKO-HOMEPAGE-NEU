const artists = {
    "anger-uschis": {
        name: "Anger Uschis",
        bio: "Mit ihrem Debütalbum liefern sie ein politisches Mahnmal."
    },
    "silberstreif": {
        name: "Silberstreif",
        bio: "Sommerhit mit flammendem Herz."
    },
    "henri-bellieu": {
        name: "Henri Bellieu",
        bio: "Französischer Pop-Sound."
    },
    "fleur-et-beunie": {
        name: "Fléur et Beunié",
        bio: "French House Projekt."
    },
    "sukram": {
        name: "SUKRAM",
        bio: "Deutschland du mein Fiebertraum."
    },
    "skaramush-vandango": {
        name: "SkaRamush Vandango",
        bio: "Producer & Labelchef."
    },
    "anthony-sinclair": {
        name: "Anthony Sinclair",
        bio: "80s Synth Reise."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".artist-item").forEach(el => {
        el.addEventListener("click", () => {
            const a = artists[el.dataset.artist];
            if (!a) return;

            document.getElementById("artistModal").classList.remove("hidden");
            document.getElementById("modalArtistName").textContent = a.name;
            document.getElementById("modalArtistBio").textContent = a.bio;
        });
    });
});

function closeArtistModal() {
    document.getElementById("artistModal").classList.add("hidden");
}

window.closeArtistModal = closeArtistModal;
