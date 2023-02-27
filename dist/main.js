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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewProjectOrListDOM\": () => (/* binding */ addNewProjectOrListDOM),\n/* harmony export */   \"initDirectoryButtonEventHandlers\": () => (/* binding */ initDirectoryButtonEventHandlers),\n/* harmony export */   \"initdirectoryEventHandlers\": () => (/* binding */ initdirectoryEventHandlers),\n/* harmony export */   \"updateListSectionProjectTitle\": () => (/* binding */ updateListSectionProjectTitle)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\nconst projectsListContainer = document.querySelector(\n  \".directories-list-projects\"\n);\nconst listsContainer = document.querySelector(\".directories-list-lists\");\nconst projectTitleListSection = document.querySelector(\".current-project-name\");\nconst forms = document.querySelectorAll(\"form\");\nconst directoryButtons = document.querySelectorAll(\".project-list-buttons\");\n\nlet lastSelectedProject;\n\nfunction initdirectoryEventHandlers() {\n  [...forms].forEach((form) => {\n    form.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n\n      let formClicked = e.target.className;\n      let value;\n\n      if (formClicked === \"project-form\") {\n        value = document.querySelector(\"#project-name\").value;\n        formClicked = \"Project\";\n      } else {\n        value = document.querySelector(\"#list-name\").value;\n        formClicked = \"List\";\n      }\n      console.log(value);\n      if (value === \"\") {\n        alert(`${formClicked} name cannot be blank!`);\n      } else {\n        if (formClicked === \"Project\") {\n          ___WEBPACK_IMPORTED_MODULE_1__.projectList.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project(value));\n          addNewProjectOrListDOM(\n            value,\n            formClicked === \"Project\" ? true : false\n          );\n        } else {\n          addNewProjectOrListDOM(\n            value,\n            formClicked === \"Project\" ? true : false\n          );\n        }\n      }\n      console.log(formClicked);\n    });\n  });\n}\n\nfunction addNewProjectOrListDOM(directoryName, isProject) {\n  let li = document.createElement(\"li\");\n  let projectButton = document.createElement(\"button\");\n  let deleteButton = document.createElement(\"button\");\n  let deleteImage = document.createElement(\"img\");\n\n  projectButton.textContent = directoryName;\n  projectButton.className = \"project-list-buttons\";\n  projectButton.addEventListener(\"click\", directoryButtonEvent);\n\n  deleteImage.src = \"../img/trash.png\";\n  deleteImage.width = \"25\";\n  deleteButton.appendChild(deleteImage);\n\n  li.appendChild(projectButton);\n  li.appendChild(deleteButton);\n\n  if (isProject) {\n    projectsListContainer.appendChild(li);\n  } else {\n    listsContainer.appendChild(li);\n  }\n}\n\nfunction updateListSectionProjectTitle(projectName) {\n  projectTitleListSection.textContent = projectName;\n}\n\nfunction initDirectoryButtonEventHandlers() {\n  [...directoryButtons].forEach((button) => {\n    button.addEventListener(\"click\", directoryButtonEvent);\n  });\n}\n\nfunction directoryButtonEvent(e) {\n  e.target.setAttribute(\"selected\", \"true\");\n  if (lastSelectedProject && lastSelectedProject !== e.target) {\n    lastSelectedProject.removeAttribute(\"selected\");\n  }\n  lastSelectedProject = e.target;\n  console.dir(lastSelectedProject);\n}\n\n\n//# sourceURL=webpack://to-do/./src/directoriesDOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeList\": () => (/* binding */ activeList),\n/* harmony export */   \"activeProject\": () => (/* binding */ activeProject),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _directoriesDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directoriesDOM */ \"./src/directoriesDOM.js\");\n\n\n\nlet projectList = new Array();\nlet activeProject;\nlet activeList;\n\n(0,_directoriesDOM__WEBPACK_IMPORTED_MODULE_0__.initdirectoryEventHandlers)();\n(0,_directoriesDOM__WEBPACK_IMPORTED_MODULE_0__.initDirectoryButtonEventHandlers)();\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(projectName) {\n    this.projectName = projectName;\n    this.toDoListArray = new Array();\n  }\n\n  addList(list) {\n    this.toDoListArray.push(list);\n  }\n\n  displayLists() {\n    this.toDoListArray.forEach((list) => {\n      list.displayTasks();\n    });\n  }\n}\n\n\n//# sourceURL=webpack://to-do/./src/project.js?");

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