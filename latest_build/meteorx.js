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
var serverip = null;
function registercmds() {
    //@ts-ignore
    PluginAPI.addEventListener("packetjoingame", function (ev) {
        serverip = ev.ip;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7Ozs7OztVQ1RkO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsWUFBWSxtQkFBTyxDQUFDLDJCQUFPO0FBQzNCLGVBQWUsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqQyxhQUFhLG1CQUFPLENBQUMsNkJBQVE7QUFDN0IsZUFBZSxtQkFBTyxDQUFDLGlDQUFVO0FBQ2pDLGdCQUFnQixtQkFBTyxDQUFDLG1DQUFXO0FBQ25DLG1CQUFtQixtQkFBTyxDQUFDLHlDQUFjO0FBQ3pDLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21ldGVvcngvLi9zcmMvY21kcy50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL2Z1bGxicmlnaHQudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9ndWkudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9qZXRwYWNrLnRzIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvbm9mYWxsLnRzIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvc3BpZGVyLnRzIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvc3RlcC50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL3V3dWFwaS50cyIsIndlYnBhY2s6Ly9tZXRlb3J4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVnaXN0ZXJjbWRzID0gdm9pZCAwO1xudmFyIHV3dWFwaV8xID0gcmVxdWlyZShcIi4vdXd1YXBpXCIpO1xudmFyIHZlcnNpb24gPSBcInYxLjBcIjtcbnZhciBjbWRzID0gXCIudmVyc2lvbiAsIC5oZWxwICwgLmlwICwgLnV3dWlmeVwiO1xudmFyIHNlcnZlcmlwID0gbnVsbDtcbmZ1bmN0aW9uIHJlZ2lzdGVyY21kcygpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcInBhY2tldGpvaW5nYW1lXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBzZXJ2ZXJpcCA9IGV2LmlwO1xuICAgIH0pO1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwic2VuZGNoYXRtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQubWVzc2FnZSA9PT0gXCIudmVyc2lvblwiKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5kaXNwbGF5VG9DaGF0KHsgbXNnOiBcInlvdSBhcmUgY3VycmVudGx5IHVzaW5nIHRoZSBcIiArIHZlcnNpb24gKyBcIiB2ZXJzaW9uIG9mIE1ldGVvclguXCIgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50Lm1lc3NhZ2UgPT09IFwiLmhlbHBcIikge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkuZGlzcGxheVRvQ2hhdCh7IG1zZzogXCJNZXRlb3JYIGNvbW1hbmRzIDogXCIgKyBjbWRzICsgXCIgXCIgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50Lm1lc3NhZ2UgPT09IFwiLmlwXCIpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLmRpc3BsYXlUb0NoYXQoeyBtc2c6IFwidGhlIGlwIG9mIHRoZSBjdXJyZW50IHNlcnZlciB5b3UgYXJlIHBsYXlpbmc6IFwiICsgc2VydmVyaXAgKyBcIiBcIiB9KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQubWVzc2FnZSA9PT0gXCIudXd1aWZ5XCIpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLmRpc3BsYXlUb0NoYXQoeyBtc2c6IFwidXNhZ2U6IC51d3VpZnkgW21lc3NhZ2VdXCIgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50Lm1lc3NhZ2Uuc3RhcnRzV2l0aChcIi51d3VpZnkgXCIpKSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZUFmdGVyID0gZXZlbnQubWVzc2FnZS5zdWJzdHJpbmcoXCIuZXhhbXBsZSBtZXNzYWdlIFwiLmxlbmd0aCk7XG4gICAgICAgICAgICAoMCwgdXd1YXBpXzEudXd1aWZ5KShtZXNzYWdlQWZ0ZXIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyY21kcyA9IHJlZ2lzdGVyY21kcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlID0gZXhwb3J0cy5zZXRGdWxsYnJpZ2h0VG9nZ2xlID0gZXhwb3J0cy5yZWdpc3RlckZ1bGxicmlnaHQgPSB2b2lkIDA7XG52YXIgZnVsbGJyaWdodFRvZ2dsZSA9IGZhbHNlO1xuZnVuY3Rpb24gcmVnaXN0ZXJGdWxsYnJpZ2h0KCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGZ1bGxicmlnaHRUb2dnbGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLmJsb2Nrcy5haXIubGlnaHRWYWx1ZSA9IDA7IC8vU2V0IHRoZSBhaXIncyBsaWdodCBsZXZlbCB0byAwLlxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkuYmxvY2tzLmFpci5yZWxvYWQoKTsgLy9TYXZlIGNoYW5nZXMgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLmJsb2Nrcy5haXIubGlnaHRWYWx1ZSA9IDEwOyAvL1NldCB0aGUgYWlyJ3MgbGlnaHQgbGV2ZWwgdG8gMTAuXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5ibG9ja3MuYWlyLnJlbG9hZCgpOyAvL1NhdmUgY2hhbmdlc1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyRnVsbGJyaWdodCA9IHJlZ2lzdGVyRnVsbGJyaWdodDtcbmZ1bmN0aW9uIHNldEZ1bGxicmlnaHRUb2dnbGUodGhlQm9vbGVhbikge1xuICAgIGZ1bGxicmlnaHRUb2dnbGUgPSB0aGVCb29sZWFuO1xufVxuZXhwb3J0cy5zZXRGdWxsYnJpZ2h0VG9nZ2xlID0gc2V0RnVsbGJyaWdodFRvZ2dsZTtcbmZ1bmN0aW9uIHJldHVybkZ1bGxicmlnaHRUb2dnbGUoKSB7XG4gICAgcmV0dXJuIGZ1bGxicmlnaHRUb2dnbGU7XG59XG5leHBvcnRzLnJldHVybkZ1bGxicmlnaHRUb2dnbGUgPSByZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlZ2lzdGVyZ3VpID0gdm9pZCAwO1xudmFyIHN0ZXBfMSA9IHJlcXVpcmUoXCIuL3N0ZXBcIik7XG52YXIgc3BpZGVyXzEgPSByZXF1aXJlKFwiLi9zcGlkZXJcIik7XG52YXIgbm9mYWxsXzEgPSByZXF1aXJlKFwiLi9ub2ZhbGxcIik7XG52YXIgZnVsbGJyaWdodF8xID0gcmVxdWlyZShcIi4vZnVsbGJyaWdodFwiKTtcbnZhciBqZXRwYWNrXzEgPSByZXF1aXJlKFwiLi9qZXRwYWNrXCIpO1xuZnVuY3Rpb24gcmVnaXN0ZXJndWkoKSB7XG4gICAgdmFyIGd1aVZpc2libGUgPSBmYWxzZTsgLy8gVmFyaWFibGUgdG8ga2VlcCB0cmFjayBvZiB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgR1VJXG4gICAgZnVuY3Rpb24gdG9nZ2xlR3VpKCkge1xuICAgICAgICBpZiAoZ3VpVmlzaWJsZSkgeyAvLyBJZiB0aGUgR1VJIGlzIHZpc2libGVcbiAgICAgICAgICAgIGhpZGVHdWkoKTsgLy8gSGlkZSB0aGUgR1VJXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaG93R3VpKCk7IC8vIE90aGVyd2lzZSwgc2hvdyB0aGUgR1VJXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2hvd0d1aSgpIHtcbiAgICAgICAgaGlkZUd1aSgpOyAvLyBJZiB0aGUgR1VJIGlzIGFscmVhZHkgb3BlbiwgdGhpcyB3aWxsIGhpZGUgaXQuXG4gICAgICAgIHZhciBndWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZ3VpXCIpOyAvLyBDcmVhdGUgYSBuZXcgXCJndWlcIiBlbGVtZW50XG4gICAgICAgIGlmIChkb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZ3VpLmlubmVySFRNTCA9IFwiXFxuICAgICAgPGd1aSBpZD1cXFwibXlHdWlcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7cG9zaXRpb246IGZpeGVkO3RvcDogMHB4O2xlZnQ6IDBweDt6LWluZGV4OiAxMDtjb2xvcjogd2hpdGU7Zm9udC1mYW1pbHk6IE1pbmVjcmFmdGlhLCBzYW5zLXNlcmlmO292ZXJmbG93OiBoaWRkZW4gc2Nyb2xsO2JhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDgwLCA4MCwgMC40Mik7YmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtiYWNrZ3JvdW5kLXNpemU6IDY0cHg7XFxcIj5cXG4gICAgICA8aDEgc3R5bGU9XFxcInRleHQtc2hhZG93OiAwcHggMHB4IDRweDtcXFwiPk1ldGVvclggR1VJPC9oMT5cXG4gICAgICA8cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjhyZW07IGNvbG9yOiB5ZWxsb3c7XFxcIj4odG90YWxseSBub3Qgc3RvbGVuIGZyb20gcGx1Z2luIG1hbmFnZXIncyBndWkpPC9wPjxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuOHJlbTsgY29sb3I6IHllbGxvdztcXFwiPmlrIHRoZSBndWkgbG9va3Mga2luZGEgYmFkIGZvciBhIGhhY2tlZCBjbGllbnQgYnV0IGl0cyBtZXRlb3JYIGFscGhhIGlnLiBpIFdJTEwgdXBkYXRlIHRoaXMgZ3VpIGluIHRoZSBmdXR1cmU8L3A+PHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44cmVtOyBjb2xvcjogb3JhbmdlcmVkO1xcXCI+Y2xpY2sgb24gXFxcIkFjdGl2YXRlXFxcIiB0byBhY3RpdmF0ZSBhIGhhY2sgYW5kIGNsaWNrIG9uIFxcXCJEZWFjdGl2YXRlXFxcIiB0byBkZWFjdGl2YXRlIGEgaGFjazwvcD5cXG4gICAgICA8dGFibGUgc3R5bGU9XFxcInRhYmxlLWxheW91dDogZml4ZWQ7IHdpZHRoOiAxMDAlO1xcXCI+XFxuICAgICAgICAgIDx0Ym9keT48dHIgc3R5bGU9XFxcImJhY2tncm91bmQ6IHJnYig4MCwgODAsIDgwKTtcXFwiPlxcbiAgICAgICAgICAgICAgPHRoIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIj5IYWNrczwvdGg+XFxuICAgICAgICAgICAgICA8dGggc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDE1JTtcXFwiPkFjdGl2YXRlL0RlYWN0aXZhdGU8L3RoPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8dHIgc3R5bGU9XFxcImJveC1zaGFkb3c6IGdyZXkgMHB4IDJweCAwcHg7XFxcIj5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IHRleHQ7YmFja2dyb3VuZC1jb2xvcjogIzlkMDBmZjMwO1xcXCI+SmV0cGFjayAoaG9sZCBzcGFjZSB0byBmbHkpIFxcdUQ4M0NcXHVERjkyXFx1RDgzRFxcdURDQTg8L3RkPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIiBpZD1cXFwiamV0cGFja1xcXCI+QWN0aXZhdGU8L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8dHIgc3R5bGU9XFxcImJveC1zaGFkb3c6IGdyZXkgMHB4IDJweCAwcHg7XFxcIj5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IHRleHQ7YmFja2dyb3VuZC1jb2xvcjogIzlkMDBmZjMwO1xcXCI+U3RlcDwvdGQ+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IGdyYXk7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiIGlkPVxcXCJzdGVwXFxcIj5BY3RpdmF0ZTwvdGQ+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDx0ciBzdHlsZT1cXFwiYm94LXNoYWRvdzogZ3JleSAwcHggMnB4IDBweDtcXFwiPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogdGV4dDtiYWNrZ3JvdW5kLWNvbG9yOiAjOWQwMGZmMzA7XFxcIj5TcGlkZXI8L3RkPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIiBpZD1cXFwic3BpZGVyXFxcIj5BY3RpdmF0ZTwvdGQ+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDx0ciBzdHlsZT1cXFwiYm94LXNoYWRvdzogZ3JleSAwcHggMnB4IDBweDtcXFwiPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogdGV4dDtiYWNrZ3JvdW5kLWNvbG9yOiAjOWQwMGZmMzA7XFxcIj5Ob2ZhbGw8L3RkPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIiBpZD1cXFwibm9mYWxsXFxcIj5BY3RpdmF0ZTwvdGQ+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDx0ciBzdHlsZT1cXFwiYm94LXNoYWRvdzogZ3JleSAwcHggMnB4IDBweDtcXFwiPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogdGV4dDtiYWNrZ3JvdW5kLWNvbG9yOiAjOWQwMGZmMzA7XFxcIj5GdWxsYnJpZ2h0PC90ZD5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCIgaWQ9XFxcImZ1bGxicmlnaHRcXFwiPkFjdGl2YXRlPC90ZD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICA8L3Rib2R5PjwvdGFibGU+XFxuICAgICAgPGEgc3R5bGU9XFxcImJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiB5ZWxsb3c7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1mYW1pbHk6IE1pbmVjcmFmdGlhLCBzYW5zLXNlcmlmOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgYm9yZGVyOiAwcHg7IG1hcmdpbi1yaWdodDogMXJlbTsgZm9udC1zaXplOiAxcmVtO1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL3JhZG1hbnBsYXlzL01ldGVvclgvaXNzdWVzL25ld1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPnN1Z2dlc3QgYSBuZXcgZmVhdHVyZS9oYWNrPC9hPlxcbiAgICAgIDxhIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6IG9yYW5nZTtjdXJzb3I6IHBvaW50ZXI7Zm9udC1mYW1pbHk6IE1pbmVjcmFmdGlhLCBzYW5zLXNlcmlmO3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO2JvcmRlcjogMHB4O2ZvbnQtc2l6ZTogMXJlbTtcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9vcmdzL0VhZ2xlclJlYm9ybi9kaXNjdXNzaW9ucy85XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+dmVyc2lvbiBSb2FkbWFwPC9hPlxcbiAgICAgIFxcbiAgICAgICAgPC9ndWk+XFxuICAgICAgXCI7IC8vIFNldCB0aGUgSFRNTCBjb250ZW50IG9mIHRoZSBcImd1aVwiIGVsZW1lbnRcbiAgICAgICAgZ3VpLmlkID0gXCJteUd1aVwiOyAvLyBTZXQgdGhlIElEIG9mIHRoZSBcImd1aVwiIGVsZW1lbnQgdG8gXCJteUd1aVwiXG4gICAgICAgIGd1aS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgZ3VpLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgZ3VpLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgZ3VpLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICBndWkuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICBndWkuc3R5bGUuekluZGV4ID0gJzEwJztcbiAgICAgICAgZ3VpLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgZ3VpLnN0eWxlLmZvbnRGYW1pbHkgPSAnTWluZWNyYWZ0aWEsIHNhbnMtc2VyaWYnO1xuICAgICAgICBndWkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuIHNjcm9sbCc7XG4gICAgICAgIGd1aS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSg4MCwgODAsIDgwLCAwLjQyKSc7XG4gICAgICAgIGd1aS5zdHlsZS5iYWNrZ3JvdW5kQmxlbmRNb2RlID0gJ211bHRpcGx5JztcbiAgICAgICAgZ3VpLnN0eWxlLmJhY2tncm91bmRTaXplID0gJzY0cHgnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGd1aSk7IC8vIEFwcGVuZCB0aGUgXCJndWlcIiBlbGVtZW50IHRvIHRoZSBib2R5IG9mIHRoZSBkb2N1bWVudFxuICAgICAgICBndWlWaXNpYmxlID0gdHJ1ZTsgLy8gU2V0IHRoZSBHVUkgdmlzaWJpbGl0eSB0byB0cnVlXG4gICAgICAgIHZhciBqZXRwYWNrRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiamV0cGFja1wiKTtcbiAgICAgICAgdmFyIHN0ZXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGVwXCIpO1xuICAgICAgICB2YXIgc3BpZGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BpZGVyXCIpO1xuICAgICAgICB2YXIgbm9mYWxsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9mYWxsXCIpO1xuICAgICAgICB2YXIgZnVsbGJyaWdodEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1bGxicmlnaHRcIik7XG4gICAgICAgIGpldHBhY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBzdGVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0ZXBFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICB9KTtcbiAgICAgICAgc3BpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBub2ZhbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoKDAsIGpldHBhY2tfMS5yZXR1cm5qZXRwYWNrdG9nZ2xlKSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgc3RlcF8xLnJldHVyblN0ZXBUb2dnbGUpKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzdGVwRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICBzdGVwRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBzcGlkZXJfMS5yZXR1cm5TcGlkZXJUb2dnbGUpKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzcGlkZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgbm9mYWxsXzEucmV0dXJuTm9mYWxsVG9nZ2xlKSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICBub2ZhbGxFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIGZ1bGxicmlnaHRfMS5yZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlKSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgamV0cGFja18xLnJldHVybmpldHBhY2t0b2dnbGUpKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIHN0ZXBfMS5yZXR1cm5TdGVwVG9nZ2xlKSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGVwRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgIHN0ZXBFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBzcGlkZXJfMS5yZXR1cm5TcGlkZXJUb2dnbGUpKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICBzcGlkZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBub2ZhbGxfMS5yZXR1cm5Ob2ZhbGxUb2dnbGUpKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG5vZmFsbEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICBub2ZhbGxFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBmdWxsYnJpZ2h0XzEucmV0dXJuRnVsbGJyaWdodFRvZ2dsZSkoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICBmdWxsYnJpZ2h0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIHN0ZXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKDAsIHN0ZXBfMS5yZXR1cm5TdGVwVG9nZ2xlKSgpICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc3RlcEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAoMCwgc3RlcF8xLnNldFN0ZXBUb2dnbGUpKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RlcEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIHN0ZXBFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICAoMCwgc3RlcF8xLnNldFN0ZXBUb2dnbGUpKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNwaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgoMCwgc3BpZGVyXzEucmV0dXJuU3BpZGVyVG9nZ2xlKSgpICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBzcGlkZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgKDAsIHNwaWRlcl8xLnNldFNwaWRlclRvZ2dsZSkodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGlkZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBzcGlkZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICAoMCwgc3BpZGVyXzEuc2V0U3BpZGVyVG9nZ2xlKShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBub2ZhbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKDAsIG5vZmFsbF8xLnJldHVybk5vZmFsbFRvZ2dsZSkoKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG5vZmFsbEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICgwLCBub2ZhbGxfMS5zZXROb2ZhbGxUb2dnbGUpKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgKDAsIG5vZmFsbF8xLnNldE5vZmFsbFRvZ2dsZSkoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgoMCwgZnVsbGJyaWdodF8xLnJldHVybkZ1bGxicmlnaHRUb2dnbGUpKCkgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBmdWxsYnJpZ2h0RWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBmdWxsYnJpZ2h0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICgwLCBmdWxsYnJpZ2h0XzEuc2V0RnVsbGJyaWdodFRvZ2dsZSkodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmdWxsYnJpZ2h0RWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgICgwLCBmdWxsYnJpZ2h0XzEuc2V0RnVsbGJyaWdodFRvZ2dsZSkoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgamV0cGFja0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGUgamV0cGFja0d1aUFjdGl2ZSBzdGF0ZVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSB0ZXh0IGFuZCBiYWNrZ3JvdW5kIGNvbG9yIGJhc2VkIG9uIHRoZSBzdGF0ZVxuICAgICAgICAgICAgaWYgKCgwLCBqZXRwYWNrXzEucmV0dXJuamV0cGFja3RvZ2dsZSkoKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgKDAsIGpldHBhY2tfMS5zZXRqZXRwYWNrdG9nZ2xlKSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgKDAsIGpldHBhY2tfMS5zZXRqZXRwYWNrdG9nZ2xlKShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoaWRlR3VpKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUd1aVwiKSkgeyAvLyBJZiB0aGUgXCJteUd1aVwiIGVsZW1lbnQgZXhpc3RzXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15R3VpXCIpLnJlbW92ZSgpOyAvLyBSZW1vdmUgdGhlIFwibXlHdWlcIiBlbGVtZW50IGZyb20gdGhlIGRvY3VtZW50XG4gICAgICAgIH1cbiAgICAgICAgZ3VpVmlzaWJsZSA9IGZhbHNlOyAvLyBTZXQgdGhlIEdVSSB2aXNpYmlsaXR5IHRvIGZhbHNlXG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJTaGlmdFwiICYmIGV2ZW50LmxvY2F0aW9uID09PSBLZXlib2FyZEV2ZW50LkRPTV9LRVlfTE9DQVRJT05fUklHSFQpIHsgLy8gSWYgdGhlIHJpZ2h0IFNoaWZ0IGtleSBpcyBwcmVzc2VkXG4gICAgICAgICAgICB0b2dnbGVHdWkoKTsgLy8gVG9nZ2xlIHRoZSBHVUkgdmlzaWJpbGl0eVxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIgfHwgZXZlbnQua2V5ID09PSBcImBcIikgeyAvLyBJZiB0aGUgRXNjYXBlIGtleSBvciBiYWNrdGljayBpcyBwcmVzc2VkXG4gICAgICAgICAgICBoaWRlR3VpKCk7IC8vIEhpZGUgdGhlIEdVSVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyZ3VpID0gcmVnaXN0ZXJndWk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmV0dXJuamV0cGFja3RvZ2dsZSA9IGV4cG9ydHMuc2V0amV0cGFja3RvZ2dsZSA9IGV4cG9ydHMucmVnaXN0ZXJqZXRwYWNrID0gdm9pZCAwO1xudmFyIGpldHBhY2tndWlhY3RpdmUgPSBmYWxzZTtcbmZ1bmN0aW9uIHJlZ2lzdGVyamV0cGFjaygpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkucmVxdWlyZShcInBsYXllclwiKTtcbiAgICB2YXIgamV0cGFja0FjdGl2ZSA9IGZhbHNlO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSBcIiBcIikge1xuICAgICAgICAgICAgamV0cGFja0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICBqZXRwYWNrQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChqZXRwYWNrZ3VpYWN0aXZlID09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoIWpldHBhY2tBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIubW90aW9uWSArPSAwLjI7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVnaXN0ZXJqZXRwYWNrID0gcmVnaXN0ZXJqZXRwYWNrO1xuZnVuY3Rpb24gc2V0amV0cGFja3RvZ2dsZSh0aGVCb29sZWFuKSB7XG4gICAgamV0cGFja2d1aWFjdGl2ZSA9IHRoZUJvb2xlYW47XG59XG5leHBvcnRzLnNldGpldHBhY2t0b2dnbGUgPSBzZXRqZXRwYWNrdG9nZ2xlO1xuZnVuY3Rpb24gcmV0dXJuamV0cGFja3RvZ2dsZSgpIHtcbiAgICByZXR1cm4gamV0cGFja2d1aWFjdGl2ZTtcbn1cbmV4cG9ydHMucmV0dXJuamV0cGFja3RvZ2dsZSA9IHJldHVybmpldHBhY2t0b2dnbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmV0dXJuTm9mYWxsVG9nZ2xlID0gZXhwb3J0cy5zZXROb2ZhbGxUb2dnbGUgPSBleHBvcnRzLnJlZ2lzdGVyTm9mYWxsID0gdm9pZCAwO1xudmFyIG5vZmFsbFRvZ2dsZSA9IGZhbHNlO1xuZnVuY3Rpb24gcmVnaXN0ZXJOb2ZhbGwoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5yZXF1aXJlKFwibmV0d29ya1wiKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChQbHVnaW5BUEkucGxheWVyLmZhbGxEaXN0YW5jZSA+IDIuMCAmJiBub2ZhbGxUb2dnbGUpIHsgLy8gdHkgenhtdXNocm9vbVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLm5ldHdvcmsuc2VuZFBhY2tldFBsYXllcih7IGlzT25Hcm91bmQ6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVnaXN0ZXJOb2ZhbGwgPSByZWdpc3Rlck5vZmFsbDtcbmZ1bmN0aW9uIHNldE5vZmFsbFRvZ2dsZSh0aGVCb29sZWFuKSB7XG4gICAgbm9mYWxsVG9nZ2xlID0gdGhlQm9vbGVhbjtcbn1cbmV4cG9ydHMuc2V0Tm9mYWxsVG9nZ2xlID0gc2V0Tm9mYWxsVG9nZ2xlO1xuZnVuY3Rpb24gcmV0dXJuTm9mYWxsVG9nZ2xlKCkge1xuICAgIHJldHVybiBub2ZhbGxUb2dnbGU7XG59XG5leHBvcnRzLnJldHVybk5vZmFsbFRvZ2dsZSA9IHJldHVybk5vZmFsbFRvZ2dsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXR1cm5TcGlkZXJUb2dnbGUgPSBleHBvcnRzLnNldFNwaWRlclRvZ2dsZSA9IGV4cG9ydHMucmVnaXN0ZXJTcGlkZXIgPSB2b2lkIDA7XG52YXIgc3BpZGVyVG9nZ2xlID0gZmFsc2U7XG5mdW5jdGlvbiByZWdpc3RlclNwaWRlcigpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoUGx1Z2luQVBJLnBsYXllci5pc0NvbGxpZGVkSG9yaXpvbnRhbGx5ICYmIHNwaWRlclRvZ2dsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLm1vdGlvblkgPSAwLjI7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIC8vUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlcIiwgKGV2ZW50KSA9PiB7XG4gICAgLy9AIHRzLWlnbm9yZVxuICAgIC8vaWYgKGV2ZW50LmtleSA9PSAyMikge1xuICAgIC8vc3BpZGVyVG9nZ2xlID0gIXNwaWRlclRvZ2dsZVxuICAgIC8vaWYgKHNwaWRlclRvZ2dsZSA9PSB0cnVlKSB7XG4gICAgLy9kaXNwbGF5VG9DaGF0KFwiwqdkwqdsW01ldGVvclhdIMKncsKnZUVuYWJsZWQgc3BpZGVyLlwiKVxuICAgIC8vfSBlbHNlIHtcbiAgICAvL2Rpc3BsYXlUb0NoYXQoXCLCp2TCp2xbTWV0ZW9yWF0gwqdywqdlRGlzYWJsZWQgc3BpZGVyLlwiKVxuICAgIC8vfVxufVxuZXhwb3J0cy5yZWdpc3RlclNwaWRlciA9IHJlZ2lzdGVyU3BpZGVyO1xuLy99KVxuLy99XG5mdW5jdGlvbiBzZXRTcGlkZXJUb2dnbGUodGhlQm9vbGVhbikge1xuICAgIHNwaWRlclRvZ2dsZSA9IHRoZUJvb2xlYW47IC8vIHl3IHJhZG1hbiA6M1xufVxuZXhwb3J0cy5zZXRTcGlkZXJUb2dnbGUgPSBzZXRTcGlkZXJUb2dnbGU7XG5mdW5jdGlvbiByZXR1cm5TcGlkZXJUb2dnbGUoKSB7XG4gICAgcmV0dXJuIHNwaWRlclRvZ2dsZTtcbn1cbmV4cG9ydHMucmV0dXJuU3BpZGVyVG9nZ2xlID0gcmV0dXJuU3BpZGVyVG9nZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldHVyblN0ZXBUb2dnbGUgPSBleHBvcnRzLnNldFN0ZXBUb2dnbGUgPSBleHBvcnRzLnJlZ2lzdGVyU3RlcCA9IHZvaWQgMDtcbnZhciBzdGVwVG9nZ2xlID0gZmFsc2U7XG5mdW5jdGlvbiByZWdpc3RlclN0ZXAoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHN0ZXBUb2dnbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5zdGVwSGVpZ2h0ID0gMTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnN0ZXBIZWlnaHQgPSAwLjU7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gQHRzLWlnbm9yZSBcbiAgICAvL1BsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwia2V5XCIsIChldmVudCk9PnsgY29tbWVudCBvdXQgY29kZSByYWRtYW4gbGlrZWx5IHdvbid0IHVzZVxuICAgIC8vaWYgKGV2ZW50LmtleSA9PSA0Nykge1xuICAgIC8vICBzdGVwVG9nZ2xlID0gIXN0ZXBUb2dnbGU7XG4gICAgLy8gaWYgKHN0ZXBUb2dnbGUgPT0gdHJ1ZSkge1xuICAgIC8vICAgZGlzcGxheVRvQ2hhdChcIsKnZMKnbFtNZXRlb3JYXSDCp3LCp2VFbmFibGVkIHN0ZXAuXCIpXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgICBkaXNwbGF5VG9DaGF0KFwiwqdkwqdsW01ldGVvclhdIMKncsKnZURpc2FibGVkIHN0ZXAuXCIpXG4gICAgLy8gfVxuICAgIC8vIH1cbiAgICAvLyAgfSlcbn1cbmV4cG9ydHMucmVnaXN0ZXJTdGVwID0gcmVnaXN0ZXJTdGVwO1xuZnVuY3Rpb24gc2V0U3RlcFRvZ2dsZSh0aGVCb29sZWFuKSB7XG4gICAgc3RlcFRvZ2dsZSA9IHRoZUJvb2xlYW47IC8vIHl3IHJhZG1hbiA6M1xufVxuZXhwb3J0cy5zZXRTdGVwVG9nZ2xlID0gc2V0U3RlcFRvZ2dsZTtcbmZ1bmN0aW9uIHJldHVyblN0ZXBUb2dnbGUoKSB7XG4gICAgcmV0dXJuIHN0ZXBUb2dnbGU7XG59XG5leHBvcnRzLnJldHVyblN0ZXBUb2dnbGUgPSByZXR1cm5TdGVwVG9nZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnV3dWlmeSA9IHZvaWQgMDtcbmZ1bmN0aW9uIHV3dWlmeShzdHJpbmdUb1V3dWlmeSkge1xuICAgIC8vIFVzYWdlOlxuICAgIC8vIHV3dWlmeShcIllvdXIgdGV4dCBoZXJlXCIpO1xuICAgIHN0cmluZ1RvVXd1aWZ5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcnxsL2csICd3JykucmVwbGFjZSgvbihbYWVpb3VdKS9nLCAnbnkkMScpLnJlcGxhY2UoL292ZS9nLCAndXZlJykucmVwbGFjZSgvdWNrL2csICd1d3EnKVxuICAgICAgICAucmVwbGFjZSgvXmkvLCAnaS1pJykucmVwbGFjZSgvKC4qKWktaS1pLywgJyQxaS1pJykgKyAoTWF0aC5yYW5kb20oKSA8PSAwLjIgPyAnID5fPCcgOiAnJyk7XG59XG5leHBvcnRzLnV3dWlmeSA9IHV3dWlmeTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBndWlfMSA9IHJlcXVpcmUoXCIuL2d1aVwiKTtcbnZhciBzcGlkZXJfMSA9IHJlcXVpcmUoXCIuL3NwaWRlclwiKTtcbnZhciBzdGVwXzEgPSByZXF1aXJlKFwiLi9zdGVwXCIpO1xudmFyIG5vZmFsbF8xID0gcmVxdWlyZShcIi4vbm9mYWxsXCIpO1xudmFyIGpldHBhY2tfMSA9IHJlcXVpcmUoXCIuL2pldHBhY2tcIik7XG52YXIgZnVsbGJyaWdodF8xID0gcmVxdWlyZShcIi4vZnVsbGJyaWdodFwiKTtcbnZhciBjbWRzXzEgPSByZXF1aXJlKFwiLi9jbWRzXCIpO1xudmFyIGpldHBhY2tndWlhY3RpdmUgPSBmYWxzZTtcbmNvbnNvbGUubG9nKFwiW01ldGVvclhdIExvYWRpbmcgY2xpZW50Li4uXCIpO1xuKDAsIGNtZHNfMS5yZWdpc3RlcmNtZHMpKCk7XG4oMCwgZ3VpXzEucmVnaXN0ZXJndWkpKCk7XG4oMCwgamV0cGFja18xLnJlZ2lzdGVyamV0cGFjaykoKTtcbigwLCBzcGlkZXJfMS5yZWdpc3RlclNwaWRlcikoKTtcbigwLCBzdGVwXzEucmVnaXN0ZXJTdGVwKSgpO1xuKDAsIG5vZmFsbF8xLnJlZ2lzdGVyTm9mYWxsKSgpO1xuKDAsIGZ1bGxicmlnaHRfMS5yZWdpc3RlckZ1bGxicmlnaHQpKCk7XG5jb25zb2xlLmxvZyhcIltNZXRlb3JYXSBGaW5pc2hlZCBsb2FkaW5nIGNsaWVudCFcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=