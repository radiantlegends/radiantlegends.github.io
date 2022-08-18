/* Navigation */

const navIcon = document.getElementById('navIcon');
navIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const nav = document.getElementById('navLinks');
    if(nav.style.display === 'grid') {
        nav.style.display = 'none';
        navIcon.style.top = '5vw';
    } else {
        nav.style.display = 'grid';
        navIcon.style.top = 'calc(5vw + 54px)';
    }
}

/* Scrollbar */

const details = document.querySelector('.details');
details.addEventListener('scroll', () => {
    const scroll = details.scrollTop;

    if(scroll > 0) {
        //scrollbar is not at the top
        if(details.scrollHeight - scroll == details.offsetHeight) {
            //scrollbar is at the bottom
            details.className = 'details scroll-bottom';
        } else {
            //scrollbar is in the middle
            details.className = 'details scroll-middle';
        }
    } else {
        //scrollbar is at the top
        details.className = 'details scroll-top';
    }
});