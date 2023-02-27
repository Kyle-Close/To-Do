import { initdirectoryEventHandlers } from "./directoriesDOM";
import { initDirectoryButtonEventHandlers } from "./directoriesDOM";

export let projectList = new Array();
export let activeProject;
export let activeList;

initdirectoryEventHandlers();
initDirectoryButtonEventHandlers();
