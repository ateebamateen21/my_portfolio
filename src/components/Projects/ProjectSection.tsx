//PATH: src/components/Projects/ProjectSection.tsx
"use client";
import React, { useEffect, useRef } from "react";
import "@/styles/projectsection.css";

interface ProjectSectionProps {
  videoSrc: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ videoSrc }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observerOptions: IntersectionObserverInit = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Adjust based on when you want the callback to trigger
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      console.log(">>>>entries", entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a class or trigger animation when the section is in view
         videoRef.current?.classList.add("in-view");
        } else {
          // Remove the class or reset animation when the section is out of view
          videoRef.current?.classList.remove("in-view");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe the current section
    if (currentSection) {
      observer.observe(currentSection);
    }

    // Clean up the observer on component unmount
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section className="mainProject" ref={sectionRef}>
      <section className="ProjectImgSide">
        <div className="mediaWrapper">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            width="100%"
            height="100%"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <img src='https://via.placeholder.com/1080x1080' alt="project" /> */}
        </div>
      </section>
      <section className="ProjectTextSide">
        
      </section>
    </section>
  );
};

export default ProjectSection;
