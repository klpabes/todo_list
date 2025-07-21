import { dialogEditNote } from "../dialogs/dialogEditNote";
import { createElement } from "../helpers";
export function makeTodoContent(
  todos,
  articleContainer,
  contentContainer,
  projectName
) {
  todos.map((item) => {
    const todoContainer = createElement("div", "class", "todo-container");
    const todoTitle = createElement(
      "button",
      "class",
      "todo-title",
      item.title
    );
    todoTitle.classList.add(`priority-${item.priority}`);

    const deleteButton = createElement(
      "button",
      "class",
      "delete-button",
      "Delete"
    );
    const editButton = createElement("button", "class", "edit-button", "Edit");
    const completedButton = createElement(
      "button",
      "class",
      "complete-button",
      "Complete"
    );
    const extraInfo = createElement("div", "class", "todo-content-container");
    extraInfo.classList.add("extra-info");
    extraInfo.innerHTML = `
        <p>${item.description}</p>
        <p>${item.dueDate.toLocaleDateString()}</p>
        <p>Priority ${item.priority}</p>
      `;
    extraInfo.style.display = "none";

    todoTitle.addEventListener("click", () => {
      const isVisible = extraInfo.style.display === "block";

      extraInfo.style.display = isVisible ? "none" : "block";
    });
    editButton.addEventListener("click", () => {
      dialogEditNote(contentContainer, item.id, projectName);
    });
    deleteButton.addEventListener("click", () => {
      item.deleteProject(projectName);
    });
    completedButton.addEventListener("click", () => {
      item.completeProject();
      completedButton.classList.toggle("completed", item.completed);
    });
    articleContainer.appendChild(todoContainer);
    todoContainer.appendChild(todoTitle);
    extraInfo.appendChild(completedButton);
    extraInfo.appendChild(editButton);
    todoContainer.appendChild(deleteButton);
    todoContainer.insertAdjacentElement("beforeend", extraInfo);
  });
}
