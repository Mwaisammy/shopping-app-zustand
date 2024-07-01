import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

function AuthLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <ClerkLoading>
          <div className="flex items-center space-x-5">
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={100}
              height={100}
              className="size-10"
            />
            <h3 className="font-semibold tracking-widest">Manythings</h3>
          </div>

          <div>
            <Loader2 className="animate-spin text-orange-500" />
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <div className="flex items-center space-x-5">
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={100}
              height={100}
              className="size-10"
            />
            <h3 className="font-semibold tracking-widest">Manythings</h3>
          </div>

          <div>{children}</div>
        </ClerkLoaded>
      </div>
    </div>
  );
}

export default AuthLayout;
