import Link from "next/link";
import { useEffect, useState } from "react";
import "./aboutme.css";

export default function AboutMe() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = parseInt(hours) >= 12 ? "pm" : "am";

      const timeString = `${parseInt(hours) % 12}:${minutes}${ampm}`;
      setTime(timeString);
    };

    updateTime(); // Initial call to set the time
    const intervalId = setInterval(updateTime, 60000); // Update time every minute

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const renderTime = () => {
    return time.split("").map((char, index) => (
      <span key={index} className="digit">
        {char}
      </span>
    ));
  };

  return (
    <div className="about-me hidden">
      <div className="header">
        <div className="title">About Me</div>
        <div className="time">
          <span className="date">Saturday</span> —{" "}
          <span className="date">August 10</span> — {renderTime()}
        </div>
      </div>
      <div className="description">
        As a dedicated software engineer and designer, I specialize in the
        seamless integration of design and programming across multiple
        disciplines. My expertise spans software design and engineering, UX/UI
        design, web design and development, iOS design and development, as
        well graphic design. I am passionate about crafting intuitive and
        visually compelling digital experiences that are as functional as they
        are beautiful. By focusing on both the aesthetic and technical aspects
        of a project, I ensure that each solution not only meets but exceeds
        user expectations.
      </div>
      <Link className="read-more" href={"/about"}>
        Read More
        <span className="material-symbols-outlined">arrow_outward</span>
      </Link>
    </div>
  );
}
