import React, { PropsWithChildren } from "react";
import Header from "../components/header";

function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
