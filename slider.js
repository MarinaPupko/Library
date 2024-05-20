const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide_image");
const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const paginationCircles = [];
const sliderWidth = slider.clientWidth;

function createPaginationCircle(){
    const div = document.createElement("div");
    div.className = "pagination_circle";
    bottom.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    const numPaginationCircles = Math.min(3, slides.length); // Определение количества кругов навигации (максимум 3 или количество элементов в slides)
    for (let i = 0; i < numPaginationCircles; i++) {
      createPaginationCircle();
    }
  
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
      circle.addEventListener("click", () => changeSlide(index));
    });
  }

function addActiveClass(){
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass(){
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide(){
    slider.style.transform = `translateX(-${currentSlideIndex * (sliderWidth / 2.95)}px)`;
}

function changeSlide(slideIndex){
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide(){
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1){
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide(){
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0){
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

addPagination();