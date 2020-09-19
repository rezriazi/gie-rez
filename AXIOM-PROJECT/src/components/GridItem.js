import React from "react";
import "./grid.css";

const Label = ({ name, color }) => {
  return <div style={{ backgroundColor: `#${color}` }}>{name}</div>;
};

const GridItem = ({ title, labels }) => {
  const trim = (str) => {
    let i = str.length - 1;
    while (str.charAt(i) !== " ") i--;
    return `${str.substring(0, i)} ...`;
  };
  console.log(`title length${title.length} for ${title}`);
  return (
    <div class="card white">
      <div class="card-content black-text">
        <p class="card-title flow-text">
          {title.length <= 60 ? title : trim(title.substring(0, 60))}
        </p>
      </div>
      <div class="card-action">
        {labels.map((label) => (
          <Label {...label} />
        ))}
      </div>
    </div>
  );
};

export default GridItem;
