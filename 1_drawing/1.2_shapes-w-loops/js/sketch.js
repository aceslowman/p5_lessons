/*
 * 	1.2 Drawing with Loops
 *
 *	OKAY, so now we have played with a few of the basic shapes in p5, but unless we are using loops, we are going to have to
 *	create every single shape ourselves. 
 *
 *	Don't do what you don't have to.
 *
 *	CHALLENGES:
 *		1. Make a tunnel of multiple 2D primitive shapes.
 *		2. Make the tunnel EVENLY SPACED, instead of exponential, as it is now.
 */

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);

	background(color(0));

	stroke(color(255));

	// Okay, our first loop in p5. 
	// With 'for loops' like this... 
	// 	first we pass in the index variable, and set it's initial value (var i = 0)
	// 	second, we define the condition. As long as 'i' is less than 'numShapes', we can continue looping
	// 	and finally, we define the result of the loop, which is the index 'i' increasing by one.
	//
	// 	What other loops can we use in JavaScript? How else could we play with this?
	//
	
	var numShapes = 100;
	var initial_radius = width;
	for(var i = 0; i < numShapes; i++){
		ellipse(width/2,height/2,initial_radius/(i+1));		
	}

	// Woah, we have a tunnel. Okay you do the rest.
	
	// NOTE: You might notice some funny color stuff happening near the center of the tunnel. This is called a "moire effect", which
	// occurs when you have tightly packed lines, superimposed on each other. 
}

function draw(){
	//Once again, don't worry about draw (unless you are looking to make things move...)
}
