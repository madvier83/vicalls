"use client";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface MeetingSetupProps {
  setIsSetupComplete: (value: boolean) => void;
}

function MeetingSetup({ setIsSetupComplete }: MeetingSetupProps) {
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
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl">Setup</h1>
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
          Join with mic and camera off
        </label>

        <DeviceSettings />
      </div>

      <Button
        className="rounded-md bg-blue-1 px-4 py-3"
        onClick={() => {
          call?.join();
          setIsSetupComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
}

export default MeetingSetup;
