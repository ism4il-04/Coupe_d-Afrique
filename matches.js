const groupes = [
    {
        nom: "Groupe A",
        icon: "🇰🇲",
        equipes: [
            { nom: "Comores", flag: "comoros.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Mali", flag: "mali.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Maroc", flag: "morocco.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Zambie", flag: "zambia.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 }
        ],
        matches: []
    },
    {
        nom: "Groupe B",
        icon: "🇦🇴",
        equipes: [
            { nom: "Angola", flag: "angola.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Égypte", flag: "egypt.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Afrique du Sud", flag: "south_africa.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Zimbabwe", flag: "zimbabwe.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 }
        ],
        matches: []
    },
    {
        nom: "Groupe C",
        icon: "🇳🇬",
        equipes: [
            { nom: "Nigeria", flag: "nigeria.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Tanzanie", flag: "tanzania.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Tunisie", flag: "tunisia.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Ouganda", flag: "uganda.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 }
        ],
        matches: []
    },
    {
        nom: "Groupe D",
        icon: "🇧🇯",
        equipes: [
            { nom: "Bénin", flag: "benin.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Botswana", flag: "botswana.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "RD Congo", flag: "dr_congo.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Sénégal", flag: "senegal.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 }
        ],
        matches: []
    },
    {
        nom: "Groupe E",
        icon: "🇩🇿",
        equipes: [
            { nom: "Algérie", flag: "algeria.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Burkina Faso", flag: "burkina_faso.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Guinée équatoriale", flag: "equatorial_guinea.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Soudan", flag: "sudan.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 }
        ],
        matches: []
    },
    {
        nom: "Groupe F",
        icon: "🇨🇲",
        equipes: [
            { nom: "Cameroun", flag: "cameroon.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Côte d'Ivoire", flag: "cote_divoire.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Gabon", flag: "gabon.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Mozambique", flag: "mozambique.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 }
        ],
        matches: []
    }
];

// Génération dynamique des groupes avec tableau de scores et drapeaux
const container = document.getElementById('groups-container');
groupes.forEach((groupe, idx) => {
    const card = document.createElement('div');
    card.className = 'group-card';
    let table = `<table class="group-table">
        <thead>
            <tr>
                <th></th>
                <th>Équipe</th>
                <th>J</th>
                <th>G</th>
                <th>N</th>
                <th>P</th>
                <th>BP</th>
                <th>BC</th>
                <th>Diff</th>
                <th>Pts</th>
            </tr>
        </thead>
        <tbody>`;
    groupe.equipes.forEach(eq => {
        table += `<tr>
            <td><img src="Images/flags/${eq.flag}" alt="${eq.nom}" style="width:28px;height:20px;border-radius:3px;vertical-align:middle;"></td>
            <td>${eq.nom}</td>
            <td>${eq.played}</td>
            <td>${eq.won}</td>
            <td>${eq.drawn}</td>
            <td>${eq.lost}</td>
            <td>${eq.for}</td>
            <td>${eq.against}</td>
            <td>${eq.diff}</td>
            <td>${eq.points}</td>
        </tr>`;
    });
    table += `</tbody></table>`;

    card.innerHTML = `
        <div class="group-header">
            <span class="group-icon">${groupe.icon}</span>
            <span class="group-name">${groupe.nom}</span>
        </div>
        ${table}
        <button class="group-toggle" data-idx="${idx}">Voir détails</button>
        <div class="matches-list" id="matches-list-${idx}">
            <!-- Les matches s'afficheront ici -->
        </div>
    `;
    container.appendChild(card);
});

document.querySelectorAll('.group-toggle').forEach(btn => {
    btn.addEventListener('click', function() {
        const idx = this.getAttribute('data-idx');
        const list = document.getElementById('matches-list-' + idx);
        list.classList.toggle('active');
        this.textContent = list.classList.contains('active') ? "Masquer les détails" : "Voir détails";
    });
});