let slipperytoggle: boolean= false;
function registerslippery(){
    //@ts-ignore
    var blockKeys = Object.keys(PluginAPI.blocks);
    blockKeys.forEach(key=>{
        //@ts-ignore
    if(PluginAPI?.blocks?.[key]?.slipperiness) {// TeaVM likes to add metadata properties which are `null` or `undefined`
        if (slipperytoggle==true){
            //@ts-ignore
            PluginAPI.blocks[key].slipperiness = 0.98; //Ice slipperiness value.
            //@ts-ignore
            PluginAPI.blocks[key].reload(); //The new method, `PluginAPI.updateComponent` is obsolete now.
        } else {
            //@ts-ignore
            PluginAPI.blocks[key].slipperiness = 0.6; //Ice slipperiness value.
            //@ts-ignore
            PluginAPI.blocks[key].reload(); //The new method, `PluginAPI.updateComponent` is obsolete now.
        }
    }
    });
}
export function setslipperyToggle(theBoolean: boolean) {
    slipperytoggle = theBoolean; // yw radman :3
}
export function returnslipperytoggle(): boolean {
    return slipperytoggle;
}