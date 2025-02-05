import { ChevronDown } from "lucide-react";
import React, { ReactNode } from "react";

const NavItem = ({ children }: { children: ReactNode }) => {
  return (
    <li>
      <div className="text-[21px] leading-[1.62] font-medium flex items-center gap-2">
        {children} <ChevronDown size={16} strokeWidth={3} />
      </div>
    </li>
  );
};

export default NavItem;
