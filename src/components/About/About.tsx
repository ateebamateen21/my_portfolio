import React from "react";
import "../../styles/globals.css";
import laptopImg from "../../assets/images/laptop_img.jpg";

const About: React.FC = () => {
  return (
    <>
      <div className="about">
        <main className="container py-28">
          <section className=" flex flex-col sm:flex-row items-center justify-center ">
            <div className=" p-8">
              <img
                src={laptopImg.src}
                alt="picture"
                className="rounded-sm border-4 border-[#F09465]  h-auto max-w-80 "
              />
            </div>

            <div className=" p-10 text-white max-w-xl">
              <h1 className="text-3xl font-bold">
                Greetings, I am a Developer
              </h1>
              <div className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt illo consectetur consequuntur nostrum minima? Quibusdam
                magni aliquam voluptatibus alias unde, dolor illum, tenetur odio
                assumenda adipisci aperiam, laborum impedit temporibus. Quasi
                vero possimus corrupti perferendis?
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
