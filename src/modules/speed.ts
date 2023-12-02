let speedactive: boolean = false
let speedvalue : number = 2
import { returnisjetpackflying, returnjetpacktoggle } from "./jetpack";
export function registerspeed(){
    //@ts-ignore
    PluginAPI.require("player")
    //@ts-ignore
    PluginAPI.addEventListener("update", ()=>{
        //@ts-ignore
        if (PluginAPI.player.onGround){
            if (speedactive){
                //@ts-ignore
                PluginAPI.player.motionx *= speedvalue
                //@ts-ignore
                PluginAPI.player.motionz *= speedvalue
            }
        } else if (returnisjetpackflying()&&returnjetpacktoggle){ // this makes flying with jetpack more fun :D (and faster)
            if (speedactive){
                //@ts-ignore
                PluginAPI.player.motionx *= speedvalue
                //@ts-ignore
                PluginAPI.player.motionz *= speedvalue
            }
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
