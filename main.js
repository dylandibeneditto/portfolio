import "./css/styles.css";
import Experience from "./js/experience.js";

const experience = new Experience(document.getElementById("canvas"))

setTimeout(()=> {
        console.log(`%cWhy is it that when one man builds a wall, the next man immediately needs to know what's on the other side?\n\t- George R.R. Martin`, " font-size: .8rem; color: white; padding: .5rem;")
}, 1000)