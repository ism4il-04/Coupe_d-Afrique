// Gestion du bouton de retour en haut de page avec animation fluide
document.getElementById('backToTop')?.addEventListener('click', function() {
    // Configuration de l'animation de défilement
    const duration = 2500; // Durée de l'animation en millisecondes (2.5 secondes)
    const start = window.scrollY; // Position de départ du scroll
    const startTime = performance.now(); // Timestamp du début de l'animation

    // Fonction récursive pour animer le défilement
    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime; // Temps écoulé depuis le début
        const progress = Math.min(elapsed / duration, 1); // Progression de 0 à 1
        window.scrollTo(0, start * (1 - progress)); // Déplacement progressif vers le haut
        // Continue l'animation si elle n'est pas terminée
        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }
    // Démarre l'animation de défilement
    requestAnimationFrame(scrollStep);
});

// Effet de basculement 3D sur les images (sauf le logo) au survol de la souris
document.querySelectorAll('img:not(.logo-img)').forEach(img => {
    // Gestion du mouvement de la souris sur l'image
    img.addEventListener('mousemove', function(e) {
        // Calcul des dimensions et de la position de l'image
        const rect = img.getBoundingClientRect();
        // Position relative de la souris par rapport à l'image
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Calcul du centre de l'image
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        // Calcul des angles de rotation basés sur la position de la souris
        const rotateX = ((y - centerY) / centerY) * 6;  // Rotation verticale limitée à 6 degrés
        const rotateY = ((x - centerX) / centerX) * 12; // Rotation horizontale limitée à 12 degrés
        // Application de la transformation 3D avec mise à l'échelle et perspective
        img.style.transform = `scale(1.07) perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });
    // Réinitialisation de la transformation quand la souris quitte l'image
    img.addEventListener('mouseleave', function() {
        img.style.transform = '';
    });
});

// Initialisation des fonctionnalités après le chargement complet du DOM
document.addEventListener('DOMContentLoaded', () => {
    // Lancement des animations et initialisations principales
    animateTitle();        // Animation du titre caractère par caractère
    initCountdown();       // Démarrage du compte à rebours
    initScrollAnimations();// Configuration des animations au défilement
    initParallax();       // Activation de l'effet de parallaxe

    // Configuration du logo cliquable pour retourner en haut de page
    const logoContainer = document.getElementById('logo-container');
    if (logoContainer) {
        logoContainer.addEventListener('click', () => {
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                // Défilement fluide vers la section hero
                heroSection.scrollIntoView({ behavior: 'smooth' });
                // Désactivation de tous les éléments de navigation
                document.querySelectorAll('.interactive-item').forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
        // Ajout du curseur pointeur pour indiquer que le logo est cliquable
        logoContainer.style.cursor = 'pointer';
    }

    // Configuration de l'observateur d'intersection pour les animations au défilement
    const observerOptions = {
        threshold: 0.1,                    // Déclenche quand 10% de l'élément est visible
        rootMargin: '0px 0px -50px 0px'    // Marge négative en bas pour déclencher plus tôt
    };

    // Création de l'observateur pour les animations au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Ajoute la classe 'visible' quand l'élément entre dans le viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Arrête d'observer une fois animé
            }
        });
    }, observerOptions);

    // Application de l'observateur sur les sections principales
    document.querySelectorAll('.text-with-image, .video, .images, .footer-section').forEach(section => {
        section.classList.add('section-anim'); // Ajoute la classe pour l'animation
        observer.observe(section);             // Commence à observer la section
    });

    // Gestion de l'effet de parallaxe sur le header lors du défilement
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Gestion du header tout en haut de la page
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        // Gestion de l'apparition/disparition du header selon la direction du scroll
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Masque le header lors du défilement vers le bas
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Affiche le header lors du défilement vers le haut
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll; // Mémorise la position pour la prochaine comparaison
    });

    // Gestion des effets de survol sur les liens de navigation
    const navLinks = document.querySelectorAll('.defaussit-nav a');
    navLinks.forEach(link => {
        // Ajout d'un effet visuel personnalisé au survol
        link.addEventListener('mouseenter', (e) => {
            // Calcul de la position relative du curseur par rapport au lien
            const x = e.pageX - link.offsetLeft;
            const y = e.pageY - link.offsetTop;
            
            // Application des coordonnées pour l'effet visuel via CSS
            link.style.setProperty('--x', `${x}px`);
            link.style.setProperty('--y', `${y}px`);
        });
    });

    // Configuration des effets visuels sur les images
    const images = document.querySelectorAll('img:not(.logo-img)');
    images.forEach(img => {
        // Effet d'agrandissement et d'ombre au survol
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';              // Agrandissement léger
            img.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)'; // Ombre portée prononcée
        });
        
        // Retour à l'état initial quand la souris quitte l'image
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';                 // Taille normale
            img.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)'; // Ombre légère
        });
    });

    // Création de l'effet de particules en arrière-plan
    createParticles();

    // Gestion de la barre de navigation interactive
    const interactiveItems = document.querySelectorAll('.interactive-item');
    const sections = document.querySelectorAll('.content-section');

    // Fonction de mise à jour de l'élément actif dans la navigation
    function updateActiveItem(targetId) {
        interactiveItems.forEach(item => {
            // Active ou désactive les éléments selon la section courante
            if (item.dataset.section === targetId) {
                item.classList.add('active');    // Active l'élément correspondant
            } else {
                item.classList.remove('active'); // Désactive les autres éléments
            }
        });
    }

    // Configuration des clics sur les éléments de navigation
    interactiveItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.dataset.section;
            const targetSection = document.getElementById(targetId);
            
            // Défilement fluide vers la section ciblée si elle existe
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                updateActiveItem(targetId); // Mise à jour de la navigation
            }
        });
    });

    // Mise à jour automatique de la navigation pendant le défilement
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        // Détermination de la section actuellement visible
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Vérifie si la section est suffisamment visible (100px de marge)
            if (window.pageYOffset >= (sectionTop - 100)) {
                currentSection = section.getAttribute('id');
            }
        });

        // Mise à jour de la navigation si une section est détectée
        if (currentSection) {
            updateActiveItem(currentSection);
        }
    });
});

// Animation du titre avec un effet lettre par lettre
function animateTitle() {
    // Récupération et préparation du titre
    const title = document.querySelector('.main-title');
    const text = title.textContent;
    title.textContent = ''; // Efface le contenu initial
    
    // Création d'un span pour chaque lettre avec délai d'animation
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        // Délai progressif pour créer un effet cascade
        span.style.animationDelay = `${index * 0.1}s`;
        title.appendChild(span);
    });
}

// Initialisation et gestion du compte à rebours jusqu'à la CAN 2025
function initCountdown() {
    // Sélection de l'élément de compte à rebours
    const countdownElement = document.querySelector('.countdown');
    // Date de début de l'événement
    const startDate = new Date('2025-12-21T00:00:00');
    // Stockage des valeurs précédentes pour optimisation
    let previousValues = {
        days: -1,
        hours: -1,
        minutes: -1,
        seconds: -1
    };
    
    // Fonction de mise à jour du compte à rebours
    function updateCountdown() {
        const now = new Date();
        const difference = startDate - now;
        
        // Logs de débogage pour suivre la progression
        console.log('Date de début:', startDate);
        console.log('Date actuelle:', now);
        console.log('Différence en jours:', Math.floor(difference / (1000 * 60 * 60 * 24)));
        
        // Calcul des différentes unités de temps
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Mise à jour conditionnelle pour éviter les rafraîchissements inutiles
        if (days !== previousValues.days) {
            updateCountdownItem('days', days);
            previousValues.days = days;
        }
        if (hours !== previousValues.hours) {
            updateCountdownItem('hours', hours);
            previousValues.hours = hours;
        }
        if (minutes !== previousValues.minutes) {
            updateCountdownItem('minutes', minutes);
            previousValues.minutes = minutes;
        }
        if (seconds !== previousValues.seconds) {
            updateCountdownItem('seconds', seconds);
            previousValues.seconds = seconds;
        }
    }
    
    // Fonction de mise à jour visuelle d'un élément du compte à rebours
    function updateCountdownItem(type, value) {
        const item = document.querySelector(`.countdown-item[data-type="${type}"]`);
        if (item) {
            const span = item.querySelector('span');
            if (span) {
                // Animation de pulsation lors du changement
                item.classList.add('pulse');
                setTimeout(() => item.classList.remove('pulse'), 1000);
                
                // Animation de fondu pour le changement de valeur
                span.style.opacity = '0';
                setTimeout(() => {
                    span.textContent = value;
                    span.style.opacity = '1';
                }, 200);
            }
        }
    }
    
    // Structure HTML du compte à rebours avec les différentes unités
    countdownElement.innerHTML = `
        <div class="countdown-item" data-type="days">
            <span>0</span>
            <p>Jours</p>
        </div>
        <div class="countdown-item" data-type="hours">
            <span>0</span>
            <p>Heures</p>
        </div>
        <div class="countdown-item" data-type="minutes">
            <span>0</span>
            <p>Minutes</p>
        </div>
        <div class="countdown-item" data-type="seconds">
            <span>0</span>
            <p>Secondes</p>
        </div>
    `;
    
    // Initialisation et mise à jour périodique du compte à rebours
    updateCountdown(); // Premier appel immédiat
    setInterval(updateCountdown, 1000); // Mise à jour toutes les secondes
}

// Configuration des animations déclenchées au défilement
function initScrollAnimations() {
    // Sélection des éléments à animer
    const sections = document.querySelectorAll('.section-text, .section-image');
    
    // Configuration de l'observateur d'intersection
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Ajout de la classe d'animation quand l'élément devient visible
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Déclenche l'animation quand 10% de l'élément est visible
    });
    
    // Application de l'observateur sur chaque section
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Configuration de l'effet de parallaxe sur la section hero
function initParallax() {
    // Sélection de la section hero
    const hero = document.querySelector('.hero-section');
    
    // Ajout de l'effet de parallaxe au défilement
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        // Déplacement de l'arrière-plan en fonction du défilement
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`; // Vitesse de parallaxe à 50%
    });
}

// Gestion des liens de navigation avec défilement fluide
document.querySelectorAll('.section-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Défilement fluide vers la section ciblée
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Animation de défilement
                block: 'start'     // Alignement en haut de la section
            });
        }
    });
});

// Animation des cartes d'actualités avec effet de survol
document.querySelectorAll('.news-card').forEach(card => {
    // Effet de soulèvement au survol
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)'; // Déplacement vers le haut
    });
    
    // Retour à la position initiale
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Configuration du menu responsive
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

// Gestion du menu hamburger pour mobile
if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
        // Bascule de l'état du menu et du bouton
        navLinks.classList.toggle('active');
        menuButton.classList.toggle('active');
    });
}

// Effet de zoom sur les images des sections
document.querySelectorAll('.section-image img').forEach(img => {
    // Agrandissement au survol
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)'; // Zoom de 5%
    });
    
    // Retour à la taille normale
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Configuration du défilement fluide pour tous les liens internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut
        const target = document.querySelector(this.getAttribute('href'));
        
        // Défilement animé vers la cible
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', // Animation fluide
                block: 'start'     // Alignement en haut
            });
        }
    });
});

// Création et gestion de l'effet de particules en arrière-plan
function createParticles() {
    // Création et configuration du canvas
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none'; // Permet les clics à travers le canvas
    canvas.style.zIndex = '-1';          // Place le canvas en arrière-plan
    document.body.appendChild(canvas);

    // Initialisation du contexte de dessin 2D
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Configuration du système de particules
    const particles = [];
    const particleCount = 50; // Nombre total de particules

    // Définition de la classe Particle qui gère chaque particule individuelle de l'animation
    class Particle {
        constructor() {
            // Initialisation des propriétés avec des valeurs aléatoires
            this.x = Math.random() * width;      // Position horizontale aléatoire
            this.y = Math.random() * height;     // Position verticale aléatoire
            this.size = Math.random() * 3 + 1;   // Taille entre 1 et 4 pixels
            this.speedX = Math.random() * 2 - 1; // Vitesse horizontale entre -1 et 1
            this.speedY = Math.random() * 2 - 1; // Vitesse verticale entre -1 et 1
        }

        // Méthode pour mettre à jour la position de la particule
        update() {
            // Déplacement de la particule selon sa vitesse
            this.x += this.speedX;
            this.y += this.speedY;

            // Gestion des bords de l'écran avec effet de "wrap-around"
            if (this.x > width) this.x = 0;      // Si sort à droite, réapparaît à gauche
            if (this.x < 0) this.x = width;      // Si sort à gauche, réapparaît à droite
            if (this.y > height) this.y = 0;     // Si sort en bas, réapparaît en haut
            if (this.y < 0) this.y = height;     // Si sort en haut, réapparaît en bas
        }

        // Méthode pour dessiner la particule sur le canvas
        draw() {
            ctx.fillStyle = 'rgba(240, 193, 75, 0.5)'; // Couleur dorée semi-transparente
            ctx.beginPath();                           // Début du tracé
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // Dessin du cercle
            ctx.fill();                               // Remplissage de la forme
        }
    }

    // Fonction d'initialisation du système de particules
    function init() {
        // Création du nombre défini de particules
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle()); // Ajout de chaque nouvelle particule au tableau
        }
    }

    // Fonction principale d'animation qui s'exécute en boucle
    function animate() {
        ctx.clearRect(0, 0, width, height); // Effacement du canvas pour le nouveau frame
        
        // Mise à jour et dessin de chaque particule
        particles.forEach(particle => {
            particle.update(); // Mise à jour de la position
            particle.draw();   // Dessin de la particule
        });
        
        // Demande le prochain frame d'animation
        requestAnimationFrame(animate);
    }

    // Lancement de l'animation
    init();    // Initialisation des particules
    animate(); // Démarrage de la boucle d'animation

    // Gestion du redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        // Ajustement de la taille du canvas à la nouvelle taille de la fenêtre
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}