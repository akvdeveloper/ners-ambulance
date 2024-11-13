"use client"
const AuthorizedImage = [
    {imgSrc : "/image/authorized/startup-india-2.png", alt : "startup-india-2"},
    {imgSrc : "/image/authorized/startup-india-3.png", alt : "startup-india-3"},
    {imgSrc : "/image/authorized/startup-india-4.png", alt : "startup-india-4"},
    {imgSrc : "/image/authorized/startup-india-1.png", alt : "startup-india-1"}
]

const Authorized = () => {
  return (
    <section className="bg-white py-10 md:p-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl text-gray-900 font-extrabold">Recognized By...</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-8">
        {
          AuthorizedImage.map(item => (
            <img 
              key={item.alt}
              src={item.imgSrc}
              alt={item.alt}
              className="w-24 h-auto sm:w-32 md:w-40 lg:w-48"
            />
          ))
        }
      </div>
    </section>
  );
};

export default Authorized;
