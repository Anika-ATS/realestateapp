import React from "react";
import Header from "./_components/Header";

const Provider = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div className="mt-32">{children}</div>
    </div>
  );
};

export default Provider;
