"use client";

import React from "react";
import Container from "../container/container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { Input } from "../ui/input";
const FacebookIcon = dynamic(() => import("../icons/facebook"), { ssr: false });
const LinkedinIcon = dynamic(() => import("../icons/linkedin"), { ssr: false });
const YoutubeIcon = dynamic(() => import("../icons/youtube"), { ssr: false });
const InstagramIcon = dynamic(() => import("../icons/instagram"), {
  ssr: false,
});
const XIcon = dynamic(() => import("../icons/x"), { ssr: false });

const menu = [
  {
    label: "Product",
    to: "/product",
  },
  {
    label: "Developers",
    to: "/developers",
  },
  {
    label: "Features",
    to: "/features",
  },
];

const socials = [
  {
    label: "Facebook",
    icon: <FacebookIcon />,
    to: "#",
  },
  {
    label: "Linkedin",
    icon: <LinkedinIcon />,
    to: "#",
  },
  {
    label: "Youtube",
    icon: <YoutubeIcon />,
    to: "#",
  },
  {
    label: "Instagram",
    icon: <InstagramIcon />,
    to: "#",
  },
  {
    label: "Twitter",
    icon: <XIcon />,
    to: "#",
  },
];

const Footer = () => {
  return (
    <footer className="py-[60px]">
      <Container className="flex flex-col min-[1200px]:flex-row justify-between gap-[45px]">
        <div className="w-full max-w-[485px]">
          <picture data-aos="fade-up" className="block mb-9">
            <Image
              src="./logo.svg"
              width={0}
              height={0}
              sizes="100vw"
              alt="logo"
              className="w-[146px] h-auto"
            />
          </picture>

          <p data-aos="fade-up" className="font-medium leading-[1.5] mb-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor quam
            quam adipiscing at est integer
          </p>

          <ul
            data-aos="fade-up"
            className="mb-9 flex items-center gap-5 md:gap-9"
          >
            {socials.map((social, index) => (
              <li key={`social-${index}`}>
                <Link
                  href={social.to}
                  className="text-[#FDFDFD] hover:text-primary transition-all duration-300"
                >
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>

          <div data-aos="fade-up">
            <div className="text-[17px] md:text-[24px] leading-[1.417] text-[#FDFDFD] font-medium">
              Copyright © 2024 - All Rights Reserved.
            </div>
          </div>
        </div>

        <div className="">
          <h5
            data-aos="fade-up"
            className="text-[25px] md:text-[30px] leading-[1.77] text-[#FDFDFD] font-medium mb-2 md:mb-10"
          >
            Menu
          </h5>
          <ul>
            {menu.map((linkItem, index) => (
              <li
                data-aos="fade-up"
                key={`link-${index}`}
                className="mb-1 md:mb-4"
              >
                <Link
                  href={linkItem.to}
                  className="md:text-[24px] leading-[0.83] hover:text-primary"
                >
                  {linkItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up">
          <h5
            data-aos="fade-up"
            className="text-[23px] md:text-[30px] leading-[1.53] text-[#FDFDFD] font-medium mb-5"
          >
            Subscribe so you don’t miss out
          </h5>

          <Input data-aos="fade-up" placeholder="Your email" className="mb-5" />

          <Button data-aos="fade-up">Submit</Button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
