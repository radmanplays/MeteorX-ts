import { displayToChat } from "./utils/chat"
import { registergui } from "./etc/gui"
import { registerSpider } from "./modules/spider"
import { registerStep } from "./modules/step"
import { registerNofall } from "./modules/nofall"
import { registerjetpack } from "./modules/jetpack"
import { registerFullbright } from "./modules/fullbright"
import { registercmds } from "./etc/cmds";
import { registernoweb } from "./modules/noweb"
import { registertaco, displaytaco } from "./etc/taco";
import { getplayerpos, updatePlayerPosition } from './utils/playerutils';
import { registertps } from "./utils/tps";
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
registertps()
console.log("[MeteorX] Finished loading client!")
