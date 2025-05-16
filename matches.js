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

// Create main container if it doesn't exist
const mainContainer = document.createElement('div');
mainContainer.id = 'mainContent';
mainContainer.style.paddingTop = '200px'; // Add padding to prevent content from being hidden
document.body.appendChild(mainContainer);

// Calendar dates container
const calendarDatesDiv = document.getElementById("calendarDates");

// Match container
const matchContainer = document.createElement('div');
matchContainer.id = "matchContainer";
mainContainer.appendChild(matchContainer);

// Populate calendar dates
matchData.forEach(day => {
  // Calendar button
  const dateBtn = document.createElement("div");
  dateBtn.className = "calendar-date";
  dateBtn.textContent = day.label;
  dateBtn.onclick = () => {
    document.getElementById(day.date).scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  calendarDatesDiv.appendChild(dateBtn);

  // Match section
  const matchSection = document.createElement("div");
  matchSection.className = "match-section";
  matchSection.id = day.date;

  let innerHTML = `
    <div class="day-header">
      <h3>${day.label}</h3>
      <h5 class="text-muted">${day.tour}</h5>
    </div>
  `;
  
  day.matches.forEach((match, index) => {
    innerHTML += `
      <div class="card mb-3 match-card">
        <div class="card-body">
          <div class="match-info">
            <div class="match-number">Match ${index + 1}</div>
            <div class="match-teams">${match.teams}</div>
            <div class="match-time">${match.time}</div>
            <div class="match-stadium"><i class="fas fa-map-marker-alt"></i> ${match.stadium}</div>
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
