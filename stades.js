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

    function highlightText(element, searchText) {
        const html = element.innerHTML;
        const regex = new RegExp(searchText, 'gi');
        element.innerHTML = html.replace(regex, match => `<span class="highlight">${match}</span>`);
    }

    function resetHighlights() {
        document.querySelectorAll('.highlight').forEach(el => {
            const parent = el.parentNode;
            parent.textContent = parent.textContent; // Supprime les balises span mais garde le texte
        });
    }

    function searchStades(query) {
        query = query.toLowerCase();
        searchResults.innerHTML = '';
        resetHighlights();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const matches = [];
        
        stadesData.forEach(cityData => {
            if (cityData.ville.toLowerCase().includes(query)) {
                matches.push({
                    text: cityData.ville,
                    type: 'ville'
                });
            }
            
            cityData.stades.forEach(stade => {
                if (stade.toLowerCase().includes(query)) {
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
                        // Réinitialise toutes les sections
                        document.querySelectorAll('.stade-info').forEach(section => {
                            section.style.backgroundColor = 'white';
                            section.style.transform = 'scale(1)';
                        });

                        // Met en évidence la section trouvée
                        stadeSection.style.backgroundColor = '#fff3cd';
                        stadeSection.style.transform = 'scale(1.02)';
                        
                        // Ajoute la mise en surbrillance du texte recherché
                        resetHighlights();
                        const textElements = stadeSection.querySelectorAll('h2, h3, p, li');
                        textElements.forEach(el => highlightText(el, match.text));

                        // Défilement doux vers la section
                        stadeSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'center'
                        });

                        // Réinitialise après un délai
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

    // Fermer les résultats quand on clique ailleurs
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
            resetHighlights();
        }
    });

    // Polyfill pour :contains
    jQuery.expr[':'].contains = function(a, i, m) {
        return jQuery(a).text().toUpperCase()
            .indexOf(m[3].toUpperCase()) >= 0;
    };
});
function openPriceModal() {
    document.getElementById('priceModal').style.display = 'flex';
}

function closePriceModal() {
    document.getElementById('priceModal').style.display = 'none';
}

// Fermer la modal si on clique en dehors
window.onclick = function(event) {
    const modal = document.getElementById('priceModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
function openFesPriceModal() {
    document.getElementById('fesPriceModal').style.display = 'flex';
}

function closeFesPriceModal() {
    document.getElementById('fesPriceModal').style.display = 'none';
}

// Fermer la modal si on clique en dehors
window.onclick = function(event) {
    const fesModal = document.getElementById('fesPriceModal');
    if (event.target == fesModal) {
        fesModal.style.display = 'none';
    }
}