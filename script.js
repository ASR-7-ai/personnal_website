// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Smooth Scrolling for Hero Button
function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Adjust for fixed header
            behavior: 'smooth'
        });
    }
}

// Easter Egg Functionality
function revealEasterEgg() {
    const easterEggContent = document.getElementById('easter-egg-content');
    const easterEggHint = document.querySelector('.easter-egg-hint');

    if (easterEggContent.classList.contains('visible')) {
        easterEggContent.classList.remove('visible');
        easterEggHint.innerHTML = '\ud83e\udd2b Click for a secret!';
    } else {
        easterEggContent.classList.add('visible');
        easterEggHint.innerHTML = '\ud83d\udc40 Secret revealed! Click again to hide.';
    }
}

// Optional: Add a subtle animation on scroll for sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(section);
    });

    // Ensure header and hero are visible immediately
    document.querySelector('header').style.opacity = 1;
    document.querySelector('.hero').style.opacity = 1;
    document.querySelector('.hero').style.transform = 'translateY(0)';
});
