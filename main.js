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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UI: () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\nconst UI = (() => {\n    //selectors for DOM manipulation\n    const tasks = document.querySelector(\"#content\");\n    const taskBtn = document.querySelector(\"#task-button\");\n    const taskDialog = document.querySelector(\"#task-dialog\");\n    const confirmTask = document.querySelector(\"#confirm-task\");\n    const closeTask = document.querySelector(\"#task-close-button\");\n    const editedDialog = document.querySelector(\"#task-dialog-filled\");\n    const closeEdit = document.querySelector(\"#taskedit-close-button\");\n    const confirmEdit = document.querySelector(\"#confirm-task-edit\");\n\n    const projects = document.querySelector(\".projects\");\n    const projectBtn = document.querySelector(\"#project-button\");\n    const projectDialog = document.querySelector(\"#project-dialog\");\n    const confirmProj = document.querySelector(\"#confirm-project\");\n    const closeProj = document.querySelector(\"#project-close-button\");\n\n    const buttonFuncs = () => {\n\n        //Load the default projects and future saved projects when loading the page\n        _projects__WEBPACK_IMPORTED_MODULE_0__.project.projectLoader(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projects);\n        taskBtn.addEventListener(\"click\", () =>{taskDialog.showModal();});\n        closeTask.addEventListener(\"click\", () =>{taskDialog.close();});\n\n        //prevent default of the button, check for required inputs, create and render the selected project array's tasks.\n        confirmTask.addEventListener(\"click\", (e) => {\n            let valid = document.querySelector(\"#task-form\").checkValidity();\n            if(valid) {\n                e.preventDefault();\n                _tasks__WEBPACK_IMPORTED_MODULE_1__.task.taskCreator(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projectSelector());\n                _tasks__WEBPACK_IMPORTED_MODULE_1__.task.taskLoader(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projectSelector());\n                \n            };\n        });\n\n        projectBtn.addEventListener(\"click\", () => { projectDialog.showModal(); });\n        closeProj.addEventListener(\"click\", () => { projectDialog.close(); });\n\n        //prevent default of the button, check the required input and create the project with value.   \n        confirmProj.addEventListener(\"click\", (e) => {\n            let valid = document.querySelector(\"#project-form\").checkValidity();\n            if(valid) {\n                e.preventDefault();\n                _projects__WEBPACK_IMPORTED_MODULE_0__.project.projectCreator(document.querySelector(\"#project-name\").value);\n                _projects__WEBPACK_IMPORTED_MODULE_0__.project.projectLoader(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projects);\n            };\n        });\n\n        //render the container with tasks if the project is focused.\n        projects.addEventListener(\"click\", (e) => {\n            if(e.target.classList.contains(\"project\")){\n                let target = e.target.innerText;\n                _tasks__WEBPACK_IMPORTED_MODULE_1__.task.taskLoader(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projectUpdater(target));\n                \n            }\n\n            //remove the project, update tasks screen with no tasks.\n            else if(e.target.classList.contains(\"project-delete-button\")){\n                let target = e.target.id;\n\n                if(target == \"Other\") {\n                    alert(\"You can't remove default container for tasks.\");\n                }\n\n                else {\n                    _projects__WEBPACK_IMPORTED_MODULE_0__.project.projectRemover(target);\n                    _projects__WEBPACK_IMPORTED_MODULE_0__.project.projectLoader(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projects);\n                    const noTaskFound = document.createElement(\"p\");\n                    noTaskFound.innerText = \"No tasks found!\";\n                    tasks.replaceChildren(noTaskFound);\n                }\n\n                //update localstorage\n                localStorage.setItem(\"projects\", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projects));\n            }\n        });\n        \n        tasks.addEventListener(\"click\", (e) => {\n            if(e.target.classList.contains(\"task-delete-button\")){\n                //get the second class of the target which is the ID of parent project.\n                const targetTaskArray = _projects__WEBPACK_IMPORTED_MODULE_0__.project.projectUpdater(e.target.classList[1]);\n\n                //remove and return the task with the stored project array and id of task.  \n                _tasks__WEBPACK_IMPORTED_MODULE_1__.task.taskRemover(targetTaskArray, e.target.id);\n\n                //update localstorage\n                localStorage.setItem(\"projects\", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projects));\n\n                //update the tasks after removing the target task\n                _tasks__WEBPACK_IMPORTED_MODULE_1__.task.taskLoader(targetTaskArray);\n            }\n            else if(e.target.classList.contains(\"task-edit-button\")){\n                //find the tasks's project array\n                let projectID = e.target.classList[1];\n                let targetArray = _projects__WEBPACK_IMPORTED_MODULE_0__.project.projectUpdater(projectID);\n\n                //find the selected task in project\n                let targetTask = targetArray.tasks.find((elem) => elem.title == e.target.id);              \n\n                //fill the dialog with task info, and show the modal.\n                _tasks__WEBPACK_IMPORTED_MODULE_1__.task.fillTaskDialog(targetTask);\n                editedDialog.showModal();\n\n                confirmEdit.addEventListener(\"click\", (e) => {\n                    let valid = document.querySelector(\"#task-form-edited\").checkValidity();\n                        if(valid) {\n                            e.preventDefault();\n                            _tasks__WEBPACK_IMPORTED_MODULE_1__.task.taskUpdate(targetTask);\n                            _tasks__WEBPACK_IMPORTED_MODULE_1__.task.taskLoader(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projectUpdater(targetArray.id));\n                            //emptying the targetTask value to remove the reference of previous tasks found by targetarray.find\n                            targetTask = \"\";\n                            //update localstorage\n                            localStorage.setItem(\"projects\", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projects));\n                            editedDialog.close();\n                        }; \n                });\n            }\n            else if(e.target.classList.contains(\"task-complete-button\")){\n                //add a completed status to tasks's classes so it can be updated via css\n            }\n        });\n\n\n\n        closeEdit.addEventListener(\"click\", () => {editedDialog.close();});    \n\n    };\n    \n    return {buttonFuncs};\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project)\n/* harmony export */ });\n//create project as objects and give them an array to store the tasks.\n\nconst project =(() =>{\n\n    const container = document.querySelector(\"#content\");\n    const projectDiv = document.querySelector(\".projects\");\n    const options = document.querySelector(\"#project-options\");\n    //default loaded task container for the tasks without projects\n    const other = {};\n    other.tasks = [];\n    other.id = \"Other\";\n    const projects = [other];\n\n    console.log(projects);\n    //JSON.parse(localStorage.getItem(\"projects\"));\n    \n    //add the default projects to local storage\n    localStorage.setItem(\"projects\", JSON.stringify(projects));\n\n    const projectCreator = (projectName) => {\n        //create project array and push to projects array.\n        const proj = {};\n        proj.id = projectName;\n        proj.tasks = [];\n        console.log(projects);\n        //search the array for possible duplicate before creating the project.\n        let searchDupe = projects.find(proj => proj.id === projectName);\n        if(searchDupe == undefined) {\n            projects.push(proj);\n            //update the local storage with new project elements\n            localStorage.setItem(\"projects\", JSON.stringify(projects));\n        }\n        else\n            alert(\"You can't create projects with same name.\");\n        \n            \n    };\n\n    const projectLoader = (array) => {\n        if(array.length == 0) {\n            //Update the content page if all the projects are deleted.\n            const noProject = document.createElement(\"h2\");\n            noProject.innerText = \"No Projects Found!\";\n            projectDiv.replaceChildren(noProject);\n\n            //Clears the page when all the projects are deleted.                            !!!!!!!!!!!!!!!!!!!!!!!!!\n            container.replaceChildren();\n        }\n\n        else {\n            //update content with projects excluding duplicates. \n            projectDiv.replaceChildren();\n            for(let i = 1; i < options.options.length; i++) {\n                options.remove(i);\n                //Reduce i by 1 because options length is reduced with every remove function.\n                i--;\n            }\n            for(let i = 0; i < array.length; i++) {\n                //create dynamic projects and append to sidebar.\n                const project = document.createElement(\"div\");\n                project.classList = \"project-container\";\n                project.id = array[i].id;\n\n                const projectTitle = document.createElement(\"h2\");\n                projectTitle.classList = \"project\";\n                projectTitle.innerText = array[i].id;\n\n                const projDelete = document.createElement(\"button\");\n                projDelete.innerText = \"Delete\";\n                projDelete.classList = \"project-delete-button\";\n                projDelete.id = array[i].id;\n\n                const projOption = document.createElement(\"option\");\n                projOption.value = array[i].id;\n                projOption.innerText = array[i].id;\n                options.appendChild(projOption);\n\n                \n                project.appendChild(projectTitle);\n                project.appendChild(projDelete);\n                projectDiv.appendChild(project);\n            };\n        }\n\n\n    };\n\n    const projectSelector = () => {\n        //select projects for task creation. Variable is not defined.\n        let projectID = document.querySelector(\"#project-options\").value;\n        let projIndexFinder = projects.find((elem) => elem.id == projectID);\n        let projIndex = projects.indexOf(projIndexFinder);\n        return projects[projIndex];\n    };\n\n    const projectUpdater = (projectID) => {\n        //update the selected project.\n        let projIndexFinder = projects.find((elem) => elem.id == projectID);\n        let projIndex = projects.indexOf(projIndexFinder)\n        return projects[projIndex];\n    };\n\n    const projectRemover = (projectID) => {\n        //remove the project option when removing the project.\n        for(let i = 0; i<options.length; i++) {\n            if(options[i].value == projectID) {\n                options.remove(i);\n            }\n        }\n        //find the projects index in array and splice with the found index. \n        let projIndexFinder = projects.find((elem) => elem.id == projectID);\n        let projIndex = projects.indexOf(projIndexFinder);\n        return projects.splice(projIndex, 1);\n    };\n\n    return {projectCreator, projectLoader, projectSelector, projectUpdater, projectRemover, projects, other};\n})();\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   task: () => (/* binding */ task)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\nconst task = (() => {\n    //constructor for task object \n    class Task {\n        constructor(title, description, dueDate, priority){\n            this.title = title;\n            this.description = description;\n            this.dueDate = dueDate;\n            this.priority = priority;\n        };\n    }\n\n    const taskCreator = (array) => {\n        //receive the input values and create new tasks dynamically\n        let title = document.querySelector(\"#title\").value;\n        let description = document.querySelector(\"#description\").value;\n        let dueDate = document.querySelector(\"#date\").value;\n        let priority = document.querySelector(\"#priority\").value;\n    \n        let task = new Task(title, description, dueDate, priority);\n        \n        //find returns undefined when requirement is not met, so only push when find is undefined\n        let searchDupe = array.tasks.find(task => task.title === title);\n        if(searchDupe == undefined) {\n            array.tasks.unshift(task);\n            //update the local storage with tasks\n            localStorage.setItem(\"projects\", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.project.projects));\n        }\n        else\n            alert(\"You can't add duplicate tasks in same project.\");\n    };\n    \n    const taskLoader = (array) => {\n        //update content when project has no tasks\n        const content = document.querySelector(\"#content\");\n        const noTask = document.createElement(\"p\");\n        noTask.innerText = \"No tasks found.\";\n\n        if(array.tasks.length == 0) {\n            content.replaceChildren(noTask);\n        }\n        else\n        //if project has tasks, create a new div for the task and update innerText's with task values\n            content.replaceChildren();\n            for (let i=0; i < array.tasks.length; i++) {\n                \n                const task = document.createElement(\"div\");\n                task.classList = \"task\";\n    \n                const titleP = document.createElement(\"p\");\n                const taskTitle = array.tasks[i].title;\n                titleP.innerText = taskTitle;\n                task.appendChild(titleP);\n    \n                const descrP = document.createElement(\"p\");\n                const taskDescr = array.tasks[i].description;\n                descrP.innerText = taskDescr;\n                task.appendChild(descrP);\n    \n                const dateP = document.createElement(\"p\");\n                const taskDate = array.tasks[i].dueDate;\n                dateP.innerText = taskDate;\n                task.appendChild(dateP);\n    \n                const priorP = document.createElement(\"p\");\n                const taskPrior = array.tasks[i].priority;\n                priorP.innerText = taskPrior;\n                task.appendChild(priorP);\n\n                //assign the project's id to task buttons to make task detecting easier.\n                const editTask = document.createElement(\"button\");\n                editTask.innerText = \"Edit\";\n                editTask.id = taskTitle;\n                editTask.classList.add(\"task-edit-button\", array.id);\n\n                const deleteTask = document.createElement(\"button\");\n                deleteTask.innerText = \"Delete\";\n                deleteTask.id = taskTitle;\n                deleteTask.classList.add(\"task-delete-button\", array.id);\n\n                const completeTask = document.createElement(\"button\");\n                completeTask.innerText = \"Complete\";\n                completeTask.id = taskTitle;\n                completeTask.classList = \"task-complete-button\";\n\n                task.appendChild(completeTask);\n                task.appendChild(editTask);\n                task.appendChild(deleteTask);\n                content.appendChild(task);\n            };\n    };\n\n    const taskRemover = (array, taskID) => {\n        //find and remove task from the array with the given ID\n        let taskIndexFinder = array.tasks.find((elem) => elem.title == taskID);\n        let taskIndex = array.tasks.indexOf(taskIndexFinder);\n        return array.tasks.splice(taskIndex, 1);\n    };\n    \n    const fillTaskDialog = (task) => {\n        //add values of task to filled modal.\n        document.querySelector(\"#title-edited\").value = task.title;\n        document.querySelector(\"#description-edited\").value = task.description;\n        document.querySelector(\"#date-edited\").value = task.dueDate;\n    };\n    \n    const taskUpdate = (task) => {\n        //run a condition because editing is removing the reference by making task == \"\"\n        if(task != \"\") {\n            task.title = document.querySelector(\"#title-edited\").value;\n            task.description = document.querySelector(\"#description-edited\").value;\n            task.dueDate = document.querySelector(\"#date-edited\").value;\n            task.priority = document.querySelector(\"#priority-edited\").value;\n        };\n        \n    };\n\n    return {taskCreator, taskLoader, taskRemover, fillTaskDialog, taskUpdate};\n    \n})();\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

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