import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-[1532.97px] md:max-w-[1564.97px] px-6 md:px-8 mx-auto w-full", className)}>
      {children}
    </div>
  );
};

export default Container;
