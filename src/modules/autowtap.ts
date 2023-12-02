let autowtapactive: boolean = false
export function registerwtap(){
    let cooldown: number = 0
    //@ts-ignore
    PluginAPI.addEventListener("update", ()=>{
        if (autowtapactive){
            cooldown =- 1
            //@ts-ignore
            PluginAPI.player.setSprinting({flag: true})
            //@ts-ignore
            if (PluginAPI.player.isSwingInProgress()){
                if (cooldown < 0) {
                    //@ts-ignore
                    PluginAPI.player.setSprinting({flag: false})
                    cooldown = 3
                }
            }
        }
    });
}
export function setautowtaptoggle(theBoolean: boolean) {
    autowtapactive = theBoolean;
}
export function returnautowtaptoggle(): boolean {
    return autowtapactive;
}