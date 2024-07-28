import Image from "next/image";
import Link from "next/link";
import CartButton from "./cart-button";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

function Header({ size = 100 }: { size?: number }) {
  return (
    <div className="flex items-center justify-between  w-full  sticky top-0 bg-white z-10  p-2  md:p-3">
      <div className="">
        <Link href={"/"} className="flex items-center space-x-4 ">
          <Image
            src={"/logo.svg"}
            alt="logo"
            height={size}
            width={size}
            className=" object-contain size-7 md:size-10 lg:size-12"
          />

          <h2 className="font-semibold tracking-widest text-sm md:text-base ">
            ManyThings
          </h2>
        </Link>
      </div>

      <div className="flex items-center space-x-3">
        <CartButton />

        <ClerkLoading>
          <Loader className="animate-spin text-muted-foreground size-5" />
        </ClerkLoading>

        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
}

export default Header;
