import Image from "next/image";
import Container from "../container/container";
import { cn } from "@/lib/utils";

const features = [
  {
    id: 1,
    title: "Built-In Next-Generation Cryptography",
    description:
      "Integrates quantum-resistant cryptographic algorithms to safeguard against future security threats, ensuring data integrity and confidentiality.",
    image: "./feature-1.svg",
  },
  {
    id: 2,
    title: "Relay Integrity Protocol",
    description:
      "Features a cryptographically secure relaying protocol employing multi-layered security mechanisms to ensure data integrity and honest relaying.",
    image: "./feature-2.svg",
    className: "pt-0",
  },
  {
    id: 3,
    title: "Tokenized Incentive Model",
    description:
      "Integrates quantum-resistant cryptographic algorithms to safeguard against future security threats, ensuring data integrity and confidentiality.",
    image: "./feature-3.svg",
  },
  {
    id: 4,
    title: "Programmable Networking Stack",
    description:
      "Enables developers to customize and extend network functionalities to meet the specific needs of Web3 applications, fostering innovation and flexibility.",
    image: "./feature-4.svg",
    className: "lg:col-span-2", // For larger width if needed
  },
  {
    id: 5,
    title: "Scalable Architecture",
    description:
      "Designed to handle millions of nodes globally while ensuring robust performance to meet the growing demands of Web3.",
    image: "./feature-5.svg",
  },
];

const FeaturesSection = () => {
  return (
    <section className="pb-[30px] pt-11">
      <Container className="grid px-[9px] gap-[9px] md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={100 * index}
            key={feature.id}
            className={cn(
              `border border-[#2E2E34] bg-[#0D0C15] rounded-[21px] p-8 pt-0 gap-9`,
              `flex flex-col`,
              feature.className
            )}
          >
            <div
              className={cn(
                "flex items-center justify-center h-[280px] xl:h-[320px]",
                {
                  "xl:mt-8": index === 3,
                  "xl:h-[350px]": index === 4,
                  "mt-2 sm:m-0": index === 2,
                }
              )}
            >
              <Image
                src={feature.image}
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-auto"
                alt={feature.title}
              />
            </div>

            <div>
              <h5 className="text-[23px] font-matter font-semibold text-primary-100 leading-[1.073] mb-4">
                {feature.title}
              </h5>

              <p className="">{feature.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default FeaturesSection;
