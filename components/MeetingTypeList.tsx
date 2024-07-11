"use client";
import Image from "next/image";
import React, { useState } from "react";
import MeetingCard from "./MeetingCard";
import MainDialog from "./MainDialog";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import ReactDatePicker from "react-datepicker";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meeting, setMeeting] = useState<boolean>(false);
  const [scheduleMeeting, setScheduleMeeting] = useState<boolean>(false);
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

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;

  return (
    <section className="grid grid-cols-1 gap-5 xl:gap-8 sm:grid-cols-2 xl:grid-cols-4">
      <MeetingCard
        color="bg-blue-400"
        image="/icons/add.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => {
          setMeeting(true);
        }}
      />
      <MeetingCard
        color="bg-emerald-400"
        image="/icons/upcoming2.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => {
          setScheduleMeeting(true);
        }}
      />
      <MeetingCard
        color="bg-teal-400"
        image="/icons/recordings2.svg"
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => {
          router.push("/recordings");
        }}
      />
      <MeetingCard
        color="bg-purple-400"
        image="/icons/person-add.svg"
        title="Join Meeting"
        description="Via invitation link"
        handleClick={() => {
          // router.push("/personal-room");
        }}
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

      {!callDetails ? (
        <MainDialog
          open={scheduleMeeting}
          onClose={() => setScheduleMeeting(false)}
          title="Schedule a meeting"
        >
          <div className="flex flex-col">
            <label>
              Description
              <Textarea
                className="bg-dark-2 border-none my-4 focus-visible:ring-0 focus-visible:ring-offset-0"
                onChange={(e) =>
                  setValues((prev) => {
                    return { ...prev, description: e.target.value };
                  })
                }
              ></Textarea>
            </label>
            <label className="w-full">
              <p>Select Date And Time</p>
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat={"d MMMM yyyy h:mm aa"}
              className="w-full rounded bg-dark-2 p-2 focus:outline-none mt-4"
              onChange={(date) =>
                setValues((prev) => {
                  return { ...prev, dateTime: date! };
                })
              }
            />
            <div
              className="bg-blue-500 text-white px-6 py-3 text-center text-lg font-semibold rounded-lg cursor-pointer mt-8"
              onClick={createMeeting}
            >
              Start Meeting
            </div>
          </div>
        </MainDialog>
      ) : (
        <MainDialog
          open={scheduleMeeting}
          onClose={() => setScheduleMeeting(false)}
          title="Meeting Created"
        >
          <div className="flex items-center justify-center mb-12">
            <Image
              className=""
              src="/icons/checked.svg"
              alt="checked"
              width={128}
              height={128}
            />
          </div>
          <div
            className="bg-blue-500 text-white px-6 py-3 text-center text-lg font-semibold rounded-lg cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(meetingLink);
              toast({ title: "Link copied" });
            }}
          >
            Copy Meeting Link
          </div>
        </MainDialog>
      )}
    </section>
  );
};

export default MeetingTypeList;
