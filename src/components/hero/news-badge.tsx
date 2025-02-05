import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React from "react";

const NewBadge = () => {
  return (
    <div
      className={cn(
        "border border-primary-700 rounded-[76px] py-1 px-[5px] flex items-center bg-[#27283380] pr-4 cursor-pointer",
        "gap-[8px] md:gap-[18px]",
        "mx-auto md:mx-0"
      )}
      data-aos="fade-up"
    >
      <span className="bg-foreground text-primary text-[13px] h-[37px] rounded-[76px] min-w-[78px] flex items-center justify-center font-medium">
        News
      </span>
      <div className="text-[14px] md:text-[17px] font-medium">
        Join Incentivized Testnet
      </div>
      <ChevronRight />
    </div>
  );
};

export default NewBadge;
