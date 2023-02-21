'use strict';


// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;

// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// const document = dom.window.document;

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// function updateProgressBar(progressBar, value) {
//   value = Math.round(value);
//   progressBar.querySelector(".progress__fill").style.width = `${value}%`;
//   // progressBar.querySelector(".progress__text").textContent = `${value}%`;
// }

// const myProgressBar = document.querySelector(".progress");

// /* Example */
// updateProgressBar(myProgressBar, 72);

function About_Skills(){
  console.log('abx')
  document.querySelector(".skill-fill1_1").style.width = `75%`;
  document.getElementById("skill-data1_1").innerHTML = "75%";

  document.querySelector(".skill-fill1_2").style.width = `70%`;
  document.getElementById("skill-data1_2").innerHTML = "70%";

  document.querySelector(".skill-fill1_3").style.width = `60%`;
  document.getElementById("skill-data1_3").innerHTML = "60%";

  document.querySelector(".skill-fill1_4").style.width = `80%`;
  document.getElementById("skill-data1_4").innerHTML = "80%";

  document.querySelector(".skill-fill1_5").style.width = `75%`;
  document.getElementById("skill-data1_5").innerHTML = "75%";

  document.querySelector(".skill-fill1_6").style.width = `80%`;
  document.getElementById("skill-data1_6").innerHTML = "80%";

  document.querySelector(".skill-fill1_7").style.width = `75%`;
  document.getElementById("skill-data1_7").innerHTML = "75%";

  document.querySelector(".skill-fill1_8").style.width = `70%`;
  document.getElementById("skill-data1_8").innerHTML = "70%";

  document.querySelector(".skill-fill1_9").style.width = `65%`;
  document.getElementById("skill-data1_9").innerHTML = "65%";

  document.querySelector(".skill-fill1_10").style.width = `75%`;
  document.getElementById("skill-data1_10").innerHTML = "75%";

  document.querySelector(".skill-fill1_11").style.width = `60%`;
  document.getElementById("skill-data1_11").innerHTML = "60%";

  document.querySelector(".skill-fill1_12").style.width = `55%`;
  document.getElementById("skill-data1_12").innerHTML = "55%";

}


function About_All_Skills(){
  console.log('xde')
  document.querySelector(".skill-fill1").style.width = `75%`;
  document.getElementById("skill-data1").innerHTML = "75%";

  document.querySelector(".skill-fill2").style.width = `90%`;
}



// document.querySelector(".skill-data1").style.value = `90%`;
// const value1=`90%`;

