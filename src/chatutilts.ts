import { displayToChat } from "./chat";
export function MeteorXlog(message: string) {
    displayToChat("§c[§6MeteorX§c]§f " + message)
}
export function MeteorXwarning(message: string) {
    displayToChat("§c[§6§lWARNING§c]§f " + message)
}
export function MeteorXerror(message: string) {
    displayToChat("§c[§4§lERROR§c]§f " + message)
}
export function MeteorXsuccess(message: string) {
    displayToChat("§a[§2§lSUCCESS§a]§f " + message)
}
export function MeteorXfailure(message: string) {
    displayToChat("§c[§4§lFAILURE§c]§f " + message)
}