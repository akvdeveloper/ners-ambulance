"use client";
import CustomeCarousel from "./ui/CustomeCarousel";


const items = [
  { image: "/image/hero/hero-1.webp", alt: "Slide 1",  },
  { image: "/image/hero/hero-2.webp", alt: "Slide 2", },
];

const customSettings = {
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
};

const Hero = () => {
  return (
    <div className="w-full">
      <CustomeCarousel items={items} settings={customSettings}  className="w-full" />
    </div>
  );
};

export default Hero;
