// import modules and commands...
import { displayToChat } from "../utils/chat";
import { setStepToggle, returnStepToggle } from "../modules/player/step";
import { setSpiderToggle, returnSpiderToggle } from "../modules/player/spider";
import { setNofallToggle, returnNofallToggle } from "../modules/player/nofall";
import { setFullbrightToggle, returnFullbrightToggle } from "../modules/render/fullbright";
import { setjetpacktoggle, returnjetpacktoggle, setjetpackforce, returnjetpackforce } from '../modules/movement/jetpack';
import { setnowebToggle, returnnowebToggle } from "../modules/player/noweb";
import { setautoclickertoggle, returnautoclickertoggle, setautoclickermode, returnautoclickermode, setleftclickdelay, returnleftclickdelay, setrightclickdelay, returnrightclickdelay } from '../modules/player/autoclicker';
import { setslipperyToggle, returnslipperytoggle } from "../modules/movement/slippery";
import { setautosprinttoggle, returnautosprinttoggle } from "../modules/player/autosprint";
import { setautowtaptoggle, returnautowtaptoggle } from "../modules/player/autowtap";
import { setspeedtoggle, returnspeedtoggle, setspeedvalue, returnspeedvalue } from '../modules/movement/speed';
var guiVisible:boolean = false; // Variable to keep track of the visibility of the GUI
export function registergui() {
  function toggleGui() { // Function to toggle the GUI visibility
      if (guiVisible) { // If the GUI is visible
          hideGui(); // Hide the GUI
      } else {
          showGui(); // Otherwise, show the GUI
      }
    }

  function showGui() { // Function to show the GUI
      hideGui(); // If the GUI is already open, this will hide it.
      
      var gui = document.createElement("gui"); // Create a new "gui" element
      
      if (document.pointerLockElement != null) {// if pointerlock is enabled
        document.exitPointerLock()// exits pointerlock
      }
        // gui's html code
        gui.innerHTML =`
        <gui id="myGui" style="width: 100%;height: 100%;position: fixed;top: 0px;left: 0px;z-index: 10;color: white;font-family: Minecraftia, sans-serif;overflow: hidden scroll;background-color: rgba(80, 80, 80, 0.42);background-blend-mode: multiply;background-size: 64px;">
        <h1 style="text-shadow: 0px 0px 4px;">MeteorX GUI</h1>
        <p style="font-size: 0.8rem; color: yellow;">(totally not stolen from plugin manager's gui)</p><p style="font-size: 0.8rem; color: yellow;">ik the gui looks kinda bad for a hacked client but its meteorX alpha ig. i WILL update this gui in the future</p><p style="font-size: 0.8rem; color: orangered;">click on "Activate" to activate a hack and click on "Deactivate" to deactivate a hack</p>
        <table style="table-layout: fixed; width: 100%;">
            <tbody><tr style="background: rgb(80, 80, 80);">
                <th style="text-align: center;">Hacks</th>
                
            <th style="text-align: center; width: 15%;">Settings</th><th style="text-align: center; width: 15%;" id="hacks">Activate/Deactivate</th></tr>
            <tr style="box-shadow: grey 0px 2px 0px;">
            <td style="user-select: text;background-color: #9d00ff30;">Jetpack (hold space to fly) 🎒💨</td>
            <td style="background-color: #e59400;text-align: center;" id="jetpacksettings">Settings</td><td style="background-color: gray;text-align: center;" id="jetpack">Activate</td>
            </tr>
            <tr style="box-shadow: grey 0px 2px 0px;">
                <td style="user-select: text;background-color: #9d00ff30;">Step</td>
                <td style="background-color: #9d00ff30;text-align: center;"></td><td style="background-color: gray; text-align: center;" id="step">Activate</td>
            </tr>
            <tr style="box-shadow: grey 0px 2px 0px;">
                <td style="user-select: text;background-color: #9d00ff30;">Spider</td>
                <td style="background-color: #9d00ff30;text-align: center;"></td><td style="background-color: gray; text-align: center;" id="spider">Activate</td>
            </tr>
            <tr style="box-shadow: grey 0px 2px 0px;">
                <td style="user-select: text;background-color: #9d00ff30;">Nofall</td>
                <td style="background-color: #9d00ff30;text-align: center;"></td><td style="background-color: gray; text-align: center;" id="nofall">Activate</td>
            </tr>
            <tr style="box-shadow: grey 0px 2px 0px;">
                <td style="user-select: text;background-color: #9d00ff30;">Fullbright</td>
                <td style="background-color: #9d00ff30;text-align: center;"></td><td style="background-color: gray; text-align: center;" id="fullbright">Activate</td>
            </tr>
            <tr style="box-shadow: grey 0px 2px 0px;"> 
            <td style="user-select: text;background-color: #9d00ff30;">NoWeb</td> 
            <td style="background-color: #9d00ff30;text-align: center;"></td><td style="background-color: gray;text-align: center;" id="noweb">Activate</td> 
            </tr> 
            <tr style="box-shadow: grey 0px 2px 0px;"> 
            <td style="user-select: text;background-color: #9d00ff30;">Autoclicker</td> 
             
            <td style="background-color: #e59400;text-align: center;" id="autoclickersettings">Settings</td><td style="background-color: gray;text-align: center;" id="autoclicker">Activate</td>

            </tr> 
            <tr style="box-shadow: grey 0px 2px 0px;"> 
            <td style="user-select: text;background-color: #9d00ff30;">slipperymod</td> 
            <td style="background-color: #9d00ff30;text-align: center;"></td><td style="background-color: gray;text-align: center;" id="slippery">Activate</td> 
            </tr> 
            <tr style="box-shadow: grey 0px 2px 0px;"> 
            <td style="user-select: text;background-color: #9d00ff30;">autosprint</td> 
            <td style="background-color: #9d00ff30;text-align: center;"></td><td style="background-color: gray;text-align: center;" id="autosprint">Activate</td> 
            </tr> 
            <tr style="box-shadow: grey 0px 2px 0px;"> 
            <td style="user-select: text;background-color: #9d00ff30;">autowtap</td> 
            <td style="background-color: #9d00ff30;text-align: center;"></td><td style="background-color: gray;text-align: center;" id="autowtap">Activate</td> 
            </tr> 
            <tr style="box-shadow: grey 0px 2px 0px;"> 
            <td style="user-select: text;background-color: #9d00ff30;">speed</td> 
             
            <td style="background-color: #e59400;text-align: center;" id="speedsettings">Settings</td><td style="background-color: gray;text-align: center;" id="speed">Activate</td>

            </tr> 
        </tbody></table>
        <a style="background: transparent; text-align: center; color: yellow; cursor: pointer; font-family: Minecraftia, sans-serif; text-decoration: underline; border: 0px; margin-right: 1rem; font-size: 1rem;" href="https://github.com/radmanplays/MeteorX-ts/issues/new" target="_blank">suggest a new feature/hack</a>
        <a style="background: transparent;text-align: center;color: orange;cursor: pointer;font-family: Minecraftia, sans-serif;text-decoration: underline;border: 0px;font-size: 1rem;" href="https://github.com/orgs/EaglerReborn/discussions/9" target="_blank">version Roadmap</a>
        
          </gui>
        `; // Set the HTML content of the "gui" element
        gui.id = "myGui"; // Set the ID of the "gui" element to "myGui"
        // css styles of the gui
        gui.style.width = '100%';
        gui.style.height = '100%';
        gui.style.position = 'fixed';
        gui.style.top = '0px';
        gui.style.left = '0px';
        gui.style.zIndex = '100';
        gui.style.color = 'white';
        gui.style.fontFamily = 'Minecraftia, sans-serif';
        gui.style.overflow = 'hidden scroll';
        gui.style.backgroundColor = 'rgba(80, 80, 80, 0.42)';
        gui.style.backgroundBlendMode = 'multiply';
        gui.style.backgroundSize = '64px';
        document.body.appendChild(gui); // Append the "gui" element to the body of the document
        guiVisible = true; // Set the GUI visibility to true
        // assign the activate/deactivate buttons to variables
        var jetpackElement = document.getElementById("jetpack");
        var jetpacksettings = document.getElementById("jetpacksettings"); 
        var stepElement = document.getElementById("step");
        var spiderElement = document.getElementById("spider");
        var nofallElement = document.getElementById("nofall");
        var fullbrightElement = document.getElementById("fullbright");
        var nowebElement = document.getElementById("noweb");
        var autoclickersettings = document.getElementById("autoclickersettings"); 
        var autoclickerElement = document.getElementById("autoclicker"); 
        var slipperyElement = document.getElementById("slippery");
        var autosprintElement = document.getElementById("autosprint"); 
        var autowtapElement = document.getElementById("autowtap");  
        var speedElement = document.getElementById("speed");  
        var speedsettings = document.getElementById("speedsettings"); 
        // if mouse cursor is hovering over the buttons set the cursor to pointer
        jetpackElement.addEventListener("mouseover", function() {
          jetpackElement.style.cursor = "pointer";
        });
        jetpacksettings.addEventListener("mouseover", function() {
          autoclickersettings.style.cursor = "pointer";
        });
        stepElement.addEventListener("mouseover", function() {
          stepElement.style.cursor = "pointer";
        })
        spiderElement.addEventListener("mouseover", function() {
          spiderElement.style.cursor = "pointer";
        })
        nofallElement.addEventListener("mouseover", function() {
          nofallElement.style.cursor = "pointer";
        })
        fullbrightElement.addEventListener("mouseover", function() {
          fullbrightElement.style.cursor = "pointer";
        })
        nowebElement.addEventListener("mouseover", function() {
          nowebElement.style.cursor = "pointer";
        });
        autoclickersettings.addEventListener("mouseover", function() {
          autoclickersettings.style.cursor = "pointer";
        });
        autoclickerElement.addEventListener("mouseover", function() {
          autoclickerElement.style.cursor = "pointer";
        });
        slipperyElement.addEventListener("mouseover", function() {
          slipperyElement.style.cursor = "pointer";
        });
        autosprintElement.addEventListener("mouseover", function() {
          autosprintElement.style.cursor = "pointer";
        });
        autowtapElement.addEventListener("mouseover", function() {
          autowtapElement.style.cursor = "pointer";
        });
        speedElement.addEventListener("mouseover", function() {
          speedElement.style.cursor = "pointer";
        });
        speedsettings.addEventListener("mouseover", function() {
          speedsettings.style.cursor = "pointer";
        });
        // if the gui opens and the variable for modules are false make the buttons say: "Activate"
        if (returnjetpacktoggle() === false) {
          jetpackElement.innerText = "Activate";
          jetpackElement.style.backgroundColor = "green";
          }
        if (returnStepToggle() === false) {
          stepElement.innerText = "Activate";
          stepElement.style.backgroundColor = "green";
        }
        if (returnSpiderToggle() === false) {
          spiderElement.innerText = "Activate";
          spiderElement.style.backgroundColor = "green";
        }
        if (returnNofallToggle() === false) {
          nofallElement.innerText = "Activate";
          nofallElement.style.backgroundColor = "green";
        }
        if (returnFullbrightToggle() === false) {
          fullbrightElement.innerText = "Activate";
          fullbrightElement.style.backgroundColor = "green";
        }
        if (returnnowebToggle() === false) {
          nowebElement.innerText = "Activate";
          nowebElement.style.backgroundColor = "green";
        }
        if (returnautoclickertoggle() === false) {
          autoclickerElement.innerText = "Activate";
          autoclickerElement.style.backgroundColor = "green";
        }
        if (returnslipperytoggle() === false) {
          slipperyElement.innerText = "Activate";
          slipperyElement.style.backgroundColor = "green";
        }
        if (returnautosprinttoggle() === false) {
          autosprintElement.innerText = "Activate";
          autosprintElement.style.backgroundColor = "green";
        }
        if (returnautowtaptoggle() === false) {
          autowtapElement.innerText = "Activate";
          autowtapElement.style.backgroundColor = "green";
        }
        if (returnspeedtoggle() === false) {
          speedElement.innerText = "Activate";
          speedElement.style.backgroundColor = "green";
        }
        // if the gui opens and the variable for modules are true make the buttons say: "Deactivate"
        if (returnjetpacktoggle() === true) {
          jetpackElement.innerText = "Deactivate";
          jetpackElement.style.backgroundColor = "red";
          }
        if (returnStepToggle() === true) {
          stepElement.innerText = "Deactivate";
          stepElement.style.backgroundColor = "red";
        }
        if (returnSpiderToggle() === true) {
          spiderElement.innerText = "Deactivate";
          spiderElement.style.backgroundColor = "red";
        }
        if (returnNofallToggle() === true) {
          nofallElement.innerText = "Deactivate";
          nofallElement.style.backgroundColor = "red";
        }
        if (returnFullbrightToggle() === true) {
          fullbrightElement.innerText = "Deactivate";
          fullbrightElement.style.backgroundColor = "red";
        }
        if (returnnowebToggle() === true) {
          nowebElement.innerText = "Deactivate";
          nowebElement.style.backgroundColor = "red";
        }
        if (returnautoclickertoggle() === true) {
          autoclickerElement.innerText = "Deactivate";
          autoclickerElement.style.backgroundColor = "red";
        }
        if (returnslipperytoggle() === true) {
          slipperyElement.innerText = "Deactivate";
          slipperyElement.style.backgroundColor = "red";
        }
        if (returnautosprinttoggle() === true) {
          autosprintElement.innerText = "Deactivate";
          autosprintElement.style.backgroundColor = "red";
        }
        if (returnautowtaptoggle() === true) {
          autowtapElement.innerText = "Deactivate";
          autowtapElement.style.backgroundColor = "red";
        }
        if (returnspeedtoggle() === true) {
          speedElement.innerText = "Deactivate";
          speedElement.style.backgroundColor = "red";
        }
        // if the user clicks on the buttons and the variable for modules are false make the buttons say "Deactivate" and if its true make the buttons say "activate" whenever the user clicks on the button 
        stepElement.addEventListener("click", function(){
          if (returnStepToggle() !== true) {
            stepElement.innerText = "Deactivate";
            stepElement.style.backgroundColor = "red";
            setStepToggle(true);
          } else {
            stepElement.innerText = "Activate";
            stepElement.style.backgroundColor = "green";
            setStepToggle(false);
          }
        })
        spiderElement.addEventListener("click", function() {
          if (returnSpiderToggle() !== true) {
            spiderElement.innerText = "Deactivate";
            spiderElement.style.backgroundColor = "red";
            setSpiderToggle(true);
          } else {
            spiderElement.innerText = "Activate";
            spiderElement.style.backgroundColor = "green";
            setSpiderToggle(false);
          }
        })
        nofallElement.addEventListener("click", function() {
          if (returnNofallToggle() !== true) {
            nofallElement.innerText = "Deactivate";
            nofallElement.style.backgroundColor = "red";
            setNofallToggle(true);
          } else {
            nofallElement.innerText = "Activate";
            nofallElement.style.backgroundColor = "green";
            setNofallToggle(false);
          }
        })
        fullbrightElement.addEventListener("click", function() {
          if (returnFullbrightToggle() !== true) {
            fullbrightElement.innerText = "Deactivate";
            fullbrightElement.style.backgroundColor = "red";
            setFullbrightToggle(true);
          } else {
            fullbrightElement.innerText = "Activate";
            fullbrightElement.style.backgroundColor = "green";
            setFullbrightToggle(false);
          }
        })
        jetpackElement.addEventListener("click", function() {
          if (returnjetpacktoggle() !== true) {
            jetpackElement.innerText = "Deactivate";
            jetpackElement.style.backgroundColor = "red";
            setjetpacktoggle(true);
          } else {
            jetpackElement.innerText = "Activate";
            jetpackElement.style.backgroundColor = "green";
            setjetpacktoggle(false);
          }
        });
        jetpacksettings.addEventListener("click", function() {// if the user clicks on the settings button for the jetpack module
          //prompt user with a box to enter jetpack force 
          var jetpackforce = prompt("choose the force for jetpack.(more than 0.2 might trigger anticheats)\ndefault : 0.2 \ncurrent : " + returnjetpackforce())
          //turns the prompt answer into a number
          var numjetpackforce = Number(jetpackforce);
          // if it wasnt a number tell the user to enter the jetpack force again
          if (isNaN(numjetpackforce)){
            alert("jetpackforce is NAN (not a number) setting jetpackforce to default")
            setjetpackforce(0.2)
          }
          // if the user canceled the prompt make the user PAY FOR THEIR ACTIONS(i mean set the jetpack force to default :> )
          if (jetpackforce == null || jetpackforce == "") {
            alert ("User cancelled the prompt.\n setting jetpackforce to default (0.2)")
            setjetpackforce(0.2)
          } else {// if the user didnt cancel the prompt like a good boy tell them that the jetpack force has been set to what they chose
            alert ("jetpackforce set to " + jetpackforce)
            setjetpackforce(numjetpackforce)
          }
        });
        nowebElement.addEventListener("click", function() {
          // Toggle the jetpackGuiActive state
      
          // Update the text and background color based on the state
          if (returnnowebToggle() !== true) {
            nowebElement.innerText = "Deactivate";
            nowebElement.style.backgroundColor = "red";
            setnowebToggle(true);
          } else {
            nowebElement.innerText = "Activate";
            nowebElement.style.backgroundColor = "green";
            setnowebToggle(false);
        } 
        });
        autoclickerElement.addEventListener("click", function() {
          if (returnautoclickertoggle() !== true) {
            autoclickerElement.innerText = "Deactivate";
            autoclickerElement.style.backgroundColor = "red";
            setautoclickertoggle(true);
          } else {
            autoclickerElement.innerText = "Activate";
            autoclickerElement.style.backgroundColor = "green";
            setautoclickertoggle(false); 
          }
        });
        autoclickersettings.addEventListener("click", function(){
          let clickercanceled = false;
          var clickermode = prompt("choose mode (by entering a numberin the box below): \n [1] rightclick \n [2] leftclick", "2");
          var nummode = Number(clickermode)
          if (clickermode == null || clickermode == "") {
            console.log("User cancelled the prompt.\n mode set to default(leftclick)");
            setautoclickermode("leftclick")
            clickercanceled = true;
          } else if (clickermode === "1"){
              setautoclickermode("rightclick")
          } else if (clickermode === "2"){
            setautoclickermode("leftclick")
          }else if (isNaN(nummode) || nummode != 1||2){
            alert("invalid input(" + clickermode +") please press the settings button again \n and choose the clicking mode that you want")
            clickercanceled = true;
          }
          if (!clickercanceled){
            var delay = prompt ("enter delay between clicks (per tick (20 ticks = 1 second))\n (example : 10) \n (examples not to enter: 69.420) :", "20");
            var numdelay = Number(delay)
            if (delay == null) {
              alert("User cancelled the delay prompt.\n delay set to default (20 ticks(1 cps))");
            } else if (clickermode === "1"){
              setrightclickdelay(numdelay)
            } else if (clickermode === "2"){
              setleftclickdelay(numdelay)
            }  else if (isNaN(numdelay)) {
              alert("the delay that you chose(" + delay + ") is NOT A NUMBER,\nplease press the settings button again and \n choose the delay that you want");
          }
          }
        });
        slipperyElement.addEventListener("click", function() {
          if (returnslipperytoggle() !== true) {
            slipperyElement.innerText = "Deactivate";
            slipperyElement.style.backgroundColor = "red";
            setslipperyToggle(true);
          } else {
            slipperyElement.innerText = "Activate";
            slipperyElement.style.backgroundColor = "green";
            setslipperyToggle(false); 
          }
        });
        autosprintElement.addEventListener("click", function() {
          if (returnautosprinttoggle() !== true) {
            if (returnautowtaptoggle() == true){
              autowtapElement.innerText = "Activate";
              autowtapElement.style.backgroundColor = "green";
              setautowtaptoggle(false);
            }
            autosprintElement.innerText = "Deactivate";
            autosprintElement.style.backgroundColor = "red";
            setautosprinttoggle(true);
          } else {
            autosprintElement.innerText = "Activate";
            autosprintElement.style.backgroundColor = "green";
            setautosprinttoggle(false);
          }
        })
        autowtapElement.addEventListener("click", function() {
          if (returnautowtaptoggle() !== true) {
            if (returnautosprinttoggle() == true){
              autosprintElement.innerText = "Activate";
              autosprintElement.style.backgroundColor = "green";
              setautosprinttoggle(false);
            }
            autowtapElement.innerText = "Deactivate";
            autowtapElement.style.backgroundColor = "red";
            setautowtaptoggle(true);
          } else {
            autowtapElement.innerText = "Activate";
            autowtapElement.style.backgroundColor = "green";
            setautowtaptoggle(false);
          }
        })
        speedElement.addEventListener("click", function() {
          if (returnspeedtoggle() !== true) {
            speedElement.innerText = "Deactivate";
            speedElement.style.backgroundColor = "red";
            setspeedtoggle(true);
          } else {
            speedElement.innerText = "Activate";
            speedElement.style.backgroundColor = "green";
            setspeedtoggle(false); 
          }
        });
        speedsettings.addEventListener("click", function(){
          let speedvalue = prompt("how fast do you want to be? \ndefault: 2(double the speed) \ncurrent: " + returnspeedvalue())
          var numspeedvalue = Number(speedvalue)
          if (isNaN(numspeedvalue)){
            alert("speed is NAN (not a number) setting speed to default")
            setspeedvalue(2)
          }
          if (speedvalue == null || speedvalue == "") {
            alert ("User cancelled the prompt.\n setting speed to default (2)")
            setspeedvalue(2)
          } else {
            alert ("speed set to " + speedvalue)
            setspeedvalue(numspeedvalue)
          }
        });
    }
    


  function hideGui() { // Function to hide the GUI
      if (document.getElementById("myGui")) { // If the "myGui" element exists
          document.getElementById("myGui").remove(); // Remove the "myGui" element from the document
      }
      guiVisible = false; // Set the GUI visibility to false
      
  }

  window.addEventListener("keydown", (event) => { // Event listener for keydown events
      if (event.key === "Shift" && event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) { // If the right Shift key is pressed
          toggleGui(); // Toggle the GUI visibility
      }
      
      if (event.key === "Escape" || event.key === "`") { // If the Escape key or backtick is pressed
        hideGui(); // Hide the GUI
      }
    });
}
export function returnguivisible(){
  return guiVisible
}
