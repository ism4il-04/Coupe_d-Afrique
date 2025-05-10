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