import React, { useEffect } from "react";
import M from "materialize-css";
import "./filter.css";

const Filter = ({ handleChange }) => {
  useEffect(() => {
    M.FormSelect.init(document.querySelectorAll("select"), {});
  }, []);
  return (
    <div className="input-field filter">
      <select className="dropFilter" onChange={handleChange}>
        <option className="dropFilter" value="" disabled selected>
          FILTER BY
        </option>
        <option value="all">ALL ISSUES</option>
        <option value="open">OPEN ISSUES</option>
        <option value="closed">CLOSED ISSUES</option>
        <option value="pull">PULL REQUESTS</option>
      </select>
    </div>
  );
};

export default Filter;
