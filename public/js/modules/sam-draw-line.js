//
//  DRAWING LINES
//
//  Four Methods to Draw a Line
/*
    ctx.beginPath()    // Tells the canvas that we are going to start drawing. Starts a new path.
    ctx.moveTo()       // Takes x,y values for the starting point of the line
    ctx.lineTo()       // Draws a line from the current position to the x,y provided as arguments
    ctx.stroke()       // Indicates to canvas that the path we're drawing should have a stroke, or an outline or line on the path we've set.
*/

$(function(){

  // Init Canvas
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // set 300x300
  canvas.width = 300;
  canvas.height = 300;

  // * EXAMPLE * (my initials)

  // 'S'
  ctx.beginPath()
  ctx.moveTo(0, 0);
  ctx.lineTo(20,0);
  ctx.moveTo(0, 0);
  ctx.lineTo(0,20);
  ctx.lineTo(20,20);
  ctx.lineTo(20,40);
  ctx.lineTo(0,40);


  ctx.stroke();

  // 'C'
  ctx.beginPath();
  ctx.moveTo(72, 1);
  ctx.lineTo(44, 1);
  ctx.lineTo(44, 40);
  ctx.lineTo(72, 40);
  ctx.stroke();

  ctx.strokeStyle = '#ff0000';  // set stroke color
  ctx.lineWidth = 3;            // set line width
  //
  // var gradient = ctx.createLinearGradient(0,0,170,0);  // set gradient as stroke
  // gradient.addColorStop("0","magenta");
  // gradient.addColorStop("0.5","blue");
  // gradient.addColorStop("1.0","red");
  // ctx.strokeStyle = gradient;

});


//  Canvas Axis ===============
//
//  0 1 2 3 4 5 6 7 8 9
//  1
//  2
//  3
//  4
//  5
//  6
//  7
//  8
//  9


// Other Options ===============
