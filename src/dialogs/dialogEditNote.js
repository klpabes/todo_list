import { createElement } from "../helpers";
import { editNoteHtml } from "./dialogEditNoteHtml";
import { projects } from "..";
import { loadProjects } from "../loadProjects";
export function dialogEditNote(contentContainer, id, project) {
  const dialog = createElement("dialog", "class", "edit-note-dialog");
  const currentProject = projects[project].filter((item) => item.id === id)[0];

  dialog.innerHTML = editNoteHtml(currentProject);
  document.body.appendChild(dialog);
  dialog.showModal();

  const form = document.getElementById("edit-note");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload

    const formData = new FormData(form);

    const title = formData.get("title");
    const description = formData.get("description");
    const dueDate = formData.get("dueDate");
    const priority = formData.get("priority");
    const newProject = formData.get("project");

    currentProject.editProject(
      title,
      description,
      dueDate,
      priority,
      project,
      newProject
    );
    form.reset();
    dialog.remove();
    loadProjects(contentContainer, projects);
  });
}
