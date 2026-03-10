document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in animations
    // Gives the design a dynamic, responsive feel
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Make target sections programmatically focusable safely for accessibility
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    targetEl.setAttribute('tabindex', '-1');
                    targetEl.focus({ preventScroll: true });
                }
            }
        });
    });

    // Email generator
    const emailBtns = document.querySelectorAll('.org-email-btn');
    emailBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const user = this.getAttribute('data-user');
            const domain = this.getAttribute('data-domain');
            if (user && domain) {
                window.location.href = `mailto:${user}@${domain}`;
            }
        });
    });
});
