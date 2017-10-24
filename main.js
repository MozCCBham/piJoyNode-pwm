var express = require("express");
var app = express();
var wpi = require("wiringpi-node")

initialised = false;
wpi.wiringPiSetupGpio()

app.use(express.static(__dirname));

function initialise()
{
        wpi.pinMode(7, wpi.OUTPUT);
        wpi.pinMode(8, wpi.OUTPUT);
        wpi.pinMode(9, wpi.OUTPUT);
        wpi.pinMode(10, wpi.OUTPUT);
	range = 100;
        err = wpi.softPwmCreate(7, 0, range);
        err |= wpi.softPwmCreate(8, 0, range);
        err |= wpi.softPwmCreate(9, 0, range);
        err |= wpi.softPwmCreate(10, 0, range);
	if (err != 0) {
		console.log("Error " + errno);
	}
	initialised = true;
	console.log("Initialised");
}

app.get("/", function(req, res) {
	if(!initialised) {
		initialise();
	}
        res.sendFile("index.html", {root : __dirname});
})

app.get("/drive", function(req, res) {
	if(!initialised) {
		initialise();
	}
        dx = req.query.dx;
        dy = req.query.dy;
        forward_pin_R = 9
        forward_pin_L = 7
        backward_pin_R = 10
        backward_pin_L = 8
        pin_high = Math.round(2*Math.sqrt(dx * dx + dy * dy))
        pin_low = Math.round(2*Math.abs(dy))
	console.log("High: " + pin_high)
	console.log("Low:  " + pin_low)
        if (dy > 0) {
                if (dx > 0) {
                        wpi.softPwmWrite(forward_pin_R, pin_low)
                        wpi.softPwmWrite(forward_pin_L, pin_high)
                } else { 
                        wpi.softPwmWrite(forward_pin_R, pin_high)
                        wpi.softPwmWrite(forward_pin_L, pin_low)
                }
                wpi.softPwmWrite(backward_pin_R, 0)
                wpi.softPwmWrite(backward_pin_L, 0)
        } else {
                if (dx > 0) {
                        wpi.softPwmWrite(backward_pin_R, pin_low)
                        wpi.softPwmWrite(backward_pin_L, pin_high)
                } else { 
                        wpi.softPwmWrite(backward_pin_R, pin_high)
                        wpi.softPwmWrite(backward_pin_L, pin_low)
                }
                wpi.softPwmWrite(forward_pin_R, 0)
                wpi.softPwmWrite(forward_pin_L, 0)
        }
})                       
app.get("/stop", function(req, res) {
	console.log("stop")
	wpi.softPwmWrite(7, 0)
	wpi.softPwmWrite(8, 0)
	wpi.softPwmWrite(9, 0)
	wpi.softPwmWrite(10, 0)
})

app.listen(3000)


