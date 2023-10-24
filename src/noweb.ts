let nowebToggle: boolean = false;
export function registernoweb() {
    //@ts-ignore
    PluginAPI.require("player");
    //@ts-ignore
    PluginAPI.addEventListener("update", ()=>{
        if (nowebToggle == true) {
            //@ts-ignore
            PluginAPI.player.isInWeb = false;
            //@ts-ignore
            PluginAPI.player.reload();
        }
    });
}
export function setnowebToggle(theBoolean: boolean) {
    nowebToggle = theBoolean;
  }
  export function returnnowebToggle(): boolean {
    return nowebToggle;
  }
