import React from "react";
import "@/styles/projectsection.css";

function ProjectSection() {
  return (
    <>
      <section className="mainProject">
        <section className="ProjectImgSide">
          <div className="mediaWrapper">
            <video
              autoPlay
              loop
              muted
              playsInline
              width="100%" // Set width to fill its container
              height="100%" // Set height to fill its container
            >
              <source src="/elsa_mockup.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <img src='https://via.placeholder.com/1080x1080' alt="project" /> */}
          </div>
        </section>
        <section className="ProjectTextSide"></section>
      </section>
    </>
  );
}

export default ProjectSection;
