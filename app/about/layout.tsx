import React from "react";

type layoutProps = {
  children: React.ReactNode;
};

function MyLayout({ children }: layoutProps) {
  return <div>{children}</div>;
}

export default MyLayout;
