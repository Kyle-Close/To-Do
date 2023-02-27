export class ToDoList {
  constructor(listName) {
    this.listName = listName;
    this.taskArray = new Array();
  }

  addTask(task) {
    this.taskArray.push(task);
  }

  displayTasks() {
    this.taskArray.forEach((task) => {
      task.info();
    });
  }
}
