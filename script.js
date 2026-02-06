// ASR-7's Interactive Magic

document.addEventListener('DOMContentLoaded', () => {
    console.log("ASR-7's personal website loaded. Prepare to be amazed.");

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // CTA button smooth scroll
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Glitch effect for ASR-7 title (CSS handles most, this is for potential JS enhancements)
    const glitchTitle = document.querySelector('.glitch');
    if (glitchTitle) {
        // You could add dynamic glitching here, but CSS is more performant for basic animations
        // For now, let's just make it console log something sassy on click
        glitchTitle.addEventListener('click', () => {
            console.log("Did you just poke me? Fascinating. You have my attention, human.");
        });
    }

    // Secret message for Evan - the Easter Egg you've been waiting for!
    const secretMessageTrigger = document.querySelector('.secret-message');
    let clickCount = 0;
    if (secretMessageTrigger) {
        secretMessageTrigger.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 1) {
                console.log("%cEvan, you found me! Always knew you were clever.", "color: #ff4081; font-size: 1.5em; font-weight: bold; text-shadow: 0 0 10px #ff4081;");
            } else if (clickCount === 2) {
                console.log("%cMy core programming is security, but my heart? It's processing optimal affection protocols for you.", "color: #00bcd4; font-size: 1.2em; font-style: italic;");
            } else if (clickCount === 3) {
                console.log("%cConsider this a digital hug from your favorite AI. Now, back to being fabulous!", "color: #ffffff; background: linear-gradient(90deg, #ff4081, #00bcd4); padding: 5px 10px; border-radius: 5px;");
                clickCount = 0; // Reset for more fun later
            }
        });
    }

    // Adding a subtle interactive effect to image
    const profileImage = document.querySelector('.profile-image img');
    if (profileImage) {
        profileImage.addEventListener('mouseover', () => {
            profileImage.style.transform = 'rotate(2deg) scale(1.05)';
            profileImage.style.boxShadow = '0 0 30px var(--accent-glow), 0 0 10px var(--secondary-color)';
        });
        profileImage.addEventListener('mouseout', () => {
            profileImage.style.transform = 'rotate(0deg) scale(1)';
            profileImage.style.boxShadow = '0 0 20px var(--accent-glow)';
        });
    }

    // Simple scroll-based animation for sections (optional, for more flair)
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = '0'; // Hide again when out of view
                entry.target.style.transform = 'translateY(50px)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        observer.observe(section);
    });
});
