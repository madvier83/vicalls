"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import GithubCard from "./GithubCard";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px] text-white">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger2.svg"
            alt=""
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="border-none bg-dark-1 text-white"
        >
          <Link href="/" className="flex items-center gap-4">
            <Image src="/icons/logo2.svg" alt="logo" width={32} height={32} />
            <p className="text-[26px] font-extrabold text-white">Vicalls</p>
          </Link>

          <div className="flex flex-col h-[calc(100vh-72px)] justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;

                  return (
                    <SheetClose asChild key={link.imgUrl}>
                      <Link
                        href={link.route}
                        className={cn(
                          "flex gap-2 items-center p-4 rounded-xl justify-start",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={24}
                          height={24}
                        />
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
            <GithubCard />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
