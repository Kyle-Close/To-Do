import { Task } from "./task";
import { ToDoList } from "./toDoList";
import { Project } from "./project";
import { addNewProjectDOM } from "./projectsDOM";

let projectList = new Array();

const forms = document.querySelectorAll("form");

[...forms].forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let formClicked = e.target.className;
    let value;

    if (formClicked === "project-form") {
      value = document.querySelector("#project-name").value;
      formClicked = "Project";
    } else {
      value = document.querySelector("#list-name").value;
      formClicked = "List";
    }
    console.log(value);
    if (value === "") {
      alert(`${formClicked} name cannot be blank!`);
    } else {
      if (formClicked === "Project") {
        projectList.push(new Project(value));
        addNewProjectDOM(value);
        console.dir(projectList);
      }
    }
    console.log(formClicked);
  });
});
