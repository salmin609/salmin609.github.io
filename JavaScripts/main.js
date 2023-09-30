import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { ObjectAddManager } from './AddObject.js'

const threejsCanvas = document.querySelector('#threejs-canvas')
let width = threejsCanvas.offsetWidth
let height = threejsCanvas.offsetHeight

const scene = new THREE.Scene()

scene.background = new THREE.Color("skyblue");

const camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000)
camera.position.set(10, 10, 10)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer({
	antialias : true,
	alpha : true
})

renderer.setSize(width, height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
threejsCanvas.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(5, 5, 5)
const material = new THREE.MeshBasicMaterial({color: 0x00ffff})
const box = new THREE.Mesh(geometry, material)
scene.add(box)

update()

window.addEventListener('resize', onResize)

function update()
{
	box.rotation.z += 0.05
	box.rotation.y += 0.01
	renderer.render(scene, camera)
	window.requestAnimationFrame(update)
}

function onResize()
{
	width = threejsCanvas.offsetWidth
	height = threejsCanvas.offsetHeight

	renderer.setSize(width, height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

	camera.aspect = width / height
	camera.updateProjectionMatrix()
}