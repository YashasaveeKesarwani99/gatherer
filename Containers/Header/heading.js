import React from "react";
import "./heading.css";
//importing sub headings
import SubHeadings from "../../Components/subHeading/subHeading";
const Heading = () => {
  return (
    <div>
      <div className="head">Gatherer</div>
      <SubHeadings />
    </div>
  );
};

export default Heading;
