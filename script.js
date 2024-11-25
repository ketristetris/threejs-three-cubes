import * as THREE from 'three';

//creating scene
var scene = new THREE.Scene();
//main variables
var width = window.innerWidth,
    height = window.innerHeight;
//cam variables
var fov = 75,
    aspect = width/height,
    near = 0.1,
    far = 1000;

// initializing cam
var camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 2.5;

//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

//figures

const geometry = new THREE.BoxGeometry(1, 1, 1); 
const materialFirst = new THREE.MeshStandardMaterial( {color: 0xB67CCF} );
const materialSecond = new THREE.MeshStandardMaterial( {color: 0xBDF9F7});
const materialThird = new THREE.MeshStandardMaterial( { color: 0x93C4FF});
const cubeFirst = new THREE.Mesh(geometry, materialFirst); 
cubeFirst.position.x += 2;
const cubeSecond = new THREE.Mesh(geometry, materialSecond);
const cubeThird = new THREE.Mesh(geometry, materialThird);
cubeThird.position.x -= 2;
scene.add(cubeFirst, cubeSecond, cubeThird);

//some light

const directionalLight = new THREE.DirectionalLight( 0xFFE5CB, 0.5 );
scene.add( directionalLight );
var ambientLight = new THREE.AmbientLight(0xAAB9D6, 0.7);
scene.add(ambientLight);
//fog

scene.fog = new THREE.Fog(0xD1D0D6, 1, 3);

//background

scene.background = new THREE.Color(0xD1D0D6);

function render() {
    requestAnimationFrame( render );
    cubeFirst.rotation.x += 0.006;
    cubeFirst.rotation.y += 0.006; 
    cubeSecond.rotation.x += 0.006;
    cubeSecond.rotation.y += 0.006;
    cubeThird.rotation.x += 0.006;
    cubeThird.rotation.y += 0.006;
    renderer.render( scene, camera);
}
render();