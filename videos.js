// Données des vidéos (à remplacer par une API réelle)
const videos = [
    {
        id: 1,
        title: "Meilleurs moments du match d'ouverture",
        description: "Revivez les temps forts du match d'ouverture de la CAN 2024 entre la Côte d'Ivoire et la Guinée-Bissau.",
        thumbnail: "Images/videos/opening_match.jpg",
        videoUrl: "https://www.youtube.com/embed/example1",
        category: "highlights",
        date: "2024-01-13",
        teams: ["Côte d'Ivoire", "Guinée-Bissau"],
        duration: "5:30"
    },
    {
        id: 2,
        title: "Interview du sélectionneur du Sénégal",
        description: "Aliou Cissé revient sur la préparation des Lions de la Téranga pour la CAN 2024.",
        thumbnail: "Images/videos/senegal_interview.jpg",
        videoUrl: "https://www.youtube.com/embed/example2",
        category: "interviews",
        date: "2024-01-12",
        teams: ["Sénégal"],
        duration: "8:45"
    },
    {
        id: 3,
        title: "Résumé du match Maroc - RD Congo",
        description: "Les temps forts du match entre le Maroc et la RD Congo en phase de groupes.",
        thumbnail: "Images/videos/morocco_drc.jpg",
        videoUrl: "https://www.youtube.com/embed/example3",
        category: "resumes",
        date: "2024-01-14",
        teams: ["Maroc", "RD Congo"],
        duration: "4:15"
    },
    {
        id: 4,
        title: "Reportage : Les stades de la CAN 2024",
        description: "Découvrez les stades qui accueilleront les matchs de la CAN 2024 en Côte d'Ivoire.",
        thumbnail: "Images/videos/stadiums.jpg",
        videoUrl: "https://www.youtube.com/embed/example4",
        category: "reportages",
        date: "2024-01-11",
        teams: [],
        duration: "12:30"
    }
];

// Fonction pour créer une carte vidéo
function createVideoCard(video) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="video-card" data-video-id="${video.id}">
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">${video.title}</h3>
                    <div class="video-meta">
                        <span class="video-date">${formatDate(video.date)}</span>
                        <span class="video-category">${video.category}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Fonction pour formater la date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}

// Fonction pour mettre à jour le modal vidéo
function updateVideoModal(video) {
    const modal = document.getElementById('videoModal');
    const iframe = modal.querySelector('iframe');
    const title = modal.querySelector('.modal-title');
    const description = modal.querySelector('.video-description');
    const date = modal.querySelector('.video-date');
    const category = modal.querySelector('.video-category');

    iframe.src = video.videoUrl;
    title.textContent = video.title;
    description.textContent = video.description;
    date.textContent = formatDate(video.date);
    category.textContent = video.category;
}

// Fonction pour filtrer les vidéos
function filterVideos() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const teamFilter = document.getElementById('teamFilter').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    const filteredVideos = videos.filter(video => {
        const matchesCategory = categoryFilter === 'all' || video.category === categoryFilter;
        const matchesTeam = teamFilter === 'all' || video.teams.includes(teamFilter);
        const matchesSearch = video.title.toLowerCase().includes(searchInput) || 
                            video.description.toLowerCase().includes(searchInput);

        return matchesCategory && matchesTeam && matchesSearch;
    });

    displayVideos(filteredVideos);
}

// Fonction pour afficher les vidéos
function displayVideos(videosToShow) {
    const grid = document.getElementById('videosGrid');
    grid.innerHTML = videosToShow.map(video => createVideoCard(video)).join('');

    // Réattacher les écouteurs d'événements
    attachVideoCardListeners();
}

// Fonction pour attacher les écouteurs d'événements aux cartes vidéo
function attachVideoCardListeners() {
    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', () => {
            const videoId = parseInt(card.dataset.videoId);
            const video = videos.find(v => v.id === videoId);
            updateVideoModal(video);
            
            const modal = new bootstrap.Modal(document.getElementById('videoModal'));
            modal.show();
        });
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Afficher toutes les vidéos initialement
    displayVideos(videos);

    // Ajouter les équipes au filtre
    const teamFilter = document.getElementById('teamFilter');
    const teams = [...new Set(videos.flatMap(video => video.teams))];
    teams.forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamFilter.appendChild(option);
    });

    // Ajouter les écouteurs d'événements pour les filtres
    document.getElementById('categoryFilter').addEventListener('change', filterVideos);
    document.getElementById('teamFilter').addEventListener('change', filterVideos);
    document.getElementById('searchInput').addEventListener('input', filterVideos);

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
    
    document.querySelectorAll('.video-card').forEach(card => {
        observer.observe(card);
    });
}); 