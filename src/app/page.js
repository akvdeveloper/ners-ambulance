"use client"
import Hero from "@/components/Hero";
import IconBox from "@/components/ui/IconBox";
import InfoCard from "@/components/ui/InfoCard";
import { FaAmbulance, FaPlane, FaTrain, FaProcedures } from 'react-icons/fa';
import { IoTimeSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import WhyChooseUs from "@/components/WhyChooseUs";
import AmbulanceConnection from "@/components/AmbulanceConnection";
import Authorized from "@/components/Authorized";
import ClientReview from "@/components/ClientReview";


const services = [
  { label: 'Air Ambulance', Icon: FaPlane },
  { label: 'Road Ambulance', Icon: FaAmbulance },
  { label: 'Train Ambulance', Icon: FaTrain },
  { label: 'Patient Evacuation', Icon: FaProcedures },
  {label: '24 x 7x 365 Days Open', Icon: IoTimeSharp }
];

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="w-full">
      <Hero />
      </div>
      <div className="flex flex-wrap my-10 justify-evenly items-center md:justify-evenly">
        {services.map((service, index) => (
          <div key={index} className="m-2">
            <IconBox Icon={service.Icon} label={service.label} />
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 px-4 md:px-8 lg:px-36">
        <InfoCard
          imageSrc="/image/info/search-ambulance.png" 
          title="Explore Ambulance"
          buttonLabel="Click Here"
          onClick={() => router.push("/about")}
        />
        <InfoCard
          imageSrc="/image/info/confused.png" 
          title="Confused For Ambulance?"
          buttonLabel="Call Us"
          onClick={() => router.push("/contact")}
        />
      </div>
      <WhyChooseUs />
      <h3 className="p-20 text-center font-extrabold text-xl md:text-3xl lg:text-3xl">Dedicated 24x7 Ambulance Available </h3>
      <AmbulanceConnection />
      <Authorized />
      <ClientReview />

    </>
  );
}
