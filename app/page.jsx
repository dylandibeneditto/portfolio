"use client";
import "./page.css";
import triggerAnimateEffect from "@/components/helpers/triggerAnimateEffect";
import PageLink from "../components/pagelink/PageLink"
import Personal from "../components/icons/Personal"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    setTimeout(()=> {
      triggerAnimateEffect();
    }, 600)
  }, []);

  const refreshPage = async () => {
    window.location.reload();
  }

  return (
    <div className="layout">
      <div className="container animate-on-load">
        <div onClick={refreshPage} className="hidden"><Personal></Personal></div>
        <div className="info animate-on-load">
          <div className="hidden">Dylan DiBeneditto</div>
          <div className="hidden slash">/</div>
          <div className="hidden">Software Engineer</div>
          <div className="hidden slash">/</div>
          <div className="hidden">Washington DC</div>
        </div>
        <PageLink text="About" link="/about" hide={true}></PageLink>
        <PageLink text="Projects" link="/projects" hide={true}></PageLink>
        <PageLink text="Work" link="/work" hide={true}></PageLink>
        <PageLink text="Skills" link="/skills" hide={true}></PageLink>
        <PageLink text="Photos" link="/photos" hide={true}></PageLink>
        <PageLink text="Contact" link="/contact" hide={true}></PageLink>
      </div>
    </div>
  );
}
