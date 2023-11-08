const owoify = require('owoify-js').default
import { MeteorXlog } from "./chatutils";
import { settacoToggle, returntacoToggle } from "./taco";
import { getplayerpos, updatePlayerPosition } from "./playerutils";

var version = "v1.0";
var cmds = ".version , .help , .ip , .uwuify , .taco, .mypos"
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
            //@ts-ignore
            var targetLength = ".uwuify".length;
            var message = event.message.toString().trim();
            if ( //If
                message.length > targetLength && //The length of the message is longer than the target length
                message.substring(0, targetLength).trim().toLowerCase() === ".uwuify" //And, the content from character 0 (first) to that of the length, trimmed and put to lowercase is ".makescroll"
              ) {
                var actualchatmessage = message.substring(targetLength+1);
                var uwumessage = owoify(actualchatmessage)
                //@ts-ignore
                PluginAPI.network.sendPacketChatMessage({messageIn: uwumessage})
            }
            event.preventDefault = true;
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
        if (event.message === ".mypos") {
            //@ts-ignore
            PluginAPI.addEventListener("update", () => {
                updatePlayerPosition()
            });
            // TODO: trim x and y to not include decimals
            MeteorXlog("your last reported cords(IRL(jk)): " + " x= " + getplayerpos.x + " y= " + getplayerpos.y + " z= " + getplayerpos.z);
            event.preventDefault = true;
        }
    });
}
