import React from "react";

const TextFadeIn = ({ children = "Sample Text", className = "" }) => {
  return (
    <span className={`animate-fadeInUp inline-block text-[40px]`}>
      {children}
    </span>
  );
};

export default TextFadeIn;
