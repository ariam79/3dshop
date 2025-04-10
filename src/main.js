import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
let renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)
//renderer.clear(true,true)

camera.position.z = 10;
const go = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({color:'#65858f'});
const dodec = new THREE.Mesh(go,material);
scene.add(dodec);
let light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(0,5,0)
light.target.position.set(0,0,0)
scene.add(light)
scene.add(light.target)
let dlighthelper = new THREE.DirectionalLightHelper(light);
scene.add(dlighthelper)
renderer.setAnimationLoop(()=>{
  dodec.rotateY(0.03)
  renderer.render(scene,camera)
})