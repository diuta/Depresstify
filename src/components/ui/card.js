import * as React from "react";

function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card };
