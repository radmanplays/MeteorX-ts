const owoify = require('owoify-js').default
import { MeteorXlog, MeteorXerror, MeteorXfailure, MeteorXsuccess, MeteorXwarning, say } from '../utils/chatutils';
import { settacoToggle, returntacoToggle } from "./taco";
import { getplayerpos, updatePlayerPosition, addtoplayerxpos, addtoplayerypos, addtoplayerzpos } from "../utils/playerutils";
import { gettps } from "../utils/tps";
import { copy } from "../utils/clipboardutils";
import { countLetters } from "../utils/argscounter";
import { rand, selectRandom } from "../utils/randomutil";

var version = "v1.1";
var cmds = ".version , .help , .ip , .uwuify , .mypos, .vclip, .tps, .copycords, .annoy"
var cmdsArray = cmds.split(', ');
var cmdsforcode = cmdsArray.join('||');
var serverip = null;
var annoyenabled = false;
var chatmessage:string = null;
var uwulevel:number = 1
//@ts-ignore
export function registercmds() {
    //@ts-ignore
    PluginAPI.addEventListener("packetjoingame", (ev) => {
        serverip = ev.ip;
    });
    //@ts-ignore
    PluginAPI.addEventListener("packetchat", (ev) => {
        chatmessage = ev.chat;
    });
    //@ts-ignore
    PluginAPI.addEventListener("sendchatmessage", function(event) {
        if (event.message.startsWith(".")&&event.message !== cmdsforcode){
            MeteorXerror("unknown command! do .help for a list of available commands.")
            event.preventDefault = true;
        }
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
        if (event.message === ".uwuifylevel") {
            MeteorXlog("usage: .uwuifylevel [1,2 or 3 (3 is the highest and 1 is the lowest level)]")
            event.preventDefault = true;
        }
        if (event.message === ".uwulevel ") {
            var targetLength4 = ".uwulevel".length;
            var args = event.message.toString().trim();
            if ( //If
                message.length > targetLength4 && //The length of the message is longer than the target length
                message.substring(0, targetLength4).trim().toLowerCase() === ".uwulevel" //And, the content from character 0 (first) to that of the length, trimmed and put to lowercase is ".makescroll"
              ) {
                var level = args.substring(targetLength4+1);
                if (isNaN(level)){
                    MeteorXerror("uwulevel needs to be a Number! (1,2 or 3)")
                    return;
                } else {
                    uwulevel = Number(level)
                }
                
            }
            event.preventDefault = true;
        }
        if (event.message === ".uwuify") {
            //@ts-ignore
            MeteorXlog("usage: .uwuify [message]");
            event.preventDefault = true;
        }
        if (event.message.startsWith(".uwuify ")) {
            var targetLength = ".uwuify".length;
            var message = event.message.toString().trim();
            if ( //If
                message.length > targetLength && //The length of the message is longer than the target length
                message.substring(0, targetLength).trim().toLowerCase() === ".uwuify" //And, the content from character 0 (first) to that of the length, trimmed and put to lowercase is ".makescroll"
              ) {
                var actualchatmessage = message.substring(targetLength+1);
                if (uwulevel == 1){
                    var uwumessage = owoify(actualchatmessage, 'owo')
                }
                if (uwulevel == 2){
                    var uwumessage = owoify(actualchatmessage, 'uwu')
                }
                if (uwulevel == 3){
                    var uwumessage = owoify(actualchatmessage, 'uvu')
                }
                //@ts-ignore
                PluginAPI.network.sendPacketChatMessage({messageIn: uwumessage})
            }
            event.preventDefault = true;
        }
/*
        if (event.message === ".taco") {
            if (returntacoToggle() !== true) {
                var randomthingy = ["taco!", "a wild taco has appeared!"];
                MeteorXlog(selectRandom(randomthingy));
                settacoToggle(true);
              } else {
                //@ts-ignore
                MeteorXlog("no taco :(");
                settacoToggle(false);
              }
            event.preventDefault = true;
        }*/
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
            // TODO : make it so the command only accepts numbers (!isNAN()) [done]
            //@ts-ignore
            var targetLength2 = ".vclip".length;
            var message = event.message.toString().trim();
            if ( //If
                message.length > targetLength2 && //The length of the message is longer than the target length
                message.substring(0, targetLength2).trim().toLowerCase() === ".vclip" //And, the content from character 0 (first) to that of the length, trimmed and put to lowercase is ".makescroll"
              ) {
                var vclipvalue = message.substring(targetLength2+1);
                //@ts-ignore
                var isplayerriding = PluginAPI.player.isRiding()
                if (isplayerriding === false){
                    if (isNaN(vclipvalue)){
                        MeteorXerror("the amount of blocks needs to be a Number!")
                        return;
                    }else{
                        //@ts-ignore
                        PluginAPI.player.setPosition({
                            //@ts-ignore
                            x: PluginAPI.player.x,
                            //@ts-ignore
                            y: PluginAPI.player.y += vclipvalue,
                            //@ts-ignore
                            z: PluginAPI.player.z
                        });
                        //@ts-ignore
                        PluginAPI.player.reload()
                        MeteorXsuccess("successfully vclipped " + vclipvalue + " blocks!")
                    }
                }
                if (isplayerriding === true){
                    MeteorXerror("you need to get off this mob/vehicle to use this command!")
                }
            }
            event.preventDefault = true;
        }
        if(event.message.toLowerCase() === ".tps"){ //If they typed '.tps', or '.TPS', or... etc.
            event.preventDefault = true; //Prevent sending the chat message.
            //@ts-ignore
            MeteorXlog("§9 Current server tps is §5~" + gettps().toFixed(1)); //Print the TPS to chat.
        }
        if (event.message === ".copycords") {
            //@ts-ignore
            PluginAPI.addEventListener("update", () => {
                updatePlayerPosition()
            });
            var playerx = Math.trunc(getplayerpos.x);
            var playery = Math.trunc(getplayerpos.y);
            var playerz = Math.trunc(getplayerpos.z);
            copy(" x= " + playerx + " y= " + playery + " z= " + playerz)
            MeteorXsuccess("current cords copied to clipboard!");
            event.preventDefault = true;
        }
        if (event.message === ".annoy") {
            if (!annoyenabled){
                MeteorXerror(".annoy is already turned off.")
            } else {
                annoyenabled = false
            }

            event.preventDefault = true;
        }
        if (event.message === ".annoy ") {
            //https://github.com/Wurst-Imperium/Wurst7/blob/master/src/main/java/net/wurstclient/commands/AnnoyCmd.java
            var targetLength3 = ".annoy".length;
            var args = event.message.toString().trim();
            if ( //If
                message.length > targetLength3 && //The length of the message is longer than the target length
                message.substring(0, targetLength3).trim().toLowerCase() === ".annoy" //And, the content from character 0 (first) to that of the length, trimmed and put to lowercase is ".makescroll"
              ) {
                var playername = args.substring(targetLength3+1);
                if (countLetters(playername) > 0) {
                    if (annoyenabled){
                        annoyenabled = false;
                    }
                    //@ts-ignore
                    if (PluginAPI.player.getName()==playername){
                        MeteorXerror("Annoying yourself is a bad idea!")
                    } else {
                        MeteorXlog("Now annoying " + playername + ".");
                        annoyenabled = true;
                    }
    
                } else{
                    if (!annoyenabled){
                        MeteorXerror(".annoy is already turned off.")
                    } else {
                        annoyenabled = false
                    }
                }
                //@ts-ignore
                PluginAPI.addEventListener("packetchat", (ev) => {
                    if (annoyenabled){
                        if(chatmessage.startsWith("§c[§6MeteorX§c]§f"||"§c[§6§lWARNING§c]§f"||"§c[§4§lERROR§c]§f"||"§a[§2§lSUCCESS§a]§f"||"§c[§4§lFAILURE§c]§f")){
                            return;
                        }
                        var prefix1 = playername + ">"
                        if (chatmessage.includes("<" + prefix1)||chatmessage.includes(prefix1)){
                            return;
                        }
                        var prefix2 = playername + ":";
                        if(chatmessage.includes("] " + prefix2)||chatmessage.includes("]" + prefix2)){
                        }
                    }
                });
            }
            event.preventDefault = true;
        }
    });
}
