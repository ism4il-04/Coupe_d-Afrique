// Attendre que le document soit complètement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments de recherche du DOM
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    
    // Ajout d'un effet de survol fluide pour les conteneurs d'images
    document.querySelectorAll('.image-container').forEach(container => {
        // Gestion du mouvement de la souris sur l'image
        container.addEventListener('mousemove', (e) => {
            // Récupération des dimensions du conteneur
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calcul de la distance par rapport au centre (de 0 à 1)
            const distanceX = (x - centerX) / centerX;
            const distanceY = (y - centerY) / centerY;
            
            // Application de l'effet de rotation 3D subtil
            const tiltX = distanceY * 3;
            const tiltY = -distanceX * 3;
            
            // Application de la transformation à l'image
            const image = container.querySelector('.clickable-image');
            if (image) {
                image.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
            }
        });
        
        // Réinitialisation de la transformation quand la souris quitte l'image
        container.addEventListener('mouseleave', () => {
            const image = container.querySelector('.clickable-image');
            if (image) {
                image.style.transform = 'none';
            }
        });
    });

    // Base de données des stades avec leurs informations
    const stadesData = [
        { 
            ville: 'Rabat',
            stades: [
                {
                    nom: 'Stade Prince Moulay Abdellah',
                    coords: { lat: 33.9590, lng: -6.8649 },
                    capacite: 69500,
                    adresse: 'Avenue Hassan II, Rabat'
                },
                {
                    nom: 'Stade Moulay Hassan',
                    coords: { lat: 34.0186, lng: -6.8317 },
                    capacite: 22000,
                    adresse: 'Avenue Al Massira, Rabat'
                },
                {
                    nom: 'Stade Al Barid',
                    coords: { lat: 33.9716, lng: -6.8498 },
                    capacite: 18000,
                    adresse: 'Rue Al Barid, Rabat'
                }
            ]
        },
        {
            ville: 'Casablanca',
            stades: [{
                nom: 'Stade Mohammed V',
                coords: { lat: 33.5821, lng: -7.6470 },
                capacite: 45891,
                adresse: '5 Boulevard Mohammed V, Casablanca'
            }]
        },
        {
            ville: 'Tanger',
            stades: [{
                nom: 'Stade Ibn-Battouta',
                coords: { lat: 35.7376, lng: -5.8194 },
                capacite: 75600,
                adresse: 'Route de Rabat, Tanger'
            }]
        },
        {
            ville: 'Marrakech',
            stades: [{
                nom: 'Stade de Marrakech',
                coords: { lat: 31.6665, lng: -8.0300 },
                capacite: 41245,
                adresse: 'Route de Casablanca, Marrakech'
            }]
        },
        {
            ville: 'Agadir',
            stades: [{
                nom: 'Stade Adrar',
                coords: { lat: 30.3714, lng: -9.5133 },
                capacite: 45480,
                adresse: 'Boulevard Hassan II, Agadir'
            }]
        },
        {
            ville: 'Fès',
            stades: [{
                nom: 'Stade de Fès',
                coords: { lat: 34.0430, lng: -4.9978 },
                capacite: 35468,
                adresse: 'Route de Sefrou, Fès'
            }]
        }
    ];

    // Stockage des instances de cartes
    let maps = {};

    // Fonction pour initialiser une carte OpenStreetMap
    function initMap(coords, elementId) {
        console.log('Initialisation de la carte pour:', elementId);
        
        // Attendre que la modale soit visible
        setTimeout(() => {
            // Nettoyer la carte existante si elle existe
            if (maps[elementId]) {
                maps[elementId].remove();
            }

            // Vérifier si le conteneur existe
            const container = document.getElementById(elementId);
            if (!container) {
                console.error('Conteneur de carte non trouvé:', elementId);
                return;
            }

            try {
                // Initialiser la nouvelle carte
                const map = L.map(elementId).setView([coords.lat, coords.lng], 15);
                maps[elementId] = map;

                // Ajouter les tuiles OpenStreetMap
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '© OpenStreetMap contributors'
                }).addTo(map);

                // Ajouter un marqueur sur la position du stade
                L.marker([coords.lat, coords.lng]).addTo(map);

                // Forcer une mise à jour pour assurer le bon rendu
                map.invalidateSize();
                console.log('Carte initialisée avec succès pour:', elementId);
            } catch (error) {
                console.error('Erreur lors de l\'initialisation de la carte:', error);
            }
        }, 100);
    }
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
                window.location.href = 'matches.html';
                break;
            case 'groups':
                window.location.href = 'groupes.html';
                break;
            case 'videos':
                window.location.href = 'videos.html';
                break;
            case 'stat':
              
                break;
            case 'teams':
                window.location.href = 'equipes.html';
                break;
        }
    });
});

    // Fonctions d'ouverture et fermeture des modales pour chaque stade
    window.openPriceModal = function() {
        const modal = document.getElementById('priceModal');
        modal.style.display = 'flex';
        initMap({lat: 33.5821, lng: -7.6470}, 'casablancaMap');
    }

    window.closePriceModal = function() {
        document.getElementById('priceModal').style.display = 'none';
    }

    window.openFesPriceModal = function() {
        const modal = document.getElementById('fesPriceModal');
        modal.style.display = 'flex';
        initMap({lat: 34.0430, lng: -4.9978}, 'fesMap');
    }

    window.closeFesPriceModal = function() {
        document.getElementById('fesPriceModal').style.display = 'none';
    }

    window.openTangerPriceModal = function() {
        const modal = document.getElementById('tangerPriceModal');
        modal.style.display = 'flex';
        initMap({lat: 35.7376, lng: -5.8194}, 'tangerMap');
    }

    window.closeTangerPriceModal = function() {
        document.getElementById('tangerPriceModal').style.display = 'none';
    }

    window.openMarrakechPriceModal = function() {
        const modal = document.getElementById('marrakechPriceModal');
        modal.style.display = 'flex';
        initMap({lat: 31.6665, lng: -8.0300}, 'marrakechMap');
    }

    window.closeMarrakechPriceModal = function() {
        document.getElementById('marrakechPriceModal').style.display = 'none';
    }

    window.openMoulayAbdellahModal = function() {
        const modal = document.getElementById('moulayAbdellahModal');
        modal.style.display = 'flex';
        initMap({lat: 33.9590, lng: -6.8649}, 'moulayAbdellahMap');
    }

    window.closeMoulayAbdellahModal = function() {
        document.getElementById('moulayAbdellahModal').style.display = 'none';
    }

    window.openMoulayHassanModal = function() {
        const modal = document.getElementById('moulayHassanModal');
        modal.style.display = 'flex';
        initMap({lat: 34.0186, lng: -6.8317}, 'moulayHassanMap');
    }

    window.closeMoulayHassanModal = function() {
        document.getElementById('moulayHassanModal').style.display = 'none';
    }

    window.openAlBaridModal = function() {
        const modal = document.getElementById('alBaridModal');
        modal.style.display = 'flex';
        initMap({lat: 33.9716, lng: -6.8498}, 'alBaridMap');
    }

    window.closeAlBaridModal = function() {
        document.getElementById('alBaridModal').style.display = 'none';
    }

    window.openAdrarPriceModal = function() {
        const modal = document.getElementById('adrarPriceModal');
        modal.style.display = 'flex';
        initMap({lat: 30.3714, lng: -9.5133}, 'adrarMap');
    }

    window.closeAdrarPriceModal = function() {
        document.getElementById('adrarPriceModal').style.display = 'none';
    }

    window.openOlympiqueModal = function() {
        const modal = document.getElementById('olympiqueModal');
        modal.style.display = 'flex';
        initMap({lat: 34.0231, lng: -6.8344}, 'olympiqueMap');
    }

    window.closeOlympiqueModal = function() {
        document.getElementById('olympiqueModal').style.display = 'none';
    }

    // Fermeture des modales en cliquant à l'extérieur
    window.onclick = function(event) {
        const modals = [
            document.getElementById('priceModal'),
            document.getElementById('fesPriceModal'),
            document.getElementById('tangerPriceModal'),
            document.getElementById('marrakechPriceModal'),
            document.getElementById('moulayAbdellahModal'),
            document.getElementById('moulayHassanModal'),
            document.getElementById('alBaridModal'),
            document.getElementById('adrarPriceModal'),
            document.getElementById('olympiqueModal')
        ];
        
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Fonction pour basculer l'affichage du plan du stade
    window.toggleStadiumView = function(sectionId) {
        // Récupération de la section du stade
        const section = document.getElementById(sectionId);
        // Si la section est cachée, l'afficher et faire défiler jusqu'à elle
        if (section.style.display === 'none') {
            section.style.display = 'block';
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Sinon, cacher la section
            section.style.display = 'none';
        }
    }

    // Fonction pour normaliser les chaînes (retirer les accents et mettre en minuscules)
    function normalizeString(str) {
        return str.normalize("NFD")
                 .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
                 .toLowerCase(); // Convertit en minuscules
    }

    // Fonction de recherche améliorée avec sections de villes
    function searchStades(searchTerm) {
        // Réinitialisation et affichage des résultats
        searchResults.innerHTML = '';
        searchResults.style.display = 'block';
        
        const results = [];
        const cityResults = new Set(); // Ensemble pour stocker les villes uniques
        const normalizedSearchTerm = normalizeString(searchTerm);
        
        // Parcours des données des stades
        stadesData.forEach(city => {
            // Recherche dans le nom de la ville
            const normalizedCityName = normalizeString(city.ville);
            const cityMatch = normalizedCityName.includes(normalizedSearchTerm);
            if (cityMatch) {
                cityResults.add(city.ville);
            }
            
            // Recherche dans les stades de chaque ville
            city.stades.forEach(stade => {
                const normalizedStadeName = normalizeString(stade.nom);
                const normalizedAddress = normalizeString(stade.adresse);
                if (cityMatch || 
                    normalizedStadeName.includes(normalizedSearchTerm) ||
                    normalizedAddress.includes(normalizedSearchTerm)) {
                    results.push({
                        ville: city.ville,
                        stade: stade
                    });
                }
            });
        });

        // Affichage des liens rapides vers les villes si trouvées
        if (cityResults.size > 0) {
            const citySection = document.createElement('div');
            citySection.className = 'city-section-results';
            citySection.innerHTML = '<h4>Villes</h4>';
            
            // Création des éléments cliquables pour chaque ville
            cityResults.forEach(city => {
                const cityDiv = document.createElement('div');
                cityDiv.className = 'city-result';
                cityDiv.innerHTML = `<i class="fas fa-city"></i>${city}`;
                
                // Ajout du gestionnaire de clic pour faire défiler jusqu'à la section de la ville
                cityDiv.onclick = () => {
                    const normalizedClassName = normalizeString(city).replace(/\s+/g, '-');
                    const cityElement = document.querySelector(`.${normalizedClassName}-section`);
                    if (cityElement) {
                        // Animation de défilement et mise en surbrillance
                        cityElement.scrollIntoView({ behavior: 'smooth' });
                        cityElement.classList.add('highlight-section');
                        setTimeout(() => {
                            cityElement.classList.remove('highlight-section');
                        }, 2000);
                        searchResults.style.display = 'none';
                        searchInput.value = '';
                    }
                };
                citySection.appendChild(cityDiv);
            });
            
            searchResults.appendChild(citySection);
        }

        // Affichage des résultats des stades
        if (results.length > 0) {
            const stadiumSection = document.createElement('div');
            stadiumSection.className = 'stadium-section-results';
            if (cityResults.size > 0) {
                stadiumSection.innerHTML = '<h4>Stades</h4>';
            }
            
            // Création des éléments pour chaque stade trouvé
            results.forEach(result => {
                const resultDiv = document.createElement('div');
                resultDiv.className = 'search-result-item';
                
                // Obtention du nom de la fonction modale pour ce stade
                const modalFunctionName = getModalFunctionName(result.stade.nom);
                
                // Création du contenu HTML pour le résultat
                resultDiv.innerHTML = `
                    <div class="search-result-content" onclick="${modalFunctionName}()">
                        <div class="search-result-icon">
                            <i class="fas fa-stadium"></i>
                        </div>
                        <div class="search-result-info">
                            <h4>${result.stade.nom}</h4>
                            <p><i class="fas fa-map-marker-alt"></i> ${result.ville}</p>
                            <p><i class="fas fa-users"></i> ${result.stade.capacite.toLocaleString()} places</p>
                            <p><i class="fas fa-location-dot"></i> ${result.stade.adresse}</p>
                        </div>
                    </div>
                `;

                // Gestionnaire de clic pour faire défiler jusqu'à la section du stade
                resultDiv.onclick = () => {
                    const citySection = document.querySelector(`.${result.ville.toLowerCase()}-section`);
                    if (citySection) {
                        citySection.scrollIntoView({ behavior: 'smooth' });
                        citySection.classList.add('highlight-section');
                        setTimeout(() => {
                            citySection.classList.remove('highlight-section');
                        }, 2000);
                    }
                    searchResults.style.display = 'none';
                    searchInput.value = '';
                };

                stadiumSection.appendChild(resultDiv);
            });
            
            searchResults.appendChild(stadiumSection);
        } else if (cityResults.size === 0) {
            // Affichage du message si aucun résultat trouvé
            searchResults.innerHTML = '<p class="no-results">Aucun résultat trouvé</p>';
        }
    }

    // Fonction pour obtenir le nom de la fonction modale correspondante à chaque stade
    function getModalFunctionName(stadeName) {
        // Mapping des noms de stades vers leurs fonctions modales respectives
        const modalFunctions = {
            'Stade Prince Moulay Abdellah': 'openMoulayAbdellahModal',
            'Stade Moulay Hassan': 'openMoulayHassanModal',
            'Stade Al Barid': 'openAlBaridModal',
            'Stade Mohammed V': 'openPriceModal',
            'Stade Ibn-Battouta': 'openTangerPriceModal',
            'Stade de Marrakech': 'openMarrakechPriceModal',
            'Stade Adrar': 'openAdrarPriceModal',
            'Stade de Fès': 'openFesPriceModal',
            'Stade Olympique': 'openOlympiqueModal'
        };
        return modalFunctions[stadeName] || 'alert("Modal non disponible")';
    }

    // Écouteurs d'événements pour la recherche
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            searchStades(searchTerm);
        }
    });

    // Gestion de la recherche avec la touche Entrée
    searchInput.addEventListener('keyup', (e) => {
        const searchTerm = searchInput.value.trim();
        if (e.key === 'Enter' && searchTerm) {
            searchStades(searchTerm);
        }
    });

    // Fermeture des résultats de recherche lors d'un clic à l'extérieur
    document.addEventListener('click', (e) => {
        if (!searchResults.contains(e.target) && 
            e.target !== searchInput && 
            e.target !== searchButton) {
            searchResults.style.display = 'none';
        }
    });

    // Extension jQuery pour la recherche insensible à la casse
    jQuery.expr[':'].contains = function(a, i, m) {
        return jQuery(a).text().toLowerCase()
            .indexOf(m[3].toLowerCase()) >= 0;
    };

    // Recherche en temps réel pendant la saisie
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim();
        // Afficher les résultats si au moins 2 caractères sont saisis
        if (searchTerm.length >= 2) {
            searchStades(searchTerm);
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    });

    // Gestion du focus sur le champ de recherche
    searchInput.addEventListener('focus', function() {
        const searchTerm = this.value.trim();
        // Afficher les résultats existants si la recherche contient au moins 2 caractères
        if (searchTerm.length >= 2) {
            searchResults.style.display = 'block';
        }
    });

    // Empêcher la fermeture des résultats lors d'un clic dans la zone de résultats
    searchResults.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
