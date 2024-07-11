import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed w-full bg-dark-1 px-6 py-4 lg:px-10 z-50">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/icons/logo.svg" alt="logo" width={32} height={32} />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Vicall
        </p>
      </Link>

      <div className="flex gap-5">
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
