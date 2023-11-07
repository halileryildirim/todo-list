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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UI: () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\nconst UI = (() => {\n    const tasks = document.querySelectorAll(\".task\");\n    const taskBtn = document.querySelector(\"#task-button\");\n    const taskDialog = document.querySelector(\"#task-dialog\");\n    const confirmTask = document.querySelector(\"#confirm-task\");\n    const closeTask = document.querySelector(\"#task-close-button\");\n    \n    const projects = document.querySelector(\".projects\");\n    const projectBtn = document.querySelector(\"#project-button\");\n    const projectDialog = document.querySelector(\"#project-dialog\");\n    const confirmProj = document.querySelector(\"#confirm-project\");\n    const closeProj = document.querySelector(\"#project-close-button\");\n    const deleteProj = document.querySelector(\"#project-delete-button\");\n\n    const buttonFuncs = () => {\n        console.log(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projects);\n        _projects__WEBPACK_IMPORTED_MODULE_0__.project.projectLoader(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projects);\n        taskBtn.addEventListener(\"click\", () =>{taskDialog.showModal();});\n        closeTask.addEventListener(\"click\", () =>{taskDialog.close();});\n        confirmTask.addEventListener(\"click\", (event) => {\n            let valid = document.querySelector(\"#task-form\").checkValidity();\n            if(valid) {\n                event.preventDefault();\n                _tasks__WEBPACK_IMPORTED_MODULE_1__.task.taskCreator(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projectSelector());\n                console.log(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projects);\n            };\n        });\n\n        projectBtn.addEventListener(\"click\", () => { projectDialog.showModal(); });\n        closeProj.addEventListener(\"click\", () => { projectDialog.close(); });   \n        confirmProj.addEventListener(\"click\", (event) => {\n            let valid = document.querySelector(\"#project-form\").checkValidity();\n            if(valid) {\n                event.preventDefault();\n                _projects__WEBPACK_IMPORTED_MODULE_0__.project.projectCreator(document.querySelector(\"#project-name\").value);\n                _projects__WEBPACK_IMPORTED_MODULE_0__.project.projectLoader(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projects);\n            };\n        });\n\n        projects.addEventListener(\"click\", (e) => {\n            let target = e.target.innerText;\n            if(e.target.classList.contains(\"project\")){\n                _tasks__WEBPACK_IMPORTED_MODULE_1__.task.taskLoader(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projectUpdater(target));\n            }\n\n            else if(e.target.classList.contains(\"project-delete-button\")){\n                _projects__WEBPACK_IMPORTED_MODULE_0__.project.projectRemover(target);\n                _projects__WEBPACK_IMPORTED_MODULE_0__.project.projectLoader(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projects);\n            }\n        });\n\n        \n    };\n    \n    return {buttonFuncs};\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\nfunction pageLoad(){\n    _UI__WEBPACK_IMPORTED_MODULE_0__.UI.buttonFuncs();\n}\n\n//# sourceURL=webpack://todo-list/./src/initialLoad.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project)\n/* harmony export */ });\nconst project =(() =>{\n\n    const projectDiv = document.querySelector(\".projects\");\n    const options = document.querySelector(\"#project-options\");\n    const other = [];\n    other.id = \"OTHER TASKS\";\n    const projects = [other];\n\n    const projectCreator = (projectName) => {\n        const proj = [];\n        proj.id = projectName;\n        projects.push(proj);\n    };\n\n    const projectLoader = (array) => {\n        if(array.length == 0) {\n            console.log(projects);\n            const noProject = document.createElement(\"h2\");\n            noProject.innerText = \"No Projects Found!\";\n            projectDiv.replaceChildren(noProject);\n        }\n        else\n            projectDiv.replaceChildren();\n            for(let i = 0; i < array.length; i++) {\n                const project = document.createElement(\"div\");\n                project.classList = \"project-container\";\n                const projectTitle = document.createElement(\"h2\");\n                projectTitle.classList = \"project\";\n                projectTitle.innerText = array[i].id;\n                const projDelete = document.createElement(\"button\");\n                projDelete.innerText = \"Delete\";\n                projDelete.classList = \"project-delete-button\";\n                const projOption = document.createElement(\"option\");\n                \n                projOption.value = array[i].id;\n                projOption.innerText = array[i].id;\n\n                options.appendChild(projOption);\n                project.appendChild(projectTitle);\n                project.appendChild(projDelete);\n                projectDiv.appendChild(project);\n            };\n    };\n\n    const projectSelector = () => {\n        let projectID = document.querySelector(\"#project-options\").value;\n        let projIndexFinder = projects.find((elem) => elem.id == projectID);\n        let projIndex = projects.indexOf(projIndexFinder)\n        return projects[projIndex];\n\n    };\n\n    const projectUpdater = (projectID) => {\n        let projIndexFinder = projects.find((elem) => elem.id == projectID);\n        let projIndex = projects.indexOf(projIndexFinder)\n        return projects[projIndex];\n    };\n\n    const projectRemover = (projectID) => {\n        let projIndexFinder = projects.find((elem) => elem.id == projectID);\n        let projIndex = projects.indexOf(projIndexFinder)\n        return projects.splice(projIndex, 1);\n    }\n\n    return {projectCreator, projectLoader, projectSelector, projectUpdater, projectRemover,projects};\n})();\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   task: () => (/* binding */ task)\n/* harmony export */ });\nconst task = (() => {\n    class Task {\n        constructor(title, description, dueDate, priority){\n            this.title = title;\n            this.description = description;\n            this.dueDate = dueDate;\n            this.priority = priority;\n        };\n    }\n\n    const taskCreator = (array) => {\n        let title = document.querySelector(\"#title\").value;\n        let description = document.querySelector(\"#description\").value;\n        let dueDate = document.querySelector(\"#date\").value;\n        let priority = document.querySelector(\"#priority\").value;\n    \n        let task = new Task(title, description, dueDate, priority);\n    \n        array.push(task);\n    };\n    \n    const taskLoader = (array) => {\n        const content = document.querySelector(\"#content\");\n        const noTask = document.createElement(\"p\");\n        noTask.innerText = \"No tasks found.\";\n\n        if(array.length == 0) {\n            content.replaceChildren(noTask);\n        }\n        else\n            content.replaceChildren();\n            for (let i=0; i < array.length; i++) {\n                \n                const task = document.createElement(\"div\");\n                task.class = \"task\";\n    \n                const titleP = document.createElement(\"p\");\n                const taskTitle = array[i].title;\n                titleP.innerText = taskTitle;\n                task.appendChild(titleP);\n    \n                const descrP = document.createElement(\"p\");\n                const taskDescr = array[i].description;\n                descrP.innerText = taskDescr;\n                task.appendChild(descrP);\n    \n                const dateP = document.createElement(\"p\");\n                const taskDate = array[i].dueDate;\n                dateP.innerText = taskDate;\n                task.appendChild(dateP);\n    \n                const priorP = document.createElement(\"p\");\n                const taskPrior = array[i].priority;\n                priorP.innerText = taskPrior;\n                task.appendChild(priorP);\n\n                const editTask = document.createElement(\"button\");\n                editTask.innerText = \"Edit\";\n                const deleteTask = document.createElement(\"button\");\n                deleteTask.innerText = \"Delete\";\n\n\n                task.appendChild(editTask);\n                task.appendChild(deleteTask);\n                content.appendChild(task);\n            };\n    };\n    return {taskCreator, taskLoader};\n    \n})();\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

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