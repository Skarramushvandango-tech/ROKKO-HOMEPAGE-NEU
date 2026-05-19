const artists = {
    "anger-uschis": { name:"Anger Uschis", bio:"Politisches Debütalbum." },
    "silberstreif": { name:"Silberstreif", bio:"Sommer Soundtrack." },
    "henri-bellieu": { name:"Henri Bellieu", bio:"Französischer Pop." },
    "fleur-et-beunie": { name:"Fléur et Beunié", bio:"French House." },
    "sukram": { name:"SUKRAM", bio:"Elektronische Gegenwart." },
    "skaramush-vandango": { name:"SkaRamush Vandango", bio:"Label & Producer." },
    "anthony-sinclair": { name:"Anthony Sinclair", bio:"80s Synth." }
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
