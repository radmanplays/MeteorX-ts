import { uwuify } from "./uwuapi";
var version = "v1.0";
var cmds = ".version , .help , .ip , .uwuify"
export function registercmds() {
    //@ts-ignore
    PluginAPI.addEventListener("packetjoingame", (ev) => {
        var serverip = ev.ip;
    });
    //@ts-ignore
    PluginAPI.addEventListener("sendchatmessage", function(event) {
        if (event.message === ".version") {
                //@ts-ignore
            PluginAPI.displayToChat({ msg: "you are currently using the " + version + " version of MeteorX." });
            event.preventDefault = true;
        }
        if (event.message === ".help") {
            //@ts-ignore
            PluginAPI.displayToChat({ msg: "MeteorX commands : " + cmds + " " });
            event.preventDefault = true;
        }
        if (event.message === ".ip") {
            //@ts-ignore
            PluginAPI.displayToChat({ msg: "the ip of the current server you are playing: " + serverip + " " });
            event.preventDefault = true;
        }
        if (event.message === ".uwuify") {
            //@ts-ignore
            PluginAPI.displayToChat({ msg: "usage: .uwuify [message]"});
            event.preventDefault = true;
        }
        if (event.message.startsWith(".uwuify ")) {
            var messageAfter = event.message.substring(".example message ".length);
            uwuify(messageAfter)
        }
    });
}