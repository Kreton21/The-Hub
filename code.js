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
    const html = document.getElementById('html')
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    setTimeout(() => {
      div.style.width = radius * 2 + '%';
      div.style.height = radius * 2 + 'vw';
      console.log(div.style.height)

        }, 0);
  }
async function init() {

    const title = document.getElementById("title");
    const menu = document.getElementById("menu-item");
    menu.style.display = 'none'
    await animate(title,"slide");
    menu.style.display = 'flex'
    animate(menu, "slidem")
    showCircle(0, 0, 75);
    console.log("Animation ended");
}
document.addEventListener("DOMContentLoaded", (e) => {
    const menuitems=document.getElementsByClassName('menu-item')
    console.log(menuitems.length)
    x = menuitems.length
    
    // Set margin top to all menu-items at x + 1 /100 vh
    // Play animation 1 by 1 
    init(); })