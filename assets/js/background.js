const bgColour = '#e0fbfc';
const sphereColour = '#55dde0';

const diameterRatio = 0.005;
const spheres = 20;
const zoom = 3 ** 0.5 / 2;

// --------------------------

let spheresGap;
let spheresNumX;
let spheresNumY;
let offsetX;
let offsetY;
let offsetZ;
let diameter;
let vHeight;
let theta;

let t = 0;

const SimplexNoise = require('simplex-noise');
const simplex = new SimplexNoise();
let p5;

export function main(_p5) {
  p5 = _p5;

  function changeSpheres(width, height) {
    vHeight = height * zoom;
    if (width >= vHeight) {
      spheresNumX = spheres;
      spheresGap = Math.ceil(width / spheresNumX);
      spheresNumY = Math.ceil(vHeight / spheresGap);
      diameter = width * diameterRatio;
    } else {
      spheresNumY = spheres;
      spheresGap = Math.ceil(vHeight / spheresNumY);
      spheresNumX = Math.ceil(width / spheresGap);
      diameter = vHeight * diameterRatio;
    }
    offsetX = (-width + (width % spheresGap)) / 2 - spheresGap;
    offsetY = -height / 2 + (vHeight % spheresGap) + diameter - spheresGap;
    offsetZ = (height / 2) * Math.tan(p5.radians(15));
  }

  p5.setup = () => {
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    canvas.parent('p5-canvas');

    changeSpheres(p5.width, p5.height);

    p5.ambientLight(255, 255, 255);
    p5.specularMaterial(sphereColour);
    p5.rotateX(p5.radians(15));
    p5.noStroke();
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    changeSpheres(p5.width, p5.height);
  };

  p5.draw = () => {
    p5.background(bgColour);

    p5.translate(offsetX, offsetY, offsetZ);
    for (let y = 0; y < spheresNumY; y += 1) {
      p5.push();
      for (let x = 0; x <= spheresNumX; x += 1) {
        p5.push();
        theta = Math.PI * 2 * (x / spheresNumX);
        p5.translate(
          (((t % spheresNumX) + x) % (spheresNumX + 1)) * spheresGap,
          0,
          simplex.noise4D(
            0.2 * Math.sin(theta),
            0.2 * Math.cos(theta),
            0.05 * y,
            t
          ) * 75
        );
        p5.sphere(diameter, 6, 4);
        p5.pop();
      }
      p5.pop();
      p5.translate(0, spheresGap, 0);
    }

    if (p5.frameRate()) {
      t += 0.25 / p5.frameRate();
    }
  };
}
