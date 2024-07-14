import { cn } from "@/lib/utils";
import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { ReactNode, useState } from "react";
import { LayoutList, Loader, Users } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const router = useRouter();

  const [showParticipant, setShowParticipant] = useState(false);
  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");

  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = (): ReactNode => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="right" />;
      default:
        return <SpeakerLayout participantsBarPosition="left" />;
    }
  };
  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center gap-2 p-2">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            block: showParticipant,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipant(false)} />
        </div>
      </div>

      <div className="fixed bottom-0 flex w-full items-center justify-center gap-4 flex-wrap mb-4 lg:mb-2">
        <CallControls
          onLeave={() => {
            router.push("/");
          }}
        />

        <DropdownMenu>
          <DropdownMenuTrigger className=" text-white items-center justify-center cursor-pointer rounded-full min-w-12 bg-slate-800 p-2 flex gap-2 text-sm hover:bg-slate-700">
            <LayoutList width={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-dark-1 border-none text-white">
            {["grid", "speaker-left", "speaker-right"].map((item, index) => {
              return (
                <div className="" key={index}>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => setLayout(item as CallLayoutType)}
                  >
                    {item}
                  </DropdownMenuItem>
                </div>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <CallStatsButton />

        <button onClick={() => setShowParticipant((prev) => !prev)}>
          <div className="cursor-pointer rounded-full bg-slate-800 p-2 flex gap-2 text-sm hover:bg-slate-700 ">
            <Users size={16} />
          </div>
        </button>

        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;
