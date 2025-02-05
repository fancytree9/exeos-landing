import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ForwardedRef, forwardRef } from "react";

const NetworkRoleItem = forwardRef(
  (
    {
      image,
      title,
      description,
      imageClassName = "",
    }: {
      image: string;
      title: string;
      description: string;
      imageClassName?: string;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className="flex flex-col justify-between items-center text-center z-[2] min-w-[100vw] min-[1200px]:min-w-fit"
      >
        <div className="h-[92px] flex items-center">
          <Image
            src={image}
            alt={title}
            className={cn("w-auto h-auto relative", imageClassName)}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>

        <div className="w-full">
          <h5 className="m-0 mt-[33px] text-[25px] text-primary-600 font-semibold font-matter leading-[1.18]">
            {title}
          </h5>
          <p className="mt-2.5 whitespace-pre">{description}</p>
        </div>
      </div>
    );
  }
);

export default NetworkRoleItem;
NetworkRoleItem.displayName = "NetworkRoleItem";
