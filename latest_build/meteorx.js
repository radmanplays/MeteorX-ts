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
            var messageAfter = event.message.substring(".uwuify ".length);
            var uwumessage = (0, uwuapi_1.uwuify)("messageAfter");
            //@ts-ignore
            PluginAPI.network.sendPacketChatMessage({ messageIn: uwumessage });
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
//added by @OtterCodes102
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
var noweb_1 = __webpack_require__(/*! ./noweb */ "./src/noweb.ts");
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
            gui.innerHTML = "\n        <gui id=\"myGui\" style=\"width: 100%;height: 100%;position: fixed;top: 0px;left: 0px;z-index: 10;color: white;font-family: Minecraftia, sans-serif;overflow: hidden scroll;background-color: rgba(80, 80, 80, 0.42);background-blend-mode: multiply;background-size: 64px;\">\n        <h1 style=\"text-shadow: 0px 0px 4px;\">MeteorX GUI</h1>\n        <p style=\"font-size: 0.8rem; color: yellow;\">(totally not stolen from plugin manager's gui)</p><p style=\"font-size: 0.8rem; color: yellow;\">ik the gui looks kinda bad for a hacked client but its meteorX alpha ig. i WILL update this gui in the future</p><p style=\"font-size: 0.8rem; color: orangered;\">click on \"Activate\" to activate a hack and click on \"Deactivate\" to deactivate a hack</p>\n        <table style=\"table-layout: fixed; width: 100%;\">\n            <tbody><tr style=\"background: rgb(80, 80, 80);\">\n                <th style=\"text-align: center;\">Hacks</th>\n                <th style=\"text-align: center; width: 15%;\">Activate/Deactivate</th>\n            </tr>\n            <tr style=\"box-shadow: grey 0px 2px 0px;\">\n                <td style=\"user-select: text;background-color: #9d00ff30;\">Jetpack (hold space to fly) \uD83C\uDF92\uD83D\uDCA8</td>\n                <td style=\"background-color: gray; text-align: center;\" id=\"jetpack\">Activate</td>\n            </tr>\n            <tr style=\"box-shadow: grey 0px 2px 0px;\">\n                <td style=\"user-select: text;background-color: #9d00ff30;\">Step</td>\n                <td style=\"background-color: gray; text-align: center;\" id=\"step\">Activate</td>\n            </tr>\n            <tr style=\"box-shadow: grey 0px 2px 0px;\">\n                <td style=\"user-select: text;background-color: #9d00ff30;\">Spider</td>\n                <td style=\"background-color: gray; text-align: center;\" id=\"spider\">Activate</td>\n            </tr>\n            <tr style=\"box-shadow: grey 0px 2px 0px;\">\n                <td style=\"user-select: text;background-color: #9d00ff30;\">Nofall</td>\n                <td style=\"background-color: gray; text-align: center;\" id=\"nofall\">Activate</td>\n            </tr>\n            <tr style=\"box-shadow: grey 0px 2px 0px;\">\n                <td style=\"user-select: text;background-color: #9d00ff30;\">Fullbright</td>\n                <td style=\"background-color: gray; text-align: center;\" id=\"fullbright\">Activate</td>\n            </tr>\n            <!-- <tr style=\"box-shadow: grey 0px 2px 0px;\"> -->\n            <!-- <td style=\"user-select: text;background-color: #9d00ff30;\">NoWeb</td> -->\n            <!-- <td style=\"background-color: gray; text-align: center;\" id=\"noweb\">Activate</td> -->\n            <!-- </tr> -->\n            <!--removed bc it dosnt work -->\n            <!-- will add later if its fixed -->\n        </tbody></table>\n        <a style=\"background: transparent; text-align: center; color: yellow; cursor: pointer; font-family: Minecraftia, sans-serif; text-decoration: underline; border: 0px; margin-right: 1rem; font-size: 1rem;\" href=\"https://github.com/radmanplays/MeteorX/issues/new\" target=\"_blank\">suggest a new feature/hack</a>\n        <a style=\"background: transparent;text-align: center;color: orange;cursor: pointer;font-family: Minecraftia, sans-serif;text-decoration: underline;border: 0px;font-size: 1rem;\" href=\"https://github.com/orgs/EaglerReborn/discussions/9\" target=\"_blank\">version Roadmap</a>\n        \n          </gui>\n        "; // Set the HTML content of the "gui" element
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
            var nowebElement = document.getElementById("noweb");
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
            nowebElement.addEventListener("mouseover", function () {
                nowebElement.style.cursor = "pointer";
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
            if ((0, noweb_1.returnnowebToggle)() === false) {
                nowebElement.innerText = "Activate";
                nowebElement.style.backgroundColor = "green";
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
            if ((0, noweb_1.returnnowebToggle)() === true) {
                nowebElement.innerText = "Deactivate";
                nowebElement.style.backgroundColor = "red";
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
            nowebElement.addEventListener("click", function () {
                // Toggle the jetpackGuiActive state
                // Update the text and background color based on the state
                if ((0, noweb_1.returnnowebToggle)() !== true) {
                    nowebElement.innerText = "Deactivate";
                    nowebElement.style.backgroundColor = "red";
                    (0, noweb_1.setnowebToggle)(true);
                }
                else {
                    nowebElement.innerText = "Activate";
                    nowebElement.style.backgroundColor = "green";
                    (0, noweb_1.setnowebToggle)(false);
                }
            });
        }
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
        if (jetpackguiactive == true) {
            if (document.pointerLockElement != null) {
                if (!jetpackActive) {
                    return;
                }
                //@ts-ignore
                PluginAPI.player.motionY += 0.2;
                //@ts-ignore
                PluginAPI.player.reload();
            }
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
//added by @OtterCodes102
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

/***/ "./src/noweb.ts":
/*!**********************!*\
  !*** ./src/noweb.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.returnnowebToggle = exports.setnowebToggle = exports.registernoweb = void 0;
var nowebToggle = false;
function registernoweb() {
    //@ts-ignore
    PluginAPI.require("player");
    //@ts-ignore
    PluginAPI.addEventListener("update", function () {
        if (nowebToggle == true) {
            //@ts-ignore
            PluginAPI.player.isInWeb = false;
        }
    });
}
exports.registernoweb = registernoweb;
function setnowebToggle(theBoolean) {
    nowebToggle = theBoolean;
}
exports.setnowebToggle = setnowebToggle;
function returnnowebToggle() {
    return nowebToggle;
}
exports.returnnowebToggle = returnnowebToggle;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9jbWRzLnRzIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvZnVsbGJyaWdodC50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL2d1aS50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL2pldHBhY2sudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9ub2ZhbGwudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9ub3dlYi50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL3NwaWRlci50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL3N0ZXAudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy91d3VhcGkudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlZ2lzdGVyY21kcyA9IHZvaWQgMDtcbnZhciB1d3VhcGlfMSA9IHJlcXVpcmUoXCIuL3V3dWFwaVwiKTtcbnZhciB2ZXJzaW9uID0gXCJ2MS4wXCI7XG52YXIgY21kcyA9IFwiLnZlcnNpb24gLCAuaGVscCAsIC5pcCAsIC51d3VpZnlcIjtcbnZhciBzZXJ2ZXJpcCA9IG51bGw7XG5mdW5jdGlvbiByZWdpc3RlcmNtZHMoKSB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJwYWNrZXRqb2luZ2FtZVwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgc2VydmVyaXAgPSBldi5pcDtcbiAgICB9KTtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcInNlbmRjaGF0bWVzc2FnZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50Lm1lc3NhZ2UgPT09IFwiLnZlcnNpb25cIikge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkuZGlzcGxheVRvQ2hhdCh7IG1zZzogXCJ5b3UgYXJlIGN1cnJlbnRseSB1c2luZyB0aGUgXCIgKyB2ZXJzaW9uICsgXCIgdmVyc2lvbiBvZiBNZXRlb3JYLlwiIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5tZXNzYWdlID09PSBcIi5oZWxwXCIpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLmRpc3BsYXlUb0NoYXQoeyBtc2c6IFwiTWV0ZW9yWCBjb21tYW5kcyA6IFwiICsgY21kcyArIFwiIFwiIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5tZXNzYWdlID09PSBcIi5pcFwiKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5kaXNwbGF5VG9DaGF0KHsgbXNnOiBcInRoZSBpcCBvZiB0aGUgY3VycmVudCBzZXJ2ZXIgeW91IGFyZSBwbGF5aW5nOiBcIiArIHNlcnZlcmlwICsgXCIgXCIgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50Lm1lc3NhZ2UgPT09IFwiLnV3dWlmeVwiKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5kaXNwbGF5VG9DaGF0KHsgbXNnOiBcInVzYWdlOiAudXd1aWZ5IFttZXNzYWdlXVwiIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5tZXNzYWdlLnN0YXJ0c1dpdGgoXCIudXd1aWZ5IFwiKSkge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2VBZnRlciA9IGV2ZW50Lm1lc3NhZ2Uuc3Vic3RyaW5nKFwiLnV3dWlmeSBcIi5sZW5ndGgpO1xuICAgICAgICAgICAgdmFyIHV3dW1lc3NhZ2UgPSAoMCwgdXd1YXBpXzEudXd1aWZ5KShcIm1lc3NhZ2VBZnRlclwiKTtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLm5ldHdvcmsuc2VuZFBhY2tldENoYXRNZXNzYWdlKHsgbWVzc2FnZUluOiB1d3VtZXNzYWdlIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyY21kcyA9IHJlZ2lzdGVyY21kcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlID0gZXhwb3J0cy5zZXRGdWxsYnJpZ2h0VG9nZ2xlID0gZXhwb3J0cy5yZWdpc3RlckZ1bGxicmlnaHQgPSB2b2lkIDA7XG4vL2FkZGVkIGJ5IEBPdHRlckNvZGVzMTAyXG52YXIgZnVsbGJyaWdodFRvZ2dsZSA9IGZhbHNlO1xuZnVuY3Rpb24gcmVnaXN0ZXJGdWxsYnJpZ2h0KCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGZ1bGxicmlnaHRUb2dnbGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLmJsb2Nrcy5haXIubGlnaHRWYWx1ZSA9IDA7IC8vU2V0IHRoZSBhaXIncyBsaWdodCBsZXZlbCB0byAwLlxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkuYmxvY2tzLmFpci5yZWxvYWQoKTsgLy9TYXZlIGNoYW5nZXMgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLmJsb2Nrcy5haXIubGlnaHRWYWx1ZSA9IDEwOyAvL1NldCB0aGUgYWlyJ3MgbGlnaHQgbGV2ZWwgdG8gMTAuXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5ibG9ja3MuYWlyLnJlbG9hZCgpOyAvL1NhdmUgY2hhbmdlc1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyRnVsbGJyaWdodCA9IHJlZ2lzdGVyRnVsbGJyaWdodDtcbmZ1bmN0aW9uIHNldEZ1bGxicmlnaHRUb2dnbGUodGhlQm9vbGVhbikge1xuICAgIGZ1bGxicmlnaHRUb2dnbGUgPSB0aGVCb29sZWFuO1xufVxuZXhwb3J0cy5zZXRGdWxsYnJpZ2h0VG9nZ2xlID0gc2V0RnVsbGJyaWdodFRvZ2dsZTtcbmZ1bmN0aW9uIHJldHVybkZ1bGxicmlnaHRUb2dnbGUoKSB7XG4gICAgcmV0dXJuIGZ1bGxicmlnaHRUb2dnbGU7XG59XG5leHBvcnRzLnJldHVybkZ1bGxicmlnaHRUb2dnbGUgPSByZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlZ2lzdGVyZ3VpID0gdm9pZCAwO1xudmFyIHN0ZXBfMSA9IHJlcXVpcmUoXCIuL3N0ZXBcIik7XG52YXIgc3BpZGVyXzEgPSByZXF1aXJlKFwiLi9zcGlkZXJcIik7XG52YXIgbm9mYWxsXzEgPSByZXF1aXJlKFwiLi9ub2ZhbGxcIik7XG52YXIgZnVsbGJyaWdodF8xID0gcmVxdWlyZShcIi4vZnVsbGJyaWdodFwiKTtcbnZhciBqZXRwYWNrXzEgPSByZXF1aXJlKFwiLi9qZXRwYWNrXCIpO1xudmFyIG5vd2ViXzEgPSByZXF1aXJlKFwiLi9ub3dlYlwiKTtcbmZ1bmN0aW9uIHJlZ2lzdGVyZ3VpKCkge1xuICAgIHZhciBndWlWaXNpYmxlID0gZmFsc2U7IC8vIFZhcmlhYmxlIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHZpc2liaWxpdHkgb2YgdGhlIEdVSVxuICAgIGZ1bmN0aW9uIHRvZ2dsZUd1aSgpIHtcbiAgICAgICAgaWYgKGd1aVZpc2libGUpIHsgLy8gSWYgdGhlIEdVSSBpcyB2aXNpYmxlXG4gICAgICAgICAgICBoaWRlR3VpKCk7IC8vIEhpZGUgdGhlIEdVSVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hvd0d1aSgpOyAvLyBPdGhlcndpc2UsIHNob3cgdGhlIEdVSVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNob3dHdWkoKSB7XG4gICAgICAgIGhpZGVHdWkoKTsgLy8gSWYgdGhlIEdVSSBpcyBhbHJlYWR5IG9wZW4sIHRoaXMgd2lsbCBoaWRlIGl0LlxuICAgICAgICB2YXIgZ3VpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImd1aVwiKTsgLy8gQ3JlYXRlIGEgbmV3IFwiZ3VpXCIgZWxlbWVudFxuICAgICAgICBpZiAoZG9jdW1lbnQucG9pbnRlckxvY2tFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuICAgICAgICAgICAgZ3VpLmlubmVySFRNTCA9IFwiXFxuICAgICAgICA8Z3VpIGlkPVxcXCJteUd1aVxcXCIgc3R5bGU9XFxcIndpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtwb3NpdGlvbjogZml4ZWQ7dG9wOiAwcHg7bGVmdDogMHB4O3otaW5kZXg6IDEwO2NvbG9yOiB3aGl0ZTtmb250LWZhbWlseTogTWluZWNyYWZ0aWEsIHNhbnMtc2VyaWY7b3ZlcmZsb3c6IGhpZGRlbiBzY3JvbGw7YmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODAsIDgwLCAwLjQyKTtiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O2JhY2tncm91bmQtc2l6ZTogNjRweDtcXFwiPlxcbiAgICAgICAgPGgxIHN0eWxlPVxcXCJ0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHg7XFxcIj5NZXRlb3JYIEdVSTwvaDE+XFxuICAgICAgICA8cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjhyZW07IGNvbG9yOiB5ZWxsb3c7XFxcIj4odG90YWxseSBub3Qgc3RvbGVuIGZyb20gcGx1Z2luIG1hbmFnZXIncyBndWkpPC9wPjxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuOHJlbTsgY29sb3I6IHllbGxvdztcXFwiPmlrIHRoZSBndWkgbG9va3Mga2luZGEgYmFkIGZvciBhIGhhY2tlZCBjbGllbnQgYnV0IGl0cyBtZXRlb3JYIGFscGhhIGlnLiBpIFdJTEwgdXBkYXRlIHRoaXMgZ3VpIGluIHRoZSBmdXR1cmU8L3A+PHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44cmVtOyBjb2xvcjogb3JhbmdlcmVkO1xcXCI+Y2xpY2sgb24gXFxcIkFjdGl2YXRlXFxcIiB0byBhY3RpdmF0ZSBhIGhhY2sgYW5kIGNsaWNrIG9uIFxcXCJEZWFjdGl2YXRlXFxcIiB0byBkZWFjdGl2YXRlIGEgaGFjazwvcD5cXG4gICAgICAgIDx0YWJsZSBzdHlsZT1cXFwidGFibGUtbGF5b3V0OiBmaXhlZDsgd2lkdGg6IDEwMCU7XFxcIj5cXG4gICAgICAgICAgICA8dGJvZHk+PHRyIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiByZ2IoODAsIDgwLCA4MCk7XFxcIj5cXG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIj5IYWNrczwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cXFwidGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogMTUlO1xcXCI+QWN0aXZhdGUvRGVhY3RpdmF0ZTwvdGg+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8dHIgc3R5bGU9XFxcImJveC1zaGFkb3c6IGdyZXkgMHB4IDJweCAwcHg7XFxcIj5cXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogdGV4dDtiYWNrZ3JvdW5kLWNvbG9yOiAjOWQwMGZmMzA7XFxcIj5KZXRwYWNrIChob2xkIHNwYWNlIHRvIGZseSkgXFx1RDgzQ1xcdURGOTJcXHVEODNEXFx1RENBODwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCIgaWQ9XFxcImpldHBhY2tcXFwiPkFjdGl2YXRlPC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDx0ciBzdHlsZT1cXFwiYm94LXNoYWRvdzogZ3JleSAwcHggMnB4IDBweDtcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInVzZXItc2VsZWN0OiB0ZXh0O2JhY2tncm91bmQtY29sb3I6ICM5ZDAwZmYzMDtcXFwiPlN0ZXA8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IGdyYXk7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiIGlkPVxcXCJzdGVwXFxcIj5BY3RpdmF0ZTwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8dHIgc3R5bGU9XFxcImJveC1zaGFkb3c6IGdyZXkgMHB4IDJweCAwcHg7XFxcIj5cXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogdGV4dDtiYWNrZ3JvdW5kLWNvbG9yOiAjOWQwMGZmMzA7XFxcIj5TcGlkZXI8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IGdyYXk7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiIGlkPVxcXCJzcGlkZXJcXFwiPkFjdGl2YXRlPC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDx0ciBzdHlsZT1cXFwiYm94LXNoYWRvdzogZ3JleSAwcHggMnB4IDBweDtcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInVzZXItc2VsZWN0OiB0ZXh0O2JhY2tncm91bmQtY29sb3I6ICM5ZDAwZmYzMDtcXFwiPk5vZmFsbDwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCIgaWQ9XFxcIm5vZmFsbFxcXCI+QWN0aXZhdGU8L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPHRyIHN0eWxlPVxcXCJib3gtc2hhZG93OiBncmV5IDBweCAycHggMHB4O1xcXCI+XFxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IHRleHQ7YmFja2dyb3VuZC1jb2xvcjogIzlkMDBmZjMwO1xcXCI+RnVsbGJyaWdodDwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCIgaWQ9XFxcImZ1bGxicmlnaHRcXFwiPkFjdGl2YXRlPC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwhLS0gPHRyIHN0eWxlPVxcXCJib3gtc2hhZG93OiBncmV5IDBweCAycHggMHB4O1xcXCI+IC0tPlxcbiAgICAgICAgICAgIDwhLS0gPHRkIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogdGV4dDtiYWNrZ3JvdW5kLWNvbG9yOiAjOWQwMGZmMzA7XFxcIj5Ob1dlYjwvdGQ+IC0tPlxcbiAgICAgICAgICAgIDwhLS0gPHRkIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIiBpZD1cXFwibm93ZWJcXFwiPkFjdGl2YXRlPC90ZD4gLS0+XFxuICAgICAgICAgICAgPCEtLSA8L3RyPiAtLT5cXG4gICAgICAgICAgICA8IS0tcmVtb3ZlZCBiYyBpdCBkb3NudCB3b3JrIC0tPlxcbiAgICAgICAgICAgIDwhLS0gd2lsbCBhZGQgbGF0ZXIgaWYgaXRzIGZpeGVkIC0tPlxcbiAgICAgICAgPC90Ym9keT48L3RhYmxlPlxcbiAgICAgICAgPGEgc3R5bGU9XFxcImJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiB5ZWxsb3c7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1mYW1pbHk6IE1pbmVjcmFmdGlhLCBzYW5zLXNlcmlmOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgYm9yZGVyOiAwcHg7IG1hcmdpbi1yaWdodDogMXJlbTsgZm9udC1zaXplOiAxcmVtO1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL3JhZG1hbnBsYXlzL01ldGVvclgvaXNzdWVzL25ld1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPnN1Z2dlc3QgYSBuZXcgZmVhdHVyZS9oYWNrPC9hPlxcbiAgICAgICAgPGEgc3R5bGU9XFxcImJhY2tncm91bmQ6IHRyYW5zcGFyZW50O3RleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogb3JhbmdlO2N1cnNvcjogcG9pbnRlcjtmb250LWZhbWlseTogTWluZWNyYWZ0aWEsIHNhbnMtc2VyaWY7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Ym9yZGVyOiAwcHg7Zm9udC1zaXplOiAxcmVtO1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL29yZ3MvRWFnbGVyUmVib3JuL2Rpc2N1c3Npb25zLzlcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj52ZXJzaW9uIFJvYWRtYXA8L2E+XFxuICAgICAgICBcXG4gICAgICAgICAgPC9ndWk+XFxuICAgICAgICBcIjsgLy8gU2V0IHRoZSBIVE1MIGNvbnRlbnQgb2YgdGhlIFwiZ3VpXCIgZWxlbWVudFxuICAgICAgICAgICAgZ3VpLmlkID0gXCJteUd1aVwiOyAvLyBTZXQgdGhlIElEIG9mIHRoZSBcImd1aVwiIGVsZW1lbnQgdG8gXCJteUd1aVwiXG4gICAgICAgICAgICBndWkuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICBndWkuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICAgICAgZ3VpLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICAgIGd1aS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIGd1aS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgICAgICBndWkuc3R5bGUuekluZGV4ID0gJzEwJztcbiAgICAgICAgICAgIGd1aS5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBndWkuc3R5bGUuZm9udEZhbWlseSA9ICdNaW5lY3JhZnRpYSwgc2Fucy1zZXJpZic7XG4gICAgICAgICAgICBndWkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuIHNjcm9sbCc7XG4gICAgICAgICAgICBndWkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoODAsIDgwLCA4MCwgMC40MiknO1xuICAgICAgICAgICAgZ3VpLnN0eWxlLmJhY2tncm91bmRCbGVuZE1vZGUgPSAnbXVsdGlwbHknO1xuICAgICAgICAgICAgZ3VpLnN0eWxlLmJhY2tncm91bmRTaXplID0gJzY0cHgnO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChndWkpOyAvLyBBcHBlbmQgdGhlIFwiZ3VpXCIgZWxlbWVudCB0byB0aGUgYm9keSBvZiB0aGUgZG9jdW1lbnRcbiAgICAgICAgICAgIGd1aVZpc2libGUgPSB0cnVlOyAvLyBTZXQgdGhlIEdVSSB2aXNpYmlsaXR5IHRvIHRydWVcbiAgICAgICAgICAgIHZhciBqZXRwYWNrRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiamV0cGFja1wiKTtcbiAgICAgICAgICAgIHZhciBzdGVwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlcFwiKTtcbiAgICAgICAgICAgIHZhciBzcGlkZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGlkZXJcIik7XG4gICAgICAgICAgICB2YXIgbm9mYWxsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9mYWxsXCIpO1xuICAgICAgICAgICAgdmFyIGZ1bGxicmlnaHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdWxsYnJpZ2h0XCIpO1xuICAgICAgICAgICAgdmFyIG5vd2ViRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm93ZWJcIik7XG4gICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RlcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBub2ZhbGxFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmdWxsYnJpZ2h0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmdWxsYnJpZ2h0RWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm93ZWJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG5vd2ViRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCgwLCBqZXRwYWNrXzEucmV0dXJuamV0cGFja3RvZ2dsZSkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCgwLCBzdGVwXzEucmV0dXJuU3RlcFRvZ2dsZSkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzdGVwRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCgwLCBzcGlkZXJfMS5yZXR1cm5TcGlkZXJUb2dnbGUpKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKDAsIG5vZmFsbF8xLnJldHVybk5vZmFsbFRvZ2dsZSkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBub2ZhbGxFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBub2ZhbGxFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoMCwgZnVsbGJyaWdodF8xLnJldHVybkZ1bGxicmlnaHRUb2dnbGUpKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoMCwgbm93ZWJfMS5yZXR1cm5ub3dlYlRvZ2dsZSkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBub3dlYkVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIG5vd2ViRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKDAsIGpldHBhY2tfMS5yZXR1cm5qZXRwYWNrdG9nZ2xlKSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoMCwgc3RlcF8xLnJldHVyblN0ZXBUb2dnbGUpKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzdGVwRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBzdGVwRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCgwLCBzcGlkZXJfMS5yZXR1cm5TcGlkZXJUb2dnbGUpKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzcGlkZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoMCwgbm9mYWxsXzEucmV0dXJuTm9mYWxsVG9nZ2xlKSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBub2ZhbGxFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKDAsIGZ1bGxicmlnaHRfMS5yZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlKSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoMCwgbm93ZWJfMS5yZXR1cm5ub3dlYlRvZ2dsZSkoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG5vd2ViRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBub3dlYkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0ZXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCgwLCBzdGVwXzEucmV0dXJuU3RlcFRvZ2dsZSkoKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGVwRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgKDAsIHN0ZXBfMS5zZXRTdGVwVG9nZ2xlKSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgICAgICAoMCwgc3RlcF8xLnNldFN0ZXBUb2dnbGUpKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoKDAsIHNwaWRlcl8xLnJldHVyblNwaWRlclRvZ2dsZSkoKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBzcGlkZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBzcGlkZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgICAgICgwLCBzcGlkZXJfMS5zZXRTcGlkZXJUb2dnbGUpKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgICAgICAoMCwgc3BpZGVyXzEuc2V0U3BpZGVyVG9nZ2xlKShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBub2ZhbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCgwLCBub2ZhbGxfMS5yZXR1cm5Ob2ZhbGxUb2dnbGUpKCkgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICAgICAoMCwgbm9mYWxsXzEuc2V0Tm9mYWxsVG9nZ2xlKSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZmFsbEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBub2ZhbGxFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgKDAsIG5vZmFsbF8xLnNldE5vZmFsbFRvZ2dsZSkoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoKDAsIGZ1bGxicmlnaHRfMS5yZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlKSgpICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBmdWxsYnJpZ2h0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICAgICAoMCwgZnVsbGJyaWdodF8xLnNldEZ1bGxicmlnaHRUb2dnbGUpKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBmdWxsYnJpZ2h0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgICAgICgwLCBmdWxsYnJpZ2h0XzEuc2V0RnVsbGJyaWdodFRvZ2dsZSkoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoKDAsIGpldHBhY2tfMS5yZXR1cm5qZXRwYWNrdG9nZ2xlKSgpICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICAgICAoMCwgamV0cGFja18xLnNldGpldHBhY2t0b2dnbGUpKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgICAgICgwLCBqZXRwYWNrXzEuc2V0amV0cGFja3RvZ2dsZSkoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm93ZWJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gVG9nZ2xlIHRoZSBqZXRwYWNrR3VpQWN0aXZlIHN0YXRlXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSB0ZXh0IGFuZCBiYWNrZ3JvdW5kIGNvbG9yIGJhc2VkIG9uIHRoZSBzdGF0ZVxuICAgICAgICAgICAgICAgIGlmICgoMCwgbm93ZWJfMS5yZXR1cm5ub3dlYlRvZ2dsZSkoKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBub3dlYkVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgICAgIG5vd2ViRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICAgICAoMCwgbm93ZWJfMS5zZXRub3dlYlRvZ2dsZSkodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub3dlYkVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBub3dlYkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgICAgICAoMCwgbm93ZWJfMS5zZXRub3dlYlRvZ2dsZSkoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhpZGVHdWkoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15R3VpXCIpKSB7IC8vIElmIHRoZSBcIm15R3VpXCIgZWxlbWVudCBleGlzdHNcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlHdWlcIikucmVtb3ZlKCk7IC8vIFJlbW92ZSB0aGUgXCJteUd1aVwiIGVsZW1lbnQgZnJvbSB0aGUgZG9jdW1lbnRcbiAgICAgICAgfVxuICAgICAgICBndWlWaXNpYmxlID0gZmFsc2U7IC8vIFNldCB0aGUgR1VJIHZpc2liaWxpdHkgdG8gZmFsc2VcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIlNoaWZ0XCIgJiYgZXZlbnQubG9jYXRpb24gPT09IEtleWJvYXJkRXZlbnQuRE9NX0tFWV9MT0NBVElPTl9SSUdIVCkgeyAvLyBJZiB0aGUgcmlnaHQgU2hpZnQga2V5IGlzIHByZXNzZWRcbiAgICAgICAgICAgIHRvZ2dsZUd1aSgpOyAvLyBUb2dnbGUgdGhlIEdVSSB2aXNpYmlsaXR5XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIiB8fCBldmVudC5rZXkgPT09IFwiYFwiKSB7IC8vIElmIHRoZSBFc2NhcGUga2V5IG9yIGJhY2t0aWNrIGlzIHByZXNzZWRcbiAgICAgICAgICAgIGhpZGVHdWkoKTsgLy8gSGlkZSB0aGUgR1VJXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVnaXN0ZXJndWkgPSByZWdpc3Rlcmd1aTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXR1cm5qZXRwYWNrdG9nZ2xlID0gZXhwb3J0cy5zZXRqZXRwYWNrdG9nZ2xlID0gZXhwb3J0cy5yZWdpc3RlcmpldHBhY2sgPSB2b2lkIDA7XG52YXIgamV0cGFja2d1aWFjdGl2ZSA9IGZhbHNlO1xuZnVuY3Rpb24gcmVnaXN0ZXJqZXRwYWNrKCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5yZXF1aXJlKFwicGxheWVyXCIpO1xuICAgIHZhciBqZXRwYWNrQWN0aXZlID0gZmFsc2U7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICBqZXRwYWNrQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGpldHBhY2tBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGpldHBhY2tndWlhY3RpdmUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFqZXRwYWNrQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5tb3Rpb25ZICs9IDAuMjtcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyamV0cGFjayA9IHJlZ2lzdGVyamV0cGFjaztcbmZ1bmN0aW9uIHNldGpldHBhY2t0b2dnbGUodGhlQm9vbGVhbikge1xuICAgIGpldHBhY2tndWlhY3RpdmUgPSB0aGVCb29sZWFuO1xufVxuZXhwb3J0cy5zZXRqZXRwYWNrdG9nZ2xlID0gc2V0amV0cGFja3RvZ2dsZTtcbmZ1bmN0aW9uIHJldHVybmpldHBhY2t0b2dnbGUoKSB7XG4gICAgcmV0dXJuIGpldHBhY2tndWlhY3RpdmU7XG59XG5leHBvcnRzLnJldHVybmpldHBhY2t0b2dnbGUgPSByZXR1cm5qZXRwYWNrdG9nZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldHVybk5vZmFsbFRvZ2dsZSA9IGV4cG9ydHMuc2V0Tm9mYWxsVG9nZ2xlID0gZXhwb3J0cy5yZWdpc3Rlck5vZmFsbCA9IHZvaWQgMDtcbi8vYWRkZWQgYnkgQE90dGVyQ29kZXMxMDJcbnZhciBub2ZhbGxUb2dnbGUgPSBmYWxzZTtcbmZ1bmN0aW9uIHJlZ2lzdGVyTm9mYWxsKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkucmVxdWlyZShcIm5ldHdvcmtcIik7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoUGx1Z2luQVBJLnBsYXllci5mYWxsRGlzdGFuY2UgPiAyLjAgJiYgbm9mYWxsVG9nZ2xlKSB7IC8vIHR5IHp4bXVzaHJvb21cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5uZXR3b3JrLnNlbmRQYWNrZXRQbGF5ZXIoeyBpc09uR3JvdW5kOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyTm9mYWxsID0gcmVnaXN0ZXJOb2ZhbGw7XG5mdW5jdGlvbiBzZXROb2ZhbGxUb2dnbGUodGhlQm9vbGVhbikge1xuICAgIG5vZmFsbFRvZ2dsZSA9IHRoZUJvb2xlYW47XG59XG5leHBvcnRzLnNldE5vZmFsbFRvZ2dsZSA9IHNldE5vZmFsbFRvZ2dsZTtcbmZ1bmN0aW9uIHJldHVybk5vZmFsbFRvZ2dsZSgpIHtcbiAgICByZXR1cm4gbm9mYWxsVG9nZ2xlO1xufVxuZXhwb3J0cy5yZXR1cm5Ob2ZhbGxUb2dnbGUgPSByZXR1cm5Ob2ZhbGxUb2dnbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmV0dXJubm93ZWJUb2dnbGUgPSBleHBvcnRzLnNldG5vd2ViVG9nZ2xlID0gZXhwb3J0cy5yZWdpc3Rlcm5vd2ViID0gdm9pZCAwO1xudmFyIG5vd2ViVG9nZ2xlID0gZmFsc2U7XG5mdW5jdGlvbiByZWdpc3Rlcm5vd2ViKCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5yZXF1aXJlKFwicGxheWVyXCIpO1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG5vd2ViVG9nZ2xlID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5pc0luV2ViID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVnaXN0ZXJub3dlYiA9IHJlZ2lzdGVybm93ZWI7XG5mdW5jdGlvbiBzZXRub3dlYlRvZ2dsZSh0aGVCb29sZWFuKSB7XG4gICAgbm93ZWJUb2dnbGUgPSB0aGVCb29sZWFuO1xufVxuZXhwb3J0cy5zZXRub3dlYlRvZ2dsZSA9IHNldG5vd2ViVG9nZ2xlO1xuZnVuY3Rpb24gcmV0dXJubm93ZWJUb2dnbGUoKSB7XG4gICAgcmV0dXJuIG5vd2ViVG9nZ2xlO1xufVxuZXhwb3J0cy5yZXR1cm5ub3dlYlRvZ2dsZSA9IHJldHVybm5vd2ViVG9nZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldHVyblNwaWRlclRvZ2dsZSA9IGV4cG9ydHMuc2V0U3BpZGVyVG9nZ2xlID0gZXhwb3J0cy5yZWdpc3RlclNwaWRlciA9IHZvaWQgMDtcbnZhciBzcGlkZXJUb2dnbGUgPSBmYWxzZTtcbmZ1bmN0aW9uIHJlZ2lzdGVyU3BpZGVyKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkucmVxdWlyZShcInBsYXllclwiKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChQbHVnaW5BUEkucGxheWVyLmlzQ29sbGlkZWRIb3Jpem9udGFsbHkgJiYgc3BpZGVyVG9nZ2xlID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIubW90aW9uWSA9IDAuMjtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgLy9QbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcImtleVwiLCAoZXZlbnQpID0+IHtcbiAgICAvL0AgdHMtaWdub3JlXG4gICAgLy9pZiAoZXZlbnQua2V5ID09IDIyKSB7XG4gICAgLy9zcGlkZXJUb2dnbGUgPSAhc3BpZGVyVG9nZ2xlXG4gICAgLy9pZiAoc3BpZGVyVG9nZ2xlID09IHRydWUpIHtcbiAgICAvL2Rpc3BsYXlUb0NoYXQoXCLCp2TCp2xbTWV0ZW9yWF0gwqdywqdlRW5hYmxlZCBzcGlkZXIuXCIpXG4gICAgLy99IGVsc2Uge1xuICAgIC8vZGlzcGxheVRvQ2hhdChcIsKnZMKnbFtNZXRlb3JYXSDCp3LCp2VEaXNhYmxlZCBzcGlkZXIuXCIpXG4gICAgLy99XG59XG5leHBvcnRzLnJlZ2lzdGVyU3BpZGVyID0gcmVnaXN0ZXJTcGlkZXI7XG4vL30pXG4vL31cbmZ1bmN0aW9uIHNldFNwaWRlclRvZ2dsZSh0aGVCb29sZWFuKSB7XG4gICAgc3BpZGVyVG9nZ2xlID0gdGhlQm9vbGVhbjsgLy8geXcgcmFkbWFuIDozXG59XG5leHBvcnRzLnNldFNwaWRlclRvZ2dsZSA9IHNldFNwaWRlclRvZ2dsZTtcbmZ1bmN0aW9uIHJldHVyblNwaWRlclRvZ2dsZSgpIHtcbiAgICByZXR1cm4gc3BpZGVyVG9nZ2xlO1xufVxuZXhwb3J0cy5yZXR1cm5TcGlkZXJUb2dnbGUgPSByZXR1cm5TcGlkZXJUb2dnbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmV0dXJuU3RlcFRvZ2dsZSA9IGV4cG9ydHMuc2V0U3RlcFRvZ2dsZSA9IGV4cG9ydHMucmVnaXN0ZXJTdGVwID0gdm9pZCAwO1xudmFyIHN0ZXBUb2dnbGUgPSBmYWxzZTtcbmZ1bmN0aW9uIHJlZ2lzdGVyU3RlcCgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc3RlcFRvZ2dsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnN0ZXBIZWlnaHQgPSAxO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IDAuNTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBAdHMtaWdub3JlIFxuICAgIC8vUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlcIiwgKGV2ZW50KT0+eyBjb21tZW50IG91dCBjb2RlIHJhZG1hbiBsaWtlbHkgd29uJ3QgdXNlXG4gICAgLy9pZiAoZXZlbnQua2V5ID09IDQ3KSB7XG4gICAgLy8gIHN0ZXBUb2dnbGUgPSAhc3RlcFRvZ2dsZTtcbiAgICAvLyBpZiAoc3RlcFRvZ2dsZSA9PSB0cnVlKSB7XG4gICAgLy8gICBkaXNwbGF5VG9DaGF0KFwiwqdkwqdsW01ldGVvclhdIMKncsKnZUVuYWJsZWQgc3RlcC5cIilcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgIGRpc3BsYXlUb0NoYXQoXCLCp2TCp2xbTWV0ZW9yWF0gwqdywqdlRGlzYWJsZWQgc3RlcC5cIilcbiAgICAvLyB9XG4gICAgLy8gfVxuICAgIC8vICB9KVxufVxuZXhwb3J0cy5yZWdpc3RlclN0ZXAgPSByZWdpc3RlclN0ZXA7XG5mdW5jdGlvbiBzZXRTdGVwVG9nZ2xlKHRoZUJvb2xlYW4pIHtcbiAgICBzdGVwVG9nZ2xlID0gdGhlQm9vbGVhbjsgLy8geXcgcmFkbWFuIDozXG59XG5leHBvcnRzLnNldFN0ZXBUb2dnbGUgPSBzZXRTdGVwVG9nZ2xlO1xuZnVuY3Rpb24gcmV0dXJuU3RlcFRvZ2dsZSgpIHtcbiAgICByZXR1cm4gc3RlcFRvZ2dsZTtcbn1cbmV4cG9ydHMucmV0dXJuU3RlcFRvZ2dsZSA9IHJldHVyblN0ZXBUb2dnbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXd1aWZ5ID0gdm9pZCAwO1xuZnVuY3Rpb24gdXd1aWZ5KHN0cmluZ1RvVXd1aWZ5KSB7XG4gICAgLy8gVXNhZ2U6XG4gICAgLy8gdXd1aWZ5KFwiWW91ciB0ZXh0IGhlcmVcIik7XG4gICAgc3RyaW5nVG9Vd3VpZnkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9yfGwvZywgJ3cnKS5yZXBsYWNlKC9uKFthZWlvdV0pL2csICdueSQxJykucmVwbGFjZSgvb3ZlL2csICd1dmUnKS5yZXBsYWNlKC91Y2svZywgJ3V3cScpXG4gICAgICAgIC5yZXBsYWNlKC9eaS8sICdpLWknKS5yZXBsYWNlKC8oLiopaS1pLWkvLCAnJDFpLWknKSArIChNYXRoLnJhbmRvbSgpIDw9IDAuMiA/ICcgPl88JyA6ICcnKTtcbn1cbmV4cG9ydHMudXd1aWZ5ID0gdXd1aWZ5O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGd1aV8xID0gcmVxdWlyZShcIi4vZ3VpXCIpO1xudmFyIHNwaWRlcl8xID0gcmVxdWlyZShcIi4vc3BpZGVyXCIpO1xudmFyIHN0ZXBfMSA9IHJlcXVpcmUoXCIuL3N0ZXBcIik7XG52YXIgbm9mYWxsXzEgPSByZXF1aXJlKFwiLi9ub2ZhbGxcIik7XG52YXIgamV0cGFja18xID0gcmVxdWlyZShcIi4vamV0cGFja1wiKTtcbnZhciBmdWxsYnJpZ2h0XzEgPSByZXF1aXJlKFwiLi9mdWxsYnJpZ2h0XCIpO1xudmFyIGNtZHNfMSA9IHJlcXVpcmUoXCIuL2NtZHNcIik7XG52YXIgamV0cGFja2d1aWFjdGl2ZSA9IGZhbHNlO1xuY29uc29sZS5sb2coXCJbTWV0ZW9yWF0gTG9hZGluZyBjbGllbnQuLi5cIik7XG4oMCwgY21kc18xLnJlZ2lzdGVyY21kcykoKTtcbigwLCBndWlfMS5yZWdpc3Rlcmd1aSkoKTtcbigwLCBqZXRwYWNrXzEucmVnaXN0ZXJqZXRwYWNrKSgpO1xuKDAsIHNwaWRlcl8xLnJlZ2lzdGVyU3BpZGVyKSgpO1xuKDAsIHN0ZXBfMS5yZWdpc3RlclN0ZXApKCk7XG4oMCwgbm9mYWxsXzEucmVnaXN0ZXJOb2ZhbGwpKCk7XG4oMCwgZnVsbGJyaWdodF8xLnJlZ2lzdGVyRnVsbGJyaWdodCkoKTtcbmNvbnNvbGUubG9nKFwiW01ldGVvclhdIEZpbmlzaGVkIGxvYWRpbmcgY2xpZW50IVwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==