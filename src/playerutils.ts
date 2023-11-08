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
    getplayerpos.x = PluginAPI.player.lastReportedPosX;
    //@ts-ignore
    getplayerpos.y = PluginAPI.player.lastReportedPosY;
    //@ts-ignore
    getplayerpos.z = PluginAPI.player.lastReportedPosZ;
    //@ts-ignore
    PluginAPI.player.reload();
}

export { getplayerpos, updatePlayerPosition };