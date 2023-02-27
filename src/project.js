export class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.toDoListArray = new Array();
  }

  addList(list) {
    this.toDoListArray.push(list);
  }

  displayLists() {
    this.toDoListArray.forEach((list) => {
      list.displayTasks();
    });
  }
}
