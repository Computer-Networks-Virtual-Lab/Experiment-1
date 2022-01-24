const x1 = 500;
const x2 = 900;

const y1 = 250;
const y2 = 300;
const y3 = 350;
const y4 = 400;
const y5 = 450;
const y6 = 500;
const y7 = 550;
const y8 = 600;

// Amount to offset control points
var bezierWeight = 0.675;

// get elements from html
var handles = document.querySelectorAll(".handle");
var path = document.querySelectorAll(".path");
var path_w = document.querySelectorAll(".path_w");

TweenLite.set(handles[0], { x: x2, y: y1 });
TweenLite.set(handles[1], { x: x1, y: y1 });
TweenLite.set(handles[2], { x: x2, y: y2 });
TweenLite.set(handles[3], { x: x1, y: y2 });
TweenLite.set(handles[4], { x: x2, y: y3 });
TweenLite.set(handles[5], { x: x1, y: y3 });
TweenLite.set(handles[6], { x: x2, y: y4 });
TweenLite.set(handles[7], { x: x1, y: y4 });
TweenLite.set(handles[8], { x: x2, y: y5 });
TweenLite.set(handles[9], { x: x1, y: y5 });
TweenLite.set(handles[10], { x: x2, y: y6 });
TweenLite.set(handles[11], { x: x1, y: y6 });
TweenLite.set(handles[12], { x: x2, y: y7 });
TweenLite.set(handles[13], { x: x1, y: y7 });
TweenLite.set(handles[14], { x: x2, y: y8 });
TweenLite.set(handles[15], { x: x1, y: y8 });

Draggable.create(handles, {
  // bounds: container,
  onDrag: updatePath,
  liveSnap: {
    points: [
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
    ],
    radius: 20,
  },
});

updatePath();

function updatePath() {
  var x11 = gsap.getProperty(handles[0], "x");
  var y11 = gsap.getProperty(handles[0], "y");
  console.log(`handle 11: ${x11}, ${y11}`);
  var x12 = gsap.getProperty(handles[1], "x");
  var y12 = gsap.getProperty(handles[1], "y");
  console.log(`handle 12: ${x12}, ${y12}`);

  var x21 = gsap.getProperty(handles[2], "x");
  var y21 = gsap.getProperty(handles[2], "y");
  console.log(`handle 21: ${x21}, ${y21}`);
  var x22 = gsap.getProperty(handles[3], "x");
  var y22 = gsap.getProperty(handles[3], "y");
  console.log(`handle 22: ${x22}, ${y22}`);

  var x31 = gsap.getProperty(handles[4], "x");
  var y31 = gsap.getProperty(handles[4], "y");
  console.log(`handle 31: ${x31}, ${y31}`);
  var x32 = gsap.getProperty(handles[5], "x");
  var y32 = gsap.getProperty(handles[5], "y");
  console.log(`handle 32: ${x32}, ${y32}`);

  var x41 = gsap.getProperty(handles[6], "x");
  var y41 = gsap.getProperty(handles[6], "y");
  console.log(`handle 41: ${x41}, ${y41}`);
  var x42 = gsap.getProperty(handles[7], "x");
  var y42 = gsap.getProperty(handles[7], "y");
  console.log(`handle 42: ${x42}, ${y42}`);

  var x51 = gsap.getProperty(handles[8], "x");
  var y51 = gsap.getProperty(handles[8], "y");
  console.log(`handle 51: ${x51}, ${y51}`);
  var x52 = gsap.getProperty(handles[9], "x");
  var y52 = gsap.getProperty(handles[9], "y");
  console.log(`handle 52: ${x52}, ${y52}`);

  var x61 = gsap.getProperty(handles[10], "x");
  var y61 = gsap.getProperty(handles[10], "y");
  console.log(`handle 61: ${x61}, ${y61}`);
  var x62 = gsap.getProperty(handles[11], "x");
  var y62 = gsap.getProperty(handles[11], "y");
  console.log(`handle 62: ${x62}, ${y62}`);

  var x71 = gsap.getProperty(handles[12], "x");
  var y71 = gsap.getProperty(handles[12], "y");
  console.log(`handle 71: ${x71}, ${y71}`);
  var x72 = gsap.getProperty(handles[13], "x");
  var y72 = gsap.getProperty(handles[13], "y");
  console.log(`handle 72: ${x72}, ${y72}`);

  var x81 = gsap.getProperty(handles[14], "x");
  var y81 = gsap.getProperty(handles[14], "y");
  console.log(`handle 81: ${x81}, ${y81}`);
  var x82 = gsap.getProperty(handles[15], "x");
  var y82 = gsap.getProperty(handles[15], "y");
  console.log(`handle 82: ${x82}, ${y82}`);

  var dx1 = Math.abs(x12 - x11) * bezierWeight;
  var dx2 = Math.abs(x22 - x21) * bezierWeight;
  var dx3 = Math.abs(x32 - x31) * bezierWeight;
  var dx4 = Math.abs(x42 - x41) * bezierWeight;
  var dx5 = Math.abs(x52 - x51) * bezierWeight;
  var dx6 = Math.abs(x62 - x61) * bezierWeight;
  var dx7 = Math.abs(x72 - x71) * bezierWeight;
  var dx8 = Math.abs(x82 - x81) * bezierWeight;

  var _x11 = x11 - dx1;
  var _x12 = x12 + dx1;
  var _x21 = x21 - dx2;
  var _x22 = x22 + dx2;
  var _x31 = x31 - dx3;
  var _x32 = x32 + dx3;
  var _x41 = x41 - dx4;
  var _x42 = x42 + dx4;
  var _x51 = x51 - dx5;
  var _x52 = x52 + dx5;
  var _x61 = x61 - dx6;
  var _x62 = x62 + dx6;
  var _x71 = x71 - dx7;
  var _x72 = x72 + dx7;
  var _x81 = x81 - dx8;
  var _x82 = x82 + dx8;

  var data1 = `M${x11} ${y11} C ${_x11} ${y11} ${_x12} ${y12} ${x12} ${y12}`;
  var data2 = `M${x21} ${y21} C ${_x21} ${y21} ${_x22} ${y22} ${x22} ${y22}`;
  var data3 = `M${x31} ${y31} C ${_x31} ${y31} ${_x32} ${y32} ${x32} ${y32}`;
  var data4 = `M${x41} ${y41} C ${_x41} ${y41} ${_x42} ${y42} ${x42} ${y42}`;

  var data5 = `M${x51} ${y51} C ${_x51} ${y51} ${_x52} ${y52} ${x52} ${y52}`;
  var data6 = `M${x61} ${y61} C ${_x61} ${y61} ${_x62} ${y62} ${x62} ${y62}`;
  var data7 = `M${x71} ${y71} C ${_x71} ${y71} ${_x72} ${y72} ${x72} ${y72}`;
  var data8 = `M${x81} ${y81} C ${_x81} ${y81} ${_x82} ${y82} ${x82} ${y82}`;

  path_w[0].setAttribute("d", data1);
  path_w[1].setAttribute("d", data2);
  path_w[2].setAttribute("d", data3);
  path_w[3].setAttribute("d", data4);

  path[0].setAttribute("d", data1);
  path[1].setAttribute("d", data2);
  path[2].setAttribute("d", data3);
  path[3].setAttribute("d", data4);
  path[4].setAttribute("d", data5);
  path[5].setAttribute("d", data6);
  path[6].setAttribute("d", data7);
  path[7].setAttribute("d", data8);
}
