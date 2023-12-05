// import modules and commands...
import { displayToChat } from "./utils/chat"
import { registergui } from "./etc/gui"
import { registerSpider } from "./modules/player/spider"
import { registerStep } from "./modules/player/step"
import { registerNofall } from "./modules/player/nofall"
import { registerjetpack } from "./modules/movement/jetpack"
import { registerFullbright } from "./modules/render/fullbright"
import { registercmds } from "./etc/cmds";
import { registernoweb } from "./modules/player/noweb"
// import { registertaco, displaytaco } from "./etc/taco";
import { getplayerpos, updatePlayerPosition } from './utils/playerutils';
import { registertps } from "./utils/tps";
import { registerautosprint } from "./modules/player/autosprint"
import { registerwtap } from "./modules/player/autowtap";
import { registerspeed } from "./modules/movement/speed";
import { registermodule } from "./modules/modules";
try{// make it so eaglerreborn dosnt crash when a error happens
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
    registerautosprint()
    registerwtap()
    registerspeed()
    // display a message on console indicating that the client has finished loading
    console.log("[MeteorX] Finished loading client!")
    registermodule({name: "test"})

}  catch (error) {
    // handle any errors that occur during execution
    console.error("[MeteorX] Error during client execution:", error);
}
