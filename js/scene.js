import * as THREE from "three"
import { TextGeometry } from "three/addons/geometries/TextGeometry.js"
import Experience from "./experience.js"

export default class Scene {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        const light = new THREE.PointLight(new THREE.Color(0xffffff), 1, 100, .1)
        light.position.set(2,2,2)
        this.cube = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshLambertMaterial({color: 0xffffff}))

        this.scene.add(light)
        this.scene.add(this.cube)
    }

    update() {
        this.cube.rotation.y = ((this.experience.mouse.x-(window.innerWidth/2))/window.innerWidth)/2;
        this.cube.rotation.x = ((this.experience.mouse.canvas.y-(this.experience.sizes.height/2))/this.experience.sizes.height)/2;
    }
}