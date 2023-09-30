import * as THREE from 'three';
import {_Math} from 'MathFile';
import {OrbitControls} from "OrbitControlFile";
import {GLTFLoader} from "GLTFFile";
import {AnimationMixer} from "AnimationMixerFile";

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
        scene.background = new THREE.Color(0xffffff);
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
        const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight,
        100, 1000);

        camera.position.set(0, 0, 300);
        this._camera = camera;
    }

    _setupBackground()
    {
    }

    _setupLight()
    {
        const color = 0xffffff;
        const intensity = 5;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(0, 0, 1);
        this._scene.add(light);
    }

    _setupControls()
    {
        new OrbitControls(this._camera, this._divContainer);
    }

    _setupModel()
    {
        new GLTFLoader().load("./Model/AnimModel.glb", (gltf) => {
            const model = gltf.scene;
            this._scene.add(model);

            this._setupAnimation(gltf);
        });
    }

    changeAnimation(animationName)
    {
        const previousAnimationAction = this._currentAnimationAction;
        this._currentAnimationAction = this._animationMap[animationName];

        if(previousAnimationAction !== this._currentAniamtionAction)
        {
            previousAnimationAction.fadeOut(0.5);
            this._currentAnimationAction.reset().fadeIn(0.5).play();
        }
    }

    _setupAnimation(gltf)
    {
        const model = gltf.scene;
        const gltfAnimations = gltf.animations;
        const mixer = new THREE.AnimationMixer(model);

        const domControls = document.querySelector("#controls");
        const animationsMap = {};

        gltfAnimations.forEach(animationClip => 
        {
            const name = animationClip.name;
            console.log(name);

            const domButton = document.createElement("div");
            domButton.classList.add("button");
            domButton.innerText = name;
            domControls.appendChild(domButton);

            domButton.addEventListener("click", () => {
                const animationName = domButton.innerHTML;
                this.changeAnimation(animationName);
            });

            const animationAction = mixer.clipAction(animationClip);
            animationsMap[name] = animationAction;
        });

        this._mixer = mixer;
        this._animationMap = animationsMap;

        this._currentAnimationAction = this._animationMap["Idle"];
        this._currentAnimationAction.play();
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
        
        if(this._mixer)
        {
            const deltaTime = time - this._previousTime;
            this._mixer.update(deltaTime);
        }
        
        this._previousTime = time;
    }
}

window.onload = function()
{
    new App();
}