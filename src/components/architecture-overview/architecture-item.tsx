import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const ArchitectureItem = ({
  children,
  active,
  onClick,
  index,
  description,
}: {
  index: number;
  children: ReactNode;
  active: boolean;
  description: string;
  onClick: () => void;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-6 cursor-pointer",
        "transition-all duration-300",
        {
          "text-[#262626]": !active,
        }
      )}
      data-aos="fade-up"
      onClick={onClick}
    >
      <AccordionItem value={`item-${index}`} className="p-0 border-none w-full">
        <AccordionTrigger hideIcon className="gap-6 hover:no-underline justify-normal">
          <span
            className={cn("block w-2 h-[35px] bg-[#262626] rounded-md", {
              "bg-architecture": active,
            })}
          />
          {children}
        </AccordionTrigger>
        <AccordionContent className="md:hidden">{description}</AccordionContent>
      </AccordionItem>
    </div>
  );
};

export default ArchitectureItem;
