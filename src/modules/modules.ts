// dosnt work


import { returnguivisible } from "../etc/gui";
type Module = {
    name: string;
};
  
export function registermodule(module: Module): void {
    if (returnguivisible()==true){
      var hacks = document.getElementById("hacks")
      if (module.name) {
        //will execute something like this : let modulegui = document.createElement("div");
        eval('let ' + module.name + 'gui = document.createElement("div")');
        /*will execute something like this : 
        modulegui.innerHTML = `
          <tr style="box-shadow: grey 0px 2px 0px;">
          <td style="user-select: text;background-color: #9d00ff30;">${module.name}</td>
          <td style="background-color: gray;text-align: center;" id="${module.name}">Activate</td>
          </tr>
        `
        */
        eval(module.name+'gui.innerHTML = `<th style="text-align: center; width: 15%;">Activate/Deactivate</th></tr><tr style="box-shadow: grey 0px 2px 0px;"><td style="user-select: text;background-color: #9d00ff30;">${module.name}</td><td style="background-color: gray;text-align: center;cursor: pointer;user-select: none;" id="${module.name}">Activate</td></tr>`')
        eval(`hacks.appendChild(${module.name+"gui"});`)
      } else {
        throw Error("[MeteorX] Error: module name not declared")
      }
    }
}
