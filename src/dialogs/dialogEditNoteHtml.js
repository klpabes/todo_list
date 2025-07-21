import { projects } from "..";
export function editNoteHtml(currentProject) {
  return `
    <form method="dialog" id="edit-note">
      <h2>Create Todo Note</h2>
  
      <label for="title">Title:</label><br>
      <input type="text" id="title" name="title" value=${
        currentProject.title
      } required><br><br>
  
      <label for="description">Description:</label><br>
      <textarea id="description" name="description" rows="4"   required>${
        currentProject.description
      }</textarea><br><br>
  
      <label for="dueDate">Due Date:</label><br>
      <input type="date" id="dueDate" name="dueDate" value="${currentProject.dueDate
        .toISOString()
        .slice(0, 10)}" required><br><br>
  
      <label for="priority">Priority (1 = High, 3 = Low):</label><br>
      <select id="priority" name="priority" required>
          <option value="1" ${
            currentProject.priority == 1 ? "selected" : ""
          }>1 - High</option>
          <option value="2" ${
            currentProject.priority == 2 ? "selected" : ""
          }>2 - Medium</option>
          <option value="3" ${
            currentProject.priority == 3 ? "selected" : ""
          }>3 - Low</option>
      </select><br><br>
  
      <label for="project">Project</label><br>\
        <select id="project" name="project" required>
          ${Object.keys(projects)
            .map((project) => {
              return `<option value=${project}>${project}</option>`;
            })
            .join("")}
        </select><br><br>
  
      <button type="submit">Edit Todo</button>
    </form>
  `;
}
