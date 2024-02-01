import * as THREE from "three"

import Experience from "./experience.js";

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createPerspectiveCamera();
        this.perspectiveCamera.position.z = 3.5;
        this.perspectiveCamera.position.x = .29
    }

    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            .1,
            1000
        )

        this.scene.add(this.perspectiveCamera)
    }

    createOrthographicCamera() {
        this.frustrum = 5
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum / 2,
            -this.sizes.frustrum / 2,
            -100,
            100
        )

        this.scene.add(this.orthographicCamera)
    }

    resize() {
        if(this.perspectiveCamera) {
            this.perspectiveCamera.aspect = this.sizes.aspect;
            this.perspectiveCamera.updateProjectionMatrix()
        }

        if(this.orthographicCamera) {
            this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2
            this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2
            this.orthographicCamera.top = this.sizes.frustrum / 2
            this.orthographicCamera.bottom = -this.sizes.frustrum / 2
            this.orthographicCamera.updateProjectionMatrix();
        }
    }

    update() {

    }
}