const artists = {
    "anger-uschis": { name:"Anger Uschis", bio:"Politisches Debüt gegen Hass und Hetze." },
    "silberstreif": { name:"Silberstreif", bio:"Sommerhit mit emotionalem Druck." },
    "henri-bellieu": { name:"Henri Bellieu", bio:"Französischer Pop mit Stil." },
    "fleur-et-beunie": { name:"Fléur et Beunié", bio:"French House Sound." },
    "sukram": { name:"SUKRAM", bio:"Direkte Ansage." },
    "skaramush-vandango": { name:"SkaRamush Vandango", bio:"Labelchef & Producer." },
    "anthony-sinclair": { name:"Anthony Sinclair", bio:"80s Synth Atmosphäre." }
};

document.querySelectorAll(".artist").forEach(el => {
    el.addEventListener("click", () => {
        const a = artists[el.dataset.id];
        if (!a) return;

        document.getElementById("popupName").textContent = a.name;
        document.getElementById("popupBio").textContent = a.bio;

        document.getElementById("popup").classList.remove("hidden");
    });
});

document.getElementById("popup").addEventListener("click", () => {
    document.getElementById("popup").classList.add("hidden");
});
