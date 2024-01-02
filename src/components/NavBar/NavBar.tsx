import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../assets/images/logoImg.png";

const NavBar = () => {
  return (
    <>
      <div className=" p-4 fixed top-0 w-full m-auto">
        <div className=" bg-transparent w-full  p-2 z-50">
          <section className=" container p-3 rounded-md bg-white bg-opacity-5 backdrop-blur-md  flex justify-between w-full">
            <div className="text-center font-extrabold text-2xl p-1">
              Portfolio
            </div>
            <div>
              <button className="bg-[#F09465] rounded-lg py-2 px-5 hover:bg-gray-400 hover:text-gray-800">
                <Link href="/hireMe">Hire Me</Link>
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default NavBar;
