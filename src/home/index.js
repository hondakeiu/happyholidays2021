import "../shared/modules/common";
import "./styles/home.scss";
import Swiper, { Navigation } from "swiper";

const CharactersSwiper = new Swiper(".swiper", {
  modules: [Navigation],
  loop: true,
  speed: 600,
  grabCursor: true,
  touchRatio: 1.5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
