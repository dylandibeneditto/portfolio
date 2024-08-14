import SidebarLabel from "../sidebar label/sidebarlabel";
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarLabel text="hello" icon="world"></SidebarLabel>
        </div>
    )
}