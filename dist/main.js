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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoList */ \"./src/toDoList.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectsDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectsDOM */ \"./src/projectsDOM.js\");\n\n\n\n\n\nlet projectList = new Array();\n\nconst forms = document.querySelectorAll(\"form\");\n\n[...forms].forEach((form) => {\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n\n    let formClicked = e.target.className;\n    let value;\n\n    if (formClicked === \"project-form\") {\n      value = document.querySelector(\"#project-name\").value;\n      formClicked = \"Project\";\n    } else {\n      value = document.querySelector(\"#list-name\").value;\n      formClicked = \"List\";\n    }\n    console.log(value);\n    if (value === \"\") {\n      alert(`${formClicked} name cannot be blank!`);\n    } else {\n      if (formClicked === \"Project\") {\n        projectList.push(new _project__WEBPACK_IMPORTED_MODULE_2__.Project(value));\n        (0,_projectsDOM__WEBPACK_IMPORTED_MODULE_3__.addNewProjectDOM)(value);\n        console.dir(projectList);\n      }\n    }\n    console.log(formClicked);\n  });\n});\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(projectName) {\n    this.projectName = projectName;\n    this.toDoListArray = new Array();\n  }\n\n  addList(list) {\n    this.toDoListArray.push(list);\n  }\n\n  displayLists() {\n    this.toDoListArray.forEach((list) => {\n      list.displayTasks();\n    });\n  }\n}\n\n\n//# sourceURL=webpack://to-do/./src/project.js?");

/***/ }),

/***/ "./src/projectsDOM.js":
/*!****************************!*\
  !*** ./src/projectsDOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewProjectDOM\": () => (/* binding */ addNewProjectDOM)\n/* harmony export */ });\nconst projectsListContainer = document.querySelector(\n  \".directories-list-projects\"\n);\n\nfunction addNewProjectDOM(projectName) {\n  let li = document.createElement(\"li\");\n  let projectButton = document.createElement(\"button\");\n  let deleteButton = document.createElement(\"button\");\n  let deleteImage = document.createElement(\"img\");\n\n  projectButton.textContent = projectName;\n  projectButton.className = \"project-list-buttons\";\n\n  deleteImage.src = \"../img/trash.png\";\n  deleteImage.width = \"25\";\n  deleteButton.appendChild(deleteImage);\n\n  li.appendChild(projectButton);\n  li.appendChild(deleteButton);\n\n  projectsListContainer.appendChild(li);\n}\n\n\n//# sourceURL=webpack://to-do/./src/projectsDOM.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(taskName, taskDescription, taskDueDate, priority, isCompleted) {\n    this.taskName = taskName;\n    this.taskDescription = taskDescription;\n    this.taskDueDate = taskDueDate;\n    this.priority = priority;\n    this.isCompleted = isCompleted;\n  }\n  info() {\n    console.log(`Task Name: ${this.taskName}`);\n    console.log(`Task Description: ${this.taskDescription}`);\n    console.log(`Task Due Date: ${this.taskDueDate}`);\n    console.log(`Task Priority: ${this.priority}`);\n    console.log(`Task Completed: ${this.isCompleted}`);\n    console.log(\"---------------------------------\");\n  }\n}\n\n\n//# sourceURL=webpack://to-do/./src/task.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;