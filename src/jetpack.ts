import { displayToChat } from "./chat"
export function registerjetpack(jetpackguiactive) {
    //@ts-ignore
    PluginAPI.require("player");
    var jetpackActive = false;
    window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === " ") {
        jetpackActive = true;
    }
    });
    window.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === " ") {
        jetpackActive = false;
    }
    });
    //@ts-ignore
    PluginAPI.addEventListener("update", ()=>{
    if (jetpackguiactive === false) {
        if(!jetpackActive){
            return;
            }
            //@ts-ignore
            PluginAPI.player.motionY += 0.2;
            //@ts-ignore
            PluginAPI.player.reload()
        }
    });
}