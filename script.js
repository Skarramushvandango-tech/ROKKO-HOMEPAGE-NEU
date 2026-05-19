const artists = {
    "anger-uschis": {
        name:"Anger Uschis",
        bio:"Mit ihrem Debütalbum liefern sie ein politisches Mahnmal gegen Hass und Hetze."
    },
    "silberstreif": {
        name:"Silberstreif",
        bio:"Sommerhit Soundtrack für süßen Schmerz."
    },
    "henri-bellieu": {
        name:"Henri Bellieu",
        bio:"Französischer Pop mit Charme."
    },
    "fleur-et-beunie": {
        name:"Fléur et Beunié",
        bio:"French House Extraklasse."
    },
    "sukram": {
        name:"SUKRAM",
        bio:"Gegenwart in Klangform."
    },
    "skaramush-vandango": {
        name:"SkaRamush Vandango",
        bio:"Labelchef und NeuroCentric Projekt."
    },
    "anthony-sinclair": {
        name:"Anthony Sinclair",
        bio:"80s Synth Atmosphäre."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("welcomeTitle").textContent =
        "Willkommen bei ROKKO! Records";

    document.getElementById("welcomeText").textContent =
        "Independent Label für elektronische Musik.";

    document.querySelectorAll(".card").forEach(c => {
        c.addEventListener("click", () => {
            const a = artists[c.dataset.artist];
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
