"use client";
import React, { useEffect } from "react";
import AboutMe from "@/components/about me/aboutme";
import Sidebar from "@/components/sidebar/sidebar";
import Showcase from "@/components/showcase/showcase";
import "./page.css";

export default function Home() {
  useEffect(() => {
    const content = document.querySelectorAll('.animate-on-load');

    content.forEach(parent => {
      const children = parent.children;
      Array.from(children).forEach((child, index) => {
        if (child instanceof HTMLElement) {  // Type guard to narrow type
          const delay = index * 0.1; // Adjust the multiplier to control the delay
          child.style.animationDelay = `${delay}s !important`;
          setTimeout(() => {
            child.classList.remove('hidden');
            child.classList.add('animate');
          }, delay * 1000); // Apply delay before removing 'hidden'
        }
      });
    });
  }, []);

  return (
    <div className="layout">
      <Sidebar></Sidebar>
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