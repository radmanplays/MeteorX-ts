/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cmds.ts":
/*!*********************!*\
  !*** ./src/cmds.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registercmds = void 0;
var uwuapi_1 = __webpack_require__(/*! ./uwuapi */ "./src/uwuapi.ts");
var version = "v1.0";
var cmds = ".version , .help , .ip , .uwuify";
function registercmds() {
    //@ts-ignore
    PluginAPI.addEventListener("packetjoingame", function (ev) {
        var serverip = ev.ip;
    });
    //@ts-ignore
    PluginAPI.addEventListener("sendchatmessage", function (event) {
        if (event.message === ".version") {
            //@ts-ignore
            PluginAPI.displayToChat({ msg: "you are currently using the " + version + " version of MeteorX." });
            event.preventDefault = true;
        }
        if (event.message === ".help") {
            //@ts-ignore
            PluginAPI.displayToChat({ msg: "MeteorX commands : " + cmds + " " });
            event.preventDefault = true;
        }
        if (event.message === ".ip") {
            //@ts-ignore
            PluginAPI.displayToChat({ msg: "the ip of the current server you are playing: " + serverip + " " });
            event.preventDefault = true;
        }
        if (event.message === ".uwuify") {
            //@ts-ignore
            PluginAPI.displayToChat({ msg: "usage: .uwuify [message]" });
            event.preventDefault = true;
        }
        if (event.message.startsWith(".uwuify ")) {
            var messageAfter = event.message.substring(".example message ".length);
            (0, uwuapi_1.uwuify)(messageAfter);
        }
    });
}
exports.registercmds = registercmds;


/***/ }),

/***/ "./src/fullbright.ts":
/*!***************************!*\
  !*** ./src/fullbright.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.returnFullbrightToggle = exports.setFullbrightToggle = exports.registerFullbright = void 0;
var fullbrightToggle = false;
function registerFullbright() {
    //@ts-ignore
    PluginAPI.addEventListener("update", function () {
        if (fullbrightToggle == false) {
            //@ts-ignore
            PluginAPI.blocks.air.lightValue = 0; //Set the air's light level to 0.
            //@ts-ignore
            PluginAPI.blocks.air.reload(); //Save changes   
        }
        else {
            //@ts-ignore
            PluginAPI.blocks.air.lightValue = 10; //Set the air's light level to 10.
            //@ts-ignore
            PluginAPI.blocks.air.reload(); //Save changes
        }
    });
}
exports.registerFullbright = registerFullbright;
function setFullbrightToggle(theBoolean) {
    fullbrightToggle = theBoolean;
}
exports.setFullbrightToggle = setFullbrightToggle;
function returnFullbrightToggle() {
    return fullbrightToggle;
}
exports.returnFullbrightToggle = returnFullbrightToggle;


/***/ }),

/***/ "./src/gui.ts":
/*!********************!*\
  !*** ./src/gui.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registergui = void 0;
var step_1 = __webpack_require__(/*! ./step */ "./src/step.ts");
var spider_1 = __webpack_require__(/*! ./spider */ "./src/spider.ts");
var nofall_1 = __webpack_require__(/*! ./nofall */ "./src/nofall.ts");
var fullbright_1 = __webpack_require__(/*! ./fullbright */ "./src/fullbright.ts");
var jetpack_1 = __webpack_require__(/*! ./jetpack */ "./src/jetpack.ts");
function registergui() {
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
        gui.innerHTML = "\n      <gui id=\"myGui\" style=\"width: 100%;height: 100%;position: fixed;top: 0px;left: 0px;z-index: 10;color: white;font-family: Minecraftia, sans-serif;overflow: hidden scroll;background-color: rgba(80, 80, 80, 0.42);background-blend-mode: multiply;background-size: 64px;\">\n      <h1 style=\"text-shadow: 0px 0px 4px;\">MeteorX GUI</h1>\n      <p style=\"font-size: 0.8rem; color: yellow;\">(totally not stolen from plugin manager's gui)</p><p style=\"font-size: 0.8rem; color: yellow;\">ik the gui looks kinda bad for a hacked client but its meteorX alpha ig. i WILL update this gui in the future</p><p style=\"font-size: 0.8rem; color: orangered;\">click on \"Activate\" to activate a hack and click on \"Deactivate\" to deactivate a hack</p>\n      <table style=\"table-layout: fixed; width: 100%;\">\n          <tbody><tr style=\"background: rgb(80, 80, 80);\">\n              <th style=\"text-align: center;\">Hacks</th>\n              <th style=\"text-align: center; width: 15%;\">Activate/Deactivate</th>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Jetpack (hold space to fly) \uD83C\uDF92\uD83D\uDCA8</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"jetpack\">Activate</td>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Step</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"step\">Activate</td>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Spider</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"spider\">Activate</td>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Nofall</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"nofall\">Activate</td>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Fullbright</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"fullbright\">Activate</td>\n          </tr>\n      </tbody></table>\n      <a style=\"background: transparent; text-align: center; color: yellow; cursor: pointer; font-family: Minecraftia, sans-serif; text-decoration: underline; border: 0px; margin-right: 1rem; font-size: 1rem;\" href=\"https://github.com/radmanplays/MeteorX/issues/new\" target=\"_blank\">suggest a new feature/hack</a>\n      <a style=\"background: transparent;text-align: center;color: orange;cursor: pointer;font-family: Minecraftia, sans-serif;text-decoration: underline;border: 0px;font-size: 1rem;\" href=\"https://github.com/orgs/EaglerReborn/discussions/9\" target=\"_blank\">version Roadmap</a>\n      \n        </gui>\n      "; // Set the HTML content of the "gui" element
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
        var spiderElement = document.getElementById("spider");
        var nofallElement = document.getElementById("nofall");
        var fullbrightElement = document.getElementById("fullbright");
        jetpackElement.addEventListener("mouseover", function () {
            jetpackElement.style.cursor = "pointer";
        });
        stepElement.addEventListener("mouseover", function () {
            stepElement.style.cursor = "pointer";
        });
        spiderElement.addEventListener("mouseover", function () {
            spiderElement.style.cursor = "pointer";
        });
        nofallElement.addEventListener("mouseover", function () {
            nofallElement.style.cursor = "pointer";
        });
        fullbrightElement.addEventListener("mouseover", function () {
            fullbrightElement.style.cursor = "pointer";
        });
        if ((0, jetpack_1.returnjetpacktoggle)() === false) {
            jetpackElement.innerText = "Activate";
            jetpackElement.style.backgroundColor = "green";
        }
        if ((0, step_1.returnStepToggle)() === false) {
            stepElement.innerText = "Activate";
            stepElement.style.backgroundColor = "green";
        }
        if ((0, spider_1.returnSpiderToggle)() === false) {
            spiderElement.innerText = "Activate";
            spiderElement.style.backgroundColor = "green";
        }
        if ((0, nofall_1.returnNofallToggle)() === false) {
            nofallElement.innerText = "Activate";
            nofallElement.style.backgroundColor = "green";
        }
        if ((0, fullbright_1.returnFullbrightToggle)() === false) {
            fullbrightElement.innerText = "Activate";
            fullbrightElement.style.backgroundColor = "green";
        }
        if ((0, jetpack_1.returnjetpacktoggle)() === true) {
            jetpackElement.innerText = "Deactivate";
            jetpackElement.style.backgroundColor = "red";
        }
        if ((0, step_1.returnStepToggle)() === true) {
            stepElement.innerText = "Deactivate";
            stepElement.style.backgroundColor = "red";
        }
        if ((0, spider_1.returnSpiderToggle)() === true) {
            spiderElement.innerText = "Deactivate";
            spiderElement.style.backgroundColor = "red";
        }
        if ((0, nofall_1.returnNofallToggle)() === true) {
            nofallElement.innerText = "Deactivate";
            nofallElement.style.backgroundColor = "red";
        }
        if ((0, fullbright_1.returnFullbrightToggle)() === true) {
            fullbrightElement.innerText = "Deactivate";
            fullbrightElement.style.backgroundColor = "red";
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
        spiderElement.addEventListener("click", function () {
            if ((0, spider_1.returnSpiderToggle)() !== true) {
                spiderElement.innerText = "Deactivate";
                spiderElement.style.backgroundColor = "red";
                (0, spider_1.setSpiderToggle)(true);
            }
            else {
                spiderElement.innerText = "Activate";
                spiderElement.style.backgroundColor = "green";
                (0, spider_1.setSpiderToggle)(false);
            }
        });
        nofallElement.addEventListener("click", function () {
            if ((0, nofall_1.returnNofallToggle)() !== true) {
                nofallElement.innerText = "Deactivate";
                nofallElement.style.backgroundColor = "red";
                (0, nofall_1.setNofallToggle)(true);
            }
            else {
                nofallElement.innerText = "Activate";
                nofallElement.style.backgroundColor = "green";
                (0, nofall_1.setNofallToggle)(false);
            }
        });
        fullbrightElement.addEventListener("click", function () {
            if ((0, fullbright_1.returnFullbrightToggle)() !== true) {
                fullbrightElement.innerText = "Deactivate";
                fullbrightElement.style.backgroundColor = "red";
                (0, fullbright_1.setFullbrightToggle)(true);
            }
            else {
                fullbrightElement.innerText = "Activate";
                fullbrightElement.style.backgroundColor = "green";
                (0, fullbright_1.setFullbrightToggle)(false);
            }
        });
        jetpackElement.addEventListener("click", function () {
            // Toggle the jetpackGuiActive state
            // Update the text and background color based on the state
            if ((0, jetpack_1.returnjetpacktoggle)() !== true) {
                jetpackElement.innerText = "Deactivate";
                jetpackElement.style.backgroundColor = "red";
                (0, jetpack_1.setjetpacktoggle)(true);
            }
            else {
                jetpackElement.innerText = "Activate";
                jetpackElement.style.backgroundColor = "green";
                (0, jetpack_1.setjetpacktoggle)(false);
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
        if (event.key === "Escape" || event.key === "`") { // If the Escape key or backtick is pressed
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
exports.returnjetpacktoggle = exports.setjetpacktoggle = exports.registerjetpack = void 0;
var jetpackguiactive = false;
function registerjetpack() {
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
        if (jetpackguiactive == false) {
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
function setjetpacktoggle(theBoolean) {
    jetpackguiactive = theBoolean;
}
exports.setjetpacktoggle = setjetpacktoggle;
function returnjetpacktoggle() {
    return jetpackguiactive;
}
exports.returnjetpacktoggle = returnjetpacktoggle;


/***/ }),

/***/ "./src/nofall.ts":
/*!***********************!*\
  !*** ./src/nofall.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.returnNofallToggle = exports.setNofallToggle = exports.registerNofall = void 0;
var nofallToggle = false;
function registerNofall() {
    // @ts-ignore
    PluginAPI.require("network");
    // @ts-ignore
    PluginAPI.addEventListener("update", function () {
        // @ts-ignore
        if (PluginAPI.player.fallDistance > 2.0 && nofallToggle) { // ty zxmushroom
            // @ts-ignore
            PluginAPI.network.sendPacketPlayer({ isOnGround: true });
        }
    });
}
exports.registerNofall = registerNofall;
function setNofallToggle(theBoolean) {
    nofallToggle = theBoolean;
}
exports.setNofallToggle = setNofallToggle;
function returnNofallToggle() {
    return nofallToggle;
}
exports.returnNofallToggle = returnNofallToggle;


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


/***/ }),

/***/ "./src/uwuapi.ts":
/*!***********************!*\
  !*** ./src/uwuapi.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uwuify = void 0;
function uwuify(stringToUwuify) {
    // Usage:
    // uwuify("Your text here");
    stringToUwuify.toLowerCase().replace(/r|l/g, 'w').replace(/n([aeiou])/g, 'ny$1').replace(/ove/g, 'uve').replace(/uck/g, 'uwq')
        .replace(/^i/, 'i-i').replace(/(.*)i-i-i/, '$1i-i') + (Math.random() <= 0.2 ? ' >_<' : '');
}
exports.uwuify = uwuify;


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
var nofall_1 = __webpack_require__(/*! ./nofall */ "./src/nofall.ts");
var jetpack_1 = __webpack_require__(/*! ./jetpack */ "./src/jetpack.ts");
var fullbright_1 = __webpack_require__(/*! ./fullbright */ "./src/fullbright.ts");
var cmds_1 = __webpack_require__(/*! ./cmds */ "./src/cmds.ts");
var jetpackguiactive = false;
console.log("[MeteorX] Loading client...");
(0, cmds_1.registercmds)();
(0, gui_1.registergui)();
(0, jetpack_1.registerjetpack)();
(0, spider_1.registerSpider)();
(0, step_1.registerStep)();
(0, nofall_1.registerNofall)();
(0, fullbright_1.registerFullbright)();
console.log("[MeteorX] Finished loading client!");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7Ozs7Ozs7VUNUZDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVksbUJBQU8sQ0FBQywyQkFBTztBQUMzQixlQUFlLG1CQUFPLENBQUMsaUNBQVU7QUFDakMsYUFBYSxtQkFBTyxDQUFDLDZCQUFRO0FBQzdCLGVBQWUsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqQyxnQkFBZ0IsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuQyxtQkFBbUIsbUJBQU8sQ0FBQyx5Q0FBYztBQUN6QyxhQUFhLG1CQUFPLENBQUMsNkJBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL2NtZHMudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9mdWxsYnJpZ2h0LnRzIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvZ3VpLnRzIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvamV0cGFjay50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL25vZmFsbC50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL3NwaWRlci50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL3N0ZXAudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy91d3VhcGkudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlZ2lzdGVyY21kcyA9IHZvaWQgMDtcbnZhciB1d3VhcGlfMSA9IHJlcXVpcmUoXCIuL3V3dWFwaVwiKTtcbnZhciB2ZXJzaW9uID0gXCJ2MS4wXCI7XG52YXIgY21kcyA9IFwiLnZlcnNpb24gLCAuaGVscCAsIC5pcCAsIC51d3VpZnlcIjtcbmZ1bmN0aW9uIHJlZ2lzdGVyY21kcygpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcInBhY2tldGpvaW5nYW1lXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICB2YXIgc2VydmVyaXAgPSBldi5pcDtcbiAgICB9KTtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcInNlbmRjaGF0bWVzc2FnZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50Lm1lc3NhZ2UgPT09IFwiLnZlcnNpb25cIikge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkuZGlzcGxheVRvQ2hhdCh7IG1zZzogXCJ5b3UgYXJlIGN1cnJlbnRseSB1c2luZyB0aGUgXCIgKyB2ZXJzaW9uICsgXCIgdmVyc2lvbiBvZiBNZXRlb3JYLlwiIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5tZXNzYWdlID09PSBcIi5oZWxwXCIpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLmRpc3BsYXlUb0NoYXQoeyBtc2c6IFwiTWV0ZW9yWCBjb21tYW5kcyA6IFwiICsgY21kcyArIFwiIFwiIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5tZXNzYWdlID09PSBcIi5pcFwiKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5kaXNwbGF5VG9DaGF0KHsgbXNnOiBcInRoZSBpcCBvZiB0aGUgY3VycmVudCBzZXJ2ZXIgeW91IGFyZSBwbGF5aW5nOiBcIiArIHNlcnZlcmlwICsgXCIgXCIgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50Lm1lc3NhZ2UgPT09IFwiLnV3dWlmeVwiKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5kaXNwbGF5VG9DaGF0KHsgbXNnOiBcInVzYWdlOiAudXd1aWZ5IFttZXNzYWdlXVwiIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5tZXNzYWdlLnN0YXJ0c1dpdGgoXCIudXd1aWZ5IFwiKSkge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2VBZnRlciA9IGV2ZW50Lm1lc3NhZ2Uuc3Vic3RyaW5nKFwiLmV4YW1wbGUgbWVzc2FnZSBcIi5sZW5ndGgpO1xuICAgICAgICAgICAgKDAsIHV3dWFwaV8xLnV3dWlmeSkobWVzc2FnZUFmdGVyKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5yZWdpc3RlcmNtZHMgPSByZWdpc3RlcmNtZHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmV0dXJuRnVsbGJyaWdodFRvZ2dsZSA9IGV4cG9ydHMuc2V0RnVsbGJyaWdodFRvZ2dsZSA9IGV4cG9ydHMucmVnaXN0ZXJGdWxsYnJpZ2h0ID0gdm9pZCAwO1xudmFyIGZ1bGxicmlnaHRUb2dnbGUgPSBmYWxzZTtcbmZ1bmN0aW9uIHJlZ2lzdGVyRnVsbGJyaWdodCgpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChmdWxsYnJpZ2h0VG9nZ2xlID09IGZhbHNlKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5ibG9ja3MuYWlyLmxpZ2h0VmFsdWUgPSAwOyAvL1NldCB0aGUgYWlyJ3MgbGlnaHQgbGV2ZWwgdG8gMC5cbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLmJsb2Nrcy5haXIucmVsb2FkKCk7IC8vU2F2ZSBjaGFuZ2VzICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5ibG9ja3MuYWlyLmxpZ2h0VmFsdWUgPSAxMDsgLy9TZXQgdGhlIGFpcidzIGxpZ2h0IGxldmVsIHRvIDEwLlxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkuYmxvY2tzLmFpci5yZWxvYWQoKTsgLy9TYXZlIGNoYW5nZXNcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5yZWdpc3RlckZ1bGxicmlnaHQgPSByZWdpc3RlckZ1bGxicmlnaHQ7XG5mdW5jdGlvbiBzZXRGdWxsYnJpZ2h0VG9nZ2xlKHRoZUJvb2xlYW4pIHtcbiAgICBmdWxsYnJpZ2h0VG9nZ2xlID0gdGhlQm9vbGVhbjtcbn1cbmV4cG9ydHMuc2V0RnVsbGJyaWdodFRvZ2dsZSA9IHNldEZ1bGxicmlnaHRUb2dnbGU7XG5mdW5jdGlvbiByZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlKCkge1xuICAgIHJldHVybiBmdWxsYnJpZ2h0VG9nZ2xlO1xufVxuZXhwb3J0cy5yZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlID0gcmV0dXJuRnVsbGJyaWdodFRvZ2dsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWdpc3Rlcmd1aSA9IHZvaWQgMDtcbnZhciBzdGVwXzEgPSByZXF1aXJlKFwiLi9zdGVwXCIpO1xudmFyIHNwaWRlcl8xID0gcmVxdWlyZShcIi4vc3BpZGVyXCIpO1xudmFyIG5vZmFsbF8xID0gcmVxdWlyZShcIi4vbm9mYWxsXCIpO1xudmFyIGZ1bGxicmlnaHRfMSA9IHJlcXVpcmUoXCIuL2Z1bGxicmlnaHRcIik7XG52YXIgamV0cGFja18xID0gcmVxdWlyZShcIi4vamV0cGFja1wiKTtcbmZ1bmN0aW9uIHJlZ2lzdGVyZ3VpKCkge1xuICAgIHZhciBndWlWaXNpYmxlID0gZmFsc2U7IC8vIFZhcmlhYmxlIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHZpc2liaWxpdHkgb2YgdGhlIEdVSVxuICAgIGZ1bmN0aW9uIHRvZ2dsZUd1aSgpIHtcbiAgICAgICAgaWYgKGd1aVZpc2libGUpIHsgLy8gSWYgdGhlIEdVSSBpcyB2aXNpYmxlXG4gICAgICAgICAgICBoaWRlR3VpKCk7IC8vIEhpZGUgdGhlIEdVSVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hvd0d1aSgpOyAvLyBPdGhlcndpc2UsIHNob3cgdGhlIEdVSVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNob3dHdWkoKSB7XG4gICAgICAgIGhpZGVHdWkoKTsgLy8gSWYgdGhlIEdVSSBpcyBhbHJlYWR5IG9wZW4sIHRoaXMgd2lsbCBoaWRlIGl0LlxuICAgICAgICB2YXIgZ3VpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImd1aVwiKTsgLy8gQ3JlYXRlIGEgbmV3IFwiZ3VpXCIgZWxlbWVudFxuICAgICAgICBpZiAoZG9jdW1lbnQucG9pbnRlckxvY2tFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuICAgICAgICB9XG4gICAgICAgIGd1aS5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxndWkgaWQ9XFxcIm15R3VpXFxcIiBzdHlsZT1cXFwid2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDBweDtsZWZ0OiAwcHg7ei1pbmRleDogMTA7Y29sb3I6IHdoaXRlO2ZvbnQtZmFtaWx5OiBNaW5lY3JhZnRpYSwgc2Fucy1zZXJpZjtvdmVyZmxvdzogaGlkZGVuIHNjcm9sbDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIDAuNDIpO2JhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7YmFja2dyb3VuZC1zaXplOiA2NHB4O1xcXCI+XFxuICAgICAgPGgxIHN0eWxlPVxcXCJ0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHg7XFxcIj5NZXRlb3JYIEdVSTwvaDE+XFxuICAgICAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44cmVtOyBjb2xvcjogeWVsbG93O1xcXCI+KHRvdGFsbHkgbm90IHN0b2xlbiBmcm9tIHBsdWdpbiBtYW5hZ2VyJ3MgZ3VpKTwvcD48cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjhyZW07IGNvbG9yOiB5ZWxsb3c7XFxcIj5payB0aGUgZ3VpIGxvb2tzIGtpbmRhIGJhZCBmb3IgYSBoYWNrZWQgY2xpZW50IGJ1dCBpdHMgbWV0ZW9yWCBhbHBoYSBpZy4gaSBXSUxMIHVwZGF0ZSB0aGlzIGd1aSBpbiB0aGUgZnV0dXJlPC9wPjxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuOHJlbTsgY29sb3I6IG9yYW5nZXJlZDtcXFwiPmNsaWNrIG9uIFxcXCJBY3RpdmF0ZVxcXCIgdG8gYWN0aXZhdGUgYSBoYWNrIGFuZCBjbGljayBvbiBcXFwiRGVhY3RpdmF0ZVxcXCIgdG8gZGVhY3RpdmF0ZSBhIGhhY2s8L3A+XFxuICAgICAgPHRhYmxlIHN0eWxlPVxcXCJ0YWJsZS1sYXlvdXQ6IGZpeGVkOyB3aWR0aDogMTAwJTtcXFwiPlxcbiAgICAgICAgICA8dGJvZHk+PHRyIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiByZ2IoODAsIDgwLCA4MCk7XFxcIj5cXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT1cXFwidGV4dC1hbGlnbjogY2VudGVyO1xcXCI+SGFja3M8L3RoPlxcbiAgICAgICAgICAgICAgPHRoIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXI7IHdpZHRoOiAxNSU7XFxcIj5BY3RpdmF0ZS9EZWFjdGl2YXRlPC90aD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgICAgPHRyIHN0eWxlPVxcXCJib3gtc2hhZG93OiBncmV5IDBweCAycHggMHB4O1xcXCI+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInVzZXItc2VsZWN0OiB0ZXh0O2JhY2tncm91bmQtY29sb3I6ICM5ZDAwZmYzMDtcXFwiPkpldHBhY2sgKGhvbGQgc3BhY2UgdG8gZmx5KSBcXHVEODNDXFx1REY5MlxcdUQ4M0RcXHVEQ0E4PC90ZD5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCIgaWQ9XFxcImpldHBhY2tcXFwiPkFjdGl2YXRlPC90ZD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgICAgPHRyIHN0eWxlPVxcXCJib3gtc2hhZG93OiBncmV5IDBweCAycHggMHB4O1xcXCI+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInVzZXItc2VsZWN0OiB0ZXh0O2JhY2tncm91bmQtY29sb3I6ICM5ZDAwZmYzMDtcXFwiPlN0ZXA8L3RkPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIiBpZD1cXFwic3RlcFxcXCI+QWN0aXZhdGU8L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8dHIgc3R5bGU9XFxcImJveC1zaGFkb3c6IGdyZXkgMHB4IDJweCAwcHg7XFxcIj5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IHRleHQ7YmFja2dyb3VuZC1jb2xvcjogIzlkMDBmZjMwO1xcXCI+U3BpZGVyPC90ZD5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCIgaWQ9XFxcInNwaWRlclxcXCI+QWN0aXZhdGU8L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8dHIgc3R5bGU9XFxcImJveC1zaGFkb3c6IGdyZXkgMHB4IDJweCAwcHg7XFxcIj5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IHRleHQ7YmFja2dyb3VuZC1jb2xvcjogIzlkMDBmZjMwO1xcXCI+Tm9mYWxsPC90ZD5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCIgaWQ9XFxcIm5vZmFsbFxcXCI+QWN0aXZhdGU8L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8dHIgc3R5bGU9XFxcImJveC1zaGFkb3c6IGdyZXkgMHB4IDJweCAwcHg7XFxcIj5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IHRleHQ7YmFja2dyb3VuZC1jb2xvcjogIzlkMDBmZjMwO1xcXCI+RnVsbGJyaWdodDwvdGQ+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IGdyYXk7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiIGlkPVxcXCJmdWxsYnJpZ2h0XFxcIj5BY3RpdmF0ZTwvdGQ+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgPC90Ym9keT48L3RhYmxlPlxcbiAgICAgIDxhIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogeWVsbG93OyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtZmFtaWx5OiBNaW5lY3JhZnRpYSwgc2Fucy1zZXJpZjsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGJvcmRlcjogMHB4OyBtYXJnaW4tcmlnaHQ6IDFyZW07IGZvbnQtc2l6ZTogMXJlbTtcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9yYWRtYW5wbGF5cy9NZXRlb3JYL2lzc3Vlcy9uZXdcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5zdWdnZXN0IGEgbmV3IGZlYXR1cmUvaGFjazwvYT5cXG4gICAgICA8YSBzdHlsZT1cXFwiYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiBvcmFuZ2U7Y3Vyc29yOiBwb2ludGVyO2ZvbnQtZmFtaWx5OiBNaW5lY3JhZnRpYSwgc2Fucy1zZXJpZjt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtib3JkZXI6IDBweDtmb250LXNpemU6IDFyZW07XFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vb3Jncy9FYWdsZXJSZWJvcm4vZGlzY3Vzc2lvbnMvOVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPnZlcnNpb24gUm9hZG1hcDwvYT5cXG4gICAgICBcXG4gICAgICAgIDwvZ3VpPlxcbiAgICAgIFwiOyAvLyBTZXQgdGhlIEhUTUwgY29udGVudCBvZiB0aGUgXCJndWlcIiBlbGVtZW50XG4gICAgICAgIGd1aS5pZCA9IFwibXlHdWlcIjsgLy8gU2V0IHRoZSBJRCBvZiB0aGUgXCJndWlcIiBlbGVtZW50IHRvIFwibXlHdWlcIlxuICAgICAgICBndWkuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIGd1aS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIGd1aS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIGd1aS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgZ3VpLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgZ3VpLnN0eWxlLnpJbmRleCA9ICcxMCc7XG4gICAgICAgIGd1aS5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgIGd1aS5zdHlsZS5mb250RmFtaWx5ID0gJ01pbmVjcmFmdGlhLCBzYW5zLXNlcmlmJztcbiAgICAgICAgZ3VpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbiBzY3JvbGwnO1xuICAgICAgICBndWkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoODAsIDgwLCA4MCwgMC40MiknO1xuICAgICAgICBndWkuc3R5bGUuYmFja2dyb3VuZEJsZW5kTW9kZSA9ICdtdWx0aXBseSc7XG4gICAgICAgIGd1aS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICc2NHB4JztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChndWkpOyAvLyBBcHBlbmQgdGhlIFwiZ3VpXCIgZWxlbWVudCB0byB0aGUgYm9keSBvZiB0aGUgZG9jdW1lbnRcbiAgICAgICAgZ3VpVmlzaWJsZSA9IHRydWU7IC8vIFNldCB0aGUgR1VJIHZpc2liaWxpdHkgdG8gdHJ1ZVxuICAgICAgICB2YXIgamV0cGFja0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpldHBhY2tcIik7XG4gICAgICAgIHZhciBzdGVwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlcFwiKTtcbiAgICAgICAgdmFyIHNwaWRlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwaWRlclwiKTtcbiAgICAgICAgdmFyIG5vZmFsbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vZmFsbFwiKTtcbiAgICAgICAgdmFyIGZ1bGxicmlnaHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdWxsYnJpZ2h0XCIpO1xuICAgICAgICBqZXRwYWNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICB9KTtcbiAgICAgICAgc3RlcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdGVwRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHNwaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzcGlkZXJFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICB9KTtcbiAgICAgICAgbm9mYWxsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG5vZmFsbEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBmdWxsYnJpZ2h0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCgwLCBqZXRwYWNrXzEucmV0dXJuamV0cGFja3RvZ2dsZSkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIHN0ZXBfMS5yZXR1cm5TdGVwVG9nZ2xlKSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgc3RlcEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgc3BpZGVyXzEucmV0dXJuU3BpZGVyVG9nZ2xlKSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICBzcGlkZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIG5vZmFsbF8xLnJldHVybk5vZmFsbFRvZ2dsZSkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG5vZmFsbEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBmdWxsYnJpZ2h0XzEucmV0dXJuRnVsbGJyaWdodFRvZ2dsZSkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIGpldHBhY2tfMS5yZXR1cm5qZXRwYWNrdG9nZ2xlKSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBzdGVwXzEucmV0dXJuU3RlcFRvZ2dsZSkoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RlcEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICBzdGVwRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgc3BpZGVyXzEucmV0dXJuU3BpZGVyVG9nZ2xlKSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzcGlkZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgbm9mYWxsXzEucmV0dXJuTm9mYWxsVG9nZ2xlKSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBub2ZhbGxFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgZnVsbGJyaWdodF8xLnJldHVybkZ1bGxicmlnaHRUb2dnbGUpKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBzdGVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCgwLCBzdGVwXzEucmV0dXJuU3RlcFRvZ2dsZSkoKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHN0ZXBFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIHN0ZXBFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgKDAsIHN0ZXBfMS5zZXRTdGVwVG9nZ2xlKSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0ZXBFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBzdGVwRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgKDAsIHN0ZXBfMS5zZXRTdGVwVG9nZ2xlKShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzcGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKDAsIHNwaWRlcl8xLnJldHVyblNwaWRlclRvZ2dsZSkoKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICgwLCBzcGlkZXJfMS5zZXRTcGlkZXJUb2dnbGUpKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgKDAsIHNwaWRlcl8xLnNldFNwaWRlclRvZ2dsZSkoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbm9mYWxsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCgwLCBub2ZhbGxfMS5yZXR1cm5Ob2ZhbGxUb2dnbGUpKCkgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBub2ZhbGxFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIG5vZmFsbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAoMCwgbm9mYWxsXzEuc2V0Tm9mYWxsVG9nZ2xlKSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZmFsbEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIG5vZmFsbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgICgwLCBub2ZhbGxfMS5zZXROb2ZhbGxUb2dnbGUpKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKDAsIGZ1bGxicmlnaHRfMS5yZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlKSgpICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAoMCwgZnVsbGJyaWdodF8xLnNldEZ1bGxicmlnaHRUb2dnbGUpKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICAoMCwgZnVsbGJyaWdodF8xLnNldEZ1bGxicmlnaHRUb2dnbGUpKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGpldHBhY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGpldHBhY2tHdWlBY3RpdmUgc3RhdGVcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGV4dCBhbmQgYmFja2dyb3VuZCBjb2xvciBiYXNlZCBvbiB0aGUgc3RhdGVcbiAgICAgICAgICAgIGlmICgoMCwgamV0cGFja18xLnJldHVybmpldHBhY2t0b2dnbGUpKCkgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICgwLCBqZXRwYWNrXzEuc2V0amV0cGFja3RvZ2dsZSkodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgICgwLCBqZXRwYWNrXzEuc2V0amV0cGFja3RvZ2dsZSkoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGlkZUd1aSgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlHdWlcIikpIHsgLy8gSWYgdGhlIFwibXlHdWlcIiBlbGVtZW50IGV4aXN0c1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUd1aVwiKS5yZW1vdmUoKTsgLy8gUmVtb3ZlIHRoZSBcIm15R3VpXCIgZWxlbWVudCBmcm9tIHRoZSBkb2N1bWVudFxuICAgICAgICB9XG4gICAgICAgIGd1aVZpc2libGUgPSBmYWxzZTsgLy8gU2V0IHRoZSBHVUkgdmlzaWJpbGl0eSB0byBmYWxzZVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiU2hpZnRcIiAmJiBldmVudC5sb2NhdGlvbiA9PT0gS2V5Ym9hcmRFdmVudC5ET01fS0VZX0xPQ0FUSU9OX1JJR0hUKSB7IC8vIElmIHRoZSByaWdodCBTaGlmdCBrZXkgaXMgcHJlc3NlZFxuICAgICAgICAgICAgdG9nZ2xlR3VpKCk7IC8vIFRvZ2dsZSB0aGUgR1VJIHZpc2liaWxpdHlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiIHx8IGV2ZW50LmtleSA9PT0gXCJgXCIpIHsgLy8gSWYgdGhlIEVzY2FwZSBrZXkgb3IgYmFja3RpY2sgaXMgcHJlc3NlZFxuICAgICAgICAgICAgaGlkZUd1aSgpOyAvLyBIaWRlIHRoZSBHVUlcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5yZWdpc3Rlcmd1aSA9IHJlZ2lzdGVyZ3VpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldHVybmpldHBhY2t0b2dnbGUgPSBleHBvcnRzLnNldGpldHBhY2t0b2dnbGUgPSBleHBvcnRzLnJlZ2lzdGVyamV0cGFjayA9IHZvaWQgMDtcbnZhciBqZXRwYWNrZ3VpYWN0aXZlID0gZmFsc2U7XG5mdW5jdGlvbiByZWdpc3RlcmpldHBhY2soKSB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG4gICAgdmFyIGpldHBhY2tBY3RpdmUgPSBmYWxzZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGpldHBhY2tBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSBcIiBcIikge1xuICAgICAgICAgICAgamV0cGFja0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoamV0cGFja2d1aWFjdGl2ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKCFqZXRwYWNrQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLm1vdGlvblkgKz0gMC4yO1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyamV0cGFjayA9IHJlZ2lzdGVyamV0cGFjaztcbmZ1bmN0aW9uIHNldGpldHBhY2t0b2dnbGUodGhlQm9vbGVhbikge1xuICAgIGpldHBhY2tndWlhY3RpdmUgPSB0aGVCb29sZWFuO1xufVxuZXhwb3J0cy5zZXRqZXRwYWNrdG9nZ2xlID0gc2V0amV0cGFja3RvZ2dsZTtcbmZ1bmN0aW9uIHJldHVybmpldHBhY2t0b2dnbGUoKSB7XG4gICAgcmV0dXJuIGpldHBhY2tndWlhY3RpdmU7XG59XG5leHBvcnRzLnJldHVybmpldHBhY2t0b2dnbGUgPSByZXR1cm5qZXRwYWNrdG9nZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldHVybk5vZmFsbFRvZ2dsZSA9IGV4cG9ydHMuc2V0Tm9mYWxsVG9nZ2xlID0gZXhwb3J0cy5yZWdpc3Rlck5vZmFsbCA9IHZvaWQgMDtcbnZhciBub2ZhbGxUb2dnbGUgPSBmYWxzZTtcbmZ1bmN0aW9uIHJlZ2lzdGVyTm9mYWxsKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkucmVxdWlyZShcIm5ldHdvcmtcIik7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoUGx1Z2luQVBJLnBsYXllci5mYWxsRGlzdGFuY2UgPiAyLjAgJiYgbm9mYWxsVG9nZ2xlKSB7IC8vIHR5IHp4bXVzaHJvb21cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5uZXR3b3JrLnNlbmRQYWNrZXRQbGF5ZXIoeyBpc09uR3JvdW5kOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyTm9mYWxsID0gcmVnaXN0ZXJOb2ZhbGw7XG5mdW5jdGlvbiBzZXROb2ZhbGxUb2dnbGUodGhlQm9vbGVhbikge1xuICAgIG5vZmFsbFRvZ2dsZSA9IHRoZUJvb2xlYW47XG59XG5leHBvcnRzLnNldE5vZmFsbFRvZ2dsZSA9IHNldE5vZmFsbFRvZ2dsZTtcbmZ1bmN0aW9uIHJldHVybk5vZmFsbFRvZ2dsZSgpIHtcbiAgICByZXR1cm4gbm9mYWxsVG9nZ2xlO1xufVxuZXhwb3J0cy5yZXR1cm5Ob2ZhbGxUb2dnbGUgPSByZXR1cm5Ob2ZhbGxUb2dnbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmV0dXJuU3BpZGVyVG9nZ2xlID0gZXhwb3J0cy5zZXRTcGlkZXJUb2dnbGUgPSBleHBvcnRzLnJlZ2lzdGVyU3BpZGVyID0gdm9pZCAwO1xudmFyIHNwaWRlclRvZ2dsZSA9IGZhbHNlO1xuZnVuY3Rpb24gcmVnaXN0ZXJTcGlkZXIoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5yZXF1aXJlKFwicGxheWVyXCIpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKFBsdWdpbkFQSS5wbGF5ZXIuaXNDb2xsaWRlZEhvcml6b250YWxseSAmJiBzcGlkZXJUb2dnbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5tb3Rpb25ZID0gMC4yO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvL1BsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwia2V5XCIsIChldmVudCkgPT4ge1xuICAgIC8vQCB0cy1pZ25vcmVcbiAgICAvL2lmIChldmVudC5rZXkgPT0gMjIpIHtcbiAgICAvL3NwaWRlclRvZ2dsZSA9ICFzcGlkZXJUb2dnbGVcbiAgICAvL2lmIChzcGlkZXJUb2dnbGUgPT0gdHJ1ZSkge1xuICAgIC8vZGlzcGxheVRvQ2hhdChcIsKnZMKnbFtNZXRlb3JYXSDCp3LCp2VFbmFibGVkIHNwaWRlci5cIilcbiAgICAvL30gZWxzZSB7XG4gICAgLy9kaXNwbGF5VG9DaGF0KFwiwqdkwqdsW01ldGVvclhdIMKncsKnZURpc2FibGVkIHNwaWRlci5cIilcbiAgICAvL31cbn1cbmV4cG9ydHMucmVnaXN0ZXJTcGlkZXIgPSByZWdpc3RlclNwaWRlcjtcbi8vfSlcbi8vfVxuZnVuY3Rpb24gc2V0U3BpZGVyVG9nZ2xlKHRoZUJvb2xlYW4pIHtcbiAgICBzcGlkZXJUb2dnbGUgPSB0aGVCb29sZWFuOyAvLyB5dyByYWRtYW4gOjNcbn1cbmV4cG9ydHMuc2V0U3BpZGVyVG9nZ2xlID0gc2V0U3BpZGVyVG9nZ2xlO1xuZnVuY3Rpb24gcmV0dXJuU3BpZGVyVG9nZ2xlKCkge1xuICAgIHJldHVybiBzcGlkZXJUb2dnbGU7XG59XG5leHBvcnRzLnJldHVyblNwaWRlclRvZ2dsZSA9IHJldHVyblNwaWRlclRvZ2dsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXR1cm5TdGVwVG9nZ2xlID0gZXhwb3J0cy5zZXRTdGVwVG9nZ2xlID0gZXhwb3J0cy5yZWdpc3RlclN0ZXAgPSB2b2lkIDA7XG52YXIgc3RlcFRvZ2dsZSA9IGZhbHNlO1xuZnVuY3Rpb24gcmVnaXN0ZXJTdGVwKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzdGVwVG9nZ2xlID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IDE7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5zdGVwSGVpZ2h0ID0gMC41O1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEB0cy1pZ25vcmUgXG4gICAgLy9QbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcImtleVwiLCAoZXZlbnQpPT57IGNvbW1lbnQgb3V0IGNvZGUgcmFkbWFuIGxpa2VseSB3b24ndCB1c2VcbiAgICAvL2lmIChldmVudC5rZXkgPT0gNDcpIHtcbiAgICAvLyAgc3RlcFRvZ2dsZSA9ICFzdGVwVG9nZ2xlO1xuICAgIC8vIGlmIChzdGVwVG9nZ2xlID09IHRydWUpIHtcbiAgICAvLyAgIGRpc3BsYXlUb0NoYXQoXCLCp2TCp2xbTWV0ZW9yWF0gwqdywqdlRW5hYmxlZCBzdGVwLlwiKVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICAgZGlzcGxheVRvQ2hhdChcIsKnZMKnbFtNZXRlb3JYXSDCp3LCp2VEaXNhYmxlZCBzdGVwLlwiKVxuICAgIC8vIH1cbiAgICAvLyB9XG4gICAgLy8gIH0pXG59XG5leHBvcnRzLnJlZ2lzdGVyU3RlcCA9IHJlZ2lzdGVyU3RlcDtcbmZ1bmN0aW9uIHNldFN0ZXBUb2dnbGUodGhlQm9vbGVhbikge1xuICAgIHN0ZXBUb2dnbGUgPSB0aGVCb29sZWFuOyAvLyB5dyByYWRtYW4gOjNcbn1cbmV4cG9ydHMuc2V0U3RlcFRvZ2dsZSA9IHNldFN0ZXBUb2dnbGU7XG5mdW5jdGlvbiByZXR1cm5TdGVwVG9nZ2xlKCkge1xuICAgIHJldHVybiBzdGVwVG9nZ2xlO1xufVxuZXhwb3J0cy5yZXR1cm5TdGVwVG9nZ2xlID0gcmV0dXJuU3RlcFRvZ2dsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51d3VpZnkgPSB2b2lkIDA7XG5mdW5jdGlvbiB1d3VpZnkoc3RyaW5nVG9Vd3VpZnkpIHtcbiAgICAvLyBVc2FnZTpcbiAgICAvLyB1d3VpZnkoXCJZb3VyIHRleHQgaGVyZVwiKTtcbiAgICBzdHJpbmdUb1V3dWlmeS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3J8bC9nLCAndycpLnJlcGxhY2UoL24oW2FlaW91XSkvZywgJ255JDEnKS5yZXBsYWNlKC9vdmUvZywgJ3V2ZScpLnJlcGxhY2UoL3Vjay9nLCAndXdxJylcbiAgICAgICAgLnJlcGxhY2UoL15pLywgJ2ktaScpLnJlcGxhY2UoLyguKilpLWktaS8sICckMWktaScpICsgKE1hdGgucmFuZG9tKCkgPD0gMC4yID8gJyA+XzwnIDogJycpO1xufVxuZXhwb3J0cy51d3VpZnkgPSB1d3VpZnk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ3VpXzEgPSByZXF1aXJlKFwiLi9ndWlcIik7XG52YXIgc3BpZGVyXzEgPSByZXF1aXJlKFwiLi9zcGlkZXJcIik7XG52YXIgc3RlcF8xID0gcmVxdWlyZShcIi4vc3RlcFwiKTtcbnZhciBub2ZhbGxfMSA9IHJlcXVpcmUoXCIuL25vZmFsbFwiKTtcbnZhciBqZXRwYWNrXzEgPSByZXF1aXJlKFwiLi9qZXRwYWNrXCIpO1xudmFyIGZ1bGxicmlnaHRfMSA9IHJlcXVpcmUoXCIuL2Z1bGxicmlnaHRcIik7XG52YXIgY21kc18xID0gcmVxdWlyZShcIi4vY21kc1wiKTtcbnZhciBqZXRwYWNrZ3VpYWN0aXZlID0gZmFsc2U7XG5jb25zb2xlLmxvZyhcIltNZXRlb3JYXSBMb2FkaW5nIGNsaWVudC4uLlwiKTtcbigwLCBjbWRzXzEucmVnaXN0ZXJjbWRzKSgpO1xuKDAsIGd1aV8xLnJlZ2lzdGVyZ3VpKSgpO1xuKDAsIGpldHBhY2tfMS5yZWdpc3RlcmpldHBhY2spKCk7XG4oMCwgc3BpZGVyXzEucmVnaXN0ZXJTcGlkZXIpKCk7XG4oMCwgc3RlcF8xLnJlZ2lzdGVyU3RlcCkoKTtcbigwLCBub2ZhbGxfMS5yZWdpc3Rlck5vZmFsbCkoKTtcbigwLCBmdWxsYnJpZ2h0XzEucmVnaXN0ZXJGdWxsYnJpZ2h0KSgpO1xuY29uc29sZS5sb2coXCJbTWV0ZW9yWF0gRmluaXNoZWQgbG9hZGluZyBjbGllbnQhXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9