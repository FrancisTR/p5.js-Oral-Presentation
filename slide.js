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

/*
CUSrs to 0, nothing,TOM FUNCTION TO JUMP TO A SPECIFIC SLIDE (first slide at 0)
HELPFUL WHEN YOU DO LIVE SERVER AND AUTO UPDATE DOESNT RESET YOU TO THE FIRST SLIDE
*/
// window.onload = jump(); //set parameter to 0, empty, or just comment this line
function jump(num){
    if(num == null){
        num = 0;
    }
    for(let i=0; i<num; i++){
        document.getElementById("carousel-button next").click();
    }
}

document.addEventListener("keyup", function(event) {
    if (event.code == "ArrowLeft") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("carousel-button prev").click();
    }

    if (event.code == "ArrowRight") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("carousel-button next").click();
    }

});