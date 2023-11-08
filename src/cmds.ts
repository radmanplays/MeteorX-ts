const owoify = require('owoify-js').default
import { MeteorXlog, MeteorXerror, MeteorXfailure, MeteorXsuccess, MeteorXwarning } from "./chatutils";
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
            // TODO: trim x and y to not include decimals [done]
            var playerx = Math.trunc(getplayerpos.x);
            var playery = Math.trunc(getplayerpos.y);
            var playerz = Math.trunc(getplayerpos.z);
            MeteorXlog("your last reported cords(IRL(jk)): " + " x= " + playerx + " y= " + playery + " z= " + playerz);
            event.preventDefault = true;
        }
        if (event.message === ".vclip") {
            MeteorXlog("usage: .vclip [value/blocks]");
            event.preventDefault = true;
        }
        if (event.message.startsWith(".vclip ")) {
            //from https://github.com/MeteorDevelopment/meteor-client/blob/master/src/main/java/meteordevelopment/meteorclient/commands/commands/VClipCommand.java
            //@ts-ignore
            var targetLength = ".vclip".length;
            var message = event.message.toString().trim();
            if ( //If
                message.length > targetLength && //The length of the message is longer than the target length
                message.substring(0, targetLength).trim().toLowerCase() === ".vclip" //And, the content from character 0 (first) to that of the length, trimmed and put to lowercase is ".makescroll"
              ) {
                var vclipvalue = message.substring(targetLength+1);
                //@ts-ignore
                var isplayerriding = PluginAPI.player.isRiding()
                var packetsrequired = Math.ceil(Math.abs(vclipvalue / 10));
                if (packetsrequired > 20) {
                    packetsrequired = 1;
                }
                if (isplayerriding === false){
                    // For each 10 blocks, send a player move packet with no delta
                    for (var packetnumber = 0; packetnumber < (packetsrequired - 1); packetnumber++) {
                        //@ts-ignore
                        PluginAPI.network.sendPacketPlayerPosition({onGround: true})  
                    }
                    // Now send the final player move packet
                    //@ts-ignore
                    PluginAPI.network.sendPacketPlayerPosition({onGround: true, x: getplayerpos.x, y: getplayerpos.y + vclipvalue, z: getplayerpos.z})
                    //@ts-ignore
                    PluginAPI.player.setPosition({x: getplayerpos.x, y: getplayerpos.y + vclipvalue, z: getplayerpos.z})
                    MeteorXsuccess("successfully vclipped " + vclipvalue + " blocks!")
                }
                if (isplayerriding === true){
                    MeteorXerror("you need to get off this mob/vehicle to use this command!")
                }
            }
            event.preventDefault = true;
        }
    });
}
