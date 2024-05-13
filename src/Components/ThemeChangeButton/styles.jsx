import styled from "styled-components";

export const ButtonChange = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover{
    border-bottom: 1px solid ${props => props.theme.colors.text};
    margin-bottom: -1px;
  }
`;

