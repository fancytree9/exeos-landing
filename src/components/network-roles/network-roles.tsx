"use client";

import React, { useRef, useState, useEffect } from "react";
import NetworkRoleItem from "./network-role";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../container/container";
import { cn } from "@/lib/utils";

interface Role {
  image: string;
  title: string;
  description: string;
}

const roles: Role[] = [
  {
    image: "./rule-client.svg",
    title: "Clients",
    description: `Consume tokens to access the\n network, paying for routing\n services, bandwidth, and exit`,
  },
  {
    image: "./rule-exit-nodes.svg",
    title: "Exit Nodes",
    description:
      "Mine tokens by providing\n their bandwidth and\n public IP addresses.",
  },
  {
    image: "./rule-relay-nodes.svg",
    title: "Relay Nodes",
    description:
      "Connect users to exit nodes\n and cryptographically attest\n to the reliability",
  },
  {
    image: "./rule-validators.svg",
    title: "Validators",
    description:
      "Ensure the integrity of the\n blockchain, validating\n transactions, network ",
  },
];
const NetworkRolesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setIsLeftDisabled(container.scrollLeft === 0);
      setIsRightDisabled(
        container.scrollLeft + container.offsetWidth >= container.scrollWidth
      );
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -itemWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: itemWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check on load
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (itemRef.current) {
      setItemWidth(itemRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="pb-11">
      <Container className="px-0 md:px-0 min-[1200px]:px-8">
        <h2
          data-aos="fade-up"
          className="text-[25px] md:text-[40px] font-semibold font-matter leading-[1.073] text-center mb-6"
        >
          Key features consensus and <br /> multiple validation mechanisms
        </h2>
        <h6
          data-aos="fade-up"
          data-aos-delay={100}
          className="text-center text-[18px] leading-[1.16] font-normal mb-[120px]"
        >
          Exeos is a decentralized overlay network (DON) designed{" "}
          <br className="hidden md:block" />
          specifically for the next generation of the Web: Web3.
        </h6>

        <div
          ref={scrollContainerRef}
          data-aos="fade-up"
          data-aos-delay={150}
          className="min-[1200px]:px-8 min-[1200px]:mx-0 py-2 w-full flex justify-between relative min-[1200px]:gap-10 overflow-auto"
        >
          <div className="h-[92px] items-center absolute left-0 right-0 flex z-[1] min-[1200px]:w-full w-roles-line">
            <div className="bg-feature-line h-1 w-full min-[1200px]:max-w-[1384px] mx-auto" />
          </div>

          {roles.map((feature, index) => (
            <NetworkRoleItem
              ref={index === 0 ? itemRef : null} // Reference the first item to calculate width
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              imageClassName={cn({ "top-[17px]": index === 2 })}
            />
          ))}
        </div>

        <div className="justify-between px-6 flex mt-1 min-[1200px]:hidden">
          <Button
            variant="outline"
            className="h-[38px] md:h-[38px] w-[38px] p-0"
            onClick={scrollLeft}
            data-aos="fade-right"
            disabled={isLeftDisabled}
          >
            <ArrowLeft />
          </Button>

          <Button
            variant="outline"
            className="h-[38px] md:h-[38px] w-[38px] p-0"
            onClick={scrollRight}
            data-aos="fade-left"
            disabled={isRightDisabled}
          >
            <ArrowRight />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default NetworkRolesSection;
