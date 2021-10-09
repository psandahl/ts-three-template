import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

let scene: Three.Scene;
let camera: Three.PerspectiveCamera;
let renderer: Three.WebGLRenderer;
let cube: Three.Mesh;
let stats: Stats;
let controls: OrbitControls;

window.onload = () => {
    console.log('Loaded');

    scene = new Three.Scene();
    camera = new Three.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1.0,
        100
    );
    camera.position.z = 2;
    renderer = new Three.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new Three.BoxGeometry();
    const material = new Three.MeshBasicMaterial({
        color: new Three.Color(0.0, 1.0, 0.0),
        wireframe: true,
    });

    cube = new Three.Mesh(geometry, material);
    scene.add(cube);

    // Add a coordinate system axes helper in the view.
    scene.add(new Three.AxesHelper(3));

    // Add a stats widget.
    stats = Stats();
    document.body.appendChild(stats.dom);

    // Add Orbit controls to move the camera.
    controls = new OrbitControls(camera, renderer.domElement);

    animate();
};

window.onresize = () => {
    console.log('Resized');

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
};

const animate = () => {
    window.requestAnimationFrame(animate);

    render();

    // Update the stats widget.
    stats.update();
};

const render = () => {
    renderer.render(scene, camera);
};
