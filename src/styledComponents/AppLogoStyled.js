import React from "react";
import styled from "styled-components";

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

export default props => <AppLogo {...props} />;
