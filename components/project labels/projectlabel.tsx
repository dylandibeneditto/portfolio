import "./projectlabel.css"
import Link from "next/link";

export default function ProjectLabel(props: {
  title: string;
  tag: string;
  link: string;
}) {
  return (
    <Link href={props.link} className="hidden">
      <div className="project-label">
        <div className="project-label-title">{props.title}</div>
        <div className="project-label-tag">{props.tag}</div>
      </div>
    </Link>
  );
}
