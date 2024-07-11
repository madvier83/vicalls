"use client";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface MeetingSetupProps {
  setIsSetupComplete: (value: boolean) => void;
}

function MeetingSetup({ setIsSetupComplete }: MeetingSetupProps) {
  const router = useRouter();
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
  const call = useCall();
  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 text-white">
      <h1 className="text-2xl font-bold mb-2">
        Setup Your Camera And Microphone
      </h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-4">
        <label
          // htmlFor="toggle"
          className="flex items-center justify-center gap-2 font-medium"
        >
          <input
            // name="toggle"
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Join with camera and microphone off
        </label>
        <div className="font-sans">
          <DeviceSettings />
        </div>
      </div>

      <div className="flex gap-2 max-w-sm w-full">
        <Button
          className="rounded-md bg-rose-500 bg-opacity-25 hover:bg-rose-500 hover:bg-opacity-100 px-4 py-3 w-1/2 transition-all duration-500"
          onClick={() => {
            router.back();
          }}
        >
          Cancel
        </Button>
        <Button
          className="rounded-md bg-blue-1 hover:bg-blue-1 hover:brightness-110 px-4 py-3 w-1/2 transition-all duration-500"
          onClick={() => {
            call?.join();
            setIsSetupComplete(true);
          }}
        >
          Join Meeting
        </Button>
      </div>
    </div>
  );
}

export default MeetingSetup;
