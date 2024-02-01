import Experience from "../experience";

export default class Mouse {
    constructor() {
        this.experience = new Experience();

        this.x = window.innerWidth/2;
        this.y = window.innerHeight/2;

        this.canvas = { x: this.experience.sizes.width/2, y: this.experience.sizes.height/2 }

        document.addEventListener("mousemove", (e) => {
            this.x = e.clientX;
            this.y = e.clientY;
        })

        this.experience.canvas.addEventListener("mousemove", (e) => {
            this.canvas = { x: e.offsetX, y: e.offsetY }
        })
    }
}