import { FaAmbulance, FaClock, FaUserMd, FaBriefcaseMedical, FaMapMarkerAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaAmbulance className="text-green-700 text-4xl" />,
    title: "Fast Response",
    description:
      "We ensure timely arrival to provide urgent care whenever you need it. Our team is equipped to respond immediately to emergencies.",
  },
  {
    icon: <FaClock className="text-green-700 text-4xl" />,
    title: "24/7 Availability",
    description:
      "Our services are available around the clock, every day of the year, ensuring you have access to emergency care anytime.",
  },
  {
    icon: <FaUserMd className="text-green-700 text-4xl" />,
    title: "Certified Medical Staff",
    description:
      "Our team of certified medical professionals is trained to handle emergencies and provide the highest standard of care.",
  },
  {
    icon: <FaBriefcaseMedical className="text-green-700 text-4xl" />,
    title: "Modern Equipment",
    description:
      "Our ambulances are fully equipped with advanced medical equipment to handle critical situations en route to the hospital.",
  },
  {
    icon: <FaMapMarkerAlt className="text-green-700 text-4xl" />,
    title: "Patient Tracking",
    description:
      "Our advanced GPS tracking system allows families and hospitals to monitor the patient's journey in real-time for added peace of mind.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-center my-10">
      <h2 className="text-3xl font-bold mb-4">Why Choose Our Ambulance Service?</h2>
      <p className="text-gray-600 mb-8">Here are a few reasons why our ambulance service is trusted and reliable.</p>
      
      <div className="flex flex-col space-y-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            {/* Left Icon */}
            <div className="flex flex-col items-center mr-6">
              <div className="border-2 border-green-700 rounded-full p-4">
                {feature.icon}
              </div>
              {/* Vertical Line */}
              {index < features.length - 1 && (
                <div className="w-px bg-white h-full mt-4"></div>
              )}
            </div>

            {/* Text Content */}
            <div className="text-left">
              <h3 className="text-lg font-semibold text-green-700">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
