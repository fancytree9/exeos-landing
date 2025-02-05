import Image from "next/image";
import React from "react";

const FooterLogo = () => {
  return (
    <div className="mt-[120px] flex justify-center px-4">
      <Image
        src={"./exeos.svg"}
        width={0}
        height={0}
        sizes="100vw"
        alt="logo"
        className="w-auto h-auto"
      />
    </div>
  );
};

export default FooterLogo;
