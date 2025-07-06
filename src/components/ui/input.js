import * as React from "react";

const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`block w-full rounded-md border border-gray-300 px-3 py-2 text-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none ${className}`}
      {...props}
    />
  );
});
Input.displayName = "Input";
export { Input };
