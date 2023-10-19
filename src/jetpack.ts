let jetpackguiactive: boolean = false;
import { displayToChat } from "./chat"
export function registerjetpack() {
    //@ts-ignore
    PluginAPI.require("player");
    var jetpackActive = false;
    //@ts-ignore
    PluginAPI.addEventListener("update", ()=>{
    if (jetpackguiactive == false) {
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
export function setjetpacktoggle(theBoolean: boolean) {
    jetpackguiactive = theBoolean;
}
export function returnjetpacktoggle(): boolean {
    return jetpackguiactive;
}