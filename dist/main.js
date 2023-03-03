/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/directoriesDOM.js":
/*!*******************************!*\
  !*** ./src/directoriesDOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewProjectOrListDOM\": () => (/* binding */ addNewProjectOrListDOM),\n/* harmony export */   \"getSelectedProjectIndex\": () => (/* binding */ getSelectedProjectIndex),\n/* harmony export */   \"initDirectoryButtonEventHandlers\": () => (/* binding */ initDirectoryButtonEventHandlers),\n/* harmony export */   \"updateListSectionProjectTitle\": () => (/* binding */ updateListSectionProjectTitle)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\n// Delete button broken on list section\n//\n\nconst projectsListContainer = document.querySelector(\n  \".directories-list-projects\"\n);\nconst listsContainer = document.querySelector(\".directories-list-lists\");\nconst projectTitleListSection = document.querySelector(\".current-project-name\");\nconst directoryButtons = document.querySelectorAll(\".project-list-buttons\");\n\nlet lastSelectedProject;\nlet lastSelectedList;\n\nfunction addNewProjectOrListDOM(name, isProject) {\n  let li = document.createElement(\"li\");\n\n  if (isProject) {\n    let projectButton = createProjectButton(name);\n    let deleteButton = createDeleteButton();\n    li.appendChild(projectButton);\n    li.appendChild(deleteButton);\n    if (___WEBPACK_IMPORTED_MODULE_0__.projectList.length === 0) {\n      projectButton.setAttribute(\"selected\", true);\n      lastSelectedProject = projectButton;\n      updateProjectTitle(name);\n    }\n    projectsListContainer.appendChild(li);\n  } else {\n    let listButton = createListButton(name);\n    let deleteButton = createDeleteButton();\n    li.appendChild(listButton);\n    li.appendChild(deleteButton);\n    if (___WEBPACK_IMPORTED_MODULE_0__.projectList[getSelectedProjectIndex()].toDoListArray.length === 0) {\n      listButton.setAttribute(\"selected\", true);\n      lastSelectedList = listButton;\n      updateListTitle(name);\n    }\n    listsContainer.appendChild(li);\n  }\n}\n\nfunction updateListSectionProjectTitle(projectName) {\n  projectTitleListSection.textContent = projectName;\n}\n\nfunction initDirectoryButtonEventHandlers() {\n  [...directoryButtons].forEach((button) => {\n    button.addEventListener(\"click\", directoryButtonEvent);\n  });\n}\n\nfunction createProjectButton(name) {\n  let button = document.createElement(\"button\");\n  button.textContent = name;\n  button.className = \"project-list-buttons\";\n  button.classList.add(\"project-button\");\n  button.addEventListener(\"click\", directoryButtonEvent);\n  return button;\n}\n\nfunction createListButton(name) {\n  let button = document.createElement(\"button\");\n  button.textContent = name;\n  button.className = \"project-list-buttons\";\n  button.classList.add(\"list-button\");\n  button.addEventListener(\"click\", directoryButtonEvent);\n  return button;\n}\n\nfunction createDeleteButton() {\n  let button = document.createElement(\"button\");\n  let image = document.createElement(\"img\");\n\n  image.src = \"../img/trash.png\";\n  image.width = \"25\";\n  button.appendChild(image);\n  button.addEventListener(\"click\", deleteListItem);\n  return button;\n}\n\nfunction directoryButtonEvent(e) {\n  e.target.setAttribute(\"selected\", \"true\");\n  // Determine if project or list\n  let listType = e.target.classList[1];\n\n  if (listType === \"project-button\") {\n    if (lastSelectedProject && lastSelectedProject !== e.target) {\n      lastSelectedProject.removeAttribute(\"selected\");\n      clearAllLists();\n      displayCurrentProjectLists();\n      setSelectedOnFirstList();\n      //updateListTitle(projectList[getSelectedProjectIndex()].toDoListArray[0].listName);\n    }\n    lastSelectedProject = e.target;\n    updateProjectTitle(e.target.textContent);\n  } else if (listType === \"list-button\") {\n    if (lastSelectedList && lastSelectedList !== e.target) {\n      lastSelectedList.removeAttribute(\"selected\");\n    }\n    lastSelectedList = e.target;\n    updateListTitle(e.target.textContent);\n  }\n}\n\nfunction getSelectedProjectIndex() {\n  let index = 0;\n  let count = 0;\n  let projectList = document.querySelectorAll(\".directories-list-projects li\");\n  [...projectList].forEach((li) => {\n    if (li.children[0].getAttribute(\"selected\")) {\n      index = count;\n    }\n    count++;\n  });\n  return index;\n}\n\nfunction getDeletedProjectIndex(liElement) {\n  const nodeItemText = liElement.firstChild.textContent;\n  let count = 0;\n  let index;\n  ___WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((project) => {\n    if (project.projectName === nodeItemText) {\n      index = count;\n    }\n    count++;\n  });\n  return index;\n}\n\nfunction getDeletedListIndex(project, liElement) {\n  const nodeItemText = liElement.firstChild.textContent;\n  let count = 0;\n  let index;\n  project.toDoListArray.forEach((list) => {\n    if (list.listName === nodeItemText) {\n      index = count;\n    }\n    count++;\n  });\n  return index;\n}\n\nfunction updateProjectTitle(title) {\n  const domTitle = document.querySelector(\".project-list-titles h1\");\n  domTitle.textContent = title;\n  const listSectionTitle = document.querySelector(\".current-project-name\");\n  listSectionTitle.textContent = title;\n}\n\nfunction updateListTitle(title) {\n  const domTitle = document.querySelector(\".project-list-titles h3\");\n  domTitle.textContent = title;\n}\n\nfunction clearAllLists() {\n  const lists = document.querySelectorAll(\".directories-list-lists li\");\n  [...lists].forEach((list) => {\n    list.remove();\n  });\n}\n\nfunction displayCurrentProjectLists() {\n  let index = getSelectedProjectIndex();\n  let currentProject = ___WEBPACK_IMPORTED_MODULE_0__.projectList[index];\n  currentProject.toDoListArray.forEach((list) => {\n    addNewProjectOrListDOM(list.listName, false, \"list\");\n  });\n}\n\nfunction setSelectedOnFirstList() {\n  const list = [...document.querySelectorAll(\".directories-list-lists li\")];\n  if (list.length !== 0) {\n    list[0].firstChild.setAttribute(\"selected\", true);\n    lastSelectedList = list[0].firstChild;\n  }\n}\n\nfunction deleteListItem(event) {\n  const liElement = event.target.parentNode.closest(\"li\");\n  let isProject = liElement.parentNode.classList[1];\n  isProject = isProject === \"directories-list-projects\" ? true : false;\n\n  if (isProject) {\n    selectFirstProject();\n    clearAllLists();\n    // Project Removed\n    liElement.remove(liElement);\n    let index = getDeletedProjectIndex(liElement);\n    ___WEBPACK_IMPORTED_MODULE_0__.projectList.splice(index, 1);\n    displayCurrentProjectLists();\n    selectFirstList();\n  } else {\n    const projectListIndex = getSelectedProjectIndex();\n    const listListIndex = getDeletedListIndex(\n      ___WEBPACK_IMPORTED_MODULE_0__.projectList[projectListIndex],\n      liElement\n    );\n    ___WEBPACK_IMPORTED_MODULE_0__.projectList[projectListIndex].toDoListArray.splice(listListIndex, 1);\n    selectFirstList();\n    console.dir(___WEBPACK_IMPORTED_MODULE_0__.projectList);\n  }\n}\n\nfunction selectFirstProject() {\n  const projects = document.querySelectorAll(\".directories-list-projects li\");\n  if (projects) {\n    projects[0].firstChild.setAttribute(\"selected\", true);\n    lastSelectedProject = projects[0].firstChild;\n    updateProjectTitle(lastSelectedProject.textContent);\n  }\n}\n\nfunction selectFirstList() {\n  const lists = document.querySelectorAll(\".directories-list-lists li\");\n  if (lists) {\n    lists[0].firstChild.setAttribute(\"selected\", true);\n    lastSelectedList = lists[0].firstChild;\n    updateListTitle(lastSelectedList.textContent);\n  }\n}\n\n\n//# sourceURL=webpack://to-do/./src/directoriesDOM.js?");

/***/ }),

/***/ "./src/formHandlerDOM.js":
/*!*******************************!*\
  !*** ./src/formHandlerDOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initFormsEventHandler\": () => (/* binding */ initFormsEventHandler)\n/* harmony export */ });\n/* harmony import */ var _directoriesDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directoriesDOM */ \"./src/directoriesDOM.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoList */ \"./src/toDoList.js\");\n\n\n\n\n\n\nfunction initFormsEventHandler() {\n  [...document.querySelectorAll(\"form\")].forEach((form) => {\n    form.addEventListener(\"submit\", submitHandler);\n  });\n}\n\nfunction submitHandler(e) {\n  e.preventDefault();\n  // Get form that was used. Project or List\n  let isProject = e.target.className === \"project-form\" ? true : false;\n\n  if (isProject) {\n    let projectName = document.querySelector(\"#project-name\").value;\n    if (validateInput(true, projectName)) {\n      // Add project to the DOM\n      (0,_directoriesDOM__WEBPACK_IMPORTED_MODULE_0__.addNewProjectOrListDOM)(projectName, true);\n      // Add project to the global projectList\n      ___WEBPACK_IMPORTED_MODULE_2__.projectList.push(new _project__WEBPACK_IMPORTED_MODULE_1__.Project(projectName));\n    }\n  } else {\n    let listName = document.querySelector(\"#list-name\").value;\n    if (validateInput(false, listName)) {\n      // Add list to the DOM\n      (0,_directoriesDOM__WEBPACK_IMPORTED_MODULE_0__.addNewProjectOrListDOM)(listName, false);\n      // Add list to the current projects toDoListArray\n      ___WEBPACK_IMPORTED_MODULE_2__.projectList[(0,_directoriesDOM__WEBPACK_IMPORTED_MODULE_0__.getSelectedProjectIndex)()].toDoListArray.push(\n        new _toDoList__WEBPACK_IMPORTED_MODULE_3__.ToDoList(listName)\n      );\n    }\n  }\n}\n\nfunction validateInput(isProject, inputValue) {\n  let isValid = false;\n  if (isProject) {\n    if (isProjectNameUnique(inputValue) && !isEmpty(inputValue)) {\n      isValid = true;\n    }\n  } else {\n    if (isListNameUnique(inputValue) && !isEmpty(inputValue)) {\n      isValid = true;\n    }\n  }\n  return isValid;\n}\n\nfunction isEmpty(value) {\n  let isEmpty = false;\n  if (value === \"\") {\n    isEmpty = true;\n  }\n  if (isEmpty) alert(\"Please enter a value.\");\n  return isEmpty;\n}\n\nfunction isProjectNameUnique(name) {\n  const projects = document.querySelectorAll(\".directories-list-projects li\");\n  let isUnique = true;\n  [...projects].forEach((project) => {\n    if (project.textContent === name) {\n      isUnique = false;\n    }\n  });\n  if (!isUnique) {\n    alert(`${name} is not unique.`);\n  }\n  return isUnique;\n}\n\nfunction isListNameUnique(name) {\n  let isUnique = true;\n  // Get currently selected project array index\n  const projectArrayIndex = (0,_directoriesDOM__WEBPACK_IMPORTED_MODULE_0__.getSelectedProjectIndex)();\n  // Loop through each toDoList item and check if names match\n  ___WEBPACK_IMPORTED_MODULE_2__.projectList[projectArrayIndex].toDoListArray.forEach((list) => {\n    if (list.listName === name) {\n      isUnique = false;\n    }\n  });\n  if (!isUnique) {\n    alert(`${name} is not unique.`);\n  }\n  return isUnique;\n}\n\n\n//# sourceURL=webpack://to-do/./src/formHandlerDOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeList\": () => (/* binding */ activeList),\n/* harmony export */   \"activeProject\": () => (/* binding */ activeProject),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _formHandlerDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formHandlerDOM.js */ \"./src/formHandlerDOM.js\");\n/* harmony import */ var _directoriesDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directoriesDOM */ \"./src/directoriesDOM.js\");\n\n\n\nlet projectList = new Array();\nlet activeProject;\nlet activeList;\n\n(0,_formHandlerDOM_js__WEBPACK_IMPORTED_MODULE_0__.initFormsEventHandler)();\n(0,_directoriesDOM__WEBPACK_IMPORTED_MODULE_1__.initDirectoryButtonEventHandlers)();\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(projectName) {\n    this.projectName = projectName;\n    this.toDoListArray = new Array();\n  }\n\n  addList(list) {\n    this.toDoListArray.push(list);\n  }\n\n  displayLists() {\n    this.toDoListArray.forEach((list) => {\n      list.displayTasks();\n    });\n  }\n}\n\n\n//# sourceURL=webpack://to-do/./src/project.js?");

/***/ }),

/***/ "./src/toDoList.js":
/*!*************************!*\
  !*** ./src/toDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoList\": () => (/* binding */ ToDoList)\n/* harmony export */ });\nclass ToDoList {\n  constructor(listName) {\n    this.listName = listName;\n    this.taskArray = new Array();\n  }\n\n  addTask(task) {\n    this.taskArray.push(task);\n  }\n\n  displayTasks() {\n    this.taskArray.forEach((task) => {\n      task.info();\n    });\n  }\n}\n\n\n//# sourceURL=webpack://to-do/./src/toDoList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;