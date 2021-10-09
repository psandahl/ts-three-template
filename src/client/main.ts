import * as Three from 'three';

let scene: Three.Scene;
let camera: Three.PerspectiveCamera;
let renderer: Three.WebGLRenderer;
let cube: Three.Mesh;

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

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    render();
};

const render = () => {
    renderer.render(scene, camera);
};
