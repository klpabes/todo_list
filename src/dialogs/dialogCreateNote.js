import { createElement } from "../helpers";
import { TodoItem } from "../todoItem/todoItemClass";
import { todoItems } from "..";
import { loadProjects } from "../loadProjects";
import { projects } from "..";
import { createNoteHtml } from "./dialogCreateNoteHtml";

export function dialogCreateNote(contentContainer) {
  const dialog = createElement("dialog", "class", "create-note-dialog");
  dialog.innerHTML = createNoteHtml(projects);
  document.body.appendChild(dialog);
  dialog.showModal();

  const form = document.getElementById("create-note");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload

    const formData = new FormData(form);

    const title = formData.get("title");
    const description = formData.get("description");
    const dueDate = formData.get("dueDate");
    const priority = formData.get("priority");
    const project = formData.get("project");

    const newItem = new TodoItem(title, description, dueDate, priority);
    newItem.addToProject(project);
    localStorage.setItem("projects", JSON.stringify(projects));
    form.reset();
    dialog.remove();
    loadProjects(contentContainer, projects);
  });
}
