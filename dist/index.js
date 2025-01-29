// import * as THREE from 'three'
// import { OrbitControls } from './jsm/controls/OrbitControls.js'

// import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
// import { RGBELoader } from './jsm/loaders/RGBELoader.js';

import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.172.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.172.0/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'https://unpkg.com/three@0.172.0/examples/jsm/loaders/RGBELoader.js';

			let camera, scene, renderer;

			init();

			function init() {

				const container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 50 );
				// camera.position.set( - 1.8, 0.6, 2.7 );
                camera.position.set( - 15, 10, 15);
				scene = new THREE.Scene();
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.toneMapping = THREE.ACESFilmicToneMapping;
				renderer.toneMappingExposure = 1;
				container.appendChild( renderer.domElement );

				new RGBELoader()
					//.setPath( 'textures/equirectangular/' )
                    .setPath( './' )
					.load( 'sky_half.hdr', function ( texture ) {

						texture.mapping = THREE.EquirectangularReflectionMapping;

						scene.background = texture;
						scene.environment = texture;

						render();

						// model

						// const loader = new GLTFLoader().setPath( './');
						const loader = new GLTFLoader();
						loader.load( 'talas.glb', async function ( gltf ) {

							const model = gltf.scene;

							// wait until the model can be added to the scene without blocking due to shader compilation

							await renderer.compileAsync( model, camera, scene );

							scene.add( model );

							render();
			
						} );

					} );



				const controls = new OrbitControls( camera, renderer.domElement );
				controls.addEventListener( 'change', render ); // use if there is no animation loop
				controls.minDistance = 10;
				controls.maxDistance = 40;
				controls.target.set( 0, 0, 0 );
				controls.update();

				window.addEventListener( 'resize', onWindowResize );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}

			//

			function render() {

				renderer.render( scene, camera );

			}

