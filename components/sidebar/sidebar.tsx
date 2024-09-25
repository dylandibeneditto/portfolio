import SidebarLabel from "../sidebar label/sidebarlabel";
import DittoIcon from "../icons/ditto";
import "./sidebar.css";
import Link from "next/link";

export default function Sidebar(props: {selected: string}) {
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
          selected={props.selected}
        ></SidebarLabel>
      </div>
      <div className="projects-sidebar sidebar-section">
        <div className="title">PROJECTS</div>
        <SidebarLabel
          text="Design"
          icon="design"
          link="/design"
          external={false}
          selected={props.selected}
        ></SidebarLabel>
        <SidebarLabel
          text="Code"
          icon="code"
          link="/code"
          external={false}
          selected={props.selected}
        ></SidebarLabel>
      </div>
      <div className="showcases-sidebar sidebar-section">
        <div className="title">SHOWCASES</div>
        <SidebarLabel
          text="Example"
          icon="projects"
          link="/showcases/hello"
          external={false}
          selected={props.selected}
        ></SidebarLabel>
      </div>
      <div className="socials-sidebar sidebar-section">
        <div className="title">SOCIALS</div>
        <SidebarLabel
          text="Email"
          icon="email"
          link="mailto:dibenedittod@gmail.com"
          external={true}
          selected={props.selected}
        ></SidebarLabel>
        <SidebarLabel
          text="Github"
          icon="github"
          link="https://github.com/dylandibeneditto"
          external={true}
          selected={props.selected}
        ></SidebarLabel>
        <SidebarLabel
          text="LeetCode"
          icon="leetcode"
          link="https://leetcode.com/u/dylandibeneditto/"
          external={true}
          selected={props.selected}
        ></SidebarLabel>
        <SidebarLabel
          text="Twitter"
          icon="twitter"
          link="https://x.com/dylan_ditto"
          external={true}
          selected={props.selected}
        ></SidebarLabel>
      </div>
    </div>
  );
}
