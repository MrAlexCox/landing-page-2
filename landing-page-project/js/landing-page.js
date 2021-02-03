let i = 0;
let txt = 'This is the title';
let speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.getElementById("title").onload = function() {typeWriter()};



// function jump(h){
//     var top = document.getElementById(h).offsetTop;
//     window.scrollTo(0, top);
// }

function buttonScroll(h) {
  let element = document.getElementById('h');
  element.scrollIntoView({behaviour: 'smooth', block: 'offsetTop', inline: "nearest"})
}
