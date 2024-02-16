import React from "react";

const CommonComponent = ({
  textAlign,
  height1,
  width1,
  height2,
  width2,
  flexDirection,
  text,
}) => {
  const commontext = {
    "font-size": "48px",
    "text-align": textAlign,
  };
  const borderBottom = {
    display: "flex",
    "align-items": "center",
    "justify-content": flexDirection,
  };
  const thickBorder = {
    height: height1,
    width: width1,
    background: "#A9A9A9",
    "border-radius": "4px",
  };

  const thinBorder = {
    height: height2,
    width: width2,
    background: "#A9A9A9",
    "border-radius": "4px",
  };

  return (
    <>
      <div className="common-text" style={commontext}>
        <div className="border-text">{text}</div>
        <div className="border-bottomm" style={borderBottom}>
          <div className="thick" style={thickBorder}></div>
          <div className="thin" style={thinBorder}></div>
        </div>
      </div>
    </>
  );
};

export default CommonComponent;
