// Données des vidéos (à remplacer par une API réelle)
const videos = [
    {
        id: 1,
        title: "Meilleurs moments du match d'ouverture",
        description: "Revivez les temps forts du match d'ouverture de la CAN 2024 entre la Côte d'Ivoire et la Guinée-Bissau.",
        thumbnail: "Images/CAN-2023-ouverture.jpg",
        videoUrl: "https://www.youtube.com/embed/PV5K80irzuA",
        category: "highlights",
        date: "2024-01-13",
        teams: ["Côte d'Ivoire", "Guinée-Bissau"],
        duration: "5:30"
    },
    {
        id: 2,
        title: "Interview du sélectionneur du Maroc",
        description: "Walid Regragui revient sur la préparation des Lions d'Atlas pour la CAN 2025.",
        thumbnail: "Images/Walid-regragui.jpeg",
        videoUrl: "https://www.youtube.com/embed/0Rhxilrwe9g",
        category: "interviews",
        date: "2024-01-12",
        teams: ["Sénégal"],
        duration: "8:45"
    },
    {
        id: 3,
        title: "Résumé du match Maroc - Afrique du Sud  CAN 2023",
        description: "Les temps forts du match entre le Maroc et l'Afrique du sud en quart de finale.",
        thumbnail: "Images/marocvRsa.jpg",
        videoUrl: "https://www.youtube.com/embed/Qp-mqec-mNI",
        category: "resumes",
        date: "2024-01-31",
        teams: ["Maroc", "RSA"],
        duration: "4:15"
    },
    {
        id: 4,
        title: "Reportage : Les stades de la CAN 2025",
        description: "Découvrez les stades qui accueilleront les matchs de la CAN 2025 en Maroc.",
        thumbnail: "Images/CAF.webp",
        videoUrl: "https://www.youtube.com/embed/MDoGpSAE0Fc",
        category: "reportages",
        date: "2024-01-31",
        teams: [],
        duration: "12:30"
    },
    {
        id: 5,
        title: "Finale CAN 2024 : Côte d'Ivoire vs Nigeria",
        description: "Revivez la finale épique de la CAN 2024 entre la Côte d'Ivoire et le Nigeria, avec tous les moments forts et les buts.",
        thumbnail: "Images/final2023.jpg",
        videoUrl: "https://www.youtube.com/embed/_S9sFlf3zXU",
        category: "finale",
        date: "2024-02-11",
        teams: ["Côte d'Ivoire", "Nigeria"],
        duration: "10:00"
    },
    {
        id: 6,
        title: "U-17 Champions : Maroc 2025",
        description: "Les équipes U-17 de Maroc gagne la CAN 2025 , nous attendons l'equipe A.",
        thumbnail: "Images/u17Champions.jpg",
        videoUrl: "URL_ADDRESS.youtube.com/embed/nz7KqFR81SM",
        category: "Autres Competiotions",
        date: "2025-04-19",
        teams: ["Sénégal"],
        duration: "8:45"
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
document.addEventListener('DOMContentLoaded', function() {
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
  // Le logo devient cliquable et ramène à l'accueil
            const logoContainer = document.getElementById('logo-container');
            if (logoContainer) {
                logoContainer.addEventListener('click', () => {
                    window.location.href = 'index.html';
                });
                // On ajoute un curseur pointer pour montrer que c'est cliquable
                logoContainer.style.cursor = 'pointer';
            }
            
// Gestion de la barre interactive
const interactiveItems = document.querySelectorAll('.interactive-item');

// Gestion du clic sur les éléments de la barre
interactiveItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.dataset.section;
        
        // Navigation vers les différentes pages
        switch(targetId) {
            case 'can2025-description':
                window.location.href = 'index.html';
                break;
            case 'maroc':
                window.location.href = 'index.html#maroc';
                break;
            case 'matches':
                // Déjà sur la page matches, ne rien faire
                break;
            case 'groups':
                window.location.href = 'groupes.html';
                break;
            case 'videos':
                window.location.href = 'videos.html';
                break;
            case 'stats':
                window.location.href = 'stades.html';
                break;
            case 'teams':
                window.location.href = 'equipes.html';
                break;
        }
    });
});