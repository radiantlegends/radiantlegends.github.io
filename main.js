const navItems = document.querySelectorAll('#navLinks a');
const sections = document.querySelectorAll(".content-section");

/* Navigation */

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

        content.scrollTo(0, 0);
    });
});