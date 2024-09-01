import SidebarLabel from "../sidebar label/sidebarlabel";
import DittoIcon from "../icons/ditto";
import "./sidebar.css";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link href="/">
        <div className="ditto-icon">
          <DittoIcon></DittoIcon>
        </div>
      </Link>
      <div className="main-sidebar sidebar-section">
        <SidebarLabel
          text="About Me"
          icon="about"
          link="/about"
          external={false}
        ></SidebarLabel>
        <SidebarLabel
          text="Creations"
          icon="projects"
          link="/creations"
          external={false}
        ></SidebarLabel>
      </div>
      <div className="work-sidebar sidebar-section">
        <div className="title">WORK</div>
        <SidebarLabel
          text="Example"
          icon="projects"
          link="/creations"
          external={false}
        ></SidebarLabel>
      </div>
      <div className="socials-sidebar sidebar-section">
        <div className="title">SOCIALS</div>
        <SidebarLabel
          text="Github"
          icon="about"
          link="https://github.com/dylandibeneditto"
          external={true}
        ></SidebarLabel>
      </div>
    </div>
  );
}
