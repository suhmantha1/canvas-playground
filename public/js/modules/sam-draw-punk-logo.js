//
//  DRAWING COMPLEX SHAPES
//
/*
    ctx.arc()              // draws an arc/circle with the follow arguments (x, y, radius, startAngle, endAngle, antiClickWise)
    ctx.drawRect()         // draws a rectangle with 2 points as arguments (x1, y1, x2, y2)
    ctx.bezierCurveTo()    // bezier curve (point1x, point1y, point2x, point2y, x, y)
    ctx.fillText()         // draws a string with a type face, takes (string, x, y)

*/
$(function(){

  // Init Canvas
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // set 300x300
  canvas.width = 300;
  canvas.height = 300;

  // Get canvas center point
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = canvas.width / 2;


  // LOGO DRAWING =========================

  // Base Circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = '#333';
  ctx.fill();

  // Stret lines
  ctx.lineWidth = 13;

  // N/S 1
  ctx.strokeStyle = '#00FA9A';
  ctx.beginPath();
  ctx.moveTo(80, 52);
  ctx.lineTo(80, 248);
  ctx.stroke();

  // N/S 2
  ctx.strokeStyle = '#1E90FF';
  ctx.beginPath();
  ctx.moveTo(190, 40);
  ctx.lineTo(190, 260);
  ctx.stroke();

  // E/W 1
  ctx.strokeStyle = '#4682B4';
  ctx.beginPath();
  ctx.moveTo(30, 120);
  ctx.lineTo(270, 120);
  ctx.stroke();

  // E/W 2
  ctx.strokeStyle = '#C71585';
  ctx.beginPath();
  ctx.moveTo(65, 235);
  ctx.lineTo(235, 235);
  ctx.stroke();

  // SW/NE
  ctx.strokeStyle = '#F0E68C';
  ctx.beginPath();
  ctx.moveTo(105, 260);
  ctx.lineTo(225, 60);
  ctx.stroke();

  // Outline Circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius - 30, 0, 2 * Math.PI, false);
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#fff';
  ctx.stroke();
});
