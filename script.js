const artists = {
    "anger-uschis": {
        name:"Anger Uschis",
        bio:"Politisches Debütalbum gegen Hass und Hetze."
    },
    "silberstreif": {
        name:"Silberstreif",
        bio:"Sommerhit mit emotionalem Sound."
    },
    "henri-bellieu": {
        name:"Henri Bellieu",
        bio:"Französischer Pop mit Stil."
    },
    "fleur-et-beunie": {
        name:"Fléur et Beunié",
        bio:"French House Projekt."
    },
    "sukram": {
        name:"SUKRAM",
        bio:"Elektronischer Kommentar zur Gegenwart."
    },
    "skaramush-vandango": {
        name:"SkaRamush Vandango",
        bio:"Labelchef und Producer."
    },
    "anthony-sinclair": {
        name:"Anthony Sinclair",
        bio:"80s Synth Ästhetik."
    }
};

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".card-wrapper").forEach(el => {
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
