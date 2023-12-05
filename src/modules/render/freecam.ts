// i will add rendering fake player when a8 comes out
// https://github.com/PheoZen/Wurst-MC-1.8/blob/master/src/tk/wurst_client/features/mods/FreecamMod.java

export function registerfreecam() {
    //@ts-ignore
    PluginAPI.require("player");
    //@ts-ignore
    PluginAPI.addEventListener("update", () => {
        //@ts-ignore
        PluginAPI.player.motionX = 0;
        //@ts-ignore
        PluginAPI.player.motionY = 0;
        //@ts-ignore
        PluginAPI.player.motionZ = 0;
        //@ts-ignore
		if(PluginAPI.javaClient.$gameSettings.$keyBindJump.$pressed === 1){
        //@ts-ignore
        PluginAPI.player.motionY += 0.2;
        }
        //@ts-ignore
		if(PluginAPI.javaClient.$gameSettings.$keyBindSneak.$pressed === 1){
            //@ts-ignore
            PluginAPI.player.motionY -= 0.2;
            }
    });
}