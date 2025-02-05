import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="py-[60px] md:py-[120px] flex items-center justify-center gap-4 md:gap-[30px] lg:gap-[60px] overflow-hidden">
      <Image
        src={`./uniswap-3.svg`}
        alt="uniswap"
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-[29px] md:h-auto"
        data-aos="fade-up"
        data-aos-delay={150}
      />
      <Image
        src={`./uniswap-2.svg`}
        alt="uniswap"
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-[29px] md:h-auto"
        data-aos="fade-up"
        data-aos-delay={100}
      />
      <Image
        src={`./uniswap-1.svg`}
        alt="uniswap"
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-[29px] md:h-auto"
        data-aos="fade-up"
      />
      <Image
        src={`./uniswap-2.svg`}
        alt="uniswap"
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-[29px] md:h-auto"
        data-aos="fade-up"
        data-aos-delay={100}
      />
      <Image
        src={`./uniswap-3.svg`}
        alt="uniswap"
        width={0}
        height={0}
        sizes="100vw"
        data-aos="fade-up"
        data-aos-delay={150}
        className="w-auto h-[29px] md:h-auto"
      />
    </div>
  );
};

export default Partners;
