document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    
    // Données des stades
    const stadesData = [
        { ville: 'Rabat', stades: ['Stade Prince Moulay Abdellah', 'Stade Moulay Hassan', 'Stade Al Barid', 'Stade annexe olympique Moulay Abdellah'] },
        { ville: 'Casablanca', stades: ['Stade Mohammed V'] },
        { ville: 'Tanger', stades: ['Stade Ibn-Battouta'] },
        { ville: 'Marrakech', stades: ['Stade de Marrakech'] },
        { ville: 'Agadir', stades: ['Stade Adrar'] },
        { ville: 'Fès', stades: ['Stade de Fès'] }
    ];

    // Fonctions pour toutes les modals
    window.openPriceModal = function() {
        document.getElementById('priceModal').style.display = 'flex';
    }

    window.closePriceModal = function() {
        document.getElementById('priceModal').style.display = 'none';
    }

    window.openFesPriceModal = function() {
        document.getElementById('fesPriceModal').style.display = 'flex';
    }

    window.closeFesPriceModal = function() {
        document.getElementById('fesPriceModal').style.display = 'none';
    }

    window.openTangerPriceModal = function() {
        document.getElementById('tangerPriceModal').style.display = 'flex';
    }

    window.closeTangerPriceModal = function() {
        document.getElementById('tangerPriceModal').style.display = 'none';
    }

    window.openMarrakechPriceModal = function() {
        document.getElementById('marrakechPriceModal').style.display = 'flex';
    }

    window.closeMarrakechPriceModal = function() {
        document.getElementById('marrakechPriceModal').style.display = 'none';
    }

    // Fonctions pour les modales des stades de Rabat
    window.openMoulayAbdellahModal = function() {
        document.getElementById('moulayAbdellahModal').style.display = 'flex';
    }

    window.closeMoulayAbdellahModal = function() {
        document.getElementById('moulayAbdellahModal').style.display = 'none';
    }

    window.openMoulayHassanModal = function() {
        document.getElementById('moulayHassanModal').style.display = 'flex';
    }

    window.closeMoulayHassanModal = function() {
        document.getElementById('moulayHassanModal').style.display = 'none';
    }

    window.openAlBaridModal = function() {
        document.getElementById('alBaridModal').style.display = 'flex';
    }

    window.closeAlBaridModal = function() {
        document.getElementById('alBaridModal').style.display = 'none';
    }

    // Fonction pour la modale du stade d'Agadir
    window.openAdrarPriceModal = function() {
        document.getElementById('adrarPriceModal').style.display = 'flex';
    }

    window.closeAdrarPriceModal = function() {
        document.getElementById('adrarPriceModal').style.display = 'none';
    }

    function highlightText(element, searchText) {
        const html = element.innerHTML;
        const regex = new RegExp(searchText, 'gi');
        element.innerHTML = html.replace(regex, match => `<span class="highlight">${match}</span>`);
    }

    function resetHighlights() {
        document.querySelectorAll('.highlight').forEach(el => {
            const parent = el.parentNode;
            parent.textContent = parent.textContent;
        });
    }

    function searchStades(query) {
        query = query.toLowerCase().trim();
        searchResults.innerHTML = '';
        resetHighlights();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const matches = [];
        
        stadesData.forEach(cityData => {
            const villeLower = cityData.ville.toLowerCase();
            // Ajout de conditions spéciales pour Fès
            if (villeLower.includes(query) || 
                (query === 'fes' && villeLower === 'fès') || 
                (query === 'fès' && villeLower === 'fès')) {
                matches.push({
                    text: cityData.ville,
                    type: 'ville'
                });
            }
            
            cityData.stades.forEach(stade => {
                const stadeLower = stade.toLowerCase();
                if (stadeLower.includes(query) || 
                    (query === 'fes' && stadeLower.includes('fès')) || 
                    (query === 'fès' && stadeLower.includes('fès'))) {
                    matches.push({
                        text: stade,
                        ville: cityData.ville,
                        type: 'stade'
                    });
                }
            });
        });

        if (matches.length > 0) {
            matches.forEach(match => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                
                if (match.type === 'ville') {
                    resultItem.innerHTML = `<i class="fas fa-city"></i> ${match.text}`;
                } else {
                    resultItem.innerHTML = `<i class="fas fa-futbol"></i> ${match.text} (${match.ville})`;
                }
                
                resultItem.addEventListener('click', () => {
                    const targetVille = match.type === 'ville' ? match.text : match.ville;
                    const stadeSection = Array.from(document.querySelectorAll('.stade-info')).find(section => 
                        section.textContent.includes(targetVille)
                    );

                    if (stadeSection) {
                        document.querySelectorAll('.stade-info').forEach(section => {
                            section.style.backgroundColor = 'white';
                            section.style.transform = 'scale(1)';
                        });

                        stadeSection.style.backgroundColor = '#fff3cd';
                        stadeSection.style.transform = 'scale(1.02)';
                        
                        resetHighlights();
                        const textElements = stadeSection.querySelectorAll('h2, h3, p, li');
                        textElements.forEach(el => highlightText(el, match.text));

                        stadeSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'center'
                        });

                        setTimeout(() => {
                            stadeSection.style.backgroundColor = 'white';
                            stadeSection.style.transform = 'scale(1)';
                        }, 2000);

                        searchResults.style.display = 'none';
                        searchInput.value = '';
                    }
                });
                
                searchResults.appendChild(resultItem);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div class="no-results">Aucun résultat trouvé</div>';
            searchResults.style.display = 'block';
        }
    }

    searchInput.addEventListener('input', () => {
        searchStades(searchInput.value);
    });

    searchButton.addEventListener('click', () => {
        searchStades(searchInput.value);
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
            resetHighlights();
        }
    });

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
});