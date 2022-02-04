//Toggle mobile menu
const menuToggleOpen = document.querySelector(".menu-toggle-open");
const menuToggleClose = document.querySelector(".menu-toggle-close");
const navMobileElement = document.querySelector(".nav-mobile");

menuToggleOpen.addEventListener("click", () => navMobileElement.classList.add("active"));
menuToggleClose.addEventListener("click", () => navMobileElement.classList.remove("active"));

// accordion
var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
