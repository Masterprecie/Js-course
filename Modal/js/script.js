'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalbtn = document.querySelector('.close-modal');
const showModalbtn = document.querySelectorAll('.show-modal');

//created a function to open the modal 
const openModal = function () {
   modal.classList.remove('hidden'); //the remove method removes the hidden class from the html element
   overlay.classList.remove('hidden');
}

//called the open modal function inside the event lisener
for (let i = 0; i < showModalbtn.length; i++) {
   showModalbtn[i].addEventListener('click', openModal)
};

//created a function to close the modal either clicking on the close button or outside the overlay
const closeModal = function () {
   modal.classList.add('hidden'); //when you click on the close button it adds the hidden class which hides the modal
   overlay.classList.add('hidden');
}

//called the close modal function inside the event lisener
closeModalbtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


//listing for every event on the page
document.addEventListener ('keydown', function (e) {
   
   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
   }
});













// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });