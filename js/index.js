let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  //console.log("Клик по кнопке меню")
  document.querySelector(".header__wrapper--bottom").classList.toggle("mobile");
});