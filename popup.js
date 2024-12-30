//setup event listeners for gamepad connection and disconnection+
window.addEventListener("gamepadconnected", (e) => {
    controller_connected();
    //currentstatus.innerHTML = "gamepad connected";
    console.log(
        "Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index, 
        e.gamepad.id, 
        e.gamepad.buttons.length, 
        e.gamepad.axes.length
    );
});

window.addEventListener("gamepaddisconnected", (e) => {
    controller_connected();
    console.log("Gamepad disconnected from index %d: %s", e.gamepad.index, e.gamepad.id);
});

//returns true if there is a controller connected, false if not
//todo: for some reason the browser isn't seeing when controllers are removed
controller_status = function() {
    current_gamepads = navigator.getGamepads();
    if (current_gamepads.length == 0) {
        return false;
    }
    return true;
}

//function to buzz the controller if there is one connected
buzz_em = function(){
    current_gamepads = navigator.getGamepads();
    if (current_gamepads == null) {
        console.log("No gamepads found.");
        return;
    }
    for (let i = 0; i < current_gamepads.length; i++) {
        if (current_gamepads[i] != null) {
            current_gamepads[i].vibrationActuator.playEffect("dual-rumble", {
                startDelay: 0,
                duration: 1000,
                weakMagnitude: 1.0,
                strongMagnitude: 1.0
            });
        }
    };
}

//initialize
//check to see if there is a controller connected, and update the status
//unfortunately, the web page doesn't know if a controller is connected until a button is pressed
//if it's already connected, so they have to press a button to let the browser know.
currentstatus = document.getElementById("bearbuzzstatus");
bearbuzzicon = document.getElementById("bearbuzzicon");

controller_connected = function() {
    if (controller_status()) {
        currentstatus.innerHTML = "gamepad connected";
        bearbuzzicon.src = "icons/controller-connect64x64.png";
        console.log("controller connected");
        bearbuzzicon.alt = "controller connected";
    } else {
        currentstatus.innerHTML = "no gamepads connected<br/>If one is connected, <br/>press a button on the controller to reconnect";
        bearbuzzicon.src = "icons/controller-disconnect64x64.png";
        console.log("controller disconnected");
        bearbuzzicon.alt = "controller disconnected";
    }
}

init = controller_connected();
