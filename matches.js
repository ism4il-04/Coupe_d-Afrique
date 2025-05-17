/* Dictionnaire pour convertir les noms des pays en codes de pays pour les drapeaux */
const countryToCode = {
  'Maroc': 'ma',            // Codes ISO 2 des pays pour l'API de drapeaux
  'Algérie': 'dz',
  'Angola': 'ao',
  'Bénin': 'bj',
  'Botswana': 'bw',
  'Burkina Faso': 'bf',
  'Cameroun': 'cm',
  'Comores': 'km',
  'Côte d\'Ivoire': 'ci',
  'Égypte': 'eg',
  'Gabon': 'ga',
  'Guinée Équatoriale': 'gq',
  'Mali': 'ml',
  'Mozambique': 'mz',
  'Nigeria': 'ng',
  'Ouganda': 'ug',
  'Rép. Dém. Congo': 'cd',
  'Sénégal': 'sn',
  'Soudan': 'sd',
  'Afrique du Sud': 'za',
  'Tanzanie': 'tz',
  'Tunisie': 'tn',
  'Zambie': 'zm',
  'Zimbabwe': 'zw',
  'en attente': 'xx'        // Code par défaut pour les équipes en attente
};

/* Données des matches de la CAN 2025 */
const matchData = [
  {
    date: '2025-12-21',
    label: 'dim. 21 déc.',
    tour: 'Phase de groupes - Groupe A',
    matches: [
      { teams: 'Maroc vs Comores', time: 'à déterminer', stadium: 'COMPLEXE SPORTIF PRINCE MOULAY ABDELLAH RABAT 1' }
    ]
  },
  {
    date: '2025-12-22',
    label: 'lun. 22 déc.',
    tour: 'Phase de groupes - Groupes A et B',
    matches: [
      { teams: 'Mali vs Zambie', time: 'à déterminer', stadium: 'STADE MOHAMMED V CASABLANCA' },
      { teams: 'Afrique du Sud vs Angola', time: 'à déterminer', stadium: 'GRAND STADE DE MARRAKECH MARRAKECH' },
      { teams: 'Égypte vs Zimbabwe', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2025-12-23',
    label: 'mar. 23 déc.',
    tour: 'Phase de groupes - Groupes C et D',
    matches: [
      { teams: 'Nigeria vs Tanzanie', time: 'à déterminer', stadium: 'COMPLEXE SPORTIF DE FES' },
      { teams: 'Tunisie vs Ouganda', time: 'à déterminer', stadium: 'STADE ANNEXE OLYMPIQUE COMPLEXE SPORTIF PRINCE MOULAY ABDELLAH RABAT 4' },
      { teams: 'Rép. Dém. Congo vs Bénin', time: 'à déterminer', stadium: 'STADE EL BARID RABAT 3' },
      { teams: 'Sénégal vs Botswana', time: 'à déterminer', stadium: 'GRAND STADE DE TANGER TANGIER' }
    ]
  },
  {
    date: '2025-12-24',
    label: 'mer. 24 déc.',
    tour: 'Phase de groupes - Groupes E et F',
    matches: [
      { teams: 'Algérie vs Soudan', time: 'à déterminer', stadium: 'COMPLEXE SPORTIF PRINCE HÉRITIER MOULAY EL HASSAN RABAT 2' },
      { teams: 'Burkina Faso vs Guinée Équatoriale', time: 'à déterminer', stadium: 'STADE MOHAMMED V CASABLANCA' },
      { teams: 'Cameroun vs Gabon', time: 'à déterminer', stadium: 'GRAND STADE DE MARRAKECH MARRAKECH' },
      { teams: 'Côte d\'Ivoire vs Mozambique', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2025-12-26',
    label: 'ven. 26 déc.',
    tour: 'Phase de groupes - Groupes A et B',
    matches: [
      { teams: 'Maroc vs Mali', time: 'à déterminer', stadium: 'COMPLEXE SPORTIF PRINCE MOULAY ABDELLAH RABAT 1' },
      { teams: 'Zambie vs Comores', time: 'à déterminer', stadium: 'STADE MOHAMMED V CASABLANCA' },
      { teams: 'Angola vs Zimbabwe', time: 'à déterminer', stadium: 'GRAND STADE DE MARRAKECH MARRAKECH' },
      { teams: 'Égypte vs Afrique du Sud', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2025-12-27',
    label: 'sam. 27 déc.',
    tour: 'Phase de groupes - Groupes C et D',
    matches: [
      { teams: 'Nigeria vs Tunisie', time: 'à déterminer', stadium: 'COMPLEXE SPORTIF DE FES' },
      { teams: 'Ouganda vs Tanzanie', time: 'à déterminer', stadium: 'STADE EL BARID RABAT 3' },
      { teams: 'Bénin vs Botswana', time: 'à déterminer', stadium: 'STADE ANNEXE OLYMPIQUE COMPLEXE SPORTIF PRINCE MOULAY ABDELLAH RABAT 4' },
      { teams: 'Sénégal vs Rép. Dém. Congo', time: 'à déterminer', stadium: 'GRAND STADE DE TANGER TANGIER' }
    ]
  },
  {
    date: '2025-12-28',
    label: 'dim. 28 déc.',
    tour: 'Phase de groupes - Groupes E et F',
    matches: [
      { teams: 'Algérie vs Burkina Faso', time: 'à déterminer', stadium: 'COMPLEXE SPORTIF PRINCE HÉRITIER MOULAY EL HASSAN RABAT 2' },
      { teams: 'Guinée Équatoriale vs Soudan', time: 'à déterminer', stadium: 'STADE MOHAMMED V CASABLANCA' },
      { teams: 'Côte d\'Ivoire vs Cameroun', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Gabon vs Mozambique', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2025-12-29',
    label: 'lun. 29 déc.',
    tour: 'Phase de groupes - Groupes A et B',
    matches: [
      { teams: 'Comores vs Mali', time: 'à déterminer', stadium: 'STADE MOHAMMED V CASABLANCA' },
      { teams: 'Zambie vs Maroc', time: 'à déterminer', stadium: 'COMPLEXE SPORTIF PRINCE MOULAY ABDELLAH RABAT 1' },
      { teams: 'Angola vs Égypte', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Zimbabwe vs Afrique du Sud', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2025-12-30',
    label: 'mar. 30 déc.',
    tour: 'Phase de groupes - Groupes C et D',
    matches: [
      { teams: 'Ouganda vs Nigeria', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Tanzanie vs Tunisie', time: 'à déterminer', stadium: 'STADE ANNEXE OLYMPIQUE COMPLEXE SPORTIF PRINCE MOULAY ABDELLAH RABAT 4' },
      { teams: 'Botswana vs Rép. Dém. Congo', time: 'à déterminer', stadium: 'STADE EL BARID RABAT 3' },
      { teams: 'Bénin vs Sénégal', time: 'à déterminer', stadium: 'GRAND STADE DE TANGER TANGIER' }
    ]
  },
  {
    date: '2025-12-31',
    label: 'mer. 31 déc.',
    tour: 'Phase de groupes - Groupes E et F',
    matches: [
      { teams: 'Guinée Équatoriale vs Algérie', time: 'à déterminer', stadium: 'COMPLEXE SPORTIF PRINCE HÉRITIER MOULAY EL HASSAN RABAT 2' },
      { teams: 'Soudan vs Burkina Faso', time: 'à déterminer', stadium: 'STADE MOHAMMED V CASABLANCA' },
      { teams: 'Gabon vs Côte d\'Ivoire', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Mozambique vs Cameroun', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2026-01-03',
    label: 'sam. 3 jan.',
    tour: '1/8 de finale',
    matches: [
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'STADE MOHAMMED V CASABLANCA' },
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'GRAND STADE DE TANGER TANGIER' }
    ]
  },
  {
    date: '2026-01-04',
    label: 'dim. 4 jan.',
    tour: '1/8 de finale',
    matches: [
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'COMPLEXE SPORTIF PRINCE MOULAY ABDELLAH RABAT 1' },
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'STADE EL BARID RABAT 3' }
    ]
  },
  {
    date: '2026-01-05',
    label: 'lun. 5 jan.',
    tour: '1/8 de finale',
    matches: [
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'COMPLEXE SPORTIF DE FES' },
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2026-01-06',
    label: 'mar. 6 jan.',
    tour: '1/8 de finale',
    matches: [
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'COMPLEXE SPORTIF PRINCE HÉRITIER MOULAY EL HASSAN RABAT 2' },
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2026-01-09',
    label: 'ven. 9 jan.',
    tour: '1/4 de finale',
    matches: [
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'COMPLEXE SPORTIF PRINCE MOULAY ABDELLAH RABAT 1' },
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'GRAND STADE DE TANGER TANGIER' }
    ]
  },
  {
    date: '2026-01-10',
    label: 'sam. 10 jan.',
    tour: '1/4 de finale',
    matches: [
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2026-01-14',
    label: 'mer. 14 jan.',
    tour: '1/2 finale',
    matches: [
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'COMPLEXE SPORTIF PRINCE MOULAY ABDELLAH RABAT 1' },
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'GRAND STADE DE TANGER TANGIER' }
    ]
  },
  {
    date: '2026-01-17',
    label: 'sam. 17 jan.',
    tour: 'Match pour la 3ème place',
    matches: [
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'STADE MOHAMMED V CASABLANCA' }
    ]
  },
  {
    date: '2026-01-18',
    label: 'dim. 18 jan.',
    tour: 'Finale',
    matches: [
      { teams: 'en attente vs en attente', time: 'à déterminer', stadium: 'COMPLEXE SPORTIF PRINCE MOULAY ABDELLAH RABAT 1' }
    ]
  }
];

/* Calcul de l'offset pour le défilement (hauteur des barres + padding) */
const SCROLL_OFFSET = 220; // 120px (barre interactive) + 80px (barre calendrier) + 20px padding

/* Fonction utilitaire pour formater les équipes et obtenir leurs codes de pays */
function formatTeams(teamsString) {
  const [team1, team2] = teamsString.split(' vs '); // Sépare les noms des équipes
  return {
    team1: team1.trim(),                          // Nom de la première équipe
    team2: team2.trim(),                          // Nom de la deuxième équipe
    code1: countryToCode[team1.trim()],           // Code du pays de l'équipe 1
    code2: countryToCode[team2.trim()]            // Code du pays de l'équipe 2
  };
}

/* Fonction pour générer l'HTML du drapeau ou de l'icône par défaut */
function getFlagHtml(teamName, countryCode, isLeft = true) {
  if (teamName === 'en attente') {
    return `<span class="default-team-icon ${isLeft ? 'me-2' : 'ms-2'}">
              <i class="fas fa-circle-question"></i>
            </span>`;
  }
  return `<img src="https://flagcdn.com/24x18/${countryCode}.png" 
               alt="${teamName}" 
               class="${isLeft ? 'me-2' : 'ms-2'}">`;
}

/* Création du conteneur principal */
const mainContainer = document.createElement('div');
mainContainer.id = 'mainContent';
mainContainer.className = 'container';                // Utilise la classe container de Bootstrap
mainContainer.style.paddingTop = '200px';            // Espace pour les barres fixes
document.body.appendChild(mainContainer);

/* Récupération du conteneur des dates du calendrier */
const calendarDatesDiv = document.getElementById("calendarDates");

/* Création du conteneur des matches */
const matchContainer = document.createElement('div');
matchContainer.id = "matchContainer";
mainContainer.appendChild(matchContainer);

/* Remplissage du calendrier et des sections de matches */
matchData.forEach(day => {
  // Création du bouton de date dans le calendrier
  const dateBtn = document.createElement("div");
  dateBtn.className = "calendar-date";
  dateBtn.textContent = day.label;
  dateBtn.onclick = () => {
    // Calcul de la position de défilement avec offset
    const element = document.getElementById(day.date);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - SCROLL_OFFSET;
    
    // Animation de défilement vers la section
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };
  calendarDatesDiv.appendChild(dateBtn);

  // Création de la section des matches du jour
  const matchSection = document.createElement("div");
  matchSection.className = "match-section";
  matchSection.id = day.date;

  // En-tête de la section (date et tour)
  let innerHTML = `
    <div class="day-header">
      <h3 class="mb-2">${day.label}</h3>
      <h5 class="text-muted">${day.tour}</h5>
    </div>
  `;
  
  // Création des cartes de match
  day.matches.forEach((match, index) => {
    const teams = formatTeams(match.teams);
    innerHTML += `
      <div class="card mb-3 match-card">
        <div class="card-body">
          <div class="row align-items-center">
            <!-- Numéro du match -->
            <div class="col-auto">
              <span class="badge bg-primary">Match ${index + 1}</span>
            </div>
            <!-- Affichage des équipes avec leurs drapeaux -->
            <div class="col">
              <div class="d-flex justify-content-center align-items-center match-teams">
                <div class="text-end" style="width: 40%;">
                  ${getFlagHtml(teams.team1, teams.code1, true)}
                  ${teams.team1}
                </div>
                <div class="mx-4 text-muted">-</div>
                <div class="text-start" style="width: 40%;">
                  ${teams.team2}
                  ${getFlagHtml(teams.team2, teams.code2, false)}
                </div>
              </div>
            </div>
            <!-- Heure du match -->
            <div class="col-auto">
              <span class="badge bg-secondary">${match.time}</span>
            </div>
          </div>
          <!-- Stade -->
          <div class="text-muted mt-2 text-center">
            <i class="fas fa-map-marker-alt"></i> ${match.stadium}
          </div>
        </div>
      </div>
    `;
  });

  matchSection.innerHTML = innerHTML;
  matchContainer.appendChild(matchSection);
});

/* Fonction pour faire défiler le calendrier horizontalement */
function scrollCalendar(direction) {
  calendarDatesDiv.scrollBy({
    left: direction * 150,     // Défilement de 150px dans la direction spécifiée
    behavior: 'smooth'         // Animation fluide
  });
}

/* Fonction pour mettre à jour la date active dans le calendrier */
function updateActiveDate() {
  const scrollPosition = window.pageYOffset + SCROLL_OFFSET;
  const sections = document.querySelectorAll('.match-section');
  const dates = document.querySelectorAll('.calendar-date');

  // Enlever la classe active de toutes les dates
  dates.forEach(date => date.classList.remove('active'));

  // Trouver la section actuellement visible
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      // Ajouter la classe active à la date correspondante
      dates[i].classList.add('active');
      
      // Faire défiler le calendrier pour centrer la date active
      const calendar = document.getElementById('calendarDates');
      const dateElement = dates[i];
      const scrollLeft = dateElement.offsetLeft - (calendar.offsetWidth / 2) + (dateElement.offsetWidth / 2);
      calendar.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
      break;
    }
  }
}

// Ajouter les écouteurs d'événements pour la synchronisation
window.addEventListener('scroll', updateActiveDate);
window.addEventListener('load', updateActiveDate);
