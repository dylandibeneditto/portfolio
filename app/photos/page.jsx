"use client";
import "./page.css";
import triggerAnimateEffect from "@/components/helpers/triggerAnimateEffect";
import { useEffect } from "react"

export default function About() {
  useEffect(() => {
    setTimeout(()=> {
      triggerAnimateEffect();
    }, 600)
  }, []);

  return (
    <div className="layout">
      <div className="container animate-on-load">

      </div>
    </div>
  );
}

