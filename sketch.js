function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  for (var i = 0; i < 200; i++) {
    var x = map(sin(frameCount / 5), -1, 1, 0, 255);
    var y = map(cos(frameCount / 5), -1, 1, 0, 255);
    var z = map(sin(frameCount / 5), -1, 1, 0, 255);
  }
  background(x, y, z);
  noFill();
  push();
  translate(width / 2, height / 2);

  for (var i = 0; i < 200; i++) {
    var r = map(sin(frameCount / 3), -1, 1, 0.1, 2);
  }

  scale(r);

  if (mouseIsPressed) {
    for (var i = 0; i < 200; i++) {
      var o = map(sin(frameCount / 5), -1, 1, 10, 200);
    }

    for (var i = 0; i < o; i++) {
      push();

      rotate(sin(frameCount + i) * 100);

      var r = map(sin(frameCount), -1, 1, 50, 255);
      var g = map(cos(frameCount / 2), -1, 1, 50, 255);
      var b = map(sin(frameCount / 4), -1, 1, 50, 255);

      stroke(r, g, b);

      rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i);

      pop();
    }
  } else {
    for (var i = 0; i < 200; i++) {
      var o = map(sin(frameCount / 5), -1, 1, 10, 200);
    }

    for (var i = 0; i < o; i++) {
      push();

      rotate(sin(frameCount + i) * 100);

      var r = map(sin(frameCount), -1, 1, 50, 255);
      var g = map(cos(frameCount / 2), -1, 1, 50, 255);
      var b = map(sin(frameCount / 4), -1, 1, 50, 255);

      stroke(r, g, b);

      ellipse(0, 0, 700 - i * 3, 600 - i * 3, 200 - i);

      pop();
    }
  }
  pop();
  fill(255);
  textAlign(CENTER);
  textSize(windowWidth / 35, windowHeight / 35);
  textFont("Verdana");
  text("Hey, press to change the shape :)", windowWidth / 2, windowHeight / 2);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
