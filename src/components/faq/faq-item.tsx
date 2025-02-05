import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FaqItem = ({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) => {
  return (
    <AccordionItem
      value={`item-${index}`}
      className="bg-[#0E0C1BBD] mb-3 rounded-[21px] border-none"
    >
      <AccordionTrigger className="py-6 md:py-12 px-[20px] text-left md:px-[60px] text-[14px] md:text-[23px] leading-[1.82] font-semibold">
        {title}
      </AccordionTrigger>
      <AccordionContent className="px-[20px] md:px-[60px] pb-6 md:pb-12 text-[13px] md:text-[20px] leading-[1.5]">
        {description}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqItem;
