import React, { ReactNode } from "react";
import Navlinks from "./components/Navlinks";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navlinks />
      {children}
    </div>
  );
};

export default layout;
