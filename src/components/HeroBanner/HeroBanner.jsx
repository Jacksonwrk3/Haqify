import React from "react";
import PrimaryButtonStyleWrapper from "../UI/PrimaryButtonStyleWrapper/PrimaryButtonStyleWrapper";
const HeroBanner = () => {
  return (
    <section className="flex flex-col items-center h-screen pt-20 ">
      {/* Maybe add a feature where the color is changing instead of a constand */}
      {/* py-2 */}
      <p className="max-w-screen-xl px-1 py-2 text-sm font-semibold text-center bg-indigo-300 rounded-lg w-11/12 max-w-[384px] font-martian">
        Over 3 million passion developer
      </p>
      <h1 className="w-11/12 max-w-screen-xl mt-10 text-4xl leading-snug text-center font-poppins ">
        Network and collaborate with passionate developers
      </h1>
      <p className="max-w-screen-xl mt-8 text-sm font-medium text-center font-martian">
        Connect with thousands of aspiring developers & teams around the world
      </p>
      <PrimaryButtonStyleWrapper margin="mt-8">
        <button className="font-semibold font-martian">Find a team</button>
      </PrimaryButtonStyleWrapper>
    </section>
  );
};

export default HeroBanner;
