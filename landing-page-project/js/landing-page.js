// step 1: for all elements with the name segment, loop over a for loop and append section + [i] to the nav background

let sections = document.getElementsByClassName('segment');
let i = 0;
let nav = document.getElementById('nav-list')

for (i=1; i < sections.length; i++) {
    let b = 'Section ' + [i];
    let c = 'section-' + [i];
    nav.innerHTML += '<div class=\'section-select ' + c + '\' onclick="buttonScroll(\'' + c + '\');">' + b + '</div>'
}


// function scrollToTargetAdjusted(h){
//     var element = document.getElementById(h);
//     var headerOffset = 150;
//     var elementPosition = element.getBoundingClientRect().top;
//     var offsetPosition = elementPosition - headerOffset;
//
//     window.scrollTo({
//          top: offsetPosition,
//          behavior: "smooth"
//     });
// }



function buttonScroll(h) {
  let element = document.getElementById(h);
  element.scrollIntoView({behavior: 'smooth', block: "center"})
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// When the user scrolls to div

const segCont = document.querySelector('div.segment-container')
const boxOne = document.querySelector('div.segment-1');
const boxTwo = document.querySelector('div.segment-2');
const boxThree = document.querySelector('div.segment-3');
const selectOne = document.querySelector('div.section-1');
const selectTwo = document.querySelector('div.section-2');
const selectThree = document.querySelector('div.section-3');


window.addEventListener("scroll", function () {
    let distOne = boxOne.getBoundingClientRect().top;
    let distTwo = boxTwo.getBoundingClientRect().top;
    let distThree = boxThree.getBoundingClientRect().top;


    if (distOne < 150 || distOne < 10) {
      selectOne.style.background = "blue";
    } else {
      selectOne.style.background = "none";
    }


    console.log(window.innerHeight);
    console.log(distOne);

})


window.addEventListener("scroll", function () {
    let dist = boxTwo.getBoundingClientRect().top;

    if (dist < 150 || dist < 10) {

      selectTwo.style.background = "blue";

    } else {
      selectTwo.style.background = "none";

    }
})

window.addEventListener("scroll", function () {
    let dist = boxThree.getBoundingClientRect().top;

    if (dist < 150 || dist < 10) {

      selectThree.style.background = "blue";

    } else {
      selectThree.style.background = "none";

    }
})






// const boxTwo = document.querySelector('div.segment-2');
//
// window.addEventListener("scroll", function () {
//     console.log(window.innerHeight);
//     console.log('box-2 ' + boxTwo.getBoundingClientRect().top)
// })

// const box = document.querySelector('div.segment-1');
//
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
//     box.style.background = "blue";
//   } else {
//     mybutton.style.background = "none";
//   }
// }
