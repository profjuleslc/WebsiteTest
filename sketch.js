function setup() {
  // put setup code here
  createCanvas(300, 300);
  link = text("Click Here to Send", 120, 120);
}

function draw() {
  // put drawing code here
  background(255);
  ellipse(20, 20, mouseX, mouseY);
  if(keyPressed == SPACE) {
  window.open("https://profjuleslc.github.io/WebsiteTest/nextTest/index.html");
  }
}
