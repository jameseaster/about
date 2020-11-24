import * as React from "react";

interface Props {
  url: string,
  img: string,
  style: object,
}

const Icon = ({ url, img, style }: Props) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={img} alt="icon" style={style} />
    </a>
  );
};

export default Icon;
