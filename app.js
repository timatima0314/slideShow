const swiper = new Swiper(".swiper", {
  direction: "vertical",
  speed: 1500,
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination",
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let elem = document.getElementById("xx");
const sw = () => {
  elem.style.transform = "translate3d( 0px, -960px,0px)";
};
// elem.addEventListener("click", sw);butotnClickbutotnClickelectronAPI
let t = 0;
window.electronAPI.butotnClick(() => {
  var rect = elem.getBoundingClientRect();
  console.log(rect.top);
  let h = rect.top - 960;
  elem.style.transform = `translate3d( 0px,${h}px,0px)`;
  elem.style.transitionDuration = "5s";
});

// let button = document.getElementById("xxx");
// button.addEventListener("click", butotnClick);
