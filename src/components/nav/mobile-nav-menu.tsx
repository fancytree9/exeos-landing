import React from "react";
import AlignIcon from "../icons/align";
import Image from "next/image";
import { X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { cn } from "@/lib/utils";

const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="block lg:hidden">
      <span
        className="cursor-pointer hover:text-primary"
        onClick={() => setIsOpen(true)}
      >
        <AlignIcon />
      </span>

      <div
        className={cn(
          "min-h-[440px] bg-background fixed top-0 w-full left-0 -translate-y-full transition-all duration-300",
          { "translate-y-0": isOpen }
        )}
      >
        <div className="flex justify-between py-[20px] px-6 h-[96px] items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[72px] h-auto"
          />

          <span className="hover:text-primary" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </span>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value={`nav-product`} className="border-[#181532]">
            <AccordionTrigger className="px-6 text-base leading-[2.125] font-semibold hover:no-underline">
              {`Product`}
            </AccordionTrigger>

            <AccordionContent className="px-6 text-[13px] md:text-[20px] leading-[1.5]">
              menu items
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={`nav-developers`} className="border-[#181532]">
            <AccordionTrigger className="px-6 text-base leading-[2.125] font-semibold hover:no-underline">
              {`Developers`}
            </AccordionTrigger>

            <AccordionContent className="px-6 text-[13px] md:text-[20px] leading-[1.5]">
              menu items
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={`nav-features`} className="border-[#181532]">
            <AccordionTrigger className="px-6 text-base leading-[2.125] font-semibold hover:no-underline">
              {`Features`}
            </AccordionTrigger>

            <AccordionContent className="px-6 text-[13px] md:text-[20px] leading-[1.5]">
              menu items
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default MobileNavMenu;
