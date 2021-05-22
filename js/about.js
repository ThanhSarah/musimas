var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
//intergrated
var pannelTitle = document.getElementsByClassName("pannel-title");
for (i = 0; i < pannelTitle.length; i++) {
  pannelTitle[i].addEventListener("click", function() {
    var pannelContent = this.nextElementSibling;
    var pannelIcon = this.childNodes[1];
    pannelIcon.classList.toggle("pannel-active"); 
    if(pannelContent.style.display === "none") {
      pannelContent.style.display="block";
    } else {
      pannelContent.style.display ="none";
    }
  })
}


// window.addEventListener("load", function () {
//   const dropdownItems = document.querySelectorAll(
//     "#lightdropdown .dropdown-item2"
//   );
//   const dropdownSelect = document.querySelector(
//     "#lightdropdown .dropdown-select"
//   );
//   const dropdownSelectText = document.querySelector(
//     "#lightdropdown .dropdown-selected"
//   );
//   const dropdownList = document.querySelector(
//     "#lightdropdown .dropdown-list"
//   );
//   const dropdownCaret = document.querySelector(
//     "#lightdropdown .dropdown-caret"
//   );

//   dropdownSelect.addEventListener("click", function () {
//     dropdownList.classList.toggle("show");
//     dropdownCaret.classList.toggle("fa-angle-up");
//   });

//   function handleSelectDropdown(e) {
//     const { value } = e.target.dataset;
//     dropdownSelectText.textContent = value;
//     dropdownList.classList.remove("show");
//     dropdownCaret.classList.remove("fa-angle-up");
//   }

//   dropdownItems.forEach((el) =>
//     el.addEventListener("click", handleSelectDropdown)
//   );
// });
//select products
const dropdownSelect = document.querySelectorAll("#lightdropdown .dropdown-select");
dropdownSelect.forEach((index) => index.addEventListener("click", function () {
  const dropdownSelectText = this.childNodes[1];
  const dropdownList = this.nextElementSibling;
  const dropdownCaret = dropdownSelectText.nextElementSibling;
  const dropdownItems = dropdownList.querySelectorAll(".dropdown-item2");

  dropdownList.classList.toggle("show");
  dropdownCaret.classList.toggle("fa-angle-up");

  dropdownItems.forEach((el) =>
    el.addEventListener("click", function(e) {
      e.preventDefault();
      var value = this.getAttribute("data-value");
      dropdownSelectText.innerHTML = value;
      dropdownList.classList.remove("show");
      dropdownCaret.classList.remove("fa-angle-up");
    })
  );
}));
// for (i = 0; i < dropdownSelect.length; i++) {
//   var dropdownSelectText = dropdownSelect[i].childNodes[1];
//   var dropdownList = dropdownSelect[i].nextElementSibling;
//   var dropdownCaret = dropdownSelectText.nextElementSibling;
//   var dropdownItems = dropdownList.childNodes;


//   dropdownSelect[i].addEventListener("click", function () {
//     if(dropdownList.style.display === "none") {
//       dropdownList.style.display="block";
//     } else {
//       dropdownList.style.display ="none";
//     }
//     dropdownCaret.classList.toggle("pannel-active");
//   });
  

//   function handleSelectDropdown(e) {
//     var { value } = e.target.dataset;
//     dropdownSelectText.textContent = value;
//     dropdownList.classList.remove("show");
//     dropdownCaret.classList.remove("pannel-active");
//   }

//   dropdownItems.forEach((el) =>
//     el.addEventListener("click", handleSelectDropdown)
//   );
// }


//pagination
// $(document).ready(function() {
//   $('#table-id').paging({limit:11});
// });

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



