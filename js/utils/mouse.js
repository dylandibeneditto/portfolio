import Experience from "../experience";

export default class Mouse {
    constructor() {
        this.experience = new Experience();

        this.x = 0;
        this.y = 0;

        this.canvas = { x: 0, y: 0 }

        document.addEventListener("mousemove", (e) => {
            this.x = e.clientX;
            this.y = e.clientY;
        })

        this.experience.canvas.addEventListener("mousemove", (e) => {
            console.log(e)
            this.canvas = { x: e.offsetX, y: e.offsetY }
        })
    }
}