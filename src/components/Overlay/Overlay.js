import React from "react";

const Overlay = ({ children, show }) => {
  return <div className={show ? "overlay" : "overlay hidden"}>{children}</div>;
};

export default Overlay;
