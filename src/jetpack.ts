let jetpackguiactive: boolean = false;
let jetpackforce: Number = 0.2;
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
                    PluginAPI.player.motionY += jetpackforce;
                    //@ts-ignore
                    PluginAPI.player.reload()
                }
        }
    });
}
export function setjetpacktoggle(theBoolean: boolean) {
    jetpackguiactive = theBoolean;
}
export function returnjetpacktoggle(): boolean {
    return jetpackguiactive;
}
export function setjetpackforce(theNumber: Number) {
    jetpackforce = theNumber;
}
export function returnjetpackforce(): Number {
    return jetpackforce;
}