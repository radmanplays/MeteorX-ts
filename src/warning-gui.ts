export function registerwarning() {
    PluginAPI.require("network");
    // these server are from https://radmanplays.github.io/serverlist/
    const servers = "wss://mc.arch.lol" || "wss://mc.asspixel.net/" || "wss://web.asspixel.net/CAP/" || "wss://sus.shhnowisnottheti.me" || "wss://mc.theludos.com" || "wss://zentic.cc" || "wss://venstone.ddns.net:8082" || "wss://aeon-network.net/1.8" || "wss://ggsmp.net/" || "wss://play.cerealnet.work" || "wss://flamemc.repl.co" || "wss://eagler.lbgaming.co" || "wss://legxndsmp.minecraft.pe" || "wss://asianf4rmer.minecraft.pe" || "wss://mc.amythest.lol" || "wss://endoria.play" || "wss://play.hybridmc.repl.co/" || "wss://mercurymc.net"
    //@ts-ignore
    PluginAPI.addEventListener("packetjoingame", (ev) => {
        serverip = ev.ip;
        if (serverip = servers) {
            var div = document.createElement('div');
            div.id = 'GUI';
            div.innerHTML = `
            <div id="GUI" style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 10; color: white; font-family: Minecraftia, sans-serif; overflow-x: hidden; background-image: url(&quot;data:image/png;base64,UklGRhoBAABXRUJQVlA4TA0BAAAvn8AnAIWjtpEECdnA2N0DsTROy7xUqfrWw0jbyLkJKTz0+I20jTT/Bo89e1YR/Wfktm0Y+wNKLobT7QP/n/B7Z/naW26QHoTpHB7LFouyKHlzeHxfCStSuj9KdbC8z1IJ5iWiyQed48vtYJ+lUu0t4VwranS1XMIutSiLYlbb8G54uf2p3VPSfRZtSrlsPFjOzZZrd/us3B3uK+HcHJQql+xbLMrS/WqNpm6DeZ/VIPVYaN/KzUbp91nd9xl5pYu50dU2W417nbdTj5l2Ne92uM9qXNpyf6+oXkabHKXaZ1HS4Iaqpim+1KIJ+0M49/LjNbTGP5mrrMZEuc7Uzcb1ViOJ6TuOt4NGJs+zDgA=&quot;); background-color: rgb(60, 60, 60); background-blend-mode: multiply; background-size: 64px;">
            <h1 style="text-align: center;text-shadow: 0px 0px 4px;color: red;">Warning!</h1>
            <h3 style="color: yellow;text-align: center;">Use your mind and read -lax1dude</h3>
            <h4 style="color: white;text-align: center;">this server that you are trying to join is a <br> non-anarchy server and bc this hacked client <br> is client-side you WILL get banned     !   </h4><h4 style="color: green;text-align: center;">Im NOT responsible for you getting BANNED!</h4><h4 style="color: white;text-align: center;">this hacked client is made for fun. please only use this on anarchy server</h4>
          <input type="checkbox" name="sad-checkbox" style="
                margin-left: 287px;
                ">i know what im doing and im a stupid hacker man
                <button style="
                font-size: 27px;
                padding: 12px;
                background-color: gray;
                color: white;
                border: none;
                border-radius: 5px;
                text-decoration: none;
                max-width: 100%;
                width: 306px;
                text-align: center;
                display: block;
                margin:auto;
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .5s ease-in-out;
                font-family: 'Minecraftia';
                height: 66px;
                margin-left: 285px;
                margin-top: 26px;
                ">continue :(
                </button><button style="
                font-size: 27px;
                padding: 12px;
                background-color: gray;
                color: white;
                border: none;
                border-radius: 5px;
                text-decoration: none;
                max-width: 100%;
                width: 306px;
                text-align: center;
                display: block;
                /* margin:auto; */
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .5s ease-in-out;
                font-family: 'Minecraftia';
                height: 66px;
                margin-left: 654px;
                margin-top: -65px;
                /* margin-bottom: 44px; */
                ">disconnect :)</button></div>
              `;
        
            // Set the styles for the div
            div.style = `width:100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 10; color: white; font-family: Minecraftia, sans-serif; overflow-x: hidden; background-image: url(data:image/png;base64,UklGRhoBAABXRUJQVlA4TA0BAAAvn8AnAIWjtpEECdnA2N0DsTROy7xUqfrWw0jbyLkJKTz0+I20jTT/Bo89e1YR/Wfktm0Y+wNKLobT7QP/n/B7Z/naW26QHoTpHB7LFouyKHlzeHxfCStSuj9KdbC8z1IJ5iWiyQed48vtYJ+lUu0t4VwranS1XMIutSiLYlbb8G54uf2p3VPSfRZtSrlsPFjOzZZrd/us3B3uK+HcHJQql+xbLMrS/WqNpm6DeZ/VIPVYaN/KzUbp91nd9xl5pYu50dU2W417nbdTj5l2Ne92uM9qXNpyf6+oXkabHKXaZ1HS4Iaqpim+1KIJ+0M49/LjNbTGP5mrrMZEuc7Uzcb1ViOJ6TuOt4NGJs+zDgA=); background-color: rgb(60,60,60); background-blend-mode: multiply; background-size: 64px;`;
        
            // Append the div to the end of the body tag
            document.body.appendChild(div);
        }
    });
}