import React from "react";

const Icon = ({ url, img, style }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={img} alt="icon" style={style} />
    </a>
  );
};

export default Icon;
