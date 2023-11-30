// import modules and commands...
import { displayToChat } from "./utils/chat"
import { registergui } from "./etc/gui"
import { registerSpider } from "./modules/spider"
import { registerStep } from "./modules/step"
import { registerNofall } from "./modules/nofall"
import { registerjetpack } from "./modules/jetpack"
import { registerFullbright } from "./modules/fullbright"
import { registercmds } from "./etc/cmds";
import { registernoweb } from "./modules/noweb"
// import { registertaco, displaytaco } from "./etc/taco";
import { getplayerpos, updatePlayerPosition } from './utils/playerutils';
import { registertps } from "./utils/tps";
// display a message on console indicating that the client is loading
console.log("[MeteorX] Loading client...")
// register all modules and commands
registercmds()
registernoweb()
registergui()
registerjetpack()
registerSpider()
registerStep()
registerNofall()
registerFullbright()
// registertaco()
// displaytaco()
registertps()
// display a message on console indicating that the client has finished loading
console.log("[MeteorX] Finished loading client!")
