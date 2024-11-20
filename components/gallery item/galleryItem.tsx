import Image, { StaticImageData } from "next/image";
import "./galleryItem.css";

export default function GalleryItem(props: {
  image: StaticImageData;
  location: string;
  date: string;
}) {
  return (
    <div className="gallery-item">
      <Image src={props.image} width={1200} alt={props.location}></Image>
      <div className="image-data">
        <div className="location">{props.location}</div>
        <div className="date">{props.date}</div>
      </div>
    </div>
  );
}
