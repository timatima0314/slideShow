const swiper = new Swiper(".swiper", {
  direction: "vertical",
});
let elem = document.getElementById("xx");
const slideSpeed = "3s";
window.electronAPI.downSlide(() => {
  var rect = elem.getBoundingClientRect();
  console.log(rect.top);
  if (rect.top === 0 || rect.top === -960 || rect.top === -1920) {
    let h = rect.top - 960;
    elem.style.transform = `translate3d( 0px,${h}px,0px)`;
    elem.style.transitionDuration = slideSpeed;
  } else {
    return;
  }
});
window.electronAPI.upSlide(() => {
  var rect = elem.getBoundingClientRect();
  console.log(rect.top);
  if (rect.top === -960 || rect.top === -1920 || rect.top === -2880) {
    let h = rect.top + 960;
    elem.style.transform = `translate3d( 0px,${h}px,0px)`;
    elem.style.transitionDuration = slideSpeed;
  } else {
    return;
  }
});
