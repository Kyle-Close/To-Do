import { initFormsEventHandler } from "./formHandlerDOM.js";
import { initDirectoryButtonEventHandlers } from "./directoriesDOM";

export let projectList = new Array();
export let activeProject;
export let activeList;

initFormsEventHandler();
initDirectoryButtonEventHandlers();
