const navIcon = document.getElementById('navIcon');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('#navLinks a');
const sections = document.querySelectorAll(".content-section");

/* Navigation */

function toggleMobileMenu() {
    const isOpen = navLinks.classList.toggle('is-open');
    navIcon.setAttribute('aria-expanded', isOpen);
    navIcon.setAttribute('aria-label', isOpen ? 'Close Navigation' : 'Open Navigation');
}

navIcon.addEventListener('click', toggleMobileMenu);

navItems.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();

        const target = item.getAttribute('href').slice(1);
        const content = document.querySelector('.content');

        sections.forEach(section => {
            section.classList.toggle('active', section.id === target);
        });

        navItems.forEach(link => link.removeAttribute('aria-current'));
        item.setAttribute('aria-current', 'page');
        navLinks.classList.remove('is-open');
        navIcon.setAttribute('aria-expanded', 'false');
        navIcon.setAttribute('aria-label', 'Open Navigation');

        content.scrollTo(0, 0);
    });
});