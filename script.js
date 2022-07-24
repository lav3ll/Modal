'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

//Define Close Modal Function
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Define Open Modal Function
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

console.log(btnsOpenModal);


//Loop for selecting all 3 Modals and Opening them
for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

//Closing Modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Closing Modal with Esc
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})
