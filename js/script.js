function toggleInfo(id) {

    const info = document.getElementById(id);

    if (info.style.display === "block") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
    }

}
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
