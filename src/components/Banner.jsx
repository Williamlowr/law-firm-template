import Image from "next/image";
import React from "react";
import banner from "../../public/img/banner2.jpg";
import law from "../../public/img/law.png";

export default function Banner() {
  return (
    <div className="relative mb-44">
      <Image
        src={banner}
        alt="Banner Image"
        width={1800}
        height={700}
        layout="responsive"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 text-white flex flex-col justify-center  md:p-24 ">
        <div className="">
          <h2 className="text-stone-400 text-xl md:text-xl lg:text-2xl">
            WELCOME TO FAMILY LAWYER
          </h2>
          <h1 className="text-xl md:text-4xl lg:text-5xl  font-extrabold lg:my-2">
            PROTECTING WHAT YOU <br /> VALUE MOST
          </h1>
          <p className="text-stone-400 text-sm md:text-base lg:text-lg lg:w-2/3">
            I have significant experience in conducting divorce proceedings,
            providing legal assistance in the division of property, drawing up
            child support and alimony.
          </p>
          <button className="bg-stone-700 p-2 rounded-md mt-4 font-semibold">
            REQUEST A FREE CONSULTATION{" "}
          </button>
        </div>
      </div>
      <div className="absolute  grid grid-cols-4 max-sm:grid-cols-2 text-center  lg:mx-28  bg-[#09061f] text-white border-2 border-stone-600 rounded-md p-4 lg:-mt-12 ">
        <div className="">
          <div>
            <Image
              src={law}
              alt="Banner Image"
              width={50}
              height={50}
              style={{ filter: "brightness(0) invert(1)", marginLeft: "110px" }}
            />
            <h1 className="text-lg font-medium mt-2">DIVORCE</h1>
            <p className="text-stone-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={law}
            alt="Banner Image"
            width={50}
            height={50}
            style={{ filter: "brightness(0) invert(1)", marginLeft: "110px" }}
          />
          <h1 className="text-lg font-medium mt-2">CHILD SUPPORT</h1>
          <p className="text-stone-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <Image
            src={law}
            alt="Banner Image"
            width={50}
            height={50}
            style={{ filter: "brightness(0) invert(1)", marginLeft: "110px" }}
          />
          <h1 className="text-lg font-medium mt-2">PATERNITY</h1>
          <p className="text-stone-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <Image
            src={law}
            alt="Banner Image"
            width={50}
            height={50}
            style={{ filter: "brightness(0) invert(1)", marginLeft: "110px" }}
          />
          <h1 className="text-lg font-medium mt-2">AGREEMENTS</h1>
          <p className="text-stone-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
