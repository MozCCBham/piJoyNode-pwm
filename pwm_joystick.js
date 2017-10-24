console.log("touchscreen is", VirtualJoystick.touchScreenAvailable() ? "available" : "not available");

var joystick	= new VirtualJoystick({
        container	: document.getElementById('container'),
        mouseSupport	: true,
        limitStickTravel: true,
        stickRadius     : 100
});
joystick.addEventListener('touchStart', function(){
        console.log('down');
});
joystick.addEventListener('touchEnd', function(){
        console.log('up');
});

var xhr = new XMLHttpRequest();

setInterval(function(){
        var outputEl	= document.getElementById('result');
	var str = ''
                + (joystick.right()	? ' right'	: '')
                + (joystick.up()	? ' up'		: '')
                + (joystick.left()	? ' left'	: '')
                + (joystick.down()	? ' down' 	: '')	
	var outstr = ''
        outputEl.innerHTML	= '<b>Result:</b> '
                + ' dx:'+joystick.deltaX()
                + ' dy:'+joystick.deltaY()
                + str
        if (str.indexOf("up") !== -1) {
		outstr += 'forwards';
	}
        if (str.indexOf("down") !== -1) {
		outstr += 'backwards';
	}
        if (str.indexOf("right") !== -1) {
		outstr += 'right';
	}
        if (str.indexOf("left") !== -1) {
		outstr += 'left';
	}
	if (str === '') {
		outstr = 'stop'
	}
        if (outstr !== 'stop') {
        	xhr.open('get', "drive?" + ("dx=" + joystick.deltaX() + "&dy=" + (-joystick.deltaY())), true);
        } else {
		xhr.open('GET', outstr, true);
        }
	xhr.send(null)
}, 1/30 * 1000);
