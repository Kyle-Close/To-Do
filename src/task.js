export class Task {
  constructor(taskName, taskDescription, taskDueDate, priority, isCompleted) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.taskDueDate = taskDueDate;
    this.priority = priority;
    this.isCompleted = isCompleted;
  }
  info() {
    console.log(`Task Name: ${this.taskName}`);
    console.log(`Task Description: ${this.taskDescription}`);
    console.log(`Task Due Date: ${this.taskDueDate}`);
    console.log(`Task Priority: ${this.priority}`);
    console.log(`Task Completed: ${this.isCompleted}`);
    console.log("---------------------------------");
  }
}
