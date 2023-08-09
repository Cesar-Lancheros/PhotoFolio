const slider6 = document.getElementById("slider6");
slider6.addEventListener("input", function () {
  const frontImage = this.parentElement.querySelector(".front-img");
  // Change the front image's clip-path based on range input's value
  frontImage.style.clipPath = `polygon(0 0, ${this.value}% 0, ${this.value}% 100%, 0% 100%)`;
});
