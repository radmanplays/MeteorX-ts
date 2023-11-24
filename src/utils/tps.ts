// from eaglerreborn's example plugins
var currentTps:Number = 0;
export function registertps() {
    // Client-side server TPS estimator with the Plugin API
    // Only reliable if you are not lagging (ie high fps)
    var lastTime;
    var lastAge = -1;

    //@ts-ignore
    PluginAPI.addEventListener("packettimeupdate", (ev)=>{
    var age = ev.totalWorldTime;
    var time = (new Date()).getTime();
    if (lastAge == -1) {
        lastTime = time;
        lastAge = age;
    }
    var diffAge = age - lastAge;
    var diffTime = time - lastTime;
    lastAge = age;
    lastTime = time;
    currentTps = diffAge / (diffTime / 1000);
    });

}
export function gettps(): Number{
    return currentTps
}