const buttons = document.querySelectorAll("[data-carousel-button]")

//By Default
let newIndex = 0;
if (newIndex === 0) {
    document.getElementById("carousel-button prev").disabled = true; 
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    newIndex = [...slides.children].indexOf(activeSlide) + offset
    console.log(newIndex);
    if (newIndex <= 0) {
        //newIndex = slides.children.length - 1
        document.getElementById("carousel-button prev").disabled = true; 
    }else if (newIndex >= slides.children.length - 1){
        //newIndex = 0
        document.getElementById("carousel-button next").disabled = true;
    }else{
        document.getElementById("carousel-button prev").disabled = false; 
        document.getElementById("carousel-button next").disabled = false; 
    }
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})


document.addEventListener("keyup", function(event) {
    if (event.keyCode === 37) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("carousel-button prev").click();
    }

    if (event.keyCode === 39) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("carousel-button next").click();
    }

});