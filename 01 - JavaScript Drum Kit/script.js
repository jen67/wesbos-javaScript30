const keys = document.querySelectorAll(".keys");

keys.forEach(function (item) {
  item.addEventListener("click", function () {
    document.body.style.backgroundColor = "white";
  });
});
