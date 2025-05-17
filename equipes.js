// Données des équipes de la CAN 2025
const teams = [
    {
        id: 1,
        name: "Maroc",
        group: "A",
        flag: "Images/flags/maroc.png",
        ranking: 13,
        appearances: 19,
        titles: 1,
        coach: "Walid Regragui",
        players: {
            captain: { name: "Romain Saïss", position: "Défenseur" },
            historicTopScorer: { name: "Ahmed Faras", goals: 36 },
            afconTopScorer: { name: "Salaheddine Bassir", goals: 6 },
            star: { name: "Achraf Hakimi", position: "Défenseur" }
        }
    },
    {
        id: 2,
        name: "Mali",
        group: "A",
        flag: "Images/flags/mali.png",
        ranking: 46,
        appearances: 14,
        titles: 0,
        coach: "Eric Chelle",
        players: {
            captain: { name: "Hamari Traoré", position: "Défenseur" },
            historicTopScorer: { name: "Seydou Keita", goals: 25 },
            afconTopScorer: { name: "Frédéric Kanouté", goals: 5 },
            star: { name: "Yves Bissouma", position: "Milieu" }
        }
    },
    {
        id: 3,
        name: "Zambie",
        group: "A",
        flag: "Images/flags/zambie.png",
        ranking: 82,
        appearances: 19,
        titles: 1,
        coach: "Avram Grant",
        players: {
            captain: { name: "Patson Daka", position: "Attaquant" },
            historicTopScorer: { name: "Godfrey Chitalu", goals: 79 },
            afconTopScorer: { name: "Kalusha Bwalya", goals: 10 },
            star: { name: "Fashion Sakala", position: "Attaquant" }
        }
    },
    {
        id: 4,
        name: "Comores",
        group: "A",
        flag: "Images/flags/comores.png",
        ranking: 121,
        appearances: 2,
        titles: 0,
        coach: "Stefano Cusin",
        players: {
            captain: { name: "Nadjim Abdou", position: "Milieu" },
            historicTopScorer: { name: "El Fardou Ben", goals: 15 },
            afconTopScorer: { name: "Ahmed Mogni", goals: 2 },
            star: { name: "Youssouf M'Changama", position: "Milieu" }
        }
    },
    {
        id: 5,
        name: "Égypte",
        group: "B",
        flag: "Images/flags/egypte.png",
        ranking: 33,
        appearances: 27,
        titles: 7,
        coach: "Rui Vitória",
        players: {
            captain: { name: "Mohamed Salah", position: "Attaquant" },
            historicTopScorer: { name: "Hossam Hassan", goals: 69 },
            afconTopScorer: { name: "Hassan El-Shazly", goals: 12 },
            star: { name: "Mohamed Salah", position: "Attaquant" }
        }
    },
    {
        id: 6,
        name: "Afrique du Sud",
        group: "B",
        flag: "Images/flags/south_africa.png",
        ranking: 66,
        appearances: 12,
        titles: 1,
        coach: "Hugo Broos",
        players: {
            captain: { name: "Ronwen Williams", position: "Gardien" },
            historicTopScorer: { name: "Benni McCarthy", goals: 31 },
            afconTopScorer: { name: "Benni McCarthy", goals: 4 },
            star: { name: "Percy Tau", position: "Attaquant" }
        }
    },
    {
        id: 7,
        name: "Angola",
        group: "B",
        flag: "Images/flags/angola.png",
        ranking: 117,
        appearances: 10,
        titles: 0,
        coach: "Pedro Gonçalves",
        players: {
            captain: { name: "Fredy", position: "Milieu" },
            historicTopScorer: { name: "Akwá", goals: 39 },
            afconTopScorer: { name: "Manucho", goals: 3 },
            star: { name: "M'Bala Nzola", position: "Attaquant" }
        }
    },
    {
        id: 8,
        name: "Zimbabwe",
        group: "B",
        flag: "Images/flags/zimbabwe.png",
        ranking: 125,
        appearances: 6,
        titles: 0,
        coach: "Baltemar Brito",
        players: {
            captain: { name: "Knowledge Musona", position: "Attaquant" },
            historicTopScorer: { name: "Peter Ndlovu", goals: 38 },
            afconTopScorer: { name: "Knowledge Musona", goals: 3 },
            star: { name: "Marshall Munetsi", position: "Milieu" }
        }
    },
    {
        id: 9,
        name: "Nigeria",
        group: "C",
        flag: "Images/flags/nigeria.png",
        ranking: 40,
        appearances: 21,
        titles: 3,
        coach: "José Peseiro",
        players: {
            captain: { name: "William Troost-Ekong", position: "Défenseur" },
            historicTopScorer: { name: "Rashidi Yekini", goals: 37 },
            afconTopScorer: { name: "Segun Odegbami", goals: 6 },
            star: { name: "Victor Osimhen", position: "Attaquant" }
        }
    },
    {
        id: 10,
        name: "Tunisie",
        group: "C",
        flag: "Images/flags/tunisie.png",
        ranking: 28,
        appearances: 22,
        titles: 1,
        coach: "Jalel Kadri",
        players: {
            captain: { name: "Youssef Msakni", position: "Attaquant" },
            historicTopScorer: { name: "Issam Jemâa", goals: 36 },
            afconTopScorer: { name: "Francileudo Santos", goals: 6 },
            star: { name: "Ellyes Skhiri", position: "Milieu" }
        }
    },
    {
        id: 11,
        name: "Ouganda",
        group: "C",
        flag: "Images/flags/uganda.png",
        ranking: 90,
        appearances: 8,
        titles: 0,
        coach: "Milutin Sredojević",
        players: {
            captain: { name: "Emmanuel Okwi", position: "Attaquant" },
            historicTopScorer: { name: "Geoffrey Massa", goals: 29 },
            afconTopScorer: { name: "Phillip Omondi", goals: 2 },
            star: { name: "Farouk Miya", position: "Milieu" }
        }
    },
    {
        id: 12,
        name: "Tanzanie",
        group: "C",
        flag: "Images/flags/tanzanie.png",
        ranking: 121,
        appearances: 4,
        titles: 0,
        coach: "Adel Amrouche",
        players: {
            captain: { name: "Mbwana Samatta", position: "Attaquant" },
            historicTopScorer: { name: "Mbwana Samatta", goals: 23 },
            afconTopScorer: { name: "Mbwana Samatta", goals: 1 },
            star: { name: "Simon Msuva", position: "Attaquant" }
        }
    },
    {
        id: 13,
        name: "Sénégal",
        group: "D",
        flag: "Images/flags/senegal.png",
        ranking: 20,
        appearances: 18,
        titles: 1,
        coach: "Aliou Cissé",
        players: {
            captain: { name: "Kalidou Koulibaly", position: "Défenseur" },
            historicTopScorer: { name: "Henri Camara", goals: 31 },
            afconTopScorer: { name: "Jules François Bocandé", goals: 4 },
            star: { name: "Sadio Mané", position: "Attaquant" }
        }
    },
    {
        id: 14,
        name: "RD Congo",
        group: "D",
        flag: "Images/flags/rd_congo.png",
        ranking: 67,
        appearances: 21,
        titles: 2,
        coach: "Sébastien Desabre",
        players: {
            captain: { name: "Chancel Mbemba", position: "Défenseur" },
            historicTopScorer: { name: "Mulamba Ndaye", goals: 35 },
            afconTopScorer: { name: "Pierre Kalala Mukendi", goals: 6 },
            star: { name: "Yoane Wissa", position: "Attaquant" }
        }
    },
    {
        id: 15,
        name: "Bénin",
        group: "D",
        flag: "Images/flags/benin.png",
        ranking: 95,
        appearances: 5,
        titles: 0,
        coach: "Gernot Rohr",
        players: {
            captain: { name: "Stéphane Sessègnon", position: "Milieu" },
            historicTopScorer: { name: "Razak Omotoyossi", goals: 22 },
            afconTopScorer: { name: "Mickaël Poté", goals: 2 },
            star: { name: "Steve Mounié", position: "Attaquant" }
        }
    },
    {
        id: 16,
        name: "Botswana",
        group: "D",
        flag: "Images/flags/botswana.png",
        ranking: 150,
        appearances: 2,
        titles: 0,
        coach: "Mogomotsi Mpote",
        players: {
            captain: { name: "Thatayaone Ditlhokwe", position: "Défenseur" },
            historicTopScorer: { name: "Dipsy Selolwane", goals: 14 },
            afconTopScorer: { name: "Jerome Ramatlhakwane", goals: 1 },
            star: { name: "Mothusi Cooper", position: "Milieu" }
        }
    },
    {
        id: 17,
        name: "Algérie",
        group: "E",
        flag: "Images/flags/algerie.png",
        ranking: 30,
        appearances: 21,
        titles: 2,
        coach: "Djamel Belmadi",
        players: {
            captain: { name: "Riyad Mahrez", position: "Attaquant" },
            historicTopScorer: { name: "Islam Slimani", goals: 42 },
            afconTopScorer: { name: "Islam Slimani", goals: 5 },
            star: { name: "Ismaël Bennacer", position: "Milieu" }
        }
    },
    {
        id: 18,
        name: "Burkina Faso",
        group: "E",
        flag: "Images/flags/burkina_faso.png",
        ranking: 61,
        appearances: 14,
        titles: 0,
        coach: "Hubert Velud",
        players: {
            captain: { name: "Bertrand Traoré", position: "Attaquant" },
            historicTopScorer: { name: "Moumouni Dagano", goals: 35 },
            afconTopScorer: { name: "Alain Traoré", goals: 4 },
            star: { name: "Edmond Tapsoba", position: "Défenseur" }
        }
    },
    {
        id: 19,
        name: "Guinée Équatoriale",
        group: "E",
        flag: "Images/flags/guinee_equatoriale.png",
        ranking: 88,
        appearances: 5,
        titles: 0,
        coach: "Juan Micha",
        players: {
            captain: { name: "Emilio Nsue", position: "Attaquant" },
            historicTopScorer: { name: "Emilio Nsue", goals: 16 },
            afconTopScorer: { name: "Emilio Nsue", goals: 5 },
            star: { name: "Pablo Ganet", position: "Milieu" }
        }
    },
    {
        id: 20,
        name: "Soudan",
        group: "E",
        flag: "Images/flags/sudan.png",
        ranking: 128,
        appearances: 10,
        titles: 1,
        coach: "Zdravko Logarušić",
        players: {
            captain: { name: "Ramadan Agab", position: "Milieu" },
            historicTopScorer: { name: "Mudather El Tahir", goals: 31 },
            afconTopScorer: { name: "Ahmed Bashir", goals: 3 },
            star: { name: "Mohamed Abdel Rahman", position: "Attaquant" }
        }
    },
    {
        id: 21,
        name: "Côte d'Ivoire",
        group: "F",
        flag: "Images/flags/cote_ivoire.png",
        ranking: 39,
        appearances: 26,
        titles: 3,
        coach: "Emerse Faé",
        players: {
            captain: { name: "Serge Aurier", position: "Défenseur" },
            historicTopScorer: { name: "Didier Drogba", goals: 65 },
            afconTopScorer: { name: "Laurent Pokou", goals: 14 },
            star: { name: "Sébastien Haller", position: "Attaquant" }
        }
    },
    {
        id: 22,
        name: "Cameroun",
        group: "F",
        flag: "Images/flags/cameroun.png",
        ranking: 46,
        appearances: 22,
        titles: 5,
        coach: "Rigobert Song",
        players: {
            captain: { name: "Vincent Aboubakar", position: "Attaquant" },
            historicTopScorer: { name: "Samuel Eto'o", goals: 56 },
            afconTopScorer: { name: "Samuel Eto'o", goals: 18 },
            star: { name: "André-Frank Zambo Anguissa", position: "Milieu" }
        }
    },
    {
        id: 23,
        name: "Gabon",
        group: "F",
        flag: "Images/flags/gabon.png",
        ranking: 85,
        appearances: 9,
        titles: 0,
        coach: "Patrice Neveu",
        players: {
            captain: { name: "Pierre-Emerick Aubameyang", position: "Attaquant" },
            historicTopScorer: { name: "Pierre-Emerick Aubameyang", goals: 30 },
            afconTopScorer: { name: "Daniel Cousin", goals: 3 },
            star: { name: "Pierre-Emerick Aubameyang", position: "Attaquant" }
        }
    },
    {
        id: 24,
        name: "Mozambique",
        group: "F",
        flag: "Images/flags/mozambique.png",
        ranking: 111,
        appearances: 6,
        titles: 0,
        coach: "Chiquinho Conde",
        players: {
            captain: { name: "Dominguez", position: "Défenseur" },
            historicTopScorer: { name: "Tico-Tico", goals: 27 },
            afconTopScorer: { name: "Tico-Tico", goals: 2 },
            star: { name: "Reinildo", position: "Défenseur" }
        }
    }
];

// Fonction pour créer une carte d'équipe
function createTeamCard(team) {
    return `
        <div class="col-md-4 col-sm-6">
            <div class="team-card" data-team-id="${team.id}">
                <div class="flag-container">
                    <img src="${team.flag}" alt="Drapeau ${team.name}">
                </div>
                <div class="team-info">
                    <h3 class="team-name">${team.name}</h3>
                    <div class="team-details">
                        <p>Classement FIFA: ${team.ranking}</p>
                        <p>Participations: ${team.appearances}</p>
                    </div>
                    <span class="team-group">Groupe ${team.group}</span>
                </div>
            </div>
        </div>
    `;
}

// Fonction pour créer le contenu du modal
function createModalContent(team) {
    return `
        <div class="team-modal-header" style="background-image: url('${team.flag}')">
            <div class="flag-container">
                <img src="${team.flag}" alt="Drapeau ${team.name}">
            </div>
            <div>
                <h2>${team.name}</h2>
                <span class="group-badge">Groupe ${team.group}</span>
            </div>
        </div>
        <div class="team-stats">
            <div class="stat-item">
                <div class="stat-value">${team.ranking}</div>
                <div class="stat-label">Classement FIFA</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${team.appearances}</div>
                <div class="stat-label">Participations</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${team.titles}</div>
                <div class="stat-label">Titres CAN</div>
            </div>
        </div>
        <div class="team-players">
            <h3>Joueurs Clés</h3>
            <div class="key-players">
                <div class="key-player">
                    <h4>Capitaine</h4>
                    <p>${team.players.captain.name}</p>
                    <span class="position">${team.players.captain.position}</span>
                </div>
                <div class="key-player">
                    <h4>Meilleur Buteur Historique</h4>
                    <p>${team.players.historicTopScorer.name}</p>
                    <span class="goals">${team.players.historicTopScorer.goals} buts</span>
                </div>
                <div class="key-player">
                    <h4>Meilleur Buteur CAN</h4>
                    <p>${team.players.afconTopScorer.name}</p>
                    <span class="goals">${team.players.afconTopScorer.goals} buts</span>
                </div>
                <div class="key-player">
                    <h4>Star de l'Équipe</h4>
                    <p>${team.players.star.name}</p>
                    <span class="position">${team.players.star.position}</span>
                </div>
            </div>
            <div class="team-coach">
                <h4>Sélectionneur</h4>
                <p>${team.coach}</p>
            </div>
        </div>
    `;
}

// Fonction pour filtrer les équipes
function filterTeams() {
    const searchTerm = document.getElementById('searchTeam').value.toLowerCase();
    const groupFilter = document.getElementById('groupFilter').value;

    const filteredTeams = teams.filter(team => {
        const matchesSearch = team.name.toLowerCase().includes(searchTerm);
        const matchesGroup = groupFilter === 'all' || team.group === groupFilter;
        return matchesSearch && matchesGroup;
    });

    displayTeams(filteredTeams);
}

// Fonction pour afficher les équipes
function displayTeams(teamsToDisplay) {
    const container = document.getElementById('teamsContainer');
    container.innerHTML = teamsToDisplay.map(team => createTeamCard(team)).join('');
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Afficher toutes les équipes au chargement
    displayTeams(teams);

    // Ajouter les écouteurs d'événements pour les filtres
    document.getElementById('searchTeam').addEventListener('input', filterTeams);
    document.getElementById('groupFilter').addEventListener('change', filterTeams);

    // Gérer l'ouverture du modal
    document.getElementById('teamsContainer').addEventListener('click', (e) => {
        const teamCard = e.target.closest('.team-card');
        if (teamCard) {
            const teamId = parseInt(teamCard.dataset.teamId);
            const team = teams.find(t => t.id === teamId);
            if (team) {
                document.getElementById('teamModalContent').innerHTML = createModalContent(team);
                const modal = new bootstrap.Modal(document.getElementById('teamModal'));
                modal.show();
            }
        }
    });
}); 
