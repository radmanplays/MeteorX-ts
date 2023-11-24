// from https://github.com/PheoZen/Wurst-MC-1.8/blob/master/src/tk/wurst_client/utils/PlayerUtils.java
//@ts-ignore
PluginAPI.require("player")
interface PlayerPos {
    x: number;
    y: number;
    z: number;
}

let getplayerpos: PlayerPos = {
    x: 0,
    y: 0,
    z: 0
};

function updatePlayerPosition() {
    //@ts-ignore
    getplayerpos.x = PluginAPI.player.x;
    //@ts-ignore
    getplayerpos.y = PluginAPI.player.y;
    //@ts-ignore
    getplayerpos.z = PluginAPI.player.z;
    //@ts-ignore
    PluginAPI.player.reload();
}
export function addtoplayerxpos(x:Number){
    //@ts-ignore
    PluginAPI.player.x += x
}
export function addtoplayerypos(y:Number){
    //@ts-ignore
    PluginAPI.player.y += y
}
export function addtoplayerzpos(z:Number){
    //@ts-ignore
    PluginAPI.player.z += z
}
export { getplayerpos, updatePlayerPosition };