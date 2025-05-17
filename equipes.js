// Données des équipes de la CAN 2025
// C'est notre "base de données" qui contient toutes les infos sur les 24 équipes qualifiées
// Chaque équipe a un ID unique, un nom, un groupe, un drapeau, et plein d'infos utiles
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
        coach: "Tom Saintfiet",
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
        coach: "Houssam Hassan",
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
        coach: "Michael Nees",
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
        coach: "Éric Chelle",
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
        coach: "Sami Trabelsi",
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
        coach: "Paul Put",
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
        coach: "Hemed Morocco",
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
        coach: "Pape Thiaw",
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
        coach: "Morena Ramoreboli",
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
        coach: "Vladimir Petković",
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
        coach: "Brama Traoré[",
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
        coach: "James Kwesi Appiah",
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
        coach: "Marc Brys",
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
        coach: "Thierry Mouyouma",
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
// Cette fonction prend les données d'une équipe et génère le HTML pour l'afficher dans la grille
// Chaque carte montre le drapeau, le nom, le classement et les participations
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
// Cette fonction génère le HTML pour le popup qui s'affiche quand on clique sur une équipe
// On y voit plus d'infos comme les titres, les joueurs clés et le sélectionneur
function createModalContent(team) {
    return `
        <div class="team-modal-header">
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
                <div class="stat-label">CLASSEMENT FIFA</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${team.appearances}</div>
                <div class="stat-label">PARTICIPATIONS</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${team.titles}</div>
                <div class="stat-label">TITRES CAN</div>
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

// *** FILTRAGE DES ÉQUIPES ***
// Cette fonction est appelée quand l'utilisateur cherche ou filtre les équipes
// Elle gère à la fois la recherche par texte et le filtre par groupe
function filterTeams() {
    // On récupère la valeur de la barre de recherche (en minuscules pour une recherche insensible à la casse)
    const searchTerm = document.getElementById('searchTeam').value.toLowerCase();
    // On récupère le groupe sélectionné dans le menu déroulant
    const groupFilter = document.getElementById('groupFilter').value;

    // Si on est en vue groupes et qu'on fait une recherche, on bascule automatiquement en vue grille
    // pour mieux afficher les résultats de recherche
    const groupsContainer = document.getElementById('groupsContainer');
    const teamsContainer = document.getElementById('teamsContainer');
    const gridView = document.getElementById('gridView');
    const groupView = document.getElementById('groupView');
    
    if (groupsContainer.style.display !== 'none' && (searchTerm || groupFilter !== 'all')) {
        // On revient à la vue grille si on lance une recherche depuis la vue groupes
        teamsContainer.style.display = 'flex';
        groupsContainer.style.display = 'none';
        gridView.classList.add('active');
        groupView.classList.remove('active');
    }

    // On filtre le tableau des équipes selon les critères de recherche
    const filteredTeams = teams.filter(team => {
        // Une équipe correspond si son nom contient le terme recherché...
        const matchesSearch = team.name.toLowerCase().includes(searchTerm);
        // ...et si elle est dans le groupe sélectionné (ou si "Tous les groupes" est sélectionné)
        const matchesGroup = groupFilter === 'all' || team.group === groupFilter;
        // On ne garde l'équipe que si les deux conditions sont vraies
        return matchesSearch && matchesGroup;
    });

    // On affiche les résultats filtrés
    displayTeams(filteredTeams);
}

// *** AFFICHAGE DES ÉQUIPES ***
// Cette fonction prend un tableau d'équipes et les affiche dans la vue grille
// Elle est appelée après le filtrage ou au chargement initial
function displayTeams(teamsToDisplay) {
    // On récupère le conteneur HTML où on va insérer les cartes d'équipe
    const container = document.getElementById('teamsContainer');
    
    // Pour chaque équipe, on crée sa carte HTML puis on les joint toutes ensemble
    // La méthode .map() transforme chaque objet équipe en HTML, puis .join('') les concatène
    container.innerHTML = teamsToDisplay.map(team => createTeamCard(team)).join('');
    
    // Une fois les cartes insérées dans le DOM, on ajoute des écouteurs d'événements
    // pour que chaque carte ouvre un modal quand on clique dessus
    addTeamCardEventListeners();
}

// *** INITIALISATION AU CHARGEMENT DE LA PAGE ***
// Cette fonction s'exécute quand tout le HTML est chargé
// Elle met en place les événements et affiche les équipes initiales
document.addEventListener('DOMContentLoaded', () => {
    // On commence par afficher toutes les équipes
    displayTeams(teams);
    
    // On ajoute les écouteurs d'événements pour les boutons de navigation du modal
    setupModalNavigation();
    
    // On rend la barre de recherche et le filtre par groupe fonctionnels
    document.getElementById('searchTeam').addEventListener('input', filterTeams);
    document.getElementById('groupFilter').addEventListener('change', filterTeams);
    
    // On configure les boutons de basculement entre vue grille et vue groupes
    setupViewToggle();
});

// *** MISE EN PLACE DES ÉCOUTEURS D'ÉVÉNEMENTS POUR LES CARTES D'ÉQUIPE ***
// Cette fonction ajoute un événement de clic à chaque carte d'équipe
function addTeamCardEventListeners() {
    document.querySelectorAll('.team-card').forEach(card => {
        card.addEventListener('click', () => {
            // Récupère l'ID de l'équipe à partir de l'attribut data-team-id
            const teamId = parseInt(card.dataset.teamId);
            // Trouve cette équipe dans notre tableau de données
            const team = teams.find(t => t.id === teamId);
            
            if (team) {
                // Stocke l'ID de l'équipe actuellement affichée (pour la navigation)
                window.currentTeamId = teamId;
                // Remplit le modal avec le contenu de cette équipe
                document.getElementById('teamModalContent').innerHTML = createModalContent(team);
                // Affiche le modal
                const modal = new bootstrap.Modal(document.getElementById('teamModal'));
                modal.show();
            }
        });
    });
}

// *** CONFIGURATION DE LA NAVIGATION ENTRE ÉQUIPES DANS LE MODAL ***
// Cette fonction configure les boutons "Équipe précédente" et "Équipe suivante"
function setupModalNavigation() {
    const prevTeamBtn = document.getElementById('prevTeam');
    const nextTeamBtn = document.getElementById('nextTeam');
    
    // Variable globale pour stocker l'ID de l'équipe actuellement affichée
    window.currentTeamId = 0;
    
    prevTeamBtn.addEventListener('click', () => {
        navigateTeam(-1); // Aller à l'équipe précédente
    });
    
    nextTeamBtn.addEventListener('click', () => {
        navigateTeam(1); // Aller à l'équipe suivante
    });
}

// *** NAVIGATION ENTRE LES ÉQUIPES DANS LE MODAL ***
// Cette fonction permet de passer d'une équipe à une autre sans fermer le modal
function navigateTeam(direction) {
    if (window.currentTeamId === 0) return;
    
    // Trouver l'index actuel de l'équipe dans le tableau
    let currentIndex = teams.findIndex(t => t.id === window.currentTeamId);
    // Calculer le nouvel index en ajoutant la direction (-1 ou +1)
    let newIndex = currentIndex + direction;
    
    // Gérer le cas où on dépasse les bornes du tableau (boucler)
    if (newIndex < 0) newIndex = teams.length - 1; // Si on recule depuis la première équipe, aller à la dernière
    if (newIndex >= teams.length) newIndex = 0; // Si on avance depuis la dernière équipe, revenir à la première
    
    // Récupérer la nouvelle équipe et mettre à jour l'affichage
    const newTeam = teams[newIndex];
    window.currentTeamId = newTeam.id;
    
    // Mettre à jour le contenu du modal
    document.getElementById('teamModalContent').innerHTML = createModalContent(newTeam);
}

// *** CONFIGURATION DU BASCULEMENT ENTRE VUE GRILLE ET VUE GROUPES ***
// Cette fonction configure les boutons pour passer d'une vue à l'autre
function setupViewToggle() {
    const gridView = document.getElementById('gridView');
    const groupView = document.getElementById('groupView');
    const teamsContainer = document.getElementById('teamsContainer');
    const groupsContainer = document.getElementById('groupsContainer');
    
    // Quand on clique sur le bouton "Grille"
    gridView.addEventListener('click', () => {
        // On active visuellement ce bouton
        gridView.classList.add('active');
        groupView.classList.remove('active');
        // On affiche la vue grille et on cache la vue groupes
        teamsContainer.style.display = 'flex';
        groupsContainer.style.display = 'none';
    });
    
    // Quand on clique sur le bouton "Groupes"
    groupView.addEventListener('click', () => {
        // On active visuellement ce bouton
        groupView.classList.add('active');
        gridView.classList.remove('active');
        // On affiche la vue groupes et on cache la vue grille
        teamsContainer.style.display = 'none';
        groupsContainer.style.display = 'block';
        
        // Si c'est la première fois qu'on affiche les groupes, on génère la vue
        if (groupsContainer.querySelector('.group-card') === null) {
            generateGroupsView();
        }
    });
}

// *** GÉNÉRATION DE LA VUE PAR GROUPES ***
// Cette fonction crée la vue qui organise les équipes par groupe (A, B, C, etc.)
function generateGroupsView() {
    // On prépare un objet pour stocker les équipes par groupe
    const groups = {A: [], B: [], C: [], D: [], E: [], F: []};
    
    // On place chaque équipe dans son groupe correspondant
    teams.forEach(team => {
        if (groups[team.group]) {
            groups[team.group].push(team);
        }
    });
    
    // On vide le conteneur et on prépare la structure
    const groupsContainer = document.getElementById('groupsContainer');
    groupsContainer.innerHTML = '<div class="row"></div>';
    const groupsRow = groupsContainer.querySelector('.row');
    
    // Pour chaque groupe, on crée un bloc avec ses équipes
    Object.keys(groups).forEach(groupKey => {
        const groupTeams = groups[groupKey];
        const groupCard = document.createElement('div');
        groupCard.className = 'col-md-6 mb-4';
        
        // On crée le HTML pour l'en-tête du groupe
        let groupContent = `
            <div class="group-card">
                <div class="group-header">
                    <h3>Groupe ${groupKey}</h3>
                </div>
                <div class="group-teams">
        `;
        
        // On ajoute chaque équipe du groupe
        groupTeams.forEach(team => {
            groupContent += `
                <div class="group-team-item" data-team-id="${team.id}">
                    <div class="team-flag">
                        <img src="${team.flag}" alt="${team.name}" width="50" height="35">
                    </div>
                    <div class="team-name">${team.name}</div>
                </div>
            `;
        });
        
        // On ferme les balises HTML
        groupContent += `
                </div>
            </div>
        `;
        
        // On insère le contenu dans le DOM
        groupCard.innerHTML = groupContent;
        groupsRow.appendChild(groupCard);
    });
    
    // On ajoute un message et un bouton pour voir plus de détails
    const detailsMessage = document.createElement('div');
    detailsMessage.className = 'col-12 text-center mt-4 mb-5 groups-more-details';
    detailsMessage.innerHTML = `
        <div class="more-details-container">
            <p>Pour plus de détails sur les groupes, les classements et les statistiques</p>
            <a href="groupes.html" class="btn btn-primary more-details-btn">
                <i class="fas fa-users me-2"></i>Consulter la page Groupes
            </a>
        </div>
    `;
    groupsRow.appendChild(detailsMessage);
    
    // On rend les équipes cliquables dans cette vue aussi
    document.querySelectorAll('.group-team-item').forEach(teamItem => {
        teamItem.addEventListener('click', () => {
            const teamId = parseInt(teamItem.dataset.teamId);
            const team = teams.find(t => t.id === teamId);
            if (team) {
                // Même logique que pour les cartes: on remplit et affiche le modal
                window.currentTeamId = teamId;
                document.getElementById('teamModalContent').innerHTML = createModalContent(team);
                const modal = new bootstrap.Modal(document.getElementById('teamModal'));
                modal.show();
            }
        });
    });
}

// Au chargement initial, on affiche toutes les équipes
displayTeams(teams); 
