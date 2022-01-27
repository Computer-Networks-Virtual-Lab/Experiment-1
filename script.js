const x1 = window.innerWidth / 2 - 170;
const x2 = window.innerWidth / 2 + 230;

const y1 = 50;
const y2 = 100;
const y3 = 150;
const y4 = 200;
const y5 = 250;
const y6 = 300;
const y7 = 350;
const y8 = 400;

const i_y1 = 50;
const i_y2 = 400;

const i_x1 = 20;
const i_x2 = 40;
const i_x3 = 60;
const i_x4 = 80;
const i_x5 = window.innerWidth - 80;
const i_x6 = window.innerWidth - 60;
const i_x7 = window.innerWidth - 40;
const i_x8 = window.innerWidth - 20;

// Amount to offset control points
var bezierWeight = 0.675;

// get elements from html
var handles = document.querySelectorAll(".handle");
var path = document.querySelectorAll(".path");
var path_w = document.querySelectorAll(".path_w");
var resetBtn = document.querySelector(".resetBtn");
var container = document.getElementById("main_container");

const initialPortCoordinates = [
  { x: i_x1, y: i_y1 },
  { x: i_x1, y: i_y2 },
  { x: i_x2, y: i_y1 },
  { x: i_x2, y: i_y2 },
  { x: i_x3, y: i_y1 },
  { x: i_x3, y: i_y2 },
  { x: i_x4, y: i_y1 },
  { x: i_x4, y: i_y2 },
  { x: i_x5, y: i_y1 },
  { x: i_x5, y: i_y2 },
  { x: i_x6, y: i_y1 },
  { x: i_x6, y: i_y2 },
  { x: i_x7, y: i_y1 },
  { x: i_x7, y: i_y2 },
  { x: i_x8, y: i_y1 },
  { x: i_x8, y: i_y2 },
];

const portCoordinates = [
  { x: x2, y: y1 },
  { x: x1, y: y1 },
  { x: x2, y: y2 },
  { x: x1, y: y2 },
  { x: x2, y: y3 },
  { x: x1, y: y3 },
  { x: x2, y: y4 },
  { x: x1, y: y4 },
  { x: x2, y: y5 },
  { x: x1, y: y5 },
  { x: x2, y: y6 },
  { x: x1, y: y6 },
  { x: x2, y: y7 },
  { x: x1, y: y7 },
  { x: x2, y: y8 },
  { x: x1, y: y8 },
];

for (let i = 0; i < 16; i++) {
  TweenLite.set(handles[i], initialPortCoordinates[i]);
}

Draggable.create(handles, {
  bounds: container,
  onDrag: updatePath,
  liveSnap: {
    points: portCoordinates,
    radius: 20,
  },
});

function updatePath() {
  for (let i = 0, j = 0; i < 16, j < 8; i = i + 2, j++) {
    var _x1 = gsap.getProperty(handles[i], "x");
    var _y1 = gsap.getProperty(handles[i], "y");
    console.log(`handle ${j + 1}1: ${_x1}, ${_y1}`);

    var _x2 = gsap.getProperty(handles[i + 1], "x");
    var _y2 = gsap.getProperty(handles[i + 1], "y");
    console.log(`handle ${j + 1}2: ${_x2}, ${_y2}`);

    var dx = Math.abs(_x2 - _x1) * bezierWeight;
    var _dx1 = _x1 - dx;
    var _dx2 = _x2 + dx;
    var data = `M${_x1} ${_y1} C ${_dx1} ${_y1} ${_dx2} ${_y2} ${_x2} ${_y2}`;

    if (j < 4) path_w[j].setAttribute("d", data);
    path[j].setAttribute("d", data);
  }
}

function onReset() {
  console.log("ON RESET");
  for (let i = 0, j = 0; i < 16, j < 8; i = i + 2, j++) {
    var x1 = initialPortCoordinates[i].x;
    var y1 = initialPortCoordinates[i].y;
    var x2 = initialPortCoordinates[i + 1].x;
    var y2 = initialPortCoordinates[i + 1].y;
    var dx = Math.abs(x2 - x1) * bezierWeight;
    var _dx1 = x1 - dx;
    var _dx2 = x2 + dx;
    var data = `M${x1} ${y1} C ${_dx1} ${y1} ${_dx2} ${y2} ${x2} ${y2}`;
    if (j < 4) path_w[j].setAttribute("d", data);
    path[j].setAttribute("d", data);
  }
  for (let i = 0; i < 16; i++) {
    TweenLite.set(handles[i], initialPortCoordinates[i]);
  }
}

updatePath();
resetBtn.addEventListener("click", onReset);
