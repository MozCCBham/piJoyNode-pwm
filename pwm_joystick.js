
console.log("touchscreen is", VirtualJoystick.touchScreenAvailable() ? "available" : "not available");

var joystick	= new VirtualJoystick({
        container	: document.getElementById('container'),
        mouseSupport	: true,
        limitStickTravel: true,
        stickRadius     : 50
});
joystick.addEventListener('touchStart', function(){
        console.log('down');
});
joystick.addEventListener('touchEnd', function(){
        console.log('up');
});

setInterval(function(){
        var outputEl	= document.getElementById('result');
        outputEl.innerHTML	= '<b>Result:</b> '
                + ' dx:'+joystick.deltaX()
                + ' dy:'+joystick.deltaY()
                + (joystick.right()	? ' right'	: '')
                + (joystick.up()	? ' up'		: '')
                + (joystick.left()	? ' left'	: '')
                + (joystick.down()	? ' down' 	: '')	
        if (joystick.up()) {
        } else if (joystick.down()) {
        } else if (joystick.left()) {
        } else if (joystick.right()) {
        } else {
        }
}, 1/30 * 1000);

