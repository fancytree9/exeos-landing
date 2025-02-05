"use client";

import React, { useState } from "react";
import Container from "../container/container";
import ArchitectureItem from "./architecture-item";
import { Accordion } from "../ui/accordion";

const list = [
  {
    title: "Authentication and Authorization using DID",
    description:
      "Blockchain-based decentralized identity (DID) systems can manage user and node authentication, enabling permissionless access without relying on centralized identity providers. Public key infrastructure (PKI) can be managed through blockchain, ensuring privacy while authenticating users and nodes securely.",
  },
  {
    title: "Microtransactions",
    description: "Microtransactions description",
  },
  {
    title: "Decentralized Governance",
    description: "Decentralized Governance: description",
  },
  {
    title: "Quality of Service (QoS)",
    description: "Decentralized Governance: description",
  },
  {
    title: "Network Configuration",
    description: "Network Configuration description ",
  },
  {
    title: "Audit Trails",
    description: "Audit Trails: description",
  },
  {
    title: "Data Encryption",
    description: "Data Encryption",
  },
  {
    title: "Rate Limiting and Fair Use",
    description: "Rate Limiting and Fair Use",
  },
];

const ArchitectureOverviewSection = () => {
  const [active, setActive] = useState<number>(0);
  const [description, setDescription] = useState<string>(
    list[active].description
  );

  return (
    <section className="overflow-hidden">
      <Container>
        <h5
          data-aos="fade-up"
          className="text-[25px] md:text-[45px] leading-[1.073] mb-12 font-matter text-center lg:text-left"
        >
          Exeos Architecture Blockchain <br /> for State Management
        </h5>
        <div className="flex w-full flex-col md:flex-row items-center gap-10">
          <Accordion type="single" collapsible className="flex-1 w-full">
            {list.map((item, index) => (
              <ArchitectureItem
                key={`ArchitectureItem${index}`}
                index={index}
                active={active === index}
                description={item.description}
                onClick={() => {
                  setActive(index);
                  setDescription(item.description);
                }}
              >
                {item.title}
              </ArchitectureItem>
            ))}
          </Accordion>

          <div
            data-aos="fade-up"
            className="hidden md:block flex-1 w-full text-center lg:Text-left animate-fade-up"
            key={`description-${active}`}
          >
            {description}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ArchitectureOverviewSection;
