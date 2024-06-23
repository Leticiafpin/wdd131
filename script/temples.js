// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

// Get the last modified date (assuming you have a function called getLastModifiedDate)
const lastModifiedDate = getLastModifiedDate();
document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;

const hamburgerButton = document.getElementById("hamburger-button");
const navMenu = document.querySelector("nav ul");

hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
});

const closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});