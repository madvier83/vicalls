"use client";
import Image from "next/image";
import React from "react";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

interface CallsCardProps {
  icon: string;
  title: string;
  description: string;
  type: string;
  link: string;
}
const CallsCard = (props: CallsCardProps) => {
  const router = useRouter();
  const { toast } = useToast();
  return (
    <div className="bg-dark-1 rounded-lg min-h-32 flex flex-col p-8">
      <Image
        src={props.icon || "/icons/upcoming.svg"}
        alt=""
        width={32}
        height={32}
      ></Image>
      <h1 className="text-2xl font-bold mt-8">{props.title}</h1>
      <p className="mt-2">{props.description}</p>

      {props.type == "upcoming" && (
        <div className="flex gap-2 justify-end mt-8">
          <div
            onClick={() => {
              router.push(window.location.protocol + "//" + props.link);
            }}
            className="bg-blue-1 px-4 py-3 rounded-lg cursor-pointer"
          >
            Start
          </div>
          <div
            className="bg-slate-800 px-4 py-3 rounded-lg cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(props.link);
              toast({ title: "Link copied" });
            }}
          >
            Copy invitation
          </div>
        </div>
      )}

      {props.type == "recordings" && (
        <div className="flex gap-2 justify-end mt-8">
          <a
            href={props.link}
            target="_blank"
            className="bg-blue-1 px-4 py-3 rounded-lg cursor-pointer"
          >
            View Recordings
          </a>

          <div
            className="bg-slate-800 px-4 py-3 rounded-lg cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(props.link);
              toast({ title: "Link copied" });
            }}
          >
            Copy Link
          </div>
        </div>
      )}
    </div>
  );
};

export default CallsCard;
