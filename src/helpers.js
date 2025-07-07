export function createElement(
  element,
  selector = "class",
  selectorName,
  textContent = ""
) {
  const createdElement = document.createElement(element);
  if (selector === "id") {
    createdElement.id = selectorName;
  } else if (selector === "class") {
    createdElement.className = selectorName;
  } else {
    console.log("Selector must be class or id");
    return;
  }
  createdElement.textContent = textContent;
  return createdElement;
}

export function createHeader(container, text) {
  const header = createElement("h1", "class", "main-header-text");
  header.textContent = text;
  container.append(header);
}
