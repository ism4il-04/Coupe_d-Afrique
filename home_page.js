// Scroll fluide et lent vers le haut quand on clique sur le bouton "backToTop"
document.getElementById('backToTop')?.addEventListener('click', function() {
    const duration = 2500; // duration in ms (2.5 seconds)
    const start = window.scrollY;
    const startTime = performance.now();

    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start * (1 - progress));
        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }
    requestAnimationFrame(scrollStep);
});
// Effet tilt interactif sur toutes les images sauf le logo
document.querySelectorAll('img:not(.logo-img)').forEach(img => {
    img.addEventListener('mousemove', function(e) {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 6;
        const rotateY = ((x - centerX) / centerX) * 12;
        img.style.transform = `scale(1.07) perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });
    img.addEventListener('mouseleave', function() {
        img.style.transform = '';
    });
});

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Animation du titre principal
    animateTitle();
    
    // Initialiser le compte à rebours
    initCountdown();
    
    // Observer les sections pour les animations au scroll
    initScrollAnimations();
    
    // Initialiser les effets de parallaxe
    initParallax();

    // Gestion du clic sur le logo pour retourner à la section hero
    const logoContainer = document.getElementById('logo-container');
    if (logoContainer) {
        logoContainer.addEventListener('click', () => {
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
                // Réinitialiser l'élément actif de la barre interactive
                document.querySelectorAll('.interactive-item').forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
        // Ajouter le style du curseur pointer
        logoContainer.style.cursor = 'pointer';
    }

    // Animation des éléments au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer les sections principales
    document.querySelectorAll('.text-with-image, .video, .images, .footer-section').forEach(section => {
        section.classList.add('section-anim');
        observer.observe(section);
    });

    // Effet de parallaxe sur le header
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll Down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll Up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Animation des liens de navigation
    const navLinks = document.querySelectorAll('.defaussit-nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            const x = e.pageX - link.offsetLeft;
            const y = e.pageY - link.offsetTop;
            
            link.style.setProperty('--x', `${x}px`);
            link.style.setProperty('--y', `${y}px`);
        });
    });

    // Animation des images au survol
    const images = document.querySelectorAll('img:not(.logo-img)');
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
            img.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            img.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // Effet de particules pour le fond
    createParticles();

    // Gestion de la barre interactive
    const interactiveItems = document.querySelectorAll('.interactive-item');
    const sections = document.querySelectorAll('.content-section');

    // Fonction pour mettre à jour l'élément actif
    function updateActiveItem(targetId) {
        interactiveItems.forEach(item => {
            if (item.dataset.section === targetId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Gestion du clic sur les éléments de la barre
    interactiveItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.dataset.section;
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                updateActiveItem(targetId);
            }
        });
    });

    // Gestion du scroll pour mettre à jour l'élément actif
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 100)) {
                currentSection = section.getAttribute('id');
            }
        });

        if (currentSection) {
            updateActiveItem(currentSection);
        }
    });
});

// Animation du titre lettre par lettre
function animateTitle() {
    const title = document.querySelector('.main-title');
    const text = title.textContent;
    title.textContent = '';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${index * 0.1}s`;
        title.appendChild(span);
    });
}

// Compte à rebours jusqu'au début de la CAN 2024
function initCountdown() {
    const countdownElement = document.querySelector('.countdown');
    const startDate = new Date('2025-12-21T00:00:00');
    let previousValues = {
        days: -1,
        hours: -1,
        minutes: -1,
        seconds: -1
    };
    
    function updateCountdown() {
        const now = new Date();
        const difference = startDate - now;
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Mettre à jour le HTML seulement si les valeurs ont changé
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
    
    function updateCountdownItem(type, value) {
        const item = document.querySelector(`.countdown-item[data-type="${type}"]`);
        if (item) {
            const span = item.querySelector('span');
            if (span) {
                // Ajouter l'animation de pulse
                item.classList.add('pulse');
                setTimeout(() => item.classList.remove('pulse'), 1000);
                
                // Mettre à jour la valeur avec un effet de fondu
                span.style.opacity = '0';
                setTimeout(() => {
                    span.textContent = value;
                    span.style.opacity = '1';
                }, 200);
            }
        }
    }
    
    // Créer la structure initiale du compte à rebours
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
    
    // Mettre à jour immédiatement et ensuite toutes les secondes
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Animations au scroll avec Intersection Observer
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section-text, .section-image');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Effet de parallaxe sur le hero
function initParallax() {
    const hero = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
}

// Gestion des liens de navigation
document.querySelectorAll('.section-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation des cartes de news
document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Gestion du responsive menu
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuButton.classList.toggle('active');
    });
}

// Animation des images au hover
document.querySelectorAll('.section-image img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
    });
    
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Smooth scroll pour tous les liens internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fonction pour créer l'effet de particules
function createParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
            if (this.y > height) this.y = 0;
            if (this.y < 0) this.y = height;
        }

        draw() {
            ctx.fillStyle = 'rgba(240, 193, 75, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}