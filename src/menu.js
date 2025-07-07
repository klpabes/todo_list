import { createElement, createHeader } from "./helpers";

// data
const menuTypes = ["Beverages", "Sides", "Main Dishes"];
const menuItems = [
  {
    name: "Honey Tea",
    desc: "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
    price: "$2",
    type: "Beverages",
  },
  {
    name: "Beary Tea",
    desc: "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.",
    price: "$3",
    type: "Beverages",
  },

  {
    name: "Toast and Jam",
    desc: "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
    price: "$1",
    type: "Sides",
  },
  {
    name: "Fresh Fruit",
    desc: "A small bowl of fresh fruit, whatever we find at the market for the day.",
    price: "$3",
    type: "Sides",
  },
  {
    name: "Pancakes",
    desc: "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
    price: "$4",
    type: "Main Dishes",
  },
  {
    name: "French Toast",
    desc: "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
    price: "$5",
    type: "Main Dishes",
  },
  {
    name: "Beary Veggie Sandwich",
    desc: "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.",
    price: "$8",
    type: "Main Dishes",
  },
  {
    name: "BLT",
    desc: "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.",
    price: "$6",
    type: "Main Dishes",
  },
  {
    name: "Bagel and Lox",
    desc: "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.",
    price: "$8",
    type: "Main Dishes",
  },
  {
    name: "Honeycomb",
    desc: "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.",
    price: "$6",
    type: "Main Dishes",
  },
  {
    name: "Beary Bowl",
    desc: "Get a big ole bowl of our berries! Side of honey is $1 extra.",
    price: "$7",
    type: "Main Dishes",
  },
  {
    name: "The Beary Best Porridge",
    desc: "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.",
    price: "$5",
    type: "Main Dishes",
  },
];

export function loadMenu(contentContainer) {
  // main containers
  const menuHeaderContainer = createElement(
    "div",
    "class",
    "main-container-header"
  );
  const menuCotentContainer = createElement(
    "div",
    "class",
    "main-container-header"
  );

  // header container
  createHeader(menuHeaderContainer, "Menu");

  // menu type containers
  menuTypes.map((menuType) => {
    const menuTypeContainer = document.createElement("div");

    createHeader(menuTypeContainer, menuType);

    menuItems.map((menuItem) => {
      if (menuItem.type === menuType) {
        const menuItemContainer = createElement(
          "div",
          "class",
          "content-container"
        );
        const menuItemName = createElement(
          "h3",
          "class",
          "content-text",
          `${menuItem.name}`
        );
        const menuItemDesc = createElement(
          "p",
          "class",
          "content-text",
          `${menuItem.desc}`
        );
        const menuItemPrice = createElement(
          "h3",
          "class",
          "content-text",
          `${menuItem.price}`
        );

        menuItemContainer.append(menuItemName, menuItemDesc, menuItemPrice);
        menuTypeContainer.append(menuItemContainer);
      }
    });
    menuCotentContainer.append(menuTypeContainer);
  });

  contentContainer.append(menuHeaderContainer, menuCotentContainer);
}
