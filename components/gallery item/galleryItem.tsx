import Image, { StaticImageData } from "next/image";
import "./galleryItem.css";
import { useRef, useEffect } from "react";

export default function GalleryItem(props: {
  image: StaticImageData;
  location: string;
  date: string;
}) {
  const galleryItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (galleryItemRef.current) {
              galleryItemRef.current.classList.add("animate");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (galleryItemRef.current) {
      observer.observe(galleryItemRef.current);
    }

    return () => {
      if (galleryItemRef.current) {
        observer.unobserve(galleryItemRef.current);
      }
    };
  }, []);

  return (
    <div ref={galleryItemRef} className="gallery-item">
      <Image
        src={props.image}
        width={1080}
        alt={props.location}
        onLoadingComplete={() => {
          if (galleryItemRef.current?.classList.contains("animate")) {
            galleryItemRef.current.classList.add("loaded");
          }
        }}
      />
      <div className="image-data">
        <div className="location">{props.location}</div>
        <div className="date">{props.date}</div>
      </div>
    </div>
  );
}