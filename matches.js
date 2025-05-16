const countryToCode = {
  'Maroc': 'ma',
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
  'Zimbabwe': 'zw'
};

const matchData = [
  {
    date: '2025-12-21',
    label: 'dim. 21 déc.',
    tour: 'Phase de groupes - Groupe A',
    matches: [
      { teams: 'Maroc vs Comores', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2025-12-22',
    label: 'lun. 22 déc.',
    tour: 'Phase de groupes - Groupes A et B',
    matches: [
      { teams: 'Mali vs Zambie', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Afrique du Sud vs Angola', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Égypte vs Zimbabwe', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2025-12-23',
    label: 'mar. 23 déc.',
    tour: 'Phase de groupes - Groupes C et D',
    matches: [
      { teams: 'Nigeria vs Tanzanie', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Tunisie vs Ouganda', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Rép. Dém. Congo vs Bénin', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Sénégal vs Botswana', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2025-12-24',
    label: 'mer. 24 déc.',
    tour: 'Phase de groupes - Groupes E et F',
    matches: [
      { teams: 'Algérie vs Soudan', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Burkina Faso vs Guinée Équatoriale', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Cameroun vs Gabon', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Côte d\'Ivoire vs Mozambique', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2025-12-26',
    label: 'ven. 26 déc.',
    tour: 'Phase de groupes - Groupes A et B',
    matches: [
      { teams: 'Maroc vs Mali', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Zambie vs Comores', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Angola vs Zimbabwe', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Égypte vs Afrique du Sud', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2025-12-27',
    label: 'sam. 27 déc.',
    tour: 'Phase de groupes - Groupes C et D',
    matches: [
      { teams: 'Nigeria vs Tunisie', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Ouganda vs Tanzanie', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Bénin vs Botswana', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Sénégal vs Rép. Dém. Congo', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2025-12-28',
    label: 'dim. 28 déc.',
    tour: 'Phase de groupes - Groupes E et F',
    matches: [
      { teams: 'Algérie vs Burkina Faso', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Guinée Équatoriale vs Soudan', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Côte d\'Ivoire vs Cameroun', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Gabon vs Mozambique', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2025-12-29',
    label: 'lun. 29 déc.',
    tour: 'Phase de groupes - Groupes A et B',
    matches: [
      { teams: 'Comores vs Mali', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Zambie vs Maroc', time: 'à déterminer', stadium: 'à déterminer' },
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
      { teams: 'Tanzanie vs Tunisie', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Botswana vs Rép. Dém. Congo', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Bénin vs Sénégal', time: 'à déterminer', stadium: 'à déterminer' }
    ]
  },
  {
    date: '2025-12-31',
    label: 'mer. 31 déc.',
    tour: 'Phase de groupes - Groupes E et F',
    matches: [
      { teams: 'Guinée Équatoriale vs Algérie', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Soudan vs Burkina Faso', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Gabon vs Côte d\'Ivoire', time: 'à déterminer', stadium: 'à déterminer' },
      { teams: 'Mozambique vs Cameroun', time: 'à déterminer', stadium: 'à déterminer' }
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
