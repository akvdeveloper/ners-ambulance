"use client"
import Image from 'next/image';
const CustomeCard = ({ title, imgUrl }) => {
  return (
    <div
      className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
        <Image src={imgUrl} height={30} width={30} alt={title}/>
        <h2>{title}</h2>
    </div>
  );
};

export default CustomeCard;
