import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
//Global styles for theme
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;

//Global styles for grid

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  align-items: center;
  justify-content: center;
`;
