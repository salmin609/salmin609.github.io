import * as THREE from '../node_modules/three/build/three.module.js';
import {_Math} from "MathFile";
import {OrbitControls} from "OrbitControlFile";
import {RGBELoader} from "HDRLoaderFile";

class App{
    constructor(){
        const divContainer = document.querySelector("#webgl-container");
        this._divContainer = divContainer;

        const renderer = new THREE.WebGLRenderer({antialias: true});

        renderer.setPixelRatio(window.devicePixelRatio);
        divContainer.appendChild(renderer.domElement);
        this._renderer = renderer;

        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;

        const scene = new THREE.Scene();
        this._scene = scene;

        this._setupCamera();
        this._setupLight();
        this._setupModel();
        this._setupControls();
        this._setupBackground();

        window.onresize = this.resize.bind(this);
        this.resize();

        requestAnimationFrame(this.render.bind(this));
    }

    _setupCamera()
    {
        const width = this._divContainer.clientWidth;
        const height = this._divContainer.clientHeight;

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
        camera.position.set(7,7,0);
        camera.lookAt(0,0,0);


        this._camera = camera;
    }

    _setupBackground()
    {
        new RGBELoader().load("./Image/empty_workshop_8k.hdr", (texture)=>{
            texture.mapping = THREE.EquirectangularReflectionMapping;
            this._scene.background = texture;
            this._scene.environment = texture;
        });
    }

    _setupLight()
    {
        
    }

    _setupControls()
    {
        new OrbitControls(this._camera, this._divContainer);
    }

    _setupModel()
    {
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 256, 64, 2, 3);

        const material = new THREE.MeshStandardMaterial({color: 0xffffff});

        const torus = new THREE.Mesh(geometry, material);
        this._scene.add(torus);
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
        
        const smallSpherePivot = this._scene.getObjectByName("smallSpherePivot");
        if(smallSpherePivot)
        {
            smallSpherePivot.rotation.y = _Math.degToRad(time * 50);

            if(this._light.target)
            {
                const smallSphere = smallSpherePivot.children[0];
                smallSphere.getWorldPosition(this._light.target.position);

                
            }
        }
    }
}

window.onload = function()
{
    new App();
}