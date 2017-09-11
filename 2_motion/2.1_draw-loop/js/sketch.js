/*
 *	2.1 The Draw Loop
 *	
 *	To achieve motion, you will need to constantly need to change what you are seeing on the screen.
 *	Processing provides us with a "draw loop", a function that is called constantly. In this next exercise,
 *	we are going to play with this function, and discuss what we should, and shouldn't, put in it.
 *
 *	CHALLENGES:
 *		1. Make a rainstorm!
 */

var speed = 2000.0;

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	stroke(color(255));
	noFill();
}	

// Here it is. This method is by default called about 60 times per second (although this can be changed via the
// framerate() method. For now we will just play with it's default behavior.
//
// Since draw() is called 60 times per second, you should really ask yourself if what you write here belongs.
// If your variable doesn't change constantly, leave it out of draw. 
function draw(){
	// So, if you are going to have something move, you often need to keep track of the time.
	// P5 allows you to use millis(), which simply returns the time in milliseconds since the program was
	// started.
	//
	// The number is too big by itself to be useful in this situation, which is where the variable 'speed'
	// will come in.
	var time = millis()/speed;

	// Before any frame is drawn, you will probably want to set your background. This assures 
	// that all past shapes are drawn over by the next frame. Without this, you would see every frame
	// drawn on top of itself!
	//
	// Play around with this. Change the fourth argument in Color() below, to affect alpha (transparency)
	//
	
	// background with partial transparency:
	// background(color(0,0,0,10));

	// completely reset background
	background(color(0,0,0,255));

	// Now, we will draw a simple circle, right in the middle of the screen. For the size, we are passing
	// in some math to give it motion. 
	//
	// Think back to math class and the sine function. It flows smoothly from a low value to a high value.
	// Let's use our time variable to drive that sine wave.
	// Since it returns values between -1 and 1, we will need to scale it up using the width of the window.
	// variable we defined above setup().
	ellipse(width/2,height/2, Math.sin(time)*width);

	// Now, for something fun...
	//
	// Uncomment this next code block:
	//
	/*
	for(var i = 0; i < 100; i++){
		point(
			(width/100)*i,
			(((Math.sin(time)+1)/2)*height)
		);
	}
	*/
}

window.onresize = function() {
	setup();
} 

