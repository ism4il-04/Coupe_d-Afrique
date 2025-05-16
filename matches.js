const countryToCode = {
  'Maroc': 'ma',
  'Égypte': 'eg',
  'Sénégal': 'sn',
  'Tunisie': 'tn',
  'Cameroun': 'cm',
  'Ghana': 'gh',
  'Burkina Faso': 'bf',
  'Mozambique': 'mz',
  'Algérie': 'dz',
  'Nigeria': 'ng',
  'Afrique du Sud': 'za',
  'Côte d\'Ivoire': 'ci',
  'Mali': 'ml',
  'RD Congo': 'cd',
  'Guinée': 'gn',
  'Zambie': 'zm',
  'Gabon': 'ga',
  'Angola': 'ao',
  'Madagascar': 'mg',
  'Soudan': 'sd',
  'Cap-Vert': 'cv',
  'Niger': 'ne',
  'Mauritanie': 'mr',
  'Ouganda': 'ug',
  'Togo': 'tg',
  'Bénin': 'bj'
};

const matchData = [
  {
    date: '2025-06-14',
    label: 'dim. 14 juin',
    tour: 'Phase de groupes - Groupe A',
    matches: [
      { teams: 'Maroc vs Égypte', time: '18:00', stadium: 'Stade Mohammed V, Casablanca' },
      { teams: 'Sénégal vs Tunisie', time: '21:00', stadium: 'Stade Adrar, Agadir' }
    ]
  },
  {
    date: '2025-06-15',
    label: 'lun. 15 juin',
    tour: 'Phase de groupes - Groupe B',
    matches: [
      { teams: 'Cameroun vs Ghana', time: '17:00', stadium: 'Stade Ibn Batouta, Tanger' },
      { teams: 'Burkina Faso vs Mozambique', time: '20:00', stadium: 'Stade de Fès' }
    ]
  },
  {
    date: '2025-06-16',
    label: 'mar. 16 juin',
    tour: 'Phase de groupes - Groupe C',
    matches: [
      { teams: 'Algérie vs Nigeria', time: '15:00', stadium: 'Stade de Marrakech' },
      { teams: 'Afrique du Sud vs Côte d\'Ivoire', time: '18:00', stadium: 'Stade Mohammed V, Casablanca' },
      { teams: 'Mali vs RD Congo', time: '21:00', stadium: 'Stade Adrar, Agadir' }
    ]
  },
  {
    date: '2025-06-17',
    label: 'mer. 17 juin',
    tour: 'Phase de groupes - Groupe D',
    matches: [
      { teams: 'Guinée vs Zambie', time: '18:00', stadium: 'Stade Ibn Batouta, Tanger' },
      { teams: 'Gabon vs Angola', time: '21:00', stadium: 'Stade de Fès' }
    ]
  },
  {
    date: '2025-06-18',
    label: 'jeu. 18 juin',
    tour: 'Phase de groupes - Groupe E',
    matches: [
      { teams: 'Madagascar vs Soudan', time: '17:00', stadium: 'Stade de Marrakech' },
      { teams: 'Cap-Vert vs Niger', time: '20:00', stadium: 'Stade Mohammed V, Casablanca' }
    ]
  },
  {
    date: '2025-06-19',
    label: 'ven. 19 juin',
    tour: 'Phase de groupes - Groupe F',
    matches: [
      { teams: 'Mauritanie vs Ouganda', time: '18:00', stadium: 'Stade Adrar, Agadir' },
      { teams: 'Togo vs Bénin', time: '21:00', stadium: 'Stade Ibn Batouta, Tanger' }
    ]
  }
];

// Helper function to split team names and get their codes
function formatTeams(teamsString) {
  const [team1, team2] = teamsString.split(' vs ');
  return {
    team1: team1.trim(),
    team2: team2.trim(),
    code1: countryToCode[team1.trim()],
    code2: countryToCode[team2.trim()]
  };
}

// Create main container if it doesn't exist
const mainContainer = document.createElement('div');
mainContainer.id = 'mainContent';
mainContainer.className = 'container';
mainContainer.style.paddingTop = '200px';
document.body.appendChild(mainContainer);

// Calendar dates container
const calendarDatesDiv = document.getElementById("calendarDates");

// Match container
const matchContainer = document.createElement('div');
matchContainer.id = "matchContainer";
mainContainer.appendChild(matchContainer);

// Calculate offset for scroll (height of both bars plus some padding)
const SCROLL_OFFSET = 220; // 120px (interactive bar) + 80px (calendar bar) + 20px padding

// Populate calendar dates
matchData.forEach(day => {
  // Calendar button
  const dateBtn = document.createElement("div");
  dateBtn.className = "calendar-date";
  dateBtn.textContent = day.label;
  dateBtn.onclick = () => {
    const element = document.getElementById(day.date);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - SCROLL_OFFSET;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };
  calendarDatesDiv.appendChild(dateBtn);

  // Match section
  const matchSection = document.createElement("div");
  matchSection.className = "match-section";
  matchSection.id = day.date;

  let innerHTML = `
    <div class="day-header">
      <h3 class="mb-2">${day.label}</h3>
      <h5 class="text-muted">${day.tour}</h5>
    </div>
  `;
  
  day.matches.forEach((match, index) => {
    const teams = formatTeams(match.teams);
    innerHTML += `
      <div class="card mb-3 match-card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-auto">
              <span class="badge bg-primary">Match ${index + 1}</span>
            </div>
            <div class="col">
              <div class="d-flex justify-content-center align-items-center match-teams">
                <div class="text-end" style="width: 40%;">
                  <img src="https://flagcdn.com/24x18/${teams.code1}.png" alt="${teams.team1}" class="me-2">
                  ${teams.team1}
                </div>
                <div class="mx-4 text-muted">-</div>
                <div class="text-start" style="width: 40%;">
                  ${teams.team2}
                  <img src="https://flagcdn.com/24x18/${teams.code2}.png" alt="${teams.team2}" class="ms-2">
                </div>
              </div>
            </div>
            <div class="col-auto">
              <span class="badge bg-secondary">${match.time}</span>
            </div>
          </div>
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

// Horizontal calendar scroll function
function scrollCalendar(direction) {
  calendarDatesDiv.scrollBy({ left: direction * 150, behavior: 'smooth' });
}
