// step 1: for all elements with the name segment, loop over a for loop and append section + [i] to the nav background

let sections = document.getElementsByClassName('segment');
let i = 0;
let nav = document.getElementById('nav-list')

for (i=1; i < sections.length; i++) {
    let b = 'Section ' + [i];
    let c = 'section-' + [i];
    nav.innerHTML += '<div class=\'section-select\' onclick="buttonScroll(\'' + c + '\');">' + b + '</div>'
}



function jump(h){
    var top = document.getElementById(h).offsetTop;
    window.scrollTo(0, top);
}

function buttonScroll(h) {
  let element = document.getElementById(h);
  element.scrollIntoView({behaviour: 'smooth', inline: "nearest"})
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
