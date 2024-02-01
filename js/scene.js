import * as THREE from "three"
import Experience from "./experience.js"

export default class Scene {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        const light = new THREE.PointLight(new THREE.Color(0xffffff), 1, 100, .1)
        light.position.set(2,2,2)
        this.cube = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshLambertMaterial({color: 0x00ff00}))

        this.scene.add(light)
        this.scene.add(this.cube)
    }

    update() {
        this.cube.rotation.y = (this.experience.mouse.x-(window.innerWidth/2))/window.innerWidth;
        this.cube.rotation.x = (this.experience.mouse.canvas.y-(this.experience.canvas.innerHeight/2))/window.innerHeight;
    }
}