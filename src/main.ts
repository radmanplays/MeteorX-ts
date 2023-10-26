import { displayToChat } from "./chat"
import { registergui } from "./gui"
import { registerSpider } from "./spider"
import { registerStep } from "./step"
import { registerNofall } from "./nofall"
import { registerjetpack } from "./jetpack"
import { registerFullbright } from "./fullbright"
import { registercmds } from "./cmds";
import { registernoweb } from "./noweb"
import { registertaco, displaytaco } from "./taco";
var jetpackguiactive = false;
console.log("[MeteorX] Loading client...")
registercmds()
registernoweb()
registergui()
registerjetpack()
registerSpider()
registerStep()
registerNofall()
registerFullbright()
registertaco()
displaytaco()
console.log("[MeteorX] Finished loading client!")
