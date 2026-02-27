document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scrolling & Navbar auto-close
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === "") return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                // Close mobile navbar if open
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    } else if (typeof bootstrap !== 'undefined') {
                        new bootstrap.Collapse(navbarCollapse).hide();
                    }
                }

                // Smooth scroll to target
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Micro-interactions (Transitions ONLY)
    const interactiveElements = document.querySelectorAll('a, button, .custom-btn, .project-card, .contact-link, .experience-card, .skill-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });

    // 3D Tilt with Shine tracking - Simplified for default cursor
    const projectCards = document.querySelectorAll('.project-card, .skill-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (centerY - y) / 15;
            const rotateY = (x - centerX) / 15;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });

    // Typing Effect Logic
    const roles = ["Web Developer", "Software Engineer", "College Student"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingTextElement = document.getElementById('typing-text');

    function typeEffect() {
        if (!typingTextElement) return;
        const currentRole = roles[roleIndex];
        typingTextElement.textContent = isDeleting ? currentRole.substring(0, charIndex--) : currentRole.substring(0, charIndex++);

        let typingSpeed = isDeleting ? 30 : 60;
        if (!isDeleting && charIndex === currentRole.length + 1) {
            typingSpeed = 2500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 800;
        }
        setTimeout(typeEffect, typingSpeed);
    }
    setTimeout(typeEffect, 1500);

    // Advanced Staggered Intersection Observer
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .experience-card, .skill-card, .project-card').forEach(el => revealObserver.observe(el));

    // Multi-layered Smooth Parallax Particles
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (let i = 0; i < 40; i++) {
            const p = document.createElement('div');
            Object.assign(p.style, {
                position: 'absolute',
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(1px)',
                pointerEvents: 'none'
            });
            particlesContainer.appendChild(p);

            window.addEventListener('mousemove', (e) => {
                const moveX = (e.clientX - window.innerWidth / 2) * (i / 400);
                const moveY = (e.clientY - window.innerHeight / 2) * (i / 400);
                p.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        }
    }
});
