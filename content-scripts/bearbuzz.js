//add a listener to the body of the document to see if an animation has been added.
//if so, that's likely the confetti or an onscreen toast message. so buzz the controller.
document.body.addEventListener("animationstart", function(e) {
    console.log("buzz buzz");
    buzz_em();
});

//function to buzz the controller if there is one connected
buzz_em = function(){
    current_gamepads = navigator.getGamepads();
    if (current_gamepads.length == 0) {
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

function checkGamepadConnection() {
    const gamepads = navigator.getGamepads();
    for (let i = 0; i < gamepads.length; i++) {
        if (gamepads[i]) {
            console.log(`Gamepad connected at index ${i}: ${gamepads[i].id}`);
        }
    }
}

checkGamepadConnection();
