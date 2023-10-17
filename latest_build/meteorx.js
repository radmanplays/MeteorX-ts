/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chat.ts":
/*!*********************!*\
  !*** ./src/chat.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.displayToChat = void 0;
function displayToChat(message) {
    // @ts-ignore
    PluginAPI.displayToChat({ msg: message });
}
exports.displayToChat = displayToChat;


/***/ }),

/***/ "./src/gui.ts":
/*!********************!*\
  !*** ./src/gui.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registergui = void 0;
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
        gui.innerHTML = "\n      <gui id=\"myGui\" style=\"width: 100%;height: 100%;position: fixed;top: 0px;left: 0px;z-index: 10;color: white;font-family: Minecraftia, sans-serif;overflow: hidden scroll;background-color: rgba(80, 80, 80, 0.42);background-blend-mode: multiply;background-size: 64px;\">\n      <h1 style=\"text-shadow: 0px 0px 4px;\">MeteorX GUI</h1>\n      <p style=\"font-size: 0.8rem; color: yellow;\">(totally not stollen from plugin manager's gui)</p><p style=\"font-size: 0.8rem; color: yellow;\">ik the gui looks kinda bad for a hacked client but its meteorX alpha ig. i WILL update this gui in the future</p><p style=\"font-size: 0.8rem; color: orangered;\">click on \"Activate\" to activate a hack and click on \"Deactivate\" to deactivate a hack</p>\n      <table style=\"table-layout: fixed; width: 100%;\">\n          <tbody><tr style=\"background: rgb(80, 80, 80);\">\n              <th style=\"text-align: center;\">hax</th>\n              <th style=\"text-align: center; width: 15%;\">active/deactive</th>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Jetpack (hold space to fly) \uD83C\uDF92\uD83D\uDCA8</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"jetpack\">Activate</td>\n          </tr>\n      </tbody></table>\n      <a style=\"background: transparent; text-align: center; color: yellow; cursor: pointer; font-family: Minecraftia, sans-serif; text-decoration: underline; border: 0px; margin-right: 1rem; font-size: 1rem;\" href=\"https://github.com/radmanplays/MeteorX/issues/new\" target=\"_blank\">suggest a new feature/hack</a>\n      <a style=\"background: transparent;text-align: center;color: orange;cursor: pointer;font-family: Minecraftia, sans-serif;text-decoration: underline;border: 0px;font-size: 1rem;\" href=\"https://github.com/orgs/EaglerReborn/discussions/9\" target=\"_blank\">version Roadmap</a>\n      \n        </gui>\n      "; // Set the HTML content of the "gui" element
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
        jetpackElement.addEventListener("mouseover", function () {
            jetpackElement.style.cursor = "pointer";
        });
        if (jetpackguiactive === false) {
            jetpackElement.innerText = "Activate";
            jetpackElement.style.backgroundColor = "green";
        }
        if (jetpackguiactive === true) {
            jetpackElement.innerText = "Deactivate";
            jetpackElement.style.backgroundColor = "red";
        }
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerSpider = void 0;
var chat_1 = __webpack_require__(/*! ./chat */ "./src/chat.ts");
function registerSpider() {
    var spiderToggle = false;
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
    PluginAPI.addEventListener("key", function (event) {
        //@ ts-ignore
        if (event.key == 22) {
            spiderToggle = !spiderToggle;
            if (spiderToggle == true) {
                (0, chat_1.displayToChat)("§d§l[MeteorX] §r§eEnabled spider.");
            }
            else {
                (0, chat_1.displayToChat)("§d§l[MeteorX] §r§eDisabled spider.");
            }
        }
    });
}
exports.registerSpider = registerSpider;


/***/ }),

/***/ "./src/step.ts":
/*!*********************!*\
  !*** ./src/step.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerStep = void 0;
var chat_1 = __webpack_require__(/*! ./chat */ "./src/chat.ts");
function registerStep() {
    var stepToggle = false;
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
    PluginAPI.addEventListener("key", function (event) {
        if (event.key == 47) {
            stepToggle = !stepToggle;
            if (stepToggle == true) {
                (0, chat_1.displayToChat)("§d§l[MeteorX] §r§eEnabled step.");
            }
            else {
                (0, chat_1.displayToChat)("§d§l[MeteorX] §r§eDisabled step.");
            }
        }
    });
}
exports.registerStep = registerStep;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVksbUJBQU8sQ0FBQywyQkFBTztBQUMzQixlQUFlLG1CQUFPLENBQUMsaUNBQVU7QUFDakMsYUFBYSxtQkFBTyxDQUFDLDZCQUFRO0FBQzdCLGdCQUFnQixtQkFBTyxDQUFDLG1DQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9jaGF0LnRzIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvZ3VpLnRzIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvamV0cGFjay50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL3NwaWRlci50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL3N0ZXAudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRpc3BsYXlUb0NoYXQgPSB2b2lkIDA7XG5mdW5jdGlvbiBkaXNwbGF5VG9DaGF0KG1lc3NhZ2UpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmRpc3BsYXlUb0NoYXQoeyBtc2c6IG1lc3NhZ2UgfSk7XG59XG5leHBvcnRzLmRpc3BsYXlUb0NoYXQgPSBkaXNwbGF5VG9DaGF0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlZ2lzdGVyZ3VpID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVnaXN0ZXJndWkoamV0cGFja2d1aWFjdGl2ZSkge1xuICAgIHZhciBndWlWaXNpYmxlID0gZmFsc2U7IC8vIFZhcmlhYmxlIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHZpc2liaWxpdHkgb2YgdGhlIEdVSVxuICAgIGZ1bmN0aW9uIHRvZ2dsZUd1aSgpIHtcbiAgICAgICAgaWYgKGd1aVZpc2libGUpIHsgLy8gSWYgdGhlIEdVSSBpcyB2aXNpYmxlXG4gICAgICAgICAgICBoaWRlR3VpKCk7IC8vIEhpZGUgdGhlIEdVSVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hvd0d1aSgpOyAvLyBPdGhlcndpc2UsIHNob3cgdGhlIEdVSVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNob3dHdWkoKSB7XG4gICAgICAgIGhpZGVHdWkoKTsgLy8gSWYgdGhlIEdVSSBpcyBhbHJlYWR5IG9wZW4sIHRoaXMgd2lsbCBoaWRlIGl0LlxuICAgICAgICB2YXIgZ3VpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImd1aVwiKTsgLy8gQ3JlYXRlIGEgbmV3IFwiZ3VpXCIgZWxlbWVudFxuICAgICAgICBndWkuaW5uZXJIVE1MID0gXCJcXG4gICAgICA8Z3VpIGlkPVxcXCJteUd1aVxcXCIgc3R5bGU9XFxcIndpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtwb3NpdGlvbjogZml4ZWQ7dG9wOiAwcHg7bGVmdDogMHB4O3otaW5kZXg6IDEwO2NvbG9yOiB3aGl0ZTtmb250LWZhbWlseTogTWluZWNyYWZ0aWEsIHNhbnMtc2VyaWY7b3ZlcmZsb3c6IGhpZGRlbiBzY3JvbGw7YmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODAsIDgwLCAwLjQyKTtiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O2JhY2tncm91bmQtc2l6ZTogNjRweDtcXFwiPlxcbiAgICAgIDxoMSBzdHlsZT1cXFwidGV4dC1zaGFkb3c6IDBweCAwcHggNHB4O1xcXCI+TWV0ZW9yWCBHVUk8L2gxPlxcbiAgICAgIDxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuOHJlbTsgY29sb3I6IHllbGxvdztcXFwiPih0b3RhbGx5IG5vdCBzdG9sbGVuIGZyb20gcGx1Z2luIG1hbmFnZXIncyBndWkpPC9wPjxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuOHJlbTsgY29sb3I6IHllbGxvdztcXFwiPmlrIHRoZSBndWkgbG9va3Mga2luZGEgYmFkIGZvciBhIGhhY2tlZCBjbGllbnQgYnV0IGl0cyBtZXRlb3JYIGFscGhhIGlnLiBpIFdJTEwgdXBkYXRlIHRoaXMgZ3VpIGluIHRoZSBmdXR1cmU8L3A+PHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44cmVtOyBjb2xvcjogb3JhbmdlcmVkO1xcXCI+Y2xpY2sgb24gXFxcIkFjdGl2YXRlXFxcIiB0byBhY3RpdmF0ZSBhIGhhY2sgYW5kIGNsaWNrIG9uIFxcXCJEZWFjdGl2YXRlXFxcIiB0byBkZWFjdGl2YXRlIGEgaGFjazwvcD5cXG4gICAgICA8dGFibGUgc3R5bGU9XFxcInRhYmxlLWxheW91dDogZml4ZWQ7IHdpZHRoOiAxMDAlO1xcXCI+XFxuICAgICAgICAgIDx0Ym9keT48dHIgc3R5bGU9XFxcImJhY2tncm91bmQ6IHJnYig4MCwgODAsIDgwKTtcXFwiPlxcbiAgICAgICAgICAgICAgPHRoIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIj5oYXg8L3RoPlxcbiAgICAgICAgICAgICAgPHRoIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXI7IHdpZHRoOiAxNSU7XFxcIj5hY3RpdmUvZGVhY3RpdmU8L3RoPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8dHIgc3R5bGU9XFxcImJveC1zaGFkb3c6IGdyZXkgMHB4IDJweCAwcHg7XFxcIj5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IHRleHQ7YmFja2dyb3VuZC1jb2xvcjogIzlkMDBmZjMwO1xcXCI+SmV0cGFjayAoaG9sZCBzcGFjZSB0byBmbHkpIFxcdUQ4M0NcXHVERjkyXFx1RDgzRFxcdURDQTg8L3RkPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIiBpZD1cXFwiamV0cGFja1xcXCI+QWN0aXZhdGU8L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgIDwvdGJvZHk+PC90YWJsZT5cXG4gICAgICA8YSBzdHlsZT1cXFwiYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHllbGxvdzsgY3Vyc29yOiBwb2ludGVyOyBmb250LWZhbWlseTogTWluZWNyYWZ0aWEsIHNhbnMtc2VyaWY7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBib3JkZXI6IDBweDsgbWFyZ2luLXJpZ2h0OiAxcmVtOyBmb250LXNpemU6IDFyZW07XFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vcmFkbWFucGxheXMvTWV0ZW9yWC9pc3N1ZXMvbmV3XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+c3VnZ2VzdCBhIG5ldyBmZWF0dXJlL2hhY2s8L2E+XFxuICAgICAgPGEgc3R5bGU9XFxcImJhY2tncm91bmQ6IHRyYW5zcGFyZW50O3RleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogb3JhbmdlO2N1cnNvcjogcG9pbnRlcjtmb250LWZhbWlseTogTWluZWNyYWZ0aWEsIHNhbnMtc2VyaWY7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Ym9yZGVyOiAwcHg7Zm9udC1zaXplOiAxcmVtO1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL29yZ3MvRWFnbGVyUmVib3JuL2Rpc2N1c3Npb25zLzlcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj52ZXJzaW9uIFJvYWRtYXA8L2E+XFxuICAgICAgXFxuICAgICAgICA8L2d1aT5cXG4gICAgICBcIjsgLy8gU2V0IHRoZSBIVE1MIGNvbnRlbnQgb2YgdGhlIFwiZ3VpXCIgZWxlbWVudFxuICAgICAgICBndWkuaWQgPSBcIm15R3VpXCI7IC8vIFNldCB0aGUgSUQgb2YgdGhlIFwiZ3VpXCIgZWxlbWVudCB0byBcIm15R3VpXCJcbiAgICAgICAgZ3VpLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICBndWkuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICBndWkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBndWkuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIGd1aS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIGd1aS5zdHlsZS56SW5kZXggPSAnMTAnO1xuICAgICAgICBndWkuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICBndWkuc3R5bGUuZm9udEZhbWlseSA9ICdNaW5lY3JhZnRpYSwgc2Fucy1zZXJpZic7XG4gICAgICAgIGd1aS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4gc2Nyb2xsJztcbiAgICAgICAgZ3VpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDgwLCA4MCwgODAsIDAuNDIpJztcbiAgICAgICAgZ3VpLnN0eWxlLmJhY2tncm91bmRCbGVuZE1vZGUgPSAnbXVsdGlwbHknO1xuICAgICAgICBndWkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnNjRweCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ3VpKTsgLy8gQXBwZW5kIHRoZSBcImd1aVwiIGVsZW1lbnQgdG8gdGhlIGJvZHkgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgIGd1aVZpc2libGUgPSB0cnVlOyAvLyBTZXQgdGhlIEdVSSB2aXNpYmlsaXR5IHRvIHRydWVcbiAgICAgICAgdmFyIGpldHBhY2tFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqZXRwYWNrXCIpO1xuICAgICAgICBqZXRwYWNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGpldHBhY2tndWlhY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGpldHBhY2tndWlhY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBqZXRwYWNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gVG9nZ2xlIHRoZSBqZXRwYWNrR3VpQWN0aXZlIHN0YXRlXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRleHQgYW5kIGJhY2tncm91bmQgY29sb3IgYmFzZWQgb24gdGhlIHN0YXRlXG4gICAgICAgICAgICBpZiAoamV0cGFja2d1aWFjdGl2ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgamV0cGFja2d1aWFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgIGpldHBhY2tndWlhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhpZGVHdWkoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15R3VpXCIpKSB7IC8vIElmIHRoZSBcIm15R3VpXCIgZWxlbWVudCBleGlzdHNcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlHdWlcIikucmVtb3ZlKCk7IC8vIFJlbW92ZSB0aGUgXCJteUd1aVwiIGVsZW1lbnQgZnJvbSB0aGUgZG9jdW1lbnRcbiAgICAgICAgfVxuICAgICAgICBndWlWaXNpYmxlID0gZmFsc2U7IC8vIFNldCB0aGUgR1VJIHZpc2liaWxpdHkgdG8gZmFsc2VcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIlNoaWZ0XCIgJiYgZXZlbnQubG9jYXRpb24gPT09IEtleWJvYXJkRXZlbnQuRE9NX0tFWV9MT0NBVElPTl9SSUdIVCkgeyAvLyBJZiB0aGUgcmlnaHQgU2hpZnQga2V5IGlzIHByZXNzZWRcbiAgICAgICAgICAgIHRvZ2dsZUd1aSgpOyAvLyBUb2dnbGUgdGhlIEdVSSB2aXNpYmlsaXR5XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikgeyAvLyBJZiB0aGUgRXNjYXBlIGtleSBpcyBwcmVzc2VkXG4gICAgICAgICAgICBoaWRlR3VpKCk7IC8vIEhpZGUgdGhlIEdVSVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyZ3VpID0gcmVnaXN0ZXJndWk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVnaXN0ZXJqZXRwYWNrID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVnaXN0ZXJqZXRwYWNrKGpldHBhY2tndWlhY3RpdmUpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkucmVxdWlyZShcInBsYXllclwiKTtcbiAgICB2YXIgamV0cGFja0FjdGl2ZSA9IGZhbHNlO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSBcIiBcIikge1xuICAgICAgICAgICAgamV0cGFja0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICBqZXRwYWNrQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChqZXRwYWNrZ3VpYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKCFqZXRwYWNrQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLm1vdGlvblkgKz0gMC4yO1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyamV0cGFjayA9IHJlZ2lzdGVyamV0cGFjaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWdpc3RlclNwaWRlciA9IHZvaWQgMDtcbnZhciBjaGF0XzEgPSByZXF1aXJlKFwiLi9jaGF0XCIpO1xuZnVuY3Rpb24gcmVnaXN0ZXJTcGlkZXIoKSB7XG4gICAgdmFyIHNwaWRlclRvZ2dsZSA9IGZhbHNlO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkucmVxdWlyZShcInBsYXllclwiKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChQbHVnaW5BUEkucGxheWVyLmlzQ29sbGlkZWRIb3Jpem9udGFsbHkgJiYgc3BpZGVyVG9nZ2xlID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIubW90aW9uWSA9IDAuMjtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vQCB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAyMikge1xuICAgICAgICAgICAgc3BpZGVyVG9nZ2xlID0gIXNwaWRlclRvZ2dsZTtcbiAgICAgICAgICAgIGlmIChzcGlkZXJUb2dnbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICgwLCBjaGF0XzEuZGlzcGxheVRvQ2hhdCkoXCLCp2TCp2xbTWV0ZW9yWF0gwqdywqdlRW5hYmxlZCBzcGlkZXIuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgKDAsIGNoYXRfMS5kaXNwbGF5VG9DaGF0KShcIsKnZMKnbFtNZXRlb3JYXSDCp3LCp2VEaXNhYmxlZCBzcGlkZXIuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyU3BpZGVyID0gcmVnaXN0ZXJTcGlkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVnaXN0ZXJTdGVwID0gdm9pZCAwO1xudmFyIGNoYXRfMSA9IHJlcXVpcmUoXCIuL2NoYXRcIik7XG5mdW5jdGlvbiByZWdpc3RlclN0ZXAoKSB7XG4gICAgdmFyIHN0ZXBUb2dnbGUgPSBmYWxzZTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc3RlcFRvZ2dsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnN0ZXBIZWlnaHQgPSAxO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IDAuNTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT0gNDcpIHtcbiAgICAgICAgICAgIHN0ZXBUb2dnbGUgPSAhc3RlcFRvZ2dsZTtcbiAgICAgICAgICAgIGlmIChzdGVwVG9nZ2xlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAoMCwgY2hhdF8xLmRpc3BsYXlUb0NoYXQpKFwiwqdkwqdsW01ldGVvclhdIMKncsKnZUVuYWJsZWQgc3RlcC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAoMCwgY2hhdF8xLmRpc3BsYXlUb0NoYXQpKFwiwqdkwqdsW01ldGVvclhdIMKncsKnZURpc2FibGVkIHN0ZXAuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyU3RlcCA9IHJlZ2lzdGVyU3RlcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBndWlfMSA9IHJlcXVpcmUoXCIuL2d1aVwiKTtcbnZhciBzcGlkZXJfMSA9IHJlcXVpcmUoXCIuL3NwaWRlclwiKTtcbnZhciBzdGVwXzEgPSByZXF1aXJlKFwiLi9zdGVwXCIpO1xudmFyIGpldHBhY2tfMSA9IHJlcXVpcmUoXCIuL2pldHBhY2tcIik7XG52YXIgamV0cGFja2d1aWFjdGl2ZSA9IGZhbHNlO1xuY29uc29sZS5sb2coXCJbTWV0ZW9yWF0gTG9hZGluZyBjbGllbnQuLi5cIik7XG4oMCwgZ3VpXzEucmVnaXN0ZXJndWkpKGpldHBhY2tndWlhY3RpdmUpO1xuKDAsIGpldHBhY2tfMS5yZWdpc3RlcmpldHBhY2spKGpldHBhY2tndWlhY3RpdmUpO1xuKDAsIHNwaWRlcl8xLnJlZ2lzdGVyU3BpZGVyKSgpO1xuKDAsIHN0ZXBfMS5yZWdpc3RlclN0ZXApKCk7XG5jb25zb2xlLmxvZyhcIltNZXRlb3JYXSBGaW5pc2hlZCFcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=