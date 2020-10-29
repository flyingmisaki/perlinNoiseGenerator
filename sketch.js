var inc = 0.05

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  pixelDensity(1)
}

function draw() {
  loadPixels();
  var yoff = 0
  for (var y = 0; y < height; y++) {
    
    var xoff = 0
    for (var x = 0; x < width; x++) {
      
      var index = (x + y * width) * 4
      var r = (noise(xoff, yoff) * 255)
      
      pixels[index + 0] = r
      pixels[index + 1] = r
      pixels[index + 2] = r
      pixels[index + 3] = 255 //getRandomInteger(0, 255)

      xoff += inc
    }
    yoff += inc
  }
  updatePixels()
  noLoop()
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

draw()
