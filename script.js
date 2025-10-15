//smooth scrolling
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

//sidebar function for mobile phones
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

//for active links
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// contact form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwIfYCeTB7ely-h50Rq4cCNtT3hKUfIA-xDghu1nbZRozwMJboAGwj4ssJLqvgSdtFN/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const submitButton = document.getElementById("contactSubmit");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  submitButton.disabled = true;
  submitButton.textContent = "Please Wait...";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    });

    if (response.ok) {
      msg.innerHTML = "Message Sent Successfully!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    } else {
      msg.innerHTML = "Submission Failed. Try Again.";
    }
  } catch (error) {
    console.error("Error!", error.message);
    msg.innerHTML = "An error occurred. Please try again.";
  } finally {
    submitButton.textContent = "Submit";
    submitButton.disabled = false;
  }
});

// Get the button
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if (mybutton.style.display === "none" || mybutton.style.display === "") {
      mybutton.style.display = "flex";
      mybutton.style.opacity = "0";
      mybutton.style.transform = "translateY(20px)";
      setTimeout(() => {
        mybutton.style.opacity = "1";
        mybutton.style.transform = "translateY(0)";
      }, 10);
    }
  } else {
    if (mybutton.style.display !== "none") {
      mybutton.style.opacity = "0";
      mybutton.style.transform = "translateY(20px)";
      setTimeout(() => {
        mybutton.style.display = "none";
      }, 500);
    }
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
