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
import i7 from "../../public/photos/bg_final-07.jpg";
import i8 from "../../public/photos/bg_final-08.jpg";
import i9 from "../../public/photos/bg_final-09.jpg";
import i10 from "../../public/photos/bg_final-10.jpg";
import i11 from "../../public/photos/bg_final-11.jpg";
import i12 from "../../public/photos/bg_final-12.jpg";
import i13 from "../../public/photos/bg_final-13.jpg";
import i14 from "../../public/photos/bg_final-14.jpg";
import i15 from "../../public/photos/bg_final-15.jpg";
import i16 from "../../public/photos/bg_final-16.jpg";
import i17 from "../../public/photos/bg_final-17.jpg";
import i18 from "../../public/photos/bg_final-18.jpg";
import i19 from "../../public/photos/bg_final-19.jpg";
import i20 from "../../public/photos/bg_final-30 copy.jpg";
import i21 from "../../public/photos/bg_final-28.jpg";
import i22 from "../../public/photos/bg_final-22.jpg";
import i23 from "../../public/photos/20240705-DSC_4047-2-2.jpg";
import i24 from "../../public/photos/bg_final-23.jpg";
import i25 from "../../public/photos/bg_final-24.jpg";
import i26 from "../../public/photos/bg_final-25.jpg";
import i27 from "../../public/photos/bg_final-26.jpg";
import i29 from "../../public/photos/bg_final-29.jpg";
import GalleryItem from "@/components/gallery item/galleryItem";

export default function Photos() {
  useEffect(() => {
    triggerAnimateEffect();
  }, []);

  return (
    <div className="layout">
      <Sidebar selected="Photography"></Sidebar>
      <div className="content">
        <div className="photo-section-title">
          <div>Photo Gallery</div>
        </div>
        <div className="gallery">
          <div className="gallery-col-1">
            <GalleryItem
              image={i3}
              location="Chesapeake and Ohio Canal National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i13}
              location="Great Falls National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i5}
              location="Chesapeake and Ohio Canal National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i7}
              location="Great Falls National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i9}
              location="Great Falls National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i23}
              location="Rocky Mountain National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i1}
              location="Chesapeake and Ohio Canal National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i11}
              location="Great Falls National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i19}
              location="Raven Rocks, WV"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i15}
              location="Great Falls National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i29}
              location="Shenandoah National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i17}
              location="Great Falls National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i21}
              location="Shenandoah National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i25}
              location="Shenandoah National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i27}
              location="Shenandoah National Park"
              date="Summer '24"
            ></GalleryItem>
          </div>
          <div className="gallery-col-2">
            <GalleryItem
              image={i2}
              location="Chesapeake and Ohio Canal National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i8}
              location="Great Falls National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i24}
              location="Shenandoah National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i10}
              location="Great Falls National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i4}
              location="Chesapeake and Ohio Canal National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i12}
              location="Great Falls National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i22}
              location="Shenandoah National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i14}
              location="Great Falls National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i6}
              location="Chesapeake and Ohio Canal National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i16}
              location="Great Falls National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i18}
              location="Great Falls National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i20}
              location="Shenandoah National Park"
              date="Summer '24"
            ></GalleryItem>
            <GalleryItem
              image={i26}
              location="Shenandoah National Park"
              date="Summer '24"
            ></GalleryItem>
          </div>
        </div>
      </div>
    </div>
  );
}
