toggleNavbarBackarrow.addEventListener("click", () => {
  navBar.classList.add("hide");
  menuIcon.classList.remove("hidden");
});
menuIcon.addEventListener("click", (e) => {
  navBar.classList.remove("hide");
  menuIcon.classList.add("hidden");
});
