import { displayToChat } from "./chat";
import { setStepToggle, returnStepToggle } from "./step";
import { setSpiderToggle, returnSpiderToggle } from "./spider";
import { setNofallToggle, returnNofallToggle } from "./nofall";
import { setFullbrightToggle, returnFullbrightToggle } from "./fullbright";
import { setjetpacktoggle, returnjetpacktoggle } from "./jetpack";
import { setnowebToggle, returnnowebToggle } from "./noweb";
export function registergui() {
  var guiVisible = false; // Variable to keep track of the visibility of the GUI

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
      
      if (document.pointerLockElement != null) {
        document.exitPointerLock()
      }
        gui.innerHTML =`
        <gui id="myGui" style="width: 100%;height: 100%;position: fixed;top: 0px;left: 0px;z-index: 10;color: white;font-family: Minecraftia, sans-serif;overflow: hidden scroll;background-color: rgba(80, 80, 80, 0.42);background-blend-mode: multiply;background-size: 64px;">
        <h1 style="text-shadow: 0px 0px 4px;">MeteorX GUI</h1>
        <p style="font-size: 0.8rem; color: yellow;">(totally not stolen from plugin manager's gui)</p><p style="font-size: 0.8rem; color: yellow;">ik the gui looks kinda bad for a hacked client but its meteorX alpha ig. i WILL update this gui in the future</p><p style="font-size: 0.8rem; color: orangered;">click on "Activate" to activate a hack and click on "Deactivate" to deactivate a hack</p>
        <table style="table-layout: fixed; width: 100%;">
            <tbody><tr style="background: rgb(80, 80, 80);">
                <th style="text-align: center;">Hacks</th>
                <th style="text-align: center; width: 15%;">Activate/Deactivate</th>
            </tr>
            <tr style="box-shadow: grey 0px 2px 0px;">
                <td style="user-select: text;background-color: #9d00ff30;">Jetpack (hold space to fly) 🎒💨</td>
                <td style="background-color: gray; text-align: center;" id="jetpack">Activate</td>
            </tr>
            <tr style="box-shadow: grey 0px 2px 0px;">
                <td style="user-select: text;background-color: #9d00ff30;">Step</td>
                <td style="background-color: gray; text-align: center;" id="step">Activate</td>
            </tr>
            <tr style="box-shadow: grey 0px 2px 0px;">
                <td style="user-select: text;background-color: #9d00ff30;">Spider</td>
                <td style="background-color: gray; text-align: center;" id="spider">Activate</td>
            </tr>
            <tr style="box-shadow: grey 0px 2px 0px;">
                <td style="user-select: text;background-color: #9d00ff30;">Nofall</td>
                <td style="background-color: gray; text-align: center;" id="nofall">Activate</td>
            </tr>
            <tr style="box-shadow: grey 0px 2px 0px;">
                <td style="user-select: text;background-color: #9d00ff30;">Fullbright</td>
                <td style="background-color: gray; text-align: center;" id="fullbright">Activate</td>
            </tr>
            <tr style="box-shadow: grey 0px 2px 0px;"> 
            <td style="user-select: text;background-color: #9d00ff30;">NoWeb</td> 
            <td style="background-color: gray; text-align: center;" id="noweb">Activate</td> 
            </tr> 
        </tbody></table>
        <a style="background: transparent; text-align: center; color: yellow; cursor: pointer; font-family: Minecraftia, sans-serif; text-decoration: underline; border: 0px; margin-right: 1rem; font-size: 1rem;" href="https://github.com/radmanplays/MeteorX-ts/issues/new" target="_blank">suggest a new feature/hack</a>
        <a style="background: transparent;text-align: center;color: orange;cursor: pointer;font-family: Minecraftia, sans-serif;text-decoration: underline;border: 0px;font-size: 1rem;" href="https://github.com/orgs/EaglerReborn/discussions/9" target="_blank">version Roadmap</a>
        
          </gui>
        `; // Set the HTML content of the "gui" element
        gui.id = "myGui"; // Set the ID of the "gui" element to "myGui"
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
        var jetpackElement = document.getElementById("jetpack");
        var stepElement = document.getElementById("step");
        var spiderElement = document.getElementById("spider");
        var nofallElement = document.getElementById("nofall");
        var fullbrightElement = document.getElementById("fullbright");
        var nowebElement = document.getElementById("noweb");
        jetpackElement.addEventListener("mouseover", function() {
          jetpackElement.style.cursor = "pointer";
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