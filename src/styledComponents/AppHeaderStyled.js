import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #2d3951;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  line-height: 40px;
  & > h1,
  h3 {
    color: white;
    margin: 0px !important;
  }
  & > div > * {
    display: inline-block;
  }
`;

export default props => <Div {...props} />;
