"use client"
import { FaAmbulance, FaPlane, FaTrain, FaProcedures } from 'react-icons/fa';

const IconBox = ({ Icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center w-44 h-32 lg:w-52 md:w-56 bg-gray-900 rounded-lg text-center cursor-pointer transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <Icon className="text-green-500 text-3xl mb-2" />
      <p className="text-white text-sm font-medium">{label}</p>
    </div>
  );
};

export default IconBox;
