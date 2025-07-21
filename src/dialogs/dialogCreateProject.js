import { createElement } from "../helpers";
import { projects } from "../index.js";
import { loadProjects } from "../loadProjects.js";
import { createProjectHtml } from "./dialogCreateProjectHtml.js";
export function dialogCreateProject(contentContainer) {
  const dialog = createElement("dialog", "class", "create-project-dialog");
  dialog.innerHTML = createProjectHtml;
  document.body.appendChild(dialog);
  dialog.showModal();

  const form = document.getElementById("create-project");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    const formData = new FormData(form);
    const title = formData.get("name");
    projects[title] = [];
    dialog.remove();
    form.reset();
    loadProjects(contentContainer, projects);
  });
}
