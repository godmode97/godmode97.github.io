import React from "react";
import styled from "styled-components";

const UnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export default props => <UnorderedList {...props} />;
