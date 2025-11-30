"use client";
import "./page.css";
import triggerAnimateEffect from "@/components/helpers/triggerAnimateEffect";
import { useEffect } from "react"
import NavBar from "@/components/navbar/NavBar";

export default function About() {
  useEffect(() => {
    setTimeout(()=> {
      triggerAnimateEffect();
    }, 600)
  }, []);

  return (
    <div className="layout">
      <NavBar select="About"></NavBar>
      <div className="container animate-on-load">
      </div>
    </div>
  );
}

