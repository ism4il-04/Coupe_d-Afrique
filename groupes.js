// Données des groupes (à remplacer par une API réelle)
const groupes = [
    {
        nom: "Groupe A",
        icon: "bi-trophy",
        equipes: [
            { nom: "Comores", flag: "bi-flag-fill", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Mali", flag: "bi-flag-fill", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Maroc", flag: "bi-flag-fill", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Zambie", flag: "bi-flag-fill", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 }
        ]
    },
    {
        nom: "Groupe B",
        icon: "🇦🇴",
        equipes: [
            { nom: "Angola", flag: "Images/flags/angola.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Égypte", flag: "Images/flags/egypt.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Afrique du Sud", flag: "Images/flags/south_africa.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Zimbabwe", flag: "Images/flags/zimbabwe.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 }
        ]
    },
    {
        nom: "Groupe C",
        icon: "🇳🇬",
        equipes: [
            { nom: "Nigeria", flag: "Images/flags/nigeria.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Tanzanie", flag: "Images/flags/tanzania.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Tunisie", flag: "Images/flags/tunisia.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Ouganda", flag: "Images/flags/uganda.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 }
        ]
    },
    {
        nom: "Groupe D",
        icon: "🇧🇯",
        equipes: [
            { nom: "Bénin", flag: "Images/flags/benin.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Botswana", flag: "Images/flags/botswana.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "RD Congo", flag: "Images/flags/dr_congo.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Sénégal", flag: "Images/flags/senegal.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 }
        ]
    },
    {
        nom: "Groupe E",
        icon: "🇩🇿",
        equipes: [
            { nom: "Algérie", flag: "Images/flags/algeria.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Burkina Faso", flag: "Images/flags/burkina_faso.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Guinée équatoriale", flag: "Images/flags/equatorial_guinea.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Soudan", flag: "Images/flags/sudan.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 }
        ]
    },
    {
        nom: "Groupe F",
        icon: "🇨🇲",
        equipes: [
            { nom: "Cameroun", flag: "Images/flags/cameroon.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Côte d'Ivoire", flag: "Images/flags/cote_divoire.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Gabon", flag: "Images/flags/gabon.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 },
            { nom: "Mozambique", flag: "Images/flags/mozambique.png", played: 0, won: 0, drawn: 0, lost: 0, for: 0, against: 0, diff: 0, points: 0 }
        ]
    }
];

// Fonction pour créer le tableau d'un groupe
function createGroupTable(groupe) {
    return `
        <table class="group-table">
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
            <tbody>
                ${groupe.equipes.map(equipe => `
                    <tr class="team-row" data-team="${equipe.nom}">
                        <td><i class="bi ${equipe.flag} text-primary"></i></td>
                        <td>${equipe.nom}</td>
                        <td>${equipe.played}</td>
                        <td>${equipe.won}</td>
                        <td>${equipe.drawn}</td>
                        <td>${equipe.lost}</td>
                        <td>${equipe.for}</td>
                        <td>${equipe.against}</td>
                        <td>${equipe.diff}</td>
                        <td>${equipe.points}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Fonction pour mettre à jour le modal avec les détails d'une équipe
function updateTeamModal(equipe) {
    const modal = document.getElementById('teamDetailsModal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="team-info">
            <div class="row">
                <div class="col-md-4 text-center">
                    <i class="bi ${equipe.flag} text-primary" style="font-size: 4rem;"></i>
                    <h3 class="team-name mt-3">${equipe.nom}</h3>
                </div>
                <div class="col-md-8">
                    <div class="team-stats">
                        <h4>Statistiques</h4>
                        <div class="stats-grid">
                            <div class="stat-item">
                                <span class="stat-label">Matches joués</span>
                                <span class="stat-value">${equipe.played}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Victoires</span>
                                <span class="stat-value">${equipe.won}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Nuls</span>
                                <span class="stat-value">${equipe.drawn}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Défaites</span>
                                <span class="stat-value">${equipe.lost}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Buts marqués</span>
                                <span class="stat-value">${equipe.for}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Buts encaissés</span>
                                <span class="stat-value">${equipe.against}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('groups-container');
    
    // Générer les cartes de groupe
    groupes.forEach(groupe => {
        const card = document.createElement('div');
        card.className = 'group-card';
        card.innerHTML = `
            <div class="group-header">
                <span class="group-icon">${groupe.icon}</span>
                <span class="group-name">${groupe.nom}</span>
            </div>
            ${createGroupTable(groupe)}
        `;
        container.appendChild(card);
    });
    
    // Ajouter les écouteurs d'événements pour les lignes d'équipe
    document.querySelectorAll('.team-row').forEach(row => {
        row.addEventListener('click', () => {
            const teamName = row.dataset.team;
            const groupe = groupes.find(g => g.equipes.some(e => e.nom === teamName));
            const equipe = groupe.equipes.find(e => e.nom === teamName);
            updateTeamModal(equipe);
            
            const modal = new bootstrap.Modal(document.getElementById('teamDetailsModal'));
            modal.show();
        });
    });
    
    // Animation au défilement
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.group-card').forEach(card => {
        observer.observe(card);
    });
}); 