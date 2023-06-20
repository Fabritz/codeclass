import React from "react";

const sizeClasses = {
  txtInterBold40: "font-bold font-inter",
  txtInterRegular50Gray400: "font-inter font-normal",
  txtInterRegular23Bluegray80001: "font-inter font-normal",
  txtInterRegular50: "font-inter font-normal",
  txtInterMedium50: "font-inter font-medium",
  txtInterRegular20: "font-inter font-normal",
  txtInterRegular23: "font-inter font-normal",
  txtInterRegular25WhiteA70001: "font-inter font-normal",
  txtInterRegular25: "font-inter font-normal",
  txtInterRegular23Gray80001: "font-inter font-normal",
  txtInterRegular15: "font-inter font-normal",
  txtInterRegular15Gray80001: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
