"use client"
import Image from 'next/image'; 

const ambulanceImage = '/image/info/Reperentative.png';

const AmbulanceConnection = () => {
  return (
    <section className="bg-black text-white grid grid-cols-2 items-center justify-between pt-6 ">
      <div className="">
        <Image 
          src={ambulanceImage} 
          alt="Ambulance Service Representative"
          className="object-cover"
          width={0} 
          height={0} 
          sizes='300vw'
          style={{height:"auto", width:"auto"}}
        />
      </div>
      <div className="text-center md:pe-0 lg:pe-28">
        <h2 className="text-sm md:text-4xl font-bold mb-6">
          Connect to Our Emergency <br />Ambulance Services
        </h2>
        <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
          Call Ambulance
        </button>
      </div>
      
    </section>
  );
};

export default AmbulanceConnection;
