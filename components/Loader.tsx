import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Image
        className=""
        src="/icons/loading-circle.svg"
        alt="loading"
        width={52}
        height={52}
      />
    </div>
  );
};

export default Loader;
