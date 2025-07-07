import { createElement, createHeader } from "./helpers";

export function loadFooter(contentContainer) {
  const footerContainer = createElement("div", "class", "footer-container");
  const footerText = createElement(
    "h4",
    "class",
    "footer-text",
    "Made by klpabes :)"
  );

  footerContainer.append(footerText);
  contentContainer.append(footerContainer);
}
