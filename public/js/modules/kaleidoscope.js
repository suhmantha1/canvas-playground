//
//  ANIMATION
//

function logoAnimation() {
  var self = this;

  var offsetRotation = 0.0,
      offsetScale = 1.0,
      offsetX = 0.0,
      offsetY = 0.0,
      radius = window.innerWidth / 2,
      height= window.innerHeight / 2,
      slices = 24,
      zoom = 1.0,
      scale = zoom * ( radius / Math.min(image.width, image.height)),
      step = Math.PI * 2 / slices;

  // Grab utils
  self.utils = require('./utils');

  // Init canvas
  self.initCanvas();


  //Draw Loop
  (function drawFrame () {
			self.utils.getAnimationFrame();                          // X-Browser support for requrestAnimationFrame method
			window.requestAnimationFrame(drawFrame, canvas);         // Request Animation Frame tells the browser that we are ready to paint a new frame
			self.ctx.clearRect(0, 0, radius, height);   // Clear the canvas so we can render the next frame

      offsetRotation = offsetRotation + 0.0001;
      offsetScale = offsetScale + .000001;

      for(i = 0; i < slices; i++){
        self.ctx.save();
        self.ctx.translate(radius, height);
        self.ctx.rotate(i * step);

        self.ctx.beginPath();
        self.ctx.moveTo(0, 0);
        self.ctx.lineTo(0, self.canvas.height);
        self.ctx.lineTo(self.canvas.width, self.canvas.height);
        self.ctx.lineTo(self.canvas.width, 0);
        self.ctx.closePath();
        
        self.ctx.rotate(Math.PI / 2);
        self.ctx.scale(scale, scale);
        self.ctx.scale([-1,1][i % 2], 1);
        self.ctx.translate(offsetX - self.cx, offsetY);
        self.ctx.rotate(offsetRotation);
        self.ctx.scale(offsetScale, offsetScale);
        
        self.ctx.fill();
        self.ctx.restore();
      }
        
	}());

  
  $(window).mousemove(function(event) {
    offsetRotation = offsetRotation + .01;
    offsetScale = offsetScale + .000001;
    slices = slices + 1;
    zoom = zoom + 1;
  });
};

// Init Canvas elm, set contex and size
logoAnimation.prototype.initCanvas = function() {
  var self = this;

  // Init Canvas
  self.canvas = document.getElementById('canvas');
  self.ctx = canvas.getContext('2d');

  // set 100vh
  self.canvas.width = window.innerWidth;
  self.canvas.height = window.innerHeight;

  // Get canvas center point
  // self.centerX = window.innerWidth;
  // self.centerY = window.innerHeight;
  // self.radius = window.innerWidth / 2;

  self.image = document.getElementById("image");
  self.ctx.fillStyle = self.ctx.createPattern(image, "repeat");

  self.cx = window.innerWidth / 2;
};



module.exports = new logoAnimation();


