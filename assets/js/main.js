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

// ========================================
// GOOGLE FORM SUBMISSION
// ========================================

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    formStatus.textContent = "Submitting...";
    formStatus.style.display = "block";

    const formData = new FormData();

    // GOOGLE FORM FIELD IDs
    formData.append(
      "entry.1066223924",
      contactForm.elements["name"].value
    );

    formData.append(
      "entry.1218282873",
      contactForm.elements["email"].value
    );

    formData.append(
      "entry.1886669265",
      contactForm.elements["phone"].value
    );

    formData.append(
      "entry.9212772",
      contactForm.elements["service"].value
    );

    formData.append(
      "entry.2114016205",
      contactForm.elements["message"].value
    );

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScRtIWLilBVdP_RjtKQ-oLnoz3N4fBtMPlu22cy7_IyRk-7wA/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors"
        }
      );

      formStatus.textContent =
        "Thank you for contacting N Lakshmana Rao & Co. Your enquiry has been submitted successfully. We will get back to you shortly.";

      contactForm.reset();

    } catch (error) {
      console.error("Google Form submission error:", error);

      formStatus.textContent =
        "Sorry, something went wrong. Please try again.";
    }
  });
}
