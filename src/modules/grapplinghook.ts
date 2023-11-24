// from eaglerreborn's example plugins
// NOT COMPLETE. WILL ADD LATER!
let grapplinghookguiactive: boolean = false;
export function registergrapplinghook() {
    //@ts-ignore
    PluginAPI.require("player"); //Require the player
    var GrappleHookPlugin = {
    oldXYZ: [0, 0, 0], //The previous hook position.
    prev: "NONE", //The previous state
    scaleH: 0.25, //Used for X and Z velocity
    scaleV: 0.15, //((Grapple Y) minus (Player Y)) times scaleV
    lift: 0.4, //Base vertical motion
    crouchToCancel: true //Whether or not crouching should disable the grappling hook.
    };
        //@ts-ignore
    PluginAPI.addEventListener("update", () => { //Every client tick
        //@ts-ignore
    if (!PluginAPI.player.fishEntity) { //If the fish hook does not exist.
            //@ts-ignore
        if (GrappleHookPlugin.prev === "GROUND" && (!GrappleHookPlugin.crouchToCancel || !PluginAPI.player.isSneaking())) { //If the old state was ground
        GrappleHookPlugin.prev = "NONE"; //Update the state
            //@ts-ignore
        var mx = GrappleHookPlugin.oldXYZ[0] - PluginAPI.player.x; //Get delta X
            //@ts-ignore
        var my = GrappleHookPlugin.oldXYZ[1] - PluginAPI.player.y; //Get delta Y
            //@ts-ignore
        var mz = GrappleHookPlugin.oldXYZ[2] - PluginAPI.player.z; //Get delta Z
        mx *= GrappleHookPlugin.scaleH; //Multiply by horizontal scale
        my *= GrappleHookPlugin.scaleV; //Multiply by vertical scale
        mz *= GrappleHookPlugin.scaleH; //Multiply by horizontal scale
            //@ts-ignore
        PluginAPI.player.motionX += mx; //Add x motion
            //@ts-ignore
        PluginAPI.player.motionY += my + GrappleHookPlugin.lift;  //Add y motion, plus base lift.
            //@ts-ignore
        PluginAPI.player.motionZ += mz; //Add z motion
            //@ts-ignore
        PluginAPI.player.reload(); //Push changes
        } else {
        GrappleHookPlugin.prev = "NONE";
        }
    } else if (GrappleHookPlugin.prev === "NONE") { //If the hook exists, but the previous state was NONE, update the state.
        GrappleHookPlugin.prev = "AIR";
    }
    if (
            //@ts-ignore
        PluginAPI.player.fishEntity !== undefined && //If the fish hook exists
        GrappleHookPlugin.prev === "AIR" && //And the hook was previously in the air
            //@ts-ignore
        PluginAPI.player.fishEntity.inGround //And the hook is in the ground
    ) {
        GrappleHookPlugin.oldXYZ = [ //Set old grapple hook position
            //@ts-ignore
        PluginAPI.player.fishEntity.x,
            //@ts-ignore
        PluginAPI.player.fishEntity.y,
            //@ts-ignore
        PluginAPI.player.fishEntity.z,
        ];
        GrappleHookPlugin.prev = "GROUND";//Update state
    }
    });
}