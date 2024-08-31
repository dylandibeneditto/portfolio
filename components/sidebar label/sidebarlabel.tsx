import AboutIcon from "../icons/about";
import ProjectsIcon from "../icons/projects";
import "./sidebarlabel.css";
import Link from "next/link";

export default function SidebarLabel(props: {text: string, icon: string, link: string, external: boolean}) {
    return (
        <Link href={props.link} target={props.external ? "_blank" : ""}>
        <div className="label">
            <div className="icon">
                {props.icon == "about" ? (
                    <AboutIcon></AboutIcon>
                 ) : props.icon == "projects" ? (
                    <ProjectsIcon></ProjectsIcon>
                 ) : (
                    <span className="material-symbols-outlined">{props.icon}</span>
                )}
            </div>
            <div className="title">{props.text}</div>
        </div>
        </Link>
    )
}