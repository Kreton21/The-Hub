// common function to apply one transition rule
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}
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
        if (animation == 'slide'){
          console.log('Clack ;;;')
          // var audio = new Audio('assets/switch-sound.mp3');
          // audio.play();
        }
        resolve(elem);
      }
      elem.addEventListener("animationend", handleAnimationEnd, { once: true });
      elem.classList.add(animation);
    });
  }
function showCircle(cx, cy, radius) {
    const div = document.getElementById('circle');
    const html = document.getElementById('html')
    if ((html.clientWidth/html.clientHeight)<1){
      div.style.width = 0;
      div.style.height = 0;
      div.style.left = cx + 'px';
      div.style.top = cy + 'px';
      div.className = 'circle';
      setTimeout(() => {
        div.style.width = 200 + 'vw';
        div.style.height = 100 + 'vh';
        console.log(div.style.height)
  
          }, 0);
    }
    else{

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
  }
async function eanimation(menuitems){
  for (var i = 0;i<x;i++){
    var box = menuitems[i];
    box.style.display = 'flex'
    animate(box, "slidem")
    await sleep (300)
  }
}

async function init() {
    const html = document.getElementById('html')
    const menuitems=document.getElementsByClassName('menu-item');
    console.log(menuitems.length);
    x = menuitems.length;

    if ((html.clientWidth/html.clientHeight)<1){
      console.log("RRRR")
      for (var i = 0;i<x;i++){
        var box = menuitems[i];
        box.style.display = 'none'
        box.style.marginTop = (50/ (x+1))-10 + "vh"
      }
    }
    else{
    for (var i = 0;i<x;i++){
      var box = menuitems[i];
      box.style.display = 'none'
      box.style.marginTop = (100/ (x+1))-10 + "vh"
    }
    }

    const title = document.getElementById("title");
    await animate(title,"slide");
    eanimation(menuitems)
    showCircle(0, 0, 75);
    console.log("Animation ended");
}
document.addEventListener("DOMContentLoaded", (e) => {

    // Set margin top to all menu-items at x + 1 /100 vh
    // Play animation 1 by 1 
    init(); })