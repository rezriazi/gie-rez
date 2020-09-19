import React from "react";
import GridItem from "./GridItem";
import "./grid.css";

const Grid = ({ issues }) => {
  return (
    <div className="flexgrid">
      {issues.map((issue) => (
        <GridItem {...issue} />
      ))}
    </div>
  );
};

export default Grid;
