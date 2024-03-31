const swiper = new Swiper(".swiper", {
  direction: "vertical",
});
let elem = document.getElementById("xx");
const slideSpeed = "3s";
window.electronAPI.downSlide(() => {
  var rect = elem.getBoundingClientRect();
  console.log(rect.top);
  let h = rect.top - 960;
  elem.style.transform = `translate3d( 0px,${h}px,0px)`;
  elem.style.transitionDuration = slideSpeed;
});
