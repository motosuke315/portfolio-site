function setup() {
  let canvas = createCanvas(600, 300);
  canvas.parent("p5");
  background(255);
}

function draw() {
  noStroke();
  fill(0, 200, 255, 50);
  ellipse(mouseX, mouseY, random(50), random(50));
  console.log(mouseX, mouseY);
}
var colors = [
    [26, 60, 255],
    [255, 120, 90],
    [255, 200, 60],
    [60, 200, 160]
];

function setup() {
    let canvas = createCanvas(600, 300);
    canvas.parent("p5");
    background(255);
}

function draw() {
    noStroke();
    var c = colors[floor(random(colors.length))];
    fill(c[0], c[1], c[2], 60);
    ellipse(mouseX, mouseY, random(10, 60), random(10, 60));
}

// クリックでリセット
function mousePressed() {
    background(255);
}