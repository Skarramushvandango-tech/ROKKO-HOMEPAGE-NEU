const artistsData = {
    "anger-uschis": {
        name: "Anger Uschis",
        bio: "Mit ihrem Debütalbum „politisch inkontinent“ liefern die Anger Uschis ein politisch orientiertes Mahnmal gegen Hass, Hetze und Faschismus."
    },
    "silberstreif": {
        name: "Silberstreif",
        bio: "Ihre Single flammend Herz avanciert bereits in kleineren Clubs zum Sommerhit und liefert den Soundtrack zum süßen Schmerz der sommerlichen Liebschaften."
    },
    "henri-bellieu": {
        name: "Henri Bellieu",
        bio: "Der charmante Franzose liefert mit seiner Single la Femme bereits seine zweite Ode an die Weiblichkeit."
    },
    "fleur-et-beunie": {
        name: "Fléur et Beunié",
        bio: "French House Duo mit Feu Léger."
    },
    "sukram": {
        name: "SUKRAM",
        bio: "Deutschland du mein Fiebertraum."
    },
    "skaramush-vandango": {
        name: "SkaRamush Vandango",
        bio: "Labelchef, Producer, DJ und NeuroCentric Projekt."
    },
    "anthony-sinclair": {
        name: "Anthony Sinclair",
        bio: "80s Synth Retro Artist."
    }
};

/* WELCOME */
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("welcomeTitle").textContent =
        "Willkommen bei ROKKO! Records";

    document.getElementById("welcomeText").textContent =
        "ROKKO! Records ist ein unabhängiges Musiklabel für elektronische und experimentelle Künstler.";
});

/* MODAL */
function openArtistModal(id) {
    const a = artistsData[id];
    if (!a) return;

    document.getElementById("artistModal").classList.remove("hidden");
    document.getElementById("modalArtistName").textContent = a.name;
    document.getElementById("modalArtistBio").textContent = a.bio;
}

function closeArtistModal() {
    document.getElementById("artistModal").classList.add("hidden");
}

window.openArtistModal = openArtistModal;
window.closeArtistModal = closeArtistModal;

/* CLICK EVENTS */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card").forEach(c => {
        c.addEventListener("click", () => {
            openArtistModal(c.dataset.artist);
        });
    });
});
