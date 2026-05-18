const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  const target = link.getAttribute("href");
  if (target === currentPage) {
    link.classList.add("active");
  }
});

document.querySelectorAll("#year").forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thank you. Your enquiry is ready to be connected to email or backend handling.";
    contactForm.reset();
  });
}
