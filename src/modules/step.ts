//added by @OtterCodes102
import { displayToChat } from "../utils/chat"
let stepToggle: boolean = false;
export function registerStep() {
    
    // @ts-ignore
    PluginAPI.addEventListener("update", ()=>{
        if (stepToggle == true) {
            // @ts-ignore
            PluginAPI.player.stepHeight = 1;
            // @ts-ignore
            PluginAPI.player.reload();
        } else {
            // @ts-ignore
            PluginAPI.player.stepHeight = 0.5;
            // @ts-ignore
            PluginAPI.player.reload();
        }
      });
      // @ts-ignore 
      //PluginAPI.addEventListener("key", (event)=>{ comment out code radman likely won't use
        //if (event.key == 47) { 
          //  stepToggle = !stepToggle;
           // if (stepToggle == true) {
             //   displayToChat("§d§l[MeteorX] §r§eEnabled step.")
           // } else {
            //    displayToChat("§d§l[MeteorX] §r§eDisabled step.")
           // }
       // }
    //  })
}
export function setStepToggle(theBoolean: boolean) {
    stepToggle = theBoolean; // yw radman :3
}
export function returnStepToggle(): boolean {
    return stepToggle;
}