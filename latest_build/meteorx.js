/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gui.ts":
/*!********************!*\
  !*** ./src/gui.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registergui = void 0;
var step_1 = __webpack_require__(/*! ./step */ "./src/step.ts");
function registergui(jetpackguiactive) {
    var guiVisible = false; // Variable to keep track of the visibility of the GUI
    function toggleGui() {
        if (guiVisible) { // If the GUI is visible
            hideGui(); // Hide the GUI
        }
        else {
            showGui(); // Otherwise, show the GUI
        }
    }
    function showGui() {
        hideGui(); // If the GUI is already open, this will hide it.
        var gui = document.createElement("gui"); // Create a new "gui" element
        if (document.pointerLockElement != null) {
            document.exitPointerLock();
        }
        gui.innerHTML = "\n      <gui id=\"myGui\" style=\"width: 100%;height: 100%;position: fixed;top: 0px;left: 0px;z-index: 10;color: white;font-family: Minecraftia, sans-serif;overflow: hidden scroll;background-color: rgba(80, 80, 80, 0.42);background-blend-mode: multiply;background-size: 64px;\">\n      <h1 style=\"text-shadow: 0px 0px 4px;\">MeteorX GUI</h1>\n      <p style=\"font-size: 0.8rem; color: yellow;\">(totally not stollen from plugin manager's gui)</p><p style=\"font-size: 0.8rem; color: yellow;\">ik the gui looks kinda bad for a hacked client but its meteorX alpha ig. i WILL update this gui in the future</p><p style=\"font-size: 0.8rem; color: orangered;\">click on \"Activate\" to activate a hack and click on \"Deactivate\" to deactivate a hack</p>\n      <table style=\"table-layout: fixed; width: 100%;\">\n          <tbody><tr style=\"background: rgb(80, 80, 80);\">\n              <th style=\"text-align: center;\">hax</th>\n              <th style=\"text-align: center; width: 15%;\">active/deactive</th>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Jetpack (hold space to fly) \uD83C\uDF92\uD83D\uDCA8</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"jetpack\">Activate</td>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Step\uD83E\uDE9C</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"step\">Activate</td>\n          </tr>\n      </tbody></table>\n      <a style=\"background: transparent; text-align: center; color: yellow; cursor: pointer; font-family: Minecraftia, sans-serif; text-decoration: underline; border: 0px; margin-right: 1rem; font-size: 1rem;\" href=\"https://github.com/radmanplays/MeteorX/issues/new\" target=\"_blank\">suggest a new feature/hack</a>\n      <a style=\"background: transparent;text-align: center;color: orange;cursor: pointer;font-family: Minecraftia, sans-serif;text-decoration: underline;border: 0px;font-size: 1rem;\" href=\"https://github.com/orgs/EaglerReborn/discussions/9\" target=\"_blank\">version Roadmap</a>\n      \n        </gui>\n      "; // Set the HTML content of the "gui" element
        gui.id = "myGui"; // Set the ID of the "gui" element to "myGui"
        gui.style.width = '100%';
        gui.style.height = '100%';
        gui.style.position = 'fixed';
        gui.style.top = '0px';
        gui.style.left = '0px';
        gui.style.zIndex = '10';
        gui.style.color = 'white';
        gui.style.fontFamily = 'Minecraftia, sans-serif';
        gui.style.overflow = 'hidden scroll';
        gui.style.backgroundColor = 'rgba(80, 80, 80, 0.42)';
        gui.style.backgroundBlendMode = 'multiply';
        gui.style.backgroundSize = '64px';
        document.body.appendChild(gui); // Append the "gui" element to the body of the document
        guiVisible = true; // Set the GUI visibility to true
        var jetpackElement = document.getElementById("jetpack");
        var stepElement = document.getElementById("step");
        jetpackElement.addEventListener("mouseover", function () {
            jetpackElement.style.cursor = "pointer";
        });
        stepElement.addEventListener("mouseover", function () {
            stepElement.style.cursor = "pointer";
        });
        if (jetpackguiactive === false) {
            jetpackElement.innerText = "Activate";
            jetpackElement.style.backgroundColor = "green";
        }
        if ((0, step_1.returnStepToggle)() === false) {
            stepElement.innerText = "Activate";
            stepElement.style.backgroundColor = "green";
        }
        if (jetpackguiactive === true) {
            jetpackElement.innerText = "Deactivate";
            jetpackElement.style.backgroundColor = "red";
        }
        if ((0, step_1.returnStepToggle)() === true) {
            stepElement.innerText = "Deactivate";
            stepElement.style.backgroundColor = "red";
        }
        stepElement.addEventListener("click", function () {
            if ((0, step_1.returnStepToggle)() !== true) {
                stepElement.innerText = "Deactivate";
                stepElement.style.backgroundColor = "red";
                (0, step_1.setStepToggle)(true);
            }
            else {
                stepElement.innerText = "Activate";
                stepElement.style.backgroundColor = "green";
                (0, step_1.setStepToggle)(false);
            }
        });
        jetpackElement.addEventListener("click", function () {
            // Toggle the jetpackGuiActive state
            // Update the text and background color based on the state
            if (jetpackguiactive !== true) {
                jetpackElement.innerText = "Deactivate";
                jetpackElement.style.backgroundColor = "red";
                jetpackguiactive = true;
            }
            else {
                jetpackElement.innerText = "Activate";
                jetpackElement.style.backgroundColor = "green";
                jetpackguiactive = false;
            }
        });
    }
    function hideGui() {
        if (document.getElementById("myGui")) { // If the "myGui" element exists
            document.getElementById("myGui").remove(); // Remove the "myGui" element from the document
        }
        guiVisible = false; // Set the GUI visibility to false
    }
    window.addEventListener("keydown", function (event) {
        if (event.key === "Shift" && event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) { // If the right Shift key is pressed
            toggleGui(); // Toggle the GUI visibility
        }
        if (event.key === "Escape") { // If the Escape key is pressed
            hideGui(); // Hide the GUI
        }
    });
}
exports.registergui = registergui;


/***/ }),

/***/ "./src/jetpack.ts":
/*!************************!*\
  !*** ./src/jetpack.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerjetpack = void 0;
function registerjetpack(jetpackguiactive) {
    //@ts-ignore
    PluginAPI.require("player");
    var jetpackActive = false;
    window.addEventListener("keydown", function (event) {
        if (event.key.toLowerCase() === " ") {
            jetpackActive = true;
        }
    });
    window.addEventListener("keyup", function (event) {
        if (event.key.toLowerCase() === " ") {
            jetpackActive = false;
        }
    });
    //@ts-ignore
    PluginAPI.addEventListener("update", function () {
        if (jetpackguiactive === false) {
            if (!jetpackActive) {
                return;
            }
            //@ts-ignore
            PluginAPI.player.motionY += 0.2;
            //@ts-ignore
            PluginAPI.player.reload();
        }
    });
}
exports.registerjetpack = registerjetpack;


/***/ }),

/***/ "./src/spider.ts":
/*!***********************!*\
  !*** ./src/spider.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.returnSpiderToggle = exports.setSpiderToggle = exports.registerSpider = void 0;
var spiderToggle = false;
function registerSpider() {
    // @ts-ignore
    PluginAPI.require("player");
    // @ts-ignore
    PluginAPI.addEventListener("update", function () {
        // @ts-ignore
        if (PluginAPI.player.isCollidedHorizontally && spiderToggle == true) {
            // @ts-ignore
            PluginAPI.player.motionY = 0.2;
            // @ts-ignore
            PluginAPI.player.reload();
        }
    });
    // @ts-ignore
    //PluginAPI.addEventListener("key", (event) => {
    //@ ts-ignore
    //if (event.key == 22) {
    //spiderToggle = !spiderToggle
    //if (spiderToggle == true) {
    //displayToChat("§d§l[MeteorX] §r§eEnabled spider.")
    //} else {
    //displayToChat("§d§l[MeteorX] §r§eDisabled spider.")
    //}
}
exports.registerSpider = registerSpider;
//})
//}
function setSpiderToggle(theBoolean) {
    spiderToggle = theBoolean; // yw radman :3
}
exports.setSpiderToggle = setSpiderToggle;
function returnSpiderToggle() {
    return spiderToggle;
}
exports.returnSpiderToggle = returnSpiderToggle;


/***/ }),

/***/ "./src/step.ts":
/*!*********************!*\
  !*** ./src/step.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.returnStepToggle = exports.setStepToggle = exports.registerStep = void 0;
var stepToggle = false;
function registerStep() {
    // @ts-ignore
    PluginAPI.addEventListener("update", function () {
        if (stepToggle == true) {
            // @ts-ignore
            PluginAPI.player.stepHeight = 1;
            // @ts-ignore
            PluginAPI.player.reload();
        }
        else {
            // @ts-ignore
            PluginAPI.player.stepHeight = 0.5;
            // @ts-ignore
            PluginAPI.player.reload();
        }
    });
    // @ts-ignore 
    //PluginAPI.addEventListener("key", (event)=>{ comment out code radman likely won't use
    //if (event.key == 47) {
    //  stepToggle = !stepToggle;
    // if (stepToggle == true) {
    //   displayToChat("§d§l[MeteorX] §r§eEnabled step.")
    // } else {
    //    displayToChat("§d§l[MeteorX] §r§eDisabled step.")
    // }
    // }
    //  })
}
exports.registerStep = registerStep;
function setStepToggle(theBoolean) {
    stepToggle = theBoolean; // yw radman :3
}
exports.setStepToggle = setStepToggle;
function returnStepToggle() {
    return stepToggle;
}
exports.returnStepToggle = returnStepToggle;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var gui_1 = __webpack_require__(/*! ./gui */ "./src/gui.ts");
var spider_1 = __webpack_require__(/*! ./spider */ "./src/spider.ts");
var step_1 = __webpack_require__(/*! ./step */ "./src/step.ts");
var jetpack_1 = __webpack_require__(/*! ./jetpack */ "./src/jetpack.ts");
var jetpackguiactive = false;
console.log("[MeteorX] Loading client...");
(0, gui_1.registergui)(jetpackguiactive);
(0, jetpack_1.registerjetpack)(jetpackguiactive);
(0, spider_1.registerSpider)();
(0, step_1.registerStep)();
console.log("[MeteorX] Finished!");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7Ozs7OztVQ3hDeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZLG1CQUFPLENBQUMsMkJBQU87QUFDM0IsZUFBZSxtQkFBTyxDQUFDLGlDQUFVO0FBQ2pDLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QixnQkFBZ0IsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21ldGVvcngvLi9zcmMvZ3VpLnRzIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvamV0cGFjay50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL3NwaWRlci50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL3N0ZXAudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlZ2lzdGVyZ3VpID0gdm9pZCAwO1xudmFyIHN0ZXBfMSA9IHJlcXVpcmUoXCIuL3N0ZXBcIik7XG5mdW5jdGlvbiByZWdpc3Rlcmd1aShqZXRwYWNrZ3VpYWN0aXZlKSB7XG4gICAgdmFyIGd1aVZpc2libGUgPSBmYWxzZTsgLy8gVmFyaWFibGUgdG8ga2VlcCB0cmFjayBvZiB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgR1VJXG4gICAgZnVuY3Rpb24gdG9nZ2xlR3VpKCkge1xuICAgICAgICBpZiAoZ3VpVmlzaWJsZSkgeyAvLyBJZiB0aGUgR1VJIGlzIHZpc2libGVcbiAgICAgICAgICAgIGhpZGVHdWkoKTsgLy8gSGlkZSB0aGUgR1VJXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaG93R3VpKCk7IC8vIE90aGVyd2lzZSwgc2hvdyB0aGUgR1VJXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2hvd0d1aSgpIHtcbiAgICAgICAgaGlkZUd1aSgpOyAvLyBJZiB0aGUgR1VJIGlzIGFscmVhZHkgb3BlbiwgdGhpcyB3aWxsIGhpZGUgaXQuXG4gICAgICAgIHZhciBndWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZ3VpXCIpOyAvLyBDcmVhdGUgYSBuZXcgXCJndWlcIiBlbGVtZW50XG4gICAgICAgIGlmIChkb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZ3VpLmlubmVySFRNTCA9IFwiXFxuICAgICAgPGd1aSBpZD1cXFwibXlHdWlcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7cG9zaXRpb246IGZpeGVkO3RvcDogMHB4O2xlZnQ6IDBweDt6LWluZGV4OiAxMDtjb2xvcjogd2hpdGU7Zm9udC1mYW1pbHk6IE1pbmVjcmFmdGlhLCBzYW5zLXNlcmlmO292ZXJmbG93OiBoaWRkZW4gc2Nyb2xsO2JhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDgwLCA4MCwgMC40Mik7YmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtiYWNrZ3JvdW5kLXNpemU6IDY0cHg7XFxcIj5cXG4gICAgICA8aDEgc3R5bGU9XFxcInRleHQtc2hhZG93OiAwcHggMHB4IDRweDtcXFwiPk1ldGVvclggR1VJPC9oMT5cXG4gICAgICA8cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjhyZW07IGNvbG9yOiB5ZWxsb3c7XFxcIj4odG90YWxseSBub3Qgc3RvbGxlbiBmcm9tIHBsdWdpbiBtYW5hZ2VyJ3MgZ3VpKTwvcD48cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjhyZW07IGNvbG9yOiB5ZWxsb3c7XFxcIj5payB0aGUgZ3VpIGxvb2tzIGtpbmRhIGJhZCBmb3IgYSBoYWNrZWQgY2xpZW50IGJ1dCBpdHMgbWV0ZW9yWCBhbHBoYSBpZy4gaSBXSUxMIHVwZGF0ZSB0aGlzIGd1aSBpbiB0aGUgZnV0dXJlPC9wPjxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuOHJlbTsgY29sb3I6IG9yYW5nZXJlZDtcXFwiPmNsaWNrIG9uIFxcXCJBY3RpdmF0ZVxcXCIgdG8gYWN0aXZhdGUgYSBoYWNrIGFuZCBjbGljayBvbiBcXFwiRGVhY3RpdmF0ZVxcXCIgdG8gZGVhY3RpdmF0ZSBhIGhhY2s8L3A+XFxuICAgICAgPHRhYmxlIHN0eWxlPVxcXCJ0YWJsZS1sYXlvdXQ6IGZpeGVkOyB3aWR0aDogMTAwJTtcXFwiPlxcbiAgICAgICAgICA8dGJvZHk+PHRyIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiByZ2IoODAsIDgwLCA4MCk7XFxcIj5cXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT1cXFwidGV4dC1hbGlnbjogY2VudGVyO1xcXCI+aGF4PC90aD5cXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT1cXFwidGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogMTUlO1xcXCI+YWN0aXZlL2RlYWN0aXZlPC90aD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgICAgPHRyIHN0eWxlPVxcXCJib3gtc2hhZG93OiBncmV5IDBweCAycHggMHB4O1xcXCI+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInVzZXItc2VsZWN0OiB0ZXh0O2JhY2tncm91bmQtY29sb3I6ICM5ZDAwZmYzMDtcXFwiPkpldHBhY2sgKGhvbGQgc3BhY2UgdG8gZmx5KSBcXHVEODNDXFx1REY5MlxcdUQ4M0RcXHVEQ0E4PC90ZD5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCIgaWQ9XFxcImpldHBhY2tcXFwiPkFjdGl2YXRlPC90ZD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgICAgPHRyIHN0eWxlPVxcXCJib3gtc2hhZG93OiBncmV5IDBweCAycHggMHB4O1xcXCI+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInVzZXItc2VsZWN0OiB0ZXh0O2JhY2tncm91bmQtY29sb3I6ICM5ZDAwZmYzMDtcXFwiPlN0ZXBcXHVEODNFXFx1REU5QzwvdGQ+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IGdyYXk7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiIGlkPVxcXCJzdGVwXFxcIj5BY3RpdmF0ZTwvdGQ+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgPC90Ym9keT48L3RhYmxlPlxcbiAgICAgIDxhIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogeWVsbG93OyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtZmFtaWx5OiBNaW5lY3JhZnRpYSwgc2Fucy1zZXJpZjsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGJvcmRlcjogMHB4OyBtYXJnaW4tcmlnaHQ6IDFyZW07IGZvbnQtc2l6ZTogMXJlbTtcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9yYWRtYW5wbGF5cy9NZXRlb3JYL2lzc3Vlcy9uZXdcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5zdWdnZXN0IGEgbmV3IGZlYXR1cmUvaGFjazwvYT5cXG4gICAgICA8YSBzdHlsZT1cXFwiYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiBvcmFuZ2U7Y3Vyc29yOiBwb2ludGVyO2ZvbnQtZmFtaWx5OiBNaW5lY3JhZnRpYSwgc2Fucy1zZXJpZjt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtib3JkZXI6IDBweDtmb250LXNpemU6IDFyZW07XFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vb3Jncy9FYWdsZXJSZWJvcm4vZGlzY3Vzc2lvbnMvOVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPnZlcnNpb24gUm9hZG1hcDwvYT5cXG4gICAgICBcXG4gICAgICAgIDwvZ3VpPlxcbiAgICAgIFwiOyAvLyBTZXQgdGhlIEhUTUwgY29udGVudCBvZiB0aGUgXCJndWlcIiBlbGVtZW50XG4gICAgICAgIGd1aS5pZCA9IFwibXlHdWlcIjsgLy8gU2V0IHRoZSBJRCBvZiB0aGUgXCJndWlcIiBlbGVtZW50IHRvIFwibXlHdWlcIlxuICAgICAgICBndWkuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIGd1aS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIGd1aS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIGd1aS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgZ3VpLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgZ3VpLnN0eWxlLnpJbmRleCA9ICcxMCc7XG4gICAgICAgIGd1aS5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgIGd1aS5zdHlsZS5mb250RmFtaWx5ID0gJ01pbmVjcmFmdGlhLCBzYW5zLXNlcmlmJztcbiAgICAgICAgZ3VpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbiBzY3JvbGwnO1xuICAgICAgICBndWkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoODAsIDgwLCA4MCwgMC40MiknO1xuICAgICAgICBndWkuc3R5bGUuYmFja2dyb3VuZEJsZW5kTW9kZSA9ICdtdWx0aXBseSc7XG4gICAgICAgIGd1aS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICc2NHB4JztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChndWkpOyAvLyBBcHBlbmQgdGhlIFwiZ3VpXCIgZWxlbWVudCB0byB0aGUgYm9keSBvZiB0aGUgZG9jdW1lbnRcbiAgICAgICAgZ3VpVmlzaWJsZSA9IHRydWU7IC8vIFNldCB0aGUgR1VJIHZpc2liaWxpdHkgdG8gdHJ1ZVxuICAgICAgICB2YXIgamV0cGFja0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpldHBhY2tcIik7XG4gICAgICAgIHZhciBzdGVwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlcFwiKTtcbiAgICAgICAgamV0cGFja0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0ZXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoamV0cGFja2d1aWFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIHN0ZXBfMS5yZXR1cm5TdGVwVG9nZ2xlKSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgc3RlcEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChqZXRwYWNrZ3VpYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBzdGVwXzEucmV0dXJuU3RlcFRvZ2dsZSkoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RlcEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICBzdGVwRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIHN0ZXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKDAsIHN0ZXBfMS5yZXR1cm5TdGVwVG9nZ2xlKSgpICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc3RlcEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAoMCwgc3RlcF8xLnNldFN0ZXBUb2dnbGUpKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RlcEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIHN0ZXBFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICAoMCwgc3RlcF8xLnNldFN0ZXBUb2dnbGUpKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGpldHBhY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGpldHBhY2tHdWlBY3RpdmUgc3RhdGVcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGV4dCBhbmQgYmFja2dyb3VuZCBjb2xvciBiYXNlZCBvbiB0aGUgc3RhdGVcbiAgICAgICAgICAgIGlmIChqZXRwYWNrZ3VpYWN0aXZlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBqZXRwYWNrZ3VpYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgamV0cGFja2d1aWFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGlkZUd1aSgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlHdWlcIikpIHsgLy8gSWYgdGhlIFwibXlHdWlcIiBlbGVtZW50IGV4aXN0c1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUd1aVwiKS5yZW1vdmUoKTsgLy8gUmVtb3ZlIHRoZSBcIm15R3VpXCIgZWxlbWVudCBmcm9tIHRoZSBkb2N1bWVudFxuICAgICAgICB9XG4gICAgICAgIGd1aVZpc2libGUgPSBmYWxzZTsgLy8gU2V0IHRoZSBHVUkgdmlzaWJpbGl0eSB0byBmYWxzZVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiU2hpZnRcIiAmJiBldmVudC5sb2NhdGlvbiA9PT0gS2V5Ym9hcmRFdmVudC5ET01fS0VZX0xPQ0FUSU9OX1JJR0hUKSB7IC8vIElmIHRoZSByaWdodCBTaGlmdCBrZXkgaXMgcHJlc3NlZFxuICAgICAgICAgICAgdG9nZ2xlR3VpKCk7IC8vIFRvZ2dsZSB0aGUgR1VJIHZpc2liaWxpdHlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7IC8vIElmIHRoZSBFc2NhcGUga2V5IGlzIHByZXNzZWRcbiAgICAgICAgICAgIGhpZGVHdWkoKTsgLy8gSGlkZSB0aGUgR1VJXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVnaXN0ZXJndWkgPSByZWdpc3Rlcmd1aTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWdpc3RlcmpldHBhY2sgPSB2b2lkIDA7XG5mdW5jdGlvbiByZWdpc3RlcmpldHBhY2soamV0cGFja2d1aWFjdGl2ZSkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5yZXF1aXJlKFwicGxheWVyXCIpO1xuICAgIHZhciBqZXRwYWNrQWN0aXZlID0gZmFsc2U7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICBqZXRwYWNrQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGpldHBhY2tBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGpldHBhY2tndWlhY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoIWpldHBhY2tBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIubW90aW9uWSArPSAwLjI7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVnaXN0ZXJqZXRwYWNrID0gcmVnaXN0ZXJqZXRwYWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldHVyblNwaWRlclRvZ2dsZSA9IGV4cG9ydHMuc2V0U3BpZGVyVG9nZ2xlID0gZXhwb3J0cy5yZWdpc3RlclNwaWRlciA9IHZvaWQgMDtcbnZhciBzcGlkZXJUb2dnbGUgPSBmYWxzZTtcbmZ1bmN0aW9uIHJlZ2lzdGVyU3BpZGVyKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkucmVxdWlyZShcInBsYXllclwiKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChQbHVnaW5BUEkucGxheWVyLmlzQ29sbGlkZWRIb3Jpem9udGFsbHkgJiYgc3BpZGVyVG9nZ2xlID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIubW90aW9uWSA9IDAuMjtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgLy9QbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcImtleVwiLCAoZXZlbnQpID0+IHtcbiAgICAvL0AgdHMtaWdub3JlXG4gICAgLy9pZiAoZXZlbnQua2V5ID09IDIyKSB7XG4gICAgLy9zcGlkZXJUb2dnbGUgPSAhc3BpZGVyVG9nZ2xlXG4gICAgLy9pZiAoc3BpZGVyVG9nZ2xlID09IHRydWUpIHtcbiAgICAvL2Rpc3BsYXlUb0NoYXQoXCLCp2TCp2xbTWV0ZW9yWF0gwqdywqdlRW5hYmxlZCBzcGlkZXIuXCIpXG4gICAgLy99IGVsc2Uge1xuICAgIC8vZGlzcGxheVRvQ2hhdChcIsKnZMKnbFtNZXRlb3JYXSDCp3LCp2VEaXNhYmxlZCBzcGlkZXIuXCIpXG4gICAgLy99XG59XG5leHBvcnRzLnJlZ2lzdGVyU3BpZGVyID0gcmVnaXN0ZXJTcGlkZXI7XG4vL30pXG4vL31cbmZ1bmN0aW9uIHNldFNwaWRlclRvZ2dsZSh0aGVCb29sZWFuKSB7XG4gICAgc3BpZGVyVG9nZ2xlID0gdGhlQm9vbGVhbjsgLy8geXcgcmFkbWFuIDozXG59XG5leHBvcnRzLnNldFNwaWRlclRvZ2dsZSA9IHNldFNwaWRlclRvZ2dsZTtcbmZ1bmN0aW9uIHJldHVyblNwaWRlclRvZ2dsZSgpIHtcbiAgICByZXR1cm4gc3BpZGVyVG9nZ2xlO1xufVxuZXhwb3J0cy5yZXR1cm5TcGlkZXJUb2dnbGUgPSByZXR1cm5TcGlkZXJUb2dnbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmV0dXJuU3RlcFRvZ2dsZSA9IGV4cG9ydHMuc2V0U3RlcFRvZ2dsZSA9IGV4cG9ydHMucmVnaXN0ZXJTdGVwID0gdm9pZCAwO1xudmFyIHN0ZXBUb2dnbGUgPSBmYWxzZTtcbmZ1bmN0aW9uIHJlZ2lzdGVyU3RlcCgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc3RlcFRvZ2dsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnN0ZXBIZWlnaHQgPSAxO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IDAuNTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBAdHMtaWdub3JlIFxuICAgIC8vUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlcIiwgKGV2ZW50KT0+eyBjb21tZW50IG91dCBjb2RlIHJhZG1hbiBsaWtlbHkgd29uJ3QgdXNlXG4gICAgLy9pZiAoZXZlbnQua2V5ID09IDQ3KSB7XG4gICAgLy8gIHN0ZXBUb2dnbGUgPSAhc3RlcFRvZ2dsZTtcbiAgICAvLyBpZiAoc3RlcFRvZ2dsZSA9PSB0cnVlKSB7XG4gICAgLy8gICBkaXNwbGF5VG9DaGF0KFwiwqdkwqdsW01ldGVvclhdIMKncsKnZUVuYWJsZWQgc3RlcC5cIilcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgIGRpc3BsYXlUb0NoYXQoXCLCp2TCp2xbTWV0ZW9yWF0gwqdywqdlRGlzYWJsZWQgc3RlcC5cIilcbiAgICAvLyB9XG4gICAgLy8gfVxuICAgIC8vICB9KVxufVxuZXhwb3J0cy5yZWdpc3RlclN0ZXAgPSByZWdpc3RlclN0ZXA7XG5mdW5jdGlvbiBzZXRTdGVwVG9nZ2xlKHRoZUJvb2xlYW4pIHtcbiAgICBzdGVwVG9nZ2xlID0gdGhlQm9vbGVhbjsgLy8geXcgcmFkbWFuIDozXG59XG5leHBvcnRzLnNldFN0ZXBUb2dnbGUgPSBzZXRTdGVwVG9nZ2xlO1xuZnVuY3Rpb24gcmV0dXJuU3RlcFRvZ2dsZSgpIHtcbiAgICByZXR1cm4gc3RlcFRvZ2dsZTtcbn1cbmV4cG9ydHMucmV0dXJuU3RlcFRvZ2dsZSA9IHJldHVyblN0ZXBUb2dnbGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ3VpXzEgPSByZXF1aXJlKFwiLi9ndWlcIik7XG52YXIgc3BpZGVyXzEgPSByZXF1aXJlKFwiLi9zcGlkZXJcIik7XG52YXIgc3RlcF8xID0gcmVxdWlyZShcIi4vc3RlcFwiKTtcbnZhciBqZXRwYWNrXzEgPSByZXF1aXJlKFwiLi9qZXRwYWNrXCIpO1xudmFyIGpldHBhY2tndWlhY3RpdmUgPSBmYWxzZTtcbmNvbnNvbGUubG9nKFwiW01ldGVvclhdIExvYWRpbmcgY2xpZW50Li4uXCIpO1xuKDAsIGd1aV8xLnJlZ2lzdGVyZ3VpKShqZXRwYWNrZ3VpYWN0aXZlKTtcbigwLCBqZXRwYWNrXzEucmVnaXN0ZXJqZXRwYWNrKShqZXRwYWNrZ3VpYWN0aXZlKTtcbigwLCBzcGlkZXJfMS5yZWdpc3RlclNwaWRlcikoKTtcbigwLCBzdGVwXzEucmVnaXN0ZXJTdGVwKSgpO1xuY29uc29sZS5sb2coXCJbTWV0ZW9yWF0gRmluaXNoZWQhXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9