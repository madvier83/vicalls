import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Image
        src="/icons/loading-circle.svg"
        alt="loading"
        width={52}
        height={52}
      />
    </div>
  );
};

export default Loader;
