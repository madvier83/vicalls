"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React from "react";

const PersonalRoom = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const router = useRouter();
  const meetingId = user?.id;
  const meetingLink = `/meeting/${user?.id}?personal=true`;
  const client = useStreamVideoClient();
  const { call } = useGetCallById(meetingId!);

  const startMeeting = async () => {
    if (!user || !client) return;
    const newCall = client.call("default", meetingId!);
    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
          custom: {
            description: "Personal Meeting",
          },
        },
      });
    }
    router.push(`/meeting/${user?.id}?personal=true`);
  };

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Personal Room</h1>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold mb-1">Topic</h1>
        <p className="capitalize text-slate-300">
          {user?.username + "'s Meeting Room"}
        </p>
        <h1 className="text-xl font-semibold mb-1 mt-5">Meeting ID</h1>
        <p className="capitalize text-slate-300">{meetingId}</p>
        <h1 className="text-xl font-semibold mb-1 mt-5">Invite Link</h1>
        <p className="text-slate-300">{meetingLink}</p>

        <div className="mt-4">
          <Button className="bg-blue-1" onClick={startMeeting}>
            Start Meeting
          </Button>
          <Button
            className="bg-slate-800 ml-2"
            onClick={() => {
              navigator.clipboard.writeText(meetingLink);
              toast({ title: "Link copied" });
            }}
          >
            Copy Invitation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PersonalRoom;
