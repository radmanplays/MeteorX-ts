let jetpackguiactive: boolean = false;
let jetpackforce: number = 0.2;
var jetpackActive: boolean = false;
import { displayToChat } from "../utils/chat"
export function registerjetpack() {
    //@ts-ignore
    PluginAPI.require("player");
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
export function setjetpackforce(theNumber: number) {
    jetpackforce = theNumber;
}
export function returnjetpackforce(): number {
    return jetpackforce;
}
export function returnisjetpackflying(): boolean{
    return jetpackActive
}