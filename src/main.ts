import { displayToChat } from "./chat"
import { registergui } from "./gui"
import { registerSpider } from "./spider"
import { registerStep } from "./step"
import { registerjetpack } from "./jetpack"
var jetpackguiactive = false;
console.log("[MetorX] Loading client...")
registergui(jetpackguiactive)
registerjetpack(jetpackguiactive)
console.log("[MeteorX] Finished!")
