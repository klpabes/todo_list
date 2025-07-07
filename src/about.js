import { createElement, createHeader } from "./helpers";

const contacts = [
  {
    name: "Mama Bear",
    desg: "Chef",
    tel: "555-555-5554",
    email: "totallyRealEmail@notfake.com",
  },
  {
    name: "Papa Bear",
    desg: "Manager",
    tel: "555-555-5555",
    email: "perfectlyRealEmail@notFake.com",
  },
  {
    name: "Baby Bear",
    desg: "Waiter",
    tel: "555-555-5556",
    email: "totallyRealEmail@notFake.com",
  },
];

export function loadAbout(contentContainer) {
  const aboutHeaderContainer = createElement(
    "div",
    "class",
    "main-container-header"
  );
  const aboutCotentContainer = createElement(
    "div",
    "class",
    "main-container-content"
  );

  // header container
  createHeader(aboutHeaderContainer, "About");

  // contact container
  contacts.map((contact) => {
    const contactContainer = createElement("div", "class", "content-container");
    const contactName = createElement(
      "h3",
      "class",
      "content-text",
      `${contact.name}`
    );
    const contactDesg = createElement(
      "p",
      "class",
      "content-text",
      `${contact.desg}`
    );
    const contactTel = createElement(
      "p",
      "class",
      "content-text",
      `${contact.tel}`
    );
    const contactEmail = createElement(
      "p",
      "class",
      "content-text",
      `${contact.email}`
    );

    contactContainer.append(contactName, contactDesg, contactTel, contactEmail);
    aboutCotentContainer.append(contactContainer);
  });

  contentContainer.append(aboutHeaderContainer, aboutCotentContainer);
}
