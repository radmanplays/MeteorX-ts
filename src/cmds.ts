import { uwuify } from "./uwuapi";
import { MeteorXlog } from "./chatutilts";

var version = "v1.0";
var cmds = ".version , .help , .ip , .uwuify"
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
            var messageAfter = event.message.substring(".uwuify ".length);
            var uwumessage = uwuify("messageAfter")
            //@ts-ignore
            PluginAPI.network.sendPacketChatMessage({messageIn: uwumessage})

        }
    });
}
