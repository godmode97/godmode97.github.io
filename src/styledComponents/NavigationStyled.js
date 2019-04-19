import React from "react";
import styled from "styled-components";

const Navigation = styled.a`
  color: #61dafb;
  &:hover {
    color: #3b6e7b;
  }
`;

export default props => <Navigation {...props} />;
