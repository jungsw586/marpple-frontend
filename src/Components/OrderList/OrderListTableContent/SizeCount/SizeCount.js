import React from "react";

export default function SizeCount(props) {
  return (
    <div className="count">
      <div className="size">{props.size}</div>
      <div className="countBox">{props.count}</div>
    </div>
  );
}
