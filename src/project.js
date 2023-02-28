export class Project {
  constructor(projectName, domListElement) {
    this.projectName = projectName;
    this.toDoListArray = new Array();
    this.domListElement = domListElement;
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
