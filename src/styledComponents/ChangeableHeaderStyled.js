import React, { useEffect, useState } from "react";
import styled from "styled-components";

const H3 = styled.h3`
  & > div {
    transition: 10s cubic-bezier(0, 1.5, 0.5, 1);
    transform: rotate(360deg) scale(10);
    position: relative;
    color: red;
  }
`;

const ChangeableHeader = props => {
  const [index, setIndex] = useState(0);
  const favorites = [
    "BACKEND DEVELOPER",
    "FRONTEND DEVELOPER",
    "SOFTWARE ENGINEER",
    "FOOD LOVER"
  ];

  useEffect(() => {
    console.log("remounted");
    setTimeout(() => {
      const updatedIndex = index <= favorites.length - 2 ? index + 1 : 0;
      setIndex(updatedIndex);
    }, 1000);
  }, [index]);

  return (
    <H3>
      I'M A <div>{favorites[index]}</div>
    </H3>
  );
};

export default ChangeableHeader;
