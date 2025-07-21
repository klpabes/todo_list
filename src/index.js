import "./styles.css";

import { dialogCreateNote } from "./dialogs/dialogCreateNote";
import { dialogCreateProject } from "./dialogs/dialogCreateProject";
import { loadProjects } from "./loadProjects";

export const projects = { Default: [] };

export const contentContainer = document.querySelector("#content");

const navButtons = document.querySelector("nav").querySelectorAll("button");
const buttonClass = ["project-button", "note-button"];

navButtons.forEach((item, index) => {
  item.className = buttonClass[index];
  item.classList.add = "nav-buttons";
  item.addEventListener("click", () => {
    if (item.className === "project-button") {
      dialogCreateProject(contentContainer);
    } else {
      dialogCreateNote(contentContainer);
    }
  });
});

loadProjects(contentContainer, projects);
