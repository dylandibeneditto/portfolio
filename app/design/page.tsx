"use client";
import React, { useEffect } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import "./page.css";
import triggerAnimateEffect from "@/components/helper functions/triggerAnimateEffect";
import ProjectLabel from "@/components/project labels/projectlabel";

export default function Design() {
  useEffect(() => {
    triggerAnimateEffect();
  }, []);

  return (
    <div className="layout">
      <Sidebar selected="Design"></Sidebar>
      <div className="content animate-on-load">
        <div className="design-section-title">
          <div>Design Projects</div>
          <div className="quote">
            “Simplicity is the ultimate sophistication.” - Leonardo da Vinci
          </div>
        </div>
        <ProjectLabel
            title="This Website"
            tag="Web UI/UX"
            link="/"
        ></ProjectLabel>
      </div>
    </div>
  );
}
