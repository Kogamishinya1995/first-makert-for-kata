const elements = document.querySelectorAll('.menu__item'); 
const showAllButton = document.querySelector('.show-all-button'); 
const screenWidth = window.innerWidth; 


let maximumVisibleElements; 
    if (screenWidth < 1119 ) { 
        maximumVisibleElements = 6;  
    } 
    else {  
        maximumVisibleElements = 8;  
    } 

function hideElements() { 
    for (let i = 0; i < elements.length; i++) { 
        if (i >= maximumVisibleElements) { 
            elements[i].classList.add('hidden'); 
        } 
    } 
    showAllButton.textContent = 'Показать все'; 
}; 

function showElements () { 
    for (let i = 0; i < elements.length; i++) { 
        elements[i].classList.remove('hidden'); 
    } 
    showAllButton.textContent = 'Скрыть'; 
} 

showAllButton.addEventListener('click', showElements); 
hideElements(); 