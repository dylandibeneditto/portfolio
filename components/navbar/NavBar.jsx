import "./NavBar.css";

export default function NavBar(props) {
    return (
        <div className="bar">
            <div className={props.select == "Home" ? "selected" : ""}>Home</div>
            <div className={props.select == "About" ? "selected" : ""}>About</div>
            <div className={props.select == "Projects" ? "selected" : ""}>Projects</div>
            <div className={props.select == "Work" ? "selected" : ""}>Work</div>
            <div className={props.select == "Skills" ? "selected" : ""}>Skills</div>
            <div className={props.select == "Photos" ? "selected" : ""}>Photos</div>
            <div className={props.select == "Contact" ? "selected" : ""}>Contact</div>
        </div>
    )
}