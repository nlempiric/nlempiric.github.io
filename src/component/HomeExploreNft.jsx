import React, { useEffect } from 'react'
import { FaEthereum } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";

const HomeExploreNft = () => {

    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);

    const data = [
        {
          imageUrl: "/collection1.webp",
          Name: "Abstract Art",
          price: "175",
        },
        {
          imageUrl: "/collection2.webp",
          Name: "Colorful Abstract",
          price: "25",
        },
        {
          imageUrl: "/collection3.webp",
          Name: "Colorful Abstract",
          price: "40",
        },
        {
          imageUrl: "/collection4.webp",
          Name: "Colorful Abstract",
          price: "40",
        },
        {
          imageUrl: "/collection5.webp",
          Name: "Colorful Abstract",
          price: "40",
        },
        {
          imageUrl: "/collection6.webp",
          Name: "Colorful Abstract",
          price: "40",
        },
      ];

  return (
    <>    
    <div className="my-32">
        <h1 className="text-4xl font-semibold my-12">Explore NFTs</h1>
        <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 "  
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000">
            
            {data.map((items)=>
            (
                <div className="flex flex-col items-center p-5 justify-center border border-1 border-gray-300 rounded-md hover:shadow-2xl hover:border-white  transform transition-transform">
                <div>
                    <img src={items.imageUrl} alt="" />
                </div>
                <div className="py-3 self-center 2xl:self-start ">
                    <h1 className="text-[22px] font-semibold">{items.Name} </h1>
                    <p className="text-[20px] font-medium flex items-center">
                        <span><FaEthereum /></span>
                        <span>{items.price} ETH</span>
                    </p>
                </div>
                    </div>
            ))}
            
        </div>
    </div>
    </>

  )
}

export default HomeExploreNft
