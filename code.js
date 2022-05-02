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
async function init() {
    const title = document.getElementById("title");
    await animate(title,"slide");
    console.log("Animation ended");
}
document.addEventListener("DOMContentLoaded", (e) => {
    init(); })