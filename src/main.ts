import { displayToChat } from "./chat"
import { registergui } from "./gui"
import { registerSpider } from "./spider"
import { registerStep } from "./step"
import { registerjetpack } from "./jetpack"
var jetpackguiactive = false;
console.log("[MeteorX] Loading client...")
registergui(jetpackguiactive)
registerjetpack(jetpackguiactive)
registerSpider()
registerStep()
console.log("[MeteorX] Finished!")
