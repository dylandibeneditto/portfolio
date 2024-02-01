import * as THREE from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import Experience from "./experience.js"

export default class Scene {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        const light = new THREE.PointLight(new THREE.Color(0xffffff), 1, 100, .1)
        light.position.set(2,2,2)

        this.loader = new GLTFLoader();

        this.loader.load("/untitled.glb", function (gltf) {
            this.cube = gltf.scene;
            this.scene.add(gltf.scene);
        }.bind(this), undefined, function (error) {
            console.log(this)
            console.log(error)
        }.bind(this))

        this.scene.add(light)

    }

    update() {
        if(this.cube) {
            this.cube.rotation.z = ((this.experience.mouse.x-(window.innerWidth/2))/window.innerWidth)/-2;
            this.cube.rotation.z+=.01;
            this.cube.rotation.x = (Math.PI+((this.experience.mouse.canvas.y-(this.experience.sizes.height/2))/this.experience.sizes.height))/2;
        }
    }
}