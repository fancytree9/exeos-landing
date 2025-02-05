import Image from "next/image";
import React from "react";

const DemandForNetworkingSection = () => {
  return (
    <div className="relative py-20 md:py-0">
      <Image
        src="./grid.svg"
        alt="grid"
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-auto mx-auto object-cover opacity-80 min-h-[515px]"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 m-auto text-center flex items-center flex-col justify-center max-w-[1152px] px-2">
        <h2
          data-aos="fade-up"
          className="text-[25px] md:text-[48px] lg:text-[55px] leading-[0.985] mb-[29px] font-bold font-matter"
        >
          Growing Demand for Networking
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay={100}
          className="md:text-[20px] leading-[1.32]"
        >
          With increasing concerns over data privacy and surveillance,
          individuals and organizations are seeking secure and private internet
          connectivity solutions that protect their digital footprint.
        </p>
      </div>
    </div>
  );
};

export default DemandForNetworkingSection;
