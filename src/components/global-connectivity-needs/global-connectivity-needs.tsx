import React from "react";
import Container from "../container/container";
import { Button } from "../ui/button";
import Image from "next/image";

const GlobalConnectivityNeeds = () => {
  return (
    <section className="py-[60px]">
      <Container className="flex flex-col items-center">
        <h3
          data-aos="fade-up"
          className="font-matter font-semibold text-[27px] md:text-[55px] leading-[0.95] text-center mb-6"
        >
          Global Connectivity Needs
        </h3>
        <p
          data-aos="fade-up"
          data-aos-delay={50}
          className="m-0 text-[15px] md:text-[23px] leading-[1.32] w-full max-w-[1191px] mx-auto mb-8 text-center"
        >
          As the digital world becomes more interconnected, there is a
          heightened demand for reliable and censorship-resistant internet
          access that can bridge geographical and regulatory barriers.
        </p>

        <Button data-aos="fade-up" className="mb-20 md:mb-0" data-aos-delay={100}>
          See all integrations
        </Button>

        <Image
          data-aos="fade-up"
          data-aos-delay={120}
          src={"./connectivity.svg"}
          width={0}
          height={0}
          sizes="100vw"
          alt="connectivity"
          className="w-auto h-auto"
        />
      </Container>
    </section>
  );
};

export default GlobalConnectivityNeeds;
