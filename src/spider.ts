import { displayToChat } from "./chat"
let spiderToggle: boolean = false;
export function registerSpider() {
  
  // @ts-ignore
  PluginAPI.require("player");
  // @ts-ignore
  PluginAPI.addEventListener("update", () => {
    // @ts-ignore
    if (PluginAPI.player.isCollidedHorizontally && spiderToggle == true) {
      // @ts-ignore
      PluginAPI.player.motionY = 0.2;
      // @ts-ignore
      PluginAPI.player.reload();
    }
  });
  // @ts-ignore
  PluginAPI.addEventListener("key", (event) => {
    //@ ts-ignore
    if (event.key == 22) {
      spiderToggle = !spiderToggle
      if (spiderToggle == true) {
        displayToChat("§d§l[MeteorX] §r§eEnabled spider.")
      } else {
        displayToChat("§d§l[MeteorX] §r§eDisabled spider.")
      }
    }
  })
}
export function setSpiderToggle(theBoolean: boolean) {
  spiderToggle = theBoolean; // yw radman :3
}
