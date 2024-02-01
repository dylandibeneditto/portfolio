import * as THREE from "three"

import Sizes from "./utils/sizes.js";
import Time from "./utils/time.js"

import Camera from "./camera.js";
import Renderer from "./renderer.js";
import Scene from "./scene.js";

export default class Experience {
    static instance;
    constructor(canvas) {
        if (Experience.instance) {
            return Experience.instance
        }
        Experience.instance = this;

        this.canvas = document.getElementById("logo");
        this.scene = new THREE.Scene();
        this.time = new Time()
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer(this.canvas);
        this.world = new Scene();

        this.time.on("update", ()=> {
            this.update()
        })

        this.sizes.on("resize", ()=> {
            this.resize();
        })
    }
    
    resize() {
        this.renderer.resize();
        this.camera.resize();
    }

    update() {
        this.camera.update();
        this.renderer.update();
    }

}