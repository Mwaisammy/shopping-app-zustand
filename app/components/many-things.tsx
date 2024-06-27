import React from "react";
import LandingPage from "./landing-page";

type Props = {
  size?: number;
};

function ManyThings({ size = 100 }: Props) {
  return (
    <div className="p-5">
      <LandingPage />
    </div>
  );
}

export default ManyThings;
