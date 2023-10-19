// note: this plugin will NOT work until Plugin API a6
// ported from this mod : https://github.com/PheoZen/Wurst-MC-1.8/blob/master/src/tk/wurst_client/features/mods/BunnyHopMod.java
// i will add toggling it on and of in the gui when Plugin API a6 comes out
export function registerbhop() {
    //@ts-ignore
    PluginAPI.require("player");
    //@ts-ignore
    PluginAPI.addEventListener("update", ()=>{
        // check onGround
        //@ts-ignore
        if (!PluginAPI.player.onGround()) {
            return;
        }
        // check if sneaking
        //@ts-ignore
        if (PluginAPI.player.isSneaking()) {
            return;
        }
        // check if moving
        //@ts-ignore
        if (PluginAPI.player.moveForward == 0 && PluginAPI.player.moveStrafing == 0) {
            return;
        }
        //jump
        //@ts-ignore
	PluginAPI.player.jump();
        //@ts-ignore
        PluginAPI.player.reload();
        });
}
