import { makeContainer } from "./todoItem/makeContainer";

export function loadProjects(contentContainer, projects) {
  contentContainer.innerHTML = "";

  Object.entries(projects).forEach(([projectName, todos]) => {
    makeContainer(contentContainer, projectName, todos);
    return contentContainer;
  });
}
