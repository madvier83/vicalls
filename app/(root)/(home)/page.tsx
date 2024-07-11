import MeetingTypeList from "@/components/MeetingTypeList";
import Image from "next/image";
import React from "react";

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString("id-ID", {
    dateStyle: "medium",
  });

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      {/* <h1 className="text-3xl font-bold">Home</h1> */}
      <div className="h-[300px] w-full rounded-xl bg-hero bg-cover border border-slate-800 relative overflow-clip p-8">
        <h1 className="text-sky-50 text-4xl lg:text-7xl font-extrabold">
          {time}
        </h1>
        <h1 className="text-sky-50 text-2xl lg:text-3xl">{date}</h1>
        <Image
          className="w-full h-full object-cover absolute top-0 left-0 -z-10"
          src="/images/hero-background.png"
          alt=""
          width={1080}
          height={303}
        ></Image>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
