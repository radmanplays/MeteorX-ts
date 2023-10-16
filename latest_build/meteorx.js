/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
var jetpack_1 = __webpack_require__(/*! ./jetpack */ "./src/jetpack.ts");
var jetpackguiactive = false;
console.log("[MeteorX] Loading client...");
(0, gui_1.registergui)(jetpackguiactive);
(0, jetpack_1.registerjetpack)(jetpackguiactive);
console.log("[MeteorX] Finished!");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0ZW9yeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CO0FBQ25CO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsMEJBQTBCO0FBQzFCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixpREFBaUQ7QUFDakQsdUVBQXVFLGFBQWEsZ0JBQWdCLFNBQVMsVUFBVSxZQUFZLGFBQWEscUNBQXFDLHdCQUF3Qix5Q0FBeUMsZ0NBQWdDLHNCQUFzQixnREFBZ0QseURBQXlELGNBQWMsb0ZBQW9GLGNBQWMsa0pBQWtKLGlCQUFpQiw0SUFBNEksWUFBWSw4REFBOEQsa0RBQWtELDJEQUEyRCxXQUFXLDZGQUE2RixpREFBaUQsNEJBQTRCLGdIQUFnSCxtQkFBbUIsb0hBQW9ILG9CQUFvQixlQUFlLGlCQUFpQixzQ0FBc0MsNEJBQTRCLGFBQWEsb0JBQW9CLGdCQUFnQix5SkFBeUosbUJBQW1CLGNBQWMsZ0JBQWdCLHFDQUFxQywyQkFBMkIsWUFBWSxnQkFBZ0IsdUlBQXVJO0FBQzMrRCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsdURBQXVEO0FBQ3ZEO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxnR0FBZ0c7QUFDaEcseUJBQXlCO0FBQ3pCO0FBQ0Esc0NBQXNDO0FBQ3RDLHVCQUF1QjtBQUN2QjtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQjs7Ozs7Ozs7Ozs7QUMxRU47QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHVCQUF1Qjs7Ozs7OztVQzlCdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZLG1CQUFPLENBQUMsMkJBQU87QUFDM0IsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21ldGVvcngvLi9zcmMvZ3VpLnRzIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvamV0cGFjay50cyIsIndlYnBhY2s6Ly9tZXRlb3J4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVnaXN0ZXJndWkgPSB2b2lkIDA7XG5mdW5jdGlvbiByZWdpc3Rlcmd1aShqZXRwYWNrZ3VpYWN0aXZlKSB7XG4gICAgdmFyIGd1aVZpc2libGUgPSBmYWxzZTsgLy8gVmFyaWFibGUgdG8ga2VlcCB0cmFjayBvZiB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgR1VJXG4gICAgZnVuY3Rpb24gdG9nZ2xlR3VpKCkge1xuICAgICAgICBpZiAoZ3VpVmlzaWJsZSkgeyAvLyBJZiB0aGUgR1VJIGlzIHZpc2libGVcbiAgICAgICAgICAgIGhpZGVHdWkoKTsgLy8gSGlkZSB0aGUgR1VJXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaG93R3VpKCk7IC8vIE90aGVyd2lzZSwgc2hvdyB0aGUgR1VJXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2hvd0d1aSgpIHtcbiAgICAgICAgaGlkZUd1aSgpOyAvLyBJZiB0aGUgR1VJIGlzIGFscmVhZHkgb3BlbiwgdGhpcyB3aWxsIGhpZGUgaXQuXG4gICAgICAgIHZhciBndWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZ3VpXCIpOyAvLyBDcmVhdGUgYSBuZXcgXCJndWlcIiBlbGVtZW50XG4gICAgICAgIGd1aS5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxndWkgaWQ9XFxcIm15R3VpXFxcIiBzdHlsZT1cXFwid2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDBweDtsZWZ0OiAwcHg7ei1pbmRleDogMTA7Y29sb3I6IHdoaXRlO2ZvbnQtZmFtaWx5OiBNaW5lY3JhZnRpYSwgc2Fucy1zZXJpZjtvdmVyZmxvdzogaGlkZGVuIHNjcm9sbDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIDAuNDIpO2JhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7YmFja2dyb3VuZC1zaXplOiA2NHB4O1xcXCI+XFxuICAgICAgPGgxIHN0eWxlPVxcXCJ0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHg7XFxcIj5NZXRlb3JYIEdVSTwvaDE+XFxuICAgICAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44cmVtOyBjb2xvcjogeWVsbG93O1xcXCI+KHRvdGFsbHkgbm90IHN0b2xsZW4gZnJvbSBwbHVnaW4gbWFuYWdlcidzIGd1aSk8L3A+PHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44cmVtOyBjb2xvcjogeWVsbG93O1xcXCI+aWsgdGhlIGd1aSBsb29rcyBraW5kYSBiYWQgZm9yIGEgaGFja2VkIGNsaWVudCBidXQgaXRzIG1ldGVvclggYWxwaGEgaWcuIGkgV0lMTCB1cGRhdGUgdGhpcyBndWkgaW4gdGhlIGZ1dHVyZTwvcD48cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjhyZW07IGNvbG9yOiBvcmFuZ2VyZWQ7XFxcIj5jbGljayBvbiBcXFwiQWN0aXZhdGVcXFwiIHRvIGFjdGl2YXRlIGEgaGFjayBhbmQgY2xpY2sgb24gXFxcIkRlYWN0aXZhdGVcXFwiIHRvIGRlYWN0aXZhdGUgYSBoYWNrPC9wPlxcbiAgICAgIDx0YWJsZSBzdHlsZT1cXFwidGFibGUtbGF5b3V0OiBmaXhlZDsgd2lkdGg6IDEwMCU7XFxcIj5cXG4gICAgICAgICAgPHRib2R5Pjx0ciBzdHlsZT1cXFwiYmFja2dyb3VuZDogcmdiKDgwLCA4MCwgODApO1xcXCI+XFxuICAgICAgICAgICAgICA8dGggc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlcjtcXFwiPmhheDwvdGg+XFxuICAgICAgICAgICAgICA8dGggc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDE1JTtcXFwiPmFjdGl2ZS9kZWFjdGl2ZTwvdGg+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDx0ciBzdHlsZT1cXFwiYm94LXNoYWRvdzogZ3JleSAwcHggMnB4IDBweDtcXFwiPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogdGV4dDtiYWNrZ3JvdW5kLWNvbG9yOiAjOWQwMGZmMzA7XFxcIj5KZXRwYWNrIChob2xkIHNwYWNlIHRvIGZseSkgXFx1RDgzQ1xcdURGOTJcXHVEODNEXFx1RENBODwvdGQ+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IGdyYXk7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiIGlkPVxcXCJqZXRwYWNrXFxcIj5BY3RpdmF0ZTwvdGQ+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgPC90Ym9keT48L3RhYmxlPlxcbiAgICAgIDxhIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogeWVsbG93OyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtZmFtaWx5OiBNaW5lY3JhZnRpYSwgc2Fucy1zZXJpZjsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGJvcmRlcjogMHB4OyBtYXJnaW4tcmlnaHQ6IDFyZW07IGZvbnQtc2l6ZTogMXJlbTtcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9yYWRtYW5wbGF5cy9NZXRlb3JYL2lzc3Vlcy9uZXdcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5zdWdnZXN0IGEgbmV3IGZlYXR1cmUvaGFjazwvYT5cXG4gICAgICA8YSBzdHlsZT1cXFwiYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiBvcmFuZ2U7Y3Vyc29yOiBwb2ludGVyO2ZvbnQtZmFtaWx5OiBNaW5lY3JhZnRpYSwgc2Fucy1zZXJpZjt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtib3JkZXI6IDBweDtmb250LXNpemU6IDFyZW07XFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vb3Jncy9FYWdsZXJSZWJvcm4vZGlzY3Vzc2lvbnMvOVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPnZlcnNpb24gUm9hZG1hcDwvYT5cXG4gICAgICBcXG4gICAgICAgIDwvZ3VpPlxcbiAgICAgIFwiOyAvLyBTZXQgdGhlIEhUTUwgY29udGVudCBvZiB0aGUgXCJndWlcIiBlbGVtZW50XG4gICAgICAgIGd1aS5pZCA9IFwibXlHdWlcIjsgLy8gU2V0IHRoZSBJRCBvZiB0aGUgXCJndWlcIiBlbGVtZW50IHRvIFwibXlHdWlcIlxuICAgICAgICBndWkuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIGd1aS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIGd1aS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIGd1aS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgZ3VpLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgZ3VpLnN0eWxlLnpJbmRleCA9ICcxMCc7XG4gICAgICAgIGd1aS5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgIGd1aS5zdHlsZS5mb250RmFtaWx5ID0gJ01pbmVjcmFmdGlhLCBzYW5zLXNlcmlmJztcbiAgICAgICAgZ3VpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbiBzY3JvbGwnO1xuICAgICAgICBndWkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoODAsIDgwLCA4MCwgMC40MiknO1xuICAgICAgICBndWkuc3R5bGUuYmFja2dyb3VuZEJsZW5kTW9kZSA9ICdtdWx0aXBseSc7XG4gICAgICAgIGd1aS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICc2NHB4JztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChndWkpOyAvLyBBcHBlbmQgdGhlIFwiZ3VpXCIgZWxlbWVudCB0byB0aGUgYm9keSBvZiB0aGUgZG9jdW1lbnRcbiAgICAgICAgZ3VpVmlzaWJsZSA9IHRydWU7IC8vIFNldCB0aGUgR1VJIHZpc2liaWxpdHkgdG8gdHJ1ZVxuICAgICAgICB2YXIgamV0cGFja0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpldHBhY2tcIik7XG4gICAgICAgIGpldHBhY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoamV0cGFja2d1aWFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoamV0cGFja2d1aWFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGpldHBhY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGpldHBhY2tHdWlBY3RpdmUgc3RhdGVcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGV4dCBhbmQgYmFja2dyb3VuZCBjb2xvciBiYXNlZCBvbiB0aGUgc3RhdGVcbiAgICAgICAgICAgIGlmIChqZXRwYWNrZ3VpYWN0aXZlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBqZXRwYWNrZ3VpYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgamV0cGFja2d1aWFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGlkZUd1aSgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlHdWlcIikpIHsgLy8gSWYgdGhlIFwibXlHdWlcIiBlbGVtZW50IGV4aXN0c1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUd1aVwiKS5yZW1vdmUoKTsgLy8gUmVtb3ZlIHRoZSBcIm15R3VpXCIgZWxlbWVudCBmcm9tIHRoZSBkb2N1bWVudFxuICAgICAgICB9XG4gICAgICAgIGd1aVZpc2libGUgPSBmYWxzZTsgLy8gU2V0IHRoZSBHVUkgdmlzaWJpbGl0eSB0byBmYWxzZVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiU2hpZnRcIiAmJiBldmVudC5sb2NhdGlvbiA9PT0gS2V5Ym9hcmRFdmVudC5ET01fS0VZX0xPQ0FUSU9OX1JJR0hUKSB7IC8vIElmIHRoZSByaWdodCBTaGlmdCBrZXkgaXMgcHJlc3NlZFxuICAgICAgICAgICAgdG9nZ2xlR3VpKCk7IC8vIFRvZ2dsZSB0aGUgR1VJIHZpc2liaWxpdHlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7IC8vIElmIHRoZSBFc2NhcGUga2V5IGlzIHByZXNzZWRcbiAgICAgICAgICAgIGhpZGVHdWkoKTsgLy8gSGlkZSB0aGUgR1VJXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVnaXN0ZXJndWkgPSByZWdpc3Rlcmd1aTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWdpc3RlcmpldHBhY2sgPSB2b2lkIDA7XG5mdW5jdGlvbiByZWdpc3RlcmpldHBhY2soamV0cGFja2d1aWFjdGl2ZSkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5yZXF1aXJlKFwicGxheWVyXCIpO1xuICAgIHZhciBqZXRwYWNrQWN0aXZlID0gZmFsc2U7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICBqZXRwYWNrQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGpldHBhY2tBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGpldHBhY2tndWlhY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoIWpldHBhY2tBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIubW90aW9uWSArPSAwLjI7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVnaXN0ZXJqZXRwYWNrID0gcmVnaXN0ZXJqZXRwYWNrO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGd1aV8xID0gcmVxdWlyZShcIi4vZ3VpXCIpO1xudmFyIGpldHBhY2tfMSA9IHJlcXVpcmUoXCIuL2pldHBhY2tcIik7XG52YXIgamV0cGFja2d1aWFjdGl2ZSA9IGZhbHNlO1xuY29uc29sZS5sb2coXCJbTWV0ZW9yWF0gTG9hZGluZyBjbGllbnQuLi5cIik7XG4oMCwgZ3VpXzEucmVnaXN0ZXJndWkpKGpldHBhY2tndWlhY3RpdmUpO1xuKDAsIGpldHBhY2tfMS5yZWdpc3RlcmpldHBhY2spKGpldHBhY2tndWlhY3RpdmUpO1xuY29uc29sZS5sb2coXCJbTWV0ZW9yWF0gRmluaXNoZWQhXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9