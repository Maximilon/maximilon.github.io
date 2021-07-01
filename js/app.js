"use strict";

/* this is a simply script (not refactored) for the show/hide of the modal. I have designed this script to be manually coded with the intention of adding refactoring for a function where the class name is passed based on the blog clicked. Because there is no database at the moment I have not bothered with generating this logic until that stage is reached */

const modalOne = document.querySelector(".modalOne");
const modalTwo = document.querySelector(".modalTwo");
const overlay = document.querySelector(".overlay");
const btnCloseModal1 = document.querySelector(".closeModal1");
const btnCloseModal2 = document.querySelector(".closeModal2");
const openModalOne = document.querySelectorAll(".openModalOne");
const openModalTwo = document.querySelectorAll(".openModalTwo");
const body = document.querySelector("body");

const openModal1 = function () {
  modalOne.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("modalScroll");
};

const openModal2 = function () {
  modalTwo.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("modalScroll");
};

const closeModal = function () {
  modalOne.classList.add("hidden");
  modalTwo.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("modalScroll");
};

for (let i = 0; i < openModalOne.length; i++)
  openModalOne[i].addEventListener("click", openModal1);
btnCloseModal1.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

for (let i = 0; i < openModalTwo.length; i++)
  openModalTwo[i].addEventListener("click", openModal2);
btnCloseModal2.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//functionaity for sticky header
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickHeader();
};

// // Get the header
// const header = document.querySelector(".header");
// const headerPlaceholder = document.querySelector(".headerPlaceholder");

// // Get the offset position of the navbar
// let sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickHeader() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//     headerPlaceholder.styles.display = "block";
//   } else {
//     header.classList.remove("sticky");
//     headerPlaceholder.styles.display = "none";
//   }
// }
