import Image from "next/image";
import React from "react";
import Container from "../container/container";

const usecases = [
  {
    icon: "./usecase-1.svg",
    title: "Decentralized Virtual Private Network (dVPN)",
    description:
      "Provides secure, private, and censorship-resistant internet access by routing user traffic through Exeos’s global network of exit nodes.",
  },
  {
    icon: "./usecase-2.svg",
    title: "Network as a Service",
    description:
      "NaaS offers a flexible, cost-effective, and efficient way to manage networking needs, allowing businesses to focus more on their core operations and less on the complexities of network management.",
  },
  {
    icon: "./usecase-3.svg",
    title: "Decentralized Content Delivery Network (dCDN) ",
    description: `Leverages a global network of exit nodes to cache and deliver content efficiently, reducing latency and improving user  experience.`,
  },
  {
    icon: "./usecase-4.svg",
    title: "RPC Proxy",
    description: `Allows developers and users to interact safely with blockchain nodes without revealing their network details, enhancing privacy in decentralized applications.`,
  },
  {
    icon: "./usecase-5.svg",
    title: "Decentralized Data Collection",
    description: `Facilitates the secure and private aggregation of diverse data from distributed sources, providing high-quality datasets essential for training a variety of AI models like large language models (LLMs) while ensuring data integrity and user privacy.`,
  },
  {
    icon: "./usecase-6.svg",
    title: "Web3 Wallet Privacy",
    description: `Enhances the privacy of Web3 wallet users by concealing metadata and preventing data leaks, protecting against exposure to hackers and online tracking.`,
  },
  {
    icon: "./usecase-7.svg",
    title: "Geo-Location Teleporting",
    description: `Masks users’ true geographic location, enabling access to region-restricted content and bypassing censorship or geo-blocking.`,
  },
  {
    icon: "./usecase-8.svg",
    title: "Proxy Infrastructure",
    description: `Secure Proxy Infrastructure
    Leverages Exeos infrastructure to encapsulate your traffic for enhanced security and privacy.`,
  },
];
const UseCases = () => {
  return (
    <section className="py-[60px]">
      <Container>
        <h3
          data-aos="fade-up"
          className="font-matter text-[25px] md:text-[40px] leading-[2] font-medium mb-10 md:mb-[82px]"
        >
          Use cases
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[40px] lg:gap-x-[76px] gap-y-[63px]">
          {usecases.map((item, index) => (
            <div
              key={`usecase-${index}`}
              className="flex flex-col gap-6 md:gap-[34px] md:text-left h-full"
              data-aos="fade-up"
              data-aos-delay={50 * index}
            >
              <div className="flex flex-col w-full">
                <picture className="block">
                  <Image
                    src={item.icon}
                    width={0}
                    height={0}
                    alt={item.title}
                    className="w-auto h-auto"
                  />
                </picture>
                <h4 className="mt-6 md:mt-[42px] text-[17px] font-matter font-semibold leading-[1.0732] md:min-h-[54px] flex">
                  {item.title}
                </h4>
                <div className="flex-grow" />
              </div>

              <p className="text-[#EDEDED] text-[13px] md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UseCases;
