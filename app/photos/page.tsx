"use client";
import React, { useEffect } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import "./page.css";
import triggerAnimateEffect from "@/components/helper functions/triggerAnimateEffect";
import ProjectLabel from "@/components/project labels/projectlabel";
import Image from "next/image";

import i1 from "../../public/photos/bg_final-01.jpg";
import i2 from "../../public/photos/bg_final-02.jpg";
import i3 from "../../public/photos/bg_final-03.jpg";
import i4 from "../../public/photos/bg_final-04.jpg";
import i5 from "../../public/photos/bg_final-05.jpg";
import i6 from "../../public/photos/bg_final-06.jpg";
import GalleryItem from "@/components/gallery item/galleryItem";

export default function Photo() {
  useEffect(() => {
    triggerAnimateEffect();
  }, []);

  return (
    <div className="layout">
      <Sidebar selected="Photography"></Sidebar>
      <div className="content animate-on-load">
        <div className="photo-section-title">
          <div>Photo Gallery</div>
        </div>
        <div className="gallery">
          <div className="gallery-col-1">
            <GalleryItem
              image={i1}
              location="Great Falls, VA"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i3}
              location="Great Falls, VA"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i5}
              location="Great Falls, VA"
              date="Summer '24"
            ></GalleryItem>
          </div>
          <div className="gallery-col-2">
            <GalleryItem
              image={i2}
              location="Great Falls, VA"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i4}
              location="Great Falls, VA"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i6}
              location="Great Falls, VA"
              date="Summer '24"
            ></GalleryItem>
          </div>
        </div>
      </div>
    </div>
  );
}
