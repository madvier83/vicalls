// @ts-nocheck

"use client";
import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CallsCard from "./CallsCard";
import Loader from "./Loader";
import { useToast } from "./ui/use-toast";

interface CallListParams {
  type: "upcoming" | "ended" | "recordings";
}

const CallList = ({ type }: CallListParams) => {
  const router = useRouter();
  const { toast } = useToast();
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "recordings":
        return recordings;
      case "upcoming":
        return upcomingCalls;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No previous calls";
      case "recordings":
        return "No recordings";
      case "upcoming":
        return "No upcoming calls";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const callData = await Promise.all(
          callRecordings.map((meeting) => meeting.queryRecordings())
        );

        const recordings = callData
          .filter((call) => call.recordings.length > 0)
          .flatMap((call) => call.recordings);

        setRecordings(recordings);
      } catch (error) {
        console.log(error);
        toast({ title: "Loading failed, try again" });
      }
    };

    if (type == "recordings") {
      fetchRecordings();
    }
  }, [type, callRecordings]);

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();
  if (isLoading)
    return (
      <div className="min-h-52">
        <Loader />
      </div>
    );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      {calls && calls.length > 0 ? (
        calls.map((call: Call | CallRecording) => {
          return (
            <CallsCard
              key={(call as Call).id || (call as CallRecording).url}
              icon={
                type === "ended"
                  ? "/icons/previous2.svg"
                  : type === "recordings"
                  ? "/icons/recordings2.svg"
                  : "/icons/upcoming2.svg"
              }
              title={
                (call as Call).state?.custom.description.substring(0, 20) ||
                (call as CallRecording).filename.substring(0, 20) ||
                "No description"
              }
              description={
                (call as Call).state?.startsAt?.toLocaleString() ||
                (call as CallRecording).start_time.toLocaleString() ||
                "Undefined"
              }
              type={type}
              link={
                type == "recordings"
                  ? (call as CallRecording).url
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                      (call as Call)?.id
                    }`
              }
            />
          );
        })
      ) : (
        <h1>{noCallsMessage}</h1>
      )}

      {/* <CallsCard /> */}
    </div>
  );
};

export default CallList;
