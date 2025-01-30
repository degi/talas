// import * as THREE from 'three'
// import { OrbitControls } from './jsm/controls/OrbitControls.js'
// import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
// import { RGBELoader } from './jsm/loaders/RGBELoader.js';
// import { CSS2DRenderer, CSS2DObject } from './jsm/renderers/CSS2DRenderer.js';

import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.172.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.172.0/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'https://unpkg.com/three@0.172.0/examples/jsm/loaders/RGBELoader.js';
import { CSS2DRenderer, CSS2DObject } from 'https://unpkg.com/three@0.172.0/examples/jsm/renderers/CSS2DRenderer.js';

let camera, scene, renderer, labelRenderer;
let labels = [{ id: "forcastree", arrow: "left", text: "FORCAS<b>TREE</b>", desc: "forcastree" },
{ id: "genriver", arrow: "left", text: "<b>Gen</b>River<b>3</b>", desc: "genriver" },
{ id: "rfallow", arrow: "right", text: "<b>R</b>Fallow", desc: "rfallow" },
{ id: "wanulcas", arrow: "left", text: "WaNuLCAS", desc: "wanulcas" }
];

init();

function init() {
	const container = document.createElement('div');
	document.body.appendChild(container);

	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
	camera.position.set(-4, 4, 10);
	scene = new THREE.Scene();

	new RGBELoader()
		.setPath('./')
		.load('sky_half.hdr', function (texture) {
			texture.mapping = THREE.EquirectangularReflectionMapping;
			scene.background = texture;
			scene.environment = texture;
			render();

			// model
			const loader = new GLTFLoader();
			loader.load('talas.glb', async function (gltf) {
				const model = gltf.scene;
				// wait until the model can be added to the scene without blocking due to shader compilation
				await renderer.compileAsync(model, camera, scene);
				model.translateY(-1);
				scene.add(model);
				for (let i = 0; i < labels.length; i++) {
					addLabel(model, labels[i])
				}
				render();
			});

		});

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1;
	document.body.appendChild(renderer.domElement);

	labelRenderer = new CSS2DRenderer();
	labelRenderer.setSize(window.innerWidth, window.innerHeight);
	labelRenderer.domElement.style.position = 'absolute';
	labelRenderer.domElement.style.top = '0px';
	document.body.appendChild(labelRenderer.domElement);

	// const controls = new OrbitControls( camera, renderer.domElement );
	const controls = new OrbitControls(camera, labelRenderer.domElement);
	controls.addEventListener('change', render); // use if there is no animation loop
	controls.minDistance = 8;
	controls.maxDistance = 20;
	controls.target.set(0, 0, 0);
	controls.update();

	window.addEventListener('resize', onWindowResize);
	document.body.addEventListener("click", function () { hideDesc(); });
	document.getElementById("desc").addEventListener("click", function () { clickCount = 0 });
}

function addLabel(model, label) {
	const object = model.getObjectByName(label.id);
	const earthDiv = document.createElement('div');
	earthDiv.className = 'box_label box_label_' + label.arrow;
	earthDiv.innerHTML = label.text;
	earthDiv.addEventListener("pointerdown", function () { showDesc(label.desc); });

	const earthLabel = new CSS2DObject(earthDiv);
	// earthLabel.position.set(position.x, position.y, position.z);
	var x = 0;
	if (label.arrow == "right") {
		x = 1;
	}
	earthLabel.center.set(x, 1);
	object.add(earthLabel);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	labelRenderer.setSize(window.innerWidth, window.innerHeight);
	render();
}

function render() {
	renderer.render(scene, camera);
	labelRenderer.render(scene, camera);
}

function showDesc(desc) {
	var x = document.getElementById("desc");
	x.innerHTML = desc;
	x.style.visibility = "visible";
	x.style.opacity = 0.9;
	clickCount = 0;
}

let clickCount = 0;

function hideDesc() {
	var x = document.getElementById("desc");
	if (clickCount == 0 & x.style.visibility != "hidden" ) {
		clickCount++;
		return
	}
	x.style.visibility = "hidden";
	x.style.opacity = 0;
	clickCount = 0;
}

