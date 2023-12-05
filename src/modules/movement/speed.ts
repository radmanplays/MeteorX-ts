let speedactive: boolean = false
let speedvalue : number = 2
import { returnisjetpackflying, returnjetpacktoggle } from "./jetpack";
export function registerspeed(){
    //@ts-ignore
    PluginAPI.require("player")
    //@ts-ignore
    var prex = PluginAPI.player.motionX
    //@ts-ignore
    var prez = PluginAPI.player.motionZ
    //@ts-ignore
    PluginAPI.addEventListener("update", ()=>{
        //@ts-ignore
        if (PluginAPI.player.onGround){
            if (speedactive == true){
                //@ts-ignore
                PluginAPI.player.motionX *= speedvalue
                //@ts-ignore
                PluginAPI.player.motionZ *= speedvalue
            }
        } else if (returnisjetpackflying()&&returnjetpacktoggle){ // this makes flying with jetpack more fun :D (and faster)
            if (speedactive == true){
                //@ts-ignore
                PluginAPI.player.motionX *= speedvalue
                //@ts-ignore
                PluginAPI.player.motionZ *= speedvalue
            }
        }
        if (speedactive == false){
            //@ts-ignore
            PluginAPI.player.motionX = prex
            //@ts-ignore
            PluginAPI.player.motionZ = prez
        }
    });
}
export function setspeedtoggle(theBoolean: boolean) {
    speedactive = theBoolean;
}
export function returnspeedtoggle(): boolean {
    return speedactive;
}
export function setspeedvalue(theNumber: number) {
    speedvalue = theNumber;
}
export function returnspeedvalue(): number {
    return speedvalue;
}
