import { displayToChat } from "./chat"
export function registerStep() {
    let stepToggle: boolean = false;
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
      PluginAPI.addEventListener("key", (event)=>{
        if (event.key == 47) {
            stepToggle = !stepToggle;
            if (stepToggle == true) {
                displayToChat("§6§l[REBORNHACKEDCLIENT] §r§eEnabled step.")
            } else {
                displayToChat("§6§l[REBORNHACKEDCLIENT] §r§eDisabled step.")
            }
        }
      })
}