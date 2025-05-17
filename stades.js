document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    
    // Add smooth hover effect for image containers
    document.querySelectorAll('.image-container').forEach(container => {
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate distance from center (0 to 1)
            const distanceX = (x - centerX) / centerX;
            const distanceY = (y - centerY) / centerY;
            
            // Apply subtle tilt effect
            const tiltX = distanceY * 3;
            const tiltY = -distanceX * 3;
            
            const image = container.querySelector('.clickable-image');
            if (image) {
                image.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
            }
        });
        
        container.addEventListener('mouseleave', () => {
            const image = container.querySelector('.clickable-image');
            if (image) {
                image.style.transform = 'none';
            }
        });
    });

    // Données des stades avec coordonnées GPS
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

    let maps = {};

    // Fonction pour initialiser la carte OpenStreetMap
    function initMap(coords, elementId) {
        console.log('Initializing map for:', elementId);
        
        // Wait for the modal to be fully visible
        setTimeout(() => {
            // Clear existing map if any
            if (maps[elementId]) {
                maps[elementId].remove();
            }

            const container = document.getElementById(elementId);
            if (!container) {
                console.error('Map container not found:', elementId);
            return;
        }

            try {
                // Initialize the map
                const map = L.map(elementId).setView([coords.lat, coords.lng], 15);
                maps[elementId] = map;

                // Add OpenStreetMap tiles
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '© OpenStreetMap contributors'
                }).addTo(map);

                // Add marker
                L.marker([coords.lat, coords.lng]).addTo(map);

                // Force a resize to ensure the map renders correctly
                map.invalidateSize();
                console.log('Map initialized successfully for:', elementId);
            } catch (error) {
                console.error('Error initializing map:', error);
            }
        }, 100);
    }

    // Fonctions pour toutes les modals
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

    // Mise à jour de la fonction de fermeture des modales
    window.onclick = function(event) {
        const modals = [
            document.getElementById('priceModal'),
            document.getElementById('fesPriceModal'),
            document.getElementById('tangerPriceModal'),
            document.getElementById('marrakechPriceModal'),
            document.getElementById('moulayAbdellahModal'),
            document.getElementById('moulayHassanModal'),
            document.getElementById('alBaridModal'),
            document.getElementById('adrarPriceModal')
        ];
        
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Toggle stadium view function
    window.toggleStadiumView = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section.style.display === 'none') {
            section.style.display = 'block';
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            section.style.display = 'none';
        }
    }

    // Fonction pour normaliser les chaînes (enlever les accents)
    function normalizeString(str) {
        return str.normalize("NFD")
                 .replace(/[\u0300-\u036f]/g, "")
                 .toLowerCase();
    }

    // Enhanced search functionality with city sections
    function searchStades(searchTerm) {
        searchResults.innerHTML = '';
        searchResults.style.display = 'block';
        
        const results = [];
        const cityResults = new Set();
        const normalizedSearchTerm = normalizeString(searchTerm);
        
        stadesData.forEach(city => {
            // Search in city name
            const normalizedCityName = normalizeString(city.ville);
            const cityMatch = normalizedCityName.includes(normalizedSearchTerm);
            if (cityMatch) {
                cityResults.add(city.ville);
            }
            
            city.stades.forEach(stade => {
                // Search in stadium name and details
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

        // Display city quick links if found
        if (cityResults.size > 0) {
            const citySection = document.createElement('div');
            citySection.className = 'city-section-results';
            citySection.innerHTML = '<h4>Villes</h4>';
            
            cityResults.forEach(city => {
                const cityDiv = document.createElement('div');
                cityDiv.className = 'city-result';
                cityDiv.innerHTML = `<i class="fas fa-city"></i>${city}`;
                cityDiv.onclick = () => {
                    // Scroll to city section using normalized name for class
                    const normalizedClassName = normalizeString(city).replace(/\s+/g, '-');
                    const cityElement = document.querySelector(`.${normalizedClassName}-section`);
                    if (cityElement) {
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

        // Display stadium results
        if (results.length > 0) {
            const stadiumSection = document.createElement('div');
            stadiumSection.className = 'stadium-section-results';
            if (cityResults.size > 0) {
                stadiumSection.innerHTML = '<h4>Stades</h4>';
            }
            
            results.forEach(result => {
                const resultDiv = document.createElement('div');
                resultDiv.className = 'search-result-item';
                
                const modalFunctionName = getModalFunctionName(result.stade.nom);
                
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

                // Ajouter un gestionnaire de clic pour faire défiler jusqu'à la section du stade
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
                    searchInput.value = ''; // Clear search input
                };

                stadiumSection.appendChild(resultDiv);
            });
            
            searchResults.appendChild(stadiumSection);
        } else if (cityResults.size === 0) {
            searchResults.innerHTML = '<p class="no-results">Aucun résultat trouvé</p>';
        }
    }

    // Helper function to get the modal function name
    function getModalFunctionName(stadeName) {
        const modalFunctions = {
            'Stade Prince Moulay Abdellah': 'openMoulayAbdellahModal',
            'Stade Moulay Hassan': 'openMoulayHassanModal',
            'Stade Al Barid': 'openAlBaridModal',
            'Stade Mohammed V': 'openPriceModal',
            'Stade Ibn-Battouta': 'openTangerPriceModal',
            'Stade de Marrakech': 'openMarrakechPriceModal',
            'Stade Adrar': 'openAdrarPriceModal',
            'Stade de Fès': 'openFesPriceModal'
        };
        return modalFunctions[stadeName] || 'alert("Modal non disponible")';
    }

    // Event listeners for search
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            searchStades(searchTerm);
        }
    });

    searchInput.addEventListener('keyup', (e) => {
        const searchTerm = searchInput.value.trim();
        if (e.key === 'Enter' && searchTerm) {
            searchStades(searchTerm);
        }
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchResults.contains(e.target) && 
            e.target !== searchInput && 
            e.target !== searchButton) {
            searchResults.style.display = 'none';
        }
    });

    // Add jQuery extension for case-insensitive contains
    jQuery.expr[':'].contains = function(a, i, m) {
        return jQuery(a).text().toLowerCase()
            .indexOf(m[3].toLowerCase()) >= 0;
    };

    // Ajout de l'événement input pour la recherche en temps réel
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim();
        if (searchTerm.length >= 2) {
            searchStades(searchTerm);
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    });

    // Gestion du focus sur l'input
    searchInput.addEventListener('focus', function() {
        const searchTerm = this.value.trim();
        if (searchTerm.length >= 2) {
            searchResults.style.display = 'block';
        }
    });

    // Maintenir les résultats visibles lors du clic dans la zone de résultats
    searchResults.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});