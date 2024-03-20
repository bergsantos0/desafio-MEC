import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
`;

export const Main = styled.main`
background-color: #feb706;
padding: 0 0 5% 0;


h1{
color: white;
display: flex;
justify-content: center;
padding: 5%;

}

`;

export const Container = styled.div`
display: flex;
justify-content: space-around;

`

export const Card = styled.div`
 display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 20.5vw;
  height: 50vh;
  background: linear-gradient(to top, #ffffff 50%, rgba(255, 255, 255, 0) 50%);

button{
  display: flex;
align-items: center;
  background-color: #ffc72c;;
  border: none;
  border-radius: 6px;
  color:black;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 16px;
  transition: all 300ms ease-out;
  &:hover {
    padding: 8px 18px;

  color: white;
  }
}

  img {
   
  }
`;