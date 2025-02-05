import React from "react";
import Container from "../container/container";
import { Button } from "../ui/button";
import { Accordion } from "../ui/accordion";
import FaqItem from "./faq-item";
import Image from "next/image";

const faqs = [
  {
    title: "Lorem ipsum dolor sit amet consectetur?",
    description:
      "Lorem ipsum dolor sit amet consectetur. A fermentum vel varius porttitor sit vel sodales sem. Nec aliquam id eget sed quis. Egestas at amet id sed mauris. Gravida ornare viverra id dignissim nunc.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur?",
    description:
      "Lorem ipsum dolor sit amet consectetur. A fermentum vel varius porttitor sit vel sodales sem. Nec aliquam id eget sed quis. Egestas at amet id sed mauris. Gravida ornare viverra id dignissim nunc.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur?",
    description:
      "Lorem ipsum dolor sit amet consectetur. A fermentum vel varius porttitor sit vel sodales sem. Nec aliquam id eget sed quis. Egestas at amet id sed mauris. Gravida ornare viverra id dignissim nunc.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur?",
    description:
      "Lorem ipsum dolor sit amet consectetur. A fermentum vel varius porttitor sit vel sodales sem. Nec aliquam id eget sed quis. Egestas at amet id sed mauris. Gravida ornare viverra id dignissim nunc.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur?",
    description:
      "Lorem ipsum dolor sit amet consectetur. A fermentum vel varius porttitor sit vel sodales sem. Nec aliquam id eget sed quis. Egestas at amet id sed mauris. Gravida ornare viverra id dignissim nunc.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-[120px] relative">
      <div className="absolute min-w-[80rem] w-full right-[-10rem] -top-10 md:-right-10">
        <Image
          src={"./accordion-gradient1.svg"}
          alt="bg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto absolute z-[-1] top-0 right-0  mix-blend-overlay"
        />
        <Image
          src={"./accordion-gradient2.svg"}
          alt="bg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto absolute z-[-2] top-0 right-0 blur-[50px]"
        />
      </div>

      <Container className="overflow-hidden">
        <div className="flex flex-col xl:flex-row gap-6">
          <div data-aos="fade-right">
            <h2 className="text-[25px] md:text-[47px] leading-[0.925] font-matter font-medium mb-6">
              What you can build on Exeos protocol?
            </h2>
            <p data-aos="fade-up" data-aos-delay={100} className="mb-6">
              Lorem ipsum dolor sit amet consectetur?
            </p>
            <Button>Start now</Button>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <div
                className="w-full "
                data-aos="fade-left"
                data-aos-delay={100}
                key={`faq-${index}`}
              >
                <FaqItem
                  title={faq.title}
                  description={faq.description}
                  index={index}
                />
              </div>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
