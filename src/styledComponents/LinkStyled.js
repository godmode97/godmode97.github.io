import React from "react";
import styled from "styled-components";

const Link = styled.a`
  color: red;
  &:active {
    color: white;
  }
  &:focus {
    color: yellow;
    &::before {
      content: "";
      padding: 10px;
      border-bottom: 2px solid red;
    }
  }
`;

export default props => <Link tabIndex={0} {...props} />;
