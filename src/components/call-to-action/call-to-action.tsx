import React from "react";
import Container from "../container/container";
import Image from "next/image";
import { Button } from "../ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-[60px] overflow-hidden" data-aos="fade-up">
      <Container>
        <div className="bg-call-to-action px-[30px] md:px-[60px] lg:px-[80px] xl:px-[160px] py-[57px] min-h-[697px] rounded-[37px] rotate-180 flex">
          <div className="rotate-180 w-full">
            <picture className="block mb-6">
              <Image
                src="./shield.svg"
                width={0}
                height={0}
                sizes="100vw"
                alt="shield"
                className="w-auto h-auto"
              />
            </picture>

            <div className="flex flex-col lg:text-left lg:flex-row justify-between gap-4">
              <div data-aos="fade-right">
                <div className="text-[27px] xl:text-[55px] leading-[1.45] mb-2">
                  Plan the present. <br />
                  Build the future.
                </div>

                <p className="text-[#BFBFBF]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br className="md:block hidden" />
                  Tempor quam quam adipiscing at est integer tellus.
                </p>
              </div>

              <div
                data-aos="fade-left"
                className="flex gap-4"
              >
                <Button>Start now</Button>
                <Button variant={"outline"}>Learn more</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToActionSection;
