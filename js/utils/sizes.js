import { EventEmitter } from "events";

export default class Sizes extends EventEmitter {
    constructor() {
        super()
        this.width = window.innerWidth;
        this.height = Math.min(window.innerHeight/3, window.innerWidth/3);
        this.aspect = this.width/this.height;
        this.pixelRation = Math.min(window.devicePixelRation, 2)

        window.addEventListener("resize", ()=> {
            this.width = window.innerWidth;
            this.height =  Math.min(window.innerHeight/3, window.innerWidth/3);
            this.aspect = this.width/this.height;
            this.pixelRation = Math.min(window.devicePixelRation, 2)
            this.emit("resize")
        })
    }
}