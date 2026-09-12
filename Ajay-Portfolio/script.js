/* Mobile menu */
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  const icon = menuIcon.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});
document.querySelectorAll(".navbar a").forEach((link) =>
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    const icon = menuIcon.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }),
);

/* EmailJS configuration: replace these 3 placeholders with your EmailJS values. */
const EMAILJS_PUBLIC_KEY = "LQtKhz_jVYuNZqRqV";
const EMAILJS_SERVICE_ID = "service_zo0uy9e";
const EMAILJS_TEMPLATE_ID = "template_wsa7sop";

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (
    EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY" ||
    EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
    EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID"
  ) {
    formMessage.textContent = "Please configure EmailJS first in script.js.";
    formMessage.style.color = "#ffcc00";
    return;
  }

  const submitButton = contactForm.querySelector("button");
  submitButton.disabled = true;
  submitButton.innerHTML =
    'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
  formMessage.textContent = "";

  try {
    await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      contactForm,
    );
    formMessage.textContent = "Message sent successfully! Thank you.";
    formMessage.style.color = "#00e5ff";
    contactForm.reset();
  } catch (error) {
    console.error("EmailJS Error:", error);
    formMessage.textContent = "Message could not be sent. Please try again.";
    formMessage.style.color = "#ff5c7a";
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML =
      'Send Message <i class="fa-solid fa-paper-plane"></i>';
  }
});
