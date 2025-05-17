/**
 * videos.js
 * Ce fichier gère l'affichage et l'interaction avec la galerie de vidéos
 * Il inclut la gestion des filtres, l'affichage des vidéos et les interactions modales
 */

// Base de données statique des vidéos (simulation d'une API)
// Chaque vidéo contient : id, titre, description, miniature, URL, catégorie, date, équipes et durée
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

/**
 * Crée une carte HTML pour une vidéo donnée
 * @param {Object} video - Objet contenant les informations de la vidéo
 * @returns {string} - Code HTML de la carte vidéo
 */
function createVideoCard(video) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="video-card" data-video-id="${video.id}">
                <!-- Conteneur de la miniature avec bouton de lecture -->
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <!-- Informations de la vidéo -->
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

/**
 * Formate une date en format français
 * @param {string} dateString - Date au format ISO
 * @returns {string} - Date formatée en français
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}

/**
 * Met à jour le contenu de la fenêtre modale avec les informations de la vidéo
 * @param {Object} video - Objet contenant les informations de la vidéo
 */
function updateVideoModal(video) {
    const modal = document.getElementById('videoModal');
    const iframe = modal.querySelector('iframe');
    const title = modal.querySelector('.modal-title');
    const description = modal.querySelector('.video-description');
    const date = modal.querySelector('.video-date');
    const category = modal.querySelector('.video-category');

    // Mise à jour des éléments de la modale
    iframe.src = video.videoUrl;
    title.textContent = video.title;
    description.textContent = video.description;
    date.textContent = formatDate(video.date);
    category.textContent = video.category;
}

/**
 * Filtre les vidéos selon les critères sélectionnés
 * Combine les filtres de catégorie, équipe et recherche textuelle
 */
function filterVideos() {
    // Récupération des valeurs des filtres
    const categoryFilter = document.getElementById('categoryFilter').value;
    const teamFilter = document.getElementById('teamFilter').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Application des filtres
    const filteredVideos = videos.filter(video => {
        const matchesCategory = categoryFilter === 'all' || video.category === categoryFilter;
        const matchesTeam = teamFilter === 'all' || video.teams.includes(teamFilter);
        const matchesSearch = video.title.toLowerCase().includes(searchInput) || 
                            video.description.toLowerCase().includes(searchInput);

        return matchesCategory && matchesTeam && matchesSearch;
    });

    // Affichage des résultats filtrés
    displayVideos(filteredVideos);
}

/**
 * Affiche les vidéos dans la grille
 * @param {Array} videosToShow - Liste des vidéos à afficher
 */
function displayVideos(videosToShow) {
    const grid = document.getElementById('videosGrid');
    // Génération du HTML pour chaque vidéo
    grid.innerHTML = videosToShow.map(video => createVideoCard(video)).join('');

    // Réinitialisation des écouteurs d'événements
    attachVideoCardListeners();
}

/**
 * Attache les écouteurs d'événements aux cartes vidéo
 * Gère l'ouverture de la modale au clic
 */
function attachVideoCardListeners() {
    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', () => {
            const videoId = parseInt(card.dataset.videoId);
            const video = videos.find(v => v.id === videoId);
            updateVideoModal(video);
            
            // Ouverture de la modale
            const modal = new bootstrap.Modal(document.getElementById('videoModal'));
            modal.show();
        });
    });
}

// Initialisation au chargement du document
document.addEventListener('DOMContentLoaded', function() {
    // Affichage initial de toutes les vidéos
    displayVideos(videos);

    // Population dynamique du filtre d'équipes
    const teamFilter = document.getElementById('teamFilter');
    const teams = [...new Set(videos.flatMap(video => video.teams))];
    teams.forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamFilter.appendChild(option);
    });

    // Configuration des écouteurs d'événements pour les filtres
    document.getElementById('categoryFilter').addEventListener('change', filterVideos);
    document.getElementById('teamFilter').addEventListener('change', filterVideos);
    document.getElementById('searchInput').addEventListener('input', filterVideos);

    // Configuration de l'animation au défilement
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Observateur d'intersection pour les animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Application de l'observateur à toutes les cartes
    document.querySelectorAll('.video-card').forEach(card => {
        observer.observe(card);
    });
}); 

// Configuration du logo cliquable
document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.getElementById('logo-container');
    if (logoContainer) {
        // Ajout de l'événement de clic pour la navigation
        logoContainer.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
        // Indication visuelle de l'interactivité
        logoContainer.style.cursor = 'pointer';
    }
});

// Gestion de la navigation interactive
const interactiveItems = document.querySelectorAll('.interactive-item');

/**
 * Configuration des événements de navigation pour la barre interactive
 * Chaque élément déclenche une navigation vers la page correspondante
 */
interactiveItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.dataset.section;
        
        // Routage vers les différentes pages
        switch(targetId) {
            case 'can2025-description':
                window.location.href = 'index.html';
                break;
            case 'maroc':
                window.location.href = 'index.html#maroc';
                break;
            case 'matches':
                // Déjà sur la page matches, pas d'action
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