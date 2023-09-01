import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/1bFEnkogC-DIMOt6/scene.splinecode');

const canvas2 = document.getElementById('canvas3d-2');
const app2 = new Application(canvas2);
app2.load('https://prod.spline.design/vcESI8Dq8Ci4-6tS/scene.splinecode');