import React from "react";
import PrimaryButtonStyleWrapper from "../UI/PrimaryButtonStyleWrapper/PrimaryButtonStyleWrapper";
const HeroBanner = () => {
  return (
    <section className="flex flex-col items-center pt-20 pb-10 ">
      <p className="max-w-screen-xl px-5 py-2 text-sm font-semibold text-center bg-indigo-300 rounded-lg md:text-lg w-fit font-martian">
        Over 3 million passionate developer
      </p>
      <h1 className="w-11/12 max-w-screen-xl mt-10 text-4xl leading-snug text-center md:text-6xl font-poppins ">
        Network and collaborate with passionate developers
      </h1>
      <p className="max-w-screen-xl px-1 mt-8 text-sm font-medium text-center md:px-0 md:text-lg font-martian">
        Connect with thousands of aspiring developers & teams around the world
      </p>
      <PrimaryButtonStyleWrapper margin="mt-8">
        <button className="font-semibold font-martian">Find a team</button>
      </PrimaryButtonStyleWrapper>
    </section>
  );
};

export default HeroBanner;
