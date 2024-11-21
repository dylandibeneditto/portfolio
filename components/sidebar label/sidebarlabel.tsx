import AboutIcon from "../icons/about";
import CodeIcon from "../icons/code";
import DesignIcon from "../icons/design";
import EmailIcon from "../icons/email";
import GithubIcon from "../icons/github";
import LeetCodeIcon from "../icons/leetcode";
import PhotographyIcon from "../icons/photography";
import ProjectsIcon from "../icons/projects";
import TwitterIcon from "../icons/twitter";
import "./sidebarlabel.css";
import Link from "next/link";

export default function SidebarLabel(props: {
  text: string;
  icon: string;
  link: string;
  external: boolean;
  selected: string;
}) {
  const renderIcon = () => {
    switch (props.icon) {
      case "about":
        return <AboutIcon />;
      case "projects":
        return <ProjectsIcon />;
      case "email":
        return <EmailIcon />;
      case "github":
        return <GithubIcon />;
      case "leetcode":
        return <LeetCodeIcon />;
      case "design":
        return <DesignIcon />;
      case "code":
        return <CodeIcon />;
      case "twitter":
        return <TwitterIcon />;
      case "photography":
        return <PhotographyIcon />;
      default:
        return <span className="material-symbols-outlined">{props.icon}</span>;
    }
  };

  return (
    <Link href={props.link} target={props.external ? "_blank" : ""}>
      <div className={"label " + (props.selected==props.text?"selected":"")}>
        <div className="icon">{renderIcon()}</div>
        <div className="title">{props.text}</div>
      </div>
    </Link>
  );
}
