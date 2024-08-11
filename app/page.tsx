"use client";
import React, { useEffect } from "react";
import AboutMe from "@/components/about me/aboutme";
import Sidebar from "@/components/sidebar/sidebar";
import Showcase from "@/components/showcase/showcase";
import "./page.css";

export default function Home() {
  useEffect(() => {
    const content = document.querySelectorAll('.animate-on-load');
    content.forEach((el) => {
      el.classList.remove('hidden');
      el.classList.add('animate');
    });
  }, []);

  return (
    <div className="layout">
      <Sidebar></Sidebar>
      <div className="content animate-on-load hidden">
        <AboutMe></AboutMe>
        <div className="work">
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