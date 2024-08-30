const elements = document.querySelectorAll('.menu__item');
const showAllButton = document.querySelector('.show-all-button');
const screenWidth = window.innerWidth;



function hideElements() {
    let maximumVisibleElements;
    if (screenWidth < 1120 ) {
        maximumVisibleElements = 6; 
    }
    else { 
        maximumVisibleElements = 8; 
    }
    for (let i = 0; i < elements.length; i++) {
        if (i >= maximumVisibleElements) {
            elements[i].classList.add('hidden');
        }
    }
};


hideElements();

