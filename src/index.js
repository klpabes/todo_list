import "./styles.css";

import { dialogCreateNote } from "./dialogs/dialogCreateNote";
import { dialogCreateProject } from "./dialogs/dialogCreateProject";
import { loadProjects } from "./loadProjects";
import { TodoItem } from "./todoItem/todoItemClass";

export const projects = JSON.parse(localStorage.getItem("projects")) || {
  Default: [],
};

for (const project in projects) {
  projects[project] = projects[project].map(
    (item) =>
      new TodoItem(
        item.title,
        item.description,
        new Date(item.dueDate),
        item.priority
      )
  );
}
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
