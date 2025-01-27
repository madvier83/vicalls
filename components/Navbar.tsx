import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import InstallButton from "./InstallButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed w-full bg-dark-1 px-6 py-6 lg:px-10 lg:pl-8 z-50">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/icons/logo2.svg" alt="logo" width={32} height={32} />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Vicalls
        </p>
      </Link>

      <div className="flex gap-5">
        {/* <div className="hidden sm:block">
          <InstallButton />
        </div> */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* <SignedOut>
          <SignInButton />
        </SignedOut> */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
