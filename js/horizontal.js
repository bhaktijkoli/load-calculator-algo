// Inputs
var container = {
  x: 800,
  y: 800,
  z: 1000,
}
var tires = [
  {
    x: 150,
    y: 30,
    z: 150,
  }
]
// Outputs
var tiresCount = [
  0,
]

// ALgo
var current = {
  x: 0,
  y: 0,
  z: 0,
}

while(current.x+tires[0].x < container.x) {
  current.x += tires[0].x;
  tiresCount[0]++;
}

console.log("Total tires in fist layer", tiresCount[0]);
