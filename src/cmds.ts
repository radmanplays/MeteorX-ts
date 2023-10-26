import { uwuify } from "./uwuapi";
import { MeteorXlog } from "./chatutils";
import { settacoToggle, returntacoToggle } from "./taco";

var version = "v1.0";
var cmds = ".version , .help , .ip , .uwuify , .taco"
var serverip = null;
export function registercmds() {
    //@ts-ignore
    PluginAPI.addEventListener("packetjoingame", (ev) => {
        serverip = ev.ip;
    });
    //@ts-ignore
    PluginAPI.addEventListener("sendchatmessage", function(event) {
        if (event.message === ".version") {
            MeteorXlog("you are currently using the " + version + " version of MeteorX.");
            event.preventDefault = true;
        }
        if (event.message === ".help") {
            //@ts-ignore
            MeteorXlog("MeteorX commands : " + cmds + " ");
            event.preventDefault = true;
        }
        if (event.message === ".ip") {
            //@ts-ignore
            MeteorXlog("the ip of the current server you are playing: " + serverip + " ");
            event.preventDefault = true;
        }
        if (event.message === ".uwuify") {
            //@ts-ignore
            MeteorXlog("usage: .uwuify [message]");
            event.preventDefault = true;
        }
        if (event.message.startsWith(".uwuify ")) {
            var messageAfter = event.message.split('.uwuify ').pop();
            var uwumessage = uwuify(messageAfter)
            //@ts-ignore
            PluginAPI.network.sendPacketChatMessage({messageIn: uwumessage})

        }
        if (event.message === ".taco") {
            if (returntacoToggle() !== true) {
                var random = Math.floor(Math.random() * 3);
                if (random == 1) {
                    //@ts-ignore
                    MeteorXlog("taco!");
                }
                if (random == 2) {
                    //@ts-ignore
                    MeteorXlog("a wild taco has appeared!");
                }
                settacoToggle(true);
              } else {
                //@ts-ignore
                MeteorXlog("no taco :(");
                settacoToggle(false);
              }
            event.preventDefault = true;
        }
    });
}
