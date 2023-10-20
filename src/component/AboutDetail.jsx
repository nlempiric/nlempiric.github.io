import React from "react";

const AboutDetail = () => {
  return (
    <div className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex flex-col 2xl:!flex justify-between py-24 gap-6">
      <div className="2xl:w-1/2 lg:w-full flex justify-center">
        <img src="/aboutPage.webp" alt="" />
      </div>
      <div className="2xl:w-1/2 w-full 2xl:flex-col items-center text-center">
        <p>Welcome to Nifty</p>
        <h1 className="text-4xl font-semibold my-12">
          High-quality rendered & equally affordable artwork
        </h1>
        <p>
          By maintain didn't found horn a while hiding has that managers, back
          it the mice again musical approved anywhere gets reported with paper
          he the sides harmonics.
        </p>
        <ul className="">
            <li>Illustration Artist</li>
            <li>3D Model Designer</li>
            <li>Motion Graphics</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutDetail;
