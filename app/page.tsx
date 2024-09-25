"use client";
import React, { useEffect } from "react";
import AboutMe from "@/components/about me/aboutme";
import Sidebar from "@/components/sidebar/sidebar";
import Showcase from "@/components/showcase/showcase";
import "./page.css";
import triggerAnimateEffect from "@/components/helperfunctions/triggerAnimateEffect";

export default function Home() {
  useEffect(() => {
    triggerAnimateEffect()
  }, []);

  return (
    <div className="layout">
      <Sidebar selected="Home"></Sidebar>
      <div className="content animate-on-load">
        <AboutMe></AboutMe>
        <div className="work hidden">
          <div>
            <Showcase image="next.svg" title="hi" url="hello"></Showcase>
          </div>
          <div>
            <Showcase image="next.svg" title="hi" url="hello"></Showcase>
          </div>
          <div>
            <Showcase image="next.svg" title="hi" url="hello"></Showcase>
          </div>
        </div>
      </div>
    </div>
  );
}