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

/***/ "./src/chatutilts.ts":
/*!***************************!*\
  !*** ./src/chatutilts.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MeteorXfailure = exports.MeteorXsuccess = exports.MeteorXerror = exports.MeteorXwarning = exports.MeteorXlog = void 0;
var chat_1 = __webpack_require__(/*! ./chat */ "./src/chat.ts");
function MeteorXlog(message) {
    (0, chat_1.displayToChat)("§c[§6MeteorX§c]§f " + message);
}
exports.MeteorXlog = MeteorXlog;
function MeteorXwarning(message) {
    (0, chat_1.displayToChat)("§c[§6§lWARNING§c]§f " + message);
}
exports.MeteorXwarning = MeteorXwarning;
function MeteorXerror(message) {
    (0, chat_1.displayToChat)("§c[§4§lERROR§c]§f " + message);
}
exports.MeteorXerror = MeteorXerror;
function MeteorXsuccess(message) {
    (0, chat_1.displayToChat)("§a[§2§lSUCCESS§a]§f " + message);
}
exports.MeteorXsuccess = MeteorXsuccess;
function MeteorXfailure(message) {
    (0, chat_1.displayToChat)("§c[§4§lFAILURE§c]§f " + message);
}
exports.MeteorXfailure = MeteorXfailure;


/***/ }),

/***/ "./src/cmds.ts":
/*!*********************!*\
  !*** ./src/cmds.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registercmds = void 0;
var uwuapi_1 = __webpack_require__(/*! ./uwuapi */ "./src/uwuapi.ts");
var chatutilts_1 = __webpack_require__(/*! ./chatutilts */ "./src/chatutilts.ts");
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
            (0, chatutilts_1.MeteorXlog)("you are currently using the " + version + " version of MeteorX.");
            event.preventDefault = true;
        }
        if (event.message === ".help") {
            //@ts-ignore
            (0, chatutilts_1.MeteorXlog)("MeteorX commands : " + cmds + " ");
            event.preventDefault = true;
        }
        if (event.message === ".ip") {
            //@ts-ignore
            (0, chatutilts_1.MeteorXlog)("the ip of the current server you are playing: " + serverip + " ");
            event.preventDefault = true;
        }
        if (event.message === ".uwuify") {
            //@ts-ignore
            (0, chatutilts_1.MeteorXlog)("usage: .uwuify [message]");
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
        }
        gui.innerHTML = "\n      <gui id=\"myGui\" style=\"width: 100%;height: 100%;position: fixed;top: 0px;left: 0px;z-index: 10;color: white;font-family: Minecraftia, sans-serif;overflow: hidden scroll;background-color: rgba(80, 80, 80, 0.42);background-blend-mode: multiply;background-size: 64px;\">\n      <h1 style=\"text-shadow: 0px 0px 4px;\">MeteorX GUI</h1>\n      <p style=\"font-size: 0.8rem; color: yellow;\">(totally not stolen from plugin manager's gui)</p><p style=\"font-size: 0.8rem; color: yellow;\">ik the gui looks kinda bad for a hacked client but its meteorX alpha ig. i WILL update this gui in the future</p><p style=\"font-size: 0.8rem; color: orangered;\">click on \"Activate\" to activate a hack and click on \"Deactivate\" to deactivate a hack</p>\n      <table style=\"table-layout: fixed; width: 100%;\">\n          <tbody><tr style=\"background: rgb(80, 80, 80);\">\n              <th style=\"text-align: center;\">Hacks</th>\n              <th style=\"text-align: center; width: 15%;\">Activate/Deactivate</th>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Jetpack (hold space to fly) \uD83C\uDF92\uD83D\uDCA8</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"jetpack\">Activate</td>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Step</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"step\">Activate</td>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Spider</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"spider\">Activate</td>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Nofall</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"nofall\">Activate</td>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Fullbright</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"fullbright\">Activate</td>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n          <td style=\"user-select: text;background-color: #9d00ff30;\">NoWeb</td>\n          <td style=\"background-color: gray; text-align: center;\" id=\"noweb\">Activate</td>\n          </tr>\n      </tbody></table>\n      <a style=\"background: transparent; text-align: center; color: yellow; cursor: pointer; font-family: Minecraftia, sans-serif; text-decoration: underline; border: 0px; margin-right: 1rem; font-size: 1rem;\" href=\"https://github.com/radmanplays/MeteorX/issues/new\" target=\"_blank\">suggest a new feature/hack</a>\n      <a style=\"background: transparent;text-align: center;color: orange;cursor: pointer;font-family: Minecraftia, sans-serif;text-decoration: underline;border: 0px;font-size: 1rem;\" href=\"https://github.com/orgs/EaglerReborn/discussions/9\" target=\"_blank\">version Roadmap</a>\n      \n        </gui>\n      "; // Set the HTML content of the "gui" element
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
var noweb_1 = __webpack_require__(/*! ./noweb */ "./src/noweb.ts");
var jetpackguiactive = false;
console.log("[MeteorX] Loading client...");
(0, cmds_1.registercmds)();
(0, noweb_1.registernoweb)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsWUFBWSxtQkFBTyxDQUFDLDJCQUFPO0FBQzNCLGVBQWUsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqQyxhQUFhLG1CQUFPLENBQUMsNkJBQVE7QUFDN0IsZUFBZSxtQkFBTyxDQUFDLGlDQUFVO0FBQ2pDLGdCQUFnQixtQkFBTyxDQUFDLG1DQUFXO0FBQ25DLG1CQUFtQixtQkFBTyxDQUFDLHlDQUFjO0FBQ3pDLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QixjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21ldGVvcngvLi9zcmMvY2hhdC50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL2NoYXR1dGlsdHMudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9jbWRzLnRzIiwid2VicGFjazovL21ldGVvcngvLi9zcmMvZnVsbGJyaWdodC50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL2d1aS50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL2pldHBhY2sudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9ub2ZhbGwudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9ub3dlYi50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL3NwaWRlci50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL3N0ZXAudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy91d3VhcGkudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRpc3BsYXlUb0NoYXQgPSB2b2lkIDA7XG5mdW5jdGlvbiBkaXNwbGF5VG9DaGF0KG1lc3NhZ2UpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmRpc3BsYXlUb0NoYXQoeyBtc2c6IG1lc3NhZ2UgfSk7XG59XG5leHBvcnRzLmRpc3BsYXlUb0NoYXQgPSBkaXNwbGF5VG9DaGF0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1ldGVvclhmYWlsdXJlID0gZXhwb3J0cy5NZXRlb3JYc3VjY2VzcyA9IGV4cG9ydHMuTWV0ZW9yWGVycm9yID0gZXhwb3J0cy5NZXRlb3JYd2FybmluZyA9IGV4cG9ydHMuTWV0ZW9yWGxvZyA9IHZvaWQgMDtcbnZhciBjaGF0XzEgPSByZXF1aXJlKFwiLi9jaGF0XCIpO1xuZnVuY3Rpb24gTWV0ZW9yWGxvZyhtZXNzYWdlKSB7XG4gICAgKDAsIGNoYXRfMS5kaXNwbGF5VG9DaGF0KShcIsKnY1vCpzZNZXRlb3JYwqdjXcKnZiBcIiArIG1lc3NhZ2UpO1xufVxuZXhwb3J0cy5NZXRlb3JYbG9nID0gTWV0ZW9yWGxvZztcbmZ1bmN0aW9uIE1ldGVvclh3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICAoMCwgY2hhdF8xLmRpc3BsYXlUb0NoYXQpKFwiwqdjW8KnNsKnbFdBUk5JTkfCp2NdwqdmIFwiICsgbWVzc2FnZSk7XG59XG5leHBvcnRzLk1ldGVvclh3YXJuaW5nID0gTWV0ZW9yWHdhcm5pbmc7XG5mdW5jdGlvbiBNZXRlb3JYZXJyb3IobWVzc2FnZSkge1xuICAgICgwLCBjaGF0XzEuZGlzcGxheVRvQ2hhdCkoXCLCp2Nbwqc0wqdsRVJST1LCp2NdwqdmIFwiICsgbWVzc2FnZSk7XG59XG5leHBvcnRzLk1ldGVvclhlcnJvciA9IE1ldGVvclhlcnJvcjtcbmZ1bmN0aW9uIE1ldGVvclhzdWNjZXNzKG1lc3NhZ2UpIHtcbiAgICAoMCwgY2hhdF8xLmRpc3BsYXlUb0NoYXQpKFwiwqdhW8KnMsKnbFNVQ0NFU1PCp2FdwqdmIFwiICsgbWVzc2FnZSk7XG59XG5leHBvcnRzLk1ldGVvclhzdWNjZXNzID0gTWV0ZW9yWHN1Y2Nlc3M7XG5mdW5jdGlvbiBNZXRlb3JYZmFpbHVyZShtZXNzYWdlKSB7XG4gICAgKDAsIGNoYXRfMS5kaXNwbGF5VG9DaGF0KShcIsKnY1vCpzTCp2xGQUlMVVJFwqdjXcKnZiBcIiArIG1lc3NhZ2UpO1xufVxuZXhwb3J0cy5NZXRlb3JYZmFpbHVyZSA9IE1ldGVvclhmYWlsdXJlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlZ2lzdGVyY21kcyA9IHZvaWQgMDtcbnZhciB1d3VhcGlfMSA9IHJlcXVpcmUoXCIuL3V3dWFwaVwiKTtcbnZhciBjaGF0dXRpbHRzXzEgPSByZXF1aXJlKFwiLi9jaGF0dXRpbHRzXCIpO1xudmFyIHZlcnNpb24gPSBcInYxLjBcIjtcbnZhciBjbWRzID0gXCIudmVyc2lvbiAsIC5oZWxwICwgLmlwICwgLnV3dWlmeVwiO1xudmFyIHNlcnZlcmlwID0gbnVsbDtcbmZ1bmN0aW9uIHJlZ2lzdGVyY21kcygpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcInBhY2tldGpvaW5nYW1lXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBzZXJ2ZXJpcCA9IGV2LmlwO1xuICAgIH0pO1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwic2VuZGNoYXRtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQubWVzc2FnZSA9PT0gXCIudmVyc2lvblwiKSB7XG4gICAgICAgICAgICAoMCwgY2hhdHV0aWx0c18xLk1ldGVvclhsb2cpKFwieW91IGFyZSBjdXJyZW50bHkgdXNpbmcgdGhlIFwiICsgdmVyc2lvbiArIFwiIHZlcnNpb24gb2YgTWV0ZW9yWC5cIik7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50Lm1lc3NhZ2UgPT09IFwiLmhlbHBcIikge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAoMCwgY2hhdHV0aWx0c18xLk1ldGVvclhsb2cpKFwiTWV0ZW9yWCBjb21tYW5kcyA6IFwiICsgY21kcyArIFwiIFwiKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQubWVzc2FnZSA9PT0gXCIuaXBcIikge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAoMCwgY2hhdHV0aWx0c18xLk1ldGVvclhsb2cpKFwidGhlIGlwIG9mIHRoZSBjdXJyZW50IHNlcnZlciB5b3UgYXJlIHBsYXlpbmc6IFwiICsgc2VydmVyaXAgKyBcIiBcIik7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50Lm1lc3NhZ2UgPT09IFwiLnV3dWlmeVwiKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICgwLCBjaGF0dXRpbHRzXzEuTWV0ZW9yWGxvZykoXCJ1c2FnZTogLnV3dWlmeSBbbWVzc2FnZV1cIik7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50Lm1lc3NhZ2Uuc3RhcnRzV2l0aChcIi51d3VpZnkgXCIpKSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZUFmdGVyID0gZXZlbnQubWVzc2FnZS5zdWJzdHJpbmcoXCIudXd1aWZ5IFwiLmxlbmd0aCk7XG4gICAgICAgICAgICB2YXIgdXd1bWVzc2FnZSA9ICgwLCB1d3VhcGlfMS51d3VpZnkpKFwibWVzc2FnZUFmdGVyXCIpO1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkubmV0d29yay5zZW5kUGFja2V0Q2hhdE1lc3NhZ2UoeyBtZXNzYWdlSW46IHV3dW1lc3NhZ2UgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVnaXN0ZXJjbWRzID0gcmVnaXN0ZXJjbWRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldHVybkZ1bGxicmlnaHRUb2dnbGUgPSBleHBvcnRzLnNldEZ1bGxicmlnaHRUb2dnbGUgPSBleHBvcnRzLnJlZ2lzdGVyRnVsbGJyaWdodCA9IHZvaWQgMDtcbi8vYWRkZWQgYnkgQE90dGVyQ29kZXMxMDJcbnZhciBmdWxsYnJpZ2h0VG9nZ2xlID0gZmFsc2U7XG5mdW5jdGlvbiByZWdpc3RlckZ1bGxicmlnaHQoKSB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZnVsbGJyaWdodFRvZ2dsZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkuYmxvY2tzLmFpci5saWdodFZhbHVlID0gMDsgLy9TZXQgdGhlIGFpcidzIGxpZ2h0IGxldmVsIHRvIDAuXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5ibG9ja3MuYWlyLnJlbG9hZCgpOyAvL1NhdmUgY2hhbmdlcyAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkuYmxvY2tzLmFpci5saWdodFZhbHVlID0gMTA7IC8vU2V0IHRoZSBhaXIncyBsaWdodCBsZXZlbCB0byAxMC5cbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLmJsb2Nrcy5haXIucmVsb2FkKCk7IC8vU2F2ZSBjaGFuZ2VzXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVnaXN0ZXJGdWxsYnJpZ2h0ID0gcmVnaXN0ZXJGdWxsYnJpZ2h0O1xuZnVuY3Rpb24gc2V0RnVsbGJyaWdodFRvZ2dsZSh0aGVCb29sZWFuKSB7XG4gICAgZnVsbGJyaWdodFRvZ2dsZSA9IHRoZUJvb2xlYW47XG59XG5leHBvcnRzLnNldEZ1bGxicmlnaHRUb2dnbGUgPSBzZXRGdWxsYnJpZ2h0VG9nZ2xlO1xuZnVuY3Rpb24gcmV0dXJuRnVsbGJyaWdodFRvZ2dsZSgpIHtcbiAgICByZXR1cm4gZnVsbGJyaWdodFRvZ2dsZTtcbn1cbmV4cG9ydHMucmV0dXJuRnVsbGJyaWdodFRvZ2dsZSA9IHJldHVybkZ1bGxicmlnaHRUb2dnbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVnaXN0ZXJndWkgPSB2b2lkIDA7XG52YXIgc3RlcF8xID0gcmVxdWlyZShcIi4vc3RlcFwiKTtcbnZhciBzcGlkZXJfMSA9IHJlcXVpcmUoXCIuL3NwaWRlclwiKTtcbnZhciBub2ZhbGxfMSA9IHJlcXVpcmUoXCIuL25vZmFsbFwiKTtcbnZhciBmdWxsYnJpZ2h0XzEgPSByZXF1aXJlKFwiLi9mdWxsYnJpZ2h0XCIpO1xudmFyIGpldHBhY2tfMSA9IHJlcXVpcmUoXCIuL2pldHBhY2tcIik7XG52YXIgbm93ZWJfMSA9IHJlcXVpcmUoXCIuL25vd2ViXCIpO1xuZnVuY3Rpb24gcmVnaXN0ZXJndWkoKSB7XG4gICAgdmFyIGd1aVZpc2libGUgPSBmYWxzZTsgLy8gVmFyaWFibGUgdG8ga2VlcCB0cmFjayBvZiB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgR1VJXG4gICAgZnVuY3Rpb24gdG9nZ2xlR3VpKCkge1xuICAgICAgICBpZiAoZ3VpVmlzaWJsZSkgeyAvLyBJZiB0aGUgR1VJIGlzIHZpc2libGVcbiAgICAgICAgICAgIGhpZGVHdWkoKTsgLy8gSGlkZSB0aGUgR1VJXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaG93R3VpKCk7IC8vIE90aGVyd2lzZSwgc2hvdyB0aGUgR1VJXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2hvd0d1aSgpIHtcbiAgICAgICAgaGlkZUd1aSgpOyAvLyBJZiB0aGUgR1VJIGlzIGFscmVhZHkgb3BlbiwgdGhpcyB3aWxsIGhpZGUgaXQuXG4gICAgICAgIHZhciBndWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZ3VpXCIpOyAvLyBDcmVhdGUgYSBuZXcgXCJndWlcIiBlbGVtZW50XG4gICAgICAgIGlmIChkb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZ3VpLmlubmVySFRNTCA9IFwiXFxuICAgICAgPGd1aSBpZD1cXFwibXlHdWlcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7cG9zaXRpb246IGZpeGVkO3RvcDogMHB4O2xlZnQ6IDBweDt6LWluZGV4OiAxMDtjb2xvcjogd2hpdGU7Zm9udC1mYW1pbHk6IE1pbmVjcmFmdGlhLCBzYW5zLXNlcmlmO292ZXJmbG93OiBoaWRkZW4gc2Nyb2xsO2JhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDgwLCA4MCwgMC40Mik7YmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtiYWNrZ3JvdW5kLXNpemU6IDY0cHg7XFxcIj5cXG4gICAgICA8aDEgc3R5bGU9XFxcInRleHQtc2hhZG93OiAwcHggMHB4IDRweDtcXFwiPk1ldGVvclggR1VJPC9oMT5cXG4gICAgICA8cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjhyZW07IGNvbG9yOiB5ZWxsb3c7XFxcIj4odG90YWxseSBub3Qgc3RvbGVuIGZyb20gcGx1Z2luIG1hbmFnZXIncyBndWkpPC9wPjxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuOHJlbTsgY29sb3I6IHllbGxvdztcXFwiPmlrIHRoZSBndWkgbG9va3Mga2luZGEgYmFkIGZvciBhIGhhY2tlZCBjbGllbnQgYnV0IGl0cyBtZXRlb3JYIGFscGhhIGlnLiBpIFdJTEwgdXBkYXRlIHRoaXMgZ3VpIGluIHRoZSBmdXR1cmU8L3A+PHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44cmVtOyBjb2xvcjogb3JhbmdlcmVkO1xcXCI+Y2xpY2sgb24gXFxcIkFjdGl2YXRlXFxcIiB0byBhY3RpdmF0ZSBhIGhhY2sgYW5kIGNsaWNrIG9uIFxcXCJEZWFjdGl2YXRlXFxcIiB0byBkZWFjdGl2YXRlIGEgaGFjazwvcD5cXG4gICAgICA8dGFibGUgc3R5bGU9XFxcInRhYmxlLWxheW91dDogZml4ZWQ7IHdpZHRoOiAxMDAlO1xcXCI+XFxuICAgICAgICAgIDx0Ym9keT48dHIgc3R5bGU9XFxcImJhY2tncm91bmQ6IHJnYig4MCwgODAsIDgwKTtcXFwiPlxcbiAgICAgICAgICAgICAgPHRoIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIj5IYWNrczwvdGg+XFxuICAgICAgICAgICAgICA8dGggc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDE1JTtcXFwiPkFjdGl2YXRlL0RlYWN0aXZhdGU8L3RoPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8dHIgc3R5bGU9XFxcImJveC1zaGFkb3c6IGdyZXkgMHB4IDJweCAwcHg7XFxcIj5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IHRleHQ7YmFja2dyb3VuZC1jb2xvcjogIzlkMDBmZjMwO1xcXCI+SmV0cGFjayAoaG9sZCBzcGFjZSB0byBmbHkpIFxcdUQ4M0NcXHVERjkyXFx1RDgzRFxcdURDQTg8L3RkPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIiBpZD1cXFwiamV0cGFja1xcXCI+QWN0aXZhdGU8L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8dHIgc3R5bGU9XFxcImJveC1zaGFkb3c6IGdyZXkgMHB4IDJweCAwcHg7XFxcIj5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IHRleHQ7YmFja2dyb3VuZC1jb2xvcjogIzlkMDBmZjMwO1xcXCI+U3RlcDwvdGQ+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IGdyYXk7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiIGlkPVxcXCJzdGVwXFxcIj5BY3RpdmF0ZTwvdGQ+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDx0ciBzdHlsZT1cXFwiYm94LXNoYWRvdzogZ3JleSAwcHggMnB4IDBweDtcXFwiPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogdGV4dDtiYWNrZ3JvdW5kLWNvbG9yOiAjOWQwMGZmMzA7XFxcIj5TcGlkZXI8L3RkPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIiBpZD1cXFwic3BpZGVyXFxcIj5BY3RpdmF0ZTwvdGQ+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDx0ciBzdHlsZT1cXFwiYm94LXNoYWRvdzogZ3JleSAwcHggMnB4IDBweDtcXFwiPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogdGV4dDtiYWNrZ3JvdW5kLWNvbG9yOiAjOWQwMGZmMzA7XFxcIj5Ob2ZhbGw8L3RkPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIiBpZD1cXFwibm9mYWxsXFxcIj5BY3RpdmF0ZTwvdGQ+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDx0ciBzdHlsZT1cXFwiYm94LXNoYWRvdzogZ3JleSAwcHggMnB4IDBweDtcXFwiPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogdGV4dDtiYWNrZ3JvdW5kLWNvbG9yOiAjOWQwMGZmMzA7XFxcIj5GdWxsYnJpZ2h0PC90ZD5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCIgaWQ9XFxcImZ1bGxicmlnaHRcXFwiPkFjdGl2YXRlPC90ZD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgICAgPHRyIHN0eWxlPVxcXCJib3gtc2hhZG93OiBncmV5IDBweCAycHggMHB4O1xcXCI+XFxuICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IHRleHQ7YmFja2dyb3VuZC1jb2xvcjogIzlkMDBmZjMwO1xcXCI+Tm9XZWI8L3RkPlxcbiAgICAgICAgICA8dGQgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IGdyYXk7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiIGlkPVxcXCJub3dlYlxcXCI+QWN0aXZhdGU8L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgIDwvdGJvZHk+PC90YWJsZT5cXG4gICAgICA8YSBzdHlsZT1cXFwiYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHllbGxvdzsgY3Vyc29yOiBwb2ludGVyOyBmb250LWZhbWlseTogTWluZWNyYWZ0aWEsIHNhbnMtc2VyaWY7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBib3JkZXI6IDBweDsgbWFyZ2luLXJpZ2h0OiAxcmVtOyBmb250LXNpemU6IDFyZW07XFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vcmFkbWFucGxheXMvTWV0ZW9yWC9pc3N1ZXMvbmV3XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+c3VnZ2VzdCBhIG5ldyBmZWF0dXJlL2hhY2s8L2E+XFxuICAgICAgPGEgc3R5bGU9XFxcImJhY2tncm91bmQ6IHRyYW5zcGFyZW50O3RleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogb3JhbmdlO2N1cnNvcjogcG9pbnRlcjtmb250LWZhbWlseTogTWluZWNyYWZ0aWEsIHNhbnMtc2VyaWY7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Ym9yZGVyOiAwcHg7Zm9udC1zaXplOiAxcmVtO1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL29yZ3MvRWFnbGVyUmVib3JuL2Rpc2N1c3Npb25zLzlcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj52ZXJzaW9uIFJvYWRtYXA8L2E+XFxuICAgICAgXFxuICAgICAgICA8L2d1aT5cXG4gICAgICBcIjsgLy8gU2V0IHRoZSBIVE1MIGNvbnRlbnQgb2YgdGhlIFwiZ3VpXCIgZWxlbWVudFxuICAgICAgICBndWkuaWQgPSBcIm15R3VpXCI7IC8vIFNldCB0aGUgSUQgb2YgdGhlIFwiZ3VpXCIgZWxlbWVudCB0byBcIm15R3VpXCJcbiAgICAgICAgZ3VpLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICBndWkuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICBndWkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBndWkuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIGd1aS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIGd1aS5zdHlsZS56SW5kZXggPSAnMTAnO1xuICAgICAgICBndWkuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICBndWkuc3R5bGUuZm9udEZhbWlseSA9ICdNaW5lY3JhZnRpYSwgc2Fucy1zZXJpZic7XG4gICAgICAgIGd1aS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4gc2Nyb2xsJztcbiAgICAgICAgZ3VpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDgwLCA4MCwgODAsIDAuNDIpJztcbiAgICAgICAgZ3VpLnN0eWxlLmJhY2tncm91bmRCbGVuZE1vZGUgPSAnbXVsdGlwbHknO1xuICAgICAgICBndWkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnNjRweCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ3VpKTsgLy8gQXBwZW5kIHRoZSBcImd1aVwiIGVsZW1lbnQgdG8gdGhlIGJvZHkgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgIGd1aVZpc2libGUgPSB0cnVlOyAvLyBTZXQgdGhlIEdVSSB2aXNpYmlsaXR5IHRvIHRydWVcbiAgICAgICAgdmFyIGpldHBhY2tFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqZXRwYWNrXCIpO1xuICAgICAgICB2YXIgc3RlcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0ZXBcIik7XG4gICAgICAgIHZhciBzcGlkZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGlkZXJcIik7XG4gICAgICAgIHZhciBub2ZhbGxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub2ZhbGxcIik7XG4gICAgICAgIHZhciBmdWxsYnJpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVsbGJyaWdodFwiKTtcbiAgICAgICAgdmFyIG5vd2ViRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm93ZWJcIik7XG4gICAgICAgIGpldHBhY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBzdGVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0ZXBFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICB9KTtcbiAgICAgICAgc3BpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBub2ZhbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBub3dlYkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBub3dlYkVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoKDAsIGpldHBhY2tfMS5yZXR1cm5qZXRwYWNrdG9nZ2xlKSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgc3RlcF8xLnJldHVyblN0ZXBUb2dnbGUpKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzdGVwRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICBzdGVwRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBzcGlkZXJfMS5yZXR1cm5TcGlkZXJUb2dnbGUpKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzcGlkZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgbm9mYWxsXzEucmV0dXJuTm9mYWxsVG9nZ2xlKSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICBub2ZhbGxFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIGZ1bGxicmlnaHRfMS5yZXR1cm5GdWxsYnJpZ2h0VG9nZ2xlKSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgbm93ZWJfMS5yZXR1cm5ub3dlYlRvZ2dsZSkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG5vd2ViRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICBub3dlYkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgamV0cGFja18xLnJldHVybmpldHBhY2t0b2dnbGUpKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIHN0ZXBfMS5yZXR1cm5TdGVwVG9nZ2xlKSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGVwRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgIHN0ZXBFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBzcGlkZXJfMS5yZXR1cm5TcGlkZXJUb2dnbGUpKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICBzcGlkZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBub2ZhbGxfMS5yZXR1cm5Ob2ZhbGxUb2dnbGUpKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG5vZmFsbEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICBub2ZhbGxFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBmdWxsYnJpZ2h0XzEucmV0dXJuRnVsbGJyaWdodFRvZ2dsZSkoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZnVsbGJyaWdodEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICBmdWxsYnJpZ2h0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgbm93ZWJfMS5yZXR1cm5ub3dlYlRvZ2dsZSkoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbm93ZWJFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgbm93ZWJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgc3RlcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgoMCwgc3RlcF8xLnJldHVyblN0ZXBUb2dnbGUpKCkgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzdGVwRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBzdGVwRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICgwLCBzdGVwXzEuc2V0U3RlcFRvZ2dsZSkodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGVwRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgICgwLCBzdGVwXzEuc2V0U3RlcFRvZ2dsZSkoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3BpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCgwLCBzcGlkZXJfMS5yZXR1cm5TcGlkZXJUb2dnbGUpKCkgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzcGlkZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAoMCwgc3BpZGVyXzEuc2V0U3BpZGVyVG9nZ2xlKSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgICgwLCBzcGlkZXJfMS5zZXRTcGlkZXJUb2dnbGUpKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG5vZmFsbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgoMCwgbm9mYWxsXzEucmV0dXJuTm9mYWxsVG9nZ2xlKSgpICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbm9mYWxsRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBub2ZhbGxFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgKDAsIG5vZmFsbF8xLnNldE5vZmFsbFRvZ2dsZSkodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2ZhbGxFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBub2ZhbGxFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICAoMCwgbm9mYWxsXzEuc2V0Tm9mYWxsVG9nZ2xlKShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBmdWxsYnJpZ2h0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCgwLCBmdWxsYnJpZ2h0XzEucmV0dXJuRnVsbGJyaWdodFRvZ2dsZSkoKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgKDAsIGZ1bGxicmlnaHRfMS5zZXRGdWxsYnJpZ2h0VG9nZ2xlKSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZ1bGxicmlnaHRFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBmdWxsYnJpZ2h0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgKDAsIGZ1bGxicmlnaHRfMS5zZXRGdWxsYnJpZ2h0VG9nZ2xlKShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBqZXRwYWNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCgwLCBqZXRwYWNrXzEucmV0dXJuamV0cGFja3RvZ2dsZSkoKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgKDAsIGpldHBhY2tfMS5zZXRqZXRwYWNrdG9nZ2xlKSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgKDAsIGpldHBhY2tfMS5zZXRqZXRwYWNrdG9nZ2xlKShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBub3dlYkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGUgamV0cGFja0d1aUFjdGl2ZSBzdGF0ZVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSB0ZXh0IGFuZCBiYWNrZ3JvdW5kIGNvbG9yIGJhc2VkIG9uIHRoZSBzdGF0ZVxuICAgICAgICAgICAgaWYgKCgwLCBub3dlYl8xLnJldHVybm5vd2ViVG9nZ2xlKSgpICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbm93ZWJFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIG5vd2ViRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICgwLCBub3dlYl8xLnNldG5vd2ViVG9nZ2xlKSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vd2ViRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgbm93ZWJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICAoMCwgbm93ZWJfMS5zZXRub3dlYlRvZ2dsZSkoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGlkZUd1aSgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlHdWlcIikpIHsgLy8gSWYgdGhlIFwibXlHdWlcIiBlbGVtZW50IGV4aXN0c1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUd1aVwiKS5yZW1vdmUoKTsgLy8gUmVtb3ZlIHRoZSBcIm15R3VpXCIgZWxlbWVudCBmcm9tIHRoZSBkb2N1bWVudFxuICAgICAgICB9XG4gICAgICAgIGd1aVZpc2libGUgPSBmYWxzZTsgLy8gU2V0IHRoZSBHVUkgdmlzaWJpbGl0eSB0byBmYWxzZVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiU2hpZnRcIiAmJiBldmVudC5sb2NhdGlvbiA9PT0gS2V5Ym9hcmRFdmVudC5ET01fS0VZX0xPQ0FUSU9OX1JJR0hUKSB7IC8vIElmIHRoZSByaWdodCBTaGlmdCBrZXkgaXMgcHJlc3NlZFxuICAgICAgICAgICAgdG9nZ2xlR3VpKCk7IC8vIFRvZ2dsZSB0aGUgR1VJIHZpc2liaWxpdHlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiIHx8IGV2ZW50LmtleSA9PT0gXCJgXCIpIHsgLy8gSWYgdGhlIEVzY2FwZSBrZXkgb3IgYmFja3RpY2sgaXMgcHJlc3NlZFxuICAgICAgICAgICAgaGlkZUd1aSgpOyAvLyBIaWRlIHRoZSBHVUlcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5yZWdpc3Rlcmd1aSA9IHJlZ2lzdGVyZ3VpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldHVybmpldHBhY2t0b2dnbGUgPSBleHBvcnRzLnNldGpldHBhY2t0b2dnbGUgPSBleHBvcnRzLnJlZ2lzdGVyamV0cGFjayA9IHZvaWQgMDtcbnZhciBqZXRwYWNrZ3VpYWN0aXZlID0gZmFsc2U7XG5mdW5jdGlvbiByZWdpc3RlcmpldHBhY2soKSB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG4gICAgdmFyIGpldHBhY2tBY3RpdmUgPSBmYWxzZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGpldHBhY2tBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSBcIiBcIikge1xuICAgICAgICAgICAgamV0cGFja0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoamV0cGFja2d1aWFjdGl2ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKCFqZXRwYWNrQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLm1vdGlvblkgKz0gMC4yO1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyamV0cGFjayA9IHJlZ2lzdGVyamV0cGFjaztcbmZ1bmN0aW9uIHNldGpldHBhY2t0b2dnbGUodGhlQm9vbGVhbikge1xuICAgIGpldHBhY2tndWlhY3RpdmUgPSB0aGVCb29sZWFuO1xufVxuZXhwb3J0cy5zZXRqZXRwYWNrdG9nZ2xlID0gc2V0amV0cGFja3RvZ2dsZTtcbmZ1bmN0aW9uIHJldHVybmpldHBhY2t0b2dnbGUoKSB7XG4gICAgcmV0dXJuIGpldHBhY2tndWlhY3RpdmU7XG59XG5leHBvcnRzLnJldHVybmpldHBhY2t0b2dnbGUgPSByZXR1cm5qZXRwYWNrdG9nZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldHVybk5vZmFsbFRvZ2dsZSA9IGV4cG9ydHMuc2V0Tm9mYWxsVG9nZ2xlID0gZXhwb3J0cy5yZWdpc3Rlck5vZmFsbCA9IHZvaWQgMDtcbi8vYWRkZWQgYnkgQE90dGVyQ29kZXMxMDJcbnZhciBub2ZhbGxUb2dnbGUgPSBmYWxzZTtcbmZ1bmN0aW9uIHJlZ2lzdGVyTm9mYWxsKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkucmVxdWlyZShcIm5ldHdvcmtcIik7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoUGx1Z2luQVBJLnBsYXllci5mYWxsRGlzdGFuY2UgPiAyLjAgJiYgbm9mYWxsVG9nZ2xlKSB7IC8vIHR5IHp4bXVzaHJvb21cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5uZXR3b3JrLnNlbmRQYWNrZXRQbGF5ZXIoeyBpc09uR3JvdW5kOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlZ2lzdGVyTm9mYWxsID0gcmVnaXN0ZXJOb2ZhbGw7XG5mdW5jdGlvbiBzZXROb2ZhbGxUb2dnbGUodGhlQm9vbGVhbikge1xuICAgIG5vZmFsbFRvZ2dsZSA9IHRoZUJvb2xlYW47XG59XG5leHBvcnRzLnNldE5vZmFsbFRvZ2dsZSA9IHNldE5vZmFsbFRvZ2dsZTtcbmZ1bmN0aW9uIHJldHVybk5vZmFsbFRvZ2dsZSgpIHtcbiAgICByZXR1cm4gbm9mYWxsVG9nZ2xlO1xufVxuZXhwb3J0cy5yZXR1cm5Ob2ZhbGxUb2dnbGUgPSByZXR1cm5Ob2ZhbGxUb2dnbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmV0dXJubm93ZWJUb2dnbGUgPSBleHBvcnRzLnNldG5vd2ViVG9nZ2xlID0gZXhwb3J0cy5yZWdpc3Rlcm5vd2ViID0gdm9pZCAwO1xudmFyIG5vd2ViVG9nZ2xlID0gZmFsc2U7XG5mdW5jdGlvbiByZWdpc3Rlcm5vd2ViKCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5yZXF1aXJlKFwicGxheWVyXCIpO1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG5vd2ViVG9nZ2xlID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5pc0luV2ViID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVnaXN0ZXJub3dlYiA9IHJlZ2lzdGVybm93ZWI7XG5mdW5jdGlvbiBzZXRub3dlYlRvZ2dsZSh0aGVCb29sZWFuKSB7XG4gICAgbm93ZWJUb2dnbGUgPSB0aGVCb29sZWFuO1xufVxuZXhwb3J0cy5zZXRub3dlYlRvZ2dsZSA9IHNldG5vd2ViVG9nZ2xlO1xuZnVuY3Rpb24gcmV0dXJubm93ZWJUb2dnbGUoKSB7XG4gICAgcmV0dXJuIG5vd2ViVG9nZ2xlO1xufVxuZXhwb3J0cy5yZXR1cm5ub3dlYlRvZ2dsZSA9IHJldHVybm5vd2ViVG9nZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldHVyblNwaWRlclRvZ2dsZSA9IGV4cG9ydHMuc2V0U3BpZGVyVG9nZ2xlID0gZXhwb3J0cy5yZWdpc3RlclNwaWRlciA9IHZvaWQgMDtcbnZhciBzcGlkZXJUb2dnbGUgPSBmYWxzZTtcbmZ1bmN0aW9uIHJlZ2lzdGVyU3BpZGVyKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkucmVxdWlyZShcInBsYXllclwiKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChQbHVnaW5BUEkucGxheWVyLmlzQ29sbGlkZWRIb3Jpem9udGFsbHkgJiYgc3BpZGVyVG9nZ2xlID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIubW90aW9uWSA9IDAuMjtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgLy9QbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcImtleVwiLCAoZXZlbnQpID0+IHtcbiAgICAvL0AgdHMtaWdub3JlXG4gICAgLy9pZiAoZXZlbnQua2V5ID09IDIyKSB7XG4gICAgLy9zcGlkZXJUb2dnbGUgPSAhc3BpZGVyVG9nZ2xlXG4gICAgLy9pZiAoc3BpZGVyVG9nZ2xlID09IHRydWUpIHtcbiAgICAvL2Rpc3BsYXlUb0NoYXQoXCLCp2TCp2xbTWV0ZW9yWF0gwqdywqdlRW5hYmxlZCBzcGlkZXIuXCIpXG4gICAgLy99IGVsc2Uge1xuICAgIC8vZGlzcGxheVRvQ2hhdChcIsKnZMKnbFtNZXRlb3JYXSDCp3LCp2VEaXNhYmxlZCBzcGlkZXIuXCIpXG4gICAgLy99XG59XG5leHBvcnRzLnJlZ2lzdGVyU3BpZGVyID0gcmVnaXN0ZXJTcGlkZXI7XG4vL30pXG4vL31cbmZ1bmN0aW9uIHNldFNwaWRlclRvZ2dsZSh0aGVCb29sZWFuKSB7XG4gICAgc3BpZGVyVG9nZ2xlID0gdGhlQm9vbGVhbjsgLy8geXcgcmFkbWFuIDozXG59XG5leHBvcnRzLnNldFNwaWRlclRvZ2dsZSA9IHNldFNwaWRlclRvZ2dsZTtcbmZ1bmN0aW9uIHJldHVyblNwaWRlclRvZ2dsZSgpIHtcbiAgICByZXR1cm4gc3BpZGVyVG9nZ2xlO1xufVxuZXhwb3J0cy5yZXR1cm5TcGlkZXJUb2dnbGUgPSByZXR1cm5TcGlkZXJUb2dnbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmV0dXJuU3RlcFRvZ2dsZSA9IGV4cG9ydHMuc2V0U3RlcFRvZ2dsZSA9IGV4cG9ydHMucmVnaXN0ZXJTdGVwID0gdm9pZCAwO1xudmFyIHN0ZXBUb2dnbGUgPSBmYWxzZTtcbmZ1bmN0aW9uIHJlZ2lzdGVyU3RlcCgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc3RlcFRvZ2dsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnN0ZXBIZWlnaHQgPSAxO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IDAuNTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBAdHMtaWdub3JlIFxuICAgIC8vUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlcIiwgKGV2ZW50KT0+eyBjb21tZW50IG91dCBjb2RlIHJhZG1hbiBsaWtlbHkgd29uJ3QgdXNlXG4gICAgLy9pZiAoZXZlbnQua2V5ID09IDQ3KSB7XG4gICAgLy8gIHN0ZXBUb2dnbGUgPSAhc3RlcFRvZ2dsZTtcbiAgICAvLyBpZiAoc3RlcFRvZ2dsZSA9PSB0cnVlKSB7XG4gICAgLy8gICBkaXNwbGF5VG9DaGF0KFwiwqdkwqdsW01ldGVvclhdIMKncsKnZUVuYWJsZWQgc3RlcC5cIilcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgIGRpc3BsYXlUb0NoYXQoXCLCp2TCp2xbTWV0ZW9yWF0gwqdywqdlRGlzYWJsZWQgc3RlcC5cIilcbiAgICAvLyB9XG4gICAgLy8gfVxuICAgIC8vICB9KVxufVxuZXhwb3J0cy5yZWdpc3RlclN0ZXAgPSByZWdpc3RlclN0ZXA7XG5mdW5jdGlvbiBzZXRTdGVwVG9nZ2xlKHRoZUJvb2xlYW4pIHtcbiAgICBzdGVwVG9nZ2xlID0gdGhlQm9vbGVhbjsgLy8geXcgcmFkbWFuIDozXG59XG5leHBvcnRzLnNldFN0ZXBUb2dnbGUgPSBzZXRTdGVwVG9nZ2xlO1xuZnVuY3Rpb24gcmV0dXJuU3RlcFRvZ2dsZSgpIHtcbiAgICByZXR1cm4gc3RlcFRvZ2dsZTtcbn1cbmV4cG9ydHMucmV0dXJuU3RlcFRvZ2dsZSA9IHJldHVyblN0ZXBUb2dnbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXd1aWZ5ID0gdm9pZCAwO1xuZnVuY3Rpb24gdXd1aWZ5KHN0cmluZ1RvVXd1aWZ5KSB7XG4gICAgLy8gVXNhZ2U6XG4gICAgLy8gdXd1aWZ5KFwiWW91ciB0ZXh0IGhlcmVcIik7XG4gICAgc3RyaW5nVG9Vd3VpZnkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9yfGwvZywgJ3cnKS5yZXBsYWNlKC9uKFthZWlvdV0pL2csICdueSQxJykucmVwbGFjZSgvb3ZlL2csICd1dmUnKS5yZXBsYWNlKC91Y2svZywgJ3V3cScpXG4gICAgICAgIC5yZXBsYWNlKC9eaS8sICdpLWknKS5yZXBsYWNlKC8oLiopaS1pLWkvLCAnJDFpLWknKSArIChNYXRoLnJhbmRvbSgpIDw9IDAuMiA/ICcgPl88JyA6ICcnKTtcbn1cbmV4cG9ydHMudXd1aWZ5ID0gdXd1aWZ5O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGd1aV8xID0gcmVxdWlyZShcIi4vZ3VpXCIpO1xudmFyIHNwaWRlcl8xID0gcmVxdWlyZShcIi4vc3BpZGVyXCIpO1xudmFyIHN0ZXBfMSA9IHJlcXVpcmUoXCIuL3N0ZXBcIik7XG52YXIgbm9mYWxsXzEgPSByZXF1aXJlKFwiLi9ub2ZhbGxcIik7XG52YXIgamV0cGFja18xID0gcmVxdWlyZShcIi4vamV0cGFja1wiKTtcbnZhciBmdWxsYnJpZ2h0XzEgPSByZXF1aXJlKFwiLi9mdWxsYnJpZ2h0XCIpO1xudmFyIGNtZHNfMSA9IHJlcXVpcmUoXCIuL2NtZHNcIik7XG52YXIgbm93ZWJfMSA9IHJlcXVpcmUoXCIuL25vd2ViXCIpO1xudmFyIGpldHBhY2tndWlhY3RpdmUgPSBmYWxzZTtcbmNvbnNvbGUubG9nKFwiW01ldGVvclhdIExvYWRpbmcgY2xpZW50Li4uXCIpO1xuKDAsIGNtZHNfMS5yZWdpc3RlcmNtZHMpKCk7XG4oMCwgbm93ZWJfMS5yZWdpc3Rlcm5vd2ViKSgpO1xuKDAsIGd1aV8xLnJlZ2lzdGVyZ3VpKSgpO1xuKDAsIGpldHBhY2tfMS5yZWdpc3RlcmpldHBhY2spKCk7XG4oMCwgc3BpZGVyXzEucmVnaXN0ZXJTcGlkZXIpKCk7XG4oMCwgc3RlcF8xLnJlZ2lzdGVyU3RlcCkoKTtcbigwLCBub2ZhbGxfMS5yZWdpc3Rlck5vZmFsbCkoKTtcbigwLCBmdWxsYnJpZ2h0XzEucmVnaXN0ZXJGdWxsYnJpZ2h0KSgpO1xuY29uc29sZS5sb2coXCJbTWV0ZW9yWF0gRmluaXNoZWQgbG9hZGluZyBjbGllbnQhXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9