import React from "react";
import Image from "next/image";
//Props: Takes in a prop of heading, paragraph, image, image position, and image alt
//Component: Side by side image and texts, able to switch image and text positions
function ImageWText(props) {
  //imgPosition is defautled to left unless state otherwise
  let imgPosition = "";
  if (props.imgPosition === "left") {
    imgPosition = "md:flex-row-reverse";
  } else {
    imgPosition = "md:flex-row";
  }

  return (
    <section className="pt-10 bg-gray-200 md:flex md:justify-center md:items-center">
      <div
        className={`md:h-full w-full  flex flex-col space-y-12   md:flex-row max-w-screen-xl ${imgPosition}`}
      >
        <div className="flex flex-col justify-center space-y-4 md:justify-center md:w-1/2 ">
          <h2 className="text-3xl text-center md:text-5xl font-poppins">
            {props.heading}
          </h2>
          <p className="text-base font-medium text-center font-martian">
            {props.paragraph}
          </p>
        </div>
        <div className="relative w-full h-52 md:w-1/2">
          <Image src={props.image} alt="image" fill sizes="100vw" />
        </div>
      </div>
    </section>
  );
}

export default ImageWText;
