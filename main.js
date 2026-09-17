const navIcon = document.getElementById('navIcon');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('#navLinks a');
const sections = document.querySelectorAll(".content-section");

function toggleMobileMenu() {
    const isOpen = navLinks.classList.toggle('is-open');
    navIcon.setAttribute('aria-expanded', isOpen);
    navIcon.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
}

navIcon.addEventListener('click', toggleMobileMenu);

navItems.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const target = item.getAttribute('href').slice(1);

        sections.forEach(section => {
            section.classList.toggle('active', section.id === target);
        });

        navItems.forEach(link => link.removeAttribute('aria-current'));
        item.setAttribute('aria-current', 'page');
        navLinks.classList.remove('is-open');
        navIcon.setAttribute('aria-expanded', 'false');
        navIcon.setAttribute('aria-label', 'Open navigation');
    });
});

const details = document.querySelector('.details');
details.addEventListener('scroll', () => {
    const isAtTop = details.scrollTop === 0;
    const isAtBottom = Math.ceil(details.scrollTop + details.clientHeight) >= details.scrollHeight;

    details.classList.remove('scroll-top', 'scroll-middle', 'scroll-bottom');
    details.classList.add(isAtTop ? 'scroll-top' : isAtBottom ? 'scroll-bottom' : 'scroll-middle');
});