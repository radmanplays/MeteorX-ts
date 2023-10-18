import { displayToChat } from "./chat"
import { registergui } from "./gui"
import { registerSpider } from "./spider"
import { registerStep } from "./step"
import { registerNofall } from "./nofall"
import { registerjetpack } from "./jetpack"
import { registerFullbright } from "./fullbright"
import { registerbhop } from "./bhop";
import { registercmds } from "./cmds";
var jetpackguiactive = false;
console.log("[MeteorX] Loading client...")
registercmds()
registergui()
registerjetpack()
registerSpider()
registerStep()
registerNofall()
registerFullbright()
console.log("[MeteorX] Finished loading client!")
