import React from "react";
import Container from "../container/container";
import NewBadge from "./news-badge";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-[30px] pb-[120px] md:py-[60px]">
      <div className="min-w-[105rem] right-[-27rem] absolute w-full -top-4 md:-right-6">
        <Image
          src={"./gradient1.svg"}
          alt="bg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto absolute top-0 right-0 z-[-1] mix-blend-screen blur-[8px]"
        />
        <Image
          src={"./gradient2.svg"}
          alt="bg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto absolute top-0 right-0 z-[-1] blur-[8px]"
        />
        <Image
          src={"./gradient3.svg"}
          alt="bg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto absolute top-0 right-0 z-[-1] mix-blend-overlay blur-[8px]"
        />
      </div>

      <Container className="flex flex-col items-start">
        <NewBadge />
        <h1
          data-aos="fade-up"
          className="mt-10 font-semibold font-matter bg-hero-title bg-clip-text leading-[1.254] text-[35px] md:text-[66px]"
        >
          Decentralized Overlay <br /> Network
        </h1>

        <h5
          data-aos="fade-up"
          data-aos-delay={50}
          className="leading-[1.307] mt-[24px] text-[17px] md:text-[26px]"
        >
          EXEOS is the first decentralized network to tokenize{" "}
          <br className="hidden md:block" />
          Internet connectivity
        </h5>

        <div
          data-aos="fade-up"
          data-aos-delay={100}
          className="flex justify-center gap-2 mt-10"
        >
          <Button className="h-[43.59px] md:h-[59px]">Start now</Button>
          <Button variant={"outline"} className="h-[43.59px] md:h-[59px]">
            Learn more
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
