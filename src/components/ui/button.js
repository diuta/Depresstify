import * as React from "react";

const Button = React.forwardRef(
  ({ className = "", variant = "primary", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
      primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
      secondary: "bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-500",
      outline:
        "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 focus:ring-gray-400",
    };
    return (
      <button
        ref={ref}
        className={`${base} ${
          variants[variant] || variants.primary
        } ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button };
