import { createElement, createHeader } from "./helpers";

const hours = [
  { day: "Sunday", hours: "8am - 8pm" },
  { day: "Monday", hours: "6am - 6pm" },
  { day: "Tuesday", hours: "6am - 6pm" },
  { day: "Wednesday", hours: "6am - 6pm" },
  { day: "Thursday", hours: "6am - 10pm" },
  { day: "Friday", hours: "6am - 10pm" },
  { day: "Saturday", hours: "8am - 10pm" },
];

export function loadHome(contentContainer) {
  // main containers
  const homeHeaderContainer = createElement(
    "div",
    "class",
    "main-container-header"
  );
  const homeContentContainer = createElement(
    "div",
    "class",
    "main-container-content"
  );

  // content containers
  const contentHeaderContainer = createElement(
    "div",
    "class",
    "content-container"
  );
  const contentScheduleContainer = createElement(
    "div",
    "class",
    "content-container"
  );
  const contentLocationContainer = createElement(
    "div",
    "class",
    "content-container"
  );

  // header container
  createHeader(homeHeaderContainer, "My Restaurant Page");

  //content containers
  //content header container

  const contentHeaderText = createElement(
    "p",
    "class",
    "content-text",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisi vel quam fringilla vestibulum. Vestibulum in arcu at purus cursus egestas bibendum in orci. Nunc quis dui vel ligula molestie semper. Maecenas condimentum tempus imperdiet. Suspendisse velit turpis, laoreet luctus tempor tempus, tristique sed massa. Cras egestas, libero lacinia tempor semper, lorem nibh convallis eros, vel pharetra mi velit vel tortor. Pellentesque vel urna sed metus facilisis fringilla sit amet a justo."
  );
  const contentHeaderAuthor = createElement(
    "h4",
    "class",
    "content-text-author",
    "Robert Odinson"
  );

  contentHeaderContainer.append(contentHeaderText, contentHeaderAuthor);

  //content schedule container

  const contentScheduleHeader = createElement(
    "h3",
    "class",
    "content-text-header",
    "Hours"
  );
  const contentScheduleList = createElement("ul", "class", "content-list");

  hours.map((item) => {
    const itemSchedule = createElement(
      "li",
      "class",
      "content-list-item",
      `${item.day}: ${item.hours}`
    );
    contentScheduleList.append(itemSchedule);
  });

  contentScheduleContainer.append(contentScheduleHeader, contentScheduleList);

  //content location container

  const contentLocationHeader = createElement(
    "h3",
    "class",
    "content-text-header",
    "Location"
  );
  const contentLocationAddress = createElement(
    "p",
    "class",
    "content-text",
    "123 Forest Drive, Forestville, Maine"
  );

  contentLocationContainer.append(
    contentLocationHeader,
    contentLocationAddress
  );

  //append logic

  homeContentContainer.append(
    contentHeaderContainer,
    contentScheduleContainer,
    contentLocationContainer
  );

  contentContainer.append(homeHeaderContainer, homeContentContainer);
}
