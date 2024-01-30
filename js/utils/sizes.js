export default class Sizes {
    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width/this.height;
        this.pixelRation = Math.min(window.devicePixelRation, 2)

        window.addEventListener("resize", ()=> {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.aspect = this.width/this.height;
            this.pixelRation = Math.min(window.devicePixelRation, 2)
        })
    }
}