import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{ margin: 0;
padding: 0;
box-sizing: border-box;
font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
}

`;

export const Header = styled.header`
  section {
    display: flex;
    justify-content:space-between ;
    align-items: center;
    padding: 1 0 1% 0;
  }

  div {
    display: flex;
    align-items: center;
    margin: 13px 33px 13px 33px;
  }
`;

export const button1 = styled.button`
display: flex;
align-items: center;
background-color: #ffffff;
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
    background-color: red;
  color: white;
  }
`
export const button2 = styled.button`
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
`
export const trocarImagem = styled.section`

img{
cursor: pointer;
&:hover {
  transition: transform 0.3s ease-in-out;
  transform: scale(1.2);
}
}
`
export const wrapper = styled.section`
  background-color: #ffc72c;
  display: flex;

  flex-direction: column;
  span {
    color: red;
  }
  h3 {
    font-size: 13px;
  }
  h2 {
    font-size: 40px;
    color: white;
  }
`;

export const Container = styled.section`
  width: 90%;
`;

export const block = styled.div`
  div {
    display: block;
  }
`;

