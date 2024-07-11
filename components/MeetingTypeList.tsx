"use client";
import Image from "next/image";
import React, { useState } from "react";
import MeetingCard from "./MeetingCard";
import MainDialog from "./MainDialog";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meeting, setMeeting] = useState<boolean>(false);
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const { toast } = useToast();

  const [callDetails, setCallDetails] = useState<Call>();

  const { user } = useUser();
  const client = useStreamVideoClient();

  async function createMeeting() {
    console.log("run");
    if (!client || !user) return;

    try {
      if (!values.dateTime) {
        toast({
          title: "Please select a date and time",
        });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Failed to create call!");

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`meeting/${call.id}`);
      }

      toast({
        title: "Meeting successfully created",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to create meeting",
      });
    }
  }

  return (
    <section className="grid grid-cols-1 gap-5 xl:gap-8 sm:grid-cols-2 xl:grid-cols-4">
      <MeetingCard
        color="bg-blue-400"
        image="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => {
          setMeeting(true);
        }}
      />
      <MeetingCard
        color="bg-emerald-400"
        image="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => {}}
      />
      <MeetingCard
        color="bg-teal-400"
        image="/icons/recordings.svg"
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => {}}
      />
      <MeetingCard
        color="bg-purple-400"
        image="/icons/join-meeting.svg"
        title="Join Meeting"
        description="Via invitation link"
        handleClick={() => {}}
      />

      <MainDialog
        open={meeting}
        onClose={() => setMeeting(false)}
        title="Start an instant meeting"
      >
        <div
          className="bg-blue-500 text-white px-6 py-3 text-center text-lg font-semibold rounded-lg cursor-pointer"
          onClick={createMeeting}
        >
          Start Meeting
        </div>
      </MainDialog>
    </section>
  );
};

export default MeetingTypeList;
