let jetpackguiactive: boolean = false;
import { displayToChat } from "./chat"
export function registerjetpack() {
    //@ts-ignore
    PluginAPI.require("player");
    var jetpackActive: boolean = false;
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
    if (jetpackguiactive == true) {
        if (document.pointerLockElement != null) {
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