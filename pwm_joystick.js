
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
        if (str.indexOf("up") !== -1) {
                outstr = 'forwards';
        }
        if (str.indexOf("down") !== -1) {
                outstr = 'backwards';
        }
        if (str.indexOf("right") !== -1) {
                outstr = 'right';
        }
        if (str.indexOf("left") !== -1) {
                outstr = 'left';
        }
        if (str === '') {
                outstr = 'stop'
        }
        xhr.open('GET', outstr, true);
        xhr.send(null)
}, 1/30 * 1000);

