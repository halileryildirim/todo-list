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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buttonFuncs)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\nconst taskBtn = document.querySelector(\"#task-button\");\nconst taskDialog = document.querySelector(\"#task-dialog\");\nconst confirmTask = document.querySelector(\"#confirm-task\");\nconst cancelTask = document.querySelector(\"#cancel-task\");\n\nconst projectBtn = document.querySelector(\"#project-button\");\nconst projectDialog = document.querySelector(\"#project-dialog\");\nconst confirmProj = document.querySelector(\"#confirm-project\");\nconst cancelProj = document.querySelector(\"#cancel-project\");\n\nfunction buttonFuncs(){\n    taskBtn.addEventListener(\"click\", () =>{\n        taskDialog.showModal();\n    });\n\n    confirmTask.addEventListener(\"click\", (event) => {\n        let validity = document.querySelector(\"#task-form\").checkValidity();\n        if(validity) {\n            event.preventDefault();\n        };\n    });\n\n    cancelTask.addEventListener(\"click\", () => {\n        taskDialog.close();\n    });\n\n    projectBtn.addEventListener(\"click\", () =>{\n        projectDialog.showModal();\n    });\n\n    confirmProj.addEventListener(\"click\", (event) => {\n        let validity = document.querySelector(\"#project-form\").checkValidity();\n        if(validity) {\n            event.preventDefault();\n            (0,_projects__WEBPACK_IMPORTED_MODULE_0__.projectCreator)(document.querySelector(\"#project-name\").value)\n        };\n    });\n    cancelProj.addEventListener(\"click\", () => {\n        projectDialog.close();\n    });\n\n}\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\nfunction pageLoad(){\n    (0,_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n//# sourceURL=webpack://todo-list/./src/initialLoad.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectCreator: () => (/* binding */ projectCreator)\n/* harmony export */ });\nconst sidebar = document.querySelector(\"#sidebar\");\nconst defaultTasks = [];\nconst projects = [defaultTasks];\n\nfunction projectCreator(projectName) {\n    const proj = [];\n    projects.push(proj);\n\n    const project = document.createElement(\"div\");\n    const projName = document.createElement(\"h2\");\n    const projTask = document.createElement(\"button\");\n\n    projTask.innerText = \"Add Task\";\n    projName.innerText = projectName;\n\n    project.appendChild(projName);\n    project.appendChild(projTask);\n    sidebar.appendChild(project);\n\n    \n    project.addEventListener(\"click\", () =>{\n        let index = projects.indexOf(proj)\n        console.log(index);\n        console.log(projects);\n    });\n\n    \n    projTask.addEventListener(\"click\", (event) => {\n        event.stopPropagation();\n        document.querySelector(\"#task-dialog\").showModal();\n        console.log(index);\n        console.log(projects);\n    });   \n}\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskCreator: () => (/* binding */ taskCreator),\n/* harmony export */   taskLoader: () => (/* binding */ taskLoader)\n/* harmony export */ });\nclass Task {\n    constructor(title, description, dueDate, priority){\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    };\n}\n\nfunction taskCreator() {\n    let title = document.querySelector(\"#title\").value;\n    let description = document.querySelector(\"#description\").value;\n    let dueDate = document.querySelector(\"#date\").value;\n    let priority = document.querySelector(\"#priority\").value;\n\n    let task = new Task(title, description, dueDate, priority);\n\n    return task;\n};\n\nfunction taskLoader() {\n    \n}\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

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