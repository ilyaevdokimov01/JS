const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Плоскость
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

// Вертикальная плоскость
const verticalPlaneGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([-5, 5, 5, 5, 5, 5, -5, -5, 5, 5, -5, 5]);
verticalPlaneGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(vertices, 3)
);
const verticalPlaneMaterial = new THREE.MeshBasicMaterial({ color: 0x222222 });
const verticalPlane = new THREE.Mesh(verticalPlaneGeometry, verticalPlaneMaterial);
scene.add(verticalPlane);

// Куб
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.castShadow = true;
scene.add(cube);

// Пирамида
const pyramidGeometry = new THREE.BufferGeometry();
const pyramidVertices = new Float32Array([
  0, 1, 0,
  -1, -1, 1,
  1, -1, 1,

  0, 1, 0,
  1, -1, 1,
  1, -1, -1,

  0, 1, 0,
  1, -1, -1,
  -1, -1, -1,

  0, 1, 0,
  -1, -1, -1,
  -1, -1, 1,
]);
pyramidGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(pyramidVertices, 3)
);
const pyramidMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
pyramid.position.set(-2, 0.5, 0);
pyramid.castShadow = true;
scene.add(pyramid);

// Освещение
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
light.castShadow = true;
scene.add(light);

camera.position.z = 5;

const controls = {
  light: true,
  color: "#00ff00",
};

document.querySelector("#light").addEventListener("change", (e) => {
  controls.light = e.target.checked;
  light.visible = controls.light;
});

document.querySelector("#color").addEventListener("change", (e) => {
  controls.color = e.target.value;
  cube.material.color.set(controls.color);
  pyramid.material.color.set(controls.color);
});

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  pyramid.rotation.y -= 0.01;

  renderer.render(scene, camera);
}

animate();
