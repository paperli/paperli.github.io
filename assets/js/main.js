//= require turbolinksj

// Three.js
var container, stats, controls;
var camera, scene, renderer;
var mouse = new THREE.Vector2( 0, 0 );
var cameraOrbitAngle = 90;
const BACKGROUND_COLOR = 0x2A0F10;
const FOG_NEAR = 6;
const FOG_FAR = 16;
const FOG_COLOR = BACKGROUND_COLOR;
const CAMERA_ORBIT_RADIUS = 7.8;
const CAMERA_TRAVEL_SPEED = 0.1; // 1 degree per update
const CAMERA_LOOK_AT = new THREE.Vector3(-1.187, 2.188, -1);
const CAMERA_TRAVEL_RANGE = 10; // in degree

function init() {
	container = document.createElement('div');
	var hero = document.getElementById('hero');
	hero.appendChild(container);

	camera = new THREE.PerspectiveCamera( 45, hero.offsetWidth / hero.offsetHeight, 0.25, 20);
	camera.position.set(0, 4.255, CAMERA_ORBIT_RADIUS);
	//camera.rotation.set(-0.259, 0.146, 0.039);
	camera.lookAt(CAMERA_LOOK_AT);

	scene = new THREE.Scene();
	scene.background = new THREE.Color(BACKGROUND_COLOR);
	//scene.fog = new THREE.Fog(FOG_COLOR, FOG_NEAR, FOG_FAR);
	//scene.fog = new THREE.FogExp2(FOG_COLOR, 0.08);

	var loader = new THREE.GLTFLoader().setPath("/assets/models/vr/");
	loader.load('vr_playground.gltf', function(gltf) {
		// load successful
		var light_count = 0;
		gltf.scene.traverse(function(child) {
			if (child.isLight) {
				// reduce lights' intensity
				//child.visible = false;
				child.intensity = 1;
				light_count++;
				if (light_count == 2) {
					// oly the 2nd light casts shadow
					child.castShadow = true;
				}
				
			} else if (child.isMesh) {
				//console.log("current node: " + child.name);
				// Only stage receives shadow but don't cast shadow
				// TODO: Only headset casts shadow? To reduce performance impact
				child.receiveShadow = (child.name == "Stage") ? true : false;
				child.castShadow = (child.name == "Stage") ? false : true;
			}
		});
		scene.add(gltf.scene);
	});

	renderer = new THREE.WebGLRenderer( {antialias: true} );
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(hero.offsetWidth, hero.offsetHeight);
	renderer.gammaOutput = true;
	renderer.shadowMapEnabled = true;
	renderer.shadowMapType = THREE.PCFSoftShadowMap;
	container.appendChild(renderer.domElement);

	// Orbit controls
	/*controls = new OrbitControls( camera, renderer.domElement );
	controls.target.set( 0, - 0.2, - 0.2 );
	controls.update();*/

	// Disable window resizing to avoid weird stretching of canvas
	// TOFIX: handle window resizing
	window.addEventListener('resize', onWindowResize, false);
	window.addEventListener('orientationchange', onWindowResize, false);
	
	// For getting camera's transform
	//document.body.addEventListener('mouseup', onBodyClick, true);

	// Find camera looking at point
	/*var raycaster = new THREE.Raycaster();
	var cameraDirection = new THREE.Vector3();
	camera.getWorldDirection(cameraDirection);
	raycaster.set(camera.position, cameraDirection);
	
	var planeGeo = new THREE.PlaneGeometry( 50, 50, 2, 2 );
	var planeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
	var plane = new THREE.Mesh( planeGeo, planeMaterial);
	plane.rotateX(-Math.PI / 2);
	scene.add(plane);

	var intersects = raycaster.intersectObject(plane);
	for (var i = 0; i < intersects.length; i++) {
		console.log(intersects[i].point);
	}*/

	window.addEventListener('mousemove', onMouseMove, false);
	container.addEventListener('touchmove', onSingleTouchMove, false);
}

function onMouseMove(event) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function onTouchMove(event) {
	if (event.touches.length != 2) {
		return;
	}

	event.preventDefault();
	const touchCenter = new THREE.Vector2( (event.touches[0].clientX + event.touches[1].clientX) / 2, (event.touches[0].clientY + event.touches[1].clientY) / 2 );
	mouse.x = (touchCenter.x / window.innerWidth) * 2 - 1;
	mouse.y = - (touchCenter.y / window.innerHeight) * 2 + 1;

}

function onSingleTouchMove(event) {
	if (event.touches.length > 1) {
		return;
	}

	event.preventDefault();
	mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
	mouse.y = - (event.touches[0].clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
	var hero = document.getElementById('hero');
	// Below code will cause distortion on canvas
	camera.aspect = hero.offsetWidth / hero.offsetHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(hero.offsetWidth, hero.offsetHeight);
	renderer.render(scene, camera);
}

function onBodyClick() {
	console.log("camera pos: " + camera.position.x + ", " + camera.position.y + ", " + camera.position.z);
	console.log("camera rot: " + camera.rotation.x + ", " + camera.rotation.y + ", " + camera.rotation.z);
	console.log("camera scale: " + camera.scale.x + ", " + camera.scale.y + ", " + camera.scale.z);
}

function animate() {
	requestAnimationFrame(animate);

	// orbit the camera
	const shallAngle = 90 + step(mouse.x, [-1, 1], [-CAMERA_TRAVEL_RANGE, CAMERA_TRAVEL_RANGE]);
	cameraOrbitAngle += (shallAngle - cameraOrbitAngle) * 0.1;
	camera.position.x = CAMERA_ORBIT_RADIUS * Math.cos(cameraOrbitAngle * Math.PI / 180);
	camera.position.z = CAMERA_ORBIT_RADIUS * Math.sin(cameraOrbitAngle* Math.PI / 180);
	camera.lookAt(CAMERA_LOOK_AT);

	renderer.render(scene, camera);
}

function step(value, input_range, output_range) {
	// input_range: [min, max] input
	// output_range: [min, max] output
	const o = output_range[0] + (value - input_range[0]) * (output_range[1] - output_range[0]) / (input_range[1] - input_range[0]);
	return Math.min( Math.max(o ,output_range[0]), output_range[1])
}

// tags
var selectedTags = [];

var ready = function() {
	// enable bricklayer
	console.log("ready");
	let params = new URLSearchParams(window.location.search);
	var tagsStr = params.get("tags");
	if (tagsStr != null && tagsStr != "" && tagsStr != " ") {
		tagsStr = decodeURIComponent(tagsStr);
		let tags = tagsStr.split(",");
		selectedTags = tags;
		var query = ".card:not(";
		console.log("tags lenth: " + tags.length + "::" + tagsStr);
		tags.forEach(function(tag) {
			var slug = slugify(tag);
			console.log("slug: " + slug);
			query += `.${slug}`;
			document.querySelector(`.btn-tag.${slug}`).classList.add("active");
		});
		query += ")";
		console.log("query: " + query);
		let elms = document.querySelectorAll(query);
		elms.forEach(function(elm) {
			elm.style.display = "none";
		});
	}
	
	var bricklayer = new Bricklayer(document.querySelector('.bricklayer'));

	// header 3D effect, three.js
	init();
	animate();
}

//$(document).ready(ready);
// for turbolinks
$(document).on('turbolinks:load', ready);

//document.addEventListener('turbolinks:load', ready());

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

function tagClicked(button, tag) {
  toggleTag(tag);
  button.classList.toggle("active");
  //window.location.search = `tags=${encodeURIComponent(selectedTags.join(","))}`;
  if (selectedTags.length > 0) {
	Turbolinks.visit(`/?tags=${encodeURIComponent(selectedTags.join(","))}`);
  } else {
	Turbolinks.visit("/");
  }
  
  return false;
}

function toggleTag(tag) {
  const index = selectedTags.indexOf(tag);
  if (index < 0) {
	selectedTags.push(tag);
  } else {
	selectedTags.splice(index, 1);
  }
}

function goViewer(images) {
	const viewer = new Viewer(document.getElementById(images), {
		toolbar:false,
		transition:true,
		rotatable:false,
		hidden() {
			this.viewer.destroy();
		}
	});

	viewer.show()
	
}
