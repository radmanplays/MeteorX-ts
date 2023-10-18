let fullbrightToggle: boolean = false;
export function registerFullbright() {
    //@ts-ignore
    PluginAPI.addEventListener("update", function () {
        if (fullbrightToggle == false) {
            //@ts-ignore
            PluginAPI.blocks.air.lightValue = 0; //Set the air's light level to 0.
            //@ts-ignore
            PluginAPI.blocks.air.reload(); //Save changes   
        } else {
            //@ts-ignore
            PluginAPI.blocks.air.lightValue = 10; //Set the air's light level to 10.
            //@ts-ignore
            PluginAPI.blocks.air.reload(); //Save changes
        }
    })
}
export function setFullbrightToggle(theBoolean: boolean) {
    fullbrightToggle = theBoolean;
}
export function returnFullbrightToggle(): boolean {
    return fullbrightToggle;
}