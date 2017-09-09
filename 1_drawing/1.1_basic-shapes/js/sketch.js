/*
 *	Processing has always compared their tools to sketchbooks, with the typical P5 program being called "sketches".
 *	With those words in mind, it makes sense to start at creating basic geometric shapes, and drawing lines. 
 *
 *	The challenge is to use what you learn to draw out a "Hello World" message, however you want to.
 */


// The two primary methods in your P5 sketches will be Setup() and Draw().  

// Your setup() method is called once, when the sketch is first started. You will want to focus on setting up
// the initial state of your sketch, and performing operations that don't need to be called at 60 frames per second.
function setup(){
	//the first thing you might want to do is create your canvas.
	//use createCanvas(width, height) to set the size of your sketch in the browser.
	//
	//Lets just make it full width and height of the browser window
	createCanvas(window.innerWidth, window.innerHeight);

	// background() will allow you to pick an initial background color for the canvas. 
	// Remember, the default RGB colors are 0-255. Below is black.
	background(color(0));
	
	// stroke() will set the color of the following commands. For now, we will have shapes, outlined in white!
	stroke(color(255));

	// lets define our basic variables. We will store them here, so that we can let each method call benefit from
	// being able to share widths and heights
	
	var radius = 100;

	// BASIC SHAPES
	//
	// First, I will be using the rectMode() method, to make the placement based on the center of the ellipse, not the top left corner, like it is by default
	rectMode(CENTER);

	// rect(x,y,w,h)
	// 	draw a rectangle, using position, width, and height
	rect(width/2,height/2,radius,radius);

	// ellipse(x,y,w,[h]) 
	// 	this will draw a circle or an ellipse
	// 	this accepts x,y coordinates for position, width, and optionally, height
	//
	// NOTE: width and height are variables created by P5, don't name your variables either! 	
	ellipse(width/2,height/2,radius); 

	// triangle(x1,y1,x2,y2,x3,y3);
	// 	draw a triangle, using three points
	triangle(radius/2+(width/2),0+(height/2),radius+(width/2),radius+(height/2),0+(width/2),radius+(height/2));

	// line(x1,y1,x2,y2)
	// 	draw a line, from point a (x1,y1), to point b (x2,y2)
	line(0,0,width,height);
}	

// Your draw() method is called to constantly, by default at 60 frames per second. To make something move, you've gotta
// use it. Make sure that you only put code in here that needs to be constantly updated!
function draw(){
// We aren't using this method right now, because static shapes shouldn't go in draw() (remember, this is called often)
// If you want to jump ahead and figure out how to make things move, go for it. Otherwise we'll get to that in a while.
}

// Now, this is just something I'm doing so that you can resize the window, it kills me to see the boundary of the sketch...
// each time that the browser detects a resize, it will reinitialize everything.
window.onresize = function() {
	setup();
} 

/*
 *	So now we know a number of basic drawing methods, but not much more. There is still a lot you can do just with basic shapes.
 *
 *	Take some time making your own "Hello World" sketch using these shapes.
 *
 */
