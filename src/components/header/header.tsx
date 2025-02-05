"use client";

import React, { useEffect, useState } from "react";
import Container from "../container/container";
import Image from "next/image";
import { Button } from "../ui/button";
import Nav from "../nav/nav";
import { cn } from "@/lib/utils";
import MobileNavMenu from "../nav/mobile-nav-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "my-5 py-[20px] lg:my-[62px]",
        "w-full",
        "transform-all duration-300",
        "z-50 top-0 fixed",
        {
          "bg-background my-0 lg:my-0": isScrolled,
        }
      )}
    >
      <Container className="flex items-center justify-between">
        <Image
          src="./logo.svg"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[72px] lg:w-[164.31px] h-auto"
        />
        <Nav />
        <div className="flex gap-6 items-center">
          <Button className="">Start now</Button>
          <MobileNavMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
