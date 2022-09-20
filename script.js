const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

/* This is called incrementation postfix and prefix... the x and a always increase by one but the y stays 3 because it is prefix but the b gives 4 because it is postfix
let x = 3;
let y = x++;
console.log(x);
console.log(y);

let a = 3;
let b = ++a;
console.log(a);
console.log(b);*/

/* Concepts:
1- assign a plus 1 step forward and backwards and control the extrimities so the circles turning blue know when to stop
2- loop through circles to add and remove classes
3-style the blue line with each active circle
4- control the limits in relation to the buttons becoming active or disabled*/

currentActive = 1;

next.addEventListener("click", () => {
  currentActive++; /* console.log(currentActive); each time time i click  the button, it jumps one number*/

  if (currentActive > circles.length) {
    currentActive = circles.length;
  } /*Here I am saying that if the current active is greater than the number of circles, then no matter how much
  you click, keep it at that length so it stops at circle 4..in other words when current active hits 4 keep it at 4*/
  /*console.log(currentActive);*/
  update();
});

prev.addEventListener("click", () => {
  currentActive--; /*Here we are telling that upon click on the prev button go down one number*/
  if (currentActive < 1) {
    currentActive = 1;
  } /* if the number reaches less than 1, put it at 1 to keep it blue at 1*/
  update();
});

/* we are calling the same function which us update() for both buttons because in both buttons we must loop through
the circles in addition to abling and disabling in the end*/

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      /* i am trying to say that if the number of the circle is less than the circle which wants to be active, then add the active class to the one that wants to be active*/
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  /*console.log(actives.length, circles.length); this shows that the number of actives increases as i click but the circles length stays 4*/
  /*now here we want to control the width of the blue line which is a % so we need to add a percentage with each click*/
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 +
    "%"; /* we put -1 on each so it gives us a lower percentage cause if we didnt then the blue line will go to 50% at the first click and 75% on the second which is too much*/
  /*we added the percentage sign to say that we are multiplying by 100 percent being 0.01, without it it will mutltiply only by 100.. we need the percentage
    because the width is a percentange in css... it is about 33% and then 66%*/

  /*now the prev button*/
  if (currentActive === 1) {
    prev.disabled = true;
    next.disabled = false;
  } else {
    if (currentActive === 4) {
      prev.disabled = false;
      next.disabled = true;
    }
  }
}
