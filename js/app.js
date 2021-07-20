"use strict";

/* this is a simply script (not refactored) for the show/hide of the modal. I have designed this script to be manually coded with the intention of adding refactoring for a function where the class name is passed based on the blog clicked. Because there is no database at the moment I have not bothered with generating this logic until that stage is reached */

const modalOne = document.querySelector(".modalOne");
const modalTwo = document.querySelector(".modalTwo");
const modalThree = document.querySelector(".modalThree");
const modalFour = document.querySelector(".modalFour");
const modalFive = document.querySelector(".modalFive");
const modalSix = document.querySelector(".modalSix");
const modalSeven = document.querySelector(".modalSeven");
const modalEight = document.querySelector(".modalEight");
const modalNine = document.querySelector(".modalEight");

const btnCloseModal1 = document.querySelector(".closeModal1");
const btnCloseModal2 = document.querySelector(".closeModal2");
const btnCloseModal3 = document.querySelector(".closeModal3");
const btnCloseModal4 = document.querySelector(".closeModal4");
const btnCloseModal5 = document.querySelector(".closeModal5");
const btnCloseModal6 = document.querySelector(".closeModal6");
const btnCloseModal7 = document.querySelector(".closeModal7");
const btnCloseModal8 = document.querySelector(".closeModal8");
const btnCloseModal9 = document.querySelector(".closeModal8");

const openModalOne = document.querySelectorAll(".openModalOne");
const openModalTwo = document.querySelectorAll(".openModalTwo");
const openModalThree = document.querySelectorAll(".openModalThree");
const openModalFour = document.querySelectorAll(".openModalFour");
const openModalFive = document.querySelectorAll(".openModalFive");
const openModalSix = document.querySelectorAll(".openModalSix");
const openModalSeven = document.querySelectorAll(".openModalSeven");
const openModalEight = document.querySelectorAll(".openModalEight");
const openModalNine = document.querySelectorAll(".openModalEight");

const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");

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

const openModal3 = function () {
  modalThree.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("modalScroll");
};

const openModal4 = function () {
  modalFour.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("modalScroll");
};

const openModal5 = function () {
  modalFive.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("modalScroll");
};

const openModal6 = function () {
  modalSix.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("modalScroll");
};

const openModal7 = function () {
  modalSeven.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("modalScroll");
};

const openModal8 = function () {
  modalEight.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("modalScroll");
};

const openModal9 = function () {
  modalNine.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("modalScroll");
};

const closeModal = function () {
  modalOne.classList.add("hidden");
  modalTwo.classList.add("hidden");
  modalThree.classList.add("hidden");
  modalFour.classList.add("hidden");
  modalFive.classList.add("hidden");
  modalSix.classList.add("hidden");
  modalSeven.classList.add("hidden");
  modalEight.classList.add("hidden");
  modalNine.classList.add("hidden");
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

for (let i = 0; i < openModalThree.length; i++)
  openModalThree[i].addEventListener("click", openModal3);
btnCloseModal3.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

for (let i = 0; i < openModalFour.length; i++)
  openModalFour[i].addEventListener("click", openModal4);
btnCloseModal4.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

for (let i = 0; i < openModalFive.length; i++)
  openModalFive[i].addEventListener("click", openModal5);
btnCloseModal5.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

for (let i = 0; i < openModalSix.length; i++)
  openModalSix[i].addEventListener("click", openModal6);
btnCloseModal6.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

for (let i = 0; i < openModalSeven.length; i++)
  openModalSeven[i].addEventListener("click", openModal7);
btnCloseModal7.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

for (let i = 0; i < openModalEight.length; i++)
  openModalEight[i].addEventListener("click", openModal8);
btnCloseModal8.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

for (let i = 0; i < openModalNine.length; i++)
  openModalNine[i].addEventListener("click", openModal9);
btnCloseModal9.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//========sticky nav==================

const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

//we can target the rootMargin dynamically.
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries; //destructing an array
  //console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

//using intersection API to create sticky nav.
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, //we are interested in the entire viewpoint
  threshold: 0,
  rootMargin: `-${navHeight}px`, //this will create a box of 90 pixels outside of out target element. This is the height of the navigation.
});

headerObserver.observe(header); //the element we are tracking
console.log("hi");
