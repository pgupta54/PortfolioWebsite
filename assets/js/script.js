'use strict';

require('dotenv').config();

const serviceID = process.env.serviceID;
const templateID = process.env.templateID;
// const serviceID = "service_15xnpqa";
// const templateID = "template_80i64fa";
// Use the secret in your code
console.log(serviceID, templateID);


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


function About_Skills()
{
  document.querySelector(".skill-fill1").style.width = `0%`; // reset width to 0%
  document.getElementById("skill-data1").innerHTML = "0%";
  document.querySelector(".skill-fill2").style.width = `0%`; // reset width to 0%
  document.getElementById("skill-data2").innerHTML = "0%";
  document.querySelector(".skill-fill3").style.width = `0%`; // reset width to 0%
  document.getElementById("skill-data3").innerHTML = "0%";
  document.querySelector(".skill-fill4").style.width = `0%`; // reset width to 0%
  document.getElementById("skill-data4").innerHTML = "0%";
  document.querySelector(".skill-fill5").style.width = `0%`; // reset width to 0%
  document.getElementById("skill-data5").innerHTML = "0%";
  document.querySelector(".skill-fill6").style.width = `0%`; // reset width to 0%
  document.getElementById("skill-data6").innerHTML = "0%";
  document.querySelector(".skill-fill7").style.width = `0%`; // reset width to 0%
  document.getElementById("skill-data7").innerHTML = "0%";
  document.querySelector(".skill-fill8").style.width = `0%`; // reset width to 0%
  document.getElementById("skill-data8").innerHTML = "0%";
  document.querySelector(".skill-fill9").style.width = `0%`; // reset width to 0%
  document.getElementById("skill-data9").innerHTML = "0%";
  document.querySelector(".skill-fill10").style.width = `0%`; // reset width to 0%
  document.getElementById("skill-data10").innerHTML = "0%";
  document.querySelector(".skill-fill11").style.width = `0%`; // reset width to 0%
  document.getElementById("skill-data11").innerHTML = "0%";
  document.querySelector(".skill-fill12").style.width = `0%`; // reset width to 0%
  document.getElementById("skill-data12").innerHTML = "0%";

  setTimeout(function() {
  document.querySelector(".skill-fill1").style.width = `80%`; // set new width
  document.getElementById("skill-data1").innerHTML = "80%";
  document.querySelector(".skill-fill2").style.width = `75%`; // set new width
  document.getElementById("skill-data2").innerHTML = "75%";
  document.querySelector(".skill-fill3").style.width = `65%`; // set new width
  document.getElementById("skill-data3").innerHTML = "65%";
  document.querySelector(".skill-fill4").style.width = `80%`; // set new width
  document.getElementById("skill-data4").innerHTML = "80%";
  document.querySelector(".skill-fill5").style.width = `65%`; // set new width
  document.getElementById("skill-data5").innerHTML = "65%";
  document.querySelector(".skill-fill6").style.width = `80%`; // set new width
  document.getElementById("skill-data6").innerHTML = "80%";
  document.querySelector(".skill-fill7").style.width = `75%`; // set new width
  document.getElementById("skill-data7").innerHTML = "75%";
  document.querySelector(".skill-fill8").style.width = `70%`; // set new width
  document.getElementById("skill-data8").innerHTML = "70%";
  document.querySelector(".skill-fill9").style.width = `70%`; // set new width
  document.getElementById("skill-data9").innerHTML = "70%";
  document.querySelector(".skill-fill10").style.width = `75%`; // set new width
  document.getElementById("skill-data10").innerHTML = "75%";
  document.querySelector(".skill-fill11").style.width = `70%`; // set new width
  document.getElementById("skill-data11").innerHTML = "70%";
  document.querySelector(".skill-fill12").style.width = `60%`; // set new width
  document.getElementById("skill-data12").innerHTML = "60%";
  }, 10);
}

About_Skills();



/* 
  Document, modal popup: START
*/

// Get the link and modal elements
const openModalLinks = document.querySelectorAll(".open-modal");
const modal = document.getElementById("pdf-modal");
const modalContent = document.querySelector(".modal-content");

// Loop through each open modal link and add a click event listener
openModalLinks.forEach((link) => {
  link.addEventListener("click", openModal);
});

// Function to open the modal and display the PDF file
function openModal(event) {
  // Prevent default link behavior
  event.preventDefault();

  // Get the PDF file path from the data-pdf attribute of the clicked link
  const pdfPath = event.currentTarget.dataset.pdf;

  // Set the source of the iframe to the PDF file path
  modalContent.innerHTML = `<iframe id="pdf-iframe" src="${pdfPath}" frameborder="0"></iframe>`;

  // Display the modal with animation
  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

// Add a click event listener to the modal to close it
modal.addEventListener("click", closeModal);

// Function to close the modal
function closeModal() {
  // Hide the modal with animation
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
    modalContent.innerHTML = "";
  }, 300);
}

/* 
  Document, modal popup: END
*/


About_Skills();


/*
  Contact, Send Email: START
*/


function sendMail(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  console.log(name, email, message);


  if (name !== "" && email !== "" && message !== "") {
    document.querySelector('.form-btn').removeAttribute('disabled');
    emailjs.send(serviceID, templateID, {
        name: name,
        email: email,
        message: message,
      })
      .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!");
        document.querySelector('.form-btn').setAttribute('disabled', '');
      })
      .catch(err => console.log(err));
  }
}

/* 
  Contact, Send Email: END
*/ 


/*
  Project, Modal popup: START
*/


// Get the modal
var modal_project = document.getElementById("music-recommendation-modal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the li, open the modal
document.getElementById("music-recommendation").addEventListener("click", function() {
  modal_project.style.display = "block";
  setTimeout(function() {
    modal_project.getElementsByClassName("modal-content-project")[0].classList.add("show");
  }, 0);
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal_project.getElementsByClassName("modal-content-project")[0].classList.remove("show");
  setTimeout(function() {
    modal_project.style.display = "none";
  }, 100);
}

// Get the modal
var modal2_project = document.getElementById("tweet-sentiment-analysis-modal");
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];
// When the user clicks on the li, open the modal
document.getElementById("tweet-sentiment-analysis").addEventListener("click", function() {
  modal2_project.style.display = "block";
  setTimeout(function() {
    modal2_project.getElementsByClassName("modal-content-project")[0].classList.add("show");
  }, 0);
});
// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2_project.getElementsByClassName("modal-content-project")[0].classList.remove("show");
  setTimeout(function() {
    modal2_project.style.display = "none";
  }, 100);
}


// Get the modal
var modal3_project = document.getElementById("smart-restaurant-ordering-modal");
// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[2];
// When the user clicks on the li, open the modal
document.getElementById("smart-restaurant-ordering").addEventListener("click", function() {
  modal3_project.style.display = "block";
  setTimeout(function() {
    modal3_project.getElementsByClassName("modal-content-project")[0].classList.add("show");
  }, 0);
});
// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3_project.getElementsByClassName("modal-content-project")[0].classList.remove("show");
  setTimeout(function() {
    modal3_project.style.display = "none";
  }, 100);
}



// For Bullets
document.addEventListener("DOMContentLoaded", function() {
  var paragraphs = document.querySelectorAll(".modal-content-project p");
  for (var i = 0; i < paragraphs.length; i++) {
    var bullet = document.createElement("span");
    bullet.innerHTML = "&bull;";
    bullet.classList.add("bullet");
    paragraphs[i].insertBefore(bullet, paragraphs[i].firstChild);
  }
});


/*
  Project, Modal popup: END
*/