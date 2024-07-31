import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className=" p-8 bg-gray-100 dark:bg-gray-800">{children}</div>;
};

export default Header;
