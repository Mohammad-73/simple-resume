import React from "react";

export default function InfoList({ infoList }) {
  return (
    <ul className="info-list">
      {infoList.map((info) => (
        <li key={info.title}>
          <span className="title">{info.title}</span>
          <span className="value">{info.value}</span>
        </li>
      ))}
    </ul>
  );
}
