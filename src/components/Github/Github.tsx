"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import "../../styles/globals.css";

const Github: React.FC = () => {
  interface GithubData {
    public_repos: number;
    followers: number;
  }

  const [data, setData] = useState<GithubData>();
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/ateebamateen21")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  //animation count up visibility
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible: boolean) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  return (
    <>
      <div className="github">
        <main className="container py-16">
          <section className="text-3xl font-bold py-6 text-center">
            <h2 className=" text-white">Github Work</h2>
          </section>
          <VisibilitySensor onChange={onVisibilityChange}>
            <section className="flex flex-col sm:flex-row items-center justify-center ">
              <div className="bg-white p-8 m-6 text-center rounded-md border-gray-400 border-4 bg-opacity-5 backdrop-blur-md transition-transform transform hover:scale-105">
                <h3 className="text-white">Public Repositories</h3>
                <section className="text-4xl text-white font-bold p-3 w-24">
                {isVisible && <CountUp end={data?.public_repos || 0} duration={4} />}
                </section>
              </div>
              <div className="bg-white p-8 m-6 text-center rounded-md border-gray-400 border-4 bg-opacity-5 backdrop-blur-md transition-transform transform hover:scale-105">
                <h3 className="text-white">No of Followers</h3>
                <section className="text-4xl text-white font-bold p-3 w-24">
                {isVisible && <CountUp end={data?.followers || 0} duration={4} />}
                </section>
              </div>
              <div className="bg-white p-8 m-6 text-center rounded-md border-gray-400 border-4 bg-opacity-5 backdrop-blur-md transition-transform transform hover:scale-105">
                <h3 className="text-white">Total Commits</h3>
                <section className="text-4xl text-white font-bold p-3 w-24">
                  1
                </section>
              </div>
            </section>
          </VisibilitySensor>
        </main>
      </div>
    </>
  );
};

export default Github;
