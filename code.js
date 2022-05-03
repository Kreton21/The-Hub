// common function to apply one transition rule
function transition(elem, styleProps) {
    return new Promise((resolve, reject) => {
      function handleTransitionEnd() {
        console.log("Transition Ended...");
        resolve(elem);
      }
      elem.addEventListener("transitionend", handleTransitionEnd, { once: true });
      Object.entries(styleProps).forEach(([prop, value]) => {
        elem.style.setProperty(prop, value);
      });
    });
  }
  
  // common function to apply animations to an element.
  function animate(elem, animation) {
    return new Promise((resolve, reject) => {
      function handleAnimationEnd() {
        console.log("animation ended...");
        resolve(elem);
      }
      elem.addEventListener("animationend", handleAnimationEnd, { once: true });
      elem.classList.add(animation);
    });
  }
function showCircle(cx, cy, radius) {
    const div = document.getElementById('circle');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';

    setTimeout(() => {
      div.style.width = radius * 2 + 'em';
      div.style.height = radius * 2 + 'em';
    }, 0);
  }
async function init() {
    const title = document.getElementById("title");
    await animate(title,"slide");
    showCircle(10, 10, 100);
    console.log("Animation ended");
}
document.addEventListener("DOMContentLoaded", (e) => {
    init(); })