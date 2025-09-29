import React from "react";
import Image from "next/image";

function OurPartners() {
  const partners = [
    {
      name: "Automation",
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756114761/Automation_dzt923.png",
      alt: "Automation logo",
    },
    {
      name: "Blossom",
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756114761/Blossom_f1kl9c.png",
      alt: "Blossom logo",
    },
    {
      name: "Cactus",
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756114761/Cactus_ejegv0.png",
      alt: "Cactus logo",
    },
    {
      name: "Border",
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756114761/Border_gdirmh.png",
      alt: "Border logo",
    },
    {
      name: "Cloud",
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756114762/Cloud_xf2rdz.png",
      alt: "Cloud logo",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-3 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={231}
                  height={78}
                  className="w-full h-auto "
                  unoptimized
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
