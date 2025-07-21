import { createElement } from "../helpers";
import { makeTodoContent } from "./makeTodoContent";
export function makeContainer(contentContainer, projectName, todos) {
  const articleContainer = createElement(
    "article",
    "class",
    "article-container"
  );
  const projectTitle = createElement(
    "h1",
    "class",
    "project-title",
    projectName
  );
  contentContainer.appendChild(articleContainer);
  articleContainer.appendChild(projectTitle);
  if (todos.length) {
    makeTodoContent(todos, articleContainer, contentContainer, projectName);
  }
  return contentContainer;
}
