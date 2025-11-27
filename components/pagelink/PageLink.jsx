import Link from "next/link";
import "./PageLink.css"
import ArrowIcon from "../icons/Arrow";

export default function PageLink(props) {
    return (
        <Link href={props.link} className={props.hide ? "hidden" : ""} target={props.external ? "_blank" : ""}>
            <div className="title">{props.text}</div>
            <ArrowIcon></ArrowIcon>
        </Link>
    )
}