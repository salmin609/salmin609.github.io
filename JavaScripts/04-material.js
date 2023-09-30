import * as THREE from '../node_modules/three/build/three.module.js';
import {TextureLoader} from "TextureLoaderFile";
import {OrbitControls} from "OrbitControlFile";
import {VertexNormalsHelper} from "VertexNormalHelperFile";


class App{
    constructor(){
        const divContainer = document.querySelector("#webgl-container");
        this._divContainer = divContainer;

        const renderer = new THREE.WebGLRenderer({antialias: true});

        renderer.setPixelRatio(window.devicePixelRatio);
        divContainer.appendChild(renderer.domElement);
        this._renderer = renderer;

        const scene = new THREE.Scene();
        this._scene = scene;

        this._setupCamera();
        this._setupLight();
        this._setupModel();
        this._setupControls();

        window.onresize = this.resize.bind(this);
        this.resize();

        requestAnimationFrame(this.render.bind(this));
    }

    _setupCamera()
    {
        const width = this._divContainer.clientWidth;
        const height = this._divContainer.clientHeight;

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
        camera.position.y = 10;
        camera.position.z = 20;

        this._camera = camera;
        this._scene.add(camera);
    }

    _setupLight()
    {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        this._scene.add(ambientLight);

        const cameraLightColor = 0xffffff;
        const cameraLightIntensity = 1;
        const cameraLight = new THREE.DirectionalLight(cameraLightColor, cameraLightIntensity);
        cameraLight.position.set(-1, 2, 4);
        this._camera.add(cameraLight);

        const sceneLightColor = 0xffff00;
        const sceneLightIntensity = 3;
        const sceneLight = new THREE.PointLight(sceneLightColor, sceneLightIntensity, 100, 0);
        sceneLight.position.set(10, 30, 10);
        this._scene.add(sceneLight);
        //this._scene.add(light);
    }

    _setupModel()
    {
        const textureLoader = new TextureLoader();

        const mapBaseColorCylinder = textureLoader.load("../Material/Glass_Frosted/Glass_Frosted_001_basecolor.jpg");
        const mapAOCylinder = textureLoader.load("../Material/Glass_Frosted/Glass_Frosted_001_ambientOcclusion.jpg");
        const mapHeightCylinder = textureLoader.load("../Material/Glass_Frosted/Glass_Frosted_001_height.png");
        const mapNormalCylinder = textureLoader.load("../Material/Glass_Frosted/Glass_Frosted_001_normal.jpg");
        mapNormalCylinder.wrapS = THREE.RepeatWrapping;
        mapNormalCylinder.wrapT = THREE.RepeatWrapping;
        const mapRoughnessCylinder = textureLoader.load("../Material/Glass_Frosted/Glass_Frosted_001_roughness.jpg");

        const materialCylinder = new THREE.MeshPhysicalMaterial({
            map: mapBaseColorCylinder,
            normalMap: mapNormalCylinder,
            displacementMap: mapHeightCylinder,
            displacementScale: 0.2,
            displacementBias: -0.1,
            aoMap: mapAOCylinder,
            aoMapIntensity: 10,

            roughnessMap: mapRoughnessCylinder,
            metalness: 0,
            roughness: 0,
            transmission: 0.5,
            thickness: 0.1,

        });

        const cylGeometry = new THREE.CylinderGeometry(5, 5, 20, 64, 64);
        const frostedGlassCylinder = new THREE.Mesh(cylGeometry, materialCylinder);
        frostedGlassCylinder.geometry.attributes.uv2 = frostedGlassCylinder.geometry.attributes.uv;
        const cylHelper = new VertexNormalsHelper(frostedGlassCylinder, 0.1, 0xffff00);

        this._scene.add(frostedGlassCylinder);
        this._frostedGlassCylinder = frostedGlassCylinder;


        const mapBaseColorSphere = textureLoader.load("../Material/Marble_Grey/Marble_Gray_002_basecolor.jpg");
        const mapAOSpehre = textureLoader.load("../Material/Marble_Grey/Marble_Gray_002_ambientOcclusion.jpg");
        const mapHeightSphere = textureLoader.load("../Material/Marble_Grey/Marble_Gray_002_height.png");
        const mapNormalSphere = textureLoader.load("../Material/Marble_Grey/Marble_Gray_002_normal.jpg");
        const mapRoughnessSphere = textureLoader.load("../Material/Marble_Grey/Marble_Gray_002_roughness.jpg");

        const materialSphere = new THREE.MeshPhysicalMaterial({
            map: mapBaseColorSphere,
            normalMap: mapNormalSphere,
            displacementMap: mapHeightSphere,

            roughnessMap: mapRoughnessSphere,
            aoMap: mapAOSpehre,
        });

        const sphGeometry = new THREE.SphereGeometry(5, 32, 32);
        const sphMesh = new THREE.Mesh(sphGeometry, materialSphere);

        sphMesh.position.set(-15, 0, 0);

        sphMesh.geometry.attributes.uv2 = sphMesh.geometry.attributes.uv;
        
        this._scene.add(sphMesh);
        this._sphere = sphMesh;
    }

    _setupControls()
    {
        new OrbitControls(this._camera, this._divContainer);
    }

    resize()
    {
        const width = this._divContainer.clientWidth;
        const height = this._divContainer.clientHeight;

        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();

        this._renderer.setSize(width, height);
    }

    render(time)
    {
        this._renderer.render(this._scene, this._camera);
        this.update(time);
        requestAnimationFrame(this.render.bind(this));
    }

    update(time){
        time *= 0.001;
    }
}

window.onload = function()
{
    new App();
}