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
        if (jetpackguiactive === false) {
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
        if (jetpackguiactive === true) {
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
(0, gui_1.registergui)(jetpackguiactive);
(0, jetpack_1.registerjetpack)(jetpackguiactive);
(0, spider_1.registerSpider)();
(0, step_1.registerStep)();
(0, nofall_1.registerNofall)();
(0, fullbright_1.registerFullbright)();
console.log("[MeteorX] Finished loading client!");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsWUFBWSxtQkFBTyxDQUFDLDJCQUFPO0FBQzNCLGVBQWUsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqQyxhQUFhLG1CQUFPLENBQUMsNkJBQVE7QUFDN0IsZUFBZSxtQkFBTyxDQUFDLGlDQUFVO0FBQ2pDLGdCQUFnQixtQkFBTyxDQUFDLG1DQUFXO0FBQ25DLG1CQUFtQixtQkFBTyxDQUFDLHlDQUFjO0FBQ3pDLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21ldGVvcngvLi9zcmMvY21kcy50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL2Z1bGxicmlnaHQudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9ndWkudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9qZXRwYWNrLnRzIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvbm9mYWxsLnRzIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvc3BpZGVyLnRzIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvc3RlcC50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL3V3dWFwaS50cyIsIndlYnBhY2s6Ly9tZXRlb3J4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVnaXN0ZXJjbWRzID0gdm9pZCAwO1xudmFyIHV3dWFwaV8xID0gcmVxdWlyZShcIi4vdXd1YXBpXCIpO1xudmFyIHZlcnNpb24gPSBcInYxLjBcIjtcbnZhciBjbWRzID0gXCIudmVyc2lvbiAsIC5oZWxwICwgLmlwICwgLnV3dWlmeVwiO1xuZnVuY3Rpb24gcmVnaXN0ZXJjbWRzKCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwicGFja2V0am9pbmdhbWVcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHZhciBzZXJ2ZXJpcCA9IGV2LmlwO1xuICAgIH0pO1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwic2VuZGNoYXRtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQubWVzc2FnZSA9PT0gXCIudmVyc2lvblwiKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5kaXNwbGF5VG9DaGF0KHsgbXNnOiBcInlvdSBhcmUgY3VycmVudGx5IHVzaW5nIHRoZSBcIiArIHZlcnNpb24gKyBcIiB2ZXJzaW9uIG9mIE1ldGVvclguXCIgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50Lm1lc3NhZ2UgPT09IFwiLmhlbHBcIikge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkuZGlzcGxheVRvQ2hhdCh7IG1zZzogXCJNZXRlb3JYIGNvbW1hbmRzIDogXCIgKyBjbWRzICsgXCIgXCIgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50Lm1lc3NhZ2UgPT09IFwiLmlwXCIpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLmRpc3BsYXlUb0NoYXQoeyBtc2c6IFwidGhlIGlwIG9mIHRoZSBjdXJyZW50IHNlcnZlciB5b3UgYXJlIHBsYXlpbmc6IFwiICsgc2VydmVyaXAgKyBcIiBcIiB9KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQubWVzc2FnZSA9PT0gXCIudXd1aWZ5XCIpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLmRpc3BsYXlUb0NoYXQoeyBtc2c6IFwidXNhZ2U6IC51d3VpZnkgW21lc3NhZ2VdXCIgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50Lm1lc3NhZ2Uuc3RhcnRzV2l0aChcIi51d3VpZnkgXCIpKSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZUFmdGVyID0gZXZlbnQubWVzc2FnZS5zdWJzdHJpbmcoXCIuZXhhbXBsZSBtZXNzYWdlIFwiLmxlbmd0aCk7XG4gICAgICAgICAgICAoMCwgdXd1YXBpXzEudXd1aWZ5KShtZXNzYWdlQWZ0ZXIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyY21kcyA9IHJlZ2lzdGVyY21kcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlID0gZXhwb3J0cy5zZXRGdWxsYnJpZ2h0VG9nZ2xlID0gZXhwb3J0cy5yZWdpc3RlckZ1bGxicmlnaHQgPSB2b2lkIDA7XG52YXIgZnVsbGJyaWdodFRvZ2dsZSA9IGZhbHNlO1xuZnVuY3Rpb24gcmVnaXN0ZXJGdWxsYnJpZ2h0KCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGZ1bGxicmlnaHRUb2dnbGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLmJsb2Nrcy5haXIubGlnaHRWYWx1ZSA9IDA7IC8vU2V0IHRoZSBhaXIncyBsaWdodCBsZXZlbCB0byAwLlxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkuYmxvY2tzLmFpci5yZWxvYWQoKTsgLy9TYXZlIGNoYW5nZXMgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLmJsb2Nrcy5haXIubGlnaHRWYWx1ZSA9IDEwOyAvL1NldCB0aGUgYWlyJ3MgbGlnaHQgbGV2ZWwgdG8gMTAuXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5ibG9ja3MuYWlyLnJlbG9hZCgpOyAvL1NhdmUgY2hhbmdlc1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyRnVsbGJyaWdodCA9IHJlZ2lzdGVyRnVsbGJyaWdodDtcbmZ1bmN0aW9uIHNldEZ1bGxicmlnaHRUb2dnbGUodGhlQm9vbGVhbikge1xuICAgIGZ1bGxicmlnaHRUb2dnbGUgPSB0aGVCb29sZWFuO1xufVxuZXhwb3J0cy5zZXRGdWxsYnJpZ2h0VG9nZ2xlID0gc2V0RnVsbGJyaWdodFRvZ2dsZTtcbmZ1bmN0aW9uIHJldHVybkZ1bGxicmlnaHRUb2dnbGUoKSB7XG4gICAgcmV0dXJuIGZ1bGxicmlnaHRUb2dnbGU7XG59XG5leHBvcnRzLnJldHVybkZ1bGxicmlnaHRUb2dnbGUgPSByZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlZ2lzdGVyZ3VpID0gdm9pZCAwO1xudmFyIHN0ZXBfMSA9IHJlcXVpcmUoXCIuL3N0ZXBcIik7XG52YXIgc3BpZGVyXzEgPSByZXF1aXJlKFwiLi9zcGlkZXJcIik7XG52YXIgbm9mYWxsXzEgPSByZXF1aXJlKFwiLi9ub2ZhbGxcIik7XG52YXIgZnVsbGJyaWdodF8xID0gcmVxdWlyZShcIi4vZnVsbGJyaWdodFwiKTtcbmZ1bmN0aW9uIHJlZ2lzdGVyZ3VpKGpldHBhY2tndWlhY3RpdmUpIHtcbiAgICB2YXIgZ3VpVmlzaWJsZSA9IGZhbHNlOyAvLyBWYXJpYWJsZSB0byBrZWVwIHRyYWNrIG9mIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBHVUlcbiAgICBmdW5jdGlvbiB0b2dnbGVHdWkoKSB7XG4gICAgICAgIGlmIChndWlWaXNpYmxlKSB7IC8vIElmIHRoZSBHVUkgaXMgdmlzaWJsZVxuICAgICAgICAgICAgaGlkZUd1aSgpOyAvLyBIaWRlIHRoZSBHVUlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNob3dHdWkoKTsgLy8gT3RoZXJ3aXNlLCBzaG93IHRoZSBHVUlcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzaG93R3VpKCkge1xuICAgICAgICBoaWRlR3VpKCk7IC8vIElmIHRoZSBHVUkgaXMgYWxyZWFkeSBvcGVuLCB0aGlzIHdpbGwgaGlkZSBpdC5cbiAgICAgICAgdmFyIGd1aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJndWlcIik7IC8vIENyZWF0ZSBhIG5ldyBcImd1aVwiIGVsZW1lbnRcbiAgICAgICAgaWYgKGRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5leGl0UG9pbnRlckxvY2soKTtcbiAgICAgICAgfVxuICAgICAgICBndWkuaW5uZXJIVE1MID0gXCJcXG4gICAgICA8Z3VpIGlkPVxcXCJteUd1aVxcXCIgc3R5bGU9XFxcIndpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtwb3NpdGlvbjogZml4ZWQ7dG9wOiAwcHg7bGVmdDogMHB4O3otaW5kZXg6IDEwO2NvbG9yOiB3aGl0ZTtmb250LWZhbWlseTogTWluZWNyYWZ0aWEsIHNhbnMtc2VyaWY7b3ZlcmZsb3c6IGhpZGRlbiBzY3JvbGw7YmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODAsIDgwLCAwLjQyKTtiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O2JhY2tncm91bmQtc2l6ZTogNjRweDtcXFwiPlxcbiAgICAgIDxoMSBzdHlsZT1cXFwidGV4dC1zaGFkb3c6IDBweCAwcHggNHB4O1xcXCI+TWV0ZW9yWCBHVUk8L2gxPlxcbiAgICAgIDxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuOHJlbTsgY29sb3I6IHllbGxvdztcXFwiPih0b3RhbGx5IG5vdCBzdG9sZW4gZnJvbSBwbHVnaW4gbWFuYWdlcidzIGd1aSk8L3A+PHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44cmVtOyBjb2xvcjogeWVsbG93O1xcXCI+aWsgdGhlIGd1aSBsb29rcyBraW5kYSBiYWQgZm9yIGEgaGFja2VkIGNsaWVudCBidXQgaXRzIG1ldGVvclggYWxwaGEgaWcuIGkgV0lMTCB1cGRhdGUgdGhpcyBndWkgaW4gdGhlIGZ1dHVyZTwvcD48cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjhyZW07IGNvbG9yOiBvcmFuZ2VyZWQ7XFxcIj5jbGljayBvbiBcXFwiQWN0aXZhdGVcXFwiIHRvIGFjdGl2YXRlIGEgaGFjayBhbmQgY2xpY2sgb24gXFxcIkRlYWN0aXZhdGVcXFwiIHRvIGRlYWN0aXZhdGUgYSBoYWNrPC9wPlxcbiAgICAgIDx0YWJsZSBzdHlsZT1cXFwidGFibGUtbGF5b3V0OiBmaXhlZDsgd2lkdGg6IDEwMCU7XFxcIj5cXG4gICAgICAgICAgPHRib2R5Pjx0ciBzdHlsZT1cXFwiYmFja2dyb3VuZDogcmdiKDgwLCA4MCwgODApO1xcXCI+XFxuICAgICAgICAgICAgICA8dGggc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlcjtcXFwiPkhhY2tzPC90aD5cXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT1cXFwidGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogMTUlO1xcXCI+QWN0aXZhdGUvRGVhY3RpdmF0ZTwvdGg+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDx0ciBzdHlsZT1cXFwiYm94LXNoYWRvdzogZ3JleSAwcHggMnB4IDBweDtcXFwiPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogdGV4dDtiYWNrZ3JvdW5kLWNvbG9yOiAjOWQwMGZmMzA7XFxcIj5KZXRwYWNrIChob2xkIHNwYWNlIHRvIGZseSkgXFx1RDgzQ1xcdURGOTJcXHVEODNEXFx1RENBODwvdGQ+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IGdyYXk7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiIGlkPVxcXCJqZXRwYWNrXFxcIj5BY3RpdmF0ZTwvdGQ+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDx0ciBzdHlsZT1cXFwiYm94LXNoYWRvdzogZ3JleSAwcHggMnB4IDBweDtcXFwiPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogdGV4dDtiYWNrZ3JvdW5kLWNvbG9yOiAjOWQwMGZmMzA7XFxcIj5TdGVwPC90ZD5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCIgaWQ9XFxcInN0ZXBcXFwiPkFjdGl2YXRlPC90ZD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgICAgPHRyIHN0eWxlPVxcXCJib3gtc2hhZG93OiBncmV5IDBweCAycHggMHB4O1xcXCI+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInVzZXItc2VsZWN0OiB0ZXh0O2JhY2tncm91bmQtY29sb3I6ICM5ZDAwZmYzMDtcXFwiPlNwaWRlcjwvdGQ+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IGdyYXk7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiIGlkPVxcXCJzcGlkZXJcXFwiPkFjdGl2YXRlPC90ZD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgICAgPHRyIHN0eWxlPVxcXCJib3gtc2hhZG93OiBncmV5IDBweCAycHggMHB4O1xcXCI+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInVzZXItc2VsZWN0OiB0ZXh0O2JhY2tncm91bmQtY29sb3I6ICM5ZDAwZmYzMDtcXFwiPk5vZmFsbDwvdGQ+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IGdyYXk7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiIGlkPVxcXCJub2ZhbGxcXFwiPkFjdGl2YXRlPC90ZD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgICAgPHRyIHN0eWxlPVxcXCJib3gtc2hhZG93OiBncmV5IDBweCAycHggMHB4O1xcXCI+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInVzZXItc2VsZWN0OiB0ZXh0O2JhY2tncm91bmQtY29sb3I6ICM5ZDAwZmYzMDtcXFwiPkZ1bGxicmlnaHQ8L3RkPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIiBpZD1cXFwiZnVsbGJyaWdodFxcXCI+QWN0aXZhdGU8L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgIDwvdGJvZHk+PC90YWJsZT5cXG4gICAgICA8YSBzdHlsZT1cXFwiYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHllbGxvdzsgY3Vyc29yOiBwb2ludGVyOyBmb250LWZhbWlseTogTWluZWNyYWZ0aWEsIHNhbnMtc2VyaWY7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBib3JkZXI6IDBweDsgbWFyZ2luLXJpZ2h0OiAxcmVtOyBmb250LXNpemU6IDFyZW07XFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vcmFkbWFucGxheXMvTWV0ZW9yWC9pc3N1ZXMvbmV3XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+c3VnZ2VzdCBhIG5ldyBmZWF0dXJlL2hhY2s8L2E+XFxuICAgICAgPGEgc3R5bGU9XFxcImJhY2tncm91bmQ6IHRyYW5zcGFyZW50O3RleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogb3JhbmdlO2N1cnNvcjogcG9pbnRlcjtmb250LWZhbWlseTogTWluZWNyYWZ0aWEsIHNhbnMtc2VyaWY7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Ym9yZGVyOiAwcHg7Zm9udC1zaXplOiAxcmVtO1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL29yZ3MvRWFnbGVyUmVib3JuL2Rpc2N1c3Npb25zLzlcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj52ZXJzaW9uIFJvYWRtYXA8L2E+XFxuICAgICAgXFxuICAgICAgICA8L2d1aT5cXG4gICAgICBcIjsgLy8gU2V0IHRoZSBIVE1MIGNvbnRlbnQgb2YgdGhlIFwiZ3VpXCIgZWxlbWVudFxuICAgICAgICBndWkuaWQgPSBcIm15R3VpXCI7IC8vIFNldCB0aGUgSUQgb2YgdGhlIFwiZ3VpXCIgZWxlbWVudCB0byBcIm15R3VpXCJcbiAgICAgICAgZ3VpLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICBndWkuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICBndWkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBndWkuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIGd1aS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIGd1aS5zdHlsZS56SW5kZXggPSAnMTAnO1xuICAgICAgICBndWkuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICBndWkuc3R5bGUuZm9udEZhbWlseSA9ICdNaW5lY3JhZnRpYSwgc2Fucy1zZXJpZic7XG4gICAgICAgIGd1aS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4gc2Nyb2xsJztcbiAgICAgICAgZ3VpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDgwLCA4MCwgODAsIDAuNDIpJztcbiAgICAgICAgZ3VpLnN0eWxlLmJhY2tncm91bmRCbGVuZE1vZGUgPSAnbXVsdGlwbHknO1xuICAgICAgICBndWkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnNjRweCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ3VpKTsgLy8gQXBwZW5kIHRoZSBcImd1aVwiIGVsZW1lbnQgdG8gdGhlIGJvZHkgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgIGd1aVZpc2libGUgPSB0cnVlOyAvLyBTZXQgdGhlIEdVSSB2aXNpYmlsaXR5IHRvIHRydWVcbiAgICAgICAgdmFyIGpldHBhY2tFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqZXRwYWNrXCIpO1xuICAgICAgICB2YXIgc3RlcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0ZXBcIik7XG4gICAgICAgIHZhciBzcGlkZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGlkZXJcIik7XG4gICAgICAgIHZhciBub2ZhbGxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub2ZhbGxcIik7XG4gICAgICAgIHZhciBmdWxsYnJpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVsbGJyaWdodFwiKTtcbiAgICAgICAgamV0cGFja0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0ZXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBzcGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZmFsbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBub2ZhbGxFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICB9KTtcbiAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdWxsYnJpZ2h0RWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChqZXRwYWNrZ3VpYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgc3RlcF8xLnJldHVyblN0ZXBUb2dnbGUpKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzdGVwRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICBzdGVwRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBzcGlkZXJfMS5yZXR1cm5TcGlkZXJUb2dnbGUpKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzcGlkZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgbm9mYWxsXzEucmV0dXJuTm9mYWxsVG9nZ2xlKSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICBub2ZhbGxFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIGZ1bGxicmlnaHRfMS5yZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlKSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChqZXRwYWNrZ3VpYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBzdGVwXzEucmV0dXJuU3RlcFRvZ2dsZSkoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RlcEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICBzdGVwRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgc3BpZGVyXzEucmV0dXJuU3BpZGVyVG9nZ2xlKSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzcGlkZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgbm9mYWxsXzEucmV0dXJuTm9mYWxsVG9nZ2xlKSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBub2ZhbGxFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgZnVsbGJyaWdodF8xLnJldHVybkZ1bGxicmlnaHRUb2dnbGUpKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBzdGVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCgwLCBzdGVwXzEucmV0dXJuU3RlcFRvZ2dsZSkoKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHN0ZXBFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIHN0ZXBFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgKDAsIHN0ZXBfMS5zZXRTdGVwVG9nZ2xlKSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0ZXBFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBzdGVwRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgKDAsIHN0ZXBfMS5zZXRTdGVwVG9nZ2xlKShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzcGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKDAsIHNwaWRlcl8xLnJldHVyblNwaWRlclRvZ2dsZSkoKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICgwLCBzcGlkZXJfMS5zZXRTcGlkZXJUb2dnbGUpKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgKDAsIHNwaWRlcl8xLnNldFNwaWRlclRvZ2dsZSkoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbm9mYWxsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCgwLCBub2ZhbGxfMS5yZXR1cm5Ob2ZhbGxUb2dnbGUpKCkgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBub2ZhbGxFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIG5vZmFsbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAoMCwgbm9mYWxsXzEuc2V0Tm9mYWxsVG9nZ2xlKSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZmFsbEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIG5vZmFsbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgICgwLCBub2ZhbGxfMS5zZXROb2ZhbGxUb2dnbGUpKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKDAsIGZ1bGxicmlnaHRfMS5yZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlKSgpICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAoMCwgZnVsbGJyaWdodF8xLnNldEZ1bGxicmlnaHRUb2dnbGUpKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICAoMCwgZnVsbGJyaWdodF8xLnNldEZ1bGxicmlnaHRUb2dnbGUpKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGpldHBhY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGpldHBhY2tHdWlBY3RpdmUgc3RhdGVcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGV4dCBhbmQgYmFja2dyb3VuZCBjb2xvciBiYXNlZCBvbiB0aGUgc3RhdGVcbiAgICAgICAgICAgIGlmIChqZXRwYWNrZ3VpYWN0aXZlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBqZXRwYWNrZ3VpYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgamV0cGFja2d1aWFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGlkZUd1aSgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlHdWlcIikpIHsgLy8gSWYgdGhlIFwibXlHdWlcIiBlbGVtZW50IGV4aXN0c1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUd1aVwiKS5yZW1vdmUoKTsgLy8gUmVtb3ZlIHRoZSBcIm15R3VpXCIgZWxlbWVudCBmcm9tIHRoZSBkb2N1bWVudFxuICAgICAgICB9XG4gICAgICAgIGd1aVZpc2libGUgPSBmYWxzZTsgLy8gU2V0IHRoZSBHVUkgdmlzaWJpbGl0eSB0byBmYWxzZVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiU2hpZnRcIiAmJiBldmVudC5sb2NhdGlvbiA9PT0gS2V5Ym9hcmRFdmVudC5ET01fS0VZX0xPQ0FUSU9OX1JJR0hUKSB7IC8vIElmIHRoZSByaWdodCBTaGlmdCBrZXkgaXMgcHJlc3NlZFxuICAgICAgICAgICAgdG9nZ2xlR3VpKCk7IC8vIFRvZ2dsZSB0aGUgR1VJIHZpc2liaWxpdHlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiIHx8IGV2ZW50LmtleSA9PT0gXCJgXCIpIHsgLy8gSWYgdGhlIEVzY2FwZSBrZXkgb3IgYmFja3RpY2sgaXMgcHJlc3NlZFxuICAgICAgICAgICAgaGlkZUd1aSgpOyAvLyBIaWRlIHRoZSBHVUlcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5yZWdpc3Rlcmd1aSA9IHJlZ2lzdGVyZ3VpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlZ2lzdGVyamV0cGFjayA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlZ2lzdGVyamV0cGFjayhqZXRwYWNrZ3VpYWN0aXZlKSB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG4gICAgdmFyIGpldHBhY2tBY3RpdmUgPSBmYWxzZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGpldHBhY2tBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSBcIiBcIikge1xuICAgICAgICAgICAgamV0cGFja0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoamV0cGFja2d1aWFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICghamV0cGFja0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5tb3Rpb25ZICs9IDAuMjtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5yZWdpc3RlcmpldHBhY2sgPSByZWdpc3RlcmpldHBhY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmV0dXJuTm9mYWxsVG9nZ2xlID0gZXhwb3J0cy5zZXROb2ZhbGxUb2dnbGUgPSBleHBvcnRzLnJlZ2lzdGVyTm9mYWxsID0gdm9pZCAwO1xudmFyIG5vZmFsbFRvZ2dsZSA9IGZhbHNlO1xuZnVuY3Rpb24gcmVnaXN0ZXJOb2ZhbGwoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5yZXF1aXJlKFwibmV0d29ya1wiKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChQbHVnaW5BUEkucGxheWVyLmZhbGxEaXN0YW5jZSA+IDIuMCAmJiBub2ZhbGxUb2dnbGUpIHsgLy8gdHkgenhtdXNocm9vbVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLm5ldHdvcmsuc2VuZFBhY2tldFBsYXllcih7IGlzT25Hcm91bmQ6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVnaXN0ZXJOb2ZhbGwgPSByZWdpc3Rlck5vZmFsbDtcbmZ1bmN0aW9uIHNldE5vZmFsbFRvZ2dsZSh0aGVCb29sZWFuKSB7XG4gICAgbm9mYWxsVG9nZ2xlID0gdGhlQm9vbGVhbjtcbn1cbmV4cG9ydHMuc2V0Tm9mYWxsVG9nZ2xlID0gc2V0Tm9mYWxsVG9nZ2xlO1xuZnVuY3Rpb24gcmV0dXJuTm9mYWxsVG9nZ2xlKCkge1xuICAgIHJldHVybiBub2ZhbGxUb2dnbGU7XG59XG5leHBvcnRzLnJldHVybk5vZmFsbFRvZ2dsZSA9IHJldHVybk5vZmFsbFRvZ2dsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXR1cm5TcGlkZXJUb2dnbGUgPSBleHBvcnRzLnNldFNwaWRlclRvZ2dsZSA9IGV4cG9ydHMucmVnaXN0ZXJTcGlkZXIgPSB2b2lkIDA7XG52YXIgc3BpZGVyVG9nZ2xlID0gZmFsc2U7XG5mdW5jdGlvbiByZWdpc3RlclNwaWRlcigpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoUGx1Z2luQVBJLnBsYXllci5pc0NvbGxpZGVkSG9yaXpvbnRhbGx5ICYmIHNwaWRlclRvZ2dsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLm1vdGlvblkgPSAwLjI7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIC8vUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlcIiwgKGV2ZW50KSA9PiB7XG4gICAgLy9AIHRzLWlnbm9yZVxuICAgIC8vaWYgKGV2ZW50LmtleSA9PSAyMikge1xuICAgIC8vc3BpZGVyVG9nZ2xlID0gIXNwaWRlclRvZ2dsZVxuICAgIC8vaWYgKHNwaWRlclRvZ2dsZSA9PSB0cnVlKSB7XG4gICAgLy9kaXNwbGF5VG9DaGF0KFwiwqdkwqdsW01ldGVvclhdIMKncsKnZUVuYWJsZWQgc3BpZGVyLlwiKVxuICAgIC8vfSBlbHNlIHtcbiAgICAvL2Rpc3BsYXlUb0NoYXQoXCLCp2TCp2xbTWV0ZW9yWF0gwqdywqdlRGlzYWJsZWQgc3BpZGVyLlwiKVxuICAgIC8vfVxufVxuZXhwb3J0cy5yZWdpc3RlclNwaWRlciA9IHJlZ2lzdGVyU3BpZGVyO1xuLy99KVxuLy99XG5mdW5jdGlvbiBzZXRTcGlkZXJUb2dnbGUodGhlQm9vbGVhbikge1xuICAgIHNwaWRlclRvZ2dsZSA9IHRoZUJvb2xlYW47IC8vIHl3IHJhZG1hbiA6M1xufVxuZXhwb3J0cy5zZXRTcGlkZXJUb2dnbGUgPSBzZXRTcGlkZXJUb2dnbGU7XG5mdW5jdGlvbiByZXR1cm5TcGlkZXJUb2dnbGUoKSB7XG4gICAgcmV0dXJuIHNwaWRlclRvZ2dsZTtcbn1cbmV4cG9ydHMucmV0dXJuU3BpZGVyVG9nZ2xlID0gcmV0dXJuU3BpZGVyVG9nZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldHVyblN0ZXBUb2dnbGUgPSBleHBvcnRzLnNldFN0ZXBUb2dnbGUgPSBleHBvcnRzLnJlZ2lzdGVyU3RlcCA9IHZvaWQgMDtcbnZhciBzdGVwVG9nZ2xlID0gZmFsc2U7XG5mdW5jdGlvbiByZWdpc3RlclN0ZXAoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHN0ZXBUb2dnbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5zdGVwSGVpZ2h0ID0gMTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnN0ZXBIZWlnaHQgPSAwLjU7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gQHRzLWlnbm9yZSBcbiAgICAvL1BsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwia2V5XCIsIChldmVudCk9PnsgY29tbWVudCBvdXQgY29kZSByYWRtYW4gbGlrZWx5IHdvbid0IHVzZVxuICAgIC8vaWYgKGV2ZW50LmtleSA9PSA0Nykge1xuICAgIC8vICBzdGVwVG9nZ2xlID0gIXN0ZXBUb2dnbGU7XG4gICAgLy8gaWYgKHN0ZXBUb2dnbGUgPT0gdHJ1ZSkge1xuICAgIC8vICAgZGlzcGxheVRvQ2hhdChcIsKnZMKnbFtNZXRlb3JYXSDCp3LCp2VFbmFibGVkIHN0ZXAuXCIpXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgICBkaXNwbGF5VG9DaGF0KFwiwqdkwqdsW01ldGVvclhdIMKncsKnZURpc2FibGVkIHN0ZXAuXCIpXG4gICAgLy8gfVxuICAgIC8vIH1cbiAgICAvLyAgfSlcbn1cbmV4cG9ydHMucmVnaXN0ZXJTdGVwID0gcmVnaXN0ZXJTdGVwO1xuZnVuY3Rpb24gc2V0U3RlcFRvZ2dsZSh0aGVCb29sZWFuKSB7XG4gICAgc3RlcFRvZ2dsZSA9IHRoZUJvb2xlYW47IC8vIHl3IHJhZG1hbiA6M1xufVxuZXhwb3J0cy5zZXRTdGVwVG9nZ2xlID0gc2V0U3RlcFRvZ2dsZTtcbmZ1bmN0aW9uIHJldHVyblN0ZXBUb2dnbGUoKSB7XG4gICAgcmV0dXJuIHN0ZXBUb2dnbGU7XG59XG5leHBvcnRzLnJldHVyblN0ZXBUb2dnbGUgPSByZXR1cm5TdGVwVG9nZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnV3dWlmeSA9IHZvaWQgMDtcbmZ1bmN0aW9uIHV3dWlmeShzdHJpbmdUb1V3dWlmeSkge1xuICAgIC8vIFVzYWdlOlxuICAgIC8vIHV3dWlmeShcIllvdXIgdGV4dCBoZXJlXCIpO1xuICAgIHN0cmluZ1RvVXd1aWZ5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcnxsL2csICd3JykucmVwbGFjZSgvbihbYWVpb3VdKS9nLCAnbnkkMScpLnJlcGxhY2UoL292ZS9nLCAndXZlJykucmVwbGFjZSgvdWNrL2csICd1d3EnKVxuICAgICAgICAucmVwbGFjZSgvXmkvLCAnaS1pJykucmVwbGFjZSgvKC4qKWktaS1pLywgJyQxaS1pJykgKyAoTWF0aC5yYW5kb20oKSA8PSAwLjIgPyAnID5fPCcgOiAnJyk7XG59XG5leHBvcnRzLnV3dWlmeSA9IHV3dWlmeTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBndWlfMSA9IHJlcXVpcmUoXCIuL2d1aVwiKTtcbnZhciBzcGlkZXJfMSA9IHJlcXVpcmUoXCIuL3NwaWRlclwiKTtcbnZhciBzdGVwXzEgPSByZXF1aXJlKFwiLi9zdGVwXCIpO1xudmFyIG5vZmFsbF8xID0gcmVxdWlyZShcIi4vbm9mYWxsXCIpO1xudmFyIGpldHBhY2tfMSA9IHJlcXVpcmUoXCIuL2pldHBhY2tcIik7XG52YXIgZnVsbGJyaWdodF8xID0gcmVxdWlyZShcIi4vZnVsbGJyaWdodFwiKTtcbnZhciBjbWRzXzEgPSByZXF1aXJlKFwiLi9jbWRzXCIpO1xudmFyIGpldHBhY2tndWlhY3RpdmUgPSBmYWxzZTtcbmNvbnNvbGUubG9nKFwiW01ldGVvclhdIExvYWRpbmcgY2xpZW50Li4uXCIpO1xuKDAsIGNtZHNfMS5yZWdpc3RlcmNtZHMpKCk7XG4oMCwgZ3VpXzEucmVnaXN0ZXJndWkpKGpldHBhY2tndWlhY3RpdmUpO1xuKDAsIGpldHBhY2tfMS5yZWdpc3RlcmpldHBhY2spKGpldHBhY2tndWlhY3RpdmUpO1xuKDAsIHNwaWRlcl8xLnJlZ2lzdGVyU3BpZGVyKSgpO1xuKDAsIHN0ZXBfMS5yZWdpc3RlclN0ZXApKCk7XG4oMCwgbm9mYWxsXzEucmVnaXN0ZXJOb2ZhbGwpKCk7XG4oMCwgZnVsbGJyaWdodF8xLnJlZ2lzdGVyRnVsbGJyaWdodCkoKTtcbmNvbnNvbGUubG9nKFwiW01ldGVvclhdIEZpbmlzaGVkIGxvYWRpbmcgY2xpZW50IVwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==