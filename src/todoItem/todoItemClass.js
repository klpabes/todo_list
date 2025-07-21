import { projects } from "..";
import { loadProjects } from "../loadProjects";
import { contentContainer } from "..";
let idCounter = 0;
export class TodoItem {
  completed = false;
  constructor(title, description, dueDate, priority) {
    this.id = idCounter++;
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
  }

  addToProject(project) {
    projects[project].push(this);
  }

  deleteProject(project) {
    projects[project] = projects[project].filter((item) => item.id !== this.id);
    localStorage.setItem("projects", JSON.stringify(projects));
    loadProjects(contentContainer, projects);
  }

  editProject(title, description, dueDate, priority, oldProject, project) {
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority;

    this.deleteProject(oldProject);
    this.addToProject(project);
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  completeProject() {
    this.completed = !this.completed;
  }
}
