import { animate, createTimeline, createTimer, stagger, utils } from 'https://esm.sh/animejs';

// --- Creature Logic ---
const creatureEl = document.querySelector('#creature');
const viewport = { w: window.innerWidth * .5, h: window.innerHeight * .5 };
const cursor = { x: 0, y: 0 };
const rows = 13;
const grid = [rows, rows];
const from = 'center';
const scaleStagger = stagger([2, 5], { ease: 'inQuad', grid, from });
const opacityStagger = stagger([1, .1], { grid, from });

if (creatureEl) {
    for (let i = 0; i < (rows * rows); i++) {
        creatureEl.appendChild(document.createElement('div'));
    }

    const particuleEls = creatureEl.querySelectorAll('div');

    utils.set(creatureEl, {
        width: rows * 10 + 'em',
        height: rows * 10 + 'em'
    });

    utils.set(particuleEls, {
        x: 0,
        y: 0,
        scale: scaleStagger,
        opacity: opacityStagger,
        background: stagger([80, 20], {
            grid, from,
            modifier: v => `hsl(200, 70%, ${v}%)`,
        }),
        boxShadow: stagger([8, 1], {
            grid, from,
            modifier: v => `0px 0px ${utils.round(v, 0)}em 0px var(--creature-color)`,
        }),
        zIndex: stagger([rows * rows, 1], { grid, from, modifier: utils.round(0) }),
    });

    const pulse = () => {
        animate(particuleEls, {
            keyframes: [
                {
                    scale: 5,
                    opacity: 1,
                    delay: stagger(90, { start: 1650, grid, from }),
                    duration: 150,
                }, {
                    scale: scaleStagger,
                    opacity: opacityStagger,
                    ease: 'inOutQuad',
                    duration: 600
                }
            ],
        });
    }

    const mainLoop = createTimer({
        frameRate: 15,
        onUpdate: () => {
            animate(particuleEls, {
                x: cursor.x,
                y: cursor.y,
                delay: stagger(40, { grid, from }),
                duration: stagger(120, { start: 750, ease: 'inQuad', grid, from }),
                ease: 'inOut',
                composition: 'blend',
            });
        }
    });

    const autoMove = createTimeline()
        .add(cursor, {
            x: [-viewport.w * .45, viewport.w * .45],
            modifier: x => x + Math.sin(mainLoop.currentTime * .0007) * viewport.w * .5,
            duration: 3000,
            ease: 'inOutExpo',
            alternate: true,
            loop: true,
            onBegin: pulse,
            onLoop: pulse,
        }, 0)
        .add(cursor, {
            y: [-viewport.h * .45, viewport.h * .45],
            modifier: y => y + Math.cos(mainLoop.currentTime * .00012) * viewport.h * .5,
            duration: 1000,
            ease: 'inOutQuad',
            alternate: true,
            loop: true,
        }, 0);

    const manualMovementTimeout = createTimer({
        duration: 1500,
        onComplete: () => autoMove.play(),
    });

    const followPointer = e => {
        const event = e.type === 'touchmove' ? e.touches[0] : e;
        // Adjust for fixed positioning
        cursor.x = event.clientX - window.innerWidth * 0.5;
        cursor.y = event.clientY - window.innerHeight * 0.5;
        autoMove.pause();
        manualMovementTimeout.restart();
    }

    document.addEventListener('mousemove', followPointer);
    document.addEventListener('touchmove', followPointer);
}

// --- Existing Portfolio Logic ---

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link, a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Header - keep it fixed and unchanged
const header = document.querySelector('.header');

if (header) {
    header.style.setProperty('visibility', 'visible', 'important');
    header.style.setProperty('opacity', '1', 'important');
    header.style.setProperty('display', 'flex', 'important');
    header.style.setProperty('z-index', '99999', 'important');
    header.style.setProperty('position', 'fixed', 'important');
    header.style.setProperty('pointer-events', 'auto', 'important');

    header.style.setProperty('top', '20px', 'important');
    header.style.setProperty('width', '90%', 'important');
    header.style.setProperty('max-width', '600px', 'important');
    header.style.setProperty('padding', '15px 30px', 'important');

    window.addEventListener('load', () => {
        header.style.setProperty('visibility', 'visible', 'important');
        header.style.setProperty('opacity', '1', 'important');
        header.style.setProperty('z-index', '99999', 'important');
    });
}

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// Animate stats on scroll
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const finalValue = stat.textContent;
                const numericValue = parseInt(finalValue);
                if (!isNaN(numericValue)) {
                    let current = 0;
                    const increment = numericValue / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= numericValue) {
                            stat.textContent = finalValue;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + '+';
                        }
                    }, 30);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Scroll progress indicator
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// Add fade-in animation to elements on scroll
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.project-card, .skill-category, .timeline-item, .about-text').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(item);
});

// Form submission handler (if needed)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}
