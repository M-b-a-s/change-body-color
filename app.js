// DOM Elements

const colors = document.querySelectorAll('.color-card span');
const body = document.querySelector('body');
const txt = document.querySelector('.text');


// click color palette to change body color
colors.forEach(color => {
    color.addEventListener('click', () => {
        if(color.classList.contains('color-1')) {
            body.style.background = 'beige'
        }
        if(color.classList.contains('color-2')) {
            body.style.background = 'coral'
        }
        if(color.classList.contains('color-3')) {
            body.style.background = 'teal'
        }
        if(color.classList.contains('color-4')) {
            body.style.background = 'slategrey';

        }
    })
})