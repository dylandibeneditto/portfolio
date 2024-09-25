"use client";
import React, { useEffect } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import "./page.css";
import triggerAnimateEffect from "@/components/helper functions/triggerAnimateEffect";

export default function About() {
  useEffect(() => {
    triggerAnimateEffect();
  }, []);

  return (
    <div className="layout">
      <Sidebar selected="About Me"></Sidebar>
      <div className="content animate-on-load">
        <div className="hidden">project</div>
        <div className="hidden">project</div>
        <div className="hidden">project</div>
        <div className="hidden">project</div>
        <div className="hidden">project</div>
        <div className="hidden">project</div>
        <div className="hidden">project</div>
      </div>
    </div>
  );
}
