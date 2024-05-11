import styled from "styled-components";

export const ContainerLoginRegister = styled.div`
  display: flex;
  flex-direction: row; 
  height: 100vh;
`;

export const UiLoginRegister = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10vh;
`;

export const UiHeadLoginRegister = styled.div`
  flex-grow: 1;
`;

export const UiFormLoginRegister = styled.div`
  flex-grow: 2;
`;
 
export const ImageLogin = styled.div `
  flex: 5;
  background-image: url("./src/assets/images/Quimica-Login.png");
  background-size: cover;
  background-position: center;
`;
