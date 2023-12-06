let autosprintactive: boolean = false
export function registerautosprint(){
    //@ts-ignore
    PluginAPI.require("player")
    //@ts-ignore
    PluginAPI.addEventListener("update", ()=>{
        if (autosprintactive){
            //@ts-ignore
            PluginAPI.player.setSprinting({flag: true})
            //@ts-ignore
            PluginAPI.player.reload()
        } else if (!autosprintactive){
            //@ts-ignore
            PluginAPI.player.setSprinting({flag: false})
            //@ts-ignore
            PluginAPI.player.reload()
        }
    });
}
export function setautosprinttoggle(theBoolean: boolean) {
    autosprintactive = theBoolean;
}
export function returnautosprinttoggle(): boolean {
    return autosprintactive;
}