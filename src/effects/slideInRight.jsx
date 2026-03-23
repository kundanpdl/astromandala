import React from "react";

const SlideInRight = ({ children }) => {
  return (
    <div className="relative inline-block w-full overflow-hidden">
      <span className="animate-slideInRightLoop">{children}</span>
    </div>
  );
};

export default SlideInRight;
