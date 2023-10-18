import { displayToChat } from "./chat"
import { registergui } from "./gui"
import { registerSpider } from "./spider"
import { registerStep } from "./step"
import { registerNofall } from "./nofall"
import { registerjetpack } from "./jetpack"
import { registerFullbright } from "./fullbright"
import { registerbhop } from "./bhop";
var jetpackguiactive = false;
console.log("[MeteorX] Loading client...")
registergui(jetpackguiactive)
registerjetpack(jetpackguiactive)
registerSpider()
registerStep()
registerNofall()
registerFullbright()
console.log("[MeteorX] Finished loading client!")
