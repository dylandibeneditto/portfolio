import AboutMe from "@/components/about me/aboutme";
import Sidebar from "@/components/sidebar/sidebar";
import "./page.css";
import Showcase from "@/components/showcase/showcase";

export default function Home() {
  return (
    <div className="layout">
      <Sidebar></Sidebar>
      <div className="content">
        <AboutMe></AboutMe>
        <div className="work">
          <div>
            <Showcase image="next.svg" title="hi" url="hello"></Showcase>
          </div>
          <div>hello</div>
          <div>hello</div>
        </div>
      </div>
    </div>
  );
}
