const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
  } else {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
  }
});
