"use client";
import React, { useEffect } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import "./page.css";
import triggerAnimateEffect from "@/components/helper functions/triggerAnimateEffect";
import ProjectLabel from "@/components/project labels/projectlabel";

export default function Code() {
  useEffect(() => {
    triggerAnimateEffect();
  }, []);

  return (
    <div className="layout">
      <Sidebar selected="Code"></Sidebar>
      <div className="content animate-on-load">
        <div className="code-section-title hidden">
          <div>Coding Projects</div>
          <div className="quote">”Talk is cheap, show me the code.” - Linus Torvalds</div>
        </div>
        <ProjectLabel
          title="Connect 4 AI"
          tag="C++"
          link="showcases/connect4"
        ></ProjectLabel>
        <ProjectLabel
          title="ModuLearn"
          tag="Python"
          link="showcases/connect4"
        ></ProjectLabel>
        <ProjectLabel
          title="Various Web Experiments"
          tag="JavaScript, HTML, CSS"
          link="showcases/connect4"
        ></ProjectLabel>
        <ProjectLabel
          title="Go Tasks"
          tag="Go"
          link="showcases/connect4"
        ></ProjectLabel>
        <ProjectLabel
          title="Tic-Tac-Toe AI"
          tag="Java"
          link="showcases/connect4"
        ></ProjectLabel>
        <ProjectLabel
          title="Sorting Algorithm Visualizer"
          tag="JavaScript, HTML, CSS"
          link="showcases/connect4"
        ></ProjectLabel>
        <ProjectLabel
          title="Word Game Hacks"
          tag="Python"
          link="showcases/connect4"
        ></ProjectLabel>
      </div>
    </div>
  );
}
