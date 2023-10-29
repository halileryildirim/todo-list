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

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buttonFuncs)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _domLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domLoader */ \"./src/domLoader.js\");\n//manage buttons functionality\n\n\n\n\n\nconst taskBtn = document.querySelector(\"#task-button\");\nconst taskDialog = document.querySelector(\"#task-dialog\");\nconst confirmTask = document.querySelector(\"#confirm-task\");\nconst cancelTask = document.querySelector(\"#cancel-task\");\n\nconst projectBtn = document.querySelector(\"#project-button\");\nconst projectDialog = document.querySelector(\"#project-dialog\");\nconst confirmProj = document.querySelector(\"#confirm-project\");\nconst cancelProj = document.querySelector(\"#cancel-project\");\n\nfunction buttonFuncs(){\n    taskBtn.addEventListener(\"click\", () =>{\n        taskDialog.showModal();\n    });\n\n    confirmTask.addEventListener(\"click\", (event) => {\n        let validity = document.querySelector(\"#task-form\").checkValidity();\n        if(validity) {\n            event.preventDefault();\n            let i = 0;\n            (0,_projects__WEBPACK_IMPORTED_MODULE_1__.addTask)((0,_tasks__WEBPACK_IMPORTED_MODULE_0__.taskCreator)(), i);\n            (0,_domLoader__WEBPACK_IMPORTED_MODULE_2__.taskLoader)();\n        };\n    });\n\n    cancelTask.addEventListener(\"click\", () => {\n        taskDialog.close();\n    });\n\n    projectBtn.addEventListener(\"click\", () =>{\n        projectDialog.showModal();\n    });\n    confirmProj.addEventListener(\"click\", (event) => {\n        let validity = document.querySelector(\"#project-form\").checkValidity();\n        if(validity) {\n            event.preventDefault();\n            (0,_projects__WEBPACK_IMPORTED_MODULE_1__.addProject)(document.querySelector(\"#project-name\"));\n        };\n    });\n    cancelProj.addEventListener(\"click\", () => {\n        projectDialog.close();\n    });\n\n}\n\n\n//# sourceURL=webpack://todo-list/./src/buttons.js?");

/***/ }),

/***/ "./src/domLoader.js":
/*!**************************!*\
  !*** ./src/domLoader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskLoader: () => (/* binding */ taskLoader)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\nfunction taskLoader() {\n    const content = document.querySelector(\"#content\");\n    if(_projects__WEBPACK_IMPORTED_MODULE_0__.tasks.length>0){\n        content.replaceChildren();\n        for(let task in _projects__WEBPACK_IMPORTED_MODULE_0__.tasks) {\n            const taskDiv = document.createElement(\"div\");\n            taskDiv.innerText = `${_projects__WEBPACK_IMPORTED_MODULE_0__.tasks[task].title} is the title.`;\n            content.append(taskDiv);\n        }\n    }\n\n}\n/*\nexport function projectLoader() {\n    const sidebar = document.querySelector(\"#sidebar\");\n    if(projects.length>1){\n        for(proj in projects) {\n            const \n        }\n    }\n}\n*/\n\n//# sourceURL=webpack://todo-list/./src/domLoader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialLoad */ \"./src/initialLoad.js\");\n\n\n(0,_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/buttons.js\");\n//load the functions and modules to keep index clean\n\n\n\nfunction pageLoad(){\n    (0,_buttons__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n//# sourceURL=webpack://todo-list/./src/initialLoad.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\n//make a project array. Make a default array for non-project tasks.\nconst tasks = [];\nconst projects = [tasks];\n\nfunction addTask(task, i) {\n    projects[i].push(task);\n    console.log(projects[i]);\n};\n\nfunction addProject(projName) {\n    projName = [];\n    projects.push(projName);\n    console.log(projects);\n}\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskCreator: () => (/* binding */ taskCreator)\n/* harmony export */ });\n//retrieve data from html forms, add hide and show for the task button, update the task with form data.  \n\nclass Task {\n    constructor(title, description, dueDate, priority){\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    };\n}\n\nfunction taskCreator() {\n    let title = document.querySelector(\"#title\").value;\n    let description = document.querySelector(\"#description\").value;\n    let dueDate = document.querySelector(\"#date\").value;\n    let priority = document.querySelector(\"#priority\").value;\n\n    let task = new Task(title, description, dueDate, priority);\n\n    return task;\n}\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

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