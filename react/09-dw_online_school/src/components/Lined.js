import React from "react";

function Lined({ children }) {
  const styleObject = {
    paddingBottom: "4px",
    boxShadow: "inset 0 -14px #ebebeb",
  };
  return <span style={styleObject}>{children}</span>;
}

export default Lined;
