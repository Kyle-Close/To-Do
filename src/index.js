import { initFormsEventHandler } from "./formHandlerDOM.js";
import { initDirectoryButtonEventHandlers } from "./directoriesDOM";
import { initCreateTaskButton } from "./createTask.js";
import { initDeleteAllTasksButton } from "./deleteTask.js";

export let projectList = new Array();
export let activeProject;
export let activeList;

initFormsEventHandler();
initDirectoryButtonEventHandlers();
initCreateTaskButton();
initDeleteAllTasksButton();
