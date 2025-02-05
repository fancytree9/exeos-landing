import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[52px] w-full rounded-md border border-[#2E2E34] bg-[#0D0C15] px-3 py-4 md:text-[20px] shadow-sm transition-colors file:border-0 file:bg-[#0D0C15] md:file:text-[20px] file:font-medium file:text-foreground placeholder:text-[#FDFDFD42] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
