"use client";
import Image from "next/image";

const InfoCard = ({ imageSrc, title, buttonLabel, onClick }) => {
  return (
    <div className="bg-gray-900 rounded-lg grid grid-cols-2 md:grid-cols-2 w-full md:max-w-lg lg:max-w-2xl gap-6 mb-6 pt-4 px-4">
        <div className="flex justify-center md:justify-start">
            <Image 
            src={imageSrc} 
            alt={title} 
            width={250} 
            height={300} 
            className="object-cover"
            sizes='300vw'
            style={{height:"auto", width:"auto"}}
            />
        </div>
        <div className="flex flex-col justify-center space-y-4 md:space-y-2">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <button
            onClick={onClick}
            className="bg-green-500 text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition"
            >
            {buttonLabel}
            </button>
        </div>
        </div>

  );
};

export default InfoCard;
