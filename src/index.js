import "./styles.css";

import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
import { loadFooter } from "./footer.js";

const contentContainer = document.querySelector("#content");
const body = document.querySelector("body");

const navButtons = document.querySelector("nav").querySelectorAll("button");

navButtons[0].classList.add("active");
loadHome(contentContainer);
loadFooter(body);

navButtons.forEach((item) => {
  item.classList.add("nav-button");
  item.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    item.classList.add("active");
    contentContainer.innerHTML = "";
    loadContent(item.textContent);
  });
});

const pageLoaders = {
  Home: loadHome,
  Menu: loadMenu,
  About: loadAbout,
};

function loadContent(pageTitle) {
  const loader = pageLoaders[pageTitle];
  loader(contentContainer);
}
