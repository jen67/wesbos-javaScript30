const keys = document.querySelectorAll(".keys");

keys.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.add("playing");
  });
});
