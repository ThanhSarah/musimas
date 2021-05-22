// video tự đông
// var slideIndex1 = 1;
// showSlidesvideo(slideIndex1);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }


// function currentSlide1(n) {
//   showSlidesvideo(slideIndex1 = n);
// }

// function showSlidesvideo(n) {
//   var i;
//   var slides1 = document.getElementsByClassName("slide-item");
//   var dots1 = document.getElementsByClassName("dot1");
//   if (n > slides1.length) {slideIndex1 = 1}    
//   if (n < 1) {slideIndex1 = slides1.length}
//   for (i = 0; i < slides1.length; i++) {
//       slides1[i].style.display = "none";  
//   }
//   for (i = 0; i < dots1.length; i++) {
//       dots1[i].className = dots1[i].className.replace(" active", "");
//   }
//   slides1[slideIndex1-1].style.display = "block";  
//   dots1[slideIndex1-1].className += " active";
// }

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var slideIndex1 = 0;
showSlidesvideo();

function showSlidesvideo() {
  var i;
  var slides1 = document.getElementsByClassName("slide-item");
  var dots1 = document.getElementsByClassName("dot1");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots1[slideIndex1-1].className += " active";
  setTimeout(showSlidesvideo, 5500); // Change image every 2 seconds
}
//section-four showslide
var slideIndex2 = 0;
sectionSlides();
function sectionSlides() {
    var i;
    var slides2 = document.getElementsByClassName("section-slide");
    var dots2 = document.getElementsByClassName("dot2");
    for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
    for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "block";  
    dots2[slideIndex2-1].className += " active";
    setTimeout(sectionSlides, 2000); // Change image every 2 seconds
  }





// trinh chieu tu dong 
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("showslide1");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// var slideIndex = 0;
// showSlide();

// function showSlide() {
//   var i;
//   var slides = document.getElementsByClassName("slide");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "inline-block";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlide, 2000); // Change image every 2 seconds
// }
//counter
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})
//progress
// var currentIndex = 0,
//     newIndex = 0,
//     slider = document.getElementsByClassName("slider")[0],
//     slides = document.getElementsByClassName("slider_slide"),
//     sliderNavButtons = document.getElementsByClassName("slider_nav"),
//     slidesLength = slides.length,
//     pagination = document.getElementsByClassName("slider_pagination")[0],
//     automate = true,
//     progressBar = document.getElementsByClassName("slider_progress-bar")[0]

// var Automation = {
//     id: null,
//     timeInterval: 5000,
//     start: function () {
//         if (progressBar) {
//             var bar = document.createElement("div");
//             bar.className = "slider_progress-bar_bar";
//             progressBar.appendChild(bar);
//             ProgressBar.target = bar;
//             ProgressBar.move();
//         }
//         else {
//             this.id = setInterval(function () {
//                 newIndex++;
//                 navigateSlider();
//             }, this.timeInterval);
//         }
//     },
//     reset: function () {
//         if (progressBar) {
//             ProgressBar.reset();
//         }
//         else {
//             clearInterval(this.id);
//             this.start();
//         }
//     }
// }

// var ProgressBar = {
//     id: null,
//     target: null,
//     widthIncrement: 0.5,
//     width: 0,
//     move: function () {
//         var self = ProgressBar;
//         if (self.width >= 100) {
//             newIndex++;
//             navigateSlider();
//         }
//         self.width += self.widthIncrement;
//         self.target.style.width = self.width + "%";
//         self.id = requestAnimationFrame(self.move);
//     },
//     reset: function () {
//         this.width = 0;
//     }
// }

// if (!pagination) {
//     pagination = document.createElement("div");
//     pagination.className = "slider_pagination";
//     slider.appendChild(pagination);
// }

// pagination.onclick = function (e) {
//     var target = e.target;
//     if (target.classList.contains("slider_pagination_btn")) {
//         newIndex = Number(target.getAttribute("data-index"));
//         navigateSlider();
//     }
// }

// var paginationHTML = [];
// for (var i = 0; i < slidesLength; i++) {
//     paginationHTML.push('<button class="slider_pagination_btn" data-index="' + i + '"></button>');
// }
// pagination.innerHTML = paginationHTML.join("")

// function navigateSlider() {
//     if (automate) {
//         Automation.reset();
//     }
//     if (newIndex === -1) newIndex = slidesLength - 1;
//     else if (newIndex === slidesLength) newIndex = 0
//     pagination.childNodes[currentIndex].classList.remove("slider_pagination_btn--sel");
//     pagination.childNodes[newIndex].classList.add("slider_pagination_btn--sel");
//     slides[currentIndex].style.display = "none";
//     slides[newIndex].style.display = "block";
//     currentIndex = newIndex;
// }

// sliderNavButtons[0].onclick = function () {
//     newIndex--;
//     navigateSlider();
// }
// sliderNavButtons[1].onclick = function() {
//     newIndex++;
//     navigateSlider();
// }

// if (automate) {
//     Automation.start();
// }

// navigateSlider();
