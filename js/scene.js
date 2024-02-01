import * as THREE from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import Experience from "./experience1.js"

export default class Scene {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        
        const ambient = new THREE.PointLight(new THREE.Color(0xffffff), 1000, 1000, 0.1)
        ambient.position.set(10,10,10)
        
        const ambient2 = new THREE.PointLight(new THREE.Color(0xffffff), 1000, 1000, 0.1)
        ambient2.position.set(-10,-10,10)

        const light = new THREE.PointLight(new THREE.Color(0xffffff), 100, 1000, .1)
        light.position.set(5,4,-10)

        const light2 = new THREE.PointLight(new THREE.Color(0xffffff), 100, 1000, .1)
        light2.position.set(0,-1,0)

        const light3 = new THREE.PointLight(new THREE.Color(0xffffff), 100, 1000, 1);
        light3.position.set(1,2,0);

        this.scene.add(ambient)
        this.scene.add(ambient2)
        this.scene.add(light)
        this.scene.add(light2)
        this.scene.add(light3)

        this.loader = new GLTFLoader();

        this.loader.load("/untitled.glb", function (gltf) {
            this.cube = gltf.scene;
            console.log(this.cube);
            this.scene.add(gltf.scene);
        }.bind(this), undefined, function (error) {
            console.log(this)
            console.log(error)
        }.bind(this))


    }

    update() {
        if(this.cube) {
            this.cube.rotation.z = ((this.experience.mouse.x-(window.innerWidth/2))/window.innerWidth)/-20;
            this.cube.rotation.x = Math.PI/2+(((this.experience.mouse.y-(window.innerHeight/2))/window.innerHeight)/8)
        }
    }

    resize() {

    }
}