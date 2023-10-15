import { displayToChat } from "./chat"
export function registerSpider() {
  let spiderToggle: boolean = false;
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
        displayToChat("§6§l[REBORNHACKEDCLIENT] §r§eEnabled spider.")
      } else {
        displayToChat("§6§l[REBORNHACKEDCLIENT] §r§eDisabled spider.")
      }
    }
  })
}
