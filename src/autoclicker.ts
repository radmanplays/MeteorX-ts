//from https://github.com/MeteorDevelopment/meteor-client/blob/master/src/main/java/meteordevelopment/meteorclient/systems/modules/player/AutoClicker.java
let autoclickerToggle: boolean = false;
let mode: string = "leftclick"
let leftclickdelay: number = 20;
let leftclicktimer: number = 0;
let rightclickdelay: number = 20;
let rightclicktimer: number = 0;
//fun fact: you gotta stay hydrated when developing a hacked client
export function registerautoclicker(){
    // @ts-ignore
    PluginAPI.addEventListener("update", () => {
        if (autoclickerToggle == true){
            if (mode === "rightclick"){
                rightclicktimer++
                if (rightclicktimer > rightclickdelay){
                    //@ts-ignore
                    PluginAPI.rightClickMouse()
                    rightclicktimer = 0;
                }
            }
            if (mode === "leftclick"){
                leftclicktimer++
                if (leftclicktimer > leftclickdelay){
                    //@ts-ignore
                    PluginAPI.clickMouse()
                    leftclicktimer = 0;
                }
            }
            // @ts-ignore
            PluginAPI.player.reload();
        }
    });
}
export function setautoclickertoggle(theBoolean: boolean) {
    autoclickerToggle = theBoolean; // thanks @OtterCodes102
}
export function returnautoclickertoggle(): boolean {
    return autoclickerToggle;
}
export function setautoclickermode(thestring: string) {
    mode = thestring;
}
export function returnautoclickermode(): string {
    return mode;
}
export function setleftclickdelay(thenumber1: number) {
    leftclickdelay = thenumber1;
}
export function returnleftclickdelay(): number {
    return leftclickdelay;
}
export function setrightclickdelay(thenumber2: number) {
    rightclickdelay = thenumber2;
}
export function returnrightclickdelay(): number {
    return rightclickdelay;
}