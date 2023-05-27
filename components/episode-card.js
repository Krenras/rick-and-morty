import React from "react";

export const Episode = ({ name, date, idNum }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center"}}>
      <span>{name}</span>
      <span>{date}</span>
      <span>{idNum}</span>
    </div>
  );
};
