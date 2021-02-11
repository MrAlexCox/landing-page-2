// step 1: for all elements with the name segment, loop over a for loop and append section + [i] to the nav background

let sections = document.getElementsByClassName('segment');
let i = 0;
let nav = document.getElementById('nav-list')

for (i=1; i < sections.length; i++) {
    let b = 'Section ' + [i];
    let c = 'section-' + [i];
    nav.innerHTML += '<li class=\'section-select ' + c + '\');">' + b + '</li>';

    let selector = document.getElementsByClassName(c);

    selector.addEventListener("click", function buttonScroll() {
      let element = document.getElementById(c);
      element.scrollIntoView({behavior: 'smooth', block: "center"})
    });

    console.log(selector);

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
const boxFour = document.querySelector('div.segment-4');

const selectOne = document.querySelector('li.section-1');
const selectTwo = document.querySelector('li.section-2');
const selectThree = document.querySelector('li.section-3');
const selectFour = document.querySelector('li.section-4');


window.addEventListener("scroll", function () {
    let distOne = boxOne.getBoundingClientRect().top;
    let distTwo = boxTwo.getBoundingClientRect().top;
    let distThree = boxThree.getBoundingClientRect().top;


    if (distOne < 120 || distOne < 10) {

      selectOne.style.backgroundImage = "url('images/header-bg.jpg')";

      boxOne.style.background = "rgba(255,255,255,0.3)";
      boxTwo.style.background = "none";
      boxThree.style.background = "none";

    } else {
      selectOne.style.background = "none";
    }


    console.log(window.innerHeight);
    console.log(distOne);

})


window.addEventListener("scroll", function () {
    let dist = boxTwo.getBoundingClientRect().top;

    if (dist < 180 || dist < 10) {

      selectTwo.style.background = "url('images/header-bg.jpg')";
      selectOne.style.backgroundImage = "none";
      selectThree.style.background = "none";
      selectFour.style.background = "none";


      boxOne.style.background = "none";
      boxTwo.style.background = "rgba(255,255,255,0.3)";
      boxThree.style.background = "none";




    } else {
      selectTwo.style.background = "none";

    }
})

window.addEventListener("scroll", function () {
    let dist = boxThree.getBoundingClientRect().top;

    if (dist < 180 || dist < 10) {

      selectThree.style.background = "url('images/header-bg.jpg')";
      selectOne.style.background = "none";
      selectTwo.style.background = "none";
      selectFour.style.background = "none";


      boxOne.style.background = "none";
      boxTwo.style.background = "none";
      boxThree.style.background = "rgba(255,255,255,0.3)";
      boxFour.style.background = "none";


    } else {
      selectThree.style.background = "none";

    }
})

window.addEventListener("scroll", function () {
    let dist = boxFour.getBoundingClientRect().top;

    if (dist < 180 || dist < 10) {

      selectThree.style.background = "none";
      selectOne.style.background = "none";
      selectTwo.style.background = "none";
      selectFour.style.background = "url('images/header-bg.jpg')";


      boxOne.style.background = "none";
      boxTwo.style.background = "none";
      boxThree.style.background = "none";
      boxFour.style.background = "rgba(255,255,255,0.3)";

    } else {
      selectFour.style.background = "none";

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
