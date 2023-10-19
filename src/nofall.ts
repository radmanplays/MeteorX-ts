//added by @OtterCodes102
let nofallToggle: boolean = false;
export function registerNofall() {
    // @ts-ignore
    PluginAPI.require("network")
    // @ts-ignore
    PluginAPI.addEventListener("update", ()=>{ 
        // @ts-ignore
        if (PluginAPI.player.fallDistance > 2.0 && nofallToggle) { // ty zxmushroom
          // @ts-ignore
          PluginAPI.network.sendPacketPlayer({isOnGround: true});
        }
      });
}
export function setNofallToggle(theBoolean: boolean) {
    nofallToggle = theBoolean;
}
export function returnNofallToggle(): boolean {
    return nofallToggle;
}