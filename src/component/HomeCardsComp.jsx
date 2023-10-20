import React, { useEffect } from "react";
import { FaEthereum } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeCardsComp = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const data = [
    {
      imageUrl: "/card1.webp",
      Name: "Abstract Art",
      price: "175",
    },
    {
      imageUrl: "/card2.webp",
      Name: "Abstract Art",
      price: "25",
    },
    {
      imageUrl: "/card3.webp",
      Name: "Abstract Art",
      price: "40",
    },
  ];

  return (
    <div
      className="container mx-auto px-5 pb-14 xl:px-4 2xl:px-4 sm:px-3 flex flex-col gap-10 py-8 2xl:!flex-row xl:!flex-row"
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      {data.map((item) => (
        <div className="bg-white px-7 py-6 flex flex-col justify-center items-center md:mx-28 lg:mx-48 rounded-md">
          <div>
            <img src={item.imageUrl} alt="" />
          </div>
          <div className="py-3 text-center">
            <h1 className="text-[#505072]">{item.Name}</h1>
            <p className="text-[36px] font-semibold">{item.price}ETH</p>
            <p className="text-2xl flex justify-center">
              <FaEthereum />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCardsComp;
