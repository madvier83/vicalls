import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface MeetingCardProps {
  color: string;
  image: string;
  title: string;
  description: string;
  handleClick: () => void;
}

const MeetingCard = ({
  color,
  image,
  title,
  description,
  handleClick,
}: MeetingCardProps) => {
  return (
    <div
      // bg-blue-400 bg-emerald-400 bg-purple-400 bg-teal-400
      className={cn(
        "p-6 md:p-8 flex flex-col justify-between min-h-[264px] rounded-xl cursor-pointer hover:brightness-90 transition-all duration-500",
        color
      )}
      onClick={() => handleClick()}
    >
      <div className="flex items-center justify-center size-12 bg-white bg-opacity-15 rounded-lg">
        <Image src={image} alt="" width={28} height={28} />
      </div>
      <div className="">
        <h1 className="text-2xl drop-shadow font-bold mb-2">{title}</h1>
        <p className="drop-shadow">{description}</p>
      </div>
    </div>
  );
};

export default MeetingCard;
