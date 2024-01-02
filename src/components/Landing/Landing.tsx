import React from "react";
import "../../styles/globals.css";
import profilePic from "../../assets/images/profile_pic.jpg";
const Landing: React.FC = () => {
  return (
    <>
      <div className="landing py-28">
        <main className="container">

        <section className=" flex flex-col sm:flex-row items-center justify-center ">

          <div className=" p-10 text-white max-w-xl">
            <h1 className="text-3xl font-bold">Greetings, I am a Developer</h1>
            <div>
              I am a front-end developer, my
              expertise include JavaScript, React, Bootstrap,
              Tailwind, Canvas and Framer Motion
            </div>
          </div>

          <div className=" p-8">
            <img
              src={profilePic.src}
              alt="picture"
              className="rounded-full border-8 border-[#F09465]  h-auto max-w-60 "
              />
          </div>
              </section>
              </main>
        </div>
    
    </>
  );
};

export default Landing;
