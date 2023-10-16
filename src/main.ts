import { displayToChat } from "./chat"
import { registergui } from "./gui"
import { registerSpider } from "./spider"
import { registerStep } from "./step"
import { registerjetpack } from "./jetpack"
console.log("[MetorX] Loading client...")
var jetpackguiactive = false;
registergui()
registerjetpack()
console.log("[MeteorX] Finished!")
