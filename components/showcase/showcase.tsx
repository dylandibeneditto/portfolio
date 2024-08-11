import Link from "next/link";
import Image from "next/image";
import "./showcase.css";

export default function Showcase(props: {image: string, title: string, url: string}) {
    return (
        <Link className="showcase" href={`/showcases/${props.url}`}>
            <Image className="showcase-image" src={props.image} width={1024} height={1024} alt={props.title}></Image>
        </Link>
    )
}