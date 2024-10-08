import React from "react";

type layoutProps = {
  children: React.ReactNode;
};
export const metadata = {
  title: "about",
};

function MyLayout({ children }: layoutProps) {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export default MyLayout;
