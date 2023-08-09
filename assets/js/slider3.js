const slider3 = document.getElementById("slider3");
slider3.addEventListener("input", function () {
  const frontImage = this.parentElement.querySelector(".front-img");
  // Change the front image's clip-path based on range input's value
  frontImage.style.clipPath = `polygon(0 0, ${this.value}% 0, ${this.value}% 100%, 0% 100%)`;
});
